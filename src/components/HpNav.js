import { Link } from 'react-router-dom';

function HpNav({ page }) {
  return (
    <nav className={page ? 'hp-nav hp-nav--page' : 'hp-nav'}>
      <img src="/tl237rrtlogo.png" alt="Teamsters Local 237" className="hp-nav-logo" />
      <div className="hp-nav-links">
        <a href={page ? '/#what-is-rrt' : '#what-is-rrt'}>WHAT IS RRT?</a>
        <a href={page ? '/#the-rrt-process' : '#the-rrt-process'}>THE RRT PROCESS</a>
        <Link to="/guide">THE GUIDE</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/profile" className="hp-nav-report-btn">Submit a Report</Link>
      </div>
    </nav>
  );
}

export default HpNav;
