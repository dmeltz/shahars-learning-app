import * as THREE from 'three';
import { boxesGroup, rng } from './voxel.js';

import LAYOUT_FILE from '../../../app/src/main/assets/house/layouts.json';

// The house, in floor tiles (1 unit = 16 pixels). Rooms keep the app's numbering:
// 0 bedroom, 1 dining room, 2 living room, 3 bathroom, 4 garden.
// The shape comes from the kid's house template (layouts.json). The app tells us which one
// before anything is drawn; when it changes, the app loads the page again.
export const LAYOUTS = LAYOUT_FILE.layouts;
function chosenLayout() {
  let id = null;
  try { if (window.Android && window.Android.layout) id = window.Android.layout(); } catch (e) { /* plain browser */ }
  if (!id) id = new URLSearchParams(location.search).get('layout');
  return LAYOUTS.find((l) => l.id === id) || LAYOUTS[0];
}
export const LAYOUT = chosenLayout();
export const ROOMS = LAYOUT.rooms;
export const HOUSE = {
  x0: Math.min(...ROOMS.map((r) => r.x0)),
  z0: Math.min(...ROOMS.map((r) => r.z0)),
  x1: Math.max(...ROOMS.map((r) => r.x1)),
  z1: Math.max(...ROOMS.map((r) => r.z1)),
};
export const HOUSE_CENTER = { x: (HOUSE.x0 + HOUSE.x1) / 2, z: (HOUSE.z0 + HOUSE.z1) / 2 };
export const WALL_H = 3;
const T = 0.16; // wall thickness (each room has its own wall layer)
export const DOOR_W = 1.7;
const DOOR_H = 2.3;
export const WALL_T = 0.16;

/** Doors between rooms: on the line x=c or z=c, at position p along the wall. */
export const DOORS = LAYOUT.doors;

const WINDOWS = LAYOUT.windows || {};

const GARDEN = ROOMS.findIndex((r) => r.garden);

/**
 * Where the starter furniture (the move-in gift) stands at first, worked out from each room's size
 * so it fits every template. The furniture itself is a normal item now (items.js), so the kids can
 * move it, store it and buy more.
 */
export function giftSpot(id) {
  const c = (i) => ({ x: (ROOMS[i].x0 + ROOMS[i].x1) / 2, z: (ROOMS[i].z0 + ROOMS[i].z1) / 2 });
  switch (id) {
    case 'nightstand': return { x: ROOMS[0].x1 - 0.85, z: ROOMS[0].z0 + 0.8 };
    case 'bedrug': return { x: c(0).x, z: c(0).z + 0.6 };
    case 'table': return { x: c(1).x, z: c(1).z + 0.2 };
    case 'livrug': return { x: c(2).x, z: c(2).z + 0.6 };
    case 'coffee': return { x: c(2).x, z: c(2).z + 1.05 };
    case 'sink': return { x: ROOMS[3].x1 - 2.05, z: ROOMS[3].z0 + 0.75 };
    default: return null;
  }
}

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

/**
 * Tops that small items can stand on: { x0, x1, z0, z1, y }. Filled by the house from the tables
 * and counters that are in the rooms right now (they can be moved, so this changes).
 */
