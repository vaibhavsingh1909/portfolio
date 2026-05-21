import { useEffect, useRef, useState } from 'react';
import './CryptoExchangeCase.css';

const sections = [
  { id: 'background', label: 'Background' },
  { id: 'process', label: 'Process' },
  { id: 'final-screens', label: 'Final screens' },
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'social-login', label: 'Social login?' },
  { id: 'bank-account', label: 'Bank account' },
  { id: 'settings', label: 'Settings' },
  { id: 'coin-details', label: 'Coin details' },
  { id: 'conclusion', label: 'Conclusion' },
];

const tags = ['#Work', '#Web3', '#Mobile', '#Crypto', '#Figma'];

// Onboarding — web flow screens (Coinome create-account, OTP, etc.)
const onboardingWeb = [
  'Frame 427320958.svg',
  'Frame 427320959.svg',
  'Frame 427320960.svg',
  'Frame 427320961.svg',
];

// Onboarding — mobile flow screens (welcome, email, OTP, mobile OTP)
const onboardingMobile = [
  'Android Large - 443.svg',
  'Android Large - 454.svg',
  'Android Large - 455.svg',
  'Android Large - 456.svg',
  'Android Large - 457.svg',
  'Android Large - 458.svg',
];

// Add bank account — mobile flow (entry → confirm → verified)
const bankMobile = [
  'Enter bank details.svg',
  'Enter bank details-1.svg',
  'Enter bank details-2.svg',
  'Confirm bank details.svg',
  'Confirm bank details-1.svg',
  'Bank account verified.svg',
];

// Add bank account — web flow (842×474 panel screens)
const bankWeb = [
  'Bank Details_Empty Field.svg',
  'Bank Details_Empty Field-1.svg',
  'Bank Details_Empty Field-2.svg',
  'Bank Details_Empty Field-3.svg',
  'Bank Details_Filled.svg',
  'Bank Details_Filled-1.svg',
];

// Settings-adjacent support surfaces exported with the PDF.
const settingsScreens = [
  'Invoives.svg',
  'feedback.svg',
];

// Coin details / alerts surfaces from the PDF
const coinDetailScreens = [
  'All alert expanded list.svg',
  'All alert expanded list-1.svg',
  'All alert expanded list-2.svg',
  'All alert expanded list-3.svg',
];

function asset(name) {
  return `/Crypto%20exchange/${encodeURIComponent(name)}`;
}

function Shot({ src, alt, className = '' }) {
  return (
    <figure className={`raw-shot ${className}`}>
      <img src={asset(src)} alt={alt || src.replace(/\.[^.]+$/, '')} loading="lazy" />
    </figure>
  );
}

function ImageGrid({ items, columns = 'three' }) {
  return (
    <div className={`image-grid image-grid--${columns}`}>
      {items.map((src) => (
        <Shot key={src} src={src} />
      ))}
    </div>
  );
}

