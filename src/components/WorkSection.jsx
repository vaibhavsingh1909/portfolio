import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Continuous Compliance',
    company: 'Perforce',
    year: '2024 — Present',
    summary: 'Turning complex data privacy workflows into intuitive interfaces across a multi-product SaaS portfolio. Lead design with engineering across India, US, and EMEA.',
    nda: true,
  },
  {
    id: 2,
    title: 'B2B Credit Platform',
    company: 'Credflow',
    year: '2024',
    summary: 'End-to-end design for underwriting, onboarding, and risk workflows for a credit-line product serving SMEs. Mobile-first flows that lifted activation.',
    nda: true,
  },
  {
    id: 3,
    title: 'Crypto Exchange & Web3',
    company: 'Hatio Tech',
    year: '2022 — 2023',
    summary: 'Built a full crypto exchange from scratch — trading, token discovery, and end-to-end Web3 purchase flows for the firm entering digital assets.',
  },
  {
    id: 4,
    title: 'Wallet Payouts',
    company: 'Hatio Tech',
    year: '2021 — 2022',
    summary: 'Designed payout and bulk transfer flows for a consumer payment ecosystem. Shaped IA, wireframes, and UI across web, iOS, and Android.',
  },
];

export default function WorkSection() {
  const [openId, setOpenId] = useState(1);

  return (
    <section id="work">
      <p className="section-label">Selected Work</p>
      <div>
        {projects.map((p) => {
          const open = openId === p.id;
          return (
            <div className="work-item" key={p.id}>
              <button
                className="work-row"
                onClick={() => setOpenId(open ? null : p.id)}
                aria-expanded={open}
              >
                <div>
                  <div className="work-title">{p.title}</div>
                  <div className="work-meta">{p.company}</div>
                </div>
                <div className="work-year">{p.year}</div>
              </button>
              {open && (
                <div className="work-detail">
                  <p>{p.summary}</p>
                  {p.nda ? (
                    <span className="work-nda">Details available on request — under NDA</span>
                  ) : null}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
