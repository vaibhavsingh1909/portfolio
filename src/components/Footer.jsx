export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-simple">
          <span>© {year} Vaibhav Singh · Pune, India</span>
          <div className="footer-links">
            <a href="mailto:vaibhavsingh1909@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/vaibhav-singh-33967888/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://dribbble.com/vaibhavsingh1909" target="_blank" rel="noreferrer">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
