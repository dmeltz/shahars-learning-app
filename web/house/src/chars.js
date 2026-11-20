import * as THREE from 'three';
import { boxesGroup, hashStr } from './voxel.js';

// Our own chunky block characters: a big head, a short body. Sizes in pixels (16 = one floor tile).

const SKIN = { fair: '#FCE0C8', light: '#F6D2B0', tan: '#E3B58C', brown: '#C68B59', dark: '#8D5A3B' };
const INK = '#2B1E3A', WHITE = '#FFFFFF', YEL = '#FFD43B', GOLD = '#E8B800';
const BLUSH = 'rgba(255,120,160,0.55)';

// 3x5 pixel digits for shirt numbers.
const DIGITS = { 1: ['010', '110', '010', '010', '111'], 0: ['111', '101', '101', '101', '111'], 7: ['111', '001', '010', '010', '010'] };
function number(str, color, z, y0 = 1.5, px = 0.75) {
  const out = [];
  const w = str.length * 4 * px - px;
  str.split('').forEach((ch, i) => {
    DIGITS[ch].forEach((row, r) => {
      row.split('').forEach((c, col) => {
        if (c === '1') out.push([-w / 2 + (i * 4 + col + 0.5) * px, y0 + (4 - r) * px, z, px, px, 0.3, color]);
      });
    });
  });
  return out;
}
const star = (x, y, z, color = YEL, s = 1) => [
  [x, y, z, 1 * s, 3 * s, 0.3, color], [x, y + 1 * s, z, 3 * s, 1 * s, 0.3, color],
];

/** Hair styles: the boxes around the head (head is 10x10x10, from y=0 to 10, facing +z). */
function hairBoxes(style, c) {
  if (style === 'none') return [];
  const out = [
    [0, 8.5, 0, 10.8, 2.6, 10.8, c],
    [0, 2.5, -5.2, 10.8, 7, 1, c],
    [5.2, 4.5, -0.5, 0.8, 5, 9.6, c], [-5.2, 4.5, -0.5, 0.8, 5, 9.6, c],
  ];
  if (style === 'long' || style === 'longbow') {
    out.push([0, -6, -5.6, 11, 9, 1.8, c], [5.4, -2, -1, 1.2, 7, 8, c], [-5.4, -2, -1, 1.2, 7, 8, c]);
  }
  if (style === 'buns') out.push([4.6, 9, -1, 4, 4, 4, c], [-4.6, 9, -1, 4, 4, 4, c]);
  if (style === 'bun') out.push([0, 10.6, -1.5, 4.5, 3.5, 4.5, c]);
  if (style === 'ponytail') out.push([0, 4, -6.5, 3.2, 5, 2.6, c], [0, -1, -6.8, 2.6, 5, 2.2, c]);
  if (style === 'pigtails') out.push([6.4, 2.5, -1.5, 2.6, 5, 2.6, c], [-6.4, 2.5, -1.5, 2.6, 5, 2.6, c]);
  return out;
}

function drawFace(ctx, s, mood) {
  const px = (x, y, w = 1, h = 1) => ctx.fillRect(x, y, w, h);
  ctx.clearRect(0, 0, 20, 20);
  ctx.fillStyle = s.faceColor || s.skin;
  px(0, 0, 20, 20);
  if (s.mask) {
    ctx.fillStyle = s.mask;
    px(0, 0, 20, 7); px(0, 14, 20, 6);
  }
  // Fringe, drawn on the face itself.
  if (s.fringe !== false && s.hair && s.style !== 'none') {
    ctx.fillStyle = s.hair;
    px(0, 0, 20, 3);
    if (s.fringe === 'side') { px(0, 3, 9, 2); px(0, 5, 4, 1); } else { px(0, 3, 6, 1); px(12, 3, 8, 2); }
    if (s.style === 'long' || s.style === 'longbow') { px(0, 0, 2, 13); px(18, 0, 2, 13); }
  }
  const eye = s.eye || INK;
  ctx.fillStyle = eye;
  if (mood === 'sleepy') {
    px(4, 11, 4, 1); px(12, 11, 4, 1);
  } else if (mood === 'cheer') {
    px(4, 11); px(5, 10); px(6, 10); px(7, 11);
    px(12, 11); px(13, 10); px(14, 10); px(15, 11);
  } else {
    px(5, 9, 2, 3); px(13, 9, 2, 3);
    ctx.fillStyle = WHITE;
    px(5, 9); px(13, 9);
  }
  if (s.glasses) {
    ctx.fillStyle = s.glasses;
    px(3, 8, 6, 1); px(3, 12, 6, 1); px(3, 8, 1, 5); px(8, 8, 1, 5);
    px(11, 8, 6, 1); px(11, 12, 6, 1); px(11, 8, 1, 5); px(16, 8, 1, 5);
    px(9, 9, 2, 1);
  }
  if (!s.mask) {
    ctx.fillStyle = BLUSH;
    px(2, 13, 3, 2); px(15, 13, 3, 2);
  }
  if (s.animal) {
    ctx.fillStyle = s.nose || '#FF7AA2';
    px(9, 12, 2, 1);
  }
  if (s.whiskers) {
    ctx.fillStyle = INK;
    px(0, 13, 4, 1); px(16, 13, 4, 1); px(1, 15, 3, 1); px(16, 15, 3, 1);
  }
  if (s.mask) return;
  if (mood === 'cheer') {
    ctx.fillStyle = '#9B2335'; px(8, 14, 4, 3);
    ctx.fillStyle = '#FF8FB1'; px(9, 16, 2, 1);
  } else if (mood === 'sleepy') {
    ctx.fillStyle = '#9B2335'; px(9, 15, 2, 1);
  } else {
    ctx.fillStyle = '#9B2335'; px(8, 15, 4, 1); px(7, 14); px(12, 14);
  }
  if (s.faceExtra) s.faceExtra(ctx, px);
}

