const links = [
  { label: 'Email', value: 'vaibhavsingh1909@gmail.com', href: 'mailto:vaibhavsingh1909@gmail.com' },
  { label: 'LinkedIn', value: 'in/vaibhav-singh', href: 'https://www.linkedin.com/in/vaibhav-singh-33967888/' },
  { label: 'Dribbble', value: '@vaibhavsingh1909', href: 'https://dribbble.com/vaibhavsingh1909' },
  { label: 'WhatsApp', value: '+91 77210 71154', href: 'https://wa.me/917721071154' },
];

export default function Contact() {
  return (
    <section id="contact">
      <p className="section-label">Get in touch</p>
      <ul className="contact-list">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <span>{l.label}</span>
              <span>{l.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
