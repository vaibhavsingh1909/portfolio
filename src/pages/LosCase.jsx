import { useEffect, useState } from 'react';
import './CryptoExchangeCase.css';
import Footer from '../components/Footer';

const sections = [
  { id: 'context', label: 'Context' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'sales', label: 'Sales' },
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'ops', label: 'Ops' },
  { id: 'underwriting', label: 'Underwriting' },
  { id: 'activity-log', label: 'Activity log' },
  { id: 'status-system', label: 'Status system' },
];

const tags = ['#Work', '#Web', '#Fintech', '#Internal tool', '#Concept Wireframes'];

const heroBanner = '/Credit%20line%20for%20businesses/Credit%20line%20for%20businesses%20THUMBNAIL%201.png';

// Sales — both ~980 tall and frame-fit (no overflow), so they pair cleanly
// in a 2-col grid at equal height with no cropping.
// "Sales Lead.svg" (1440×979) is the table; "Sales Lead-1.svg" (1444×981) is
// the "Add New Application" modal screen.
const salesTable = 'Team Lead Screen/Loan Applications - Sales Lead.svg';     // 1440×979
const salesScreen = 'Team Lead Screen/Loan Applications - Sales Lead-1.svg';  // 1444×981

// Onboarding overview table (1444×981, frame-fit) — first cell of the grid.
// Replaces the old overflowing "Bank Statements.svg" (2122×981).
const onboardingWide = 'TEAM SCREENS/Loan Applications - OPSLead.svg';   // 1444×981

// Portrait onboarding screens (all 1440 wide) — pair in 2-col grid.
// With the table (981) prepended, rows become:
//   table+BS-1 | BS-2+BS-3 | BS-4+BS-7 | BS-5(1770)+Private Ltd(1721) | BS-6 lone
// Rows pair near-equal native heights so each row's two images render the same
// height with no crop. The two long screens are paired together; BS-6 is lone last.
const onboardingPortrait = [
  'TEAM SCREENS/Bank Statements-1.svg',   // 979
  'TEAM SCREENS/Bank Statements-2.svg',   // 1006
  'TEAM SCREENS/Bank Statements-3.svg',   // 1015
  'TEAM SCREENS/Bank Statements-4.svg',   // 1021 — paired with BS-7 (closest short)
  'TEAM SCREENS/Bank Statements-7.svg',   // 892
  'TEAM SCREENS/Bank Statements-5.svg',   // 1770 — two long screens paired together
  'TEAM SCREENS/Private Ltd.svg',         // 1721 — two long screens paired together
  'TEAM SCREENS/Bank Statements-6.svg',   // 1180 — lone last image
];

// Native dimensions used to size every LOS screenshot row from only the images
// in that pair. Desktop pairs use the shorter rendered height so both visible
// screenshots keep equal width and equal row height; mobile renders natural,
// full-height images.
const screenSizes = {
  [salesTable]: { width: 1440, height: 979 },
  [salesScreen]: { width: 1444, height: 981 },
  [onboardingWide]: { width: 1444, height: 981 },
  'TEAM SCREENS/Bank Statements-1.svg': { width: 1440, height: 979 },
  'TEAM SCREENS/Bank Statements-2.svg': { width: 1440, height: 1006 },
  'TEAM SCREENS/Bank Statements-3.svg': { width: 1440, height: 1015 },
  'TEAM SCREENS/Bank Statements-4.svg': { width: 1440, height: 1021 },
  'TEAM SCREENS/Bank Statements-6.svg': { width: 1440, height: 1180 },
  'TEAM SCREENS/Bank Statements-5.svg': { width: 1440, height: 1770 },
  'TEAM SCREENS/Private Ltd.svg': { width: 1440, height: 1721 },
  'TEAM SCREENS/Bank Statements-7.svg': { width: 1440, height: 892 },
  'OPS/Bank Statements.svg': { width: 1440, height: 1267 },
  'OPS/All Partner KYC Documents.svg': { width: 1440, height: 1536 },
  'OPS/Bank Statements-1.svg': { width: 1440, height: 1959 },
  'OPS/Bank Statements-2.svg': { width: 1440, height: 2072 },
  'UNDERWRITING TEAM/Bank Statements.svg': { width: 1440, height: 2278 },
  'UNDERWRITING TEAM/Bank Statements-1.svg': { width: 1440, height: 1790 },
  'UNDERWRITING TEAM/Bank Statements-2.svg': { width: 1440, height: 1501 },
  'UNDERWRITING TEAM/Bank Statements-3.svg': { width: 1440, height: 1360 },
  'UNDERWRITING TEAM/View.svg': { width: 1440, height: 955 },
  'TEAM SCREENS/Activity Log.svg': { width: 1440, height: 892 },
};

// OPS — all 1440-wide portrait screens, paired in the 2-col grid.
// Ordered so similar heights share a row.
const opsPortrait = [
  'OPS/Bank Statements.svg',                        // 1440×1267
  'OPS/All Partner KYC Documents.svg',              // 1440×1536
  'OPS/Bank Statements-1.svg',                      // 1440×1959
  'OPS/Bank Statements-2.svg',                      // 1440×2072
];

// Underwriting screens use the same two-per-row pattern, with View.svg landing
// as the odd, left-aligned final image.
const underwritingScreens = [
  'UNDERWRITING TEAM/Bank Statements.svg',          // 1440×2278
  'UNDERWRITING TEAM/Bank Statements-1.svg',        // 1440×1790
  'UNDERWRITING TEAM/Bank Statements-2.svg',        // 1440×1501
  'UNDERWRITING TEAM/Bank Statements-3.svg',        // 1440×1360
  'UNDERWRITING TEAM/View.svg',                     // 1440×955
];

