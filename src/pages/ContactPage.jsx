import { Mail, ArrowUpRight, Phone, Download } from 'lucide-react';
import { EMAIL, PHONE, PHONE_HREF, GITHUB_URL, LINKEDIN_URL, RESUME_PATH, LOCATION } from '../data/portfolio';
import { PageShell } from '../components/Layout';

export const CONTACT_LINKS = [
  {
    label: 'GitHub',
    note: 'github.com/jpabitraranjan',
    url: GITHUB_URL,
    tid: 'contact-github-button',
  },
  {
    label: 'LinkedIn',
    note: 'Pabitra Ranjan Jena',
    url: LINKEDIN_URL,
    tid: 'contact-linkedin-button',
  },
  {
    label: 'R\xe9sum\xe9',
    note: 'The story, on one page',
    url: RESUME_PATH,
    tid: 'contact-resume-button',
    download: true,
  },
];
export function ContactPage() {
  return (
    <PageShell testid="contact-page">
      <section className="reading-page contact-content">
        <header className="reading-header">
          <p className="section-eyebrow">THE NEXT CHAPTER</p>
          <h1 data-testid="contact-title">
            Good work starts
            <br />
            with a conversation.
          </h1>
          <p data-testid="contact-summary">
            Open to backend and agentic AI roles. Currently building AegisTrace and looking for the
            next team to build with.
          </p>
          <span data-testid="contact-location" className="contact-location">
            {LOCATION}
            {' / Final-year CS, NIE'}
          </span>
        </header>
        <div className="contact-direct">
          <a href={`mailto:${EMAIL}`} data-testid="contact-email-link">
            <Mail size={18} />
            <span>{EMAIL}</span>
            <ArrowUpRight size={16} />
          </a>
          <a href={PHONE_HREF} data-testid="contact-phone-link">
            <Phone size={16} />
            <span>{PHONE}</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="contact-links">
          {CONTACT_LINKS.map((e) => (
            <a
              data-testid={e.tid}
              href={e.url}
              target={e.download ? undefined : '_blank'}
              rel={e.download ? undefined : 'noopener noreferrer'}
              download={e.download ? 'Pabitra_Ranjan_Jena_Resume.pdf' : undefined}
              key={e.label}
            >
              <div>
                <strong>{e.label}</strong>
                <span>{e.note}</span>
              </div>
              {e.download ? <Download size={20} /> : <ArrowUpRight size={20} />}
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
