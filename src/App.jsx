import { Component, useLayoutEffect } from 'react';
import { Header, Footer } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { StoryPage } from './pages/StoryPage';
import { ProjectPage } from './pages/ProjectPage';
import { ContactPage } from './pages/ContactPage';
import { useLocation, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';

export class ErrorBoundary extends Component {
  constructor(e) {
    (super(e),
      (this.state = {
        error: null,
      }));
  }
  static getDerivedStateFromError(e) {
    return {
      error: e,
    };
  }
  render() {
    return this.state.error ? (
      <div className="flex min-h-screen items-center justify-center bg-cream p-8 text-sm text-ink-soft">
        Something went wrong.{' '}
        <button
          data-testid="error-retry-button"
          className="ml-2 text-ember underline"
          onClick={() =>
            this.setState({
              error: null,
            })
          }
        >
          Retry
        </button>
      </div>
    ) : (
      this.props.children
    );
  }
}
export const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  return (
    useLayoutEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
      const e = hash
        ? requestAnimationFrame(() => {
            var e;
            return null === (e = document.getElementById(hash.slice(1))) || undefined === e
              ? undefined
              : e.scrollIntoView({
                  behavior: 'instant',
                });
          })
        : null;
      return () => {
        e && cancelAnimationFrame(e);
      };
    }, [pathname, hash]),
    null
  );
};
export function AppRoutes() {
  const e = useLocation();
  return (
    <Routes location={e} key={e.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/story/:id" element={<StoryPage />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
export const App = function () {
  return (
    <div className="min-h-screen bg-cream text-ink antialiased">
      <ErrorBoundary>
        <BrowserRouter>
          <ScrollManager />
          <Header />
          <AppRoutes />
          <Footer />
          <Toaster theme="light" position="bottom-right" />
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
};

export default App;
