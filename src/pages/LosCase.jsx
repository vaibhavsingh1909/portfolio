import { useEffect, useState } from 'react';
import './CryptoExchangeCase.css';

const sections = [
  { id: 'background', label: 'Background' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'sales', label: 'Sales' },
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'ops', label: 'Ops' },
  { id: 'underwriting', label: 'Underwriting' },
  { id: 'activity-log', label: 'Activity log' },
  { id: 'status-system', label: 'Status system' },
  { id: 'conclusion', label: 'Conclusion' },
];

const tags = ['#Work', '#Web', '#Fintech', '#Internal tool', '#Figma'];

const heroBanner = 'Team Lead Screen/Loan Applications - Sales Lead.svg';

const salesScreen = 'Team Lead Screen/Loan Applications - Sales Lead-1.svg';

const onboardingScreens = [
  'TEAM SCREENS/Bank Statements.svg',
  'TEAM SCREENS/Bank Statements-1.svg',
  'TEAM SCREENS/Bank Statements-2.svg',
  'TEAM SCREENS/Bank Statements-3.svg',
  'TEAM SCREENS/Bank Statements-4.svg',
  'TEAM SCREENS/Bank Statements-5.svg',
  'TEAM SCREENS/Bank Statements-6.svg',
  'TEAM SCREENS/Bank Statements-7.svg',
  'TEAM SCREENS/Private Ltd.svg',
];

const opsScreens = [
  'OPS/All Partner KYC Documents.svg',
  'OPS/Bank Statements.svg',
  'OPS/Bank Statements-1.svg',
  'OPS/Bank Statements-2.svg',
];

const underwritingScreens = [
  'UNDERWRITING TEAM/Bank Statements.svg',
  'UNDERWRITING TEAM/Bank Statements-1.svg',
  'UNDERWRITING TEAM/Bank Statements-2.svg',
  'UNDERWRITING TEAM/Bank Statements-3.svg',
  'UNDERWRITING TEAM/View.svg',
];

const activityScreen = 'TEAM SCREENS/Activity Log.svg';
const statusScreen = 'Dropdowns.svg';

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

