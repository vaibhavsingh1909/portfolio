const roles = [
  {
    date: 'Aug 2024 — Present',
    role: 'Product Designer',
    company: 'Perforce Software (Delphix Portfolio)',
    context: 'Leading product design for Continuous Compliance, a data privacy SaaS portfolio used by enterprise teams. Partnering with PM and engineering across India, the US, and EMEA; strengthening the design system and building Figma plugins that reduce repetitive design work.',
  },
  {
    date: 'Jun 2024 — Jul 2024',
    role: 'Product Designer',
    company: 'Credflow',
    context: 'Designed a B2B credit-line product for SMEs across underwriting, onboarding, and risk workflows. Shipped mobile-first journeys focused on activation, comprehension, and trust in high-stakes financial decisions.',
  },
  {
    date: 'Jul 2021 — May 2023',
    role: 'Associate UX/UI Designer',
    company: 'Hatio Tech (Billdesk subsidiary)',
    context: 'Designed crypto exchange, payout, wallet, and neobanking experiences from early IA to production UI across web, iOS, and Android. Ran prototype reviews and usability checks to validate interaction patterns before engineering handoff.',
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-label">Experience</h2>
      <div className="exp-list">
        {roles.map((r) => (
          <div className="exp-row" key={r.date}>
            <div>
              <div className="exp-role">{r.role}</div>
              <div className="exp-company">{r.company}</div>
              <p className="exp-context">{r.context}</p>
            </div>
            <div className="exp-date">{r.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
