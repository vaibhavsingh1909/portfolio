import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import WorkSection from './components/WorkSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CryptoExchangeCase from './pages/CryptoExchangeCase';
import PayoutModuleCase from './pages/PayoutModuleCase';
import LosCase from './pages/LosCase';

function getRoute() {
  return window.location.hash || '#/';
}

function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main className="wrap" id="main">
        <Hero />
        <WorkSection />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (route === '#/work/crypto-exchange') {
    return <CryptoExchangeCase />;
  }
  if (route === '#/work/payout-module') {
    return <PayoutModuleCase />;
  }
  if (route === '#/work/los') {
    return <LosCase />;
  }
  return <Home />;
}