const activityScreen = 'TEAM SCREENS/Activity Log.svg';

function asset(path) {
  return `/LOS/${path.split('/').map(encodeURIComponent).join('/')}`;
}

function label(path) {
  return path.split('/').pop().replace(/\.[^.]+$/, '');
}

function Shot({ src, alt, className = '' }) {
  return (
    <figure className={`raw-shot ${className}`}>
      <img src={asset(src)} alt={alt || label(src)} loading="lazy" />
    </figure>
  );
}

// Renders screenshots two per row. Each desktop row gets its own height from
// that pair only, preserving equal column widths and aligned row bottoms. A lone
// trailing image stays left-aligned at one-column width.
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
            const size = screenSizes[src] || { width: 1440, height: 1100 };
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

export default function LosCase() {
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
    <div className="coinome-page los-page">
      <header className="magazine-header">
        <div className="masthead">
          <div className="title">PORTFOLIO MAGAZINE</div>
        </div>
        <div className="sub-row">
          <a className="back" href="#/">← Go Back</a>
          <span className="scroll-cue">Scroll to Navigate</span>
        </div>
        <figure className="hero-banner">
          <img
            src={heroBanner}
            alt="CredFlow Loan Origination System case study cover"
          />
        </figure>
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

            <h1>Loan Origination System</h1>
            <p className="lede">
              An internal tool for CredFlow&apos;s Sales, Ops, and Underwriting teams — one shared
              pipeline that moves a business-loan application from a sales agent&apos;s first entry
              all the way to disbursal.
            </p>

            <div className="note">
              <div className="note-title">Role &amp; note</div>
              <div className="note-body">
                I owned the end-to-end UX — research with the three teams, workflow mapping, and the
                screens below. These are <strong>wireframes</strong> used to align the teams and
                validate the flow, not the final production UI.
              </div>
            </div>
          </section>

          <section id="context">
            <h2>Context</h2>
            <p>
              Loan applications used to move across chat, email, and spreadsheets, with no single
              place that showed where a file stood or who was holding it. The LOS brings the whole
              journey into one internal workspace, so any team can answer the obvious question —
              where is this application right now?
            </p>
          </section>

          <section id="workflow">
            <h2>How an application moves</h2>
            <p>
              An application moves forward when it&apos;s clean and back the moment something is
              missing. Each team owns a clear stage, and any team can return the file — the status
              is the single source of truth they all read from.
            </p>
            <ul className="copy-list">
              <li><strong>Sales</strong> — captures the application and fixes anything sent back.</li>
              <li><strong>Ops</strong> — verifies every document, then approves or returns the file.</li>
              <li><strong>Underwriting</strong> — reviews the financials and risk, then approves for lending.</li>
            </ul>
          </section>

          <section id="sales">
            <h2>Sales — Loan applications</h2>
            <p>
              The Sales Lead&apos;s home is a single list of every live application — ID, company,
              PAN, turnover, status — with filters for status, date, and agent, so it&apos;s clear
              what&apos;s stuck, what&apos;s with Ops, and what&apos;s been sent back.
            </p>
            <h3>Loan applications list</h3>
            <PairGrid items={[salesTable, salesScreen]} />
          </section>

          <section id="onboarding">
            <h2>Customer onboarding</h2>
            <p>
              Each application opens into a structured file — basic details, business and financial
              documents, KYC, co-applicant, partner KYC — each section carrying its own completion
              count. The form adapts to the borrower&apos;s constitution type, so no one collects
              documents that don&apos;t apply.
            </p>
            <h3>Document sections &amp; states</h3>
            <PairGrid items={[onboardingWide, ...onboardingPortrait]} />
          </section>

          <section id="ops">
            <h2>Ops — Document verification</h2>
            <p>
              Every uploaded document lands in a verification view with a system-verified flag and
              approve or reupload controls. Ops clears the clean documents, flags the rest, and
              sends the file back to Sales with comments — no email, no guesswork.
            </p>
            <h3>Verification &amp; reupload</h3>
            <PairGrid items={opsPortrait} />
          </section>

          <section id="underwriting">
            <h2>Underwriting — Financial review</h2>
            <p>
              Underwriting works from the financial picture — balance sheet, ITR, bank-statement
              analysis, GSTR-3B, the CAM model, and the bureau report. The review screen keeps the
              mandatory checklist and supporting documents side by side, so an underwriter moves
              from evidence to decision without leaving the file.
            </p>
            <h3>Checklist &amp; supporting documents</h3>
            <PairGrid items={underwritingScreens} />
          </section>

          <section id="activity-log">
            <h2>Activity log &amp; hand-offs</h2>
            <p>
              Every action is timestamped against a name, so any team gets a quick answer to who
              touched a file and when — making the back-and-forth between Sales and Ops auditable
              instead of invisible.
            </p>
            <h3>Timeline view</h3>
            <PairGrid items={[activityScreen]} />
          </section>

          <section id="status-system">
            <h2>One shared status language</h2>
            <p>
              The whole pipeline runs on one set of statuses — from KYC and Sent to Ops through to
              L1/L2 Approved, Sent to Lender, and Disbursed. Shared filters and a status-driven
              action button mean every team reads and updates the same vocabulary, so a file&apos;s
              state is never ambiguous.
            </p>
          </section>

          <nav className="pager">
            <a href="#/">
              <div className="label">All work</div>
              ← Home page
            </a>
            <a href="#/work/crypto-exchange" className="next">
              <div className="label">Next case</div>
              Crypto exchange →
            </a>
          </nav>
        </article>
      </div>

      <Footer />
    </div>
  );
}
