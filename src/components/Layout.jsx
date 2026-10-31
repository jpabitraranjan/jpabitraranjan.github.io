import { ArrowUpRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export function Header() {
  const { pathname } = useLocation();
  return (
    <header
      className={'site-header ' + ('/' === pathname ? 'header-journey' : 'header-reading')}
      data-testid="site-nav"
    >
      <Link className="nav-brand" to="/" data-testid="nav-home-link">
        <span className="brand-symbol">
          p<span>.</span>
        </span>
        <span>Pabitra Ranjan Jena</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link className={'/' === pathname ? 'nav-active' : ''} to="/" data-testid="nav-story-link">
          Journey
        </Link>
        <Link
          className={pathname.includes('project') ? 'nav-active' : ''}
          to="/projects"
          data-testid="nav-projects-link"
        >
          Work
        </Link>
        <Link
          className={'/contact' === pathname ? 'nav-active' : ''}
          to="/contact"
          data-testid="nav-contact-link"
        >
          {'Contact '}
          <ArrowUpRight size={12} />
        </Link>
      </nav>
      <div className="nav-status" data-testid="nav-availability">
        <span />
        Open to opportunities
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer" data-testid="site-footer">
      <p data-testid="footer-copyright">© 2026 Pabitra Ranjan Jena</p>
      <span>Always a work in progress.</span>
      <div>
        <Link to="/" data-testid="footer-story-link">
          Journey
        </Link>
        <Link to="/projects" data-testid="footer-projects-link">
          Work
        </Link>
        <Link to="/contact" data-testid="footer-contact-link">
          Contact
        </Link>
      </div>
    </footer>
  );
}
export function PageShell({ children, testid }) {
  return (
    <main data-testid={testid} className="min-h-screen">
      {children}
    </main>
  );
}
