/* ============================================================
   COZY STICKER ROOM — rooms-plus.js
   Scene pack for rooms 4–13. Each scene draws the room's base
   art (720 × 920). Registered into CSR.art.scenes at the bottom.
   ============================================================ */

(() => {
  const A = CSR.art;
  const C = A.COCOA;
  const SW = 3.5;

  /* ---------- shared shell helpers ---------- */
  const defs = (p, clip = `<clipPath id="winClip"><rect x="0" y="0" width="220" height="190" rx="14"/></clipPath>`) => `
    <defs>
      <linearGradient id="wallG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${p.wallTop}"/><stop offset="1" stop-color="${p.wallBottom}"/>
      </linearGradient>
      <linearGradient id="floorG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${p.floorTop}"/><stop offset="1" stop-color="${p.floorBottom}"/>
      </linearGradient>
      <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#BEE3F8"/><stop offset="1" stop-color="#EAF7FF"/>
      </linearGradient>
      ${clip}
    </defs>`;

  const wallFloor = () => `
    <rect x="0" y="0" width="720" height="608" fill="url(#wallG)"/>
    <rect x="0" y="604" width="720" height="316" fill="url(#floorG)"/>`;

  const board = (fill = '#FFF4E4', stroke = '#EAC9A8') =>
    `<rect x="-6" y="596" width="732" height="15" rx="7.5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;

  const pool = (x = 210, y = 700, op = 0.12) =>
    `<ellipse cx="${x}" cy="${y}" rx="150" ry="42" fill="#FFFFFF" opacity="${op}"/>`;

  const dots = (pts, color = '#FFFFFF', op = 0.14) =>
    pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="${color}" opacity="${op}"/>`).join('');

  /* ---------- wallpaper helpers (each room gets its own print) ---------- */
  // staggered pattern grid across the wall; draw(x, y, row) returns markup
  const wp = (draw, { y0 = 150, rows = 4, dy = 108, x0 = 55, dx = 130, stag = 65, xMax = 690 } = {}) => {
    let s = '';
    for (let r = 0; r < rows; r++)
      for (let x = x0 + (r % 2 ? stag : 0); x <= xMax; x += dx) s += draw(x, y0 + r * dy, r);
    return s;
  };
  const vStripes = (c, op, w = 26, gap = 92) => {
    let s = '';
    for (let x = 28; x < 720; x += gap) s += `<rect x="${x}" y="0" width="${w}" height="604" fill="${c}" opacity="${op}"/>`;
    return s;
  };
  const hPlanks = (c, op, y0 = 128, dy = 96, y1 = 592) => {
    let s = '';
    for (let y = y0; y <= y1; y += dy) s += `<path d="M0 ${y} L720 ${y}" stroke="${c}" stroke-width="3" opacity="${op}"/>`;
    return s;
  };
  const floorPlanks = (c = '#C9A87E', op = 0.4) => {
    let s = '';
    [672, 752, 832].forEach((y) => { s += `<path d="M0 ${y} L720 ${y}" stroke="${c}" stroke-width="3" opacity="${op}"/>`; });
    [[180, 628], [440, 636], [640, 624], [90, 706], [330, 712], [560, 708], [230, 788], [490, 786], [130, 866], [400, 862], [630, 870]]
      .forEach(([x, y]) => { s += `<path d="M${x} ${y} v16" stroke="${c}" stroke-width="3" opacity="${op * 0.85}" stroke-linecap="round"/>`; });
    return s;
  };

  const floorDots = () => {
    let s = '';
    for (let r = 0; r < 3; r++) for (let i = 0; i < 8; i++)
      s += `<circle cx="${55 + i * 92 + (r % 2) * 46}" cy="${688 + r * 82}" r="6" fill="#FFFFFF" opacity="0.16"/>`;
    return s;
  };

  // window builder — size, pane grid, and dressing vary per room.
  // style: '' | 'drapes' | 'shade' | 'shutters' | 'scallop'
  const rectWindow = (x, y, o = {}) => {
    const { w = 220, h = 190, hill = '#CDEBD2', frame = '#FFF7EA', trim = '#E8C7A6',
            snow = false, style = '', tint = '#F9BFCE', tintDark = '#E9A9BB', grid = false } = o;
    const bars = grid
      ? `<rect x="${w / 3 - 5}" y="0" width="10" height="${h}" fill="${frame}" opacity="0.9"/>
         <rect x="${(2 * w) / 3 - 5}" y="0" width="10" height="${h}" fill="${frame}" opacity="0.9"/>
         <rect x="0" y="${h * 0.48 - 5}" width="${w}" height="10" fill="${frame}" opacity="0.9"/>`
      : `<rect x="${w / 2 - 5}" y="0" width="10" height="${h}" fill="${frame}" opacity="0.9"/>
         <rect x="0" y="${h * 0.45 - 5}" width="${w}" height="10" fill="${frame}" opacity="0.9"/>`;
    let dress = '';
    if (style === 'drapes') dress = `
      <path d="M-6 8 Q ${w * 0.15} ${h * 0.5} -4 ${h + 4} L -16 ${h + 4} L -16 8 Z" fill="${tint}" stroke="${tintDark}" stroke-width="3"/>
      <path d="M${w + 6} 8 Q ${w - w * 0.15} ${h * 0.5} ${w + 4} ${h + 4} L ${w + 16} ${h + 4} L ${w + 16} 8 Z" fill="${tint}" stroke="${tintDark}" stroke-width="3"/>
      <rect x="-16" y="-16" width="${w + 32}" height="28" rx="12" fill="${tint}" stroke="${tintDark}" stroke-width="3"/>`;
    if (style === 'shade') dress = `
      <rect x="4" y="0" width="${w - 8}" height="${h * 0.24}" rx="9" fill="${tint}" stroke="${tintDark}" stroke-width="3"/>
      <rect x="10" y="${h * 0.24 - 5}" width="${w - 20}" height="10" rx="5" fill="${tintDark}"/>
      <path d="M${w / 2} ${h * 0.24 + 5} v14" stroke="${tintDark}" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="${w / 2}" cy="${h * 0.24 + 25}" r="4.5" fill="${tint}" stroke="${tintDark}" stroke-width="2"/>`;
    if (style === 'shutters') dress = `
      <rect x="-38" y="-4" width="28" height="${h + 10}" rx="9" fill="${tint}" stroke="${C}" stroke-width="3"/>
      <path d="M-31 14 h14 M-31 ${h * 0.32} h14 M-31 ${h * 0.56} h14 M-31 ${h * 0.8} h14" stroke="${tintDark}" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="${w + 10}" y="-4" width="28" height="${h + 10}" rx="9" fill="${tint}" stroke="${C}" stroke-width="3"/>
      <path d="M${w + 17} 14 h14 M${w + 17} ${h * 0.32} h14 M${w + 17} ${h * 0.56} h14 M${w + 17} ${h * 0.8} h14" stroke="${tintDark}" stroke-width="2.5" stroke-linecap="round"/>`;
    if (style === 'scallop') {
      const scW = (w - 4) / 9;
      let sc = `M2 0 L${w - 2} 0 L${w - 2} 16 `;
      for (let i = 0; i < 9; i++) sc += `q ${-scW / 2} 13 ${-scW} 0 `;
      sc += 'Z';
      dress = `<path d="${sc}" fill="${tint}" opacity="0.96" stroke="${tintDark}" stroke-width="2.5" stroke-linejoin="round"/>`;
    }
    const drift = snow
      ? `<path d="M8 ${h - 4} q 18 -14 42 -4 q 17 -10 36 -1 q 15 -8 32 0 l 0 9 l -110 0 Z" fill="#FFFFFF" opacity="0.95"/>`
      : '';
    return `
    <g transform="translate(${x} ${y})">
      <rect x="-10" y="-10" width="${w + 20}" height="${h + 40}" rx="20" fill="${frame}" stroke="${trim}" stroke-width="3"/>
      <rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="url(#skyG)" stroke="${C}" stroke-width="3"/>
      <g clip-path="url(#winClip)">
        <circle cx="${w * 0.22}" cy="${h * 0.27}" r="${Math.min(w, h) * 0.14 + 5}" fill="#FFE29E" stroke="#F2C46F" stroke-width="3"/>
        <ellipse cx="${w * 0.66}" cy="${h * 0.3}" rx="${w * 0.14}" ry="12" fill="#FFFFFF" opacity="0.95"/>
        <ellipse cx="${w * 0.77}" cy="${h * 0.23}" rx="${w * 0.09}" ry="10" fill="#FFFFFF" opacity="0.95"/>
        <path d="M0 ${h} q ${w * 0.25} ${-h * 0.2} ${w * 0.5} ${-h * 0.14} q ${w * 0.28} ${h * 0.07} ${w * 0.5} ${-h * 0.05} l 0 ${h * 0.3} l ${-w} 0 Z" fill="${hill}" opacity="0.92"/>
        ${snow ? `<circle cx="${w * 0.2}" cy="${h * 0.5}" r="3" fill="#FFF"/><circle cx="${w * 0.45}" cy="${h * 0.36}" r="3" fill="#FFF"/>
          <circle cx="${w * 0.7}" cy="${h * 0.52}" r="3" fill="#FFF"/><circle cx="${w * 0.88}" cy="${h * 0.34}" r="3" fill="#FFF"/>` : ''}
        ${bars}
      </g>
      <rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="none" stroke="${C}" stroke-width="3"/>
      ${dress}
      <rect x="-20" y="${h - 2}" width="${w + 40}" height="20" rx="10" fill="${frame}" stroke="${trim}" stroke-width="3"/>
      ${drift}
    </g>`;
  };

  // string of fairy lights — kept high and shallow so it clears every window
  const lights = (cols = ['#FFD98E', '#F9BFCE', '#BEE8CD', '#BFE0F7']) => {
    const bulbs = [[64, 42], [170, 52], [286, 44], [400, 40], [512, 46], [636, 36]]
      .map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="12" fill="${cols[i % 4]}" opacity="0.26"/>
        <circle cx="${x}" cy="${y}" r="7" fill="${cols[i % 4]}" stroke="${C}" stroke-width="2.5"/>`).join('');
    return `<path d="M-10 30 Q 130 56 280 42 T 560 42 T 730 26"
      fill="none" stroke="#B98F7B" stroke-width="4" stroke-linecap="round"/>${bulbs}`;
  };

  // pennant bunting — high and shallow, clear of window frames
  const bunting = (cols) => {
    const flags = [[48, 38], [150, 48], [252, 48], [354, 42], [456, 40], [558, 40], [652, 34]]
      .map(([x, y], i) => `<path d="M${x} ${y} L${x + 30} ${y - 2} L${x + 17} ${y + 25} Z"
        fill="${cols[i % cols.length]}" stroke="${C}" stroke-width="2.5" stroke-linejoin="round"/>`).join('');
    return `<path d="M-10 32 Q 170 56 360 42 T 730 30" fill="none" stroke="#B98F7B" stroke-width="4" stroke-linecap="round"/>${flags}`;
  };

  /* ════════════════ 4. COZY CAFÉ ════════════════ */
  function cafeScene(p) {
    // diamond-tile floor
    let diam = '';
    for (let r = 0; r < 3; r++) for (let c2 = 0; c2 < 7; c2++) {
      const dxx = 44 + c2 * 100 + (r % 2) * 50, dyy = 632 + r * 88;
      diam += `<rect x="${dxx}" y="${dyy}" width="52" height="52" rx="10"
        transform="rotate(45 ${dxx + 26} ${dyy + 26})" fill="#FFFFFF" opacity="0.12"/>`;
    }
    // coffee-bean wallpaper
    const beans = wp((x, y, r) => `<g transform="translate(${x} ${y}) rotate(${r % 2 ? 28 : -24})" opacity="0.42">
      <ellipse rx="7" ry="10" fill="#B98F7B"/>
      <path d="M0 -8 Q2.5 0 0 8" stroke="#F3DFC2" stroke-width="2.2" fill="none"/></g>`,
      { y0: 148, rows: 3, dy: 104, dx: 122, stag: 61 });
    // warm wood wainscot behind the counter
    let boards = `<rect x="-6" y="462" width="732" height="142" fill="#D9B584" stroke="#C9A26E" stroke-width="2.5"/>`;
    for (let x = 36; x < 720; x += 62) boards += `<path d="M${x} 464 v138" stroke="#C9A26E" stroke-width="2.5" opacity="0.7"/>`;
    boards += `<rect x="-6" y="456" width="732" height="12" rx="6" fill="#E5C9A0" stroke="#C9A26E" stroke-width="2"/>`;
    return `${defs(p, `<clipPath id="winClip"><rect x="0" y="0" width="300" height="130" rx="14"/></clipPath>`)}${wallFloor()}${board()}${diam}
      ${beans}
      ${boards}
      ${pool()}
      ${lights()}
      <!-- striped awning over a wide storefront window -->
      <g transform="translate(40 102)">
        <path d="M-26 -16 L326 -16 L312 30 Q306 42 294 42 L6 42 Q-6 42 -12 30 Z" fill="#F9BFCE" stroke="${C}" stroke-width="3"/>
        <path d="M36 -16 L30 42 M96 -16 L92 42 M156 -16 L154 42 M216 -16 L216 42 M276 -16 L280 42" stroke="#E9A9BB" stroke-width="3"/>
        <path d="M-12 42 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0"
              fill="none" stroke="${C}" stroke-width="2.5"/>
      </g>
      ${rectWindow(40, 150, { w: 300, h: 130 })}
      <!-- counter -->
      <g transform="translate(28 538)">
        <ellipse cx="230" cy="214" rx="226" ry="14" fill="#B98F7B" opacity="0.14"/>
        <rect x="10" y="26" width="440" height="182" rx="16" fill="#EAD2AF" stroke="${C}" stroke-width="${SW}"/>
        <rect x="28" y="46" width="196" height="142" rx="12" fill="#F6E6C8" stroke="#D9B98C" stroke-width="2.5"/>
        <path d="M56 116 c-3.4 -4.1 -9.8 -1.5 -9.8 3.2 c0 4.1 5.7 6.6 9.8 10.2 c4.1 -3.6 9.8 -6.1 9.8 -10.2 c0 -4.7 -6.4 -7.3 -9.8 -3.2 Z" fill="#D98E68" opacity="0.6"/>
        <path d="M120 96 h60 M120 116 h44 M120 136 h52" stroke="#D9B98C" stroke-width="3" stroke-linecap="round"/>
        <rect x="240" y="46" width="196" height="142" rx="12" fill="#F6E6C8" stroke="#D9B98C" stroke-width="2.5"/>
        <path d="M268 96 h60 M268 116 h44 M268 136 h52" stroke="#D9B98C" stroke-width="3" stroke-linecap="round"/>
        <rect x="0" y="0" width="460" height="26" rx="13" fill="#D9A468" stroke="${C}" stroke-width="${SW}"/>
      </g>
      <!-- bistro table -->
      <g transform="translate(520 548)">
        <ellipse cx="90" cy="228" rx="96" ry="12" fill="#B98F7B" opacity="0.16"/>
        <rect x="82" y="20" width="16" height="190" rx="7" fill="#B98F7B" stroke="${C}" stroke-width="3"/>
        <path d="M40 218 Q52 206 90 206 Q128 206 140 218 Q146 226 134 228 L46 228 Q34 226 40 218 Z" fill="#B98F7B" stroke="${C}" stroke-width="3"/>
        <ellipse cx="90" cy="12" rx="88" ry="20" fill="#F6E6C8" stroke="${C}" stroke-width="${SW}"/>
        <ellipse cx="90" cy="8" rx="70" ry="13" fill="#FBF1DC"/>
      </g>
      <!-- floating shelf with bean jars -->
      <rect x="480" y="132" width="200" height="12" rx="6" fill="#B98F7B" stroke="${C}" stroke-width="2.5"/>
      <rect x="500" y="94" width="28" height="38" rx="7" fill="#C5E8D6" stroke="${C}" stroke-width="2.5"/>
      <circle cx="514" cy="112" r="6" fill="#8A6357"/>
      <rect x="544" y="100" width="24" height="32" rx="6" fill="#F9BFCE" stroke="${C}" stroke-width="2.5"/>
      <path d="M600 110 q14 -8 26 2 l-6 20 q-10 -6 -20 -2 Z" fill="#E8C08A" stroke="${C}" stroke-width="2.5"/>
      ${A.roomDetail({ sw: [390, 325], outlet: [620, 505] })}`;
  }

  /* ════════════════ 5. BUBBLE BATH ════════════════ */
  function bathScene(p) {
    // checkerboard tile wainscot
    let tiles = '';
    for (let i = 0; i < 8; i++) {
      tiles += `<rect x="${i * 96}" y="${i % 2 ? 543 : 482}" width="96" height="61" fill="#DFF0EC"/>`;
      tiles += `<path d="M${i * 96} 484 v118" stroke="#C8E3DF" stroke-width="3" opacity="0.8"/>`;
    }
    tiles += `<path d="M0 543 L720 543" stroke="#C8E3DF" stroke-width="3" opacity="0.8"/>`;
    // floor tile grid
    let fl = '';
    for (let x = 96; x < 720; x += 96) fl += `<path d="M${x} 604 L${x} 920" stroke="#D9C6AC" stroke-width="2.5" opacity="0.45"/>`;
    [700, 800, 900].forEach((y) => { fl += `<path d="M0 ${y} L720 ${y}" stroke="#D9C6AC" stroke-width="2.5" opacity="0.45"/>`; });
    // floating bubble wallpaper
    const bubs = wp((x, y, r) => `<g transform="translate(${x} ${y})" opacity="0.5">
      <circle r="${r % 2 ? 9 : 14}" fill="none" stroke="#7FC4BD" stroke-width="2.5"/>
      <path d="M${r % 2 ? -3 : -5} ${r % 2 ? -3 : -6} a6 6 0 0 1 4 -3" stroke="#7FC4BD" stroke-width="2" fill="none" stroke-linecap="round"/></g>`,
      { y0: 128, rows: 3, dy: 112, dx: 138, stag: 69 });
    return `${defs(p, `<clipPath id="winClip"><circle cx="0" cy="0" r="68"/></clipPath>`)}
      ${wallFloor()}${board('#F6FBFA', '#C8E3DF')}
      <rect x="0" y="480" width="720" height="124" fill="#EAF6F3"/>
      <path d="M0 482 L720 482" stroke="#C8E3DF" stroke-width="3"/>
      ${tiles}
      ${fl}
      ${bubs}
      ${pool(200, 720)}
      <!-- two staggered portholes, like a little ship -->
      <g transform="translate(140 170)">
        <circle cx="0" cy="0" r="80" fill="#D8F0EC" stroke="${C}" stroke-width="3"/>
        <circle cx="0" cy="0" r="68" fill="url(#skyG)" stroke="${C}" stroke-width="3"/>
        <g clip-path="url(#winClip)">
          <circle cx="-26" cy="-20" r="14" fill="#FFE29E" stroke="#F2C46F" stroke-width="3"/>
          <ellipse cx="26" cy="-2" rx="22" ry="10" fill="#FFFFFF" opacity="0.95"/>
          <path d="M-68 68 q 38 -28 76 -18 q 36 9 60 -5 l0 34 l-136 0 Z" fill="#BFE3F0" opacity="0.9"/>
        </g>
        <circle cx="0" cy="-74" r="4.5" fill="#FFF" stroke="${C}" stroke-width="2"/>
        <circle cx="0" cy="74" r="4.5" fill="#FFF" stroke="${C}" stroke-width="2"/>
        <circle cx="-74" cy="0" r="4.5" fill="#FFF" stroke="${C}" stroke-width="2"/>
        <circle cx="74" cy="0" r="4.5" fill="#FFF" stroke="${C}" stroke-width="2"/>
      </g>
      <g transform="translate(290 228)">
        <circle cx="0" cy="0" r="56" fill="#D8F0EC" stroke="${C}" stroke-width="3"/>
        <circle cx="0" cy="0" r="45" fill="url(#skyG)" stroke="${C}" stroke-width="3"/>
        <circle cx="-12" cy="-8" r="10" fill="#FFE29E" stroke="#F2C46F" stroke-width="2.5"/>
        <ellipse cx="16" cy="10" rx="15" ry="7" fill="#FFFFFF" opacity="0.95"/>
        <circle cx="0" cy="-51" r="4" fill="#FFF" stroke="${C}" stroke-width="2"/>
        <circle cx="0" cy="51" r="4" fill="#FFF" stroke="${C}" stroke-width="2"/>
        <circle cx="-51" cy="0" r="4" fill="#FFF" stroke="${C}" stroke-width="2"/>
        <circle cx="51" cy="0" r="4" fill="#FFF" stroke="${C}" stroke-width="2"/>
      </g>
      <!-- clawfoot tub -->
      <g transform="translate(330 545)">
        <ellipse cx="185" cy="242" rx="180" ry="16" fill="#7FA8A2" opacity="0.2"/>
        <path d="M28 196 q-4 22 12 30 M342 196 q4 22 -12 30" stroke="${C}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M40 226 q-14 4 -18 14 M330 226 q14 4 18 14" stroke="${C}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M6 22 Q2 10 14 10 L356 10 Q368 10 364 22 Q352 130 328 172 Q310 204 185 204 Q60 204 42 172 Q18 130 6 22 Z"
              fill="#FFFDF6" stroke="${C}" stroke-width="${SW}"/>
        <ellipse cx="185" cy="16" rx="172" ry="18" fill="#D8F0EC" stroke="${C}" stroke-width="3"/>
        <ellipse cx="185" cy="14" rx="150" ry="12" fill="#BCE6DE"/>
        <path d="M84 10 L84 -30 Q84 -44 98 -44 L112 -44" fill="none" stroke="#B8A08E" stroke-width="9" stroke-linecap="round"/>
        <rect x="106" y="-52" width="17" height="18" rx="6" fill="#B8A08E" stroke="${C}" stroke-width="2.5"/>
        <path d="M115 -28 v10" stroke="#8FC1E8" stroke-width="3" stroke-linecap="round" stroke-dasharray="2 7"/>
        <circle cx="84" cy="-38" r="6" fill="#D8F0EC" stroke="${C}" stroke-width="2.5"/>
        <circle cx="80" cy="12" r="9" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2.5"/>
        <circle cx="120" cy="4" r="6" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2"/>
        <circle cx="272" cy="8" r="7" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2"/>
        <path d="M60 80 Q70 110 92 130" stroke="#E8F4F1" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.9"/>
      </g>
      <!-- loofah on a hook -->
      <circle cx="80" cy="278" r="3.5" fill="#FFF" stroke="${C}" stroke-width="2"/>
      <path d="M80 281 v12" stroke="#B8A08E" stroke-width="2.5"/>
      <circle cx="80" cy="310" r="17" fill="#BEE8CD" stroke="${C}" stroke-width="2.5"/>
      <path d="M68 304 q12 12 24 0 M68 316 q12 -12 24 0" stroke="#8FCF9F" stroke-width="2" fill="none"/>
      ${A.roomDetail({ sw: [250, 300] })}`;
  }

  /* ════════════════ 6. STUDY NOOK ════════════════ */
  function studyScene(p) {
    return `${defs(p, `<clipPath id="winClip"><rect x="0" y="0" width="180" height="200" rx="14"/></clipPath>`)}${wallFloor()}${board()}
      ${vStripes('#C9A25E', 0.16, 22, 88)}
      ${wp((x, y) => `<path transform="translate(${x} ${y}) scale(0.95)" d="${A.starPath}" fill="#C9A25E" opacity="0.45"/>`,
        { y0: 185, rows: 3, dy: 132, dx: 176, stag: 88 })}
      ${floorPlanks('#C9A87E', 0.38)}
      ${pool()}
      ${bunting(['#A7C6A0', '#F2C48D', '#E8C08A', '#BFE0F7'])}
      ${rectWindow(46, 252, { w: 180, h: 200, style: 'shade', tint: '#E8C08A', tintDark: '#C9924F' })}
      <!-- little wall library ABOVE the low reading window -->
      <g transform="translate(56 122)">
        <rect x="0" y="0" width="200" height="12" rx="6" fill="#D9A468" stroke="${C}" stroke-width="2.5"/>
        <rect x="14" y="-30" width="12" height="30" rx="4" fill="#E88A8A" stroke="${C}" stroke-width="2"/>
        <rect x="30" y="-26" width="12" height="26" rx="4" fill="#8FC1E8" stroke="${C}" stroke-width="2"/>
        <rect x="46" y="-32" width="12" height="32" rx="4" fill="#A7C6A0" stroke="${C}" stroke-width="2"/>
        <rect x="66" y="-26" width="12" height="26" rx="4" fill="#F2C48D" stroke="${C}" stroke-width="2" transform="rotate(9 72 -13)"/>
        <rect x="120" y="-24" width="34" height="24" rx="5" fill="#FFF6EE" stroke="${C}" stroke-width="2"/>
        <rect x="24" y="66" width="150" height="12" rx="6" fill="#D9A468" stroke="${C}" stroke-width="2.5"/>
        <rect x="40" y="40" width="12" height="26" rx="4" fill="#CBB4E8" stroke="${C}" stroke-width="2"/>
        <rect x="56" y="44" width="12" height="22" rx="4" fill="#F49BB0" stroke="${C}" stroke-width="2"/>
        <circle cx="120" cy="52" r="12" fill="#D8EEF9" stroke="${C}" stroke-width="2"/>
      </g>
      <!-- desk -->
      <g transform="translate(420 472)">
        <ellipse cx="140" cy="288" rx="150" ry="14" fill="#B98F7B" opacity="0.16"/>
        <rect x="16" y="22" width="18" height="260" rx="8" fill="#D9A468" stroke="${C}" stroke-width="3"/>
        <rect x="156" y="22" width="120" height="254" rx="14" fill="#EAD2AF" stroke="${C}" stroke-width="${SW}"/>
        <rect x="172" y="42" width="88" height="60" rx="9" fill="#F6E6C8" stroke="#D9B98C" stroke-width="2.5"/>
        <rect x="196" y="66" width="40" height="9" rx="4.5" fill="#D9A468" stroke="${C}" stroke-width="2.5"/>
        <rect x="172" y="116" width="88" height="60" rx="9" fill="#F6E6C8" stroke="#D9B98C" stroke-width="2.5"/>
        <rect x="196" y="140" width="40" height="9" rx="4.5" fill="#D9A468" stroke="${C}" stroke-width="2.5"/>
        <rect x="172" y="190" width="88" height="70" rx="9" fill="#F6E6C8" stroke="#D9B98C" stroke-width="2.5"/>
        <circle cx="216" cy="225" r="6" fill="#D9A468" stroke="${C}" stroke-width="2.5"/>
        <rect x="0" y="0" width="290" height="24" rx="12" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
      </g>
      <path d="M40 468 L242 468 L262 600 L20 600 Z" fill="#FFFFFF" opacity="0.05"/>
      ${A.roomDetail({ sw: [270, 330], outlet: [390, 552] })}`;
  }

  /* ════════════════ 7. ART STUDIO ════════════════ */
  function studioScene(p) {
    const splCols = ['#F49BB0', '#8FC1E8', '#FFD98E', '#A7E0B6', '#CBB4E8'];
    let si = 0;
    const splats = wp((x, y) => {
      const c2 = splCols[si++ % 5];
      return `<g transform="translate(${x} ${y})" opacity="0.5">
        <circle r="10" fill="${c2}"/><circle cx="12" cy="-7" r="4.5" fill="${c2}"/><circle cx="-11" cy="8" r="3.5" fill="${c2}"/></g>`;
    }, { y0: 145, rows: 3, dy: 115, dx: 140, stag: 70 });
    return `${defs(p)}${wallFloor()}${board()}
      ${floorPlanks('#C9A87E', 0.32)}
      <ellipse cx="580" cy="870" rx="165" ry="46" fill="#FFFDF6" opacity="0.6"/>
      <circle cx="520" cy="866" r="6" fill="#F49BB0" opacity="0.5"/>
      <circle cx="620" cy="880" r="5" fill="#8FC1E8" opacity="0.5"/>
      <circle cx="660" cy="852" r="4" fill="#FFD98E" opacity="0.55"/>
      <g transform="rotate(-3 341 320)"><rect x="315" y="300" width="52" height="40" rx="5" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <path d="M325 330 q8 -14 16 0 q6 -10 12 0" stroke="#A7E0B6" stroke-width="2.5" fill="none"/></g>
      <g transform="rotate(4 404 329)"><rect x="382" y="312" width="44" height="34" rx="5" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <circle cx="404" cy="329" r="8" fill="#F9BFCE"/></g>
      <ellipse cx="200" cy="840" rx="60" ry="18" fill="#F49BB0" opacity="0.25"/>
      <ellipse cx="420" cy="880" rx="46" ry="14" fill="#8FC1E8" opacity="0.22"/>
      <ellipse cx="580" cy="850" rx="40" ry="13" fill="#FFD98E" opacity="0.25"/>
      ${splats}
      ${pool()}
      ${lights(['#F49BB0', '#FFD98E', '#8FC1E8', '#CBB4E8'])}
      <!-- slanted ceiling skylight + light beam -->
      <g>
        <path d="M300 148 L420 148 L390 300 L270 300 Z" fill="#FFF6D9" opacity="0.14"/>
        <path d="M282 56 L444 56 L420 146 L262 146 Z" fill="#FFFFFF" stroke="#E4D7F2" stroke-width="3"/>
        <path d="M292 64 L434 64 L414 138 L272 138 Z" fill="url(#skyG)" stroke="${C}" stroke-width="3"/>
        <path d="M340 64 L328 138 M388 64 L380 138" stroke="#FFFFFF" stroke-width="7" opacity="0.9"/>
        <circle cx="318" cy="88" r="11" fill="#FFE29E" stroke="#F2C46F" stroke-width="2.5"/>
        <ellipse cx="392" cy="98" rx="18" ry="8" fill="#FFFFFF" opacity="0.95"/>
      </g>
      <!-- pegboard with studio tools -->
      <g transform="translate(36 96)">
        <rect x="0" y="0" width="220" height="168" rx="12" fill="#FBF7EF" stroke="#E4D7F2" stroke-width="3"/>
        ${(() => { let d = ''; for (let r = 0; r < 4; r++) for (let c = 0; c < 7; c++) d += `<circle cx="${26 + c * 28}" cy="${26 + r * 38}" r="2.5" fill="#E4D7F2"/>`; return d; })()}
        <circle cx="52" cy="62" r="17" fill="#F9BFCE" stroke="${C}" stroke-width="2.5"/>
        <circle cx="52" cy="62" r="7" fill="#FBF7EF" stroke="${C}" stroke-width="2"/>
        <path d="M108 34 L120 84 M128 34 L116 84" stroke="#8FC1E8" stroke-width="5" stroke-linecap="round"/>
        <circle cx="108" cy="32" r="6" fill="none" stroke="#8FC1E8" stroke-width="4"/>
        <circle cx="130" cy="32" r="6" fill="none" stroke="#8FC1E8" stroke-width="4"/>
        <rect x="166" y="30" width="16" height="94" rx="5" fill="#FFD98E" stroke="${C}" stroke-width="2.5"/>
        <path d="M170 46 h8 M170 62 h8 M170 78 h8 M170 94 h8 M170 110 h8" stroke="#C9924F" stroke-width="2"/>
        <path d="M40 120 q16 18 36 8 q14 -7 10 -20" fill="none" stroke="#A7E0B6" stroke-width="5" stroke-linecap="round"/>
      </g>
      <!-- wall shelf -->
      <g transform="translate(60 420)">
        <rect x="0" y="0" width="240" height="14" rx="7" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
        <path d="M24 14 L24 34 L44 14 M196 14 L196 34 L216 14" stroke="#D9A468" stroke-width="4" fill="none" stroke-linecap="round"/>
      </g>
      <!-- easel with blank canvas -->
      <g transform="translate(460 320)">
        <ellipse cx="120" cy="436" rx="130" ry="14" fill="#B98F7B" opacity="0.16"/>
        <path d="M116 20 L36 430" stroke="#D9A468" stroke-width="12" stroke-linecap="round"/>
        <path d="M124 20 L204 430" stroke="#D9A468" stroke-width="12" stroke-linecap="round"/>
        <path d="M120 40 L120 300" stroke="#C08F5E" stroke-width="10" stroke-linecap="round"/>
        <circle cx="120" cy="26" r="10" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
        <rect x="20" y="228" width="200" height="18" rx="9" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
        <rect x="38" y="56" width="204" height="156" rx="6" fill="#FFFDF6" stroke="${C}" stroke-width="${SW}" transform="rotate(-1 140 134)"/>
      </g>
      ${A.roomDetail({ sw: [282, 300], outlet: [452, 556] })}`;
  }

  /* ════════════════ 8. MUSIC ROOM ════════════════ */
  function musicScene(p) {
    const note = (x, y, s, op) => `<g transform="translate(${x} ${y}) scale(${s})" opacity="${op}">
      <circle cx="0" cy="10" r="6" fill="#8B92D8"/><path d="M6 10 L6 -14 L18 -18 L18 -8" stroke="#8B92D8" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="12" cy="-6" r="6" fill="#8B92D8"/></g>`;
    return `${defs(p, `<clipPath id="winClip"><rect x="0" y="0" width="140" height="490" rx="10"/></clipPath>`)}${wallFloor()}${board()}
      ${wp((x, y, r) => note(x, y, r % 2 ? 0.6 : 0.78, 0.36), { y0: 140, rows: 3, dy: 122, dx: 158, stag: 79 })}
      <path d="M0 528 q30 -14 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0"
            stroke="#8B92D8" stroke-width="2.5" fill="none" opacity="0.35"/>
      <rect x="390" y="712" width="334" height="32" rx="15" fill="#C9A87E" stroke="${C}" stroke-width="3"/>
      <path d="M398 726 L716 726" stroke="#B8946A" stroke-width="2.5" opacity="0.7"/>
      <ellipse cx="380" cy="790" rx="272" ry="95" fill="#8B92D8" opacity="0.13"/>
      <ellipse cx="380" cy="790" rx="240" ry="78" fill="none" stroke="#8B92D8" stroke-width="3.5"
               opacity="0.28" stroke-dasharray="1 16" stroke-linecap="round"/>
      ${pool()}
      ${bunting(['#8B92D8', '#F9BFCE', '#BFE0F7', '#FFD98E'])}
      <!-- tall french door out to the garden -->
      <g transform="translate(46 98)">
        <rect x="-10" y="-10" width="160" height="520" rx="16" fill="#FFF7EA" stroke="#E8C7A6" stroke-width="3"/>
        <rect x="0" y="0" width="140" height="490" rx="10" fill="url(#skyG)" stroke="${C}" stroke-width="3"/>
        <g clip-path="url(#winClip)">
          <circle cx="38" cy="64" r="16" fill="#FFE29E" stroke="#F2C46F" stroke-width="3"/>
          <ellipse cx="98" cy="92" rx="22" ry="10" fill="#FFFFFF" opacity="0.95"/>
          <path d="M0 490 q 35 -32 70 -22 q 36 10 70 -6 l0 32 l-140 0 Z" fill="#CDEBD2" opacity="0.9"/>
        </g>
        <rect x="65" y="0" width="10" height="490" fill="#FFF7EA" opacity="0.9"/>
        <rect x="0" y="118" width="140" height="10" fill="#FFF7EA" opacity="0.9"/>
        <rect x="0" y="240" width="140" height="10" fill="#FFF7EA" opacity="0.9"/>
        <rect x="0" y="362" width="140" height="10" fill="#FFF7EA" opacity="0.9"/>
        <rect x="0" y="0" width="140" height="490" rx="10" fill="none" stroke="${C}" stroke-width="3"/>
        <circle cx="122" cy="255" r="6" fill="#E8C08A" stroke="${C}" stroke-width="2.5"/>
        <rect x="-16" y="488" width="172" height="16" rx="8" fill="#FFF7EA" stroke="#E8C7A6" stroke-width="3"/>
      </g>
      <!-- upright piano -->
      <g transform="translate(430 440)">
        <ellipse cx="135" cy="288" rx="145" ry="14" fill="#B98F7B" opacity="0.16"/>
        <rect x="0" y="0" width="270" height="280" rx="18" fill="#B47E9E" stroke="${C}" stroke-width="${SW}"/>
        <rect x="18" y="20" width="234" height="70" rx="10" fill="#C595AF" stroke="#9E6A88" stroke-width="2.5"/>
        <path d="M50 55 c-2.6 -3.1 -7.4 -1.1 -7.4 2.4 c0 3.1 4.3 5 7.4 7.7 c3.1 -2.7 7.4 -4.6 7.4 -7.7 c0 -3.5 -4.8 -5.5 -7.4 -2.4 Z" fill="#F4D8E6" opacity="0.9"/>
        <rect x="-16" y="118" width="302" height="38" rx="10" fill="#FFFDF6" stroke="${C}" stroke-width="${SW}"/>
        <path d="M14 118 v22 M44 118 v22 M74 118 v22 M104 118 v22 M134 118 v22 M164 118 v22 M194 118 v22 M224 118 v22 M254 118 v22"
              stroke="${C}" stroke-width="2"/>
        <rect x="22" y="118" width="14" height="14" rx="2" fill="#5C5064"/>
        <rect x="52" y="118" width="14" height="14" rx="2" fill="#5C5064"/>
        <rect x="112" y="118" width="14" height="14" rx="2" fill="#5C5064"/>
        <rect x="142" y="118" width="14" height="14" rx="2" fill="#5C5064"/>
        <rect x="202" y="118" width="14" height="14" rx="2" fill="#5C5064"/>
        <rect x="232" y="118" width="14" height="14" rx="2" fill="#5C5064"/>
        <rect x="14" y="262" width="22" height="20" rx="6" fill="#9E6A88" stroke="${C}" stroke-width="2.5"/>
        <rect x="234" y="262" width="22" height="20" rx="6" fill="#9E6A88" stroke="${C}" stroke-width="2.5"/>
      </g>
      <!-- little concert poster -->
      <rect x="632" y="128" width="58" height="76" rx="6" fill="#B47E9E" stroke="${C}" stroke-width="2.5"/>
      <circle cx="653" cy="168" r="6" fill="#F4D8E6"/>
      <path d="M659 168 L659 146 L671 142 L671 162" stroke="#F4D8E6" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path transform="translate(650 190) scale(0.7)" d="${A.starPath}" fill="#F4D8E6"/>
      ${A.roomDetail({ sw: [228, 325], outlet: [386, 552] })}`;
  }

  /* ════════════════ 9. GAME DEN ════════════════ */
  function gamesScene(p) {
    const px = (x, y, c) => `<rect x="${x}" y="${y}" width="14" height="14" rx="3" fill="${c}" stroke="${C}" stroke-width="2"/>`;
    // blocky 8-bit heart built from rects, top-left at (x,y), cell size u
    const pxHeart = (x, y, u, c) => `<g fill="${c}">
      <rect x="${x + u}" y="${y}" width="${2 * u}" height="${u}"/>
      <rect x="${x + 4 * u}" y="${y}" width="${2 * u}" height="${u}"/>
      <rect x="${x}" y="${y + u}" width="${7 * u}" height="${2 * u}"/>
      <rect x="${x + u}" y="${y + 3 * u}" width="${5 * u}" height="${u}"/>
      <rect x="${x + 2 * u}" y="${y + 4 * u}" width="${3 * u}" height="${u}"/>
      <rect x="${x + 3 * u}" y="${y + 5 * u}" width="${u}" height="${u}"/></g>`;
    let gg = '';
    for (let x = 36; x < 720; x += 72) gg += `<path d="M${x} 100 L${x} 596" stroke="#7BA6E8" stroke-width="2" opacity="0.16"/>`;
    for (let y = 136; y < 600; y += 72) gg += `<path d="M0 ${y} L720 ${y}" stroke="#7BA6E8" stroke-width="2" opacity="0.16"/>`;
    [[324, 208], [468, 280], [612, 172], [252, 424], [540, 460], [110, 352]].forEach(([x, y], i) => {
      gg += `<rect x="${x}" y="${y}" width="17" height="17" rx="3" fill="${['#F49BB0', '#A7E0B6', '#FFD98E', '#CBB4E8'][i % 4]}" opacity="0.55"/>`;
    });
    gg += `<g transform="translate(430 318)">
      <rect x="0" y="26" width="220" height="13" rx="6.5" fill="#D9B98C" stroke="${C}" stroke-width="2.5"/>
      <path d="M28 24 Q22 12 30 6 L46 6 Q54 12 48 24 Z" fill="#FFD98E" stroke="${C}" stroke-width="2.5"/>
      <rect x="32" y="22" width="12" height="6" fill="#E8C08A" stroke="${C}" stroke-width="1.8"/>
      <path d="M96 26 h20 l-2.5 -14 h-15 Z" fill="#F3AE8B" stroke="${C}" stroke-width="2"/>
      <ellipse cx="106" cy="6" rx="7" ry="5" fill="#86CF9C" stroke="#58A46F" stroke-width="1.8"/>
      <rect x="160" y="8" width="34" height="18" rx="4" fill="#CBB4E8" stroke="${C}" stroke-width="2"/>
    </g>`;
    let cf = '';
    for (let r = 0; r < 6; r++)
      for (let x = 30 + (r % 2) * 26; x < 720; x += 52) cf += `<circle cx="${x}" cy="${644 + r * 50}" r="2.8" fill="#FFFFFF" opacity="0.2"/>`;
    return `${defs(p)}${wallFloor()}${board()}
      ${gg}
      ${cf}
      ${pool()}
      <path d="M-10 50 Q 180 90 360 62 T 730 44" fill="none" stroke="#B98F7B" stroke-width="4" stroke-linecap="round"/>
      ${px(84, 60, '#F49BB0')}${px(190, 74, '#FFD98E')}${px(296, 62, '#A7E0B6')}${px(402, 52, '#8FC1E8')}${px(508, 62, '#CBB4E8')}${px(614, 50, '#F49BB0')}
      <!-- base poster -->
      <g transform="translate(96 190)">
        <rect x="0" y="0" width="78" height="94" rx="8" fill="#FFFDF6" stroke="${C}" stroke-width="3"/>
        ${pxHeart(18, 20, 6, '#F49BB0')}
        <path d="M18 68 h42 M18 78 h30" stroke="#C9D4E4" stroke-width="3" stroke-linecap="round"/>
      </g>
      <!-- tv console -->
      <g transform="translate(400 555)">
        <ellipse cx="140" cy="196" rx="152" ry="13" fill="#B98F7B" opacity="0.16"/>
        <rect x="10" y="-110" width="190" height="155" rx="14" fill="#5C5064" stroke="${C}" stroke-width="${SW}"/>
        <rect x="22" y="-98" width="166" height="118" rx="8" fill="#8FD4C3"/>
        ${pxHeart(74, -66, 9, '#F26D8A')}
        <path d="M40 -80 h20 M40 -70 h14" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
        <rect x="0" y="45" width="280" height="140" rx="14" fill="#EAD2AF" stroke="${C}" stroke-width="${SW}"/>
        <rect x="18" y="65" width="116" height="100" rx="10" fill="#F6E6C8" stroke="#D9B98C" stroke-width="2.5"/>
        <circle cx="76" cy="115" r="6" fill="#D9A468" stroke="${C}" stroke-width="2.5"/>
        <rect x="150" y="65" width="112" height="44" rx="9" fill="#F6E6C8" stroke="#D9B98C" stroke-width="2.5"/>
        <rect x="150" y="121" width="112" height="44" rx="9" fill="#F6E6C8" stroke="#D9B98C" stroke-width="2.5"/>
      </g>
      <!-- pixel-buddy wall decals -->
      ${[[150, 378, '#A7E0B6'], [228, 432, '#F9BFCE'], [138, 462, '#FFD98E']].map(([x, y, c2]) => `
        <g transform="translate(${x} ${y})" opacity="0.6">
          <rect x="0" y="0" width="28" height="14" rx="3" fill="${c2}"/>
          <rect x="4" y="-6" width="20" height="8" rx="3" fill="${c2}"/>
          <circle cx="9" cy="7" r="2.5" fill="#FFFDF6"/><circle cx="19" cy="7" r="2.5" fill="#FFFDF6"/>
          <rect x="3" y="14" width="6" height="5" rx="2" fill="${c2}"/><rect x="19" y="14" width="6" height="5" rx="2" fill="${c2}"/>
        </g>`).join('')}
      ${A.roomDetail({ sw: [380, 330], outlet: [108, 548] })}`;
  }

  /* ════════════════ 10. KITTY CORNER ════════════════ */
  function catsScene(p) {
    const paw = (x, y, s, op) => `<g transform="translate(${x} ${y}) scale(${s})" opacity="${op}" fill="#E8B99B">
      <ellipse cx="0" cy="4" rx="9" ry="7"/><ellipse cx="-10" cy="-6" rx="4" ry="5"/><ellipse cx="-3" cy="-10" rx="4" ry="5"/><ellipse cx="4" cy="-10" rx="4" ry="5"/><ellipse cx="11" cy="-6" rx="4" ry="5"/></g>`;
    return `${defs(p, `<clipPath id="winClip"><rect x="0" y="0" width="260" height="140" rx="14"/></clipPath>`)}${wallFloor()}${board()}${floorDots()}
      ${wp((x, y, r) => paw(x, y, r % 2 ? 0.85 : 1.1, 0.38), { y0: 148, rows: 3, dy: 118, dx: 148, stag: 74 })}
      ${paw(255, 715, 0.9, 0.2)}${paw(520, 855, 0.8, 0.18)}
      <rect x="560" y="420" width="90" height="12" rx="6" fill="#E8C08A" stroke="${C}" stroke-width="2.5"/>
      <path d="M574 432 L582 452 M636 432 L628 452" stroke="#D9A468" stroke-width="4" stroke-linecap="round"/>
      <rect x="622" y="356" width="76" height="12" rx="6" fill="#E8C08A" stroke="${C}" stroke-width="2.5"/>
      <path d="M634 368 L642 388 M686 368 L678 388" stroke="#D9A468" stroke-width="4" stroke-linecap="round"/>
      ${pool(240, 700, 0.2)}
      ${lights(['#F8B58E', '#F9BFCE', '#FFE9AE', '#BEE8CD'])}
      ${rectWindow(40, 132, { w: 260, h: 140, style: 'scallop', tint: '#F8B58E', tintDark: '#E0955F' })}
      <!-- window bench -->
      <g transform="translate(60 428)">
        <rect x="18" y="24" width="16" height="176" rx="7" fill="#D9A468" stroke="${C}" stroke-width="3"/>
        <rect x="226" y="24" width="16" height="176" rx="7" fill="#D9A468" stroke="${C}" stroke-width="3"/>
        <rect x="0" y="0" width="260" height="24" rx="12" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <rect x="12" y="-10" width="236" height="16" rx="8" fill="#F8B58E" stroke="${C}" stroke-width="3"/>
        <path d="M40 -2 q6 5 12 0 M100 -2 q6 5 12 0 M160 -2 q6 5 12 0 M208 -2 q6 5 12 0" stroke="#E0955F" stroke-width="2" fill="none"/>
      </g>
      <!-- dangling pom toy + floor basket -->
      <path d="M660 368 v52" stroke="#B8A08E" stroke-width="2.5"/>
      <circle cx="660" cy="430" r="9" fill="#F49BB0" stroke="${C}" stroke-width="2.5"/>
      <rect x="670" y="856" width="46" height="10" rx="5" fill="#E8C08A" stroke="${C}" stroke-width="2.5"/>
      <path d="M674 866 h38 l-4 26 q-1 6 -7 6 h-16 q-6 0 -7 -6 Z" fill="#F0CD9C" stroke="${C}" stroke-width="2.5"/>
      ${A.roomDetail({ sw: [498, 302], outlet: [255, 552] })}`;
  }

  /* ════════════════ 11. BALCONY GARDEN ════════════════ */
  function balconyScene(p) {
    let planks = '';
    [664, 744, 824].forEach((y) => { planks += `<path d="M0 ${y} L720 ${y}" stroke="#C09A6E" stroke-width="3" opacity="0.45"/>`; });
    let bals = '';
    for (let i = 0; i < 12; i++) bals += `<rect x="${28 + i * 60}" y="474" width="10" height="118" rx="5" fill="#FFF6EE" stroke="${C}" stroke-width="2.5"/>`;
    return `${defs(p)}${wallFloor()}
      <circle cx="150" cy="200" r="58" fill="#FFD98E" stroke="#F2B95C" stroke-width="4"/>
      <circle cx="150" cy="200" r="74" fill="#FFE9AE" opacity="0.35"/>
      <ellipse cx="420" cy="150" rx="60" ry="20" fill="#FFFFFF" opacity="0.75"/>
      <ellipse cx="470" cy="132" rx="38" ry="16" fill="#FFFFFF" opacity="0.75"/>
      <ellipse cx="620" cy="230" rx="48" ry="16" fill="#FFFFFF" opacity="0.6"/>
      <ellipse cx="260" cy="120" rx="34" ry="12" fill="#FFFFFF" opacity="0.5"/>
      <ellipse cx="560" cy="310" rx="44" ry="14" fill="#FFFFFF" opacity="0.45"/>
      <path transform="translate(84 96) scale(0.9)" d="${A.starPath}" fill="#FFF1C4" opacity="0.7"/>
      <path transform="translate(662 148) scale(0.7)" d="${A.starPath}" fill="#FFF1C4" opacity="0.6"/>
      <path d="M300 118 q8 -8 16 0 M330 130 q7 -7 14 0" stroke="#8A7767" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
      <path d="M472 208 q8 -8 16 0 M502 220 q7 -7 14 0" stroke="#8A7767" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.55"/>
      <g opacity="0.5" fill="#C98FA6">
        <rect x="-10" y="360" width="90" height="244" rx="6"/><rect x="150" y="386" width="70" height="218" rx="6"/>
        <rect x="330" y="372" width="80" height="232" rx="6"/><rect x="560" y="366" width="76" height="238" rx="6"/>
      </g>
      <g opacity="0.42" fill="#B87E98">
        <rect x="70" y="330" width="80" height="274" rx="6"/><rect x="215" y="350" width="100" height="254" rx="6"/>
        <rect x="405" y="338" width="90" height="266" rx="6"/><rect x="630" y="342" width="100" height="262" rx="6"/>
      </g>
      <g fill="#FFE9AE" opacity="0.6">
        <rect x="92" y="352" width="10" height="12" rx="2"/><rect x="116" y="376" width="10" height="12" rx="2"/>
        <rect x="248" y="372" width="10" height="12" rx="2"/><rect x="278" y="396" width="10" height="12" rx="2"/>
        <rect x="430" y="360" width="10" height="12" rx="2"/><rect x="460" y="386" width="10" height="12" rx="2"/>
        <rect x="656" y="366" width="10" height="12" rx="2"/><rect x="686" y="390" width="10" height="12" rx="2"/>
      </g>
      <path d="M84 40 h34 M100 40 v18" stroke="${C}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="100" cy="64" r="6" fill="none" stroke="${C}" stroke-width="4"/>
      ${planks}
      ${lights(['#FFE9AE', '#FFD98E', '#F9BFCE', '#FFE9AE'])}
      <path d="M596 40 h34 M613 40 v18" stroke="${C}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="613" cy="64" r="6" fill="none" stroke="${C}" stroke-width="4"/>
      <!-- railing -->
      ${bals}
      <rect x="-6" y="452" width="732" height="20" rx="10" fill="#FFF6EE" stroke="${C}" stroke-width="3"/>
      <rect x="-6" y="586" width="732" height="16" rx="8" fill="#FFF6EE" stroke="${C}" stroke-width="3"/>`;
  }

  /* ════════════════ 12. CAMP ════════════════ */
  function campScene(p) {
    let stars = '';
    [[80, 90], [200, 60], [330, 110], [470, 70], [600, 100], [660, 50], [140, 180], [560, 180]].forEach(([x, y], i) => {
      stars += `<path transform="translate(${x} ${y}) scale(${i % 2 ? 0.8 : 1.1})" d="${A.starPath}" fill="#FFE9AE" opacity="${0.5 + (i % 3) * 0.15}"/>`;
    });
    let tufts = '';
    [[100, 700], [260, 760], [420, 700], [600, 740], [180, 850], [500, 860], [660, 830]].forEach(([x, y]) => {
      tufts += `<path d="M${x} ${y} q-3 -14 -8 -18 M${x} ${y} q0 -16 0 -20 M${x} ${y} q3 -14 8 -18" stroke="#7FB472" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>`;
    });
    return `${defs(p)}${wallFloor()}
      <path d="M584 96 a44 44 0 1 0 30 76 a44 44 0 0 1 -30 -76 Z" fill="#FFE9AE" stroke="#F2C46F" stroke-width="3" transform="rotate(-14 599 140)"/>
      ${stars}
      <path d="M120 258 L212 220" stroke="#FFE9AE" stroke-width="3" stroke-linecap="round" opacity="0.65" stroke-dasharray="3 11"/>
      <path transform="translate(224 214) scale(1.2)" d="${A.starPath}" fill="#FFE9AE"/>
      <circle cx="384" cy="204" r="2.5" fill="#FFE9AE" opacity="0.8"/>
      <circle cx="500" cy="286" r="2.5" fill="#FFE9AE" opacity="0.7"/>
      <circle cx="96" cy="336" r="2.5" fill="#FFE9AE" opacity="0.7"/>
      <path d="M0 604 L60 520 L120 604 Z M100 604 L170 496 L240 604 Z M480 604 L544 508 L608 604 Z M580 604 L640 528 L700 604 Z" fill="#5E8A6E" opacity="0.55"/>
      <path d="M0 598 L720 598 L720 610 L0 610 Z" fill="#8FC084"/>
      ${tufts}
      <circle cx="420" cy="480" r="4" fill="#FFE9AE" opacity="0.9"/>
      <circle cx="452" cy="452" r="3" fill="#FFE9AE" opacity="0.7"/>
      <circle cx="660" cy="470" r="3.5" fill="#FFE9AE" opacity="0.8"/>
      <!-- tent -->
      <g transform="translate(40 270)">
        <ellipse cx="160" cy="342" rx="170" ry="16" fill="#4E7A5E" opacity="0.3"/>
        <path d="M160 6 L316 336 Q320 344 310 344 L10 344 Q0 344 4 336 Z" fill="#E88A8A" stroke="${C}" stroke-width="${SW}"/>
        <path d="M160 6 L160 344" stroke="#D07070" stroke-width="3"/>
        <path d="M160 90 L252 344 L68 344 Z" fill="#F6D9C4" stroke="${C}" stroke-width="3"/>
        <path d="M160 90 L160 344" stroke="#E5B8A0" stroke-width="3"/>
        <path d="M160 100 L228 330 Q210 344 160 344 Z" fill="#C9917E" opacity="0.55"/>
        <path d="M152 -8 L160 6 L170 -12" stroke="${C}" stroke-width="4" fill="none" stroke-linecap="round"/>
        <circle cx="160" cy="200" r="5" fill="#FFD98E" stroke="${C}" stroke-width="2"/>
      </g>
      <!-- old tree stump -->
      <g transform="translate(95 682)">
        <rect x="-28" y="0" width="56" height="26" fill="#B98F7B" stroke="${C}" stroke-width="2.5"/>
        <ellipse cx="0" cy="26" rx="28" ry="9" fill="#A8836B" stroke="${C}" stroke-width="2.5"/>
        <ellipse cx="0" cy="0" rx="28" ry="11" fill="#D9A468" stroke="${C}" stroke-width="2.5"/>
        <ellipse cx="0" cy="0" rx="14" ry="5.5" fill="none" stroke="#B98F7B" stroke-width="2"/>
        <ellipse cx="0" cy="0" rx="5" ry="2" fill="#B98F7B"/>
      </g>`;
  }

  /* ════════════════ 13. WINTER LODGE ════════════════ */
  function lodgeScene(p) {
    const flake = (x, y, s, op) => `<g transform="translate(${x} ${y}) scale(${s})" opacity="${op}" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round">
      <path d="M0 -8 V8 M-8 0 H8 M-5.5 -5.5 L5.5 5.5 M-5.5 5.5 L5.5 -5.5" fill="none"/></g>`;
    let bricks = '';
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 4; c++) {
        const bx = 14 + c * 60 + (r % 2) * 30 - 24;
        if (bx < 12 || bx + 52 > 248) continue; // keep bricks inside the fireplace body
        bricks += `<rect x="${bx}" y="${16 + r * 40}" width="52" height="32" rx="6" fill="#DE9078" opacity="${r % 2 ? 0.5 : 0.7}"/>`;
      }
    }
    return `${defs(p, `<clipPath id="winClip"><rect x="0" y="0" width="100" height="110" rx="14"/></clipPath>`)}${wallFloor()}${board()}
      ${hPlanks('#C97B6B', 0.24, 132, 94, 592)}
      <circle cx="184" cy="180" r="5" fill="#C97B6B" opacity="0.3"/>
      <circle cx="564" cy="276" r="5" fill="#C97B6B" opacity="0.3"/>
      <circle cx="92" cy="372" r="5" fill="#C97B6B" opacity="0.3"/>
      <circle cx="304" cy="468" r="5" fill="#C97B6B" opacity="0.3"/>
      <g transform="translate(352 598)">
        <circle cx="20" cy="34" r="16" fill="#D9A468" stroke="${C}" stroke-width="3"/>
        <circle cx="20" cy="34" r="7" fill="#F0CD9C" stroke="#B98F7B" stroke-width="2"/>
        <circle cx="52" cy="34" r="16" fill="#D9A468" stroke="${C}" stroke-width="3"/>
        <circle cx="52" cy="34" r="7" fill="#F0CD9C" stroke="#B98F7B" stroke-width="2"/>
        <circle cx="36" cy="12" r="16" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
        <circle cx="36" cy="12" r="7" fill="#F6D9AF" stroke="#B98F7B" stroke-width="2"/>
      </g>
      ${floorPlanks('#C9A87E', 0.38)}
      <ellipse cx="225" cy="800" rx="175" ry="62" fill="#E88A8A" opacity="0.26"/>
      <ellipse cx="225" cy="800" rx="142" ry="47" fill="none" stroke="#FFFDF6" stroke-width="4" opacity="0.55"
               stroke-dasharray="1 14" stroke-linecap="round"/>
      ${flake(360, 170, 1, 0.8)}${flake(430, 260, 0.8, 0.6)}${flake(330, 330, 0.7, 0.6)}${flake(620, 240, 0.9, 0.7)}${flake(160, 450, 0.8, 0.55)}
      ${pool()}
      ${lights(['#E88A8A', '#FFE9AE', '#A7C6A0', '#FFE9AE'])}
      ${rectWindow(330, 108, { w: 100, h: 110, style: 'shutters', tint: '#E88A8A', tintDark: '#D07070', snow: true, hill: '#F4FAFF' })}
      <!-- crossed skis on the left wall -->
      <g transform="translate(150 250)">
        <g transform="rotate(18)">
          <rect x="-10" y="-100" width="20" height="200" rx="10" fill="#8FC1E8" stroke="${C}" stroke-width="3"/>
          <rect x="-10" y="-14" width="20" height="28" fill="#6FA3D4"/>
        </g>
        <g transform="rotate(-18)">
          <rect x="-10" y="-100" width="20" height="200" rx="10" fill="#F49BB0" stroke="${C}" stroke-width="3"/>
          <rect x="-10" y="-14" width="20" height="28" fill="#E58FAB"/>
        </g>
      </g>
      <!-- fireplace -->
      <g transform="translate(420 330)">
        <ellipse cx="130" cy="296" rx="150" ry="14" fill="#B98F7B" opacity="0.18"/>
        <rect x="0" y="0" width="260" height="290" rx="14" fill="#F0BCA8" stroke="${C}" stroke-width="${SW}"/>
        <g clip-path="none">${bricks}</g>
        <rect x="-16" y="58" width="292" height="26" rx="13" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <path d="M56 106 L56 250 Q56 270 76 270 L184 270 Q204 270 204 250 L204 106 Q204 96 194 96 L66 96 Q56 96 56 106 Z"
              fill="#6E5147" stroke="${C}" stroke-width="3"/>
        <path d="M66 116 L66 246 Q66 260 80 260 L180 260 Q194 260 194 246 L194 116 Q194 106 184 106 L76 106 Q66 106 66 116 Z"
              fill="#4E3A34"/>
        <ellipse cx="130" cy="240" rx="60" ry="24" fill="#F8A05C" opacity="0.25"/>
        <rect x="30" y="272" width="200" height="18" rx="9" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
      </g>
      <path d="M326 236 L436 236 L458 376 L304 376 Z" fill="#FFFFFF" opacity="0.05"/>
      ${A.roomDetail({ sw: [258, 328], outlet: [395, 550] })}`;
  }

  Object.assign(A.scenes, {
    cafe: cafeScene,
    bath: bathScene,
    study: studyScene,
    studio: studioScene,
    music: musicScene,
    games: gamesScene,
    cats: catsScene,
    balcony: balconyScene,
    camp: campScene,
    lodge: lodgeScene,
  });
})();
