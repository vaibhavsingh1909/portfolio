export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-simple">
          <span>© {year} Vaibhav Singh · Pune, India</span>
          <span className="footer-credit">Crafted in Claude Code</span>
        </div>
      </div>
    </footer>
  );
}
