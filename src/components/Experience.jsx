import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="editorial-section col-span-12 reveal visible">
      <div className="section-heading-row">
        <h3 className="section-title">Career History</h3>
      </div>
      
      <div className="experience-list">
        <div className="exp-row">
          <div className="exp-meta">
            <span className="exp-date">Aug 2024 — Present</span>
            <span className="exp-status">Current</span>
          </div>
          <div className="exp-details">
            <h4 className="exp-role">Product Designer</h4>
            <span className="exp-company">Perforce Software (Delphix Portfolio)</span>
            <ul className="exp-points">
              <li>Designing across a large multi-product SaaS portfolio; major redesign initiatives for usability and accessibility.</li>
              <li>Lead design for Continuous Compliance — transforming complex data privacy workflows into intuitive interfaces.</li>
              <li>Collaborated with PMs and engineering across India, US, and EMEA.</li>
              <li>Strengthened internal design system with reusable patterns and unified components.</li>
              <li>Created Figma plugins to improve workflow efficiency.</li>
            </ul>
          </div>
        </div>

        <div className="exp-row">
          <div className="exp-meta">
            <span className="exp-date">Jun 2024 — July 2024</span>
          </div>
          <div className="exp-details">
            <h4 className="exp-role">Product Designer</h4>
            <span className="exp-company">Credflow</span>
            <ul className="exp-points">
              <li>Designed core journeys for B2B fintech products offering credit lines to SMEs.</li>
              <li>End-to-end design for underwriting, onboarding, and risk workflows.</li>
              <li>Delivered mobile-first experiences that increased user activation.</li>
            </ul>
          </div>
        </div>

        <div className="exp-row">
          <div className="exp-meta">
            <span className="exp-date">Jul 2021 — May 2023</span>
          </div>
          <div className="exp-details">
            <h4 className="exp-role">Associate UX/UI Designer</h4>
            <span className="exp-company">Hatio Tech (Billdesk Subsidiary)</span>
            <ul className="exp-points">
              <li>Designed features for Billdesk's operations and internal SaaS platforms.</li>
              <li>Built a cryptocurrency exchange from scratch — trading, token discovery, Web3 experiences.</li>
              <li>Shaped IA, wireframes, and UI for a consumer fintech product across web, iOS, Android.</li>
              <li>Ran prototype tests to validate usability and interaction patterns.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="education-box">
        <h4 className="edu-title">Education & Certifications</h4>
        <div className="edu-items">
          <span className="edu-item">BE — Mechanical Engineering</span>
          <span className="edu-item">Interaction Design Foundation</span>
          <span className="edu-item">Product Management Certification</span>
        </div>
      </div>
    </section>
  );
}
