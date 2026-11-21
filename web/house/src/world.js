import * as THREE from 'three';
import { boxesGroup, rng } from './voxel.js';

// The house, in floor tiles (1 unit = 16 pixels). Rooms keep the app's numbering:
// 0 bedroom, 1 dining room, 2 living room, 3 bathroom, 4 garden.
export const ROOMS = [
  { x0: 0, z0: 0, x1: 8, z1: 8 },
  { x0: 0, z0: 8, x1: 8, z1: 16 },
  { x0: 8, z0: 8, x1: 16, z1: 16 },
  { x0: 8, z0: 0, x1: 16, z1: 8 },
  { x0: 16, z0: 0, x1: 24, z1: 16, garden: true },
];
export const HOUSE = { x0: 0, z0: 0, x1: 24, z1: 16 };
export const WALL_H = 3;
const T = 0.16; // wall thickness (each room has its own wall layer)
export const DOOR_W = 1.7;
const DOOR_H = 2.3;
export const WALL_T = 0.16;

/** Doors between rooms: on the line x=c or z=c, at position p along the wall. */
export const DOORS = [
  { a: 0, b: 1, axis: 'z', c: 8, p: 4 },
  { a: 0, b: 3, axis: 'x', c: 8, p: 4 },
  { a: 3, b: 2, axis: 'z', c: 8, p: 12 },
  { a: 1, b: 2, axis: 'x', c: 8, p: 12 },
  { a: 2, b: 4, axis: 'x', c: 16, p: 12 },
];

const WINDOWS = { '0N': 2.5, '1W': 12, '2S': [10, 14], '3N': 10.2 };

export function roomAt(x, z) {
  for (let i = 0; i < ROOMS.length; i++) {
    const r = ROOMS[i];
    if (x >= r.x0 && x < r.x1 && z >= r.z0 && z < r.z1) return i;
  }
  return -1;
}

export function roomCenter(i) {
  const r = ROOMS[i];
  return new THREE.Vector3((r.x0 + r.x1) / 2, 0, (r.z0 + r.z1) / 2);
}

/** Built-in furniture that small items can stand on: [x0, x1, z0, z1, top]. */
export const SURFACES = [
  { room: 0, x0: 6.6, x1: 7.7, z0: 0.3, z1: 1.3, y: 0.8 },
  { room: 1, x0: 2.3, x1: 5.7, z0: 11.2, z1: 13.2, y: 0.95 },
  { room: 2, x0: 11, x1: 13, z0: 12.5, z1: 13.6, y: 0.5 },
  { room: 3, x0: 12.3, x1: 15.6, z0: 0.2, z1: 1.3, y: 1.0 },
];

export function surfaceAt(x, z) {
  let y = 0;
  for (const s of SURFACES) if (x > s.x0 && x < s.x1 && z > s.z0 && z < s.z1) y = Math.max(y, s.y);
  return y;
}

/** Each room's four walls. side: N (z=z0), S (z=z1), W (x=x0), E (x=x1). */
function wallList() {
  const out = [];
  ROOMS.forEach((r, i) => {
    if (r.garden) return;
    for (const side of ['N', 'S', 'W', 'E']) {
      const axis = side === 'N' || side === 'S' ? 'z' : 'x';
      const c = side === 'N' ? r.z0 : side === 'S' ? r.z1 : side === 'W' ? r.x0 : r.x1;
      const from = axis === 'z' ? r.x0 : r.z0;
      const to = axis === 'z' ? r.x1 : r.z1;
      const door = DOORS.find((d) => (d.a === i || d.b === i) && d.axis === axis && d.c === c);
      const inward = side === 'N' || side === 'W' ? 1 : -1;
      out.push({ room: i, side, axis, c, from, to, door: door ? door.p : null, inward, lowered: false, k: 1 });
    }
  });
  return out;
}

/** Where a wall item sits and which way it faces, for a point near a wall of room i. */
export function snapToWall(i, x, z) {
  const r = ROOMS[i];
  const d = { N: z - r.z0, S: r.z1 - z, W: x - r.x0, E: r.x1 - x };
  let side = 'N';
  for (const s of ['S', 'W', 'E']) if (d[s] < d[side]) side = s;
  const m = 0.7;
  const cx = Math.min(r.x1 - m, Math.max(r.x0 + m, x));
  const cz = Math.min(r.z1 - m, Math.max(r.z0 + m, z));
  if (side === 'N') return { side, x: cx, z: r.z0 + T, rotY: 0 };
  if (side === 'S') return { side, x: cx, z: r.z1 - T, rotY: Math.PI };
  if (side === 'W') return { side, x: r.x0 + T, z: cz, rotY: Math.PI / 2 };
  return { side, x: r.x1 - T, z: cz, rotY: -Math.PI / 2 };
}

