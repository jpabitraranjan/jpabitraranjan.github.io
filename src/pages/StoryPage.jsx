import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react';
import { PERSON_LINKS, PROJECT_LINKS, STORY_ACTS } from '../data/portfolio';
import { PageShell } from '../components/Layout';
import { TennisGameButton } from '../components/TennisGameButton';
import { ChapterObjectVisual } from '../components/ChapterObjectVisual';
import { Link, useParams, Navigate } from 'react-router-dom';

export function StoryPage() {
  var e;
  const { id } = useParams(),
    n = STORY_ACTS.findIndex((e) => e.id === id);
  if (-1 === n) return <Navigate to="/" replace />;
  const r = STORY_ACTS[n],
    i = STORY_ACTS[(n - 1 + STORY_ACTS.length) % STORY_ACTS.length],
    a = STORY_ACTS[(n + 1) % STORY_ACTS.length];
  return (
    <PageShell testid={`story-page-${r.id}`}>
      <article className="reading-page">
        <Link
          data-testid="story-back-link"
          to="/"
          state={{
            journeyStage: n + 1,
          }}
          className="reading-back"
        >
          <ArrowLeft size={14} />
          {' Back to the journey'}
        </Link>
        <header className="reading-header">
          <p className="section-eyebrow" data-testid="story-period">
            {'CHAPTER '}
            {r.num}
            {' / '}
            {r.period}
          </p>
          <h1 data-testid="story-title">{r.title}</h1>
          <p data-testid="story-tagline">{r.tagline}</p>
        </header>
        <ChapterObjectVisual chapterId={r.id} />
        <div className="reading-body">
          {r.body.map((e, t) => (
            <p data-testid={`story-paragraph-${t}`} key={t}>
              {e}
            </p>
          ))}
        </div>
        {r.quote && (
          <blockquote className="reading-quote" data-testid="story-quote">
            <p>“{r.quote.text}”</p>
            <footer>
              {'\u2014 '}
              {r.quote.by}
            </footer>
          </blockquote>
        )}
        {r.code && (
          <pre className="reading-code" data-testid="story-code">
            {r.code}
          </pre>
        )}
        {r.figures && (
          <section className="reading-people">
            <h2 className="section-eyebrow">THE PEOPLE</h2>
            {r.figures.map((e, t) => (
              <div data-testid={`story-person-${t}`} key={e.name}>
                <div>
                  <p>{e.name}</p>
                  <span>{e.role}</span>
                </div>
                {PERSON_LINKS[e.name] ? (
                  <a
                    data-testid={`story-figure-link-${r.num}-${t}`}
                    href={PERSON_LINKS[e.name]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'Profile '}
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span>{'link coming soon' === e.note ? 'Profile not provided' : e.note}</span>
                )}
              </div>
            ))}
          </section>
        )}
        {(r.projectSlug || r.links) && (
          <section className="reading-related">
            <h2 className="section-eyebrow">FROM THIS CHAPTER</h2>
            {r.projectSlug && (
              <Link to={`/project/${r.projectSlug}`} data-testid={`story-project-link-${r.num}`}>
                {'Explore the project '}
                <ArrowUpRight size={17} />
              </Link>
            )}
            {null === (e = r.links) || undefined === e
              ? undefined
              : e.map((e) => {
                  var t;
                  return 'game' === e.kind ? (
                    <TennisGameButton testId={`story-link-${r.num}-${e.kind}`} key={e.kind} />
                  ) : null !== (t = PROJECT_LINKS[r.projectSlug]) && undefined !== t && t[0] ? (
                    <a
                      data-testid={`story-link-${r.num}-${e.kind}`}
                      href={PROJECT_LINKS[r.projectSlug][0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={e.kind}
                    >
                      {e.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span
                      className="repo-unavailable"
                      data-testid={`story-link-unavailable-${r.num}`}
                      key={e.kind}
                    >
                      Repository link not provided
                    </span>
                  );
                })}
          </section>
        )}
        <nav className="reading-pagination" aria-label="Chapter navigation">
          {[
            [i, 'Previous chapter', 'prev', ArrowLeft],
            [a, 'Next chapter', 'next', ArrowRight],
          ].map((e) => {
            let [t, n, r, i] = e;
            return (
              <Link to={`/story/${t.id}`} data-testid={`story-nav-${r}`} key={r}>
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
