import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Continuous Compliance',
    company: 'Perforce Software',
    year: '2024 — Present',
    desc: 'Designing enterprise privacy workflows for compliance teams, with a focus on reusable patterns, accessibility, and high-control review experiences.',
    eyebrow: 'Enterprise Privacy Workflows',
    category: 'SaaS / Compliance',
    cardColor: '#e6c7c2',
    inkColor: '#7a1620',
    nda: true,
    current: [
      'Designing the user interface for an API-first product, making it more accessible and usable.',
      'Bringing CRUD workflow capabilities to the DCT platform.',
      'Creating an experience that helps users migrate years of usage data and assets onto the new platform.',
    ],
  },
  {
    id: 2,
    title: 'Loan Origination System',
    company: 'Credflow',
    year: '2024',
    desc: 'Wireframes for an internal tool used by CredFlow’s Sales, Ops, and Underwriting teams — one shared pipeline across onboarding, document review, and application status.',
    eyebrow: 'Internal Tool · Wireframes',
    category: 'Fintech / Internal Tool',
    cardColor: '#e8ddca',
    inkColor: '#11100e',
    media: '/Credit%20line%20for%20businesses/Credit%20line%20for%20businesses%20THUMBNAIL%201.png',
    tinted: true,
    caseStudy: '#/work/los',
  },
  {
    id: 3,
    title: 'Crypto Currency Exchange',
    company: 'Hatio Tech',
    year: '2021 — 2023',
    desc: 'Designed onboarding, bank-account verification, alerts, and coin-detail flows for Coinome — a regulated, India-first crypto exchange across web and mobile.',
    eyebrow: 'Crypto Exchange · Web & Mobile',
    category: 'Web3 / Crypto',
    cardColor: '#d9dfcf',
    inkColor: '#14201a',
    media: '/Crypto%20exchange/hero-banner.png',
    caseStudy: '#/work/crypto-exchange',
  },
  {
    id: 4,
    title: 'Credit Line for Businesses',
    company: 'Credflow',
    year: '2024',
    desc: 'Designed mobile-first credit-line journeys for SMEs across activation, repayment clarity, underwriting states, and risk communication.',
    eyebrow: 'SME Credit Product',
    category: 'Fintech / Mobile',
    cardColor: '#cddfe5',
    inkColor: '#102b34',
    media: '/Credit%20line%20for%20businesses/Credit%20line%20for%20businesses%20THUMBNAIL%202.png',
    caseStudy: '#/work/credit-line',
  },
  {
    id: 5,
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
    <a href={project.caseStudy} className="work-cta-link" aria-label="Read case study">
      <span className="work-cta-text">Read case study</span>
      <ArrowRight className="work-cta-icon" size={18} strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="work-section">
      <h2 className="section-label">Selected Work</h2>
      <p className="section-intro">
        A few shipped stories across credit decisions, compliance workflows, crypto exchange, and
        payment operations.
      </p>

      <div className="work-list">
        {projects.map((p) => (
          <article
            className="work-item"
            key={p.id}
            style={{ '--card-color': p.cardColor, '--card-ink': p.inkColor }}
          >
            <div className="folder-tab" aria-hidden="true">{p.company}</div>

            <div className="work-card-top">
              <p className="work-meta">{p.eyebrow}</p>
              <p className="work-category">{p.category}</p>
            </div>

            <div className="work-card-title-row">
              <div>
                <h3 className="work-title">{p.title}</h3>
              </div>
              <ProjectAction project={p} />
            </div>

            <div className={`work-visual${p.mediaFit ? ` work-visual--${p.mediaFit}` : ''}${p.tinted ? ' work-visual--tinted' : ''}`}>
              {p.media ? (
                <img src={p.media} alt="" loading="lazy" />
              ) : (
                <div className="work-visual-placeholder">
                  <div className="work-now">
                    <span className="work-now-dot" aria-hidden="true" />
                    <span className="work-now-label">Currently working here</span>
                  </div>
                  <p className="work-now-brief">{p.desc}</p>
                  <ul className="work-now-list">
                    {p.current.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {!p.nda && (
              <div className="work-card-bottom">
                <p className="work-desc">{p.desc}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
