import { useEffect, useState } from 'react';
import './CryptoExchangeCase.css';
import Footer from '../components/Footer';

const sections = [
  { id: 'context', label: 'Context' },
  { id: 'problem', label: 'The problem' },
  { id: 'audit', label: 'AI audit' },
  { id: 'design', label: 'The redesign' },
  { id: 'system', label: 'Components' },
  { id: 'scale', label: 'Scalability' },
];

const tags = ['#Work', '#Web', '#Enterprise SaaS', '#AI-assisted', '#2-day delivery'];

// Composed cover thumbnail (2404×1072, rounded corners + gradient border
// baked into the artwork) — rendered at its natural ratio, uncropped.
const heroBanner = 'Thumbnail.svg';

const currentFlow = 'current flow.svg';        // 4468×3285 — old flow map
const legacyPage = 'legacy download page.png'; // 3456×7110 — old downloads hub, full scroll

const auditCards = [
  'ux audit/Group 2.svg', // 894×508
  'ux audit/Group 3.svg', // 913×508
  'ux audit/Group 4.svg', // 879×508
];

const downloadPage = '1440px Download Page.svg'; // 1440×4272 — product download page
const downloadsHub = '1440px Downloads.svg';     // 1440×3756 — downloads landing

const leadPopup = 'Lead generation popup.svg';   // 1440×780
const dropdownInput = 'Dropdown input.svg';      // 544×873

// Native dimensions drive PairGrid row ratios, same as the LOS case study.
const screenSizes = {
  'ux audit/Group 2.svg': { width: 894, height: 508 },
  'ux audit/Group 3.svg': { width: 913, height: 508 },
  'ux audit/Group 4.svg': { width: 879, height: 508 },
};

