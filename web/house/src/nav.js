// Walking in the house: where a friend may stand, and the way from one spot to another.
// Friends pass only through doors, and never through walls, furniture, items or other friends.
import { ROOMS, HOUSE, DOORS, DOOR_W, WALL_T, roomAt } from './world.js';

export const BODY = 0.3; // a friend's radius, in floor tiles
const CELL = 0.25;
const NX = Math.round((HOUSE.x1 - HOUSE.x0) / CELL);
const NZ = Math.round((HOUSE.z1 - HOUSE.z0) / CELL);

/** Every wall line of every room (and the garden's fence), with the doors in it. */
const WALLS = [];
ROOMS.forEach((r, i) => {
  const sides = [
    { axis: 'z', c: r.z0, from: r.x0, to: r.x1 },
    { axis: 'z', c: r.z1, from: r.x0, to: r.x1 },
    { axis: 'x', c: r.x0, from: r.z0, to: r.z1 },
    { axis: 'x', c: r.x1, from: r.z0, to: r.z1 },
  ];
  for (const s of sides) {
    const doors = DOORS.filter((d) => (d.a === i || d.b === i) && d.axis === s.axis && d.c === s.c).map((d) => d.p);
    WALLS.push({ ...s, doors });
  }
});


function hitsWall(x, z, r) {
  if (x < HOUSE.x0 + r + WALL_T || x > HOUSE.x1 - r - WALL_T || z < HOUSE.z0 + r + WALL_T || z > HOUSE.z1 - r - WALL_T) return true;
  for (const w of WALLS) {
    const perp = w.axis === 'z' ? z : x;
    const along = w.axis === 'z' ? x : z;
    if (Math.abs(perp - w.c) >= WALL_T + r) continue;
    if (along < w.from - r || along > w.to + r) continue;
    if (w.doors.some((p) => Math.abs(along - p) < DOOR_W / 2 - r)) continue;
    return true;
  }
  return false;
}

function inBox(x, z, b, r) {
  return x > b.x0 - r && x < b.x1 + r && z > b.z0 - r && z < b.z1 + r;
}

/**
 * What is in the way right now. boxes: furniture and items on the floor; others: [{x, z}] of the
 * other friends. A spot is free when a friend standing there touches none of them.
 */
export function makeBlocker(boxes, others) {
  const all = boxes; // furniture and items (the house passes them in)
  const r = BODY;
  const withFriends = (x, z) => {
    if (hitsWall(x, z, r)) return true;
    for (const b of all) if (inBox(x, z, b, r)) return true;
    for (const o of others) if ((o.x - x) ** 2 + (o.z - z) ** 2 < (2 * r) ** 2) return true;
    return false;
  };
  const noFriends = (x, z) => {
    if (hitsWall(x, z, r)) return true;
    for (const b of all) if (inBox(x, z, b, r)) return true;
    return false;
  };
  return { blocked: withFriends, blockedStatic: noFriends, others };
}

const cx = (i) => HOUSE.x0 + (i + 0.5) * CELL;
const cz = (j) => HOUSE.z0 + (j + 0.5) * CELL;
const ci = (x) => Math.min(NX - 1, Math.max(0, Math.floor((x - HOUSE.x0) / CELL)));
const cj = (z) => Math.min(NZ - 1, Math.max(0, Math.floor((z - HOUSE.z0) / CELL)));

function grid(blocker) {
  const g = new Uint8Array(NX * NZ);
  for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) g[j * NX + i] = blocker.blocked(cx(i), cz(j)) ? 1 : 0;
  return g;
}

/** Shortest distance from the start cell to every cell it can reach (8 directions, no cutting corners). */
function distances(g, s) {
  const dist = new Float64Array(NX * NZ).fill(Infinity);
  const prev = new Int32Array(NX * NZ).fill(-1);
  const heap = [];
  const push = (n, d) => {
    heap.push([d, n]);
    let k = heap.length - 1;
    while (k > 0) {
      const p = (k - 1) >> 1;
      if (heap[p][0] <= heap[k][0]) break;
      [heap[p], heap[k]] = [heap[k], heap[p]];
      k = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let k = 0;
      for (;;) {
        const l = 2 * k + 1, r = l + 1;
        let m = k;
        if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
        if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
        if (m === k) break;
        [heap[m], heap[k]] = [heap[k], heap[m]];
        k = m;
      }
    }
    return top;
  };
  dist[s] = 0;
  push(s, 0);
  const steps = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, 1.414], [1, -1, 1.414], [-1, 1, 1.414], [-1, -1, 1.414]];
  while (heap.length) {
    const [d, n] = pop();
    if (d > dist[n]) continue;
    const i = n % NX, j = (n / NX) | 0;
    for (const [di, dj, c] of steps) {
      const a = i + di, b = j + dj;
      if (a < 0 || b < 0 || a >= NX || b >= NZ) continue;
      const m = b * NX + a;
      if (g[m]) continue;
      if (di && dj && (g[j * NX + a] || g[b * NX + i])) continue;
      const nd = d + c;
      if (nd < dist[m]) { dist[m] = nd; prev[m] = n; push(m, nd); }
    }
  }
  return { dist, prev };
}

