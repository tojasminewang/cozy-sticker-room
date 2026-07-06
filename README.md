# 🧸 Cozy Sticker Room

A cozy vertical (9:16) sticker-decorating game. Drag stickers from the tray
into their spots in the room — bounce, sparkle, collect, relax.

**Zero dependencies.** Plain HTML/CSS/JS, all art is hand-drawn SVG, all
sounds are generated with WebAudio. No build step, nothing to install.

## Run it

```bash
node server.js        # → http://localhost:5250
```

(or serve the folder with any static server)

## Edit it

| Want to change… | Look in… |
|---|---|
| Sticker spots, names, coins, snap distance | `js/config.js` (everything is data) |
| Sticker & room artwork | `js/art.js` (each sticker = one SVG snippet) |
| Colors, fonts, animations, UI | `css/style.css` (palette at the top in `:root`) |
| Sounds | `js/audio.js` |
| Game logic (drag, screens, popup) | `js/app.js` |

### Add a new sticker to the bedroom
1. In `js/art.js`, copy a sticker entry (e.g. `lamp`) and draw your own —
   `sil` is the silhouette (used for the white sticker edge, the dashed spot,
   and the "???" mystery card), `body` is the detailed art.
2. In `js/config.js`, add one line to the bedroom's `stickers` array with the
   spot position (`x`,`y` in the room's 720×920 canvas), `scale`, and `z` order.
That's it — the tray, progress, sticker book and save all pick it up automatically.

### Open a new room
Copy the bedroom block in `js/config.js`, give it an `id`, `name`, `palette`
and stickers, and remove `locked: true`. The "Next Room" button and the room
list find it automatically.

## Handy console helpers (`window.__csr`)

```js
__csr.place('bunny')   // place a sticker programmatically
__csr.goto('rooms')    // jump between screens: start / rooms / game / collection
__csr.save()           // peek at the save data
__csr.wipe()           // clear save + reload
```

Save data lives in `localStorage` under `cozy-sticker-room-v1`.
