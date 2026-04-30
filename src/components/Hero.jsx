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

              {/* Claude pill — text only */}
              <div className={`tool-pill pill-claude ${activeBubble === 'claude' ? 'show' : ''}`}>
                <span>Designing with Claude</span>
              </div>

              {/* Figma pill — text only */}
              <div className={`tool-pill pill-figma ${activeBubble === 'figma' ? 'show' : ''}`}>
                <span>Crafted in Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
