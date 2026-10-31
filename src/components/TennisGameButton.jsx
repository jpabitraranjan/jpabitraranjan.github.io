import { useState, useRef, useEffect } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { PROJECT_LINKS } from '../data/portfolio';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

export const TennisGameButton = ({ testId, className }) => {
  const [i, a] = useState(false),
    o = useRef(null),
    s = useRef(null);
  return (
    useEffect(() => {
      const e = (e) => {
        var t, n;
        e.source === (null === (t = o.current) || undefined === t ? undefined : t.contentWindow) &&
          'tennis-close' === (null === (n = e.data) || undefined === n ? undefined : n.type) &&
          a(false);
      };
      return (
        window.addEventListener('message', e),
        () => window.removeEventListener('message', e)
      );
    }, []),
    (
      <>
        <button
          type="button"
          ref={s}
          className={className}
          data-testid={testId}
          onClick={() => a(true)}
        >
          {'Play the game '}
          <Play size={14} />
        </button>
        <Dialog open={i} onOpenChange={a}>
          <DialogContent
            className="tennis-dialog"
            data-testid="tennis-game-dialog"
            onCloseAutoFocus={(e) => {
              var t;
              (e.preventDefault(), null === (t = s.current) || undefined === t || t.focus());
            }}
          >
            <DialogTitle data-testid="tennis-game-title">The game that started it.</DialogTitle>
            <DialogDescription>
              Original tennis project, with touch and keyboard support.
            </DialogDescription>
            <iframe
              ref={o}
              src="/games/tennis.html"
              title="Pabitra’s original tennis game"
              data-testid="tennis-game-frame"
              sandbox="allow-scripts"
              className="tennis-frame"
            />
            <a
              className="tennis-source"
              data-testid="tennis-source-link"
              href={PROJECT_LINKS['js-tennis-2020'][0].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Original source on GitHub '}
              <ArrowUpRight size={14} />
            </a>
          </DialogContent>
        </Dialog>
      </>
    )
  );
};
