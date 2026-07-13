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
import CreditLineCase from './pages/CreditLineCase';
import DownloadCase from './pages/DownloadCase';
import { CaseLockScreen, isCaseUnlocked } from './components/CaseLock';

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

// The download case study is password-protected: direct visits to its URL get
// the lock screen until the session is unlocked (see components/CaseLock.jsx).
function GatedDownloadCase() {
  const [unlocked, setUnlocked] = useState(isCaseUnlocked());
  if (!unlocked) {
    return <CaseLockScreen onUnlock={() => setUnlocked(true)} />;
  }
  return <DownloadCase />;
}

// Page routes swap the rendered component; section anchors (#work, #about…)
// scroll within the current page and must NOT trigger a re-render or
// scroll-to-top, otherwise they fight the browser's native anchor scroll.
function isPageRoute(hash) {
  return hash === '' || hash === '#/' || hash.startsWith('#/');
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHash = () => {
      const next = getRoute();
      // Ignore in-page section anchors — let the browser scroll natively.
      if (!isPageRoute(next)) return;
      setRoute(next);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (route === '#/work/enterprise-downloads') {
    return <GatedDownloadCase />;
  }
  if (route === '#/work/crypto-exchange') {
    return <CryptoExchangeCase />;
  }
  if (route === '#/work/payout-module') {
    return <PayoutModuleCase />;
  }
  if (route === '#/work/los') {
    return <LosCase />;
  }
  if (route === '#/work/credit-line') {
    return <CreditLineCase />;
  }
  return <Home />;
}