const A = (o) => o; // tiny helper for readable specs

/** Everything that changes from one character to another. */
const SPECS = {
  boni: A({ animal: 'bunny', fur: '#D9CCFF', light: '#F1ECFF', skin: '#E6DCFF', extra: (P) => {
    P.body.push([0, 6.5, 0, 9.8, 1.8, 5.8, '#2EC27E'], [2.5, 2.5, 2.9, 2.2, 4, 0.8, '#2EC27E']);
    P.head.push([3.6, 9.5, 2.5, 3, 1.5, 0.6, '#FF8FB1']);
  } }),
  bobi: A({ animal: 'bunny', fur: '#A9C4F5', light: '#E2ECFF', skin: '#B9D0F8', extra: (P) => {
    P.head.push([0, 8.8, 0, 10.8, 2.4, 10.8, '#FF5A5F'], [0, 8.8, 6.5, 9, 0.8, 4, '#FF5A5F'], [0, 11.2, 0, 1.4, 1, 1.4, YEL]);
    P.body.push([0, 7, 0, 9.6, 1.2, 5.6, '#2EC27E']);
  } }),
  mika: A({ skin: SKIN.light, hair: '#6B3E26', style: 'buns', shirt: '#8E6CFF', pants: '#4A3A8C', shoes: '#FF5C9A', extra: (P) => {
    P.body.push([0, 6, 2.6, 3, 1, 0.3, WHITE], [-1, 5, 2.6, 1, 1, 0.3, WHITE], [1, 5, 2.6, 1, 1, 0.3, WHITE]);
    P.head.push(...star(3.5, 8.5, 5.5));
  } }),
  noam: A({ skin: SKIN.light, hair: '#6B3E26', style: 'short', shirt: '#2EC27E', pants: '#3A3F6B', shoes: '#FF5A5F', fringe: false, extra: (P) => {
    P.head.push([0, 8.5, 0, 10.8, 2.8, 10.8, '#3FA9F5'], [0, 8.5, 6.5, 9, 0.8, 4, '#3FA9F5']);
    P.body.push(...star(0, 3, 2.6));
  } }),
  pitzi: A({ animal: 'cat', fur: '#FFB0CF', light: '#FFE3EE', whiskers: true }),
  shoko: A({ animal: 'cat', fur: '#8DB8F0', light: '#E2EEFF', whiskers: true, extra: (P) => {
    P.body.push([0, 7, 0, 9.6, 1.2, 5.6, '#FF5A5F']);
  } }),
  chip: A({ animal: 'dog', fur: '#C98A55', light: '#F3D9B8', ears: '#7A4A2A', extra: (P) => {
    P.body.push([0, 7, 0, 9.6, 1.2, 5.6, '#3FA9F5'], [0, 5.8, 2.9, 1.4, 1.4, 0.6, YEL]);
  } }),
  lola: A({ animal: 'dog', fur: '#F3E2C3', light: '#FFF6E8', ears: '#D9A86A', extra: (P) => {
    P.body.push([0, 7, 0, 9.6, 1.2, 5.6, '#FF5C9A']);
    P.head.push([0, 10, 0, 2, 1.5, 1.5, '#FF5C9A'], [-1.8, 10, 0, 1.8, 2, 1.5, '#FF5C9A'], [1.8, 10, 0, 1.8, 2, 1.5, '#FF5C9A']);
  } }),
  kangi: A({ animal: 'kangaroo', fur: '#D4A373', light: '#F1D6B0', gloves: '#FF5A5F' }),
  roni: A({ animal: 'kangaroo', fur: '#C99366', light: '#EED2AE', gloves: '#9B7BFF', baby: true, extra: (P) => {
    P.head.push([-1.8, 10, 0, 1.8, 2, 1.5, '#9B7BFF'], [1.8, 10, 0, 1.8, 2, 1.5, '#9B7BFF'], [0, 10, 0, 1.6, 1.6, 1.6, '#9B7BFF']);
  } }),
  blocky: A({ skin: SKIN.light, hair: '#3A2A4D', style: 'long', shirt: '#FF5C9A', pants: '#3A2A4D', shoes: '#8E6CFF', extra: (P) => {
    P.body.push(...star(0, 3, 2.6));
    P.head.push([4, 8.5, 4, 2.4, 2.4, 2.4, '#8E6CFF']);
  } }),
  kubi: A({ skin: SKIN.light, hair: '#8B5A2B', style: 'short', shirt: '#2EC27E', pants: '#2F4A9C', shoes: '#2B1E3A', extra: (P) => {
    P.body.push([0, 3, 2.6, 2.5, 2.5, 0.3, YEL]);
  } }),
  astro: A({ skin: SKIN.fair, hair: '#6B3E26', style: 'short', shirt: '#F4F4F8', pants: '#F4F4F8', shoes: '#8E6CFF', helmet: '#FFFFFF', extra: (P) => astronaut(P, '#FF5A5F') }),
  astro_g: A({ skin: SKIN.fair, hair: '#C0452B', style: 'long', shirt: '#F4F4F8', pants: '#F4F4F8', shoes: '#FF5C9A', helmet: '#FFFFFF', extra: (P) => astronaut(P, '#8E6CFF') }),
  goli: A({ skin: SKIN.light, hair: '#2B1E14', style: 'short', shirt: '#2EC27E', pants: WHITE, shoes: INK, extra: (P) => {
    P.body.push(...number('10', WHITE, 2.65));
    P.root.push(...soccerBall(6, 0, 4));
  } }),
  goli_g: A({ skin: SKIN.light, hair: '#6B3E26', style: 'pigtails', shirt: '#8E6CFF', pants: WHITE, shoes: INK, extra: (P) => {
    P.body.push(...number('10', WHITE, 2.65));
    P.head.push([6.4, 7.5, -1.5, 3, 1.5, 3, '#FF5C9A'], [-6.4, 7.5, -1.5, 3, 1.5, 3, '#FF5C9A']);
    P.root.push(...soccerBall(6, 0, 4));
  } }),
  sali: A({ skin: SKIN.brown, hair: '#2B1E14', style: 'short', shirt: '#FF9F43', pants: '#FF9F43', shoes: WHITE, extra: (P) => {
    P.head.push([0, 6.6, 0, 10.6, 1.4, 10.6, '#FF5A5F']);
    P.body.push(...number('7', WHITE, 2.65));
    P.armR.push(...basketball(0, -13.5, 0));
  } }),
  sali_g: A({ skin: SKIN.dark, hair: '#1E140E', style: 'bun', shirt: '#3FA9F5', pants: '#3FA9F5', shoes: WHITE, extra: (P) => {
    P.head.push([0, 6.6, 0, 10.6, 1.4, 10.6, '#2EC27E']);
    P.body.push(...number('7', WHITE, 2.65));
    P.armR.push(...basketball(0, -13.5, 0));
  } }),
  ginga: A({ skin: SKIN.tan, hair: '#2B1E14', style: 'short', shirt: '#3FA9F5', pants: '#F4F4F8', shoes: SKIN.tan, extra: (P) => {
    P.head.push([0, 6.6, 0, 10.6, 1.4, 10.6, '#2EC27E'], [-4, 6, -6, 1.5, 1.5, 2, '#2EC27E'], [-4.6, 4, -6.4, 1, 2.5, 1, '#2EC27E']);
    P.body.push([0, 0, 0, 9.4, 1.2, 5.4, YEL], [2, -2, 2.8, 1, 2.5, 0.6, YEL]);
  } }),
  ginga_g: A({ skin: SKIN.tan, hair: '#2B1E14', style: 'ponytail', shirt: YEL, pants: '#F4F4F8', shoes: SKIN.tan, extra: (P) => {
    P.head.push([0, 6.6, 0, 10.6, 1.4, 10.6, '#FF9F43']);
    P.body.push([0, 0, 0, 9.4, 1.2, 5.4, '#FF9F43'], [2, -2, 2.8, 1, 2.5, 0.6, '#FF9F43']);
  } }),
  turbo: A({ skin: SKIN.light, hair: '#C0452B', style: 'none', shirt: '#2E2440', pants: '#3A3F6B', shoes: INK, fringe: false, extra: (P) => racer(P, '#FF5A5F') }),
  turbo_g: A({ skin: SKIN.light, hair: '#FF5C9A', style: 'long', shirt: '#8E6CFF', pants: '#3A2A4D', shoes: INK, extra: (P) => racer(P, '#FF5C9A') }),
  ninja: A({ skin: SKIN.light, style: 'none', shirt: '#2F7BD6', pants: '#2F7BD6', shoes: '#1E4F8C', faceColor: SKIN.light, mask: '#2F7BD6', headColor: '#2F7BD6', extra: (P) => ninja(P, YEL) }),
  ninja_g: A({ skin: SKIN.light, style: 'none', shirt: '#D63B3B', pants: '#D63B3B', shoes: '#8C1E1E', faceColor: SKIN.light, mask: '#D63B3B', headColor: '#D63B3B', extra: (P) => ninja(P, WHITE) }),
  wizard_b: A({ skin: SKIN.light, hair: '#8B5A2B', style: 'short', shirt: '#2F7BD6', pants: '#2F7BD6', shoes: INK, extra: (P) => wizard(P, '#2F7BD6') }),
  wizard_g: A({ skin: SKIN.light, hair: '#F2C14E', style: 'long', shirt: '#8E6CFF', pants: '#8E6CFF', shoes: INK, extra: (P) => wizard(P, '#8E6CFF') }),
  dancer_b: A({ skin: SKIN.brown, hair: '#2B1E14', style: 'short', shirt: '#2B2B35', pants: '#3FA9F5', shoes: WHITE, fringe: false, extra: (P) => {
    P.head.push([0, 8.5, 0, 10.8, 2.8, 10.8, '#FF5A5F'], [0, 8.5, -6.5, 9, 0.8, 4, '#FF5A5F']);
    for (let i = 0; i < 5; i++) P.body.push([-3 + i * 1.5, 1.5 + i * 1.2, 2.65, 1.6, 1.2, 0.3, YEL]);
  } }),
  dancer_g: A({ skin: SKIN.tan, hair: '#2B1E14', style: 'bun', shirt: '#FF9EC4', pants: '#FFD1E3', shoes: '#FF5C9A', extra: (P) => {
    P.body.push([0, -1, 0, 13, 2.4, 9, '#FFB8D4'], [0, 0.5, 0, 11.5, 1.2, 8, '#FFD1E3']);
    P.head.push([0, 14, -1.5, 3, 1.6, 1.6, '#FF5C9A'], [-1.8, 13.6, -1.5, 1.6, 2.4, 1.6, '#FF5C9A'], [1.8, 13.6, -1.5, 1.6, 2.4, 1.6, '#FF5C9A']);
  } }),
  builder_b: A({ skin: SKIN.light, hair: '#8B5A2B', style: 'short', shirt: '#FF9F43', pants: '#2F4A9C', shoes: '#6B4426', fringe: false, extra: (P) => builder(P) }),
  builder_g: A({ skin: SKIN.light, hair: '#8B5A2B', style: 'long', shirt: '#FF9F43', pants: '#2F4A9C', shoes: '#6B4426', fringe: false, extra: (P) => builder(P) }),
  teacher_b: A({ skin: SKIN.light, hair: '#6B3E26', style: 'short', shirt: '#9C9AC0', pants: '#3A3F6B', shoes: INK, glasses: INK, extra: (P) => {
    P.body.push([0, 4, 2.6, 1.2, 4, 0.3, '#3FA9F5']);
    P.armR.push([0, -12, 1.5, 4.5, 5.5, 0.8, '#FF5A5F'], [0, -11.5, 2, 3.5, 4.5, 0.3, WHITE]);
  } }),
  teacher_g: A({ skin: SKIN.light, hair: '#8B5A2B', style: 'long', shirt: '#2EC27E', pants: '#3A3F6B', shoes: INK, glasses: INK, extra: (P) => {
    P.body.push([0, 6, 2.6, 3, 1.2, 0.3, WHITE]);
    P.armR.push([0, -12, 1.5, 4.5, 5.5, 0.8, '#FF5A5F'], [0, -11.5, 2, 3.5, 4.5, 0.3, WHITE]);
  } }),
  police_b: A({ skin: SKIN.light, hair: '#2B1E14', style: 'short', shirt: '#2F5DA8', pants: '#24325E', shoes: INK, fringe: false, extra: (P) => police(P) }),
  police_g: A({ skin: SKIN.brown, hair: '#2B1E14', style: 'long', shirt: '#2F5DA8', pants: '#24325E', shoes: INK, fringe: false, extra: (P) => police(P) }),
  fire_b: A({ skin: SKIN.light, hair: '#6B3E26', style: 'short', shirt: '#2B2B35', pants: '#2B2B35', shoes: INK, fringe: false, extra: (P) => fire(P) }),
  fire_g: A({ skin: SKIN.light, hair: '#C0452B', style: 'long', shirt: '#2B2B35', pants: '#2B2B35', shoes: INK, fringe: false, extra: (P) => fire(P) }),
  manager_b: A({ skin: SKIN.tan, hair: '#2B1E14', style: 'short', shirt: '#4A4E6B', pants: '#3A3D55', shoes: INK, extra: (P) => suit(P) }),
  manager_g: A({ skin: SKIN.tan, hair: '#2B1E14', style: 'long', shirt: '#4A4E6B', pants: '#3A3D55', shoes: INK, extra: (P) => suit(P) }),
  pilot_b: A({ skin: SKIN.light, hair: '#2B1E14', style: 'short', shirt: '#1F3A6B', pants: '#1F3A6B', shoes: INK, fringe: false, extra: (P) => pilot(P) }),
  pilot_g: A({ skin: SKIN.light, hair: '#F2C14E', style: 'long', shirt: '#1F3A6B', pants: '#1F3A6B', shoes: INK, fringe: false, extra: (P) => pilot(P) }),
  soldier_b: A({ skin: SKIN.light, hair: '#2B1E14', style: 'short', shirt: '#6B7F3A', pants: '#5C6E32', shoes: '#3B2A1A', fringe: false, extra: (P) => soldier(P) }),
  soldier_g: A({ skin: SKIN.tan, hair: '#2B1E14', style: 'long', shirt: '#6B7F3A', pants: '#5C6E32', shoes: '#3B2A1A', fringe: false, extra: (P) => soldier(P) }),
};

