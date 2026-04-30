import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="publication-footer">
      <div className="footer-content container">
        <div className="footer-col">
          <span className="footer-brand">The Portfolio <em>Magazine</em></span>
          <span className="footer-copyright">© {year} Vaibhav Singh. All rights reserved.</span>
        </div>
        
        <div className="footer-col text-center">
          <span className="footer-motto">Designed with intention.</span>
        </div>
        
        <div className="footer-col text-right">
          <span className="footer-meta">Printed in Pune, India</span>
          <span className="footer-meta">First Edition</span>
        </div>
      </div>
    </footer>
  );
}
