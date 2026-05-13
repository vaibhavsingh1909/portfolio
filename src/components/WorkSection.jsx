import { useState } from 'react';
import { ChevronDown, X, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Continuous Compliance',
    company: 'Perforce Software',
    year: '2024 — Present',
    desc: 'Designing enterprise-grade privacy workflows for compliance teams who need accuracy, control, and speed. I lead interaction design, improve reusable patterns, and partner tightly with PM and engineering across regions.',
    tags: ['Enterprise SaaS', 'Compliance', 'Design Systems', 'Accessibility'],
    nda: true,
  },
  {
    id: 2,
    title: 'B2B Fintech Credit Platform',
    company: 'Credflow',
    year: '2024',
    desc: 'Owned UX for a credit-line product serving Indian SMEs, from onboarding and underwriting to risk review. The design balanced business eligibility, financial clarity, and low-friction mobile activation.',
    tags: ['B2B Fintech', 'Onboarding', 'Risk UX'],
    nda: true,
  },
  {
    id: 3,
    title: 'Neobanking Platform for SMBs',
    company: 'Hatio Tech',
    year: '2021 — 2023',
    desc: 'Designed a 0 to 1 business banking experience across onboarding, alerts, invoicing, and account verification. Built cross-platform patterns that made sensitive financial setup feel clear and credible.',
    tags: ['Neobanking', '0 to 1', 'Cross-platform UX'],
    caseStudy: '#/work/crypto-exchange',
  },
  {
    id: 4,
    title: 'Fintech Wallet Payout Module',
    company: 'Hatio Tech',
    year: '2021 — 2023',
    desc: 'Designed payout and bulk-transfer flows for a payment ecosystem. I shaped the IA, wireframes, UX writing, and final UI across web, iOS, and Android so finance tasks felt fast and safe.',
    tags: ['Payments', 'Cross-platform', 'UX Writing'],
    caseStudy: '#/work/payout-module',
  },
];

function ProjectAction({ project }) {
  if (project.nda) {
    return <span className="work-cta-muted">Under NDA — details on request</span>;
  }
  if (project.caseStudy) {
    return (
      <a href={project.caseStudy} className="work-cta-link">
        Read full story <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
      </a>
    );
  }
  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noreferrer" className="work-cta-link">
        Read full story <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
      </a>
    );
  }
  return <span className="work-cta-muted">Available on request</span>;
}

export default function WorkSection() {
  const [openId, setOpenId] = useState(1);

  return (
    <section id="work">
      <h2 className="section-label">Selected Work</h2>
      <p className="section-intro">
        Four projects that show the range: regulated SaaS, credit products, digital assets, and
        payment operations. Public case studies are selective; NDA work is available in conversation.
      </p>
      <div className="work-list">
        {projects.map((p, idx) => {
          const open = openId === p.id;
          const num = String(idx + 1).padStart(2, '0');
          const close = () => setOpenId(null);
          const expand = () => setOpenId(p.id);

          return (
            <article className={`work-item ${open ? 'is-open' : ''}`} key={p.id}>
              {open ? (
                <div className="work-card" id={`work-${p.id}`}>
                  <div className="work-card-head">
                    <span className="work-num">No. {num}</span>
                    <h3 className="work-card-title">{p.title}</h3>
                    <button
                      type="button"
                      className="work-close"
                      onClick={close}
                      aria-label={`Close ${p.title}`}
                    >
                      <X size={18} strokeWidth={1.5} aria-hidden="true" />
                    </button>
                  </div>

                  <p className="work-card-desc">{p.desc}</p>

                  <div className="work-tags">
                    {p.tags.map((t) => (
                      <span className="work-tag" key={t}>{t}</span>
                    ))}
                  </div>

                  <div className="work-card-footer">
                    <span className="work-card-meta">
                      <span>{p.company}</span>
                      <span aria-hidden="true">·</span>
                      <span>{p.year}</span>
                    </span>
                    <ProjectAction project={p} />
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  className="work-row"
                  onClick={expand}
                  aria-expanded={open}
                  aria-controls={`work-${p.id}`}
                >
                  <span className="work-num work-num-row">No. {num}</span>
                  <span className="work-row-main">
                    <span className="work-title">{p.title}</span>
                    <span className="work-company">{p.company}</span>
                  </span>
                  <span className="work-year">{p.year}</span>
                  <ChevronDown
                    size={18}
                    strokeWidth={1.5}
                    className="work-chevron"
                    aria-hidden="true"
                  />
                </button>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
