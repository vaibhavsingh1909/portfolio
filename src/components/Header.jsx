const links = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  // Scroll via an absolute target computed from the document offset, which
  // (unlike getBoundingClientRect / scrollIntoView) is NOT thrown off by the
  // sticky work cards mid-scroll. ~88px clears the sticky nav.
  const handleClick = (e, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    let top = 0;
    for (let node = el; node; node = node.offsetParent) top += node.offsetTop;
    window.scrollTo({ top: top - 88, behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-name">Vaibhav Singh</a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={(e) => handleClick(e, l.id)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
