import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import './Hero.css';

export default function Hero() {
  const lottieContainer = useRef(null);
  const [activeBubble, setActiveBubble] = useState(null);
  const [showBurst, setShowBurst] = useState(false);
  
  useEffect(() => {
    if (!lottieContainer.current) return;
    
    const anim = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/Hammering.json'
    });

    const IMPACT_FRAME = 9;
    let hitCount = 0;
    let hideTimer = null;
    let burstTimer = null;
    let triggered = false;

    anim.addEventListener('enterFrame', function(e) {
      const frame = Math.floor(e.currentTime);
      if (frame === IMPACT_FRAME && !triggered) {
        triggered = true;
        clearTimeout(hideTimer);
        clearTimeout(burstTimer);
        const isEven = hitCount % 2 === 0;
        
        setActiveBubble(isEven ? 'claude' : 'figma');
        setShowBurst(true);
        hitCount++;
        
        burstTimer = setTimeout(() => {
          setShowBurst(false);
        }, 500);
        
        hideTimer = setTimeout(() => {
          setActiveBubble(null);
        }, 700);
      }
      
      if (frame < IMPACT_FRAME || frame > IMPACT_FRAME + 2) {
        triggered = false;
      }
    });

    return () => {
      anim.destroy();
      clearTimeout(hideTimer);
      clearTimeout(burstTimer);
    };
  }, []);

  return (
    <section id="hero" className="editorial-section col-span-12 reveal visible">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">Vaibhav<br/><span className="accent-text">Singh</span></h1>
          <p className="hero-role">Product Designer</p>
          <p className="hero-description">
            Crafting end-to-end digital experiences across SaaS, fintech, compliance, and Web3. 
            I simplify complex workflows, build design systems, and ship interfaces that feel both 
            intuitive and considered.
          </p>
          <div className="hero-meta">
            <span className="availability-dot"></span>
            <span>Available for Opportunities</span>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="anim-wrap">
            <div ref={lottieContainer} className="lottie-player-bg"></div>

            {/* Impact zone — pill + sparks at exact hammer hit point */}
            <div className="impact-zone">
              {/* Spark burst */}
              <div className={`impact-burst ${showBurst ? 'active' : ''}`}>
                <span className="burst-dot burst-1"></span>
                <span className="burst-dot burst-2"></span>
                <span className="burst-dot burst-3"></span>
                <span className="burst-dot burst-4"></span>
                <span className="burst-dot burst-5"></span>
                <span className="burst-dot burst-6"></span>
                <span className="burst-dot burst-7"></span>
                <span className="burst-dot burst-8"></span>
              </div>

              {/* Claude pill — orange with logo + text */}
              <div className={`tool-pill pill-claude ${activeBubble === 'claude' ? 'show' : ''}`}>
                <svg className="pill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 2.5c-3.7 0-6.5 2.1-7.3 5.2-.1.3-.1.6-.1.8 0 .6.2 1.1.6 1.4-.4.3-.6.8-.6 1.4 0 .3.1.6.1.8C7 15.3 9.8 17.5 13.5 17.5h.5v2.7c0 .5.4.8.8.6l3.8-2.2c1.6-.9 2.9-2.5 3.2-4.4.1-.3.1-.6.1-.9V9.7c0-.3 0-.6-.1-.9-.7-3.7-4-6.3-8.3-6.3z" fill="#D97757"/>
                  <path d="M8.5 10.8c0-1.7 1.4-3 3-3s3 1.3 3 3-1.4 3-3 3-3-1.3-3-3z" fill="#fff"/>
                </svg>
                <span>Designing with Claude</span>
              </div>

              {/* Figma pill — purple with logo + text */}
              <div className={`tool-pill pill-figma ${activeBubble === 'figma' ? 'show' : ''}`}>
                <svg className="pill-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 28c2.21 0 4-1.79 4-4v-4h-4a4 4 0 0 0 0 8z" fill="#0ACF83"/>
                  <path d="M7 16a4 4 0 0 1 4-4h4v8h-4a4 4 0 0 1-4-4z" fill="#A259FF"/>
                  <path d="M7 8a4 4 0 0 1 4-4h4v8h-4a4 4 0 0 1-4-4z" fill="#F24E1E"/>
                  <path d="M15 4h4a4 4 0 0 1 0 8h-4V4z" fill="#FF7262"/>
                  <path d="M25 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" fill="#1ABCFE"/>
                </svg>
                <span>Crafted in Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
