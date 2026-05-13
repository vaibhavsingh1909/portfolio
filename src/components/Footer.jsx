export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <span className="footer-brand">The Portfolio <em>Magazine</em></span>
          <span>© {year} Vaibhav Singh. All rights reserved.</span>
        </div>
        <div className="footer-col">
          <span>Product design for complex systems.</span>
        </div>
        <div className="footer-col footer-right">
          <span>Printed in Pune, India</span>
          <span>First Edition</span>
        </div>
      </div>
    </footer>
  );
}
