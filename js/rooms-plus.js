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

  // standard window (glass 220×190) — hill/curtain vary per room
  const rectWindow = (x, y, { hill = '#CDEBD2', frame = '#FFF7EA', trim = '#E8C7A6', snow = false } = {}) => `
    <g transform="translate(${x} ${y})">
      <rect x="-10" y="-10" width="240" height="230" rx="20" fill="${frame}" stroke="${trim}" stroke-width="3"/>
      <rect x="0" y="0" width="220" height="190" rx="14" fill="url(#skyG)" stroke="${C}" stroke-width="3"/>
      <g clip-path="url(#winClip)">
        <circle cx="48" cy="46" r="18" fill="#FFE29E" stroke="#F2C46F" stroke-width="3"/>
        <ellipse cx="140" cy="52" rx="30" ry="13" fill="#FFFFFF" opacity="0.95"/>
        <ellipse cx="162" cy="42" rx="18" ry="11" fill="#FFFFFF" opacity="0.95"/>
        <path d="M0 190 q 55 -40 110 -28 q 60 13 110 -8 l0 36 l-220 0 Z" fill="${hill}" opacity="0.92"/>
        ${snow ? `<circle cx="40" cy="90" r="3" fill="#FFF"/><circle cx="90" cy="70" r="3" fill="#FFF"/>
          <circle cx="150" cy="96" r="3" fill="#FFF"/><circle cx="190" cy="66" r="3" fill="#FFF"/>` : ''}
        <rect x="100" y="0" width="10" height="190" fill="${frame}" opacity="0.9"/>
        <rect x="0" y="85" width="220" height="10" fill="${frame}" opacity="0.9"/>
      </g>
      <rect x="0" y="0" width="220" height="190" rx="14" fill="none" stroke="${C}" stroke-width="3"/>
      <rect x="-20" y="188" width="280" height="20" rx="10" fill="${frame}" stroke="${trim}" stroke-width="3"/>
    </g>`;

  // simple string of fairy lights across the top
  const lights = (cols = ['#FFD98E', '#F9BFCE', '#BEE8CD', '#BFE0F7']) => {
    const bulbs = [[70, 66], [170, 78], [270, 62], [370, 52], [470, 68], [570, 60], [660, 48]]
      .map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="13" fill="${cols[i % 4]}" opacity="0.26"/>
        <circle cx="${x}" cy="${y}" r="7.5" fill="${cols[i % 4]}" stroke="${C}" stroke-width="2.5"/>`).join('');
    return `<path d="M-10 42 C 90 92 190 78 290 56 C 390 38 430 74 520 64 C 600 56 660 44 730 38"
      fill="none" stroke="#B98F7B" stroke-width="4" stroke-linecap="round"/>${bulbs}`;
  };

  // pennant bunting
  const bunting = (cols) => {
    const flags = [[60, 60], [150, 74], [240, 80], [330, 76], [420, 64], [510, 55], [600, 49], [672, 46]]
      .map(([x, y], i) => `<path d="M${x} ${y} L${x + 32} ${y - 2} L${x + 18} ${y + 28} Z"
        fill="${cols[i % cols.length]}" stroke="${C}" stroke-width="2.5" stroke-linejoin="round"/>`).join('');
    return `<path d="M-10 44 Q 160 94 360 66 T 730 40" fill="none" stroke="#B98F7B" stroke-width="4" stroke-linecap="round"/>${flags}`;
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
    const beans = wp((x, y, r) => `<g transform="translate(${x} ${y}) rotate(${r % 2 ? 28 : -24})" opacity="0.28">
      <ellipse rx="6.5" ry="9.5" fill="#B98F7B"/>
      <path d="M0 -8 Q2.5 0 0 8" stroke="#F8EBDB" stroke-width="2" fill="none"/></g>`,
      { y0: 148, rows: 3, dy: 104, dx: 122, stag: 61 });
    return `${defs(p)}${wallFloor()}${board()}${diam}
      ${beans}
      <path d="M0 460 L720 460" stroke="#D9B98C" stroke-width="3.5" opacity="0.55"/>
      ${pool()}
      ${lights()}
      <!-- awning + window -->
      <g transform="translate(46 98)">
        <path d="M-24 -18 L264 -18 L252 26 Q246 38 234 38 L6 38 Q-6 38 -12 26 Z" fill="#F9BFCE" stroke="${C}" stroke-width="3"/>
        <path d="M6 38 L-12 26 M66 38 L58 -18 M126 38 L120 -18 M186 38 L180 -18 M234 38 L252 26" stroke="#E9A9BB" stroke-width="3"/>
        <path d="M6 38 q15 14 30 0 q15 14 30 0 q15 14 30 0 q15 14 30 0 q15 14 30 0 q15 14 30 0 q15 14 30 0 q12 12 18 0"
              fill="none" stroke="${C}" stroke-width="2.5"/>
      </g>
      ${rectWindow(46, 148)}
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
      </g>`;
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
    const bubs = wp((x, y, r) => `<g transform="translate(${x} ${y})" opacity="0.32">
      <circle r="${r % 2 ? 8 : 13}" fill="none" stroke="#7FC4BD" stroke-width="2.5"/>
      <path d="M${r % 2 ? -3 : -5} ${r % 2 ? -3 : -6} a6 6 0 0 1 4 -3" stroke="#7FC4BD" stroke-width="2" fill="none" stroke-linecap="round"/></g>`,
      { y0: 128, rows: 3, dy: 112, dx: 138, stag: 69 });
    return `${defs(p, `<clipPath id="winClip"><circle cx="0" cy="0" r="82"/></clipPath>`)}
      ${wallFloor()}${board('#F6FBFA', '#C8E3DF')}
      <rect x="0" y="480" width="720" height="124" fill="#EAF6F3"/>
      <path d="M0 482 L720 482" stroke="#C8E3DF" stroke-width="3"/>
      ${tiles}
      ${fl}
      ${bubs}
      ${pool(200, 720)}
      <!-- porthole window -->
      <g transform="translate(170 210)">
        <circle cx="0" cy="0" r="96" fill="#D8F0EC" stroke="${C}" stroke-width="3"/>
        <circle cx="0" cy="0" r="82" fill="url(#skyG)" stroke="${C}" stroke-width="3"/>
        <g clip-path="url(#winClip)">
          <circle cx="-30" cy="-24" r="16" fill="#FFE29E" stroke="#F2C46F" stroke-width="3"/>
          <ellipse cx="30" cy="-6" rx="26" ry="11" fill="#FFFFFF" opacity="0.95"/>
          <path d="M-82 82 q 45 -34 90 -22 q 45 11 74 -6 l0 40 l-164 0 Z" fill="#BFE3F0" opacity="0.9"/>
        </g>
        <circle cx="0" cy="-89" r="5" fill="#FFF" stroke="${C}" stroke-width="2"/>
        <circle cx="0" cy="89" r="5" fill="#FFF" stroke="${C}" stroke-width="2"/>
        <circle cx="-89" cy="0" r="5" fill="#FFF" stroke="${C}" stroke-width="2"/>
        <circle cx="89" cy="0" r="5" fill="#FFF" stroke="${C}" stroke-width="2"/>
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
        <circle cx="80" cy="12" r="9" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2.5"/>
        <circle cx="120" cy="4" r="6" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2"/>
        <circle cx="272" cy="8" r="7" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2"/>
        <path d="M60 80 Q70 110 92 130" stroke="#E8F4F1" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.9"/>
      </g>`;
  }

  /* ════════════════ 6. STUDY NOOK ════════════════ */
  function studyScene(p) {
    return `${defs(p)}${wallFloor()}${board()}
      ${vStripes('#C9A25E', 0.1, 22, 88)}
      ${wp((x, y) => `<path transform="translate(${x} ${y}) scale(0.85)" d="${A.starPath}" fill="#C9A25E" opacity="0.3"/>`,
        { y0: 185, rows: 3, dy: 132, dx: 176, stag: 88 })}
      ${floorPlanks('#C9A87E', 0.38)}
      ${pool()}
      ${bunting(['#A7C6A0', '#F2C48D', '#E8C08A', '#BFE0F7'])}
      ${rectWindow(46, 98)}
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
      </g>`;
  }

  /* ════════════════ 7. ART STUDIO ════════════════ */
  function studioScene(p) {
    const splCols = ['#F49BB0', '#8FC1E8', '#FFD98E', '#A7E0B6', '#CBB4E8'];
    let si = 0;
    const splats = wp((x, y) => {
      const c2 = splCols[si++ % 5];
      return `<g transform="translate(${x} ${y})" opacity="0.34">
        <circle r="9" fill="${c2}"/><circle cx="11" cy="-6" r="4" fill="${c2}"/><circle cx="-10" cy="7" r="3" fill="${c2}"/></g>`;
    }, { y0: 145, rows: 3, dy: 115, dx: 140, stag: 70 });
    return `${defs(p)}${wallFloor()}${board()}
      ${floorPlanks('#C9A87E', 0.32)}
      <ellipse cx="200" cy="840" rx="60" ry="18" fill="#F49BB0" opacity="0.25"/>
      <ellipse cx="420" cy="880" rx="46" ry="14" fill="#8FC1E8" opacity="0.22"/>
      <ellipse cx="580" cy="850" rx="40" ry="13" fill="#FFD98E" opacity="0.25"/>
      ${splats}
      ${pool()}
      ${lights(['#F49BB0', '#FFD98E', '#8FC1E8', '#CBB4E8'])}
      ${rectWindow(46, 98)}
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
      </g>`;
  }

  /* ════════════════ 8. MUSIC ROOM ════════════════ */
  function musicScene(p) {
    const note = (x, y, s, op) => `<g transform="translate(${x} ${y}) scale(${s})" opacity="${op}">
      <circle cx="0" cy="10" r="6" fill="#8B92D8"/><path d="M6 10 L6 -14 L18 -18 L18 -8" stroke="#8B92D8" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="12" cy="-6" r="6" fill="#8B92D8"/></g>`;
    return `${defs(p)}${wallFloor()}${board()}
      ${wp((x, y, r) => note(x, y, r % 2 ? 0.55 : 0.7, 0.24), { y0: 140, rows: 3, dy: 122, dx: 158, stag: 79 })}
      <path d="M0 528 q30 -14 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0"
            stroke="#8B92D8" stroke-width="2.5" fill="none" opacity="0.25"/>
      <ellipse cx="380" cy="790" rx="272" ry="95" fill="#8B92D8" opacity="0.13"/>
      <ellipse cx="380" cy="790" rx="240" ry="78" fill="none" stroke="#8B92D8" stroke-width="3.5"
               opacity="0.28" stroke-dasharray="1 16" stroke-linecap="round"/>
      ${pool()}
      ${bunting(['#8B92D8', '#F9BFCE', '#BFE0F7', '#FFD98E'])}
      ${rectWindow(46, 98)}
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
      </g>`;
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
    for (let x = 36; x < 720; x += 72) gg += `<path d="M${x} 100 L${x} 596" stroke="#7BA6E8" stroke-width="2" opacity="0.10"/>`;
    for (let y = 136; y < 600; y += 72) gg += `<path d="M0 ${y} L720 ${y}" stroke="#7BA6E8" stroke-width="2" opacity="0.10"/>`;
    [[324, 208], [468, 280], [612, 172], [252, 424], [540, 460], [110, 352]].forEach(([x, y], i) => {
      gg += `<rect x="${x}" y="${y}" width="16" height="16" rx="3" fill="${['#F49BB0', '#A7E0B6', '#FFD98E', '#CBB4E8'][i % 4]}" opacity="0.42"/>`;
    });
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
      </g>`;
  }

  /* ════════════════ 10. KITTY CORNER ════════════════ */
  function catsScene(p) {
    const paw = (x, y, s, op) => `<g transform="translate(${x} ${y}) scale(${s})" opacity="${op}" fill="#E8B99B">
      <ellipse cx="0" cy="4" rx="9" ry="7"/><ellipse cx="-10" cy="-6" rx="4" ry="5"/><ellipse cx="-3" cy="-10" rx="4" ry="5"/><ellipse cx="4" cy="-10" rx="4" ry="5"/><ellipse cx="11" cy="-6" rx="4" ry="5"/></g>`;
    return `${defs(p)}${wallFloor()}${board()}${floorDots()}
      ${wp((x, y, r) => paw(x, y, r % 2 ? 0.75 : 1, 0.24), { y0: 148, rows: 3, dy: 118, dx: 148, stag: 74 })}
      ${paw(255, 715, 0.9, 0.16)}${paw(520, 855, 0.8, 0.15)}
      ${pool(240, 700, 0.2)}
      ${lights(['#F8B58E', '#F9BFCE', '#FFE9AE', '#BEE8CD'])}
      ${rectWindow(46, 98)}
      <!-- window bench -->
      <g transform="translate(60 428)">
        <rect x="18" y="24" width="16" height="176" rx="7" fill="#D9A468" stroke="${C}" stroke-width="3"/>
        <rect x="226" y="24" width="16" height="176" rx="7" fill="#D9A468" stroke="${C}" stroke-width="3"/>
        <rect x="0" y="0" width="260" height="24" rx="12" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <rect x="12" y="-10" width="236" height="16" rx="8" fill="#F8B58E" stroke="${C}" stroke-width="3"/>
        <path d="M40 -2 q6 5 12 0 M100 -2 q6 5 12 0 M160 -2 q6 5 12 0 M208 -2 q6 5 12 0" stroke="#E0955F" stroke-width="2" fill="none"/>
      </g>`;
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
      <path d="M0 480 Q 120 420 260 452 Q 420 486 540 448 Q 640 420 720 452 L720 604 L0 604 Z" fill="#D8A8B8" opacity="0.5"/>
      <path d="M0 520 Q 160 470 340 500 Q 520 528 720 492 L720 604 L0 604 Z" fill="#C08FA6" opacity="0.5"/>
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
    return `${defs(p)}${wallFloor()}${board()}
      ${hPlanks('#C97B6B', 0.15, 132, 94, 592)}
      <circle cx="184" cy="180" r="5" fill="#C97B6B" opacity="0.18"/>
      <circle cx="564" cy="276" r="5" fill="#C97B6B" opacity="0.18"/>
      <circle cx="92" cy="372" r="5" fill="#C97B6B" opacity="0.18"/>
      <circle cx="304" cy="468" r="5" fill="#C97B6B" opacity="0.18"/>
      ${floorPlanks('#C9A87E', 0.38)}
      <ellipse cx="225" cy="800" rx="175" ry="62" fill="#E88A8A" opacity="0.26"/>
      <ellipse cx="225" cy="800" rx="142" ry="47" fill="none" stroke="#FFFDF6" stroke-width="4" opacity="0.55"
               stroke-dasharray="1 14" stroke-linecap="round"/>
      ${flake(360, 170, 1, 0.8)}${flake(430, 260, 0.8, 0.6)}${flake(330, 330, 0.7, 0.6)}${flake(620, 240, 0.9, 0.7)}${flake(160, 450, 0.8, 0.55)}
      ${pool()}
      ${lights(['#E88A8A', '#FFE9AE', '#A7C6A0', '#FFE9AE'])}
      ${rectWindow(46, 98, { hill: '#F4FAFF', snow: true })}
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
      </g>`;
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
