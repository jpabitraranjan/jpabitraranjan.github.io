import { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  PMREMGenerator,
  HemisphereLight,
  DirectionalLight,
  Group,
  PlaneGeometry,
  CanvasTexture,
  SRGBColorSpace,
  MeshBasicMaterial,
  ACESFilmicToneMapping,
} from 'three';
import { makeMaterial, addMesh, addRoundedBox } from '../three/models';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export const SKILLS = [
  {
    name: 'MongoDB',
    mark: 'M',
    category: 'DATABASE',
    color: '#91ac7b',
    detail: 'Document data for full-stack applications.',
    context: 'Orbital · MERN stack',
  },
  {
    name: 'SQL',
    mark: 'SQL',
    category: 'DATABASE',
    color: '#b8ae91',
    detail: 'Relational data, complex queries, and cross-system validation.',
    context: 'MySQL · PostgreSQL · SQLite',
  },
  {
    name: 'FastAPI',
    mark: 'API',
    category: 'BACKEND',
    color: '#7bb3a1',
    detail: 'Serving recommendations and document intelligence.',
    context: 'Orbital · PDF Q&A',
  },
  {
    name: 'Spring Boot',
    mark: 'SB',
    category: 'BACKEND',
    color: '#adc785',
    detail: 'REST services, enterprise workflows, and JUnit tests.',
    context: 'Fidelity Investments',
  },
  {
    name: 'Django',
    mark: 'dj',
    category: 'BACKEND',
    color: '#8ba890',
    detail: 'Business systems, roles, and real-time workflows.',
    context: 'UniSchedule · UniVersatile',
  },
  {
    name: 'Angular',
    mark: 'A',
    category: 'FRONTEND',
    color: '#c58a84',
    detail: 'Data-rich interfaces for portfolio managers.',
    context: 'Fidelity Investments',
  },
  {
    name: 'React',
    mark: 'React',
    category: 'FRONTEND',
    color: '#8dbdc1',
    detail: 'Interfaces for full-stack systems and tools.',
    context: 'Orbital · PDF Q&A · UniVersatile',
  },
  {
    name: 'TypeScript',
    mark: 'TS',
    category: 'LANGUAGE',
    color: '#7cacc7',
    detail: 'Typed application development.',
    context: 'Application development',
  },
  {
    name: 'JavaScript',
    mark: 'JS',
    category: 'LANGUAGE',
    color: '#d2bf65',
    detail: 'From a first tennis game to full-stack applications.',
    context: 'JS Tennis · Orbital',
  },
  {
    name: 'C++',
    mark: 'C++',
    category: 'LANGUAGE',
    color: '#7dabc2',
    detail: 'A foundation in programming and problem solving.',
    context: 'Core programming',
  },
  {
    name: 'Java',
    mark: 'J',
    category: 'LANGUAGE',
    color: '#c58867',
    detail: 'Enterprise applications and tested backend services.',
    context: 'Fidelity Investments · Spring Boot',
  },
  {
    name: 'Python',
    mark: 'Py',
    category: 'LANGUAGE',
    color: '#d5b65b',
    detail: 'Backend systems, data analysis, and agentic AI.',
    context: 'AegisTrace · Orbital · Django',
  },
];
export const SkillsScene = ({ progress, reduced }) => {
  const i = useRef(null),
    a = useRef(null),
    o = useRef({
      progress: progress,
      reduced: reduced,
    }),
    [s, l] = useState(false);
  return (
    (o.current = {
      progress: progress,
      reduced: reduced,
    }),
    useEffect(() => {
      let e, t, n, r, s, c;
      const u = i.current,
        d = (e) => {
          (e.preventDefault(), l(true));
        };
      u.addEventListener('webglcontextlost', d);
      try {
        ((e = new WebGLRenderer({
          canvas: u,
          antialias: true,
          alpha: true,
          powerPreference: 'low-power',
          preserveDrawingBuffer: true,
        })),
          e.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)),
          (e.toneMapping = ACESFilmicToneMapping),
          (e.toneMappingExposure = 1.25),
          (n = new Scene()));
        const i = new PerspectiveCamera(36, 1, 0.1, 60);
        ((s = new PMREMGenerator(e)),
          (c = new RoomEnvironment()),
          (r = s.fromScene(c, 0.04)),
          (n.environment = r.texture),
          n.add(new HemisphereLight('#ffffff', '#70816e', 2)));
        const l = new DirectionalLight('#fff6df', 4);
        (l.position.set(3, 5, 9), n.add(l));
        const d = new Group();
        n.add(d);
        const h = SKILLS.map((e, t) => {
            const n = new Group(),
              r = (t / SKILLS.length) * Math.PI * 2;
            return (
              n.position.set(0, 3.8 * Math.sin(r), 3.8 * Math.cos(r)),
              (n.rotation.x = -r),
              d.add(n),
              addRoundedBox(
                n,
                [3.9, 2.2, 0.12],
                makeMaterial('#adb7aa', 0.85, 0.25),
                [0, 0, 0],
                0.07,
              ),
              addMesh(
                n,
                new PlaneGeometry(3.7, 2),
                ((e) => {
                  const t = document.createElement('canvas');
                  ((t.width = 1e3), (t.height = 540));
                  const n = t.getContext('2d');
                  ((n.fillStyle = '#24352c'),
                    n.fillRect(0, 0, 1e3, 540),
                    (n.strokeStyle = '#405446'),
                    (n.lineWidth = 1));
                  for (let i = 0; i < 1e3; i += 45)
                    (n.beginPath(), n.moveTo(i, 0), n.lineTo(i, 540), n.stroke());
                  for (let i = 0; i < 540; i += 45)
                    (n.beginPath(), n.moveTo(0, i), n.lineTo(1e3, i), n.stroke());
                  ((n.fillStyle = e.color),
                    (n.font = `500 ${e.mark.length > 3 ? 115 : 160}px sans-serif`),
                    (n.textAlign = 'center'),
                    n.fillText(e.mark, 500, 295),
                    (n.fillStyle = '#d7dfd3'),
                    (n.font = '20px monospace'),
                    n.fillText(e.name.toUpperCase(), 500, 410),
                    (n.textAlign = 'left'),
                    (n.fillStyle = '#9cae9c'),
                    (n.font = '16px monospace'),
                    n.fillText(e.category, 50, 50));
                  const r = new CanvasTexture(t);
                  return (
                    (r.colorSpace = SRGBColorSpace),
                    new MeshBasicMaterial({
                      map: r,
                    })
                  );
                })(e),
                [0, 0, 0.069],
              ),
              n
            );
          }),
          p = () => {
            const t = u.clientWidth,
              r = u.clientHeight;
            if (!t || !r) return;
            const a = o.current.progress,
              s = o.current.reduced ? Math.round(a) : a;
            ((d.rotation.x = (s / SKILLS.length) * Math.PI * 2),
              h.forEach((e, t) => {
                const n = Math.abs(t - s);
                e.visible = n < 2.1;
              }));
            const l = t < 820 && r > 520,
              c = t / r,
              p = l ? 3.8 + 5.2 / (2 * c * Math.tan(Math.PI / 10)) : 11.5,
              f = 2 * (p - 3.8) * Math.tan(Math.PI / 10),
              m = l ? 0 : -f * c * 0.22,
              g = l ? 0.13 * f : 0;
            (i.position.set(m, g, p),
              i.lookAt(m, g, 0),
              (i.aspect = c),
              i.updateProjectionMatrix(),
              e.render(n, i),
              (u.dataset.rendered = 'true'),
              (u.dataset.progress = s.toFixed(4)),
              (u.dataset.skill = SKILLS[Math.round(s)].name));
          };
        ((a.current = p),
          (t = new ResizeObserver(() => {
            (e.setSize(u.clientWidth, u.clientHeight, false), p());
          })),
          t.observe(u),
          e.setSize(u.clientWidth, u.clientHeight, false),
          p());
      } catch (ho) {
        (console.warn('Skills illustration unavailable', ho), l(true));
      }
      return () => {
        var i, o, l, h, p, f;
        ((a.current = null),
          null === (i = t) || undefined === i || i.disconnect(),
          u.removeEventListener('webglcontextlost', d));
        const m = new Set();
        (null === (o = n) ||
          undefined === o ||
          o.traverse((e) => {
            (e.geometry && m.add(e.geometry),
              e.material && (e.material.map && m.add(e.material.map), m.add(e.material)));
          }),
          m.forEach((e) => e.dispose()),
          null === (l = r) || undefined === l || l.dispose(),
          null === (h = c) || undefined === h || h.dispose(),
          null === (p = s) || undefined === p || p.dispose(),
          null === (f = e) || undefined === f || f.dispose());
      };
    }, []),
    useEffect(() => {
      var e;
      null === (e = a.current) || undefined === e || e.call(a);
    }, [progress, reduced]),
    (
      <div className="skills-canvas-layer" data-testid="skills-scene">
        <canvas
          ref={i}
          data-testid="skills-canvas"
          role="img"
          aria-label={`Rotating ${SKILLS[Math.round(progress)].name} skill frame`}
        />
        {s && (
          <span className="skills-fallback" data-testid="skills-canvas-fallback">
            {SKILLS[Math.round(progress)].mark}
          </span>
        )}
      </div>
    )
  );
};
export const SkillsSection = () => {
  const e = useRef(null),
    [t, n] = useState(0),
    [i, a] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches),
    o = Math.round(t),
    s = SKILLS[o],
    l = useCallback((t) => {
      const n = e.current;
      window.scrollTo({
        top:
          window.scrollY +
          n.getBoundingClientRect().top +
          (t / (SKILLS.length - 1)) * (n.offsetHeight - window.innerHeight),
        behavior: 'instant',
      });
    }, []);
  return (
    useEffect(() => {
      let t;
      const r = () => {
          const t = e.current;
          t &&
            n(
              Math.max(
                0,
                Math.min(1, 1+t.getBoundingClientRect().top / (t.offsetHeight - window.innerHeight)),
              ) *
                (SKILLS.length - 1),
            );
        },
        i = () => {
          (cancelAnimationFrame(t), (t = requestAnimationFrame(r)));
        },
        o = window.matchMedia('(prefers-reduced-motion: reduce)'),
        s = () => a(o.matches);
      return (
        window.addEventListener('scroll', i, {
          passive: true,
        }),
        window.addEventListener('resize', i),
        o.addEventListener('change', s),
        r(),
        () => {
          (cancelAnimationFrame(t),
            window.removeEventListener('scroll', i),
            window.removeEventListener('resize', i),
            o.removeEventListener('change', s));
        }
      );
    }, []),
    (
      <section ref={e} className="skills-scroll" data-testid="skills-scroll-section">
        <div
          className="skills-viewport"
          data-testid="skills-pinned-viewport"
          data-active-skill={s.name}
        >
          <SkillsScene progress={t} reduced={i} />
          <div className="skills-frame" aria-hidden="true" />
          <div className="skills-overline">
            <span>01 / TECHNICAL SKILLS</span>
            <a href="#experience" data-testid="skip-skills-link">
              {'Experience '}
              <ArrowDown size={13} />
            </a>
          </div>
          <div className="skills-content">
            <p data-testid="active-skill-category">{s.category}</p>
            <h1 data-testid="active-skill-name">{s.name}</h1>
            <p className="skill-description" data-testid="active-skill-description">
              {s.detail}
            </p>
            <span className="skill-context" data-testid="active-skill-context">
              {s.context}
            </span>
            <div className="skill-controls">
              <button
                type="button"
                data-testid="skill-previous"
                aria-label="Previous skill"
                title="Previous skill"
                disabled={0 === o}
                onClick={() => l(o - 1)}
              >
                <ArrowLeft size={16} />
              </button>
              <span data-testid="skill-counter">
                {String(o + 1).padStart(2, '0')}{' '}
                <i>
                  {'/ '}
                  {SKILLS.length}
                </i>
              </span>
              <button
                type="button"
                data-testid="skill-next"
                aria-label="Next skill"
                title="Next skill"
                disabled={o === SKILLS.length - 1}
                onClick={() => l(o + 1)}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <nav className="skill-index" aria-label="Technical skills">
            {SKILLS.map((e, t) => (
              <button
                type="button"
                data-testid={`skill-select-${t}`}
                aria-current={t === o ? 'step' : undefined}
                onClick={() => l(t)}
                key={e.name}
              >
                <span>{String(t + 1).padStart(2, '0')}</span>
                {e.name}
              </button>
            ))}
          </nav>
          <div
            className="skills-progress"
            role="progressbar"
            aria-label="Skills journey"
            aria-valuenow={Math.round((t / (SKILLS.length - 1)) * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            data-testid="skills-progress"
          >
            <span
              style={{
                transform: `scaleX(${t / (SKILLS.length - 1)})`,
              }}
            />
          </div>
        </div>
      </section>
    )
  );
};