function soccerBall(x, y, z) {
  return [[x, y, z, 4.4, 4.4, 4.4, WHITE], [x, y + 1.4, z + 2.25, 1.6, 1.6, 0.2, INK], [x + 2.25, y + 1.4, z, 0.2, 1.6, 1.6, INK], [x, y + 4.45, z, 1.6, 0.2, 1.6, INK]];
}
function basketball(x, y, z) {
  return [[x, y, z, 5, 5, 5, '#E8762B'], [x, y, z, 5.1, 0.4, 5.1, INK], [x, y, z, 0.4, 5.1, 5.1, INK]];
}
function astronaut(P, belt) {
  P.head.push(
    [0, 10, 0, 12.4, 1.6, 12.4, WHITE], [0, -0.6, -6, 12.4, 10.6, 1, WHITE],
    [6, -0.6, 0, 1, 10.6, 12.4, WHITE], [-6, -0.6, 0, 1, 10.6, 12.4, WHITE], [0, -0.6, 6, 12.4, 1, 1, WHITE],
    [0, 0.4, 6, 10.8, 9.6, 0.6, '#CDEBFF', 'glass'],
    [3, 11.6, 0, 0.6, 3, 0.6, '#C0C7D1'], [3, 14.6, 0, 1.6, 1.6, 1.6, '#FF5A5F'],
  );
  P.body.push([0, 0.5, 0, 9.4, 1.2, 5.4, belt], [0, 3.5, 2.6, 3, 2.6, 0.3, '#3FA9F5'], ...star(0, 3.8, 2.8, YEL, 0.6));
  P.body.push([0, 1, -3.3, 7, 6, 2, '#E0E0EA']);
}
function racer(P, c) {
  P.head.push(
    [0, 9, 0, 11.6, 2.6, 11.6, c], [0, 0, -5.8, 11.6, 11, 1.2, c], [5.8, 0, -0.5, 1.2, 11, 10.6, c], [-5.8, 0, -0.5, 1.2, 11, 10.6, c],
    [0, 6.4, 5.9, 9.6, 2, 0.6, '#BDE7FF'], [5.9, 5, 2, 0.4, 3, 1, YEL], [5.9, 3, 1, 0.4, 3, 1, YEL],
  );
  P.body.push([-2, 0, 2.6, 1, 8, 0.3, c], [2, 0, 2.6, 1, 8, 0.3, c]);
}
function ninja(P, band) {
  P.head.push([0, 7, 0, 10.6, 1.4, 10.6, band], [0, 6.5, -5.8, 2, 2, 1, band], [1, 4.5, -6.3, 1, 3, 0.6, band], [-1, 5, -6.3, 1, 2.5, 0.6, band]);
  P.body.push([0, 0, 0, 9.4, 1.2, 5.4, band], [0, 2, 2.6, 7, 1, 0.3, '#1B1530']);
  P.body.push([3, 2, -3, 0.8, 9, 0.8, '#C0C7D1']);
}
function wizard(P, c) {
  P.head.push(
    [0, 9.5, 0, 13, 1, 13, c], [0, 10.5, 0, 9, 3, 9, c], [0, 13.5, -0.3, 6.5, 3, 6.5, c], [0, 16.5, -0.6, 4, 3, 4, c], [0, 19.5, -0.9, 2, 2, 2, c],
    ...star(0, 11, 4.6),
  );
  P.body.push([0, -5, 0, 10, 5.2, 6, c], ...star(-2, 4, 2.6, YEL, 0.6), ...star(2, 1, 2.6, YEL, 0.6), ...star(-1, -3, 3.1, YEL, 0.6));
  P.armR.push([0, -15, 1.5, 0.8, 7, 0.8, '#8A5634'], ...star(0, -9, 1.5, YEL, 0.7));
}
function builder(P) {
  P.head.push([0, 8.5, 0, 11.2, 3.2, 11.2, YEL], [0, 8.5, 0.6, 12.4, 0.8, 12.4, YEL], [0, 11.7, 0, 2, 0.8, 9, '#F5C518']);
  P.body.push([0, 2, 2.6, 9.2, 1, 0.3, WHITE], [0, 5, 2.6, 9.2, 1, 0.3, WHITE]);
  P.armR.push([0, -15, 1, 0.9, 7, 0.9, '#8A5634'], [0, -9, 1, 3.5, 1.6, 1.6, '#9AA3AE']);
}
function police(P) {
  P.head.push([0, 8.5, 0, 11, 3, 11, '#24325E'], [0, 8.5, 6, 9, 0.8, 2.6, INK], [0, 9.5, 5.6, 1.6, 1.6, 0.4, YEL]);
  P.body.push([0, 0, 0, 9.4, 1.2, 5.4, INK], [-2.4, 5, 2.6, 1.4, 1.4, 0.3, YEL], ...star(2, 4.5, 2.6, YEL, 0.5));
}
function fire(P) {
  P.head.push([0, 8.5, 0, 11.4, 3.2, 11.4, '#E8473C'], [0, 8.5, -0.5, 13.4, 0.9, 13.4, '#E8473C'], [0, 9, 5.8, 2.6, 2.4, 0.4, YEL]);
  P.body.push([0, 1.5, 0, 9.4, 1, 5.4, YEL], [0, 4.5, 0, 9.4, 1, 5.4, YEL]);
  P.armL.push([0, -4, 0, 3.4, 1, 3.6, YEL]); P.armR.push([0, -4, 0, 3.4, 1, 3.6, YEL]);
  P.legL.push([0, -3.5, 0, 4, 0.8, 4.6, YEL]); P.legR.push([0, -3.5, 0, 4, 0.8, 4.6, YEL]);
}
function suit(P) {
  P.body.push([0, 4, 2.55, 3, 4, 0.3, WHITE], [0, 3, 2.7, 1, 4.5, 0.3, '#E8473C'], [0, 7.2, 2.7, 1.6, 0.8, 0.3, '#E8473C']);
  P.armR.push([0, -14, 0, 2, 5, 6, '#8A5634'], [0, -9, 0, 1, 1.2, 2.4, '#5A3A22']);
}
function pilot(P) {
  P.head.push([0, 8.5, 0, 11, 3, 11, WHITE], [0, 8.5, 6, 9, 0.8, 2.6, INK], [0, 8.4, 0, 11.1, 0.8, 11.1, INK], [0, 9.5, 5.6, 2.4, 1.4, 0.4, GOLD]);
  P.body.push([0, 3, 2.6, 1, 4, 0.3, GOLD], [-2.4, 5.5, 2.6, 2, 0.8, 0.3, GOLD]);
  P.armL.push([0, -6, 0, 3.4, 0.8, 3.6, GOLD]); P.armR.push([0, -6, 0, 3.4, 0.8, 3.6, GOLD]);
}
function soldier(P) {
  P.head.push([0, 8.5, -0.5, 11, 2.2, 11, '#3E7B32'], [1.2, 10.3, -0.3, 9, 1.4, 9, '#3E7B32'], [-3, 9.6, 5.1, 1.4, 1.4, 0.4, YEL]);
  P.body.push([-2.3, 4, 2.6, 2.6, 2, 0.3, '#5C6E32'], [2.3, 4, 2.6, 2.6, 2, 0.3, '#5C6E32'], [0, 0, 0, 9.4, 1.2, 5.4, '#3B2A1A']);
}

