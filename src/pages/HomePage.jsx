import { ArrowUpRight } from 'lucide-react';
import { PageShell } from '../components/Layout';
import { JourneySection } from '../components/JourneySection';
import { Link } from 'react-router-dom';

export const FEATURED_PROJECTS = [
  {
    num: '01',
    title: 'AegisTrace',
    slug: 'aegistrace',
    category: 'AGENTIC AI',
    text: 'Every line, connected to its intent.',
    mark: '\u2197',
  },
  {
    num: '02',
    title: 'Orbital',
    slug: 'orbital-engine',
    category: 'HACKVERSE \xb7 1ST PLACE',
    text: 'A better route to your next learning resource.',
    mark: '\u25ce',
  },
  {
    num: '03',
    title: 'Unischedule',
    slug: 'unischedule-erp',
    category: 'CAMPUS SYSTEMS',
    text: 'Turning timetable chaos into a system.',
    mark: '\u25a6',
  },
];
export function HomePage() {
  return (
    <PageShell testid="home-page">
      <JourneySection />
      <section id="selected-work" className="selected-work" data-testid="selected-work-section">
        <div className="section-intro">
          <div>
            <p className="section-eyebrow">THE THINGS I’VE BUILT</p>
            <h2>Curiosity, put to work.</h2>
          </div>
          <Link to="/projects" data-testid="all-projects-link">
            {'Explore my work '}
            <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="featured-grid">
          {FEATURED_PROJECTS.map((e) => (
            <Link
              to={`/project/${e.slug}`}
              data-testid={`featured-${e.slug}`}
              className="featured-project"
              key={e.slug}
            >
              <div className={`project-graphic graphic-${e.slug}`} aria-hidden="true">
                <span>{e.mark}</span>
                <small>{e.num}</small>
              </div>
              <p>{e.category}</p>
              <div>
                <h3>{e.title}</h3>
                <ArrowUpRight size={22} />
              </div>
              <span>{e.text}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="home-closing" data-testid="closing-section">
        <p className="section-eyebrow">THE NEXT CHAPTER</p>
        <div>
          <h2>
            Still curious.
            <br />
            Still building.
          </h2>
          <div>
            <p>
              Currently building AegisTrace.
              <br />
              Looking for the next team to build with.
            </p>
            <Link to="/contact" data-testid="closing-contact-button">
              {'Let\u2019s talk '}
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
