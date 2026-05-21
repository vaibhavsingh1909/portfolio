import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Loan Origination System',
    company: 'Credflow',
    year: '2024',
    desc: 'Designed an internal credit workflow for Sales, Ops, and Underwriting, reducing ambiguity across onboarding, document review, and application status.',
    eyebrow: 'Credit Workflow Design',
    category: 'Fintech / Internal Tool',
    cardColor: '#e8ddca',
    inkColor: '#11100e',
    media: '/LOS/Team%20Lead%20Screen/Loan%20Applications%20-%20Sales%20Lead.svg',
    caseStudy: '#/work/los',
  },
  {
    id: 2,
    title: 'Continuous Compliance',
    company: 'Perforce Software',
    year: '2024 — Present',
    desc: 'Designing enterprise privacy workflows for compliance teams, with a focus on reusable patterns, accessibility, and high-control review experiences.',
    eyebrow: 'Enterprise Privacy Workflows',
    category: 'SaaS / Compliance',
    cardColor: '#e6c7c2',
    inkColor: '#7a1620',
    nda: true,
  },
  {
    id: 3,
    title: 'Neobanking Platform for SMBs',
    company: 'Hatio Tech',
    year: '2021 — 2023',
    desc: 'Designed 0 to 1 banking experiences across onboarding, alerts, invoicing, and account verification for sensitive financial setup.',
    eyebrow: '0 to 1 Financial Product',
    category: 'Neobanking / SMBs',
    cardColor: '#d9dfcf',
    inkColor: '#14201a',
    media: '/Crypto%20exchange/hero-banner.png',
    caseStudy: '#/work/crypto-exchange',
  },
  {
    id: 4,
    title: 'Fintech Wallet Payout Module',
    company: 'Hatio Tech',
    year: '2021 — 2023',
    desc: 'Designed payout and bulk-transfer flows across web, iOS, and Android so finance operations felt fast, clear, and safe.',
    eyebrow: 'Bulk Transfer Operations',
    category: 'Payments / Cross-platform',
    cardColor: '#d6bea4',
    inkColor: '#17120d',
    media: '/bulk%20payout/image%203.svg',
    mediaFit: 'contain',
    caseStudy: '#/work/payout-module',
  },
];

function ProjectAction({ project }) {
  if (project.nda) {
    return <span className="work-cta-muted">NDA work · walkthrough available</span>;
  }

  return (
    <a href={project.caseStudy} className="work-cta-link">
      Read case study <ArrowUpRight size={20} strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="work-section">
      <div className="section-head">
        <h2 className="section-label">Selected Work</h2>
        <p className="section-intro">
          A few shipped stories across credit decisions, compliance workflows, neobanking, and
          payment operations.
        </p>
      </div>

      <div className="work-list">
        {projects.map((p, i) => (
          <article
            className="work-item"
            key={p.id}
            data-folder-style={['tab-left', 'stack', 'tab-right', 'tab-stack'][i]}
            style={{ '--card-color': p.cardColor, '--card-ink': p.inkColor }}
          >
            <div className="folder-tab" aria-hidden="true">{p.company}</div>
            <div className="folder-stack" aria-hidden="true"></div>

            <div className="work-card-top">
              <p className="work-meta">{p.eyebrow}</p>
              <p className="work-company">{p.company}</p>
            </div>

            <div className="work-card-title-row">
              <div>
                <p className="work-category">{p.category} · {p.year}</p>
                <h3 className="work-title">{p.title}</h3>
              </div>
              <ProjectAction project={p} />
            </div>

            <div className={`work-visual${p.mediaFit === 'contain' ? ' work-visual--contain' : ''}`}>
              {p.media ? (
                <img src={p.media} alt="" loading="lazy" />
              ) : (
                <div className="work-visual-placeholder" aria-hidden="true">
                  <span>Workflow under NDA</span>
                  <strong>Patterns, review states, and compliance controls.</strong>
                </div>
              )}
            </div>

            <div className="work-card-bottom">
              <p className="work-desc">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
