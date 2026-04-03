import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function HpNav({ page }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > 80);
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [page]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`hp-nav${page ? ' hp-nav--page' : ''}${scrolled ? ' hp-nav--scrolled' : ''}${menuOpen ? ' hp-nav--open' : ''}`}>
      <Link to="/" className="hp-nav-logo-combo" onClick={close}>
        <img src="/tl237rrtlogo.png" alt="Teamsters Local 237" className="hp-nav-logo-badge" />
        <img src="/rrtlogoweb.png" alt="RRT" className="hp-nav-logo-rrt" />
      </Link>

      <button
        className={`hp-nav-hamburger${menuOpen ? ' hp-nav-hamburger--open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`hp-nav-links${menuOpen ? ' hp-nav-links--open' : ''}`}>
        <a href={page ? '/#what-is-rrt' : '#what-is-rrt'} onClick={close}>WHAT IS RRT?</a>
        <a href={page ? '/#rrt-process' : '#rrt-process'} onClick={close}>THE RRT PROCESS</a>
        <Link to="/guide" onClick={close}>THE GUIDE</Link>
        <Link to="/contact" onClick={close}>CONTACT</Link>
        <Link to="/app" className="hp-nav-report-btn" onClick={close}>Submit a Report</Link>
      </div>
    </nav>
  );
}

export default HpNav;
