import { useEffect, useState } from 'react';
import './CryptoExchangeCase.css';
import Footer from '../components/Footer';

const sections = [
  { id: 'background', label: 'Background' },
  { id: 'initial-screens', label: 'Initial screens' },
  { id: 'customers', label: 'Customers' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'bulk-payouts', label: 'Bulk payouts' },
  { id: 'conclusion', label: 'Conclusion' },
];

const tags = ['#Work', '#Web', '#Fintech', '#Bulk payouts', '#Dashboard', '#Payments'];

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
  'Wallet-dashboard-3.svg',
  'Wallet-dashboard-4.svg',
  'Wallet-dashboard-5.svg',
  'Wallet-dashboard-6.svg',
  'Sub Wallet-create.svg',
  'Wallet-dashboard-2.svg',
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

const screenSizes = {
  'screencapture-payouts-hatio-tech-dashboard-2021-09-16-14_10_04 2.svg': { width: 409, height: 204 },
  'screencapture-payouts-hatio-tech-dashboard-2021-11-09-15_29_49.svg': { width: 409, height: 204 },
  'screencapture-payouts-hatio-tech-payout-links-2021-11-10-10_08_21.svg': { width: 409, height: 204 },
  'screencapture-payouts-hatio-tech-payout-links-2021-11-10-10_11_45.svg': { width: 409, height: 204 },
  'screencapture-payouts-hatio-tech-payouts-2021-11-10-10_11_57.svg': { width: 409, height: 204 },
  'screencapture-payouts-hatio-tech-payouts-bulk-2021-11-10-10_11_33.svg': { width: 409, height: 204 },
  'Dashboard 64.svg': { width: 401, height: 247 },
  'Dashboard 65.svg': { width: 405, height: 247 },
  'Dashboard 66.svg': { width: 405, height: 247 },
  'Sub-Wallet Details Page.svg': { width: 409, height: 247 },
  'Wallet settings 2.svg': { width: 409, height: 247 },
  'Suspend action.svg': { width: 401, height: 247 },
  'Wallet-dashboard.svg': { width: 842, height: 527 },
  'Wallet-dashboard-1.svg': { width: 842, height: 527 },
  'Wallet-dashboard-2.svg': { width: 842, height: 1344 },
  'Wallet-dashboard-3.svg': { width: 842, height: 492 },
  'Wallet-dashboard-4.svg': { width: 842, height: 517 },
  'Wallet-dashboard-5.svg': { width: 842, height: 517 },
  'Wallet-dashboard-6.svg': { width: 842, height: 517 },
  'Sub Wallet-create.svg': { width: 842, height: 916 },
  'screencapture-payouts-hatio-xyz-payouts-bulk-2021-12-24-11_43_30.svg': { width: 409, height: 247 },
  'screencapture-payouts-hatio-xyz-payouts-bulk-2021-12-24-11_43_42.svg': { width: 409, height: 247 },
  'screencapture-payouts-hatio-xyz-payouts-bulk-2021-12-24-11_44_24.svg': { width: 409, height: 273 },
  'screencapture-payouts-hatio-xyz-payouts-bulk-2021-12-24-11_45_00.svg': { width: 409, height: 273 },
  'Payout detail popup.svg': { width: 842, height: 509 },
  'Payout detail popup-1.svg': { width: 842, height: 509 },
};

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

function PairGrid({ items }) {
  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }

  return (
    <div className="pair-grid">
      {rows.map((row) => {
        const rowRatio = Math.max(
          ...row.map((src) => {
            const size = screenSizes[src] || { width: 842, height: 527 };
            return size.width / size.height;
          })
        );
        return (
          <div
            key={row[0]}
            className={`pair-row${row.length === 1 ? ' pair-row--single' : ''}`}
            style={{ '--row-ratio': `${rowRatio} / 1` }}
          >
            {row.map((src) => (
              <Shot key={src} src={src} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function ImageStack({ items }) {
  return (
    <div className="full-shot-stack">
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
    <div className="coinome-page payout-page">
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
            <PairGrid items={initialScreens} />
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
            <PairGrid items={dashboardWireframes} />

            <h3>Dashboard - Final screens</h3>
            <p>
              After multiple iterations and stakeholder reviews, these were the final dashboard
              screens deployed on Hatio.in.
            </p>
            <ImageStack items={dashboardFinal} />
          </section>

          <section id="bulk-payouts">
            <h2>Bulk payouts</h2>
            <h3>Bulk payouts - Initial screens</h3>
            <p>
              Initial bulk payout screens were chaotic and used steppers that interrupted the user
              flow. The experience made it harder for users to create and execute bulk payouts
              smoothly.
            </p>
            <PairGrid items={bulkInitial} />

            <h3>Bulk payouts - Final screens</h3>
            <p>
              I iterated on this flow to make bulk payout creation feel smoother: upload the file,
              preview the upload, process the file, confirm payout details, and review status
              without unnecessary interruptions.
            </p>
            <ImageStack items={bulkFinal} />
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
            <a href="#/work/credit-line">
              <div className="label">Previous case</div>
              ← Credit Line
            </a>
            <a href="#/" className="next">
              <div className="label">All work</div>
              Home page →
            </a>
          </nav>
        </article>
      </div>

      <Footer />
    </div>
  );
}
