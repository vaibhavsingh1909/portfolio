import { useEffect, useState } from 'react';
import './CryptoExchangeCase.css';
import Footer from '../components/Footer';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'mobile-journey', label: 'Mobile journey' },
  { id: 'trust-risk', label: 'Servicing & risk' },
  { id: 'csat-feedback', label: 'CSAT' },
];

const tags = ['#Work', '#Mobile', '#Fintech', '#Credit', '#SMEs'];

const heroBanner = '/Credit%20line%20for%20businesses/Credit%20line%20for%20businesses%20THUMBNAIL%202.png';

const mobileScreens = [
  'approval loan status - mobile/Loan Dashboard.svg',
  'approval loan status - mobile/Loan Dashboard - Scroll Interaction.svg',
  'Your Credit Activity.svg',
  'approval loan status - mobile/If not calculated.svg',
  'approval loan status - mobile/Loan dashboard- Overdue EMI.svg',
  'Active loan -  Details page.svg',
];

const supportingScreens = [
  'Active loan -  Details page.svg',
  'Upcoming Regulatory  Due Dates.svg',
  'Upcoming Regulatory  Due Dates - scroll state.svg',
  'approval loan status - mobile/Loan dashboard- Overdue EMI.svg',
];

const csatFlows = [
  {
    title: '5-star flow',
    screens: [
      'Csat system /5 star rating flow/home-4.svg',
      'Csat system /5 star rating flow/home.svg',
      'Csat system /5 star rating flow/home-1.svg',
      'Csat system /5 star rating flow/home-2.svg',
      'Csat system /5 star rating flow/home-3.svg',
    ],
  },
  {
    title: '4-star flow',
    screens: [
      'Csat system /4 star rating flow/home-3.svg',
      'Csat system /4 star rating flow/home.svg',
      'Csat system /4 star rating flow/home-1.svg',
      'Csat system /4 star rating flow/home-2.svg',
    ],
  },
  {
    title: '3-star flow',
    screens: [
      'Csat system /3 star rating flow/home-1.svg',
      'Csat system /3 star rating flow/home.svg',
    ],
  },
  {
    title: '2-star flow',
    screens: [
      'Csat system /2 star rating flow/home-1.svg',
      'Csat system /2 star rating flow/home.svg',
    ],
  },
  {
    title: '1-star flow',
    screens: [
      'Csat system /1 star rating flow/home-3.svg',
      'Csat system /1 star rating flow/home.svg',
      'Csat system /1 star rating flow/home-1.svg',
      'Csat system /1 star rating flow/home-2.svg',
    ],
  },
];

function asset(path) {
  return `/Credit%20line%20for%20businesses/${path.split('/').map(encodeURIComponent).join('/')}`;
}

function label(path) {
  return path.split('/').pop().replace(/\.[^.]+$/, '');
}

function Shot({ src, alt, className = '' }) {
  return (
    <figure className={`raw-shot credit-phone-shot ${className}`}>
      <img src={asset(src)} alt={alt || label(src)} loading="lazy" />
    </figure>
  );
}

function ImageGrid({ items }) {
  return (
    <div className="image-grid image-grid--three credit-phone-grid">
      {items.map((src) => (
        <Shot key={src} src={src} />
      ))}
    </div>
  );
}

export default function CreditLineCase() {
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
    <div className="coinome-page credit-line-page">
      <header className="magazine-header">
        <div className="masthead">
          <div className="title">PORTFOLIO MAGAZINE</div>
        </div>
        <div className="sub-row">
          <a className="back" href="#/">← Go Back</a>
          <span className="scroll-cue">Scroll to Navigate</span>
        </div>
        <figure className="hero-banner credit-hero-banner">
          <img
            src={heroBanner}
            alt="Credit Line for Businesses case study cover"
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
          <section className="case-opening" id="overview">
            <ul className="tags" aria-label="Tags">
              {tags.map((tag) => (
                <li className="tag" key={tag}>{tag}</li>
              ))}
            </ul>

            <h1>Credit Line for Businesses</h1>
            <p className="lede">
              A mobile-first credit-line product for SMEs — check eligibility, activate the
              sanctioned limit, and stay on top of repayment health, all on a small screen.
            </p>

            <div className="note">
              <div className="note-title">Role &amp; note</div>
              <div className="note-body">
                I worked on top of an <strong>existing design system</strong>, extending it across
                onboarding, underwriting, and risk workflows. A focused mobile walkthrough of the
                core journeys — not a full case study.
              </div>
            </div>
          </section>

          <section id="challenge">
            <h2>The challenge</h2>
            <p>
              A credit line is a high-trust decision — what am I eligible for, what happens next,
              what needs my attention? The job was to make complex financial states feel direct on
              mobile, across three things:
            </p>
            <ul className="copy-list">
              <li><strong>Activation</strong> — make the first usable credit moment clear and action-led.</li>
              <li><strong>Comprehension</strong> — explain limits, dues, and overdue states without dense finance language.</li>
              <li><strong>Trust</strong> — surface verification and risk signals exactly where confidence is needed.</li>
            </ul>
          </section>

          <section id="mobile-journey">
            <h2>Mobile-first credit journey</h2>
            <p>
              The core path — dashboard, available limit, loan status, repayment, and credit
              activity — tightened to cut doubt between opening the app and taking the next action.
            </p>
            <h3>Dashboard &amp; loan status</h3>
            <ImageGrid items={mobileScreens} />
          </section>

          <section id="trust-risk">
            <h2>Servicing &amp; risk states</h2>
            <p>
              Active-loan details, regulatory due dates, and overdue states move the product beyond
              acquisition into servicing — keeping borrowers informed after approval.
            </p>
            <h3>Active loans &amp; overdue states</h3>
            <ImageGrid items={supportingScreens} />
          </section>

          <section id="csat-feedback">
            <h2>CSAT &amp; feedback</h2>
            <p>
              A rating-driven feedback layer that branches by score — high scores move fast, low
              scores get a clear path to explain what went wrong.
            </p>
            {csatFlows.map((flow) => (
              <div className="credit-flow-group" key={flow.title}>
                <h3>{flow.title}</h3>
                <ImageGrid items={flow.screens} />
              </div>
            ))}
          </section>

          <nav className="pager">
            <a href="#/work/crypto-exchange">
              <div className="label">Previous case</div>
              ← Crypto exchange
            </a>
            <a href="#/work/payout-module" className="next">
              <div className="label">Next case</div>
              Payout module →
            </a>
          </nav>
        </article>
      </div>

      <Footer />
    </div>
  );
}
