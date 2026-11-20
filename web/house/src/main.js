import * as THREE from 'three';
import { boxesGroup, boxesBounds, hashStr, rng } from './voxel.js';
import { ITEM_MODELS, ITEM_META } from './items.js';
import { makeCharacter, pose, CHAR_IDS } from './chars.js';
import { ROOMS, HOUSE, DOORS, buildWorld, updateWalls, roomAt, roomCenter, surfaceAt, snapToWall, wallOf } from './world.js';

const params = new URLSearchParams(location.search);
const thumb = params.get('thumb');

// The app (Kotlin) listens on window.Android. In a plain browser we fake it, for testing.
const bridge = window.Android || {
  onReady() {},
  onMoved(id, gx, gz, rot, room) { console.log('moved', id, gx, gz, rot, room); },
  onStore(id) { console.log('store', id); demoState.items = demoState.items.map((it) => (it.id === id ? { ...it, inRoom: false } : it)); house.setState(JSON.stringify(demoState)); },
  onTapBuddy(id) { house.say(id, 'שלום! אני ' + id); },
  onFocus(room) { console.log('focus', room); },
};

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: !!thumb, preserveDrawingBuffer: !!thumb });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);

scene.add(new THREE.HemisphereLight(0xffffff, 0xc9a37a, 1.5));
const sun = new THREE.DirectionalLight(0xffffff, 1.9);
sun.castShadow = true;
sun.shadow.mapSize.set(thumb ? 1024 : 2048, thumb ? 1024 : 2048);
sun.shadow.bias = -0.0008;
sun.shadow.normalBias = 0.02;
scene.add(sun, sun.target);

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  renderer.domElement.style.width = w + 'px';
  renderer.domElement.style.height = h + 'px';
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();

// ---------- Item models ----------

const itemCache = {};
function itemBoxes(id) {
  if (!itemCache[id]) {
    const fn = ITEM_MODELS[id];
    const boxes = fn ? fn() : [[0, 0, 0, 8, 8, 8, '#FF5C9A']];
    itemCache[id] = { boxes, bounds: boxesBounds(boxes) };
  }
  return itemCache[id];
}
function makeItem(id) {
  const { boxes, bounds } = itemBoxes(id);
  const g = boxesGroup(boxes, { seed: hashStr(id) });
  const holder = new THREE.Group();
  holder.add(g);
  holder.userData = { kind: 'item', id, bounds };
  return holder;
}

// ---------- Thumbnail mode: one model on a clear background, for the shop pictures ----------

if (thumb) {
  const [kind, id] = thumb.split(':');
  let obj, size;
  if (kind === 'item') {
    obj = makeItem(id);
    const b = itemCache[id].bounds;
    const meta = ITEM_META[id] || {};
    size = { w: b.w / 16, h: b.h / 16, d: b.d / 16, cy: meta.wall || meta.fly ? 0 : b.h / 32 };
    if (meta.wall || meta.fly) {
      let y0 = Infinity, y1 = -Infinity;
      itemCache[id].boxes.forEach((bx) => { y0 = Math.min(y0, bx[1]); y1 = Math.max(y1, bx[1] + bx[4]); });
      size.cy = (y0 + y1) / 32;
      size.h = (y1 - y0) / 16;
    }
  } else {
    const c = makeCharacter(id);
    const mood = params.get('mood') || 'happy';
    c.setMood(mood);
    pose(c, 0.13, { cheer: mood === 'cheer' ? 1 : 0, sleepy: mood === 'sleepy' ? 1 : 0 });
    c.root.position.y = 0;
    obj = new THREE.Group();
    obj.add(c.root);
    if (mood === 'sleepy') {
      const zm = new THREE.SpriteMaterial({ map: zTexture(), transparent: true, depthWrite: false });
      [[0.45, 1.65, 0.22], [0.62, 1.88, 0.3]].forEach(([x, y, sc]) => {
        const z = new THREE.Sprite(zm);
        z.position.set(x, y, 0.2);
        z.scale.setScalar(sc);
        obj.add(z);
      });
    }
    size = { w: 1.0, h: 1.55, d: 0.7, cy: 0.82 };
    if (id === 'wizard_b' || id === 'wizard_g') size = { w: 1.0, h: 1.85, d: 0.7, cy: 0.95 };
    if (id === 'kangi' || id === 'roni' || id === 'boni' || id === 'bobi') size.h = 1.75, size.cy = 0.9;
  }
  scene.add(obj);
  const yaw = kind === 'item' ? ((ITEM_META[id] || {}).wall ? 0.35 : 0.55) : 0.38;
  const pitch = kind === 'item' ? 0.42 : 0.18;
  const r = Math.max(size.w, size.h, size.d) * 1.25 + 0.2;
  const dist = r / Math.tan((camera.fov * Math.PI) / 360) * 0.62;
  const target = new THREE.Vector3(0, size.cy, 0);
  camera.position.set(Math.sin(yaw) * Math.cos(pitch) * dist, size.cy + Math.sin(pitch) * dist, Math.cos(yaw) * Math.cos(pitch) * dist);
  camera.lookAt(target);
  sun.position.set(3, 8, 6);
  sun.shadow.camera.left = sun.shadow.camera.bottom = -3;
  sun.shadow.camera.right = sun.shadow.camera.top = 3;
  sun.shadow.camera.updateProjectionMatrix();
  renderer.setClearColor(0x000000, 0);
  renderer.render(scene, camera);
  window.__thumbDone = true;
} else {
  startHouse();
}

