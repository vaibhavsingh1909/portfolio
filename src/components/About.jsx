import './About.css';

export default function About() {
  return (
    <section id="about" className="editorial-section about-section col-span-12 reveal visible">
      <div className="section-heading-row">
        <h3 className="section-title">About the Author</h3>
        <span className="section-meta">Profile</span>
      </div>
      
      <div className="about-editorial-container">

        <div className="about-grid">
          
          <div className="about-left-col">
            <div className="about-text-content">
              <p className="dropcap">
                Product designer based in <em>Pune, India</em>, with a background spanning SaaS, fintech, 
                compliance, and Web3. I work at the intersection of UX strategy and interaction craft.
              </p>
              
              <blockquote className="inline-pull-quote">
                "The best interface is the one you forget you're using."
              </blockquote>

              <p>
                I care about accessibility, scalable design systems, and UX writing that makes interfaces 
                feel like they were built by someone who respects your time. Trained as a mechanical engineer, 
                I bring a systems-thinking approach — useful for decomposing complex problems before reaching 
                for tools.
              </p>
              <p className="highlight-para">
                Currently exploring AI-powered design tooling — Figma Make, Claude Code, Lovable — not to 
                replace craft, but to compress the distance between idea and execution.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-block">
                <div className="stat-num">4+</div>
                <div className="stat-lab">Yrs Exp</div>
              </div>
              <div className="stat-block">
                <div className="stat-num">7+</div>
                <div className="stat-lab">Shipped</div>
              </div>
              <div className="stat-block">
                <div className="stat-num">3</div>
                <div className="stat-lab">Sectors</div>
              </div>
              <div className="stat-block">
                <div className="stat-num">∞</div>
                <div className="stat-lab">Iter.</div>
              </div>
            </div>
          </div>
          
          <aside className="about-sidebar">
            <div className="sidebar-group">
              <h4 className="module-title">Disciplines</h4>
              <ul className="module-list">
                <li>Product Design <span className="leader"></span></li>
                <li>UX / UI Design <span className="leader"></span></li>
                <li>Interaction Design <span className="leader"></span></li>
                <li>UX Writing <span className="leader"></span></li>
                <li>Design Systems <span className="leader"></span></li>
                <li>Info Architecture <span className="leader"></span></li>
              </ul>
            </div>
            
            <div className="sidebar-group apparatus-group">
              <h4 className="module-title">Apparatus</h4>
              <ul className="module-list">
                <li>Figma & Make <span className="leader"></span></li>
                <li>Claude Code <span className="leader"></span></li>
                <li>Balsamiq & InVision <span className="leader"></span></li>
                <li>Adobe XD <span className="leader"></span></li>
              </ul>
            </div>
          </aside>
          
        </div>
      </div>
    </section>
  );
}
