const roles = [
  {
    role: 'Product Designer',
    company: 'Perforce Software',
    date: '2024 — Present',
  },
  {
    role: 'Product Designer',
    company: 'Credflow',
    date: '2024',
  },
  {
    role: 'Associate UX/UI Designer',
    company: 'Hatio Tech (Billdesk)',
    date: '2021 — 2023',
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <p className="section-label">Experience</p>
      <div>
        {roles.map((r) => (
          <div className="exp-item" key={r.company + r.date}>
            <div>
              <div className="exp-role">{r.role}</div>
              <div className="exp-company">{r.company}</div>
            </div>
            <div className="exp-date">{r.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
