// Renders the shop and buddy pictures from the same 3D models the house uses.
// Run after `npm run build`: node thumbs.mjs   (needs Playwright with Chromium)
import { createRequire } from 'module';
import { ITEM_MODELS } from './src/items.js';
import { CHAR_IDS } from './src/chars.js';
import path from 'path';
import { fileURLToPath } from 'url';

const { chromium } = createRequire(import.meta.url)('playwright');
const here = path.dirname(fileURLToPath(import.meta.url));
const page = 'file://' + path.join(here, '../../app/src/main/assets/house/index.html');
const out = path.join(here, '../../app/src/main/res/drawable-nodpi');
const SIZE = 256;

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await browser.newPage({ viewport: { width: SIZE, height: SIZE }, deviceScaleFactor: 1 });
p.on('pageerror', (e) => { console.error(e); process.exitCode = 1; });
async function shot(query, file) {
  await p.goto(`${page}?${query}`);
  await p.waitForFunction(() => window.__thumbDone);
  await p.screenshot({ path: path.join(out, file), omitBackground: true });
}
for (const id of Object.keys(ITEM_MODELS)) await shot(`thumb=item:${id}`, `vox_item_${id}.png`);
for (const id of CHAR_IDS) for (const mood of ['happy', 'cheer', 'sleepy']) await shot(`thumb=char:${id}&mood=${mood}`, `vox_${id}_${mood}.png`);
await browser.close();

// House template pictures for the "pick your house" screen: the whole empty house from above.
import { readFileSync } from 'fs';
const layouts = JSON.parse(readFileSync(path.join(here, '../../app/src/main/assets/house/layouts.json'), 'utf8')).layouts;
const b2 = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p2 = await b2.newPage({ viewport: { width: 400, height: 300 }, deviceScaleFactor: 1 });
p2.on('pageerror', (e) => { console.error(e); process.exitCode = 1; });
for (const l of layouts) {
  await p2.goto(`${page}?layout=${l.id}&items=none&buddies=boni&pitch=1.2&yaw=0.35`);
  await p2.addStyleTag({ content: '#buttons{display:none!important}' });
  await p2.waitForTimeout(800);
  await p2.evaluate(() => document.querySelector('#buttons button:nth-child(4)').click());
  await p2.waitForTimeout(300);
  await p2.evaluate(() => document.querySelector('#buttons button:nth-child(2)').click());
  await p2.waitForTimeout(2500);
  await p2.screenshot({ path: path.join(out, `vox_layout_${l.id}.png`) });
}
await b2.close();