/** True when a friend can walk in a straight line from a to b. */
export function clearLine(blocker, ax, az, bx, bz) {
  const len = Math.hypot(bx - ax, bz - az);
  const n = Math.max(1, Math.ceil(len / 0.08));
  for (let k = 1; k <= n; k++) {
    const t = k / n;
    if (blocker.blocked(ax + (bx - ax) * t, az + (bz - az) * t)) return false;
  }
  return true;
}

/**
 * The way from (sx, sz) to (tx, tz), as a list of {x, z} points, or null when there is no way.
 * If the target spot itself is taken (a table, a bed...), the friend goes to the nearest free
 * spot right next to it.
 */
export function findPath(blocker, sx, sz, tx, tz) {
  const g = grid(blocker);
  let s = cj(sz) * NX + ci(sx);
  const pre = [];
  if (g[s]) {
    // Standing a little too close to something: step to the nearest free cell first.
    let best = -1, bd = Infinity;
    for (let j = Math.max(0, cj(sz) - 4); j <= Math.min(NZ - 1, cj(sz) + 4); j++) {
      for (let i = Math.max(0, ci(sx) - 4); i <= Math.min(NX - 1, ci(sx) + 4); i++) {
        const n = j * NX + i;
        const d = (cx(i) - sx) ** 2 + (cz(j) - sz) ** 2;
        if (!g[n] && d < bd && !hitsWall((cx(i) + sx) / 2, (cz(j) + sz) / 2, 0.05)) { bd = d; best = n; }
      }
    }
    if (best < 0) return null;
    s = best;
    pre.push({ x: cx(s % NX), z: cz((s / NX) | 0) });
  }
  const { dist, prev } = distances(g, s);
  let t = cj(tz) * NX + ci(tx);
  let goal = { x: tx, z: tz };
  if (g[t] || blocker.blocked(tx, tz)) {
    // The tapped spot is taken: the nearest spot next to it that we can reach.
    let best = -1, bd = Infinity;
    const R = 2.6;
    const room = roomAt(tx, tz);
    const span = Math.ceil(R / CELL);
    for (let j = Math.max(0, cj(tz) - span); j <= Math.min(NZ - 1, cj(tz) + span); j++) {
      for (let i = Math.max(0, ci(tx) - span); i <= Math.min(NX - 1, ci(tx) + span); i++) {
        const n = j * NX + i;
        const d = (cx(i) - tx) ** 2 + (cz(j) - tz) ** 2;
        if (d <= R * R && dist[n] < Infinity && d < bd && roomAt(cx(i), cz(j)) === room) { bd = d; best = n; }
      }
    }
    if (best < 0) return null;
    t = best;
    goal = { x: cx(t % NX), z: cz((t / NX) | 0) };
  } else if (dist[t] === Infinity) return null;

  const cells = [];
  for (let n = t; n >= 0 && n !== s; n = prev[n]) cells.unshift({ x: cx(n % NX), z: cz((n / NX) | 0) });
  if (cells.length) cells[cells.length - 1] = goal;
  else cells.push(goal);
  // Straighten the way: skip corners when the line between two points is clear.
  const start = pre.length ? pre[0] : { x: sx, z: sz };
  const out = [];
  let from = start;
  let k = 0;
  while (k < cells.length) {
    let far = k;
    for (let m = cells.length - 1; m > k; m--) {
      if (clearLine(blocker, from.x, from.z, cells[m].x, cells[m].z)) { far = m; break; }
    }
    out.push(cells[far]);
    from = cells[far];
    k = far + 1;
  }
  return pre.concat(out);
}
