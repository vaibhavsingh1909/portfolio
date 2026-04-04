import { useState } from 'react';
import './WorkSection.css';
import { ArrowUpRight, Lock, Plus, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Continuous Compliance",
    desc: "Transforming complex data privacy workflows into intuitive, efficient interfaces across a large multi-product SaaS portfolio. Led design direction with engineering across India, US, and EMEA.",
    tags: ["SaaS", "UX/UI", "Design Systems", "Accessibility"],
    company: "Perforce Software",
    year: "2024 – Present",
    nda: true,
  },
  {
    id: 2,
    title: "B2B Fintech Credit Platform",
    desc: "End-to-end design of underwriting, onboarding, and risk workflows for a credit line product serving SMEs across India. Delivered mobile-first experiences that measurably increased user activation.",
    tags: ["Fintech", "Mobile-first", "Interaction Design"],
    company: "Credflow",
    year: "2024",
    nda: true,
  },
  {
    id: 3,
    title: "Crypto Exchange & Web3 Flows",
    desc: "Built a full cryptocurrency exchange from scratch — trading flows, token discovery, and end-to-end Web3 purchase experiences for my firm helping them enter the digital assets market.",
    tags: ["Web3", "Info Architecture", "UI Design"],
    company: "Hatio Tech",
    year: "2021 – 2023",
    link: "https://www.figma.com/proto/..."
  },
  {
    id: 4,
    title: "Fintech Wallet Payout Module",
    desc: "Designed payout and bulk transfer flows for a consumer payment ecosystem. Shaped IA, wireframes, and final UI across platforms simultaneously.",
    tags: ["Payments", "Cross-platform", "UX Writing"],
    company: "Hatio Tech",
    year: "2021 – 2023",
    link: "https://www.figma.com/proto/..."
  }
];

export default function WorkSection() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="work" className="editorial-section col-span-12 reveal visible">
      <div className="section-heading-row">
        <h3 className="section-title">Selected Work</h3>
        <span className="section-meta">04 Features</span>
      </div>
      
      <div className="work-columns">
        {projects.map((proj, idx) => {
          const isOpen = openId === proj.id;
          return (
            <article 
              key={proj.id} 
              className={`work-article ${isOpen ? 'expanded' : ''} hover-target`}
              onClick={() => toggle(proj.id)}
            >
              <div className="work-header">
                <span className="work-number">No. 0{idx + 1}</span>
                <h4 className="work-headline">{proj.title}</h4>
                <div className="work-toggle-icon">
                  {isOpen ? <X size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
                </div>
              </div>
              
              <div className="work-content">
                <div>
                <p className="work-desc">{proj.desc}</p>

                <div className="work-tags">
                  {proj.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                
                <div className="work-footer">
                  <div className="work-credits">
                    <span className="company">{proj.company}</span>
                    <span className="year">{proj.year}</span>
                  </div>
                  
                  <div className="work-actions">
                    {proj.nda ? (
                      <span className="nda-badge"><Lock size={12} /> Under NDA</span>
                    ) : (
                      <a href={proj.link} target="_blank" rel="noreferrer" className="read-more" onClick={e => e.stopPropagation()}>
                        Read Full Story <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