function animalParts(s, P) {
  const fur = s.fur, light = s.light;
  if (s.animal === 'bunny') {
    P.head.push([2.4, 10, 0, 2.4, 8, 1.6, fur], [-2.4, 10, 0, 2.4, 8, 1.6, fur], [2.4, 11, 0.85, 1.2, 6, 0.2, '#FFB0CF'], [-2.4, 11, 0.85, 1.2, 6, 0.2, '#FFB0CF']);
    P.head.push([0, 1, 5.3, 4, 2.6, 0.8, light]);
    P.body.push([0, -3, -3, 3.4, 3, 2, WHITE]);
  } else if (s.animal === 'cat') {
    P.head.push([3.2, 10, 0, 3, 2.4, 2, fur], [-3.2, 10, 0, 3, 2.4, 2, fur], [3.2, 12.4, 0, 1.4, 1.2, 1.6, fur], [-3.2, 12.4, 0, 1.4, 1.2, 1.6, fur]);
    P.head.push([3.2, 10.3, 1.05, 1.4, 1.4, 0.2, '#FF8FB1'], [-3.2, 10.3, 1.05, 1.4, 1.4, 0.2, '#FF8FB1']);
    P.body.push([0, 0, -3.5, 1.8, 1.8, 3, fur], [0, 0, -5.2, 1.8, 9, 1.8, fur], [0, 9, -5.2, 1.8, 1.8, 1.8, light]);
  } else if (s.animal === 'dog') {
    P.head.push([5.6, 1.5, 0.5, 1.4, 8, 4.5, s.ears], [-5.6, 1.5, 0.5, 1.4, 8, 4.5, s.ears]);
    P.head.push([0, 0.5, 5.9, 5, 3.4, 1.8, light], [0, 3.2, 6.9, 2, 1, 0.4, INK]);
    P.head.push([2.5, 7.5, 5.1, 2.4, 2.4, 0.2, light]);
    P.body.push([0, 2, -3.5, 1.8, 1.8, 3, fur], [0, 3.5, -5, 1.8, 3, 1.8, fur]);
  } else if (s.animal === 'kangaroo') {
    P.head.push([2.6, 10, -0.5, 2.2, 6.5, 1.4, fur], [-2.6, 10, -0.5, 2.2, 6.5, 1.4, fur], [2.6, 11, 0.3, 1.1, 4.5, 0.2, '#F1B7A0'], [-2.6, 11, 0.3, 1.1, 4.5, 0.2, '#F1B7A0']);
    P.head.push([0, 0.5, 5.6, 5, 3.4, 1.4, light]);
    P.body.push([0, 0.3, 2.85, 6.5, 3.5, 0.8, light]);
    P.body.push([0, -7, -4.5, 3.4, 3.4, 4, fur], [0, -7, -8.5, 2.8, 2.4, 4.5, fur], [0, -7, -11.5, 2.2, 1.8, 2, fur]);
    if (s.baby) P.body.push([0, 2.5, 3.6, 3.4, 3.2, 2.6, fur], [-0.8, 4.2, 4.95, 0.6, 0.8, 0.2, INK], [0.8, 4.2, 4.95, 0.6, 0.8, 0.2, INK], [-1, 5.7, 3.6, 0.8, 1.4, 0.8, fur], [1, 5.7, 3.6, 0.8, 1.4, 0.8, fur]);
    P.armL.push([0, -9, 0, 3.4, 2.6, 3.4, s.gloves]); P.armR.push([0, -9, 0, 3.4, 2.6, 3.4, s.gloves]);
  }
  P.body.push([0, 0.5, 2.55, 6, 6, 0.3, light]);
}

