import { Mail, MessageCircle, Share2, Globe } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="editorial-section col-span-12 reveal visible">
      <div className="section-heading-row">
        <h3 className="section-title">Contact Desk</h3>
      </div>
      
      <div className="contact-grid">
        <div className="contact-editorial">
          <h2 className="headline-massive">Let's build something<br/><span className="accent-text">worth remembering.</span></h2>
          <p className="lead-paragraph">
            Open to full-time roles, freelance collaborations, and thoughtful conversations about design. 
            Based in Pune — available to work with global teams.
          </p>
        </div>
        
        <div className="contact-directory">
          <h4 className="directory-title">The Directory</h4>
          <ul className="directory-list">
            <li>
              <a href="mailto:vaibhavsingh1909@gmail.com" className="hover-target">
                <span className="contact-icon"><Mail size={16} /></span>
                <span className="contact-label">Email</span>
                <span className="contact-action">Send Dispatch</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/7721071154" target="_blank" rel="noreferrer" className="hover-target">
                <span className="contact-icon"><MessageCircle size={16} /></span>
                <span className="contact-label">WhatsApp</span>
                <span className="contact-action">Direct Wire</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vaibhav-singh-33967888/" target="_blank" rel="noreferrer" className="hover-target">
                <span className="contact-icon"><Share2 size={16} /></span>
                <span className="contact-label">LinkedIn</span>
                <span className="contact-action">Professional Network</span>
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/vaibhavsingh1909" target="_blank" rel="noreferrer" className="hover-target">
                <span className="contact-icon"><Globe size={16} /></span>
                <span className="contact-label">Dribbble</span>
                <span className="contact-action">Visual Archive</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