export default function CryptoExchangeCase() {
  const pageRef = useRef(null);
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveId(id);
  };

  return (
    <div className="coinome-page" ref={pageRef}>
      <header className="magazine-header">
        <div className="masthead">
          <div className="title">PORTFOLIO MAGAZINE</div>
        </div>
        <div className="sub-row">
          <a className="back" href="#/">← Go Back</a>
          <span className="scroll-cue">Scroll to Navigate</span>
        </div>
        <img className="hero-banner" src={asset('image 3.svg')} alt="Coinome case study cover" />
      </header>

      <div className="layout">
        <aside className="side-menu" aria-label="Case study navigation">
          <div className="menu-label">Navigation</div>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  className={activeId === section.id ? 'active' : undefined}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <article>
          <section className="case-opening">
            <ul className="tags" aria-label="Tags">
              {tags.map((tag) => (
                <li className="tag" key={tag}>{tag}</li>
              ))}
            </ul>

            <h1>Crypto currency Exchange</h1>
            <p className="lede">
              Coinome is India&apos;s most trusted Bitcoin and cryptocurrency exchange. It was built
              by a team of hardcore traders and passionate blockchain believers. The world is
              moving on to this revolution at an unprecedented pace.
            </p>
            <p className="lede">
              Use Coinome to buy, sell and trade digital assets with ease, confidence and trust.
            </p>

            <div className="note">
              <div className="note-title">Note:</div>
              <div className="note-body">
                This document and its contents are considered confidential (NDA). Please do not
                share this file or use any of its assets without permission.
              </div>
            </div>
          </section>

          <section id="background">
            <h2>Background</h2>
            <p>
              Hatio is a company that prioritizes engineering excellence. They specialize in
              creating highly scalable, real-time software solutions for merchant solutions,
              digital wallets, neobanking, and accounting. These solutions are designed to handle
              large volumes of financial transactions and sensitive information, ensuring smooth
              operation and growth for their partners.
            </p>

            <h3>Why This Project?</h3>
            <p>
              The team behind Hatio was a trailblazer in the Indian Web3 space. They launched and
              operated India&apos;s first major cryptocurrency exchange. However, due to restrictions
              imposed by the RBI and the lack of clear government regulations surrounding
              cryptocurrency, they were forced to shut down the exchange.
            </p>
            <p>
              Fast forward to 2023. With the anticipation of a government bill outlining crypto
              regulations, Hatio&apos;s founders decided to re-enter the market. Their goal was to
              launch a new cryptocurrency exchange that adheres to upcoming government rules and
              regulations: secure, trusted, and made in India.
            </p>

            <h3>Team</h3>
            <p>
              I was one of six designers working on this project. I was responsible for conducting
              the initial research, developing wireframes to help stakeholders visualize potential
              solutions, iterating with the team, creating prototypes for testing, and designing
              the final visual screens.
            </p>
            <ul className="copy-list">
              <li><strong>Product Managers:</strong> to understand the scope, requirements, and the new flows we were introducing.</li>
              <li><strong>Stakeholders:</strong> to get timely feedback on design direction.</li>
              <li><strong>Engineers:</strong> to understand constraints early and ensure final output matched the designs.</li>
            </ul>
          </section>

          <section id="process">
            <h2>Process</h2>
            <Shot src="image 1498.svg" alt="Design process diagram" className="raw-shot--wide" />
            <p>
              We adopted a lean approach, iterating on the design throughout the process. Following
              initial stakeholder meetings, we conducted research, including competitor analysis
              and user interviews. This research informed the initial wireframes, which were then
              prototyped and tested. We iterated based on testing results and collaborated closely
              with developers before finalizing and delivering the screen designs.
            </p>
          </section>

          <section id="final-screens">
            <h2>Final screens</h2>
            <p>
              After multiple iterations and stakeholder reviews, these are the final screens.
            </p>
          </section>

          <section id="onboarding">
            <h2>Onboarding</h2>
            <h3>Onboarding — Web</h3>
            <ImageGrid items={onboardingWeb} columns="one" />

            <h3>Onboarding — Mobile</h3>
            <ImageGrid items={onboardingMobile} columns="two" />
          </section>

          <section id="social-login">
            <h2>Why not social login?</h2>
            <Shot
              src="image 1499.svg"
              alt="Social login illustration"
              className="raw-shot--narrow"
            />
            <p>
              While social login offers a clear advantage, a faster and more user-friendly
              onboarding process with minimal steps, it wasn&apos;t well-suited for our situation
              due to regulatory requirements. To ensure compliance, we needed to verify all
              users&apos; phone numbers and email addresses. Additionally, any platform activity
              required mandatory KYC verification.
            </p>
            <p>
              Since social login wouldn&apos;t eliminate the need for this crucial step, it provided
              limited extra value in our specific context. Therefore, a traditional signup flow
              better ensured we met regulatory requirements while still prioritizing a smooth user
              experience.
            </p>
          </section>

          <section id="bank-account">
            <h2>Bank account</h2>
            <p>
              Adding a bank account enables users to deposit and withdraw money into their Coinome
              account. The flow asks users to keep their bank account number and IFSC code ready,
              then guides them through entry, confirmation, and verification.
            </p>
            <h3>Add bank — Web</h3>
            <ImageGrid items={bankWeb} columns="one" />

            <h3>Add bank — Mobile</h3>
            <ImageGrid items={bankMobile} columns="two" />
          </section>

          <section id="settings">
            <h2>Settings</h2>
            <p>
              Settings and supporting account surfaces covered secondary product tasks such as
              invoices and feedback. This section is limited to actual product UI screens, with
              decorative end/export assets excluded.
            </p>
            <ImageGrid items={settingsScreens} columns="two" />
          </section>

          <section id="coin-details">
            <h2>Coin details</h2>
            <p>
              Coin detail screens included alert creation and alert management states. Users could
              set rise/drop alerts for coins and manage them from a unified list with expanded,
              selected, and delete states.
            </p>
            <ImageGrid items={coinDetailScreens} columns="two" />
          </section>

          <section id="conclusion">
            <h2>Conclusion</h2>
            <p>
              The project reached final design handoff before I moved on from the role, so I do
              not have post-launch metrics to claim. What I can speak to is the design outcome:
              a clearer onboarding system for a regulated crypto product, covering web, mobile,
              bank-account setup, KYC-adjacent flows, and alert management.
            </p>
            <p>
              If I were taking the product forward, I would measure signup completion, OTP drop-off,
              KYC start-to-submit rate, bank-account verification success, and support tickets
              around onboarding confusion. Those signals would show whether the flow was not only
              visually complete, but operationally working for users.
            </p>
          </section>

          <nav className="pager">
            <a href="#/">
              <div className="label">All work</div>
              ← Index
            </a>
            <a href="#/work/payout-module" className="next">
              <div className="label">Next case</div>
              Payout module →
            </a>
          </nav>
        </article>
      </div>

      <footer className="coinome-footer">
        <span>© 2024 Vaibhav Singh · Portfolio Magazine</span>
        <a href="mailto:hi@vaibhavsingh.info">hi@vaibhavsingh.info</a>
      </footer>
    </div>
  );
}
