const links = [
  { label: 'Email', action: 'Send email', href: 'mailto:vaibhavsingh1909@gmail.com' },
  { label: 'LinkedIn', action: 'Open profile', href: 'https://www.linkedin.com/in/vaibhav-singh-33967888/' },
  { label: 'Dribbble', action: 'Open profile', href: 'https://dribbble.com/vaibhavsingh1909' },
  { label: 'WhatsApp', action: 'Start chat', href: 'https://wa.me/917721071154' },
];

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-label">Contact</h2>
      <p className="section-intro">
        Open to senior product designer roles in fintech, compliance, or enterprise SaaS. Available
        for consulting on complex workflow design, design system work, and AI-assisted design process.
      </p>
      <ul className="contact-list">
        {links.map((l) => {
          const external = l.href.startsWith('http');
          return (
            <li key={l.label}>
              <a
                href={l.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                aria-label={`${l.label} — ${l.action}`}
              >
                <span>{l.label}</span>
                <span className="contact-action">
                  {l.action}
                  <span className="contact-arrow" aria-hidden="true">→</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
