import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECT_LINKS, PROJECTS, LISTED_PROJECTS } from '../data/portfolio';
import { PageShell } from '../components/Layout';
import { SkillsSection } from '../components/SkillsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { Link } from 'react-router-dom';

export function ProjectsPage() {
  return (
    <PageShell testid="projects-index-page">
      <SkillsSection />
      <ExperienceSection />
      <section
        className="work-index work-project-section"
        id="projects"
        data-testid="work-projects-section"
      >
        <header className="reading-header">
          <p className="section-eyebrow">03 / SELECTED PROJECTS</p>
          <h2 data-testid="projects-title">Less theory. More making.</h2>
          <p data-testid="projects-summary">
            From a first game to code traceability. The projects that shaped how I build.
          </p>
        </header>
        <div className="work-list">
          {LISTED_PROJECTS.map((e, t) => {
            var n;
            return (
              <article
                className="work-project-row"
                data-testid={`work-project-${e.slug}`}
                key={e.slug}
              >
                <Link to={`/project/${e.slug}`} data-testid={`project-row-${e.slug}`}>
                  <span className="work-number">{String(t + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.summary}</p>
                    <span>{e.stack.slice(0, 3).join(' / ')}</span>
                  </div>
                  <ArrowUpRight size={22} />
                </Link>
                <div className="work-repo-links">
                  {(null === (n = PROJECT_LINKS[e.slug]) || undefined === n
                    ? undefined
                    : n.map((t, n) => (
                        <a
                          href={t.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`work-repo-${e.slug}-${n}`}
                          key={t.url}
                        >
                          <Github size={13} />
                          {PROJECT_LINKS[e.slug].length > 1 ? t.label : 'GitHub'}
                          <ArrowUpRight size={12} />
                        </a>
                      ))) || (
                    <span data-testid={`work-repo-unavailable-${e.slug}`}>
                      Repository link not provided
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