export const SURFACES = [];

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
      const doors = DOORS.filter((d) => (d.a === i || d.b === i) && d.axis === axis && d.c === c && d.p > from && d.p < to)
        .map((d) => d.p).sort((a, b) => a - b);
      const inward = side === 'N' || side === 'W' ? 1 : -1;
      out.push({ room: i, side, axis, c, from, to, doors, inward, lowered: false, k: 1 });
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
  const HC = HOUSE_CENTER;

  // Ground around the house and the floors of the rooms.
  const floor = [];
  floor.push([HC.x * 16, -6, HC.z * 16, (HOUSE.x1 - HOUSE.x0 + 56) * 16, 2, (HOUSE.z1 - HOUSE.z0 + 54) * 16, '#8ED16F']);
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

  // Garden: a path from the house door straight across to a gate in the fence.
  const g = ROOMS[GARDEN];
  const gd = DOORS.find((d) => d.a === GARDEN || d.b === GARDEN);
  const path = { axis: gd.axis, p: gd.p };
  const onPath = (x, z) => Math.abs((path.axis === 'z' ? x : z) - path.p) < 0.8;
  // The gate is on the garden side across from the door.
  const gateSide = gd.axis === 'x' ? (gd.c === g.x0 ? 'E' : 'W') : (gd.c === g.z0 ? 'S' : 'N');
  if (gd.axis === 'x') {
    for (let x = g.x0; x < g.x1; x++) floor.push([(x + 0.5) * 16, -2.8, gd.p * 16, 14, 3, 14, x % 2 ? '#D8D2C4' : '#CFC8B8']);
  } else {
    for (let z = g.z0; z < g.z1; z++) floor.push([gd.p * 16, -2.8, (z + 0.5) * 16, 14, 3, 14, z % 2 ? '#D8D2C4' : '#CFC8B8']);
  }
  const gArea = (g.x1 - g.x0) * (g.z1 - g.z0);
  for (let n = 0; n < Math.round(gArea / 5); n++) {
    const x = g.x0 + 0.3 + R() * (g.x1 - g.x0 - 0.6), z = g.z0 + 0.3 + R() * (g.z1 - g.z0 - 0.6);
    if (onPath(x, z)) continue;
    floor.push([x * 16, 0, z * 16, 1.2, 2 + R() * 2, 1.2, '#5CB83A']);
  }
  // A few flowers and bushes outside the house, just for looks.
  const nearHouse = (x, z) => ROOMS.some((r) => x > r.x0 - 0.6 && x < r.x1 + 0.6 && z > r.z0 - 0.6 && z < r.z1 + 0.6);
  for (let n = 0; n < 40; n++) {
    const x = HOUSE.x0 - 6 + R() * (HOUSE.x1 - HOUSE.x0 + 12), z = HOUSE.z0 - 6 + R() * (HOUSE.z1 - HOUSE.z0 + 12);
    if (nearHouse(x, z)) continue;
    if (R() < 0.5) floor.push([x * 16, -4, z * 16, 10, 8, 10, pick(['#4CB050', '#3E9B45', '#5CC23A'])]);
    else floor.push([x * 16, -4, z * 16, 3, 7, 3, pick(['#FF8FB1', '#FFD43B', '#FFFFFF', '#C9A0FF'])]);
  }
  const floorMesh = boxesGroup(floor, { seed: 3, jitter: 0.03 });
  floorMesh.traverse((m) => { if (m.isMesh) m.castShadow = false; });
  scene.add(floorMesh);

  // Garden fence: posts and rails along every garden side that does not touch the house, with a gap for the gate.
  const fence = [];
  const post = (x, z) => fence.push([x * 16, 0, z * 16, 2, 11, 2, '#FFFFFF'], [x * 16, 11, z * 16, 1.4, 1.4, 1.4, '#F2EEE8']);
  const houseRoomAt = (x, z) => { const i = roomAt(x, z); return i >= 0 && i !== GARDEN; };
  for (const side of ['N', 'S', 'W', 'E']) {
    const along = side === 'N' || side === 'S';
    const from = along ? g.x0 : g.z0, to = along ? g.x1 : g.z1;
    const line = side === 'N' ? g.z0 + 0.1 : side === 'S' ? g.z1 - 0.1 : side === 'W' ? g.x0 + 0.1 : g.x1 - 0.1;
    const out = side === 'N' || side === 'W' ? -0.4 : 0.4;
    const at = (t) => (along ? [t, line] : [line, t]);
    const outside = (t) => (along ? houseRoomAt(t, line + out) : houseRoomAt(line + out, t));
    const gate = (t) => side === gateSide && Math.abs(t - gd.p) < 0.6;
    for (let t = from + 0.5; t < to; t += 1) {
      if (outside(t) || gate(t)) continue;
      post(...at(t));
      const n = t + 1;
      if (n < to && !outside(n) && !gate(n)) {
        const [x, z] = at(t + 0.5);
        fence.push(along ? [x * 16, 6, z * 16, 16, 1.5, 1, '#FFFFFF'] : [x * 16, 6, z * 16, 1, 1.5, 16, '#FFFFFF']);
      }
    }
  }
  scene.add(boxesGroup(fence, { seed: 11, jitter: 0.03 }));

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
    let at = w.from;
    for (const d of w.doors) {
      pieces.push([at, d - DOOR_W / 2, 0, WALL_H], [d - DOOR_W / 2, d + DOOR_W / 2, DOOR_H, WALL_H]);
      at = d + DOOR_W / 2;
    }
    pieces.push([at, w.to, 0, WALL_H]);
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
    for (const d of w.doors) {
      add(d - DOOR_W / 2 - 0.12, d - DOOR_W / 2, 0, DOOR_H, '#FFFFFF', T + 0.06, 0.02);
      add(d + DOOR_W / 2, d + DOOR_W / 2 + 0.12, 0, DOOR_H, '#FFFFFF', T + 0.06, 0.02);
      add(d - DOOR_W / 2 - 0.12, d + DOOR_W / 2 + 0.12, DOOR_H, DOOR_H + 0.12, '#FFFFFF', T + 0.06, 0.02);
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
export function updateWalls(world, camPos, focus, dt, keepUp = false) {
  for (const w of world.walls) {
    const cam = w.axis === 'z' ? camPos.z : camPos.x;
    const f = w.axis === 'z' ? focus.z : focus.x;
    // keepUp: the kid chose "walls always up" with the 🧱 button.
    let lower = !keepUp && (cam - w.c) * (f - w.c) < 0;
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