function asset(path) {
  return `/saas enterprise download page/${path}`
    .split('/')
    .map(encodeURIComponent)
    .join('/');
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

// Same two-per-row pattern as the LOS case study: each row sizes itself from
// its own pair, a lone trailing image stays left-aligned at one-column width.
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

export default function DownloadCase() {
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
    <div className="coinome-page los-page download-page">
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
            src={asset(heroBanner)}
            alt="Enterprise download experience case study cover"
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

            <h1>Enterprise Download Experience</h1>
            <p className="lede">
              A hard-deadline redesign for Perforce, an enterprise SaaS company with 20+ products.
              Every product carried its own legacy, engineer-built download page; I replaced them
              all with one scalable template — the latest version downloadable in a single click —
              and went from kickoff to delivered design in <strong>two days</strong>, using AI to
              compress weeks of audit work into hours.
            </p>
          </section>

          <section id="context">
            <h2>Context</h2>
            <p>
              As part of a rebrand, Perforce consolidated its entire web presence into a single
              site — perforce.com. Marketing rebuilt the site; downloads didn&apos;t make the cut.
              All 20+ products kept their own legacy download pages, each built by engineers years
              ago, each different from the next. For an audience of enterprise developers and
              admins, downloading is the single most important job on the site — and it was the
              most broken part of it.
            </p>
          </section>

          <section id="problem">
            <h2>The legacy experience</h2>
            <p>
              The failures repeated across every product, just in different arrangements:
            </p>
            <ul className="copy-list">
              <li>
                <strong>Headings that looked like buttons</strong> — set in the primary brand
                color, styled like a downloadable action, but not clickable at all.
              </li>
              <li>
                <strong>The real button buried</strong> — you scrolled past walls of text and
                hunted below the fold for the actual download.
              </li>
              <li>
                <strong>Three dropdowns before anything happened</strong> — select family, select
                platform, select version, then download. For a user who almost always wants the
                latest release for their OS.
              </li>
              <li>
                <strong>No shared layout</strong> — 20+ products meant 20+ different download
                experiences, none of them designed.
              </li>
            </ul>
            <h3>The old flow, mapped end to end</h3>
            <Shot src={currentFlow} alt="Map of the legacy download flow across products" />
            <h3>Where the journey started</h3>
            <p>
              The rebranded site&apos;s downloads hub looked fine on the surface — a paginated
              wall of product cards, six pages deep. But every &ldquo;download&rdquo; button on it
              exited into a different legacy experience, which is where the real work began.
            </p>
            <Shot
              src={legacyPage}
              alt="Full-length capture of the downloads hub before the redesign"
              className="legacy-shot"
            />
          </section>

          <section id="audit">
            <h2>An AI-accelerated audit</h2>
            <p>
              A proper UX audit of 20+ download pages normally costs two weeks or more — and the
              deadline gave me two days for the whole project. So I put AI to work in three
              passes. First, a
              detailed sweep of every product&apos;s download page, producing an inventory of
              current issues and the friction customers were likely hitting. Second, I built a
              custom agent with the company&apos;s persona types encoded as a skill, and had it
              walk each page <em>as each persona</em> to surface problems a generic heuristic pass
              would miss. Third, once the broken experience was fully mapped, another pass across
              all the pages extracted the common elements they shared — the raw material for a
              single unified template.
            </p>
            <p>
              AI compressed the research; the synthesis, the prioritization, and every design
              decision that follows stayed with me. The result: what would normally be a
              multi-week project went from kickoff to delivered design in two days.
            </p>
            <h3>Audit artifacts</h3>
            <PairGrid items={auditCards} />
          </section>

          <section id="design">
            <h2>The redesign — one job to be done: download</h2>
            <p>
              A customer clicks a product on the products page for exactly one reason. The whole
              page — this is its third iteration, all inside the same deadline — is anchored on
              that job:
            </p>
            <ul className="copy-list">
              <li>
                <strong>Latest version upfront</strong> — the hero shows the current release for
                Windows, Linux, and macOS, each downloadable in a single click. This replaces the
                three-dropdown gauntlet, because the dominant behavior is &ldquo;give me the
                latest version for my OS.&rdquo;
              </li>
              <li>
                <strong>Utilities above, at lower hierarchy</strong> — release notes,
                documentation, and contact sales sit in a breadcrumb-level row on top: reachable,
                never competing with the download.
              </li>
              <li>
                <strong>Earlier versions one action away</strong> — a button scrolls to an
                on-page section with OS tabs listing every still-supported release.
              </li>
              <li>
                <strong>The ecosystem on the same page</strong> — the required software a product
                depends on, and the rest of the downloadable portfolio, surfaced upfront instead
                of hidden behind more navigation.
              </li>
            </ul>
            <h3>The product download page</h3>
            <Shot src={downloadPage} alt="Redesigned product download page, full length" />
            <h3>The downloads landing</h3>
            <Shot src={downloadsHub} alt="Redesigned downloads landing page, full length" />
          </section>

          <section id="system">
            <h2>Supporting pieces</h2>
            <p>
              The smaller components carry the same system, so nothing falls back to the old
              ad-hoc patterns — a version dropdown for the earlier-versions list, and a
              lead-generation popup for downloads that capture customer details on the way.
            </p>
            <h3>Lead-generation popup</h3>
            <Shot src={leadPopup} alt="Lead generation popup design" />
            <h3>Version dropdown</h3>
            <Shot
              src={dropdownInput}
              alt="Version dropdown input states"
              className="raw-shot--narrow"
            />
          </section>

          <section id="scale">
            <h2>Built to scale, not to match one product</h2>
            <p>
              This is one template, not twenty designs. It holds whether a product ships on one
              platform or three, carries two supported versions or ten, needs companion software
              or none. Products can add or drop versions without the layout breaking, and every
              new product lands on the same pattern — the job to be done stays a single click away
              across the whole portfolio.
            </p>
          </section>

          <nav className="pager">
            <a href="#/">
              <div className="label">All work</div>
              ← Home page
            </a>
            <a href="#/work/los" className="next">
              <div className="label">Next case</div>
              Loan Origination System →
            </a>
          </nav>
        </article>
      </div>

      <Footer />
    </div>
  );
}
