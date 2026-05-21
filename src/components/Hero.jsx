import { useEffect, useState } from 'react';

const loopLines = [
  'AI-assisted design exploration',
  'Workflow research & rapid prototyping',
  'Wireframing complex screens',
  'Ideation and concept generation',
  'Turning complex workflows into simple interfaces',
];

const pillText = 'ENTERPRISE SAAS · B2C · COMPLIANCE · FINTECH';

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;
    const id = window.setInterval(() => {
      setLineIndex((c) => (c + 1) % loopLines.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero-inner">

        <p className="hero-pill-single">{pillText}</p>

        <h1>
          I design products that make<br />
          complex workflows effortless.
        </h1>

        <div className="hero-visual" aria-hidden="true">
          {/* Decorative SVG props layered behind the main illustration. */}
          <img
            className="hero-prop hero-prop--research hero-prop--fade"
            src="/hero/ux-research.svg"
            alt=""
          />
          <img
            className="hero-prop hero-prop--wireframe hero-prop--fade"
            src="/hero/wireframing.svg"
            alt=""
          />
          <img className="hero-prop hero-prop--note-figma" src="/hero/note-figma.png" alt="" />
          <span className="hero-prop hero-prop--note-claude hero-prop--claude">
            <img src="/hero/note-claude.png" alt="" />
          </span>

          <figure className="hero-illustration">
            <img src="/hero-designer.svg" alt="" />
          </figure>
        </div>

        <p className="hero-loop" aria-live="polite">
          <span className="hero-loop-line" key={lineIndex}>{loopLines[lineIndex]}</span>
        </p>

        <p className="hero-meta">
          Currently designing Continuous Compliance at Perforce.{' '}
          <a href="#work">View work</a>
        </p>

      </div>
    </section>
  );
}
