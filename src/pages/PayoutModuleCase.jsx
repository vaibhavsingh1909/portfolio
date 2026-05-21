import { useEffect, useState } from 'react';
import './CryptoExchangeCase.css';

const sections = [
  { id: 'background', label: 'Background' },
  { id: 'initial-screens', label: 'Initial screens' },
  { id: 'customers', label: 'Customers' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'bulk-payouts', label: 'Bulk payouts' },
  { id: 'conclusion', label: 'Conclusion' },
];

const tags = ['#Work', '#Web', '#Figma'];

const initialScreens = [
  'screencapture-payouts-hatio-tech-dashboard-2021-09-16-14_10_04 2.svg',
  'screencapture-payouts-hatio-tech-dashboard-2021-11-09-15_29_49.svg',
  'screencapture-payouts-hatio-tech-payout-links-2021-11-10-10_08_21.svg',
  'screencapture-payouts-hatio-tech-payout-links-2021-11-10-10_11_45.svg',
  'screencapture-payouts-hatio-tech-payouts-2021-11-10-10_11_57.svg',
  'screencapture-payouts-hatio-tech-payouts-bulk-2021-11-10-10_11_33.svg',
];

const dashboardWireframes = [
  'Dashboard 64.svg',
  'Dashboard 65.svg',
  'Dashboard 66.svg',
  'Sub-Wallet Details Page.svg',
  'Wallet settings 2.svg',
  'Suspend action.svg',
];

const dashboardFinal = [
  'Wallet-dashboard.svg',
  'Wallet-dashboard-1.svg',
  'Wallet-dashboard-2.svg',
  'Wallet-dashboard-3.svg',
  'Wallet-dashboard-4.svg',
  'Wallet-dashboard-5.svg',
  'Wallet-dashboard-6.svg',
  'Sub Wallet-create.svg',
];

const bulkInitial = [
  'screencapture-payouts-hatio-xyz-payouts-bulk-2021-12-24-11_43_30.svg',
  'screencapture-payouts-hatio-xyz-payouts-bulk-2021-12-24-11_43_42.svg',
  'screencapture-payouts-hatio-xyz-payouts-bulk-2021-12-24-11_44_24.svg',
  'screencapture-payouts-hatio-xyz-payouts-bulk-2021-12-24-11_45_00.svg',
];

const bulkFinal = [
  'Payout detail popup.svg',
  'Payout detail popup-1.svg',
];

function asset(name) {
  return `/bulk%20payout/${encodeURIComponent(name)}`;
}

function Shot({ src, alt, className = '' }) {
  return (
    <figure className={`raw-shot ${className}`}>
      <img src={asset(src)} alt={alt || src.replace(/\.[^.]+$/, '')} loading="lazy" />
    </figure>
  );
}

function ImageGrid({ items, columns = 'two' }) {
  return (
    <div className={`image-grid image-grid--${columns}`}>
      {items.map((src) => (
        <Shot key={src} src={src} />
      ))}
    </div>
  );
}

export default function PayoutModuleCase() {
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
    <div className="coinome-page">
      <header className="magazine-header">
        <div className="masthead">
          <div className="title">PORTFOLIO MAGAZINE</div>
        </div>
        <div className="sub-row">
          <a className="back" href="#/">← Go Back</a>
          <span className="scroll-cue">Scroll to Navigate</span>
        </div>
        <img className="hero-banner" src={asset('image 3.svg')} alt="Hatio payout case study cover" />
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

            <h1>Hatio payout and Bulk payouts</h1>
            <p className="lede">
              Make instant payouts in just a few clicks. Hatio lets users set daily and monthly
              transaction limits for a payout account, manage automated payouts to employees, and
              choose between IMPS, RTGS, NEFT, or UPI payout modes according to business needs.
            </p>

            <div className="note">
              <div className="note-title">Team / My Role</div>
              <div className="note-body">
                I was responsible for initial research, wireframes, prototypes, design iterations,
                and final visual screens. I worked with stakeholders and engineers to move the
                platform from a rough dashboard template into a clearer payout experience.
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
              In its initial iteration, Hatio provided a basic set of payout functionalities
              through APIs to a select group of customers. However, the platform itself was
              rudimentary. Developers were using a default template for the dashboard and other UI
              elements, which resulted in a clunky and limited user experience.
            </p>
            <p>
              To address these shortcomings, we redesigned the platform and significantly improved
              its usability across wallet dashboards, payout flows, bulk payouts, and supporting
              account-management screens.
            </p>
          </section>

          <section id="initial-screens">
            <h2>Initial screens</h2>
            <p>
              These early screens show the starting point of the product: functional, but visually
              generic and difficult to use at scale. The dashboard patterns needed clearer
              hierarchy, better navigation, and flows that supported real payout operations.
            </p>
            <ImageGrid items={initialScreens} columns="two" />
          </section>

          <section id="customers">
            <h2>The target customers</h2>
            <p>
              Through initial research and technical sessions with stakeholders, I found that the
              target customers for payouts and bulk payouts could be broken into two broad groups.
            </p>
            <ul className="copy-list">
              <li><strong>Businesses with frequent payouts:</strong> e-commerce marketplaces, gig economy platforms, subscription services, and financial institutions that need to pay customers for completed transactions.</li>
              <li><strong>Businesses with large teams or distributors:</strong> remote companies, manufacturers, and distributors that need to process salaries, commissions, reimbursements, or distributor payments at scale.</li>
            </ul>
          </section>

          <section id="dashboard">
            <h2>Dashboard</h2>
            <h3>Dashboard - Wireframes</h3>
            <p>
              I explored dashboard and wallet-detail wireframes to improve the structure of master
              wallets, wallet details, recent transactions, virtual accounts, sub-wallets, and
              transaction history.
            </p>
            <ImageGrid items={dashboardWireframes} columns="three" />

            <h3>Dashboard - Final screens</h3>
            <p>
              After multiple iterations and stakeholder reviews, these were the final dashboard
              screens deployed on Hatio.in.
            </p>
            <ImageGrid items={dashboardFinal} columns="one" />
          </section>

          <section id="bulk-payouts">
            <h2>Bulk payouts</h2>
            <h3>Bulk payouts - Initial screens</h3>
            <p>
              Initial bulk payout screens were chaotic and used steppers that interrupted the user
              flow. The experience made it harder for users to create and execute bulk payouts
              smoothly.
            </p>
            <ImageGrid items={bulkInitial} columns="two" />

            <h3>Bulk payouts - Final screens</h3>
            <p>
              I iterated on this flow to make bulk payout creation feel smoother: upload the file,
              preview the upload, process the file, confirm payout details, and review status
              without unnecessary interruptions.
            </p>
            <ImageGrid items={bulkFinal} columns="one" />
          </section>

          <section id="conclusion">
            <h2>Conclusion</h2>
            <p>
              After the redesign, we onboarded three new clients in just two weeks, and they were
              impressed with the demo and product.
            </p>
            <p>
              Usage increased as people interacted with the payout and bulk payout features
              seamlessly, without requiring extra training or tutorials. The new flow was more
              intuitive and user-friendly.
            </p>
          </section>

          <nav className="pager">
            <a href="#/work/crypto-exchange">
              <div className="label">Previous case</div>
              ← Crypto exchange
            </a>
            <a href="#/work/los" className="next">
              <div className="label">Next case</div>
              Loan Origination System →
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
