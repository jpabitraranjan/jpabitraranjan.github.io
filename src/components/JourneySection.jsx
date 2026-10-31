import { useRef, useState, useCallback, useLayoutEffect, useEffect } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { JOURNEY_CHAPTERS, chapterTheme } from '../data/portfolio';
import { JourneyScene } from './JourneyScene';
import { JourneyTrack } from './JourneyTrack';
import { ChapterMenu } from './ChapterMenu';
import { useLocation, Link } from 'react-router-dom';

export function JourneySection() {
  const { trackRef, progress, reduced, jump } = (() => {
      const e = useRef(null),
        t = useRef(0),
        [n, i] = useState(0),
        [a, o] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches),
        { state } = useLocation(),
        l = useCallback((t) => {
          const n = e.current;
          if (!n) return;
          const r = n.getBoundingClientRect().top + window.scrollY,
            i = n.offsetHeight - window.innerHeight;
          window.scrollTo({
            top:
              r +
              (Math.max(0, Math.min(JOURNEY_CHAPTERS.length - 1, t)) /
                (JOURNEY_CHAPTERS.length - 1)) *
                i,
            behavior: 'instant',
          });
        }, []);
      return (
        useLayoutEffect(() => {
          'number' ===
            typeof (null === state || undefined === state ? undefined : state.journeyStage) &&
            l(state.journeyStage);
        }, [state, l]),
        useEffect(() => {
          let n;
          const r = () => {
              const n = e.current;
              if (!n) return;
              const r = n.offsetHeight - window.innerHeight,
                a = Math.max(0, Math.min(1, -n.getBoundingClientRect().top / r));
              ((t.current = a * (JOURNEY_CHAPTERS.length - 1)), i(t.current));
            },
            a = () => {
              (cancelAnimationFrame(n), (n = requestAnimationFrame(r)));
            },
            s = window.matchMedia('(prefers-reduced-motion: reduce)'),
            l = () => o(s.matches);
          return (
            window.addEventListener('scroll', a, {
              passive: true,
            }),
            window.addEventListener('resize', a),
            s.addEventListener('change', l),
            r(),
            () => {
              (cancelAnimationFrame(n),
                window.removeEventListener('scroll', a),
                window.removeEventListener('resize', a),
                s.removeEventListener('change', l));
            }
          );
        }, []),
        {
          trackRef: e,
          progressRef: t,
          progress: n,
          reduced: a,
          jump: l,
        }
      );
    })(),
    a = Math.round(progress),
    o = JOURNEY_CHAPTERS[a],
    s = chapterTheme(reduced ? a : progress),
    l = Math.abs(progress - a),
    c = reduced ? 1 : 1 - Math.max(0, l - 0.2) / 0.3;
  return (
    useEffect(() => {
      const e = document.documentElement;
      (e.style.setProperty('--journey-bg', s.bg),
        e.style.setProperty('--journey-fg', s.fg),
        e.style.setProperty('--journey-muted', s.muted),
        e.style.setProperty('--journey-accent', s.accent));
    }, [s.bg, s.fg, s.muted, s.accent]),
    (
      <section ref={trackRef} id="pathway" className="journey-scroll" data-testid="pathway-section">
        <div
          className="journey-viewport"
          data-testid="pinned-journey-viewport"
          data-active-chapter={o.id}
          style={{
            '--scene-bg': s.bg,
            '--scene-fg': s.fg,
            '--scene-muted': s.muted,
            '--scene-accent': s.accent,
            backgroundColor: s.bg,
            color: s.fg,
          }}
        >
          <JourneyScene progress={progress} reduced={reduced} />
          <div className="viewport-frame" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="journey-overline">
            <span data-testid="journey-edition">PORTFOLIO / 2026</span>
            <ChapterMenu active={a} jump={jump} />
          </div>
          <div
            className="chapter-content"
            data-testid="active-chapter-content"
            style={{
              opacity: Math.max(0.05, c),
              transform: `translateY(${reduced ? 0 : 14 * (1 - c)}px) scale(${reduced ? 1 : 0.98 + 0.02 * c})`,
            }}
          >
            <p className="chapter-eyebrow" data-testid="active-chapter-period">
              <span />
              {o.label}
            </p>
            <h1 data-testid="active-chapter-title">{o.title}</h1>
            <p className="chapter-summary" data-testid="active-chapter-summary">
              {o.summary}
            </p>
            <div className="chapter-actions">
              {0 === a ? (
                <button
                  type="button"
                  className="journey-primary"
                  data-testid="hero-pathway-button"
                  onClick={() => jump(1)}
                >
                  {'Enter the journey '}
                  <ArrowDown size={16} />
                </button>
              ) : (
                <Link
                  className="journey-primary"
                  data-testid="active-chapter-story-link"
                  to={`/story/${o.id}`}
                  state={{
                    journeyStage: a,
                  }}
                >
                  {'The full story '}
                  <ArrowUpRight size={16} />
                </Link>
              )}
              {o.project ? (
                <Link
                  className="journey-secondary"
                  data-testid="active-chapter-project-link"
                  to={`/project/${o.project}`}
                  state={{
                    journeyStage: a,
                  }}
                >
                  {'Explore project '}
                  <ArrowUpRight size={14} />
                </Link>
              ) : 0 === a ? (
                <Link
                  className="journey-secondary"
                  data-testid="hero-projects-button"
                  to="/projects"
                >
                  {'Selected work '}
                  <ArrowUpRight size={14} />
                </Link>
              ) : null}
            </div>
          </div>
          <div className="object-caption" data-testid="scene-object-caption">
            <span className="object-caption-line" />
            <span>{o.detail}</span>
          </div>
          <div className="chapter-watermark" aria-hidden="true">
            {o.num}
          </div>
          <div className="journey-bottom">
            <div className="journey-bottom-label">
              <span data-testid="journey-location">MYSURU, INDIA</span>
              <a href="#selected-work" data-testid="skip-journey-link">
                {'Selected work '}
                <ArrowDown size={12} />
              </a>
            </div>
            <JourneyTrack progress={reduced ? a : progress} jump={jump} />
          </div>
          <div className="journey-scroll-hint" aria-hidden="true">
            <span />
            SCROLL TO EXPLORE
          </div>
        </div>
      </section>
    )
  );
}
