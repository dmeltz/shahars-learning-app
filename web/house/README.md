# The 3D block house

The house screen in the app is a small web page (three.js) shown in a WebView.
Source is in `src/`; the app uses the built file in `app/src/main/assets/house/`.

- `npm install && npm run build` rebuilds `app/src/main/assets/house/house.js`.
- `node thumbs.mjs` (needs Playwright + Chromium) re-renders the shop and buddy pictures
  into `app/src/main/res/drawable-nodpi/vox_*.png` from the same models.
- Open `app/src/main/assets/house/index.html` in a browser to try the house with demo data
  (`?room=2`, `?asleep=1`, `?buddies=boni,kubi`).

All models are our own designs: items in `src/items.js`, characters in `src/chars.js`, rooms in `src/world.js`.
