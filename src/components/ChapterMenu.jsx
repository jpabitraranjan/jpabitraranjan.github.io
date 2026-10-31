import { useState } from 'react';
import { List, ArrowUpRight } from 'lucide-react';
import { JOURNEY_CHAPTERS } from '../data/portfolio';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

export const ChapterMenu = ({ active, jump }) => {
  const [i, a] = useState(false);
  return (
    <>
      <button
        className="chapter-menu-trigger"
        type="button"
        data-testid="chapter-menu-open"
        onClick={() => a(true)}
      >
        <List size={16} />
        <span>Chapters</span>
      </button>
      <Dialog open={i} onOpenChange={a}>
        <DialogContent data-testid="chapter-menu" className="chapter-menu-dialog">
          <DialogTitle data-testid="chapter-menu-title">Every turn in the story.</DialogTitle>
          <DialogDescription className="sr-only">
            Choose a chapter in Pabitra’s journey.
          </DialogDescription>
          <div className="chapter-menu-list">
            {JOURNEY_CHAPTERS.map((e, r) => (
              <button
                type="button"
                data-testid={`chapter-menu-${e.num}`}
                aria-current={active === r ? 'step' : undefined}
                onClick={() => {
                  (a(false), requestAnimationFrame(() => jump(r)));
                }}
                key={e.id}
              >
                <span>{e.num}</span>
                <strong>{e.short}</strong>
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
