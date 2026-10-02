import { useEffect, useState } from 'react';
import './CryptoExchangeCase.css';
import Footer from '../components/Footer';

const sections = [
  { id: 'brief', label: 'The brief' },
  { id: 'process', label: 'AI-native process' },
  { id: 'flow', label: 'Migration flow' },
  { id: 'align', label: 'Align later' },
  { id: 'outcome', label: 'Outcome' },
];

const tags = [
  '#Work',
  '#Enterprise SaaS',
  '#AI-native workflow',
  '#Vibe-coded prototype',
  '#Claude',
  '#Data migration',
];

// No composed cover exists for this project, so the hero frames a real screen
// from the prototype (see .migration-page .hero-banner).
const heroScreen = 'image (33) 1.svg';

const selectJobs = [
  { src: 'image (31) 1.svg', alt: 'Available Assets tab listing legacy engine jobs with their migration status' },
  { src: 'image (32) 1.svg', alt: 'All eight jobs selected, with the Migrate Jobs action enabled' },
];

const chooseMode = [
  { src: 'image (33) 1.svg', alt: 'Migration Overview showing each job’s object count and migration mode' },
  { src: 'image (34) 1.svg', alt: 'Migration mode menu open with Align to DCT and Preserve engine state' },
];

const summary = [
  { src: 'image (35) 1.svg', alt: 'Migration summary with assets, global objects, source and target, and mode decisions' },
];

const alignSteps = [
  { src: 'ALIGN/image (26) 1.svg', alt: 'Alignment Overview mapping engine-specific objects to DCT standard objects' },
  { src: 'ALIGN/image (27) 1.svg', alt: 'Affected Objects listing the jobs and rule sets the alignment touches' },
  { src: 'ALIGN/image (28) 1.svg', alt: 'Alignment summary with totals and a warning that aligning cannot be undone' },
];

function asset(path) {
  return `/Migration app/${path}`
    .split('/')
    .map(encodeURIComponent)
    .join('/');
}

function Shot({ src, alt }) {
  return (
    <figure className="raw-shot">
      <img src={asset(src)} alt={alt} loading="lazy" />
    </figure>
  );
}

// Screens run one per row at full article width, 32px apart — dense
// enterprise UI stays readable instead of shrinking into a two-up grid.
function ShotStack({ items }) {
  return (
    <div className="full-shot-stack">
      {items.map((item) => (
        <Shot key={item.src} {...item} />
      ))}
    </div>
  );
}

