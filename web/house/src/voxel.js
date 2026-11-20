import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/** Models are written in "pixels": 16 pixels make one floor tile. */
export const PX = 1 / 16;

// A small seeded random, so every model looks the same each time (and in the shop pictures).
export function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return (s % 100000) / 100000;
  };
}

export function hashStr(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return h >>> 0;
}

const MATS = {};
export function solidMat() {
  if (!MATS.solid) MATS.solid = new THREE.MeshLambertMaterial({ vertexColors: true });
  return MATS.solid;
}
export function glassMat() {
  if (!MATS.glass) MATS.glass = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 0.3, depthWrite: false });
  return MATS.glass;
}
export function glowMat() {
  if (!MATS.glow) MATS.glow = new THREE.MeshBasicMaterial({ vertexColors: true });
  return MATS.glow;
}

const tmp = new THREE.Color();

/**
 * A box is [cx, y0, cz, w, h, d, color, kind?]: centred on x/z, standing on y0.
 * kind: 'glass' (see-through) or 'glow' (not shaded, like a lamp or a screen).
 * Each box gets a tiny random shade so surfaces look like blocks, not plastic.
 */
export function boxesGroup(boxes, { scale = PX, seed = 1, jitter = 0.05, shadows = true } = {}) {
  const r = rng(seed);
  const buckets = { solid: [], glass: [], glow: [] };
  for (const b of boxes) {
    if (!b) continue;
    const [cx, y0, cz, w, h, d, color, kind] = b;
    if (w <= 0 || h <= 0 || d <= 0) continue;
    const g = new THREE.BoxGeometry(w * scale, h * scale, d * scale);
    g.translate(cx * scale, (y0 + h / 2) * scale, cz * scale);
    tmp.set(color);
    const k = 1 + (r() * 2 - 1) * jitter;
    const n = g.attributes.position.count;
    const cols = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      cols[i * 3] = Math.min(1, tmp.r * k);
      cols[i * 3 + 1] = Math.min(1, tmp.g * k);
      cols[i * 3 + 2] = Math.min(1, tmp.b * k);
    }
    g.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    buckets[kind && buckets[kind] ? kind : 'solid'].push(g);
  }
  const group = new THREE.Group();
  for (const [kind, list] of Object.entries(buckets)) {
    if (!list.length) continue;
    const geo = mergeGeometries(list);
    list.forEach((g) => g.dispose());
    const mat = kind === 'glass' ? glassMat() : kind === 'glow' ? glowMat() : solidMat();
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = shadows && kind !== 'glass';
    mesh.receiveShadow = shadows;
    group.add(mesh);
  }
  return group;
}

/** Bounding size of a list of boxes, in pixels. */
export function boxesBounds(boxes) {
  let x0 = Infinity, x1 = -Infinity, y1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  for (const b of boxes) {
    if (!b) continue;
    const [cx, y0, cz, w, h, d] = b;
    x0 = Math.min(x0, cx - w / 2); x1 = Math.max(x1, cx + w / 2);
    z0 = Math.min(z0, cz - d / 2); z1 = Math.max(z1, cz + d / 2);
    y1 = Math.max(y1, y0 + h);
  }
  return { w: x1 - x0, h: y1, d: z1 - z0, x0, x1, z0, z1 };
}
