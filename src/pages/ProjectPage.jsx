import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react';
import { PERSON_LINKS, PROJECT_LINKS, PROJECTS, JOURNEY_CHAPTERS } from '../data/portfolio';
import { PageShell } from '../components/Layout';
import { TennisGameButton } from '../components/TennisGameButton';
import { ChapterObjectVisual } from '../components/ChapterObjectVisual';
import { useLocation, Link, useParams, Navigate } from 'react-router-dom';

export function ProjectPage() {
  var e, t;
  const { slug } = useParams(),
    { state } = useLocation(),
    i = ((e) => PROJECTS.find((t) => t.slug === e))(slug);
  if (!i) return <Navigate to="/projects" replace />;
  const a = PROJECTS.findIndex((e) => e.slug === slug),
    o = PROJECTS[(a - 1 + PROJECTS.length) % PROJECTS.length],
    s = PROJECTS[(a + 1) % PROJECTS.length],
    l = JOURNEY_CHAPTERS.find((e) => e.project === slug);
  return (
    <PageShell testid={`project-page-${i.slug}`}>
      <article className="reading-page">
        <div className="reading-back-row">
          <Link to="/projects#projects" data-testid="project-back-link" className="reading-back">
            <ArrowLeft size={14} />
            {' All projects'}
          </Link>
          {'number' ===
            typeof (null === state || undefined === state ? undefined : state.journeyStage) && (
            <Link
              to="/"
              state={state}
              data-testid="project-journey-back-link"
              className="reading-back"
            >
              {'Return to the journey '}
              <ArrowUpRight size={14} />
            </Link>
          )}
        </div>
        <header className="reading-header">
          <p className="section-eyebrow" data-testid="project-period">
            {i.badge}
            {' / '}
            {i.period}
          </p>
          <h1 data-testid="project-title">{i.fullTitle}</h1>
          <p data-testid="project-summary">{i.summary}</p>
          <span className="reading-role" data-testid="project-role">
            {'My role \u2014 '}
            {i.role}
          </span>
        </header>
        {l && <ChapterObjectVisual chapterId={l.id} />}
        <dl className="project-facts">
          {i.facts.map((e, t) => (
            <div data-testid={`project-fact-${t}`} key={e.k}>
              <dt>{e.k}</dt>
              <dd>{e.v}</dd>
            </div>
          ))}
        </dl>
        <div className="reading-body">
          {i.story.map((e, t) => (
            <section data-testid={`project-story-section-${t}`} key={e.h}>
              <h2>{e.h}</h2>
              {e.p.map((e, t) => (
                <p key={t}>{e}</p>
              ))}
            </section>
          ))}
        </div>
        {i.code && (
          <pre className="reading-code" data-testid="project-code">
            {i.code}
          </pre>
        )}
        <div className="reading-stack" data-testid="project-stack">
          {i.stack.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </div>
        {(null === (e = i.people) || undefined === e ? undefined : e.length) > 0 && (
          <section className="reading-people">
            <h2 className="section-eyebrow">THE PEOPLE</h2>
            {i.people.map((e, t) => (
              <div data-testid={`project-person-${t}`} key={e.name}>
                <div>
                  <p>{e.name}</p>
                  <span>{e.role}</span>
                </div>
                {PERSON_LINKS[e.name] && (
                  <a
                    data-testid={`project-people-link-${e.name.split(' ')[0].toLowerCase()}`}
                    href={PERSON_LINKS[e.name]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'Profile '}
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            ))}
          </section>
        )}
        <div className="project-actions">
          {null === (t = PROJECT_LINKS[i.slug]) || undefined === t
            ? undefined
            : t.map((e, t) => (
                <a
                  className="reading-primary"
                  data-testid={0 === t ? 'project-repo-button' : `project-repo-button-${t}`}
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={e.url}
                >
                  {e.label}
                  <ArrowUpRight size={15} />
                </a>
              ))}
          {i.repo && !PROJECT_LINKS[i.slug] && (
            <span className="repo-unavailable" data-testid="project-repo-unavailable">
              Repository link not provided
            </span>
          )}
          {i.playable && (
            <TennisGameButton testId="project-play-button" className="reading-primary" />
          )}
        </div>
        <nav className="reading-pagination" aria-label="Project navigation">
          {[
            [o, 'Previous project', 'prev', ArrowLeft],
            [s, 'Next project', 'next', ArrowRight],
          ].map((e) => {
            let [t, n, r, i] = e;
            return (
              <Link to={`/project/${t.slug}`} data-testid={`project-nav-${r}`} key={r}>
                <span>
                  {n}
                  <i size={14} />
                </span>
                <strong>{t.title}</strong>
              </Link>
            );
          })}
        </nav>
      </article>
    </PageShell>
  );
}