// ---------- The house ----------

let house;
let demoState;

function startHouse() {
  scene.background = new THREE.Color('#BFE6FF');
  scene.fog = new THREE.Fog('#BFE6FF', 45, 90);
  const world = buildWorld(scene);
  sun.position.set(20, 30, 22);
  sun.target.position.set(12, 0, 8);
  sun.shadow.camera.left = -18; sun.shadow.camera.right = 18;
  sun.shadow.camera.top = 18; sun.shadow.camera.bottom = -18;
  sun.shadow.camera.near = 5; sun.shadow.camera.far = 80;
  sun.shadow.camera.updateProjectionMatrix();

  const overlay = document.getElementById('overlay');

  // Camera: turns around a point we look at.
  const cam = { yaw: 0.55, pitch: 0.9, dist: 13, target: roomCenter(0).setY(0.6) };
  const goal = { yaw: cam.yaw, pitch: cam.pitch, dist: cam.dist, target: cam.target.clone() };
  let focusRoom = 0;
  let overview = false;

  function placeCamera() {
    const cp = Math.cos(cam.pitch);
    camera.position.set(
      cam.target.x + Math.sin(cam.yaw) * cp * cam.dist,
      cam.target.y + Math.sin(cam.pitch) * cam.dist,
      cam.target.z + Math.cos(cam.yaw) * cp * cam.dist,
    );
    camera.lookAt(cam.target);
  }

  function focusOn(room, instant) {
    focusRoom = room;
    overview = false;
    goal.target.copy(roomCenter(room)).setY(0.6);
    goal.dist = room === 4 ? 17 : 12.5;
    if (instant) { cam.target.copy(goal.target); cam.dist = goal.dist; }
  }

  // ---------- Items ----------
  const items = new Map(); // id -> {obj, data}
  const itemParent = new THREE.Group();
  scene.add(itemParent);

  function defaultSpot(it) {
    // Where an item stood in the old flat picture of the room, turned into a spot in the 3D room.
    const r = ROOMS[it.room] || ROOMS[0];
    const meta = ITEM_META[it.id] || {};
    const fx = Math.min(1, Math.max(0, (it.x || 0) / 0.85));
    const fy = Math.min(1, Math.max(0, (it.y || 0) / 0.85));
    const R = rng(hashStr(it.id));
    const small = meta.small && SURFACES_IN(it.room);
    if (small) {
      const s = SURFACES_IN(it.room);
      return { x: s.x0 + 0.3 + R() * (s.x1 - s.x0 - 0.6), z: s.z0 + 0.3 + R() * (s.z1 - s.z0 - 0.6) };
    }
    if (meta.wall && !r.garden) return { x: r.x0 + 1 + fx * 6, z: r.z0 + 0.2 };
    const x = r.x0 + 1 + fx * (r.x1 - r.x0 - 2);
    const z = r.z0 + 1.3 + Math.max(0, (fy - 0.4) / 0.6) * (r.z1 - r.z0 - 2.3);
    return { x, z };
  }
  const SURFACES_IN = (room) => surfacesOf(room)[0];

  function itemHalf(id, rot) {
    const b = itemCache[id] ? itemCache[id].bounds : itemBoxes(id).bounds;
    const hw = b.w / 32, hd = b.d / 32;
    return rot % 2 ? { hx: hd, hz: hw } : { hx: hw, hz: hd };
  }

  function layoutItem(rec) {
    const { obj, data } = rec;
    const meta = ITEM_META[data.id] || {};
    let x = data.gx, z = data.gz;
    if (x == null || z == null || isNaN(x) || isNaN(z)) {
      const s = defaultSpot(data);
      x = s.x; z = s.z;
    }
    let room = roomAt(x, z);
    if (room < 0) room = data.room || 0;
    rec.room = room;
    const r = ROOMS[room];
    if (meta.wall && !r.garden) {
      const s = snapToWall(room, x, z);
      obj.position.set(s.x, 1.85, s.z);
      obj.rotation.y = s.rotY;
      rec.wall = wallOf(world, room, s.side);
      rec.x = s.x; rec.z = s.z;
    } else {
      const { hx, hz } = itemHalf(data.id, data.rot || 0);
      x = Math.min(r.x1 - hx - 0.17, Math.max(r.x0 + hx + 0.17, x));
      z = Math.min(r.z1 - hz - 0.17, Math.max(r.z0 + hz + 0.17, z));
      if (r.x1 - r.x0 < hx * 2 + 0.34) x = (r.x0 + r.x1) / 2;
      const y = meta.fly || meta.wall ? 1.7 : meta.small ? surfaceAt(x, z) : 0;
      obj.position.set(x, y, z);
      obj.rotation.y = ((data.rot || 0) * Math.PI) / 2;
      rec.wall = null;
      rec.x = x; rec.z = z; rec.baseY = y;
    }
  }

  function syncItems(list) {
    const keep = new Set();
    for (const it of list) {
      if (!it.inRoom) continue;
      keep.add(it.id);
      let rec = items.get(it.id);
      if (!rec) {
        const obj = makeItem(it.id);
        itemParent.add(obj);
        rec = { obj, data: it };
        items.set(it.id, rec);
      }
      if (dragging && dragging.rec === rec) continue;
      rec.data = it;
      layoutItem(rec);
    }
    for (const [id, rec] of items) {
      if (!keep.has(id)) {
        itemParent.remove(rec.obj);
        items.delete(id);
      }
    }
  }

  // ---------- Characters ----------
  const chars = new Map(); // id -> character state
  const charParent = new THREE.Group();
  scene.add(charParent);
  let asleepAll = false;
  let sleepLine = '';

  function randomSpotIn(room, R = Math.random) {
    const r = ROOMS[room];
    return new THREE.Vector3(r.x0 + 1.2 + R() * (r.x1 - r.x0 - 2.4), 0, r.z0 + 1.6 + R() * (r.z1 - r.z0 - 2.8));
  }

  /** The way from one point to another, through the doors. */
  function pathTo(from, toRoom, to) {
    const fromRoom = roomAt(from.x, from.z);
    const pts = [];
    if (fromRoom >= 0 && fromRoom !== toRoom) {
      // Breadth-first search over the rooms.
      const prev = { [fromRoom]: null };
      const q = [fromRoom];
      while (q.length) {
        const cur = q.shift();
        if (cur === toRoom) break;
        for (const d of DOORS) {
          const nxt = d.a === cur ? d.b : d.b === cur ? d.a : -1;
          if (nxt >= 0 && !(nxt in prev)) { prev[nxt] = { room: cur, door: d }; q.push(nxt); }
        }
      }
      const doors = [];
      let cur = toRoom;
      while (prev[cur]) { doors.unshift({ door: prev[cur].door, from: prev[cur].room, to: cur }); cur = prev[cur].room; }
      for (const { door, from: a, to: b } of doors) {
        const ca = roomCenter(a), cb = roomCenter(b);
        const p = door.axis === 'z' ? new THREE.Vector3(door.p, 0, door.c) : new THREE.Vector3(door.c, 0, door.p);
        const dirA = door.axis === 'z' ? Math.sign(ca.z - door.c) : Math.sign(ca.x - door.c);
        const dirB = -dirA;
        const off = (v, s) => (door.axis === 'z' ? new THREE.Vector3(p.x, 0, p.z + s * v) : new THREE.Vector3(p.x + s * v, 0, p.z));
        pts.push(off(0.8, dirA), p.clone(), off(0.8, dirB));
      }
    }
    pts.push(to);
    return pts;
  }

  function syncChars(list) {
    const keep = new Set();
    list.forEach((b, i) => {
      keep.add(b.id);
      let c = chars.get(b.id);
      if (!c) {
        const ch = makeCharacter(b.id);
        const holder = new THREE.Group();
        holder.add(ch.root);
        holder.userData = { kind: 'char', id: b.id };
        ch.root.traverse((m) => { m.userData.charId = b.id; });
        charParent.add(holder);
        const start = b.main ? roomCenter(b.room).add(new THREE.Vector3(0.6, 0, 1.2)) : randomSpotIn(b.room, rng(hashStr(b.id)));
        holder.position.copy(start);
        holder.rotation.y = 0.3;
        c = { ...ch, holder, room: b.room, path: [], idle: 1 + Math.random() * 3, talk: null, talkT: 0, awake: false, cheerT: 0, phase: Math.random() * 10 };
        chars.set(b.id, c);
      }
      c.main = b.main;
      c.index = i;
      if (c.room !== b.room) {
        c.room = b.room;
        const to = b.main ? roomCenter(b.room).add(new THREE.Vector3(0.6, 0, 1.2)) : randomSpotIn(b.room);
        c.path = pathTo(c.holder.position, b.room, to);
      }
    });
    for (const [id, c] of chars) {
      if (!keep.has(id)) {
        charParent.remove(c.holder);
        if (c.bubble) c.bubble.remove();
        chars.delete(id);
      }
    }
  }

  function say(id, text) {
    const c = chars.get(id);
    if (!c) return;
    c.awake = true;
    c.talk = text;
    c.talkT = 3.2;
    c.cheerT = 1.6;
  }

  // ---------- Speech bubbles ----------
  function bubbleFor(c, text) {
    if (!c.bubble) {
      c.bubble = document.createElement('div');
      c.bubble.className = 'bubble';
      overlay.appendChild(c.bubble);
    }
    if (c.bubble.textContent !== text) c.bubble.textContent = text;
    const p = c.holder.position.clone();
    p.y += 1.95;
    p.project(camera);
    const x = (p.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-p.y * 0.5 + 0.5) * window.innerHeight;
    c.bubble.style.display = p.z < 1 ? 'block' : 'none';
    c.bubble.style.left = Math.round(Math.min(window.innerWidth - 90, Math.max(90, x))) + 'px';
    c.bubble.style.top = Math.round(Math.max(30, y)) + 'px';
  }

  // ---------- Touch: turn, zoom, drag items and the first friend ----------
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const pointers = new Map();
  let gesture = null; // {type:'turn'|'pinch'|'press', ...}
  let dragging = null;
  let lastTap = { id: null, t: 0 };
  let tapTimer = null;

  function setNdc(x, y) {
    const rect = renderer.domElement.getBoundingClientRect();
    ndc.set(((x - rect.left) / rect.width) * 2 - 1, -((y - rect.top) / rect.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
  }
  function hitTest(x, y) {
    setNdc(x, y);
    const targets = [];
    for (const rec of items.values()) if (rec.obj.visible) targets.push(rec.obj);
    for (const c of chars.values()) targets.push(c.holder);
    const hits = ray.intersectObjects(targets, true);
    for (const h of hits) {
      let o = h.object;
      while (o && !o.userData.kind) o = o.parent;
      if (!o) continue;
      if (o.userData.kind === 'item') return { kind: 'item', id: o.userData.id, point: h.point };
      if (o.userData.kind === 'char') return { kind: 'char', id: o.userData.id, point: h.point };
    }
    return null;
  }
  function floorPoint(x, y) {
    setNdc(x, y);
    const p = new THREE.Vector3();
    return ray.ray.intersectPlane(floorPlane, p) ? p : null;
  }

  const el = renderer.domElement;
  el.addEventListener('pointerdown', (e) => {
    el.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 2) {
      endDrag();
      const [a, b] = [...pointers.values()];
      gesture = { type: 'pinch', d: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2, dist: goal.dist };
      return;
    }
    if (pointers.size > 2) return;
    const hit = hitTest(e.clientX, e.clientY);
    gesture = { type: 'press', x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY, t0: performance.now(), hit, moved: false };
  });
  el.addEventListener('pointermove', (e) => {
    if (!pointers.has(e.pointerId)) return;
    const prev = pointers.get(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (!gesture) return;
    if (gesture.type === 'pinch' && pointers.size >= 2) {
      const [a, b] = [...pointers.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      goal.dist = Math.min(34, Math.max(4, (gesture.dist * gesture.d) / Math.max(d, 1)));
      cam.dist = goal.dist;
      // Two fingers moving together slide the view.
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      pan(mx - gesture.mx, my - gesture.my);
      gesture.mx = mx; gesture.my = my;
      return;
    }
    if (gesture.type !== 'press' && gesture.type !== 'turn' && gesture.type !== 'drag') return;
    const dx = e.clientX - prev.x, dy = e.clientY - prev.y;
    if (gesture.type === 'press') {
      if (Math.hypot(e.clientX - gesture.x0, e.clientY - gesture.y0) < 10) return;
      gesture.moved = true;
      const h = gesture.hit;
      const draggable = h && (h.kind === 'item' || (h.kind === 'char' && chars.get(h.id) && chars.get(h.id).main));
      if (draggable) startDrag(h);
      else gesture.type = 'turn';
    }
    if (gesture.type === 'turn') {
      goal.yaw -= dx * 0.008;
      goal.pitch = Math.min(1.45, Math.max(0.25, goal.pitch + dy * 0.006));
      cam.yaw = goal.yaw; cam.pitch = goal.pitch;
    } else if (gesture.type === 'drag') {
      moveDrag(e.clientX, e.clientY);
    }
  });
  const up = (e) => {
    pointers.delete(e.pointerId);
    if (!gesture) return;
    if (gesture.type === 'pinch') { if (pointers.size === 0) gesture = null; return; }
    if (gesture.type === 'press' && !gesture.moved) onTap(gesture.hit, e.clientX, e.clientY);
    if (gesture.type === 'drag') endDrag();
    gesture = null;
  };
  el.addEventListener('pointerup', up);
  el.addEventListener('pointercancel', up);
  el.addEventListener('wheel', (e) => {
    e.preventDefault();
    goal.dist = Math.min(34, Math.max(4, goal.dist * (e.deltaY > 0 ? 1.1 : 0.9)));
  }, { passive: false });

  function pan(dx, dy) {
    const k = cam.dist * 0.0018;
    const right = new THREE.Vector3(Math.cos(cam.yaw), 0, -Math.sin(cam.yaw));
    const fwd = new THREE.Vector3(-Math.sin(cam.yaw), 0, -Math.cos(cam.yaw));
    goal.target.addScaledVector(right, -dx * k).addScaledVector(fwd, dy * k);
    goal.target.x = Math.min(HOUSE.x1 + 2, Math.max(HOUSE.x0 - 2, goal.target.x));
    goal.target.z = Math.min(HOUSE.z1 + 2, Math.max(HOUSE.z0 - 2, goal.target.z));
    cam.target.copy(goal.target);
  }

  function onTap(hit, x, y) {
    if (!hit) {
      // Tap on a room's floor to look at that room.
      const p = floorPoint(x, y);
      const now = performance.now();
      if (p) {
        const r = roomAt(p.x, p.z);
        if (r >= 0 && lastTap.id === 'floor' + r && now - lastTap.t < 350) {
          bridge.onFocus(r);
          focusOn(r);
          lastTap = { id: null, t: 0 };
          return;
        }
        lastTap = { id: 'floor' + r, t: now };
      }
      return;
    }
    if (hit.kind === 'char') {
      bridge.onTapBuddy(hit.id);
      return;
    }
    const now = performance.now();
    if (lastTap.id === hit.id && now - lastTap.t < 350) {
      clearTimeout(tapTimer);
      lastTap = { id: null, t: 0 };
      bridge.onStore(hit.id);
      return;
    }
    lastTap = { id: hit.id, t: now };
    clearTimeout(tapTimer);
    // A single tap turns the item. Wait a moment in case it is a double tap.
    tapTimer = setTimeout(() => {
      const rec = items.get(hit.id);
      if (!rec) return;
      const meta = ITEM_META[hit.id] || {};
      if (meta.wall && !ROOMS[rec.room].garden) return;
      rec.data = { ...rec.data, rot: ((rec.data.rot || 0) + 1) % 4, gx: rec.x, gz: rec.z };
      layoutItem(rec);
      report(rec);
    }, 360);
  }

  function startDrag(h) {
    gesture.type = 'drag';
    if (h.kind === 'item') {
      const rec = items.get(h.id);
      if (!rec) { gesture.type = 'turn'; return; }
      const p = floorPoint(gesture.x0, gesture.y0) || new THREE.Vector3(rec.x, 0, rec.z);
      dragging = { kind: 'item', rec, dx: rec.x - p.x, dz: rec.z - p.z };
    } else {
      const c = chars.get(h.id);
      const p = floorPoint(gesture.x0, gesture.y0) || c.holder.position.clone();
      c.path = [];
      dragging = { kind: 'char', c, dx: c.holder.position.x - p.x, dz: c.holder.position.z - p.z };
    }
  }

  function moveDrag(x, y) {
    if (!dragging) return;
    const p = floorPoint(x, y);
    if (!p) return;
    const nx = Math.min(HOUSE.x1 - 0.3, Math.max(HOUSE.x0 + 0.3, p.x + dragging.dx));
    const nz = Math.min(HOUSE.z1 - 0.3, Math.max(HOUSE.z0 + 0.3, p.z + dragging.dz));
    if (dragging.kind === 'item') {
      const rec = dragging.rec;
      rec.data = { ...rec.data, gx: nx, gz: nz };
      layoutItem(rec);
      rec.obj.position.y += 0.25;
    } else {
      const c = dragging.c;
      const r = roomAt(nx, nz);
      if (r >= 0) {
        const R = ROOMS[r];
        c.holder.position.set(Math.min(R.x1 - 0.4, Math.max(R.x0 + 0.4, nx)), 0, Math.min(R.z1 - 0.4, Math.max(R.z0 + 0.4, nz)));
      }
      c.lifted = true;
    }
  }

  function endDrag() {
    if (!dragging) return;
    if (dragging.kind === 'item') {
      const rec = dragging.rec;
      layoutItem(rec);
      report(rec);
    } else {
      dragging.c.lifted = false;
    }
    dragging = null;
  }

  function report(rec) {
    rec.data = { ...rec.data, gx: rec.x, gz: rec.z, room: rec.room };
    bridge.onMoved(rec.data.id, rec.x, rec.z, rec.data.rot || 0, rec.room);
  }

  // ---------- Buttons on the view ----------
  const btn = (label, title, fn) => {
    const b = document.createElement('button');
    b.textContent = label;
    b.title = title;
    b.addEventListener('click', (e) => { e.stopPropagation(); fn(); });
    document.getElementById('buttons').appendChild(b);
  };
  btn('➕', 'zoom in', () => { goal.dist = Math.max(4, goal.dist * 0.75); });
  btn('➖', 'zoom out', () => { goal.dist = Math.min(34, goal.dist * 1.33); });
  btn('🔄', 'turn', () => { goal.yaw += Math.PI / 2; });
  btn('🏠', 'whole house', () => {
    if (overview) { focusOn(focusRoom); return; }
    overview = true;
    goal.target.set(12, 0.6, 8);
    goal.dist = 27;
    goal.pitch = Math.max(goal.pitch, 0.9);
  });

  // ---------- Animation loop ----------
  const clock = new THREE.Clock();
  let t = 0;
  const zz = [];
  function tick() {
    const dt = Math.min(0.05, clock.getDelta());
    t += dt;
    // Smooth camera.
    const k = Math.min(1, dt * 6);
    cam.yaw += (goal.yaw - cam.yaw) * k;
    cam.pitch += (goal.pitch - cam.pitch) * k;
    cam.dist += (goal.dist - cam.dist) * k;
    cam.target.lerp(goal.target, k);
    placeCamera();
    updateWalls(world, camera.position, cam.target, dt);

    // Wall items hide when their wall is lowered.
    for (const rec of items.values()) {
      rec.obj.visible = !(rec.wall && rec.wall.k < 0.6);
      const meta = ITEM_META[rec.data.id] || {};
      if (meta.fly && !(dragging && dragging.rec === rec)) {
        rec.obj.position.y = rec.baseY + Math.sin(t * 2 + rec.x) * 0.15;
        rec.obj.rotation.y = ((rec.data.rot || 0) * Math.PI) / 2 + Math.sin(t * 0.7 + rec.z) * 0.6;
      }
    }

    let sleepShown = false;
    for (const c of chars.values()) {
      const asleep = asleepAll && !c.awake;
      let walking = 0;
      if (!c.lifted && c.path.length) {
        const tgt = c.path[0];
        const d = new THREE.Vector3().subVectors(tgt, c.holder.position).setY(0);
        const speed = c.main ? 3.2 : 1.6;
        const step = speed * dt;
        if (d.length() <= step) {
          c.holder.position.copy(tgt);
          c.path.shift();
        } else {
          d.normalize();
          c.holder.position.addScaledVector(d, step);
          const want = Math.atan2(d.x, d.z);
          let diff = want - c.holder.rotation.y;
          diff = Math.atan2(Math.sin(diff), Math.cos(diff));
          c.holder.rotation.y += diff * Math.min(1, dt * 10);
        }
        walking = 1;
      } else if (!c.lifted && !asleep) {
        c.idle -= dt;
        if (c.idle <= 0) {
          c.idle = 3 + Math.random() * 5;
          if (!c.main) c.path = [randomSpotIn(c.room)];
          else {
            // The first friend turns to look at you.
            c.lookAtCam = true;
          }
        }
        if (c.lookAtCam || c.talkT > 0) {
          const want = Math.atan2(camera.position.x - c.holder.position.x, camera.position.z - c.holder.position.z);
          let diff = want - c.holder.rotation.y;
          diff = Math.atan2(Math.sin(diff), Math.cos(diff));
          c.holder.rotation.y += diff * Math.min(1, dt * 5);
          if (Math.abs(diff) < 0.05) c.lookAtCam = false;
        }
      }
      if (c.talkT > 0) c.talkT -= dt;
      if (c.cheerT > 0) c.cheerT -= dt;
      const cheer = c.lifted ? 1 : c.cheerT > 0 ? 1 : 0;
      c.setMood(cheer ? 'cheer' : asleep ? 'sleepy' : 'happy');
      pose(c, t + c.phase, { walking, cheer, sleepy: asleep ? 1 : 0 });
      if (c.lifted) c.root.position.y = 0.35;

      // Speech bubble.
      let line = c.talkT > 0 ? c.talk : null;
      if (!line && asleep && !sleepShown && sleepLine && roomAt(c.holder.position.x, c.holder.position.z) === focusRoom) {
        line = sleepLine;
        sleepShown = true;
      }
      if (line) bubbleFor(c, line);
      else if (c.bubble) c.bubble.style.display = 'none';
      c.asleep = asleep;
    }
    // Floating Z's above sleeping friends.
    updateZz(dt);
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  const zMat = new THREE.SpriteMaterial({ map: zTexture(), transparent: true, depthWrite: false });
  let zClock = 0;
  function updateZz(dt) {
    zClock -= dt;
    if (zClock <= 0) {
      zClock = 0.9;
      for (const c of chars.values()) {
        if (!c.asleep) continue;
        const s = new THREE.Sprite(zMat);
        s.scale.set(0.35, 0.35, 0.35);
        s.position.copy(c.holder.position).add(new THREE.Vector3(0.3, 1.8, 0));
        s.userData.life = 2.2;
        scene.add(s);
        zz.push(s);
      }
    }
    for (let i = zz.length - 1; i >= 0; i--) {
      const s = zz[i];
      s.userData.life -= dt;
      s.position.y += dt * 0.35;
      s.position.x += Math.sin(s.userData.life * 3) * dt * 0.2;
      s.material.opacity = 1;
      const k = Math.max(0, s.userData.life / 2.2);
      s.scale.setScalar(0.2 + (1 - k) * 0.25);
      if (s.userData.life <= 0) { scene.remove(s); zz.splice(i, 1); }
    }
  }

  // ---------- What the app tells us ----------
  let lastRoom = -1;
  house = {
    setState(json) {
      const s = typeof json === 'string' ? JSON.parse(json) : json;
      if (s.walls) world.setWallColors(s.walls);
      asleepAll = !!s.asleep;
      sleepLine = s.sleepLine || '';
      if (s.room != null && s.room !== lastRoom) {
        focusOn(s.room, lastRoom < 0);
        lastRoom = s.room;
      }
      syncItems(s.items || []);
      syncChars(s.buddies || []);
    },
    say,
    focus(room) { focusOn(room); },
  };
  window.house = house;

  if (!window.Android) {
    // Plain browser: a demo house, so the scene can be checked without the phone.
    const all = Object.keys(ITEM_MODELS);
    const roomOf = { bed: 0, teddy: 0, lamp: 0, picture: 0, clock: 0, books: 0, guitar: 0, game: 0, unicorn: 0, chair: 1, plates: 1, pizza: 1, cake: 1, teapot: 1, watermelon: 1, candy: 1, cupcake: 1, candle: 1, sofa: 2, tv: 2, piano: 2, plant: 2, rainbow: 2, puzzle: 2, cat: 2, dog: 2, bathtub: 3, toilet: 3, mirror: 3, soap: 3, duck: 3, toothbrush: 3, lotion: 3, sponge: 3 };
    const R = rng(5);
    demoState = {
      room: Number(params.get('room') || 0),
      walls: ['#FFD1E3', '#FFF1DC', '#CFF5E1', '#CDEBFF', '#FFF1DC'],
      asleep: params.get('asleep') === '1',
      sleepLine: 'זזז... כולם ישנים. לחצי על מישהו כדי להעיר',
      items: all.filter((id) => params.get('items') !== 'none').map((id) => ({ id, room: roomOf[id] ?? 4, x: R() * 0.85, y: ITEM_META[id]?.wall ? 0.2 : 0.6 + R() * 0.25, inRoom: true })),
      buddies: (params.get('buddies') || 'boni,mika,pitzi,blocky,astro,wizard_g').split(',').map((id, i) => ({ id, room: i === 0 ? Number(params.get('room') || 0) : i % 5, main: i === 0 })),
    };
    house.setState(demoState);
    window.__debug = {
      project(id) {
        const rec = items.get(id);
        const c = chars.get(id);
        const o = rec ? rec.obj : c ? c.holder : null;
        if (!o) return null;
        const v = o.position.clone();
        v.y += 0.3;
        v.project(camera);
        return { x: (v.x * 0.5 + 0.5) * window.innerWidth, y: (-v.y * 0.5 + 0.5) * window.innerHeight };
      },
      item(id) { const r = items.get(id); return r && { x: r.x, z: r.z, rot: r.data.rot || 0, room: r.room }; },
    };
  }
  if (params.get('yaw')) { goal.yaw = cam.yaw = Number(params.get('yaw')); }
  if (params.get('pitch')) { goal.pitch = cam.pitch = Number(params.get('pitch')); }
  if (params.get('dist')) { goal.dist = cam.dist = Number(params.get('dist')); }
  placeCamera();
  bridge.onReady();
  tick();
}

function surfacesOf(room) {
  return SURFACE_LIST.filter((s) => s.room === room);
}
import { SURFACES as SURFACE_LIST } from './world.js';

function zTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 16;
  const x = c.getContext('2d');
  x.fillStyle = '#8E6CFF';
  [[3, 3, 10, 2], [9, 5, 2, 2], [7, 7, 2, 2], [5, 9, 2, 2], [3, 11, 10, 2]].forEach(([a, b, w, h]) => x.fillRect(a, b, w, h));
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export { CHAR_IDS };
