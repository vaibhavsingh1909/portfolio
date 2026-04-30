import { Sun, Moon } from 'lucide-react';
import './Header.css';

export default function Header({ theme, toggleTheme }) {
  return (
    <>
      <div className="masthead-border-top"></div>
      <header className="masthead">
        <div className="masthead-top">
          <span className="masthead-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} · Pune, India</span>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            <span>{theme === 'dark' ? 'Light Edition' : 'Dark Edition'}</span>
          </button>
        </div>
        <div className="masthead-title-container">
          <h1 className="masthead-title">The Portfolio <em>Magazine</em></h1>
          <p className="masthead-subtitle">Product Design, UX Strategy, & Interaction Craft</p>
        </div>
        <nav className="masthead-nav">
          <ul>
            <li><a href="#work">Selected Work</a></li>
            <li><a href="#about">About The Author</a></li>
            <li><a href="#experience">Career History</a></li>
            <li><a href="#contact">Contact Desk</a></li>
          </ul>
        </nav>
        <div className="masthead-heavy-divider"></div>
      </header>
    </>
  );
}
