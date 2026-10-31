import { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { JOURNEY_CHAPTERS } from '../data/portfolio';

export const TRACK_POINTS = JOURNEY_CHAPTERS.map((e, t) => ({
  x: 100 + 155 * t,
  y: 52 + 24 * Math.sin((t * Math.PI) / 2),
}));
export const TRACK_PATH = TRACK_POINTS.reduce(
  (e, t, n) =>
    n
      ? `${e} C ${TRACK_POINTS[n - 1].x + 78},${TRACK_POINTS[n - 1].y} ${t.x - 78},${t.y} ${t.x},${t.y}`
      : `M${t.x},${t.y}`,
  '',
);
export const JourneyTrack = ({ progress, jump }) => {
  const i = useRef(null),
    [a, o] = useState(600),
    s = Math.round(progress);
  useEffect(() => {
    const e = new ResizeObserver((e) => {
      let [t] = e;
      return o(t.contentRect.width);
    });
    return (e.observe(i.current), () => e.disconnect());
  }, []);
  const l = a / 2 - (100 + 155 * progress);
  return (
    <div className="journey-track" data-testid="journey-track">
      <div className="track-caption">
        <span>THE PATH</span>
        <span data-testid="journey-chapter-count">
          {JOURNEY_CHAPTERS[s].num} <i>/ 11</i>
        </span>
      </div>
      <div className="track-window" ref={i}>
        <div
          className="track-ribbon"
          style={{
            transform: `translateX(${l}px)`,
          }}
        >
          <svg viewBox="0 0 1905 110" aria-hidden="true">
            <path d={TRACK_PATH} className="track-base" />
            <path
              d={TRACK_PATH}
              className="track-progress"
              pathLength="1100"
              strokeDasharray="1100"
              strokeDashoffset={1100 - 100 * progress}
              data-testid="journey-path-progress"
            />
          </svg>
          {JOURNEY_CHAPTERS.map((e, r) => (
            <button
              type="button"
              onClick={() => jump(r)}
              title={e.short}
              aria-label={`Chapter ${e.num}: ${e.short}`}
              aria-current={s === r ? 'step' : undefined}
              tabIndex={Math.abs(TRACK_POINTS[r].x + l - a / 2) < a / 2 - 15 ? 0 : -1}
              data-testid={`journey-node-${e.num}`}
              className={`track-node ${s === r ? 'is-active' : ''} ${r < progress ? 'is-visited' : ''}`}
              style={{
                left: TRACK_POINTS[r].x,
                top: TRACK_POINTS[r].y,
              }}
              key={e.id}
            >
              <span className="track-dot" />
              <span className="track-label">{e.short}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="track-controls">
        <button
          type="button"
          aria-label="Previous chapter"
          title="Previous chapter"
          data-testid="journey-previous"
          disabled={0 === s}
          onClick={() => jump(s - 1)}
        >
          <ArrowLeft size={17} />
        </button>
        <button
          type="button"
          aria-label="Next chapter"
          title="Next chapter"
          data-testid="journey-next"
          disabled={s === JOURNEY_CHAPTERS.length - 1}
          onClick={() => jump(s + 1)}
        >
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
};