export default function MigrationCase() {
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
    <div className="coinome-page migration-page">
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
            src={asset(heroScreen)}
            alt="Data and asset migration case study cover: the Migrate Jobs overview in DCT"
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

            <h1>Data &amp; Asset Migration</h1>
            <p className="lede">
              Perforce is bringing its compliance products onto DCT, one new central platform.
              Customers had years of masking jobs, rule sets, and algorithms on legacy Continuous
              Compliance engines, and all of it had to come across. On a tight deadline, I designed
              the migration experience with an <strong>AI-native workflow</strong>: Claude for the
              flow audit and first-draft IA, then a <strong>vibe-coded, clickable prototype</strong>{' '}
              that stakeholders, customers, and testers could use from a single link.
            </p>

            <div className="note">
              <div className="note-title">Role &amp; AI in the workflow</div>
              <div className="note-body">
                I led the research, IA, user flow, and interaction design. Claude accelerated each
                stage — auditing both products, drafting the IA, and building the coded prototype —
                while every design decision stayed with me. The screens below come from that
                prototype.
              </div>
            </div>
          </section>

          <section id="brief">
            <h2>The brief</h2>
            <p>
              DCT (Delphix Data Control Tower) is the new central platform for Perforce&apos;s
              compliance products. The customers moving to it weren&apos;t starting fresh: they
              had <strong>years of work</strong> on legacy Continuous Compliance engines — jobs,
              rule sets, algorithms, connectors — that DCT had to take on without anyone rebuilding
              it by hand.
            </p>
            <p>The deadline was tight, and the problem had three hard edges:</p>
            <ul className="copy-list">
              <li>
                <strong>Volume and dependency</strong> — every job carries dozens of objects, and
                many of them are shared across jobs.
              </li>
              <li>
                <strong>Two kinds of customer</strong> — some want to adopt DCT&apos;s standard
                objects; others need their engine&apos;s configuration preserved exactly.
              </li>
              <li>
                <strong>Referential integrity</strong> — rule sets share algorithms through
                chains, so converting one object can change masking output somewhere else.
              </li>
            </ul>
          </section>

          <section id="process">
            <h2>An AI-native process</h2>
            <p>
              To move fast without skipping the thinking, I brought Claude into every stage and
              kept the judgment calls for myself.
            </p>
            <ul className="copy-list">
              <li>
                <strong>1. Audit both products</strong> — Claude walked the existing flows in the
                new DCT app and the legacy engine, surfacing the differences, the components we
                could reuse, and the simplest path from one to the other.
              </li>
              <li>
                <strong>2. Draft the IA</strong> — with our persona types and requirements as
                input, Claude produced a first-pass information architecture and user flow that
                made the whole journey easy to visualize. I refined it by hand.
              </li>
              <li>
                <strong>3. Align stakeholders</strong> — I took PMs and stakeholders through the IA
                and flow, and we iterated over a few rounds until it was hammered out.
              </li>
              <li>
                <strong>4. Build a coded prototype</strong> — I handed the agreed flow to Claude to
                build a lightweight, interactive front-end prototype, deployed to a hosted,
                shareable link.
              </li>
              <li>
                <strong>5. Put it in people&apos;s hands</strong> — stakeholders clicked through it
                in real time, and the same link can go to potential customers and testers to check
                they can migrate years of data with ease.
              </li>
            </ul>
            <p>
              AI compressed the research, the first draft, and the build. What to reuse, what to
              cut, and how the two migration modes behave were design decisions — and those stayed
              with me.
            </p>
          </section>

          <section id="flow">
            <h2>The migration flow</h2>
            <p>
              Migration starts once a user registers their legacy engine with DCT. From there,
              it&apos;s three steps.
            </p>

            <h3>1 · Pick the jobs</h3>
            <p>
              The engine&apos;s Available Assets tab lists every job with its type, environment,
              application, and migration status, so it&apos;s clear what has already moved. Users
              select the jobs they want and choose Migrate Jobs.
            </p>
            <ShotStack items={selectJobs} />

            <h3>2 · Decide how each job lands</h3>
            <p>
              The Migration Overview shows what each job will create before anything moves, with
              a migration mode set in bulk or per job. This is the core decision in the flow:
            </p>
            <ul className="copy-list">
              <li>
                <strong>Align to DCT standards (default)</strong> — reuses the standard objects DCT
                already ships with and adds only what&apos;s missing. Rules and algorithms map
                onto one governed set, which keeps referential integrity across every job.
              </li>
              <li>
                <strong>Preserve engine state</strong> — creates a fresh copy of every object in
                the migrated jobs, even where DCT already ships an equivalent, so the engine&apos;s
                configuration arrives exactly as it was.
              </li>
            </ul>
            <p>
              Defaulting to Align steers customers toward a clean, centrally governed platform.
              Preserve keeps cautious teams unblocked — without trapping them, because they can
              align later.
            </p>
            <ShotStack items={chooseMode} />

            <h3>3 · Review and migrate</h3>
            <p>
              A final summary splits the migration into application assets and global objects,
              confirms source and target, counts each mode decision, and flags issues before they
              fail — like connectors with missing credentials.
            </p>
            <ShotStack items={summary} />
          </section>

          <section id="align">
            <h2>Align later, when ready</h2>
            <p>
              Preserve engine state shouldn&apos;t be a dead end. Anything migrated that way can
              be aligned to DCT standards later, in three steps:
            </p>
            <ul className="copy-list">
              <li>
                <strong>Alignment overview</strong> — every engine-specific copy, mapped to the DCT
                standard object that replaces it.
              </li>
              <li>
                <strong>Affected objects</strong> — the jobs and rule sets the change touches,
                including rule sets reached through chained algorithms, whose masking output will
                change.
              </li>
              <li>
                <strong>Summary</strong> — totals for objects converted and jobs and rule sets
                affected, plus a clear warning that alignment can&apos;t be undone and applies from
                the next job run.
              </li>
            </ul>
            <ShotStack items={alignSteps} />
          </section>

          <section id="outcome">
            <h2>Outcome</h2>
            <ul className="copy-list">
              <li>
                <strong>A working flow, not a deck</strong> — stakeholders and PMs reviewed the
                real interaction in a browser, so feedback landed on behavior instead of on
                interpretations of static frames.
              </li>
              <li>
                <strong>Validation from one link</strong> — potential customers and testers can
                try the migration themselves and show whether years of data really moves with
                ease.
              </li>
              <li>
                <strong>Speed with the thinking intact</strong> — audit, IA, stakeholder alignment,
                and a testable prototype against a tight deadline, with AI taking the first pass at
                each stage.
              </li>
            </ul>
          </section>

          <nav className="pager">
            <a href="#/">
              <div className="label">All work</div>
              ← Home page
            </a>
            <a href="#/work/enterprise-downloads" className="next">
              <div className="label">Next case</div>
              Enterprise Downloads →
            </a>
          </nav>
        </article>
      </div>

      <Footer />
    </div>
  );
}
