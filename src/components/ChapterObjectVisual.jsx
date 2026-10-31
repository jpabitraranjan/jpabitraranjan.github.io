import { JOURNEY_CHAPTERS } from '../data/portfolio';
import { JourneyScene } from './JourneyScene';

export const ChapterObjectVisual = ({ chapterId }) => {
  const n = JOURNEY_CHAPTERS.findIndex((e) => e.id === chapterId);
  return n < 0 ? null : (
    <div
      className="reading-visual"
      data-testid="chapter-object-visual"
      style={{
        isolation: 'isolate',
        background: JOURNEY_CHAPTERS[n].bg,
      }}
    >
      <JourneyScene progress={n} reduced view="object" />
    </div>
  );
};