export function buildWorld(scene) {
  const world = { walls: wallList(), wallGroups: [] };
  const R = rng(7);

  // Ground around the house and the floors of the rooms.
  const floor = [];
  floor.push([12 * 16, -6, 8 * 16, 80 * 16, 2, 70 * 16, '#8ED16F']);
  const pick = (arr) => arr[Math.floor(R() * arr.length)];
  ROOMS.forEach((r, i) => {
    for (let x = r.x0; x < r.x1; x++) {
      for (let z = r.z0; z < r.z1; z++) {
        let col;
        if (i === 0) col = pick(['#E8B98A', '#E2B080', '#EDC296']);
        else if (i === 1) col = (x + z) % 2 ? '#B8C7E0' : '#FFFFFF';
        else if (i === 2) col = pick(['#D29E6C', '#C99463', '#D8A673']);
        else if (i === 3) col = (x + z) % 2 ? '#CDEBFF' : '#FFFFFF';
        else col = pick(['#7ED957', '#74CF4E', '#86DE60', '#6FC94A']);
        floor.push([(x + 0.5) * 16, -3, (z + 0.5) * 16, 16, 3, 16, col]);
      }
    }
  });
  // Garden path from the living room door, and grass tufts.
  for (let x = 16; x < 24; x++) floor.push([(x + 0.5) * 16, -2.8, 12.5 * 16, 14, 3, 14, x % 2 ? '#D8D2C4' : '#CFC8B8']);
  for (let n = 0; n < 26; n++) {
    const x = 16.3 + R() * 7.4, z = 0.3 + R() * 15.4;
    if (Math.abs(z - 12.5) < 0.8) continue;
    floor.push([x * 16, 0, z * 16, 1.2, 2 + R() * 2, 1.2, '#5CB83A']);
  }
  // A few flowers and bushes outside the house, just for looks.
  for (let n = 0; n < 40; n++) {
    let x = -6 + R() * 36, z = -6 + R() * 28;
    if (x > -0.6 && x < 24.6 && z > -0.6 && z < 16.6) continue;
    if (R() < 0.5) floor.push([x * 16, -4, z * 16, 10, 8, 10, pick(['#4CB050', '#3E9B45', '#5CC23A'])]);
    else floor.push([x * 16, -4, z * 16, 3, 7, 3, pick(['#FF8FB1', '#FFD43B', '#FFFFFF', '#C9A0FF'])]);
  }
  const floorMesh = boxesGroup(floor, { seed: 3, jitter: 0.03 });
  floorMesh.traverse((m) => { if (m.isMesh) m.castShadow = false; });
  scene.add(floorMesh);

  // Built-in furniture.
  const W = '#B9784A', WD = '#8A5634';
  const fx = [
    // Bedroom: rug and a night table.
    [4 * 16, 0, 4.6 * 16, 52, 0.6, 36, '#FFB8D4'], [4 * 16, 0.6, 4.6 * 16, 44, 0.3, 28, '#FFD1E3'],
    [7.15 * 16, 0, 0.8 * 16, 17, 12.8, 15, W], [7.15 * 16, 4, 1.3 * 16 + 0.5, 13, 3.5, 0.6, WD], [7.15 * 16, 5.5, 1.3 * 16 + 1, 2, 1, 0.6, '#FFD43B'],
    // Dining table.
    [4 * 16, 14, 12.2 * 16, 54, 1.4, 32, W], [4 * 16, 15.2, 12.2 * 16, 50, 0.2, 28, '#FFFFFF'],
    ...[[-24, -13], [24, -13], [-24, 13], [24, 13]].map(([dx, dz]) => [4 * 16 + dx, 0, 12.2 * 16 + dz, 2, 14, 2, WD]),
    // Living room: round rug and coffee table.
    [12 * 16, 0, 12.6 * 16, 64, 0.6, 44, '#8E6CFF'], [12 * 16, 0.6, 12.6 * 16, 52, 0.3, 34, '#B9A6FF'],
    [12 * 16, 6, 13.05 * 16, 32, 2, 18, WD], ...[[-14, -7], [14, -7], [-14, 7], [14, 7]].map(([dx, dz]) => [12 * 16 + dx, 0, 13.05 * 16 + dz, 2, 6, 2, W]),
    // Bathroom counter with a sink.
    [13.95 * 16, 0, 0.75 * 16, 52, 15, 17, '#FFFFFF'], [13.95 * 16, 15, 0.75 * 16, 54, 1, 18, '#9FD8F5'],
    [13.95 * 16, 15.2, 0.85 * 16, 14, 1, 10, '#CDEBFF'], [13.95 * 16, 16, 0.4 * 16, 1.6, 4, 1.6, '#C0C7D1'], [13.95 * 16, 19, 0.55 * 16, 1.6, 1.2, 4, '#C0C7D1'],
    [13.2 * 16, 4, 1.3 * 16 + 1, 18, 8, 0.5, '#E6F6FF'], [14.7 * 16, 4, 1.3 * 16 + 1, 18, 8, 0.5, '#E6F6FF'],
    // Garden fence and gate posts.
  ];
  const fence = [];
  const post = (x, z) => fence.push([x * 16, 0, z * 16, 2, 11, 2, '#FFFFFF'], [x * 16, 11, z * 16, 1.4, 1.4, 1.4, '#F2EEE8']);
  for (let x = 16.5; x < 24; x += 1) { post(x, 0.1); post(x, 15.9); }
  for (let z = 0.5; z < 16; z += 1) if (Math.abs(z - 12.5) > 0.6) post(23.9, z);
  fence.push([20 * 16, 6, 0.1 * 16, 128, 1.5, 1, '#FFFFFF'], [20 * 16, 6, 15.9 * 16, 128, 1.5, 1, '#FFFFFF']);
  fence.push([23.9 * 16, 6, 5.75 * 16, 1, 1.5, 11.5 * 16 - 10, '#FFFFFF'], [23.9 * 16, 6, 14.5 * 16 + 2, 1, 1.5, 2.5 * 16 - 8, '#FFFFFF']);
  scene.add(boxesGroup(fx.concat(fence), { seed: 11, jitter: 0.03 }));

  world.wallParent = new THREE.Group();
  scene.add(world.wallParent);
  world.setWallColors = (colors) => buildWalls(world, colors);
  return world;
}

