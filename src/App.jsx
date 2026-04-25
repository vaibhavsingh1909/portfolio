import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import WorkSection from './components/WorkSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="wrap">
        <Hero />
        <Experience />
        <WorkSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
