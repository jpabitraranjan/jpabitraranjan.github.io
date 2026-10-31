import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FIDELITY_EXPERIENCE = {
  company: 'Fidelity Investments',
  role: 'LEAP Summer Intern',
  team: 'Asset Management Technology \xb7 Fixed Income',
  dates: 'May \u2014 July 2026',
  location: 'Bengaluru, India',
  summary:
    'Built a Spring Boot and Angular tool to visualise ETF constituent changes and portfolio rebalancing events. Worked across development, JUnit testing, and CI/CD delivery in an Agile / XP team, with code reviews and client feedback.',
  //highlight:
    //'Reduced worst-case workflow execution time from 11 seconds to approximately 3 seconds by removing redundant API calls and consolidating requests.',
  technologies: ['Java', 'Spring Boot', 'Angular', 'SQL', 'JUnit', 'Jenkins'],
};
export const ExperienceSection = () => (
  <section className="experience-section" id="experience" data-testid="work-experience-section">
    <div className="experience-heading">
      <p className="section-eyebrow">02 / EXPERIENCE</p>
      <h2>Where I’ve put it to work.</h2>
    </div>
    <article className="experience-entry" data-testid="fidelity-experience">
      <div className="experience-meta">
        <span data-testid="fidelity-dates">{FIDELITY_EXPERIENCE.dates}</span>
        <span>{FIDELITY_EXPERIENCE.location}</span>
      </div>
      <div className="experience-detail">
        <div>
          <h3 data-testid="fidelity-company">{FIDELITY_EXPERIENCE.company}</h3>
          <Link
            to="/project/fidelity-internship"
            data-testid="fidelity-experience-link"
            title="Read the Fidelity experience"
            aria-label="Read the Fidelity experience"
          >
            <ArrowUpRight size={23} />
          </Link>
        </div>
        <p className="experience-role" data-testid="fidelity-role">
          {FIDELITY_EXPERIENCE.role}
        </p>
        <p className="experience-team" data-testid="fidelity-team">
          {FIDELITY_EXPERIENCE.team}
        </p>
        <p className="experience-summary" data-testid="fidelity-summary">
          {FIDELITY_EXPERIENCE.summary}
        </p>
        <p className="experience-highlight" data-testid="fidelity-impact">
          {FIDELITY_EXPERIENCE.highlight}
        </p>
        <div className="experience-stack" data-testid="fidelity-technologies">
          {FIDELITY_EXPERIENCE.technologies.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </div>
      </div>
    </article>
  </section>
);
