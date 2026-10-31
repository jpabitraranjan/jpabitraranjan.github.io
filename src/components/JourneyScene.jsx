import { useRef, useState, useEffect } from 'react';
import {
  WebGLRenderer,
  SRGBColorSpace,
  Scene,
  PerspectiveCamera,
  PMREMGenerator,
  DirectionalLight,
  HemisphereLight,
  Group,
  Vector3,
  CatmullRomCurve3,
  TubeGeometry,
  MeshStandardMaterial,
  Mesh,
  SphereGeometry,
  Color,
  MathUtils,
  ACESFilmicToneMapping,
} from 'three';
import { JOURNEY_CHAPTERS, chapterTheme } from '../data/portfolio';
import { MODEL_BUILDERS } from '../three/models';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export const JourneyScene = ({ progress, reduced, view = 'journey' }) => {
  const a = useRef(null),
    o = useRef(null),
    s = useRef({
      progress: progress,
      reduced: reduced,
    }),
    [l, c] = useState('loading');
  return (
    (s.current = {
      progress: progress,
      reduced: reduced,
    }),
    useEffect(() => {
      const e = a.current;
      let t, n, r, l, u, d;
      const h = (e) => {
        (e.preventDefault(), c('unavailable'));
      };
      e.addEventListener('webglcontextlost', h);
      try {
        ((t = new WebGLRenderer({
          canvas: e,
          antialias: true,
          alpha: false,
          powerPreference: 'low-power',
          preserveDrawingBuffer: true,
        })),
          t.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)),
          (t.outputColorSpace = SRGBColorSpace),
          (t.toneMapping = ACESFilmicToneMapping),
          (t.toneMappingExposure = 1.3),
          (d = new Scene()));
        const a = new PerspectiveCamera(36, 1, 0.1, 200);
        ((u = new PMREMGenerator(t)),
          (l = new RoomEnvironment()),
          (r = u.fromScene(l, 0.04)),
          (d.environment = r.texture),
          (d.environmentIntensity = 1.15));
        const h = new DirectionalLight('#fff2dc', 4);
        (h.position.set(3, 5, 6), d.add(h));
        const p = new DirectionalLight('#d2e8ee', 2.5);
        (p.position.set(-5, 2, 3), d.add(p));
        const f = new DirectionalLight('#edc7a3', 2);
        (f.position.set(2, 1, -4), d.add(f), d.add(new HemisphereLight('#f2f4ee', '#414741', 1.8)));
        const m = JOURNEY_CHAPTERS.map((e, t) => {
            const n = MODEL_BUILDERS[e.model](),
              r = new Group();
            return (
              (r.position.x = 9 * t),
              r.add(n.group),
              d.add(r),
              {
                ...n,
                anchor: r,
              }
            );
          }),
          g = [];
        for (let e = 0; e < JOURNEY_CHAPTERS.length; e++) {
          const t = 9 * e;
          [
            [-4.5, -1.95],
            [-1.9, -1.95],
            [1.7, -1.9],
            [3.05, -0.6],
            [2.05, 1.8],
            [0, 2.25],
            [-1.5, 1.5],
            [-0.6, 0.75],
            [2.1, 1.05],
            [4.4, 1.8],
          ].forEach((e) => {
            let [n, r] = e;
            return g.push(new Vector3(t + n, r, -1.8));
          });
        }
        const v = new CatmullRomCurve3(g, false, 'centripetal'),
          y = new TubeGeometry(v, 1800, 0.028, 6, false),
          b = new MeshStandardMaterial({
            color: '#65716a',
            metalness: 0.83,
            roughness: 0.34,
          }),
          _ = new Mesh(y, b);
        d.add(_);
        const x = new TubeGeometry(v, 1800, 0.04, 6, false),
          S = new MeshStandardMaterial({
            color: '#d7ac88',
            metalness: 0.65,
            roughness: 0.27,
            emissive: '#a87852',
            emissiveIntensity: 0.15,
          });
        d.add(new Mesh(x, S));
        const w = new Mesh(
          new SphereGeometry(0.085, 16, 12),
          new MeshStandardMaterial({
            color: '#efc49f',
            emissive: '#d7915f',
            emissiveIntensity: 0.6,
          }),
        );
        d.add(w);
        const M = () => {
          const n = e.clientWidth,
            r = e.clientHeight;
          if (!n || !r) return;
          const { progress: o, reduced: l } = s.current,
            c = l ? Math.round(o) : o,
            u = Math.round(c),
            g = chapterTheme(c),
            y = 'object' === view,
            b = n < 820 && r > 520 && !y,
            _ = n / r,
            S = b ? Math.max(8.5, 4.6 / (2 * _ * Math.tan(Math.PI / 10))) : 8,
            M = 2 * S * Math.tan(Math.PI / 10),
            E = M * _,
            T = 9 * c - (b || y ? 0 : 0.22 * E),
            A = b ? 0.14 * M : 0.03;
          ((a.aspect = _),
            a.position.set(T, A + 0.65, S),
            a.lookAt(T, A, 0),
            a.updateProjectionMatrix(),
            (d.background = new Color(g.bg)),
            m.forEach((e, t) => {
              if (((e.anchor.visible = Math.abs(t - c) < 1.05), !e.anchor.visible)) return;
              const n = l ? 0.5 : MathUtils.clamp(c - t + 0.5, 0, 1);
              e.update(n);
              const r = y ? Math.min(1.1, (0.7 * E) / 3.8) : b ? 1 : Math.min(1, (0.38 * E) / 3.8);
              e.anchor.scale.setScalar(r * (1 - Math.min(0.25, 0.25 * Math.abs(t - c))));
            }));
          const C = (c + 0.38) / JOURNEY_CHAPTERS.length;
          (x.setDrawRange(0, 6 * Math.floor((x.index.count * C) / 6)),
            w.position.copy(v.getPointAt(C)),
            (h.position.x = 9 * c + 3),
            (h.target.position.x = 9 * c),
            d.add(h.target),
            (p.position.x = 9 * c - 5),
            (p.target.position.x = 9 * c),
            d.add(p.target),
            (f.position.x = 9 * c + 2),
            (f.target.position.x = 9 * c),
            d.add(f.target),
            t.render(d, a),
            (e.dataset.stage = JOURNEY_CHAPTERS[u].id),
            (e.dataset.progress = c.toFixed(4)),
            (e.dataset.rendered = 'true'));
        };
        ((o.current = {
          draw: M,
        }),
          (n = new ResizeObserver(() => {
            (t.setSize(e.clientWidth, e.clientHeight, false), M());
          })),
          n.observe(e),
          t.setSize(e.clientWidth, e.clientHeight, false),
          M(),
          c('ready'));
      } catch (ho) {
        (console.warn('3D scene unavailable; chapter navigation remains available.', ho),
          c('unavailable'));
      }
      return () => {
        var i, a, s, c, p, f;
        ((o.current = null),
          null === (i = n) || undefined === i || i.disconnect(),
          e.removeEventListener('webglcontextlost', h));
        const m = new Set();
        (null === (a = d) ||
          undefined === a ||
          a.traverse((e) => {
            (e.geometry && m.add(e.geometry),
              e.material &&
                (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => {
                  (e.map && m.add(e.map), m.add(e));
                }));
          }),
          m.forEach((e) => e.dispose()),
          null === (s = r) || undefined === s || s.dispose(),
          null === (c = l) || undefined === c || c.dispose(),
          null === (p = u) || undefined === p || p.dispose(),
          null === (f = t) || undefined === f || f.dispose());
      };
    }, [view]),
    useEffect(() => {
      var e;
      null === (e = o.current) || undefined === e || e.draw();
    }, [progress, reduced]),
    (
      <div className="journey-canvas-layer" data-testid="journey-scene" data-status={l}>
        <canvas
          ref={a}
          data-testid="journey-canvas"
          aria-label={`3D ${JOURNEY_CHAPTERS[Math.round(progress)].model} scene`}
          role="img"
        />
        {'loading' === l && (
          <span className="scene-loading" data-testid="scene-loading">
            Loading the journey
          </span>
        )}
        {'unavailable' === l && (
          <div className="scene-fallback" data-testid="scene-fallback">
            <span>{JOURNEY_CHAPTERS[Math.round(progress)].num}</span>
            <p>3D is unavailable on this device.</p>
          </div>
        )}
      </div>
    )
  );
};
