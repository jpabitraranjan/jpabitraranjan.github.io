import {
  MeshLambertMaterial,
  MeshStandardMaterial,
  Mesh,
  CylinderGeometry,
  SphereGeometry,
  TorusGeometry,
  Vector3,
  CanvasTexture,
  SRGBColorSpace,
  MeshBasicMaterial,
  Group,
  PlaneGeometry,
  ConeGeometry,
  OctahedronGeometry,
  IcosahedronGeometry,
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export function emissiveMaterial(e) {
  return new MeshLambertMaterial({
    color: 0,
    emissive: 16777215,
    emissiveIntensity: e,
  });
}
export const makeMaterial = (color, metalness = 0.1, roughness = 0.35) =>
  new MeshStandardMaterial({ color, metalness, roughness });
export const addMesh = function (e, t, n, r = [0, 0, 0], i = [0, 0, 0]) {
  const a = new Mesh(t, n);
  return (a.position.set(...r), a.rotation.set(...i), e.add(a), a);
};
export const addRoundedBox = function (e, t, n, r, i = 0.04) {
  return addMesh(e, new RoundedBoxGeometry(...t, 2, Math.min(i, Math.min(...t) / 2)), n, r);
};
export const addCylinder = (e, t, n, r, i) => addMesh(e, new CylinderGeometry(t, t, n, 48), r, i);
export const addSphere = (e, t, n, r) => addMesh(e, new SphereGeometry(t, 24, 16), n, r);
export const addTorus = function (e, t, n, r, i = [0, 0, 0], a = [0, 0, 0]) {
  return addMesh(e, new TorusGeometry(t, n, 12, 96), r, a, i);
};
export const addTube = (e, t, n, r, i) => {
  const a = new Vector3(...t),
    o = new Vector3(...n),
    s = addCylinder(e, r, a.distanceTo(o), i, a.clone().add(o).multiplyScalar(0.5).toArray());
  return (s.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), o.sub(a).normalize()), s);
};
export const makeScreenMaterial = function (e = 'code') {
  const t = document.createElement('canvas');
  ((t.width = 1024), (t.height = 640));
  const n = t.getContext('2d');
  if (
    ((n.fillStyle = 'document' === e ? '#f8f8f3' : '#182321'),
    n.fillRect(0, 0, 1024, 640),
    (n.fillStyle = 'document' === e ? '#52665a' : '#84938a'),
    (n.font = '22px monospace'),
    n.fillText(
      'document' === e ? 'REQUIREMENTS / 001' : 'pabitra \u2014 a work in progress',
      54,
      62,
    ),
    'document' === e)
  )
    ((n.fillStyle = '#27382e'),
      (n.font = 'bold 56px sans-serif'),
      n.fillText('Context matters.', 54, 170),
      [740, 870, 660, 820, 700, 810, 500].forEach((e, t) => {
        ((n.fillStyle = 3 === t ? '#adccb9' : '#d3dcd5'), n.fillRect(54, 230 + 46 * t, e, 12));
      }));
  else {
    const e = [
      ['#9daa9f', '// it started with a little curiosity'],
      ['#efaa81', 'const developer = {'],
      ['#d5e3d8', '  name: "Pabitra Ranjan Jena",'],
      ['#d5e3d8', '  focus: "building things that matter",'],
      ['#b9d99b', '  curiosity: Infinity'],
      ['#efaa81', '};'],
    ];
    ((n.font = '26px monospace'),
      e.forEach((e, t) => {
        let [r, i] = e;
        ((n.fillStyle = r), n.fillText(i, 54, 168 + 53 * t));
      }),
      (n.fillStyle = '#b9d99b'),
      n.fillRect(54, 540, 16, 28));
  }
  const r = new CanvasTexture(t);
  return (
    (r.colorSpace = SRGBColorSpace),
    new MeshBasicMaterial({
      map: r,
      side: 2,
    })
  );
};
export const MODEL_BUILDERS = {
  laptop: () => {
    const e = new Group(),
      t = makeMaterial('#b5bebc', 0.92, 0.23),
      n = makeMaterial('#232927', 0.25);
    (addRoundedBox(e, [3.5, 0.12, 2.3], t, [0, -0.65, 0]),
      addRoundedBox(e, [1.1, 0.015, 0.6], makeMaterial('#929e99', 0.8), [0, -0.58, 0.59], 0.02));
    for (let i = 0; i < 5; i++)
      for (let t = 0; t < 13; t++)
        addRoundedBox(
          e,
          [0.205, 0.015, 0.15],
          n,
          [0.232 * t - 1.39, -0.575, 0.19 * i - 0.74],
          0.014,
        );
    const r = new Group();
    return (
      r.position.set(0, -0.57, -1.06),
      e.add(r),
      addRoundedBox(r, [3.5, 2.25, 0.12], t, [0, 1.125, 0], 0.06),
      addRoundedBox(r, [3.35, 2.09, 0.025], n, [0, 1.13, 0.071]),
      addMesh(r, new PlaneGeometry(3.19, 1.89), makeScreenMaterial(), [0, 1.14, 0.09]),
      (addCylinder(r, 0.021, 0.02, makeMaterial('#688a78'), [0, 2.18, 0.073]).rotation.x =
        Math.PI / 2),
      e.rotation.set(0.12, -0.36, -0.05),
      {
        group: e,
        update: (t) => {
          ((r.rotation.x = 0.1 + 0.6 * (1 - t)), (e.rotation.y = 0.6 * t - 0.4));
        },
      }
    );
  },
  computer: () => {
    const e = new Group(),
      t = makeMaterial('#d5d7c9', 0.28),
      n = makeMaterial('#24342c');
    (addRoundedBox(e, [2.6, 1.92, 1.35], t, [0, 0.5, -0.1], 0.16),
      addRoundedBox(e, [2.28, 1.57, 0.06], n, [0, 0.55, 0.6], 0.1),
      addMesh(e, new PlaneGeometry(2.04, 1.32), makeScreenMaterial(), [0, 0.59, 0.64]),
      addCylinder(e, 0.35, 0.32, t, [0, -0.59, -0.1]),
      addRoundedBox(e, [1.5, 0.16, 1.12], t, [0, -0.82, 0]),
      addRoundedBox(e, [2.55, 0.14, 0.75], t, [0, -1, 1.2]));
    for (let r = 0; r < 3; r++)
      for (let t = 0; t < 12; t++)
        addRoundedBox(e, [0.155, 0.025, 0.13], n, [0.195 * t - 1.08, -0.91, 1 + 0.18 * r], 0.01);
    return (
      e.rotation.set(0.08, -0.3, 0),
      {
        group: e,
        update: (t) => {
          e.rotation.y = 0.7 * t - 0.55;
        },
      }
    );
  },
  tennis: () => {
    const e = new Group(),
      t = makeMaterial('#e4ecd3'),
      n = makeMaterial('#477863', 0.15),
      r = makeMaterial('#b1c2b5', 0.8);
    (addRoundedBox(e, [4, 0.17, 2.6], r, [0, -0.45, 0]),
      addRoundedBox(e, [3.85, 0.018, 2.45], n, [0, -0.352, 0]),
      [-1.7, 0, 1.7].forEach((n) =>
        addRoundedBox(e, [0.026, 0.013, 2.15], t, [n, -0.335, 0], 0.002),
      ),
      [-1.08, 0, 1.08].forEach((n) =>
        addRoundedBox(e, [3.42, 0.013, 0.025], t, [0, -0.335, n], 0.002),
      ));
    for (let o = 0; o < 17; o++)
      addTube(e, [0, -0.31, 0.13 * o - 1.05], [0, 0.05, 0.13 * o - 1.05], 0.006, t);
    addTube(e, [0, 0.05, -1.1], [0, 0.05, 1.1], 0.012, t);
    const i = addSphere(e, 0.12, makeMaterial('#d8eb81'), [1, 0.3, 0]),
      a = [-1.53, 1.53].map((t, n) =>
        addRoundedBox(e, [0.09, 0.2, 0.57], makeMaterial(n ? '#eab198' : '#d6e5cc'), [t, -0.2, 0]),
      );
    return (
      e.rotation.set(0.34, -0.28, 0.06),
      {
        group: e,
        update: (t) => {
          (i.position.set(
            1.35 * Math.sin(t * Math.PI * 3),
            0.65 * Math.abs(Math.sin(t * Math.PI * 5)) - 0.1,
            0.65 * Math.cos(6 * t),
          ),
            a.forEach((e, n) => (e.position.z = 0.64 * Math.cos(6 * t + n))),
            (e.rotation.y = 0.6 * t - 0.4));
        },
      }
    );
  },
  compass: () => {
    const e = new Group(),
      t = makeMaterial('#b08d65', 0.9, 0.21);
    (addTorus(e, 1.35, 0.13, t), addTorus(e, 1.13, 0.018, t));
    addCylinder(e, 1.23, 0.08, makeMaterial('#e5dfd0', 0.5), [0, 0, -0.08]).rotation.x =
      Math.PI / 2;
    for (let r = 0; r < 48; r++) {
      const t = (r / 48) * Math.PI * 2;
      addRoundedBox(
        e,
        [0.018, r % 4 ? 0.07 : 0.15, 0.03],
        makeMaterial('#4c5750'),
        [1.06 * Math.sin(t), 1.06 * Math.cos(t), 0],
        0.002,
      ).rotation.z = -t;
    }
    const n = new Group();
    return (
      e.add(n),
      addMesh(n, new ConeGeometry(0.23, 1.2, 4), makeMaterial('#a7462d', 0.6), [0, 0.5, 0.15]),
      addMesh(
        n,
        new ConeGeometry(0.23, 1.2, 4),
        makeMaterial('#65776a', 0.65),
        [0, -0.5, 0.15],
        [0, 0, Math.PI],
      ),
      addSphere(e, 0.13, t, [0, 0, 0.24]),
      (e.rotation.x = -0.25),
      {
        group: e,
        update: (t) => {
          ((n.rotation.z = 1.8 * t - 0.8), (e.rotation.y = 0.6 * t - 0.3));
        },
      }
    );
  },
  book: () => {
    const e = new Group(),
      t = makeMaterial('#efebdb'),
      n = makeMaterial('#815f42', 0.2),
      r = [-1, 1].map((r) => {
        const i = new Group();
        (e.add(i),
          addRoundedBox(i, [1.47, 0.15, 2.18], n, [0.73 * r, -0.32, 0]),
          addRoundedBox(i, [1.37, 0.25, 2.03], t, [0.7 * r, -0.16, 0]));
        for (let e = 0; e < 9; e++)
          addRoundedBox(
            i,
            [0.91 - (e % 3) * 0.1, 0.004, 0.018],
            makeMaterial('#b2ad9d'),
            [0.72 * r, -0.029, 0.15 * e - 0.65],
            0.001,
          );
        return i;
      }),
      i = addMesh(e, new OctahedronGeometry(0.32), makeMaterial('#d7964d', 0.75), [0, 1.05, 0]);
    return (
      addTorus(e, 0.49, 0.015, makeMaterial('#ccac70', 0.8), [0.6, 0.4, 0], [0, 1.05, 0]),
      e.rotation.set(0.5, -0.18, 0),
      {
        group: e,
        update: (t) => {
          ((r[0].rotation.z = -0.14 - 0.35 * (1 - t)),
            (r[1].rotation.z = 0.14 + 0.35 * (1 - t)),
            (i.rotation.y = 2 * t),
            (e.rotation.y = 0.65 * t - 0.4));
        },
      }
    );
  },
  graduation: () => {
    const e = new Group(),
      t = makeMaterial('#3b5047', 0.38),
      n = makeMaterial('#c79a55', 0.65);
    addCylinder(e, 0.85, 0.65, t, [0, -0.2, 0]);
    ((addRoundedBox(e, [2.8, 0.12, 2.8], t, [0, 0.2, 0]).rotation.y = Math.PI / 4),
      addSphere(e, 0.075, n, [0, 0.3, 0]),
      addTube(e, [0, 0.3, 0], [1.4, 0.3, 0], 0.025, n),
      addTube(e, [1.4, 0.3, 0], [1.4, -0.8, 0], 0.025, n),
      addCylinder(e, 0.07, 0.4, n, [1.4, -0.86, 0]));
    addCylinder(e, 0.2, 2.6, makeMaterial('#e7e3d5'), [0, -1.1, 0.9]).rotation.z = Math.PI / 2;
    return (
      (addCylinder(e, 0.213, 0.27, makeMaterial('#ac6c4e'), [0, -1.1, 0.9]).rotation.z =
        Math.PI / 2),
      e.rotation.set(0.18, -0.3, 0.04),
      {
        group: e,
        update: (t) => {
          e.rotation.y = 0.9 * t - 0.55;
        },
      }
    );
  },
  server: () => {
    const e = new Group(),
      t = makeMaterial('#becfc3', 0.8),
      n = makeMaterial('#243c2f'),
      r = makeMaterial('#b8dc91', 0.4),
      i = Array.from(
        {
          length: 4,
        },
        (i, a) => {
          const o = new Group();
          (e.add(o),
            addRoundedBox(o, [2.5, 0.46, 1.4], t, [0, 0, 0]),
            addRoundedBox(o, [2.3, 0.31, 0.06], n, [0, 0, 0.72]));
          for (let e = 0; e < 6; e++)
            addRoundedBox(
              o,
              [0.18, 0.09, 0.02],
              0 === e ? r : makeMaterial('#788f7b'),
              [0.21 * e - 0.85, 0, 0.76],
              0.01,
            );
          return o;
        },
      );
    return (
      e.rotation.set(0.16, -0.35, 0),
      {
        group: e,
        update: (t) => {
          (i.forEach((e, n) => {
            ((e.position.y = (n - 1.5) * (0.52 + 0.28 * t)),
              (e.position.x = Math.sin(1.5 * n) * t * 0.28));
          }),
            (e.rotation.y = 0.7 * t - 0.5));
        },
      }
    );
  },
  schedule: () => {
    const e = new Group(),
      t = [],
      n = ['#386e55', '#a0b891', '#b8c7af', '#d5b28a', '#b36a4d'];
    for (let r = 0; r < 4; r++)
      for (let i = 0; i < 5; i++) {
        const a = addRoundedBox(
          e,
          [0.48, 0.38, 0.48],
          makeMaterial(n[(r + i) % n.length], 0.42),
          [0, 0, 0],
          0.035,
        );
        t.push({
          block: a,
          row: r,
          col: i,
        });
      }
    return (
      e.rotation.set(0.4, -0.36, 0.02),
      {
        group: e,
        update: (n) => {
          (t.forEach(({ block, row, col }) => {
            block.position.set(
              (col - 2) * (0.51 + 0.2 * n),
              (row - 1.5) * (0.41 + 0.2 * n),
              Math.sin(row + col) * (1 - n) * 0.6,
            );
          }),
            (e.rotation.y = 0.8 * n - 0.5));
        },
      }
    );
  },
  orbital: () => {
    const e = new Group(),
      t = makeMaterial('#bbc5b8', 0.96, 0.16),
      n = makeMaterial('#c89765', 0.9, 0.18),
      r = addMesh(e, new IcosahedronGeometry(0.56, 1), n),
      i = [
        addTorus(e, 1.35, 0.065, t, [0.5, 0.5, 0]),
        addTorus(e, 1.5, 0.048, n, [1.6, 0.2, 0.3]),
        addTorus(e, 1.69, 0.035, t, [0.3, 1.2, 0.4]),
      ],
      a = addSphere(e, 0.18, makeMaterial('#c1d99b', 0.45), [1.36, 0, 0]);
    return {
      group: e,
      update: (t) => {
        ((i[0].rotation.y = 0.2 + 1.4 * t),
          (i[1].rotation.z = 1.8 * t),
          (i[2].rotation.x = 0.3 + t),
          r.rotation.set(t, 2 * t, 0),
          a.position.set(1.4 * Math.cos(5 * t), 1.4 * Math.sin(5 * t), 0.1),
          (e.rotation.y = 0.5 * t));
      },
    };
  },
  documents: () => {
    const e = new Group(),
      t = makeMaterial('#cbd4d0', 0.3),
      n = [];
    for (let i = 0; i < 4; i++) {
      const r = new Group();
      (e.add(r),
        addRoundedBox(r, [2.35, 1.6, 0.05], t, [0, 0, 0]),
        addMesh(r, new PlaneGeometry(2.3, 1.54), makeScreenMaterial('document'), [0, 0, 0.032]),
        n.push(r));
    }
    const r = addRoundedBox(e, [2.55, 0.025, 0.035], makeMaterial('#d2855f', 0.5), [0, 0, 0.55]);
    return {
      group: e,
      update: (t) => {
        (n.forEach((e, n) => {
          (e.position.set((n - 1.5) * (0.12 + 0.15 * t), (n - 1.5) * (0.18 + 0.17 * t), 0.18 * n),
            (e.rotation.z = (n - 1.5) * t * -0.04));
        }),
          (e.rotation.y = 0.5 * t - 0.25),
          (r.position.y = 0.8 - 1.6 * t));
      },
    };
  },
  enterprise: () => {
    const e = new Group(),
      t = makeMaterial('#aab5b0', 0.95, 0.23),
      n = makeMaterial('#f7f6f0', 0.1);
    (addRoundedBox(e, [3.1, 2.35, 0.18], t, [0, 0.1, -0.32]),
      addRoundedBox(e, [2.92, 2.17, 0.04], n, [0, 0.1, -0.21]));
    for (let i = 0; i < 5; i++)
      addRoundedBox(
        e,
        [2.5, 0.015, 0.02],
        makeMaterial('#ced4ce'),
        [0, 0.35 * i - 0.67, -0.18],
        0.001,
      );
    const r = [0.5, 0.8, 0.66, 1.3, 1.65].map((t, n) => ({
      height: t,
      node: addRoundedBox(e, [0.33, 1, 0.4], makeMaterial(4 === n ? '#b26245' : '#759a85', 0.5), [
        0.5 * n - 1.03,
        0,
        0.06,
      ]),
    }));
    return (
      e.rotation.set(0.08, -0.32, 0),
      {
        group: e,
        update: (t) => {
          (r.forEach(({ node, height }) => {
            const i = height * (0.4 + 0.6 * t);
            ((node.scale.y = i), (node.position.y = i / 2 - 0.68));
          }),
            (e.rotation.y = 0.7 * t - 0.5));
        },
      }
    );
  },
  network: () => {
    const e = new Group(),
      t = makeMaterial('#b5c4bc', 0.9, 0.2),
      n = makeMaterial('#dea481', 0.8, 0.24),
      r = [
        [0, 0, 0],
        [-1.35, 0.7, 0.1],
        [1.25, 0.8, -0.3],
        [-0.8, -1, 0.4],
        [1.1, -0.75, 0.7],
        [0, 1.4, 0.6],
        [-1.65, -0.4, -0.7],
        [1.55, 0, -0.7],
        [0, -1.4, -0.6],
      ];
    return (
      r.forEach((r, i) => {
        (i && addTube(e, [0, 0, 0], r, 0.026, t),
          addSphere(e, i ? 0.16 : 0.36, i % 3 === 0 ? n : t, r));
      }),
      [
        [1, 5],
        [2, 5],
        [2, 7],
        [7, 4],
        [4, 8],
        [8, 3],
        [3, 6],
        [6, 1],
      ].forEach((n) => {
        let [i, a] = n;
        return addTube(e, r[i], r[a], 0.013, t);
      }),
      addTorus(e, 0.52, 0.013, n, [0.3, 0.5, 0]),
      {
        group: e,
        update: (t) => {
          (e.rotation.set(0.15 + 0.15 * t, 1.1 * t - 0.5, 0), e.scale.setScalar(0.87 + 0.22 * t));
        },
      }
    );
  },
};
