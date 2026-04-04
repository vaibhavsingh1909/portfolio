import { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const cursorRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .hover-target')) {
        cursorRef.current?.classList.add('hovering');
      } else {
        cursorRef.current?.classList.remove('hovering');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    const observer = new IntersectionObserver(entries => {
      entries.forEach((en, i) => {
        if (en.isIntersecting) { 
          setTimeout(() => en.target.classList.add('visible'), i * 80); 
          observer.unobserve(en.target); 
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="newspaper-layout">
      <div className="cursor-dot" ref={cursorRef}></div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container">
        <Hero />
        <WorkSection />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
