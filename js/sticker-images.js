/* ============================================================
   AI-generated raster stickers (experiment — Cozy Bedroom).
   Each PNG already has its own flat art + white die-cut border
   baked in. We overlay them onto the existing sticker objects:
   the image becomes the visible art, while the dashed target
   spot + "???" book card fall back to a rounded-rect silhouette.
   Art ids listed here are used only by the Cozy Bedroom, so
   overriding them is safe. Delete an entry to revert that
   sticker to its hand-drawn vector version.
   ============================================================ */
(function () {
  const A = window.CSR && window.CSR.art;
  if (!A || !A.stickers) return;

  const roundRect = (w, h, r) => `<rect x="0" y="0" width="${w}" height="${h}" rx="${r}"/>`;

  // iw/ih = the cropped PNG's pixel dimensions (aspect ratio).
  const defs = {
    bunny:       { img: 'assets/stickers/bedroom/bunny.png',       iw: 251, ih: 460 },
    rug:         { img: 'assets/stickers/bedroom/rug.png',         iw: 460, ih: 356 },
    lamp:        { img: 'assets/stickers/bedroom/lamp.png',        iw: 342, ih: 460 },
    bookshelf:   { img: 'assets/stickers/bedroom/bookshelf.png',   iw: 320, ih: 460 },
    plant:       { img: 'assets/stickers/bedroom/plant.png',       iw: 283, ih: 460 },
    poster:      { img: 'assets/stickers/bedroom/poster.png',      iw: 373, ih: 460 },
    moonlight:   { img: 'assets/stickers/bedroom/moonlight.png',   iw: 421, ih: 460 },
    slippers:    { img: 'assets/stickers/bedroom/slippers.png',    iw: 460, ih: 402 },
    fairyjar:    { img: 'assets/stickers/bedroom/fairyjar.png',    iw: 268, ih: 460 },
    dreambanner: { img: 'assets/stickers/bedroom/dreambanner.png', iw: 460, ih: 200 },
  };

  Object.entries(defs).forEach(([id, d]) => {
    const st = A.stickers[id];
    if (!st) return;
    // Keep the same on-screen footprint: match the old sticker's largest
    // dimension, preserving the image's aspect ratio, so the existing
    // config x/y/scale still land the sticker correctly.
    const oldMax = Math.max(st.w, st.h);
    const s = oldMax / Math.max(d.iw, d.ih);
    const w = Math.round(d.iw * s);
    const h = Math.round(d.ih * s);
    st.img = d.img;
    st.iw = d.iw;
    st.ih = d.ih;
    st.w = w;
    st.h = h;
    st.sil = roundRect(w, h, Math.round(Math.min(w, h) * 0.16));
  });
})();