export const CHAR_IDS = Object.keys(SPECS);

/**
 * Builds one character. Returns an object with the THREE group and a few handles for animation.
 * The character stands on y=0 and faces +z.
 */
export function makeCharacter(id, { shadows = true } = {}) {
  const s0 = SPECS[id] || SPECS.boni;
  const s = { ...s0 };
  if (s.animal) {
    s.skin = s.skin || s.fur;
    s.shirt = s.fur; s.pants = s.fur; s.shoes = s.light; s.hands = s.fur;
    s.faceColor = s.faceColor || s.fur;
    s.style = 'none';
  }
  const P = { head: [], body: [], armL: [], armR: [], legL: [], legR: [], root: [] };
  const sleeve = s.sleeve || s.shirt;
  P.head.push([0, 0, 0, 10, 10, 10, s.headColor || s.faceColor || s.skin]);
  P.head.push(...hairBoxes(s.style || 'short', s.hair));
  P.body.push([0, 0, 0, 9, 8, 5, s.shirt]);
  for (const [arm, side] of [[P.armL, 1], [P.armR, -1]]) {
    arm.push([0, -6, 0, 3, 6, 3.2, sleeve], [0, -8.5, 0, 2.8, 2.5, 2.8, s.hands || s.skin]);
  }
  for (const leg of [P.legL, P.legR]) {
    leg.push([0, -7, 0, 3.8, 7, 4, s.pants], [0, -7, 0.4, 4, 1.6, 4.8, s.shoes]);
  }
  if (s.animal) animalParts(s, P);
  if (s.extra) s.extra(P);

  const seed = hashStr(id);
  const mk = (boxes, i) => boxesGroup(boxes, { seed: seed + i, jitter: 0.035, shadows });
  const root = new THREE.Group();
  const scale = 1 / 16;
  const pivot = (boxes, x, y, z, i) => {
    const g = new THREE.Group();
    g.position.set(x * scale, y * scale, z * scale);
    g.add(mk(boxes, i));
    root.add(g);
    return g;
  };
  const legL = pivot(P.legL, 2.1, 7, 0, 1);
  const legR = pivot(P.legR, -2.1, 7, 0, 2);
  const body = pivot(P.body, 0, 7, 0, 3);
  const head = pivot(P.head, 0, 15, 0, 4);
  const armL = pivot(P.armL, 6, 14.5, 0, 5);
  const armR = pivot(P.armR, -6, 14.5, 0, 6);
  if (P.root.length) root.add(mk(P.root, 7));

  // The face is a tiny pixel picture on the front of the head.
  const canvas = document.createElement('canvas');
  canvas.width = 20; canvas.height = 20;
  const ctx = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.colorSpace = THREE.SRGBColorSpace;
  const face = new THREE.Mesh(new THREE.PlaneGeometry(10 * scale, 10 * scale), new THREE.MeshLambertMaterial({ map: tex }));
  face.position.set(0, 5 * scale, 5.02 * scale);
  head.add(face);

  let mood = '';
  const setMood = (m) => {
    if (m === mood) return;
    mood = m;
    drawFace(ctx, s, m);
    tex.needsUpdate = true;
  };
  setMood('happy');
  return { id, root, head, body, armL, armR, legL, legR, setMood, height: 25 * scale };
}

/** Moves the arms and legs: t is time in seconds, walking 0..1, cheer 0..1, sleepy 0..1. */
export function pose(c, t, { walking = 0, cheer = 0, sleepy = 0 }) {
  const swing = Math.sin(t * 9) * 0.7 * walking;
  c.legL.rotation.x = swing;
  c.legR.rotation.x = -swing;
  const up = cheer * (2.5 + Math.sin(t * 12) * 0.25);
  c.armL.rotation.x = -swing * 0.9;
  c.armR.rotation.x = swing * 0.9;
  c.armL.rotation.z = up;
  c.armR.rotation.z = -up;
  const bob = walking ? Math.abs(Math.sin(t * 9)) * 0.04 : 0;
  const hop = cheer ? Math.abs(Math.sin(t * 7)) * 0.25 * cheer : 0;
  c.body.position.y = 7 / 16 + bob;
  c.head.position.y = 15 / 16 + bob;
  c.armL.position.y = c.armR.position.y = 14.5 / 16 + bob;
  c.root.position.y = hop;
  c.head.rotation.z = sleepy * 0.14;
  c.head.rotation.x = sleepy * 0.1 + Math.sin(t * 2) * 0.03;
}