function buildWalls(world, colors) {
  for (const g of world.wallGroups) {
    world.wallParent.remove(g);
    g.traverse((m) => m.geometry && m.geometry.dispose());
  }
  world.wallGroups = [];
  for (const w of world.walls) {
    const col = colors[w.room] || '#FFF1DC';
    const boxes = [];
    // Pieces along the wall: [a, b] ranges in wall coordinates, y from y0 to y1.
    const pieces = [];
    if (w.door != null) {
      pieces.push([w.from, w.door - DOOR_W / 2, 0, WALL_H], [w.door + DOOR_W / 2, w.to, 0, WALL_H], [w.door - DOOR_W / 2, w.door + DOOR_W / 2, DOOR_H, WALL_H]);
    } else pieces.push([w.from, w.to, 0, WALL_H]);
    const off = w.c + (w.inward * T) / 2; // centre of this wall layer
    const add = (a, b, y0, y1, color, thick = T, inset = 0, kind) => {
      const len = b - a;
      if (len <= 0) return;
      const mid = (a + b) / 2;
      const o = off + w.inward * inset;
      if (w.axis === 'z') boxes.push([mid * 16, y0 * 16, o * 16, len * 16, (y1 - y0) * 16, thick * 16, color, kind]);
      else boxes.push([o * 16, y0 * 16, mid * 16, thick * 16, (y1 - y0) * 16, len * 16, color, kind]);
    };
    for (const [a, b, y0, y1] of pieces) {
      add(a, b, y0, y1, col);
      add(a, b, y0, Math.min(y1, 0.18), '#FFFFFF', T + 0.04, 0.02);
      if (w.room === 3) add(a, b, y0, Math.min(y1, 1.3), '#9FD8F5', T + 0.04, 0.02);
      if (y1 >= WALL_H) add(a, b, WALL_H - 0.12, WALL_H, '#FFFFFF', T + 0.02, 0);
    }
    if (w.door != null) {
      add(w.door - DOOR_W / 2 - 0.12, w.door - DOOR_W / 2, 0, DOOR_H, '#FFFFFF', T + 0.06, 0.02);
      add(w.door + DOOR_W / 2, w.door + DOOR_W / 2 + 0.12, 0, DOOR_H, '#FFFFFF', T + 0.06, 0.02);
      add(w.door - DOOR_W / 2 - 0.12, w.door + DOOR_W / 2 + 0.12, DOOR_H, DOOR_H + 0.12, '#FFFFFF', T + 0.06, 0.02);
    }
    const win = WINDOWS[`${w.room}${w.side}`];
    const wins = win == null ? [] : Array.isArray(win) ? win : [win];
    for (const p of wins) {
      add(p - 1.05, p + 1.05, 1.05, 2.55, '#FFFFFF', T + 0.06, 0);
      add(p - 0.9, p + 0.9, 1.2, 2.4, '#BDE7FF', T + 0.08, 0, 'glow');
      add(p - 0.04, p + 0.04, 1.2, 2.4, '#FFFFFF', T + 0.1, 0);
      add(p - 0.9, p + 0.9, 1.76, 1.84, '#FFFFFF', T + 0.1, 0);
    }
    const g = boxesGroup(boxes, { seed: w.room * 10 + w.c, jitter: 0.015 });
    g.scale.y = w.k;
    w.group = g;
    world.wallGroups.push(g);
    world.wallParent.add(g);
  }
}

/**
 * Lowers the walls that stand between the camera and the room we look at,
 * like a doll's house, so the room is always visible.
 */
export function updateWalls(world, camPos, focus, dt) {
  for (const w of world.walls) {
    const cam = w.axis === 'z' ? camPos.z : camPos.x;
    const f = w.axis === 'z' ? focus.z : focus.x;
    let lower = (cam - w.c) * (f - w.c) < 0;
    // Walls of the focused room that face the camera are lowered too, even if the camera is very high.
    w.lowered = lower;
    const target = lower ? 0.12 : 1;
    w.k += (target - w.k) * Math.min(1, dt * 8);
    if (w.group) w.group.scale.y = w.k;
  }
}

export function wallOf(world, room, side) {
  return world.walls.find((w) => w.room === room && w.side === side);
}