function ImageGrid({ items, columns = 'two' }) {
  return (
    <div className={`image-grid image-grid--${columns}`}>
      {items.map((src) => (
        <Shot key={src} src={src} />
      ))}
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
        <img
          className="hero-banner"
          src={asset(heroBanner)}
          alt="CredFlow Loan Origination System case study cover"
        />
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
              CredFlow&apos;s Loan Origination System is the internal workspace where a
              business-loan application travels from a sales agent&apos;s first entry all the way
              to disbursal.
            </p>
            <p className="lede">
              One application, three teams — Sales, Ops, and Underwriting — each checking,
              correcting, and approving the file before it can move on.
            </p>

            <div className="note">
              <div className="note-title">Team / My Role</div>
              <div className="note-body">
                I owned the end-to-end UX — research with the Sales, Ops, and Underwriting teams,
                workflow mapping, and wireframes — turning a hand-off-heavy process into one
                shared, trackable pipeline.
              </div>
            </div>
            <div className="note">
              <div className="note-title">Note</div>
              <div className="note-body">
                The screens shown in this case study are wireframes — used to align the three
                teams and validate the flow — not the final production UI.
              </div>
            </div>
          </section>

          <section id="background">
            <h2>Background</h2>
            <p>
              CredFlow is a B2B fintech that gives Indian SMEs access to credit and cash-flow
              products. Loan applications used to be processed across chat, email, and
              spreadsheets — there was no single place that showed where a file stood or who was
              holding it.
            </p>

            <h3>Why this project?</h3>
            <p>
              A loan application is touched by several teams before it is approved. Without a
              system of record, files stalled silently, documents went missing, and no one could
              answer a simple question: where is this application right now? The LOS was built to
              bring the whole journey into one internal tool.
            </p>
          </section>

          <section id="workflow">
            <h2>How an application moves</h2>
            <p>
              An application is rarely linear. It moves forward when it is clean and backward the
              moment something is missing. Each team owns a clear stage, and any team can send the
              file back — the status is the single source of truth they all read from.
            </p>
            <ul className="copy-list">
              <li><strong>Sales:</strong> captures the application, owns the borrower relationship, and fixes anything that gets sent back.</li>
              <li><strong>Ops:</strong> verifies every document — KYC, bank statements, business proofs — then approves or returns the file.</li>
              <li><strong>Underwriting:</strong> reviews the financials and risk, then approves the file for lending.</li>
            </ul>
          </section>

          <section id="sales">
            <h2>Sales — Loan applications</h2>
            <p>
              The Sales Lead&apos;s home screen is a single list of every live application — ID,
              company, PAN, turnover, and status — with filters for status, date, and agent. From
              here a lead can see what is stuck, what is with Ops, and what has been sent back for
              correction.
            </p>
            <Shot src={salesScreen} alt="Sales Lead loan applications list" />
          </section>

          <section id="onboarding">
            <h2>Customer onboarding</h2>
            <p>
              Each application opens into a structured onboarding file, broken into clear sections
              — basic details, business and financial documents, KYC, co-applicant, partner KYC,
              and additional documents. Every section carries its own completion count, so a sales
              agent always knows what is left to collect.
            </p>
            <p>
              The form also adapts to the borrower&apos;s constitution type — a proprietorship and
              a private limited company are asked for different proofs, so no one wastes time on
              documents that do not apply.
            </p>
            <ImageGrid items={onboardingScreens} columns="two" />
          </section>

          <section id="ops">
            <h2>Ops — Document verification</h2>
            <p>
              When a file reaches Ops, every uploaded document lands in a verification view: a
              system-verified flag, an Ops action, and approve or reupload controls for each
              document. Ops clears the clean documents, flags the rest, and sends the file back to
              Sales with comments — no email, no guesswork.
            </p>
            <ImageGrid items={opsScreens} columns="two" />
          </section>

          <section id="underwriting">
            <h2>Underwriting — Financial review</h2>
            <p>
              Underwriting works from the financial picture — balance sheet, ITR, bank statement
              analysis, GSTR-3B, the CAM model, and the bureau report — each verified before a
              decision is made. The review screen keeps the mandatory checklist and supporting
              documents side by side, so an underwriter can move from evidence to decision without
              leaving the file.
            </p>
            <ImageGrid items={underwritingScreens} columns="two" />
          </section>

          <section id="activity-log">
            <h2>Activity log &amp; hand-offs</h2>
            <p>
              Because a file passes through many hands, every action is timestamped against a
              name. The activity log gives any team a quick answer to &ldquo;who touched this, and
              when&rdquo; — making the back-and-forth between Sales and Ops auditable instead of
              invisible.
            </p>
            <Shot src={activityScreen} alt="Application activity log timeline" />
          </section>

          <section id="status-system">
            <h2>One shared status language</h2>
            <p>
              The whole pipeline runs on one set of statuses — KYC, Sent to Ops, Ops Rejected,
              Sent back to Sales, Send to Underwriting, L1 and L2 Approved, Sent to Lender, and
              Disbursed. Shared filters and a status-driven action button mean every team reads
              and updates the same vocabulary, so a file&apos;s state is never ambiguous.
            </p>
            <Shot src={statusScreen} alt="Status, filter, and button-state system" />
          </section>

          <section id="conclusion">
            <h2>Conclusion</h2>
            <p>
              The LOS replaced a scattered, hand-off-heavy process with one pipeline every team
              could see. Sales, Ops, and Underwriting now work from the same file and the same
              statuses, and an application&apos;s location is always answerable.
            </p>
            <p>
              If I were taking it further, I would track time-per-stage, the send-back rate
              between Sales and Ops, and document-rejection reasons — the signals that show
              whether the pipeline is genuinely faster, not just more visible.
            </p>
          </section>

          <nav className="pager">
            <a href="#/work/payout-module">
              <div className="label">Previous case</div>
              ← Payout module
            </a>
            <a href="#/" className="next">
              <div className="label">All work</div>
              Index →
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
