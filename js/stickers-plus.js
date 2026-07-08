/* ============================================================
   COZY STICKER ROOM — stickers-plus.js
   Sticker pack for rooms 4–13 (60 stickers). Same format as
   art.js: each sticker = { w, h, sil, body }. Registered into
   CSR.art.stickers at the bottom.
   ============================================================ */

(() => {
  const A = CSR.art;
  const C = A.COCOA;
  const SW = 3.5;
  const o = `fill="none" stroke="${C}" stroke-width="3" stroke-linecap="round"`;

  // kawaii face (closed eyes + smile + blush), centered on (x,y)
  const F = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
    <path d="M-11 -2 q3 3.4 6 0" ${o}/>
    <path d="M5 -2 q3 3.4 6 0" ${o}/>
    <path d="M-3 4 q3 2.8 6 0" ${o}/>
    <ellipse cx="-15" cy="5" rx="4.4" ry="3" fill="#F9AFC0" opacity="0.9"/>
    <ellipse cx="15" cy="5" rx="4.4" ry="3" fill="#F9AFC0" opacity="0.9"/>
  </g>`;
  const ST = (x, y, s, fill = '#FFD98E') =>
    `<path transform="translate(${x} ${y}) scale(${s})" d="M0 -6 L1.7 -1.7 L6 0 L1.7 1.7 L0 6 L-1.7 1.7 L-6 0 L-1.7 -1.7 Z" fill="${fill}"/>`;

  Object.assign(A.stickers, {

    /* ═══════ COZY CAFÉ ═══════ */

    espresso: {
      w: 115, h: 115,
      sil: `<path d="M36 12 L78 12 Q88 12 88 20 L88 30 L92 30 Q98 30 98 38 L98 84 Q98 92 90 92 L74 92 L74 96 Q74 106 64 106 L50 106 Q40 106 40 96 L40 92 L26 92 Q18 92 18 84 L18 38 Q18 30 24 30 L26 30 L26 20 Q26 12 36 12 Z"/>`,
      body: `
        <rect x="26" y="12" width="62" height="22" rx="8" fill="#B98F7B" stroke="${C}" stroke-width="3"/>
        <rect x="18" y="32" width="80" height="58" rx="12" fill="#FFF6EE" stroke="${C}" stroke-width="${SW}"/>
        <rect x="44" y="32" width="28" height="14" rx="5" fill="#D9A468" stroke="${C}" stroke-width="2.5"/>
        <rect x="52" y="46" width="12" height="10" rx="3" fill="#8A6357"/>
        <rect x="44" y="88" width="28" height="16" rx="5" fill="#F9BFCE" stroke="${C}" stroke-width="2.5"/>
        <path d="M52 60 L52 66 M64 60 L64 66" stroke="#8FC1E8" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
        ${F(58, 74, 0.85)}
        <circle cx="28" cy="42" r="3.5" fill="#F49BB0"/>
        <circle cx="88" cy="42" r="3.5" fill="#A7E0B6"/>
        <path d="M100 16 q5 -4 2 -9" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
      `,
    },

    cakedome: {
      w: 120, h: 110,
      sil: `<path d="M14 92 A46 46 0 0 1 106 92 L110 92 Q116 92 116 97 Q116 105 106 105 L14 105 Q4 105 4 97 Q4 92 10 92 Z"/>`,
      body: `
        <rect x="38" y="66" width="44" height="24" rx="5" fill="#FFF6EE" stroke="${C}" stroke-width="2.5"/>
        <rect x="34" y="52" width="52" height="16" rx="5" fill="#F9BFCE" stroke="${C}" stroke-width="2.5"/>
        <path d="M34 60 q6 6 12 0 q6 6 12 0 q6 6 12 0 q6 6 12 0" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.9"/>
        <circle cx="60" cy="44" r="6" fill="#EE6D8A" stroke="${C}" stroke-width="2.5"/>
        <path d="M14 92 A46 46 0 0 1 106 92 Z" fill="#EAF6FF" opacity="0.45" stroke="${C}" stroke-width="3"/>
        <circle cx="60" cy="38" r="5" fill="#FFFDF6" stroke="${C}" stroke-width="2.5" opacity="0.9"/>
        <path d="M28 78 Q32 62 44 54" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" opacity="0.8"/>
        <ellipse cx="60" cy="97" rx="54" ry="7" fill="#FFF6EE" stroke="${C}" stroke-width="3"/>
      `,
    },

    cafemug: {
      w: 110, h: 100,
      sil: `<path d="M30 30 L70 30 Q80 30 80 38 L80 44 L88 40 Q100 36 102 48 Q104 62 90 66 L80 62 L80 80 Q80 88 70 88 L30 88 Q20 88 20 80 L20 38 Q20 30 30 30 Z"/>`,
      body: `
        <path d="M46 22 q4 -4 1 -9" fill="none" stroke="#B98F7B" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
        <path d="M60 24 q4 -4 1 -9" fill="none" stroke="#B98F7B" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
        <path d="M80 46 L88 43 Q97 40 98.5 49 Q100 59 90 62 L80 58 Z" fill="#F9BFCE" stroke="${C}" stroke-width="3"/>
        <rect x="20" y="30" width="60" height="58" rx="12" fill="#F9BFCE" stroke="${C}" stroke-width="${SW}"/>
        <path d="M20 42 Q50 50 80 42" fill="none" stroke="#FFFDF6" stroke-width="5" stroke-linecap="round" opacity="0.9"/>
        <path d="M50 58 c-2.6 -3.1 -7.4 -1.1 -7.4 2.4 c0 3.1 4.3 5 7.4 7.7 c3.1 -2.7 7.4 -4.6 7.4 -7.7 c0 -3.5 -4.8 -5.5 -7.4 -2.4 Z" fill="#FFFDF6"/>
        <path d="M26 74 Q50 80 74 74" fill="none" stroke="#EE8FA6" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
      `,
    },

    menuboard: {
      w: 120, h: 110,
      sil: `<path d="M55 10 Q53 2 60 2 Q67 2 65 10 L94 40 Q100 42 100 48 L100 88 Q100 98 90 98 L30 98 Q20 98 20 88 L20 48 Q20 42 26 40 Z"/>`,
      body: `
        <circle cx="60" cy="8" r="5" fill="#B98F7B" stroke="${C}" stroke-width="2.5"/>
        <path d="M58 12 L30 44 M62 12 L90 44" stroke="#D9A468" stroke-width="3" stroke-linecap="round"/>
        <rect x="20" y="42" width="80" height="56" rx="10" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <rect x="27" y="49" width="66" height="42" rx="6" fill="#5F7161" stroke="${C}" stroke-width="2.5"/>
        <path d="M35 60 h20 M35 70 h28 M35 80 h22" stroke="#FFFDF6" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>
        <path d="M74 62 L84 62 Q87 62 87 65 L87 74 Q87 79 80.5 79 Q74 79 74 74 Z" fill="#F9BFCE" stroke="#FFFDF6" stroke-width="2"/>
        <path d="M78 60 q2 -3 5 -2" stroke="#FFFDF6" stroke-width="2" stroke-linecap="round" fill="none"/>
      `,
    },

    trailplant: {
      w: 110, h: 150,
      sil: `<path d="M30 8 L80 8 Q88 8 88 16 L88 40 L92 42 Q96 44 94 50 L90 52 Q92 74 88 96 Q86 118 76 134 Q70 144 62 136 Q56 146 48 138 Q40 146 34 134 Q26 116 24 96 Q20 74 22 52 L18 50 Q16 44 20 42 L24 40 L24 16 Q24 8 30 8 Z"/>`,
      body: `
        <rect x="24" y="8" width="64" height="34" rx="10" fill="#F3AE8B" stroke="${C}" stroke-width="${SW}"/>
        <rect x="18" y="40" width="76" height="11" rx="5.5" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
        <path d="M34 54 Q30 90 40 122 M56 54 Q56 96 54 130 M78 54 Q82 90 72 124" fill="none" stroke="#58A46F" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="36" cy="70" rx="7" ry="5" transform="rotate(-24 36 70)" fill="#86CF9C" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="42" cy="100" rx="7" ry="5" transform="rotate(-30 42 100)" fill="#A7E0B6" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="40" cy="124" rx="7" ry="5" transform="rotate(-38 40 124)" fill="#6FBE8A" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="58" cy="80" rx="7" ry="5" transform="rotate(14 58 80)" fill="#A7E0B6" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="55" cy="112" rx="7" ry="5" transform="rotate(6 55 112)" fill="#86CF9C" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="55" cy="132" rx="7" ry="5" transform="rotate(20 55 132)" fill="#A7E0B6" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="76" cy="72" rx="7" ry="5" transform="rotate(28 76 72)" fill="#86CF9C" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="78" cy="102" rx="7" ry="5" transform="rotate(34 78 102)" fill="#6FBE8A" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="72" cy="122" rx="7" ry="5" transform="rotate(40 72 122)" fill="#A7E0B6" stroke="#58A46F" stroke-width="2"/>
        ${F(56, 24, 0.8)}
      `,
    },

    croissant: {
      w: 120, h: 90,
      sil: `<ellipse cx="60" cy="54" rx="57" ry="33"/>`,
      body: `
        <ellipse cx="60" cy="64" rx="52" ry="17" fill="#FFFDF6" stroke="${C}" stroke-width="3"/>
        <path d="M22 50 Q14 38 26 32 Q34 28 40 34 Q46 22 60 22 Q74 22 80 34 Q86 28 94 32 Q106 38 98 50 Q92 60 78 60 L42 60 Q28 60 22 50 Z" fill="#F2C48D" stroke="${C}" stroke-width="${SW}"/>
        <path d="M42 34 L40 58 M60 28 L60 60 M78 34 L80 58" stroke="#D9A468" stroke-width="2.5" stroke-linecap="round"/>
        ${F(60, 44, 0.75)}
      `,
    },

    /* ═══════ BUBBLE BATH ═══════ */

    ducky: {
      w: 110, h: 95,
      sil: `<path d="M10 58 Q6 44 20 40 Q30 36 40 40 Q46 20 66 16 Q88 12 96 28 Q100 36 98 42 L104 40 Q112 40 110 48 Q108 54 100 54 Q102 76 84 84 Q60 92 34 84 Q12 76 10 58 Z"/>`,
      body: `
        <path d="M14 56 Q12 46 22 44 Q30 42 36 46 Q40 52 36 58 Z" fill="#FFD98E" stroke="${C}" stroke-width="3"/>
        <ellipse cx="56" cy="62" rx="42" ry="24" fill="#FFD98E" stroke="${C}" stroke-width="${SW}"/>
        <circle cx="72" cy="36" r="22" fill="#FFD98E" stroke="${C}" stroke-width="${SW}"/>
        <path d="M92 32 Q106 32 104 42 Q102 48 92 46 Z" fill="#F8B58E" stroke="${C}" stroke-width="2.5"/>
        <path d="M62 34 q3 3.4 6 0" ${o}/>
        <path d="M78 34 q3 3.4 6 0" ${o}/>
        <ellipse cx="62" cy="44" rx="4.4" ry="3" fill="#F9AFC0" opacity="0.9"/>
        <path d="M40 62 Q52 58 56 70" fill="none" stroke="#EAB65C" stroke-width="3" stroke-linecap="round"/>
        <circle cx="30" cy="24" r="4" fill="#D8F0EC" stroke="#7FC4BD" stroke-width="2"/>
        <circle cx="42" cy="14" r="3" fill="#D8F0EC" stroke="#7FC4BD" stroke-width="2"/>
      `,
    },

    bubbles: {
      w: 110, h: 90,
      sil: `<path d="M20 62 Q6 48 18 34 Q28 22 42 28 Q46 12 62 10 Q80 8 86 24 Q100 26 102 42 Q104 58 88 64 Q84 78 66 78 Q46 80 38 70 Q26 72 20 62 Z"/>`,
      body: `
        <circle cx="62" cy="42" r="28" fill="#D8F0EC" stroke="#7FC4BD" stroke-width="3"/>
        <circle cx="30" cy="48" r="16" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2.5"/>
        <circle cx="86" cy="46" r="13" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2.5"/>
        <circle cx="48" cy="66" r="10" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2.5"/>
        <path d="M48 28 Q54 22 62 22" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" opacity="0.9"/>
        <path d="M24 40 Q26 36 30 35" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
        ${F(62, 46, 0.85)}
        ${ST(14, 22, 1, '#FFFFFF')}
        ${ST(100, 66, 0.8, '#FFFFFF')}
      `,
    },

    mirror: {
      w: 110, h: 125,
      sil: `<circle cx="55" cy="62" r="49"/>`,
      body: `
        <circle cx="55" cy="62" r="47" fill="#A8DCD6" stroke="${C}" stroke-width="${SW}"/>
        <circle cx="55" cy="62" r="36" fill="#EAF6FF" stroke="${C}" stroke-width="3"/>
        <path d="M36 52 Q42 38 56 34" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.9"/>
        <path d="M42 66 Q46 56 54 52" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
        <circle cx="55" cy="20" r="4" fill="#FFFDF6" stroke="${C}" stroke-width="2"/>
        <circle cx="55" cy="104" r="4" fill="#FFFDF6" stroke="${C}" stroke-width="2"/>
        <circle cx="13" cy="62" r="4" fill="#FFFDF6" stroke="${C}" stroke-width="2"/>
        <circle cx="97" cy="62" r="4" fill="#FFFDF6" stroke="${C}" stroke-width="2"/>
        ${ST(78, 44, 1.1, '#FFFFFF')}
      `,
    },

    potionshelf: {
      w: 150, h: 100,
      sil: `<path d="M14 72 L22 72 L22 37 Q22 29 30 29 L44 29 Q52 29 52 37 L52 72 L58 72 L58 29 Q58 21 66 21 L82 21 Q90 21 90 29 L90 72 L96 72 L96 41 Q96 33 104 33 L116 33 Q124 33 124 41 L124 72 L136 72 Q140 72 140 76 L140 82 Q140 86 136 86 L14 86 Q10 86 10 82 L10 76 Q10 72 14 72 Z"/>`,
      body: `
        <rect x="26" y="30" width="22" height="9" rx="4.5" fill="#FFF2DC" stroke="${C}" stroke-width="2.5"/>
        <rect x="24" y="37" width="26" height="35" rx="7" fill="#A8DCD6" stroke="${C}" stroke-width="3"/>
        <rect x="29" y="47" width="16" height="13" rx="3" fill="#FFFDF6"/>
        <path d="M37 51 c-1.4 -1.7 -4 -0.6 -4 1.3 c0 1.7 2.4 2.7 4 4.2 c1.6 -1.5 4 -2.5 4 -4.2 c0 -1.9 -2.6 -3 -4 -1.3 Z" fill="#7FC4BD"/>
        <rect x="62" y="22" width="24" height="9" rx="4.5" fill="#FFF2DC" stroke="${C}" stroke-width="2.5"/>
        <rect x="60" y="29" width="28" height="43" rx="8" fill="#BFE0F7" stroke="${C}" stroke-width="3"/>
        <rect x="66" y="41" width="16" height="14" rx="3" fill="#FFFDF6"/>
        <circle cx="74" cy="48" r="3" fill="#8FC1E8"/>
        <rect x="100" y="34" width="20" height="9" rx="4.5" fill="#FFF2DC" stroke="${C}" stroke-width="2.5"/>
        <rect x="98" y="41" width="24" height="31" rx="7" fill="#F9BFCE" stroke="${C}" stroke-width="3"/>
        <rect x="102" y="50" width="16" height="12" rx="3" fill="#FFFDF6"/>
        ${ST(110, 56, 0.8, '#F49BB0')}
        <rect x="10" y="72" width="130" height="14" rx="7" fill="#A8DCD6" stroke="${C}" stroke-width="${SW}"/>
        <path d="M16 79 L134 79" stroke="#7FC4BD" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
      `,
    },

    towelstack: {
      w: 120, h: 110,
      sil: `<rect x="12" y="14" width="104" height="84" rx="16"/>`,
      body: `
        <rect x="20" y="70" width="88" height="26" rx="13" fill="#BFE0F7" stroke="${C}" stroke-width="3"/>
        <circle cx="96" cy="83" r="9" fill="#D9EEFC" stroke="${C}" stroke-width="2.5"/>
        <path d="M96 78 a5 5 0 0 1 0 10" fill="none" stroke="#8FC1E8" stroke-width="2"/>
        <rect x="24" y="44" width="80" height="26" rx="13" fill="#F9BFCE" stroke="${C}" stroke-width="3"/>
        <circle cx="92" cy="57" r="9" fill="#FBD9E2" stroke="${C}" stroke-width="2.5"/>
        <path d="M92 52 a5 5 0 0 1 0 10" fill="none" stroke="#F0A9BC" stroke-width="2"/>
        <rect x="28" y="18" width="72" height="26" rx="13" fill="#FFF6EE" stroke="${C}" stroke-width="3"/>
        <circle cx="88" cy="31" r="9" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <path d="M88 26 a5 5 0 0 1 0 10" fill="none" stroke="#E8C6A8" stroke-width="2"/>
        <path d="M32 31 h28 M36 57 h28 M32 83 h28" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
      `,
    },

    bathmat: {
      w: 160, h: 92,
      sil: `<ellipse cx="80" cy="46" rx="74" ry="40"/>`,
      body: `
        <ellipse cx="80" cy="46" rx="74" ry="40" fill="#A8DCD6" stroke="${C}" stroke-width="${SW}"/>
        <ellipse cx="80" cy="46" rx="63" ry="32" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-dasharray="0.1 14" stroke-linecap="round" opacity="0.95"/>
        <ellipse cx="80" cy="46" rx="50" ry="25" fill="#D8F0EC"/>
        <circle cx="68" cy="44" r="9" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2.5"/>
        <circle cx="88" cy="38" r="6" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2.5"/>
        <circle cx="92" cy="52" r="5" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2.5"/>
      `,
    },

    /* ═══════ STUDY NOOK ═══════ */

    desklamp: {
      w: 110, h: 115,
      sil: `<path d="M24 24 Q18 14 30 10 Q58 2 66 22 Q70 34 58 40 L44 46 L58 84 Q70 86 74 94 Q78 104 66 106 L28 106 Q16 104 20 94 Q24 86 36 84 L28 50 Q18 44 24 24 Z"/>`,
      body: `
        <ellipse cx="55" cy="46" rx="26" ry="16" transform="rotate(-24 55 46)" fill="#FFE9AE" opacity="0.4"/>
        <path d="M30 48 L52 90" stroke="${C}" stroke-width="5" stroke-linecap="round"/>
        <path d="M24 96 Q24 88 34 88 L60 88 Q70 88 70 96 Q70 104 60 104 L34 104 Q24 104 24 96 Z" fill="#A7C6A0" stroke="${C}" stroke-width="3"/>
        <path d="M26 22 Q22 12 34 9 Q56 4 64 20 Q68 30 56 36 L34 44 Q26 40 26 22 Z" fill="#A7C6A0" stroke="${C}" stroke-width="${SW}"/>
        <path d="M32 18 Q38 12 48 12" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" opacity="0.6"/>
        <circle cx="52" cy="90" r="6" fill="#E8C08A" stroke="${C}" stroke-width="2.5"/>
        ${ST(80, 24, 1, '#FFD98E')}
      `,
    },

    laptop: {
      w: 130, h: 95,
      sil: `<path d="M42 8 L90 8 Q98 8 98 16 L98 56 L104 58 Q112 60 112 68 L112 76 Q112 84 102 84 L28 84 Q18 84 18 76 L18 68 Q18 60 26 58 L32 56 L32 16 Q32 8 42 8 Z"/>`,
      body: `
        <rect x="32" y="8" width="66" height="52" rx="9" fill="#CBB4E8" stroke="${C}" stroke-width="${SW}"/>
        <rect x="38" y="14" width="54" height="40" rx="6" fill="#F4EEFB"/>
        ${F(65, 34, 0.8)}
        <path d="M18 68 Q18 60 28 60 L102 60 Q112 60 112 68 L112 74 Q112 82 102 82 L28 82 Q18 82 18 74 Z" fill="#B39BD9" stroke="${C}" stroke-width="3"/>
        <rect x="52" y="66" width="26" height="8" rx="4" fill="#F4EEFB" stroke="${C}" stroke-width="2"/>
        ${ST(88, 18, 0.9, '#F9BFCE')}
      `,
    },

    corkboard: {
      w: 130, h: 110,
      sil: `<rect x="10" y="12" width="110" height="86" rx="12"/>`,
      body: `
        <rect x="10" y="12" width="110" height="86" rx="12" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <rect x="18" y="20" width="94" height="70" rx="7" fill="#F2D9AC"/>
        <rect x="26" y="28" width="34" height="40" rx="3" fill="#FFFDF6" stroke="${C}" stroke-width="2.5" transform="rotate(-5 43 48)"/>
        <circle cx="43" cy="42" r="9" fill="#FFF6EE" stroke="${C}" stroke-width="2"/>
        <path d="M39 36 l-2 -6 M47 36 l2 -6" stroke="${C}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="43" cy="28" r="3.5" fill="#F49BB0" stroke="${C}" stroke-width="1.5"/>
        <rect x="68" y="30" width="34" height="26" rx="3" fill="#BEE8CD" stroke="${C}" stroke-width="2.5" transform="rotate(4 85 43)"/>
        <path d="M80 40 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7 c0 2.2 3 3.5 5.2 5.4 c2.2 -1.9 5.2 -3.2 5.2 -5.4 c0 -2.5 -3.4 -3.9 -5.2 -1.7 Z" fill="#EE8FA6"/>
        <circle cx="85" cy="31" r="3.5" fill="#8FC1E8" stroke="${C}" stroke-width="1.5"/>
        <rect x="66" y="64" width="38" height="20" rx="3" fill="#FFFDF6" stroke="${C}" stroke-width="2.5" transform="rotate(-3 85 74)"/>
        <path d="M72 72 h24 M72 78 h16" stroke="#B8A08E" stroke-width="2" stroke-linecap="round"/>
        ${ST(32, 80, 0.9, '#FFD98E')}
      `,
    },

    calendar: {
      w: 110, h: 110,
      sil: `<rect x="12" y="14" width="86" height="88" rx="12"/>`,
      body: `
        <rect x="12" y="14" width="86" height="88" rx="12" fill="#FFFDF6" stroke="${C}" stroke-width="${SW}"/>
        <path d="M12 40 L98 40" stroke="${C}" stroke-width="2.5"/>
        <rect x="12" y="14" width="86" height="26" rx="12" fill="#F49BB0" stroke="${C}" stroke-width="${SW}"/>
        <rect x="12" y="30" width="86" height="10" fill="#F49BB0"/>
        <circle cx="34" cy="14" r="5" fill="#FFF6EE" stroke="${C}" stroke-width="2.5"/>
        <circle cx="76" cy="14" r="5" fill="#FFF6EE" stroke="${C}" stroke-width="2.5"/>
        <path d="M55 58 c-4 -4.8 -11.4 -1.7 -11.4 3.7 c0 4.8 6.6 7.7 11.4 11.9 c4.8 -4.2 11.4 -7.1 11.4 -11.9 c0 -5.4 -7.4 -8.5 -11.4 -3.7 Z" fill="#F9BFCE" stroke="${C}" stroke-width="2.5"/>
        <circle cx="28" cy="88" r="3" fill="#BEE8CD"/>
        <circle cx="44" cy="88" r="3" fill="#FFD98E"/>
        <circle cx="60" cy="88" r="3" fill="#BFE0F7"/>
        <circle cx="76" cy="88" r="3" fill="#CBB4E8"/>
      `,
    },

    globe: {
      w: 110, h: 130,
      sil: `<path d="M27 84 A42 42 0 1 1 83 84 L74 104 L86 106 Q94 108 94 114 Q94 120 86 120 L24 120 Q16 120 16 114 Q16 108 24 106 L36 104 Z"/>`,
      body: `
        <circle cx="55" cy="52" r="42" fill="#BFE0F7" stroke="${C}" stroke-width="${SW}"/>
        <path d="M30 34 Q42 26 52 32 Q60 36 54 44 Q46 50 36 46 Q26 42 30 34 Z" fill="#A7E0B6" stroke="#6FB884" stroke-width="2"/>
        <path d="M62 54 Q74 48 82 56 Q86 64 76 70 Q66 74 60 66 Q56 58 62 54 Z" fill="#A7E0B6" stroke="#6FB884" stroke-width="2"/>
        <path d="M40 66 Q48 62 52 68 Q54 74 46 76 Q38 76 40 66 Z" fill="#BEE8CD" stroke="#6FB884" stroke-width="2"/>
        <path d="M55 10 A42 42 0 0 1 55 94" fill="none" stroke="#8FC1E8" stroke-width="2" stroke-dasharray="5 6" opacity="0.7"/>
        <ellipse cx="36" cy="56" rx="4.4" ry="3" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="72" cy="34" rx="4.4" ry="3" fill="#F9AFC0" opacity="0.9"/>
        <path d="M40 104 L74 104 L84 107 Q90 109 90 113 Q90 118 82 118 L28 118 Q20 118 20 113 Q20 109 26 107 Z" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
        ${ST(84, 16, 1, '#FFD98E')}
      `,
    },

    pouf: {
      w: 130, h: 95,
      sil: `<ellipse cx="65" cy="52" rx="54" ry="37"/>`,
      body: `
        <ellipse cx="65" cy="52" rx="52" ry="35" fill="#CBB4E8" stroke="${C}" stroke-width="${SW}"/>
        <path d="M22 42 Q65 22 108 42" fill="none" stroke="#B39BD9" stroke-width="3" stroke-linecap="round"/>
        <path d="M30 68 Q65 82 100 68" fill="none" stroke="#B39BD9" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 8"/>
        <circle cx="65" cy="46" r="6" fill="#F4EEFB" stroke="${C}" stroke-width="2.5"/>
        ${ST(40, 38, 1, '#F4EEFB')}
        ${ST(92, 40, 0.8, '#F4EEFB')}
      `,
    },

    /* ═══════ ART STUDIO ═══════ */

    canvasart: {
      w: 150, h: 125,
      sil: `<rect x="10" y="12" width="130" height="100" rx="8"/>`,
      body: `
        <rect x="10" y="12" width="130" height="100" rx="8" fill="#FFFDF6" stroke="${C}" stroke-width="${SW}"/>
        <path d="M38 84 a34 34 0 0 1 68 0" fill="none" stroke="#F49BB0" stroke-width="8" stroke-linecap="round"/>
        <path d="M48 84 a24 24 0 0 1 48 0" fill="none" stroke="#FFD98E" stroke-width="8" stroke-linecap="round"/>
        <path d="M58 84 a14 14 0 0 1 28 0" fill="none" stroke="#A7D8F0" stroke-width="8" stroke-linecap="round"/>
        <circle cx="116" cy="34" r="11" fill="#FFD98E" stroke="${C}" stroke-width="2.5"/>
        <ellipse cx="34" cy="36" rx="12" ry="8" fill="#FFFFFF" stroke="${C}" stroke-width="2.5"/>
        <path d="M20 98 q8 -6 16 0 q8 6 16 0" fill="none" stroke="#A7E0B6" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M112 100 l3 -8 3 8" fill="none" stroke="#F49BB0" stroke-width="3" stroke-linecap="round"/>
      `,
    },

    palette: {
      w: 130, h: 100,
      sil: `<path d="M20 60 Q10 34 34 22 Q60 10 88 18 Q116 26 118 50 Q120 74 96 84 Q70 94 44 88 Q22 82 20 60 Z"/>`,
      body: `
        <path d="M22 60 Q13 36 35 25 Q60 13 87 21 Q114 29 116 50 Q118 72 95 82 Q70 91 45 86 Q24 80 22 60 Z" fill="#F0CD9C" stroke="${C}" stroke-width="${SW}"/>
        <ellipse cx="46" cy="62" rx="11" ry="8" fill="#FFF6EE" stroke="#D9A468" stroke-width="2"/>
        <circle cx="42" cy="36" r="7" fill="#F49BB0" stroke="${C}" stroke-width="2"/>
        <circle cx="62" cy="28" r="7" fill="#FFD98E" stroke="${C}" stroke-width="2"/>
        <circle cx="84" cy="32" r="7" fill="#A7E0B6" stroke="${C}" stroke-width="2"/>
        <circle cx="98" cy="48" r="7" fill="#8FC1E8" stroke="${C}" stroke-width="2"/>
        <circle cx="90" cy="66" r="7" fill="#CBB4E8" stroke="${C}" stroke-width="2"/>
        <path d="M30 78 L86 50" stroke="#B98F7B" stroke-width="4" stroke-linecap="round"/>
        <path d="M86 50 L96 44 Q100 42 99 47 L94 56 Z" fill="#F49BB0" stroke="${C}" stroke-width="2"/>
      `,
    },

    brushjar: {
      w: 105, h: 115,
      sil: `<path d="M30 46 L30 14 Q30 6 36 6 Q42 6 42 14 L42 46 L48 46 L48 8 Q48 0 54 0 Q60 0 60 8 L60 46 L66 46 L66 16 Q66 8 72 8 Q78 8 78 16 L78 46 L80 46 Q88 46 88 54 L88 100 Q88 110 78 110 L28 110 Q18 110 18 100 L18 54 Q18 46 26 46 Z"/>`,
      body: `
        <rect x="30" y="10" width="12" height="42" rx="5" fill="#F49BB0" stroke="${C}" stroke-width="2.5"/>
        <path d="M31 12 Q36 4 41 12 L41 20 L31 20 Z" fill="#B98F7B" stroke="${C}" stroke-width="2"/>
        <rect x="48" y="4" width="12" height="48" rx="5" fill="#8FC1E8" stroke="${C}" stroke-width="2.5"/>
        <path d="M49 6 Q54 -2 59 6 L59 14 L49 14 Z" fill="#B98F7B" stroke="${C}" stroke-width="2"/>
        <rect x="66" y="12" width="12" height="40" rx="5" fill="#A7E0B6" stroke="${C}" stroke-width="2.5"/>
        <path d="M67 14 Q72 6 77 14 L77 22 L67 22 Z" fill="#B98F7B" stroke="${C}" stroke-width="2"/>
        <rect x="18" y="46" width="70" height="62" rx="12" fill="#D9EEFC" stroke="${C}" stroke-width="${SW}"/>
        <path d="M18 60 Q53 68 88 60" fill="none" stroke="#8FC1E8" stroke-width="3" opacity="0.7"/>
        ${F(53, 82, 0.85)}
      `,
    },

    painttubes: {
      w: 140, h: 95,
      sil: `<path d="M14 74 Q14 68 20 68 L24 68 L24 32 Q24 24 32 24 L46 24 Q54 24 54 32 L54 68 L60 68 L60 22 Q60 14 68 14 L82 14 Q90 14 90 22 L90 68 L96 68 L96 30 Q96 22 104 22 L118 22 Q126 22 126 30 L126 68 L128 68 Q134 68 134 74 L134 80 Q134 86 128 86 L20 86 Q14 86 14 80 Z"/>`,
      body: `
        <rect x="28" y="18" width="22" height="10" rx="4" fill="#B98F7B" stroke="${C}" stroke-width="2"/>
        <rect x="24" y="28" width="30" height="42" rx="7" fill="#FFF6EE" stroke="${C}" stroke-width="3"/>
        <rect x="30" y="42" width="18" height="16" rx="3" fill="#F49BB0"/>
        <rect x="64" y="8" width="22" height="10" rx="4" fill="#B98F7B" stroke="${C}" stroke-width="2"/>
        <rect x="60" y="18" width="30" height="52" rx="7" fill="#FFF6EE" stroke="${C}" stroke-width="3"/>
        <rect x="66" y="36" width="18" height="16" rx="3" fill="#A7E0B6"/>
        <rect x="100" y="16" width="22" height="10" rx="4" fill="#B98F7B" stroke="${C}" stroke-width="2"/>
        <rect x="96" y="26" width="30" height="44" rx="7" fill="#FFF6EE" stroke="${C}" stroke-width="3"/>
        <rect x="102" y="42" width="18" height="16" rx="3" fill="#8FC1E8"/>
        <rect x="14" y="68" width="120" height="18" rx="9" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
      `,
    },

    swatchboard: {
      w: 130, h: 105,
      sil: `<path d="M50 14 L50 8 Q50 2 58 2 L72 2 Q80 2 80 8 L80 14 L108 14 Q118 14 118 24 L118 90 Q118 100 108 100 L22 100 Q12 100 12 90 L12 24 Q12 14 22 14 Z"/>`,
      body: `
        <rect x="12" y="14" width="106" height="86" rx="10" fill="#FFFDF6" stroke="${C}" stroke-width="${SW}"/>
        <rect x="50" y="4" width="30" height="16" rx="6" fill="#A98BD4" stroke="${C}" stroke-width="2.5"/>
        <rect x="24" y="30" width="24" height="24" rx="5" fill="#F9BFCE" stroke="${C}" stroke-width="2"/>
        <rect x="53" y="30" width="24" height="24" rx="5" fill="#FFD98E" stroke="${C}" stroke-width="2"/>
        <rect x="82" y="30" width="24" height="24" rx="5" fill="#A7E0B6" stroke="${C}" stroke-width="2"/>
        <rect x="24" y="62" width="24" height="24" rx="5" fill="#BFE0F7" stroke="${C}" stroke-width="2"/>
        <rect x="53" y="62" width="24" height="24" rx="5" fill="#CBB4E8" stroke="${C}" stroke-width="2"/>
        <rect x="82" y="62" width="24" height="24" rx="5" fill="#F8B58E" stroke="${C}" stroke-width="2"/>
      `,
    },

    paintbucket: {
      w: 110, h: 105,
      sil: `<path d="M24 38 Q22 6 55 6 Q88 6 86 38 L88 38 Q96 38 95 46 L88 96 Q87 104 78 104 L32 104 Q23 104 22 96 L15 46 Q14 38 22 38 Z"/>`,
      body: `
        <path d="M28 36 Q28 12 55 12 Q82 12 82 36" fill="none" stroke="${C}" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M18 40 L92 40 L86 94 Q85 101 77 101 L33 101 Q25 101 24 94 Z" fill="#D9EEFC" stroke="${C}" stroke-width="${SW}"/>
        <path d="M20 40 Q26 52 38 48 Q50 44 48 56 Q58 52 62 44 Q74 50 72 40 Z" fill="#F49BB0" stroke="${C}" stroke-width="2.5"/>
        <path d="M48 56 Q50 66 46 72" stroke="#F49BB0" stroke-width="5" stroke-linecap="round" fill="none"/>
        ${F(56, 78, 0.85)}
      `,
    },

    /* ═══════ MUSIC ROOM ═══════ */

    guitar: {
      w: 120, h: 170,
      sil: `<path d="M52 44 L52 10 Q52 2 60 2 L64 2 Q72 2 72 10 L72 44 Q90 48 90 70 Q90 84 78 92 Q100 100 100 126 Q100 158 60 158 Q20 158 20 126 Q20 100 42 92 Q30 84 30 70 Q30 48 52 44 Z"/>`,
      body: `
        <rect x="52" y="4" width="20" height="16" rx="6" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
        <circle cx="50" cy="8" r="3" fill="#FFD98E" stroke="${C}" stroke-width="1.5"/>
        <circle cx="50" cy="16" r="3" fill="#FFD98E" stroke="${C}" stroke-width="1.5"/>
        <circle cx="74" cy="8" r="3" fill="#FFD98E" stroke="${C}" stroke-width="1.5"/>
        <circle cx="74" cy="16" r="3" fill="#FFD98E" stroke="${C}" stroke-width="1.5"/>
        <rect x="56" y="18" width="12" height="34" fill="#B98F7B" stroke="${C}" stroke-width="2.5"/>
        <path d="M62 92 Q34 92 32 68 Q31 50 52 46 L72 46 Q93 50 92 68 Q90 92 62 92 Q96 96 97 126 Q98 155 60 155 Q22 155 23 126 Q24 96 62 92 Z" fill="#F8B58E" stroke="${C}" stroke-width="${SW}"/>
        <circle cx="61" cy="98" r="15" fill="#8A6357" stroke="${C}" stroke-width="3"/>
        <rect x="46" y="122" width="30" height="10" rx="4" fill="#E8C08A" stroke="${C}" stroke-width="2.5"/>
        <path d="M58 20 L58 122 M64 20 L64 122" stroke="#FFFDF6" stroke-width="1.6" opacity="0.9"/>
        <ellipse cx="36" cy="118" rx="5" ry="3.6" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="88" cy="118" rx="5" ry="3.6" fill="#F9AFC0" opacity="0.9"/>
      `,
    },

    boombox: {
      w: 135, h: 95,
      sil: `<path d="M26 26 L34 26 Q34 10 67 10 Q100 10 100 26 L108 26 Q118 26 118 36 L118 78 Q118 88 108 88 L26 88 Q16 88 16 78 L16 36 Q16 26 26 26 Z"/>`,
      body: `
        <path d="M38 26 Q38 14 67 14 Q96 14 96 26" fill="none" stroke="${C}" stroke-width="3.5" stroke-linecap="round"/>
        <rect x="16" y="26" width="102" height="60" rx="12" fill="#8FC1E8" stroke="${C}" stroke-width="${SW}"/>
        <circle cx="42" cy="58" r="17" fill="#D9EEFC" stroke="${C}" stroke-width="3"/>
        <circle cx="42" cy="58" r="7" fill="#5F87B5" stroke="${C}" stroke-width="2"/>
        <circle cx="92" cy="58" r="17" fill="#D9EEFC" stroke="${C}" stroke-width="3"/>
        <circle cx="92" cy="58" r="7" fill="#5F87B5" stroke="${C}" stroke-width="2"/>
        <rect x="56" y="34" width="22" height="12" rx="4" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <circle cx="63" cy="40" r="2.5" fill="#8A6357"/>
        <circle cx="71" cy="40" r="2.5" fill="#8A6357"/>
        <rect x="58" y="52" width="18" height="26" rx="5" fill="#F9BFCE" stroke="${C}" stroke-width="2.5"/>
        <path d="M63 60 q2.5 3 5 0" ${o}/>
        <path d="M64 68 q2 2.2 4 0" ${o}/>
      `,
    },

    metronome: {
      w: 95, h: 105,
      sil: `<path d="M38 8 Q47 2 56 8 L82 88 Q86 98 76 98 L18 98 Q8 98 12 88 Z"/>`,
      body: `
        <path d="M40 10 Q47 5 54 10 L79 87 Q82 95 74 95 L20 95 Q12 95 15 87 Z" fill="#F8B58E" stroke="${C}" stroke-width="${SW}"/>
        <path d="M32 34 L62 34 M27 50 L67 50 M22 66 L72 66" stroke="#E0955F" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M47 78 L60 28" stroke="${C}" stroke-width="4" stroke-linecap="round"/>
        <rect x="52" y="34" width="14" height="10" rx="4" transform="rotate(14 59 39)" fill="#FFD98E" stroke="${C}" stroke-width="2.5"/>
        <circle cx="47" cy="80" r="5" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <ellipse cx="30" cy="84" rx="4.4" ry="3" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="64" cy="84" rx="4.4" ry="3" fill="#F9AFC0" opacity="0.9"/>
      `,
    },

    headphones: {
      w: 115, h: 110,
      sil: `<path d="M20 58 Q16 18 57 16 Q98 18 94 58 Q104 60 104 74 L104 82 Q104 94 92 94 L84 94 Q74 94 74 82 L74 72 Q74 62 82 60 Q80 30 57 30 Q34 30 32 60 Q40 62 40 72 L40 82 Q40 94 30 94 L22 94 Q10 94 10 82 L10 74 Q10 60 20 58 Z"/>`,
      body: `
        <path d="M26 62 Q22 22 57 20 Q92 22 88 62" fill="none" stroke="${C}" stroke-width="7" stroke-linecap="round"/>
        <path d="M28 58 Q26 30 57 28" fill="none" stroke="#FFFDF6" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
        <rect x="12" y="60" width="30" height="32" rx="11" fill="#F49BB0" stroke="${C}" stroke-width="${SW}"/>
        <rect x="72" y="60" width="30" height="32" rx="11" fill="#F49BB0" stroke="${C}" stroke-width="${SW}"/>
        <rect x="19" y="66" width="16" height="20" rx="7" fill="#FBD9E2"/>
        <rect x="79" y="66" width="16" height="20" rx="7" fill="#FBD9E2"/>
        <path d="M52 40 c-2.2 -2.7 -6.4 -1 -6.4 2.1 c0 2.7 3.7 4.3 6.4 6.6 c2.7 -2.3 6.4 -3.9 6.4 -6.6 c0 -3.1 -4.2 -4.8 -6.4 -2.1 Z" fill="#F9BFCE"/>
      `,
    },

    vinyl: {
      w: 120, h: 120,
      sil: `<path d="M20 30 L22.5 30 A40 40 0 0 1 97.5 30 L100 30 Q106 30 106 36 L106 100 Q106 110 96 110 L24 110 Q14 110 14 100 L14 36 Q14 30 20 30 Z"/>`,
      body: `
        <circle cx="60" cy="44" r="40" fill="#5C5064" stroke="${C}" stroke-width="3"/>
        <circle cx="60" cy="44" r="30" fill="none" stroke="#786C80" stroke-width="2"/>
        <circle cx="60" cy="44" r="13" fill="#F9BFCE" stroke="${C}" stroke-width="2.5"/>
        <circle cx="60" cy="44" r="3" fill="${C}"/>
        <path d="M30 32 Q38 20 52 16" fill="none" stroke="#FFFDF6" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
        <rect x="14" y="30" width="92" height="80" rx="10" fill="#BFE0F7" stroke="${C}" stroke-width="${SW}"/>
        ${ST(60, 70, 2.2, '#FFFDF6')}
        <path d="M34 92 q5 -4 10 0 q5 4 10 0" fill="none" stroke="#8FC1E8" stroke-width="3" stroke-linecap="round"/>
        <path d="M70 92 q5 -4 10 0" fill="none" stroke="#8FC1E8" stroke-width="3" stroke-linecap="round"/>
      `,
    },

    micstand: {
      w: 110, h: 160,
      sil: `<path d="M37 24 A18 18 0 1 1 73 24 L66 42 L64 70 L58 74 L58 128 Q74 130 80 136 Q86 144 76 148 L34 148 Q24 144 30 136 Q36 130 52 128 L52 74 L46 70 L44 42 Z"/>`,
      body: `
        <circle cx="55" cy="24" r="18" fill="#CBB4E8" stroke="${C}" stroke-width="${SW}"/>
        <path d="M44 14 Q50 8 58 8" fill="none" stroke="#FFFDF6" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
        <path d="M44 40 L66 40 L62 68 L48 68 Z" fill="#B39BD9" stroke="${C}" stroke-width="3"/>
        <path d="M50 50 h10 M49 58 h12" stroke="#8F76B8" stroke-width="2" stroke-linecap="round"/>
        <rect x="51" y="68" width="8" height="62" rx="4" fill="#B8A08E" stroke="${C}" stroke-width="2.5"/>
        <path d="M32 138 Q38 132 55 132 Q72 132 78 138 Q82 143 74 145 L36 145 Q28 143 32 138 Z" fill="#B8A08E" stroke="${C}" stroke-width="3"/>
        <path d="M40 26 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7" fill="none" stroke="#F9AFC0" stroke-width="2.5" stroke-linecap="round"/>
        ${ST(84, 46, 1, '#FFD98E')}
      `,
    },

    /* ═══════ GAME DEN ═══════ */

    arcadecab: {
      w: 120, h: 170,
      sil: `<path d="M24 26 Q24 10 40 10 L80 10 Q96 10 96 26 L96 54 Q96 62 90 66 L90 148 Q90 160 78 160 L42 160 Q30 160 30 148 L30 66 Q24 62 24 54 Z"/>`,
      body: `
        <rect x="24" y="10" width="72" height="26" rx="10" fill="#F49BB0" stroke="${C}" stroke-width="${SW}"/>
        ${ST(60, 23, 1.2, '#FFFDF6')}
        <path d="M28 36 L92 36 L88 64 L32 64 Z" fill="#8FC1E8" stroke="${C}" stroke-width="3"/>
        <rect x="38" y="40" width="44" height="18" rx="4" fill="#3D3548" stroke="${C}" stroke-width="2"/>
        <path d="M56 46 h8 M58 44 v8 M58 52 v-2" stroke="#F9BFCE" stroke-width="3" stroke-linecap="round"/>
        <path d="M32 64 L88 64 L90 90 L30 90 Z" fill="#BFE0F7" stroke="${C}" stroke-width="3"/>
        <circle cx="47" cy="76" r="5" fill="${C}"/>
        <path d="M47 76 L52 68" stroke="${C}" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="52" cy="66" r="4.5" fill="#F49BB0" stroke="${C}" stroke-width="2"/>
        <circle cx="68" cy="74" r="4.5" fill="#FFD98E" stroke="${C}" stroke-width="2"/>
        <circle cx="78" cy="78" r="4.5" fill="#A7E0B6" stroke="${C}" stroke-width="2"/>
        <rect x="30" y="90" width="60" height="68" rx="10" fill="#F9BFCE" stroke="${C}" stroke-width="${SW}"/>
        <rect x="40" y="100" width="40" height="20" rx="6" fill="#FBD9E2" stroke="${C}" stroke-width="2"/>
        ${F(60, 138, 0.9)}
      `,
    },

    controller: {
      w: 125, h: 90,
      sil: `<path d="M30 22 L94 22 Q112 24 116 44 Q120 66 108 76 Q96 84 86 74 L80 66 L44 66 L38 74 Q28 84 16 76 Q4 66 8 44 Q12 24 30 22 Z"/>`,
      body: `
        <path d="M32 25 L92 25 Q108 27 112 45 Q115 64 105 72 Q96 79 88 71 L81 63 L43 63 L36 71 Q28 79 19 72 Q9 64 12 45 Q16 27 32 25 Z" fill="#BFE0F7" stroke="${C}" stroke-width="${SW}"/>
        <path d="M33 44 h16 M41 36 v16" stroke="${C}" stroke-width="5" stroke-linecap="round"/>
        <circle cx="84" cy="36" r="5" fill="#F49BB0" stroke="${C}" stroke-width="2"/>
        <circle cx="94" cy="45" r="5" fill="#FFD98E" stroke="${C}" stroke-width="2"/>
        <circle cx="84" cy="54" r="5" fill="#A7E0B6" stroke="${C}" stroke-width="2"/>
        <circle cx="74" cy="45" r="5" fill="#CBB4E8" stroke="${C}" stroke-width="2"/>
        ${F(61, 48, 0.7)}
      `,
    },

    beanbag: {
      w: 135, h: 105,
      sil: `<path d="M62 8 Q86 8 98 28 Q114 48 112 72 Q110 96 84 100 Q60 104 38 98 Q14 90 14 66 Q14 42 32 24 Q44 12 62 8 Z"/>`,
      body: `
        <path d="M62 11 Q84 11 95 30 Q110 48 108 71 Q106 93 82 97 Q60 100 40 95 Q17 88 17 66 Q17 44 34 27 Q45 15 62 11 Z" fill="#A7E0B6" stroke="${C}" stroke-width="${SW}"/>
        <path d="M40 20 Q52 30 50 44" fill="none" stroke="#86CF9C" stroke-width="3" stroke-linecap="round"/>
        <path d="M22 60 Q40 56 52 64" fill="none" stroke="#86CF9C" stroke-width="3" stroke-linecap="round" stroke-dasharray="9 8"/>
        ${ST(72, 50, 1.6, '#FFFDF6')}
        ${ST(90, 72, 1, '#FFFDF6')}
        ${ST(52, 78, 0.9, '#FFFDF6')}
      `,
    },

    handheld: {
      w: 105, h: 125,
      sil: `<rect x="16" y="10" width="74" height="106" rx="16"/>`,
      body: `
        <rect x="16" y="10" width="74" height="106" rx="16" fill="#CBB4E8" stroke="${C}" stroke-width="${SW}"/>
        <rect x="26" y="20" width="54" height="44" rx="7" fill="#E9F8EC" stroke="${C}" stroke-width="2.5"/>
        ${F(53, 42, 0.75)}
        <path d="M33 84 h14 M40 77 v14" stroke="${C}" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="68" cy="80" r="5" fill="#F49BB0" stroke="${C}" stroke-width="2"/>
        <circle cx="78" cy="88" r="5" fill="#FFD98E" stroke="${C}" stroke-width="2"/>
        <path d="M42 104 h22" stroke="#A98BD4" stroke-width="4" stroke-linecap="round"/>
        <circle cx="30" cy="106" r="2" fill="#A98BD4"/>
        <circle cx="76" cy="106" r="2" fill="#A98BD4"/>
      `,
    },

    gamestack: {
      w: 120, h: 95,
      sil: `<rect x="14" y="12" width="94" height="72" rx="10"/>`,
      body: `
        <rect x="20" y="60" width="84" height="22" rx="6" fill="#F9BFCE" stroke="${C}" stroke-width="3"/>
        <circle cx="36" cy="71" r="6" fill="#FBD9E2" stroke="${C}" stroke-width="2"/>
        <path d="M50 71 h40" stroke="#E58FAB" stroke-width="3" stroke-linecap="round"/>
        <rect x="16" y="38" width="88" height="22" rx="6" fill="#BFE0F7" stroke="${C}" stroke-width="3"/>
        ${ST(32, 49, 0.9, '#FFFDF6')}
        <path d="M46 49 h40" stroke="#8FC1E8" stroke-width="3" stroke-linecap="round"/>
        <rect x="22" y="16" width="80" height="22" rx="6" fill="#A7E0B6" stroke="${C}" stroke-width="3"/>
        <path d="M38 27 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7 c0 2.2 3 3.5 5.2 5.4 c2.2 -1.9 5.2 -3.2 5.2 -5.4 c0 -2.5 -3.4 -3.9 -5.2 -1.7 Z" fill="#FFFDF6" transform="translate(0 -6)"/>
        <path d="M52 27 h38" stroke="#6FB884" stroke-width="3" stroke-linecap="round"/>
      `,
    },

    starsign: {
      w: 120, h: 115,
      sil: `<path d="M60 12 L73 42 L105 46 L82 68 L88 100 L60 84 L32 100 L38 68 L15 46 L47 42 Z"/>`,
      body: `
        <path d="M60 4 L76 40 L114 45 L87 71 L94 109 L60 90 L26 109 L33 71 L6 45 L44 40 Z" fill="#FFE9AE" opacity="0.4"/>
        <path d="M60 14 L72 42 L102 46 L80 66 L86 96 L60 81 L34 96 L40 66 L18 46 L48 42 Z" fill="#FFD98E" stroke="${C}" stroke-width="${SW}"/>
        <path d="M60 24 L68 42 L88 45 L74 58" fill="none" stroke="#FFFDF6" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
        ${F(60, 60, 0.85)}
      `,
    },

    /* ═══════ KITTY CORNER ═══════ */

    cattree: {
      w: 150, h: 180,
      sil: `<path d="M34 46 Q34 32 48 32 L60 32 Q60 18 75 18 Q90 18 90 32 L102 32 Q116 32 116 46 Q116 58 104 60 L88 62 L88 98 L118 98 Q130 98 130 110 Q130 122 118 122 L88 124 L88 156 L122 158 Q136 160 136 170 Q136 178 124 178 L26 178 Q14 178 14 170 Q14 160 28 158 L62 156 L62 62 L46 60 Q34 58 34 46 Z"/>`,
      body: `
        <rect x="14" y="160" width="122" height="16" rx="8" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <rect x="62" y="56" width="26" height="106" fill="#F2D9AC" stroke="${C}" stroke-width="3"/>
        <path d="M62 70 h26 M62 84 h26 M62 98 h26 M62 112 h26 M62 126 h26 M62 140 h26" stroke="#D9A468" stroke-width="2.5"/>
        <rect x="84" y="98" width="44" height="20" rx="10" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
        <rect x="34" y="34" width="80" height="24" rx="12" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <rect x="42" y="24" width="64" height="18" rx="9" fill="#F9BFCE" stroke="${C}" stroke-width="3"/>
        <path d="M50 33 q6 5 12 0 M66 33 q6 5 12 0 M82 33 q6 5 12 0" stroke="#E58FAB" stroke-width="2" fill="none"/>
        <circle cx="108" cy="132" r="8" fill="#F49BB0" stroke="${C}" stroke-width="2.5"/>
        <path d="M108 118 L108 126" stroke="#B98F7B" stroke-width="2.5"/>
        ${ST(30, 76, 1.1, '#FFD98E')}
      `,
    },

    sleepycat: {
      w: 120, h: 85,
      sil: `<path d="M20 62 Q16 40 34 30 Q40 12 52 20 Q48 26 60 24 Q74 20 80 24 Q84 8 92 16 Q96 24 90 30 Q106 38 106 56 Q106 76 84 78 L32 78 Q14 76 20 62 Z"/>`,
      body: `
        <path d="M36 32 L42 16 Q44 10 49 15 L56 24 Z" fill="#F8B58E" stroke="${C}" stroke-width="3"/>
        <path d="M78 26 L84 12 Q86 6 91 11 L94 24 Z" fill="#F8B58E" stroke="${C}" stroke-width="3"/>
        <path d="M22 60 Q20 38 42 30 Q60 24 82 28 Q104 34 103 54 Q102 74 82 75 L34 75 Q18 74 22 60 Z" fill="#F8B58E" stroke="${C}" stroke-width="${SW}"/>
        <path d="M30 40 Q40 36 44 42 M56 34 Q66 30 72 36 M88 42 Q96 40 99 46" stroke="#E0955F" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M20 62 Q10 66 14 72 Q18 78 30 74" fill="#F8B58E" stroke="${C}" stroke-width="3"/>
        <path d="M52 52 q3.5 4 7 0" ${o}/>
        <path d="M72 52 q3.5 4 7 0" ${o}/>
        <path d="M62 60 q2.2 2.6 4.4 0 q2.2 2.6 4.4 0" ${o}/>
        <ellipse cx="46" cy="60" rx="5" ry="3.4" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="88" cy="60" rx="5" ry="3.4" fill="#F9AFC0" opacity="0.9"/>
        <path d="M104 30 q6 -6 2 -12" fill="none" stroke="#B8A08E" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
      `,
    },

    foodbowls: {
      w: 140, h: 80,
      sil: `<path d="M14 52 L22 52 L26 28 Q27 23 33 23 L53 23 Q59 23 60 28 L64 52 L76 52 L80 32 Q81 27 87 27 L105 27 Q111 27 112 32 L116 52 L124 52 Q130 52 130 58 L130 64 Q130 72 120 72 L18 72 Q8 72 8 64 L8 58 Q8 52 14 52 Z"/>`,
      body: `
        <path d="M26 28 Q27 25 31 25 L55 25 Q59 25 60 28 L63 50 L23 50 Z" fill="#F49BB0" stroke="${C}" stroke-width="3"/>
        <path d="M28 32 Q43 26 58 32 L58 36 Q43 30 28 36 Z" fill="#F2C48D" stroke="${C}" stroke-width="2"/>
        <path d="M38 30 l4 -4 3 4 -3 3 Z" fill="#E8A05C" stroke="${C}" stroke-width="1.5"/>
        <path d="M82 32 Q83 29 87 29 L105 29 Q109 29 110 32 L113 50 L79 50 Z" fill="#8FC1E8" stroke="${C}" stroke-width="3"/>
        <path d="M84 36 Q96 31 108 36 L108 40 Q96 35 84 40 Z" fill="#BFE0F7"/>
        <rect x="8" y="52" width="122" height="20" rx="10" fill="#FFF6EE" stroke="${C}" stroke-width="${SW}"/>
        <path d="M22 62 q4 -4 8 0 M52 62 q4 -4 8 0 M84 62 q4 -4 8 0 M112 62 q4 -4 8 0" stroke="#F0A9BC" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      `,
    },

    yarnball: {
      w: 110, h: 95,
      sil: `<circle cx="48" cy="50" r="40"/>`,
      body: `
        <path d="M86 66 Q102 70 100 80 Q98 90 84 86" fill="none" stroke="#F49BB0" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 7"/>
        <circle cx="48" cy="50" r="38" fill="#F9BFCE" stroke="${C}" stroke-width="${SW}"/>
        <path d="M14 40 Q48 22 82 40 M12 56 Q48 38 84 56 M18 70 Q48 54 78 70" fill="none" stroke="#F0A9BC" stroke-width="3" stroke-linecap="round"/>
        <path d="M30 20 Q48 40 44 86 M66 20 Q50 40 54 86" fill="none" stroke="#F0A9BC" stroke-width="3" stroke-linecap="round"/>
        ${F(48, 50, 0.8)}
      `,
    },

    pawframe: {
      w: 110, h: 110,
      sil: `<rect x="12" y="12" width="86" height="86" rx="14"/>`,
      body: `
        <rect x="12" y="12" width="86" height="86" rx="14" fill="#F0A987" stroke="${C}" stroke-width="${SW}"/>
        <rect x="22" y="22" width="66" height="66" rx="9" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <ellipse cx="55" cy="62" rx="14" ry="11" fill="#B98F7B"/>
        <ellipse cx="38" cy="46" rx="6" ry="7.5" fill="#B98F7B"/>
        <ellipse cx="50" cy="40" rx="6" ry="7.5" fill="#B98F7B"/>
        <ellipse cx="62" cy="41" rx="6" ry="7.5" fill="#B98F7B"/>
        <ellipse cx="72" cy="49" rx="5.5" ry="7" fill="#B98F7B"/>
        <path d="M30 78 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7" fill="none" stroke="#F49BB0" stroke-width="2.5" stroke-linecap="round"/>
        ${ST(80, 78, 0.9, '#FFD98E')}
      `,
    },

    fishpennant: {
      w: 130, h: 95,
      sil: `<path d="M16 12 L114 12 Q120 12 120 18 Q120 24 114 24 L108 24 Q114 34 108 48 Q102 62 96 66 Q90 62 84 48 Q78 34 84 24 L76 24 Q82 34 76 48 Q70 62 64 66 Q58 62 52 48 Q46 34 52 24 L44 24 Q50 34 44 48 Q38 62 32 66 Q26 62 20 48 Q14 34 20 24 L16 24 Q10 24 10 18 Q10 12 16 12 Z"/>`,
      body: `
        <rect x="10" y="13" width="110" height="10" rx="5" fill="#E8C08A" stroke="${C}" stroke-width="2.5"/>
        <path d="M22 24 Q28 32 24 46 Q30 58 32 62 Q36 58 40 46 Q38 32 42 24 Z" fill="#8FC1E8" stroke="${C}" stroke-width="2.5"/>
        <circle cx="32" cy="34" r="2.5" fill="${C}"/>
        <path d="M26 46 q6 4 12 0" stroke="#FFFDF6" stroke-width="2" fill="none"/>
        <path d="M54 24 Q60 32 56 46 Q62 58 64 62 Q68 58 72 46 Q70 32 74 24 Z" fill="#F9BFCE" stroke="${C}" stroke-width="2.5"/>
        <circle cx="64" cy="34" r="2.5" fill="${C}"/>
        <path d="M58 46 q6 4 12 0" stroke="#FFFDF6" stroke-width="2" fill="none"/>
        <path d="M86 24 Q92 32 88 46 Q94 58 96 62 Q100 58 104 46 Q102 32 106 24 Z" fill="#A7E0B6" stroke="${C}" stroke-width="2.5"/>
        <circle cx="96" cy="34" r="2.5" fill="${C}"/>
        <path d="M90 46 q6 4 12 0" stroke="#FFFDF6" stroke-width="2" fill="none"/>
      `,
    },

    /* ═══════ BALCONY GARDEN ═══════ */

    flowerbox: {
      w: 150, h: 95,
      sil: `<path d="M24 44 Q22 24 40 22 Q46 8 60 10 Q66 2 78 6 Q92 2 96 14 Q110 14 112 28 Q122 32 118 44 L124 46 Q130 46 129 53 L122 82 Q120 90 112 90 L38 90 Q30 90 28 82 L21 53 Q20 46 26 46 Z"/>`,
      body: `
        <circle cx="42" cy="34" r="13" fill="#F49BB0" stroke="${C}" stroke-width="2.5"/>
        <circle cx="42" cy="34" r="5" fill="#FFD98E" stroke="${C}" stroke-width="1.5"/>
        <circle cx="75" cy="22" r="13" fill="#FFD98E" stroke="${C}" stroke-width="2.5"/>
        <circle cx="75" cy="22" r="5" fill="#F49BB0" stroke="${C}" stroke-width="1.5"/>
        <circle cx="104" cy="32" r="13" fill="#CBB4E8" stroke="${C}" stroke-width="2.5"/>
        <circle cx="104" cy="32" r="5" fill="#FFFDF6" stroke="${C}" stroke-width="1.5"/>
        <ellipse cx="58" cy="40" rx="7" ry="4.5" transform="rotate(-30 58 40)" fill="#86CF9C" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="90" cy="42" rx="7" ry="4.5" transform="rotate(24 90 42)" fill="#86CF9C" stroke="#58A46F" stroke-width="2"/>
        <path d="M24 48 L126 48 L119 81 Q117 88 110 88 L40 88 Q33 88 31 81 Z" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <path d="M32 58 L118 58" stroke="#D9A468" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M62 68 c-2.2 -2.7 -6.4 -1 -6.4 2.1 c0 2.7 3.7 4.3 6.4 6.6 c2.7 -2.3 6.4 -3.9 6.4 -6.6 c0 -3.1 -4.2 -4.8 -6.4 -2.1 Z" fill="#F49BB0" opacity="0.9"/>
      `,
    },

    birdy: {
      w: 95, h: 85,
      sil: `<path d="M18 60 Q10 44 20 32 Q30 18 48 18 Q68 18 76 32 L86 40 Q92 44 86 50 L78 52 Q80 66 68 74 Q52 82 34 76 L20 82 Q12 84 16 74 Z"/>`,
      body: `
        <path d="M20 78 Q14 80 17 73 L24 62 Q30 68 28 74 Z" fill="#8FC1E8" stroke="${C}" stroke-width="2.5"/>
        <ellipse cx="48" cy="48" rx="30" ry="27" fill="#BFE0F7" stroke="${C}" stroke-width="${SW}"/>
        <path d="M40 50 Q48 42 60 48 Q56 60 44 60 Q38 56 40 50 Z" fill="#8FC1E8" stroke="${C}" stroke-width="2.5"/>
        <path d="M76 40 Q86 40 84 47 Q82 52 74 48 Z" fill="#FFD98E" stroke="${C}" stroke-width="2.5"/>
        <path d="M58 36 q3 3.4 6 0" ${o}/>
        <ellipse cx="58" cy="46" rx="4.4" ry="3" fill="#F9AFC0" opacity="0.9"/>
        <path d="M26 34 Q30 28 36 27" fill="none" stroke="#FFFDF6" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
        <path d="M42 74 v6 M54 74 v6" stroke="#E8A05C" stroke-width="2.5" stroke-linecap="round"/>
        ${ST(84, 20, 0.9, '#FFE9AE')}
      `,
    },

    windchime: {
      w: 100, h: 150,
      sil: `<path d="M47 2 Q53 2 53 8 L53 12 Q84 14 84 28 Q84 36 76 38 L76 118 Q76 126 72 126 Q68 126 68 118 L68 38 L62 38 L62 96 Q62 104 58 104 Q54 104 54 96 L54 38 L48 38 L48 112 Q48 120 44 120 Q40 120 40 112 L40 38 L34 38 L34 92 Q34 100 30 100 Q26 100 26 92 L26 38 Q16 36 16 28 Q16 14 47 12 Z"/>`,
      body: `
        <path d="M50 3 L50 12" stroke="${C}" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="50" cy="27" rx="32" ry="11" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <rect x="27" y="36" width="7" height="58" rx="3.5" fill="#BFE0F7" stroke="${C}" stroke-width="2"/>
        <rect x="41" y="36" width="7" height="78" rx="3.5" fill="#F9BFCE" stroke="${C}" stroke-width="2"/>
        <rect x="55" y="36" width="7" height="62" rx="3.5" fill="#A7E0B6" stroke="${C}" stroke-width="2"/>
        <rect x="69" y="36" width="7" height="84" rx="3.5" fill="#FFD98E" stroke="${C}" stroke-width="2"/>
        <path d="M30 92 q3 4 -1 6 M44 112 q3 4 -1 6 M58 96 q3 4 -1 6 M72 118 q3 4 -1 6" stroke="#B8A08E" stroke-width="2" fill="none" stroke-linecap="round"/>
        ${ST(20, 12, 0.9, '#FFE9AE')}
      `,
    },

    candlejar: {
      w: 100, h: 110,
      sil: `<path d="M28 24 Q28 8 50 8 Q72 8 72 24 L76 24 Q82 24 82 30 L82 36 Q82 42 78 42 L78 92 Q78 104 66 104 L34 104 Q22 104 22 92 L22 42 Q18 42 18 36 L18 30 Q18 24 24 24 Z"/>`,
      body: `
        <ellipse cx="50" cy="58" rx="42" ry="34" fill="#FFE9AE" opacity="0.35"/>
        <path d="M32 24 Q32 12 50 12 Q68 12 68 24" fill="none" stroke="${C}" stroke-width="3.5" stroke-linecap="round"/>
        <rect x="18" y="24" width="64" height="14" rx="7" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
        <path d="M22 40 L78 40 L78 90 Q78 101 67 101 L33 101 Q22 101 22 90 Z" fill="#EAF6FF" opacity="0.75" stroke="${C}" stroke-width="${SW}"/>
        <rect x="36" y="62" width="28" height="34" rx="6" fill="#FFF6EE" stroke="${C}" stroke-width="2.5"/>
        <path d="M50 60 L50 52" stroke="${C}" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M50 42 Q44 50 50 56 Q56 50 50 42 Z" fill="#FFD98E" stroke="#F2B95C" stroke-width="2"/>
        <path d="M28 52 Q32 46 38 44" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
      `,
    },

    teatable: {
      w: 130, h: 140,
      sil: `<path d="M20 44 Q30 38 44 37 L44 22 Q44 14 52 14 L60 14 Q68 14 68 22 L68 37 Q100 38 110 44 Q122 50 110 58 Q98 64 78 66 L76 118 L88 122 Q96 127 89 132 Q80 137 65 137 Q50 137 41 132 Q34 127 42 122 L54 118 L52 66 Q32 64 20 58 Q8 50 20 44 Z"/>`,
      body: `
        <path d="M46 24 Q46 17 53 17 L59 17 Q66 17 66 24 L66 40 L46 40 Z" fill="#F9E8B8" opacity="0.9" stroke="${C}" stroke-width="2.5"/>
        <path d="M46 30 L66 30" stroke="#F2B95C" stroke-width="2.5"/>
        <circle cx="56" cy="24" r="4" fill="#FFD98E" stroke="${C}" stroke-width="1.5"/>
        <path d="M66 26 q6 -2 6 4" fill="none" stroke="#86CF9C" stroke-width="2.5" stroke-linecap="round"/>
        <ellipse cx="65" cy="52" rx="52" ry="14" fill="#F9BFCE" stroke="${C}" stroke-width="${SW}"/>
        <ellipse cx="65" cy="48" rx="40" ry="9" fill="#FBD9E2"/>
        <rect x="58" y="64" width="14" height="56" rx="6" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
        <path d="M44 124 Q52 118 65 118 Q78 118 86 124 Q92 129 84 132 Q76 135 65 135 Q54 135 46 132 Q38 129 44 124 Z" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
      `,
    },

    floorcushion: {
      w: 130, h: 85,
      sil: `<ellipse cx="65" cy="46" rx="56" ry="32"/>`,
      body: `
        <ellipse cx="65" cy="46" rx="54" ry="30" fill="#F8B58E" stroke="${C}" stroke-width="${SW}"/>
        <ellipse cx="65" cy="42" rx="40" ry="18" fill="#FBCDA9"/>
        <path d="M24 56 Q65 70 106 56" fill="none" stroke="#E0955F" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 8"/>
        <circle cx="65" cy="42" r="5" fill="#FFF6EE" stroke="${C}" stroke-width="2"/>
        <path d="M40 34 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7 c0 2.2 3 3.5 5.2 5.4 c2.2 -1.9 5.2 -3.2 5.2 -5.4 c0 -2.5 -3.4 -3.9 -5.2 -1.7 Z" fill="#FFFDF6" opacity="0.85"/>
        ${ST(92, 36, 0.9, '#FFFDF6')}
      `,
    },

    /* ═══════ CAMP ═══════ */

    campfire: {
      w: 130, h: 115,
      sil: `<path d="M65 8 Q84 28 92 48 Q98 64 88 72 L106 76 Q120 80 118 92 Q116 102 102 102 L28 102 Q14 102 12 92 Q10 80 24 76 L42 72 Q32 64 38 48 Q46 28 65 8 Z"/>`,
      body: `
        <ellipse cx="65" cy="66" rx="58" ry="42" fill="#FFC169" opacity="0.28"/>
        <path d="M65 12 Q82 30 88 48 Q93 64 82 70 Q72 75 65 68 Q58 75 48 70 Q37 64 42 48 Q48 30 65 12 Z" fill="#F8A05C" stroke="${C}" stroke-width="${SW}"/>
        <path d="M65 34 Q74 44 76 54 Q77 63 70 66 Q62 68 60 60 Q54 64 52 56 Q52 44 65 34 Z" fill="#FFD98E" stroke="#F2B95C" stroke-width="2.5"/>
        ${F(65, 54, 0.8)}
        <rect x="20" y="76" width="90" height="14" rx="7" transform="rotate(-6 65 83)" fill="#B98F7B" stroke="${C}" stroke-width="3"/>
        <rect x="20" y="82" width="90" height="14" rx="7" transform="rotate(6 65 89)" fill="#A8836B" stroke="${C}" stroke-width="3"/>
        ${ST(24, 30, 1, '#FFD98E')}
        ${ST(104, 40, 0.8, '#FFD98E')}
      `,
    },

    mallowstick: {
      w: 140, h: 95,
      sil: `<path d="M14 62 Q6 56 13 49 L38 44 L38 34 Q38 26 46 26 L70 26 Q78 26 78 34 L78 42 L82 40 L82 24 Q82 16 90 16 L112 16 Q120 16 120 24 L120 48 Q120 56 112 56 L90 56 Q82 56 82 48 L82 46 L78 46 L78 58 Q78 66 70 66 L46 66 Q38 66 38 58 L38 52 L16 58 Q10 60 14 62 Z"/>`,
      body: `
        <path d="M12 56 L116 34" stroke="#B98F7B" stroke-width="5" stroke-linecap="round"/>
        <rect x="38" y="28" width="40" height="36" rx="10" fill="#FFF6EE" stroke="${C}" stroke-width="3"/>
        <path d="M40 38 Q58 32 76 38" fill="none" stroke="#F2C48D" stroke-width="3" opacity="0.8"/>
        ${F(58, 48, 0.7)}
        <rect x="82" y="18" width="36" height="36" rx="10" fill="#F9E0C8" stroke="${C}" stroke-width="3"/>
        <path d="M84 26 Q100 20 116 26" fill="none" stroke="#D9A468" stroke-width="4" opacity="0.85"/>
        <path d="M94 36 q2.5 3 5 0" ${o}/>
        <path d="M104 36 q2.5 3 5 0" ${o}/>
        <ellipse cx="92" cy="44" rx="3.4" ry="2.4" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="112" cy="44" rx="3.4" ry="2.4" fill="#F9AFC0" opacity="0.9"/>
      `,
    },

    camplantern: {
      w: 100, h: 130,
      sil: `<path d="M30 26 Q28 8 50 8 Q72 8 70 26 L74 26 Q80 26 80 32 L80 38 L84 40 Q88 42 86 48 L82 50 L82 98 Q82 106 76 108 L78 112 Q80 118 72 118 L28 118 Q20 118 22 112 L24 108 Q18 106 18 98 L18 50 L14 48 Q12 42 16 40 L20 38 L20 32 Q20 26 26 26 Z"/>`,
      body: `
        <ellipse cx="50" cy="74" rx="44" ry="36" fill="#FFE9AE" opacity="0.3"/>
        <path d="M34 24 Q34 12 50 12 Q66 12 66 24" fill="none" stroke="${C}" stroke-width="3.5" stroke-linecap="round"/>
        <rect x="20" y="26" width="60" height="12" rx="6" fill="#E88A8A" stroke="${C}" stroke-width="3"/>
        <path d="M16 42 L84 42 L80 100 Q79 106 72 106 L28 106 Q21 106 20 100 Z" fill="#EAF6FF" opacity="0.8" stroke="${C}" stroke-width="${SW}"/>
        <path d="M50 88 Q42 78 50 66 Q58 78 50 88 Z" fill="#FFD98E" stroke="#F2B95C" stroke-width="2.5"/>
        <path d="M50 66 L50 58" stroke="${C}" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="20" y="106" width="60" height="12" rx="6" fill="#E88A8A" stroke="${C}" stroke-width="3"/>
        <path d="M24 52 Q28 46 34 44" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.9"/>
        <circle cx="50" cy="32" r="3" fill="#FFFDF6" opacity="0.9"/>
      `,
    },

    starbunting: {
      w: 150, h: 95,
      sil: `<path d="M16 12 L136 12 Q142 12 142 18 Q142 24 136 24 L128 24 L116 52 Q112 58 108 52 L96 24 L84 24 L72 52 Q68 58 64 52 L52 24 L40 24 L28 52 Q24 58 20 52 L8 24 Q2 24 2 18 Q2 12 8 12 Z"/>`,
      body: `
        <rect x="4" y="13" width="136" height="10" rx="5" fill="#B98F7B" stroke="${C}" stroke-width="2.5"/>
        <path d="M10 24 L34 24 L24 50 Q22 54 20 50 Z" fill="#CBB4E8" stroke="${C}" stroke-width="2.5" stroke-linejoin="round"/>
        ${ST(23, 33, 0.9, '#FFFDF6')}
        <path d="M54 24 L78 24 L68 50 Q66 54 64 50 Z" fill="#FFD98E" stroke="${C}" stroke-width="2.5" stroke-linejoin="round"/>
        ${ST(67, 33, 0.9, '#FFFDF6')}
        <path d="M98 24 L122 24 L112 50 Q110 54 108 50 Z" fill="#A7E0B6" stroke="${C}" stroke-width="2.5" stroke-linejoin="round"/>
        ${ST(111, 33, 0.9, '#FFFDF6')}
      `,
    },

    raccoon: {
      w: 120, h: 130,
      sil: `<path d="M30 36 L34 16 Q37 8 44 13 L53 24 Q60 21 67 24 L76 13 Q83 8 86 16 L90 36 Q98 44 97 56 Q104 64 108 76 L118 82 Q126 90 118 98 Q124 110 114 118 Q100 128 74 128 L46 128 Q22 126 18 108 Q14 92 24 78 Q26 62 34 54 Q30 46 30 36 Z"/>`,
      body: `
        <path d="M96 74 Q116 76 118 90 Q120 106 104 112 L96 106 Q108 102 106 92 Q104 84 92 84 Z" fill="#B8A08E" stroke="${C}" stroke-width="3"/>
        <path d="M100 88 L108 86 M100 98 L110 98" stroke="#8A6357" stroke-width="3" stroke-linecap="round"/>
        <path d="M34 34 L38 18 Q40 12 45 17 L52 26 Z" fill="#B8A08E" stroke="${C}" stroke-width="3"/>
        <path d="M86 34 L82 18 Q80 12 75 17 L68 26 Z" fill="#B8A08E" stroke="${C}" stroke-width="3"/>
        <ellipse cx="60" cy="96" rx="38" ry="30" fill="#CBB8A8" stroke="${C}" stroke-width="${SW}"/>
        <ellipse cx="60" cy="104" rx="22" ry="16" fill="#E8DACB"/>
        <circle cx="60" cy="48" r="28" fill="#CBB8A8" stroke="${C}" stroke-width="${SW}"/>
        <path d="M36 42 Q46 36 54 42 Q56 50 48 52 Q38 52 36 42 Z" fill="#8A7767" opacity="0.85"/>
        <path d="M84 42 Q74 36 66 42 Q64 50 72 52 Q82 52 84 42 Z" fill="#8A7767" opacity="0.85"/>
        <path d="M43 44 q3 3.4 6 0" stroke="#FFFDF6" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M71 44 q3 3.4 6 0" stroke="#FFFDF6" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M57 54 h6 l-3 3.5 Z" fill="${C}"/>
        <path d="M56 60 q2 2.4 4 0 q2 2.4 4 0" ${o}/>
        <ellipse cx="38" cy="58" rx="4.6" ry="3.2" fill="#F9AFC0" opacity="0.85"/>
        <ellipse cx="82" cy="58" rx="4.6" ry="3.2" fill="#F9AFC0" opacity="0.85"/>
        <ellipse cx="42" cy="122" rx="10" ry="6" fill="#B8A08E" stroke="${C}" stroke-width="2.5"/>
        <ellipse cx="78" cy="122" rx="10" ry="6" fill="#B8A08E" stroke="${C}" stroke-width="2.5"/>
      `,
    },

    backpack: {
      w: 115, h: 125,
      sil: `<path d="M24 34 Q24 16 42 14 Q48 6 57 6 Q66 6 72 14 Q90 16 90 34 L92 36 Q98 38 98 46 L98 100 Q98 116 82 116 L32 116 Q16 116 16 100 L16 46 Q16 38 22 36 Z"/>`,
      body: `
        <path d="M44 16 Q48 9 57 9 Q66 9 70 16" fill="none" stroke="${C}" stroke-width="3.5" stroke-linecap="round"/>
        <rect x="16" y="36" width="82" height="78" rx="16" fill="#A7C6A0" stroke="${C}" stroke-width="${SW}"/>
        <path d="M24 34 Q24 18 42 16 L72 16 Q90 18 90 34 L90 48 L24 48 Z" fill="#8FB287" stroke="${C}" stroke-width="3"/>
        <rect x="46" y="42" width="22" height="12" rx="5" fill="#E8C08A" stroke="${C}" stroke-width="2.5"/>
        <rect x="30" y="66" width="54" height="40" rx="10" fill="#BFD8B8" stroke="${C}" stroke-width="3"/>
        <rect x="50" y="62" width="14" height="14" rx="5" fill="#E8C08A" stroke="${C}" stroke-width="2.5"/>
        <path d="M38 86 q3 3.4 6 0" ${o}/>
        <path d="M70 86 q3 3.4 6 0" ${o}/>
        <path d="M54 92 q3 2.8 6 0" ${o}/>
        ${ST(84, 26, 0.9, '#FFE9AE')}
      `,
    },

    /* ═══════ WINTER LODGE ═══════ */

    hearthfire: {
      w: 110, h: 100,
      sil: `<path d="M55 6 Q72 24 79 42 Q85 58 74 66 L92 70 Q104 74 102 84 Q100 92 88 92 L22 92 Q10 92 8 84 Q6 74 18 70 L36 66 Q25 58 31 42 Q38 24 55 6 Z"/>`,
      body: `
        <ellipse cx="55" cy="56" rx="52" ry="38" fill="#FFC169" opacity="0.3"/>
        <path d="M55 10 Q70 26 76 42 Q80 56 70 62 Q61 66 55 60 Q49 66 40 62 Q30 56 34 42 Q40 26 55 10 Z" fill="#F8A05C" stroke="${C}" stroke-width="${SW}"/>
        <path d="M55 28 Q63 37 65 46 Q66 54 59 56 Q52 58 51 51 Q46 54 45 47 Q45 37 55 28 Z" fill="#FFD98E" stroke="#F2B95C" stroke-width="2.5"/>
        ${F(55, 46, 0.75)}
        <rect x="14" y="68" width="82" height="13" rx="6.5" transform="rotate(-5 55 74)" fill="#B98F7B" stroke="${C}" stroke-width="3"/>
        <rect x="14" y="74" width="82" height="13" rx="6.5" transform="rotate(5 55 80)" fill="#A8836B" stroke="${C}" stroke-width="3"/>
      `,
    },

    stockings: {
      w: 120, h: 105,
      sil: `<path d="M14 14 L106 14 Q112 14 112 20 Q112 26 106 26 L96 26 L96 56 Q96 64 90 70 L76 82 Q68 88 62 80 Q58 74 64 68 L72 60 L72 26 L48 26 L48 56 Q48 64 42 70 L28 82 Q20 88 14 80 Q10 74 16 68 L24 60 L24 26 L14 26 Q8 26 8 20 Q8 14 14 14 Z"/>`,
      body: `
        <rect x="8" y="15" width="104" height="10" rx="5" fill="#E8C08A" stroke="${C}" stroke-width="2.5"/>
        <path d="M26 26 L46 26 L46 56 Q46 62 41 67 L29 78 Q23 83 18 77 Q14 72 19 67 L26 60 Z" fill="#E88A8A" stroke="${C}" stroke-width="3"/>
        <rect x="24" y="26" width="24" height="12" rx="5" fill="#FFF6EE" stroke="${C}" stroke-width="2.5"/>
        ${ST(34, 52, 1, '#FFFDF6')}
        <path d="M74 26 L94 26 L94 56 Q94 62 89 67 L77 78 Q71 83 66 77 Q62 72 67 67 L74 60 Z" fill="#A7C6A0" stroke="${C}" stroke-width="3"/>
        <rect x="72" y="26" width="24" height="12" rx="5" fill="#FFF6EE" stroke="${C}" stroke-width="2.5"/>
        <path d="M84 48 c-2 -2.4 -5.8 -0.9 -5.8 1.9 c0 2.4 3.4 3.9 5.8 6 c2.4 -2.1 5.8 -3.6 5.8 -6 c0 -2.8 -3.8 -4.3 -5.8 -1.9 Z" fill="#FFFDF6"/>
      `,
    },

    cocoamug: {
      w: 100, h: 100,
      sil: `<path d="M28 34 Q28 22 40 26 Q44 14 54 18 Q60 8 68 16 Q76 12 78 24 Q86 26 84 36 L84 40 L90 38 Q100 36 101 46 Q102 58 90 62 L84 60 L84 78 Q84 88 72 88 L36 88 Q24 88 24 78 L24 40 Q24 36 28 34 Z"/>`,
      body: `
        <path d="M42 12 q4 -4 1 -9" fill="none" stroke="#B8A08E" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
        <path d="M84 44 L90 42 Q97 40 98 47 Q99 56 90 58 L84 54 Z" fill="#E88A8A" stroke="${C}" stroke-width="3"/>
        <path d="M28 36 Q30 26 40 28 Q42 18 52 21 Q58 12 66 18 Q74 16 76 26 Q84 28 81 38 L80 42 L28 42 Z" fill="#FFF6EE" stroke="${C}" stroke-width="3"/>
        <rect x="38" y="26" width="9" height="9" rx="3" fill="#FFFDF6" stroke="#E8C6A8" stroke-width="2"/>
        <rect x="54" y="22" width="9" height="9" rx="3" fill="#FFFDF6" stroke="#E8C6A8" stroke-width="2"/>
        <rect x="24" y="40" width="60" height="48" rx="11" fill="#E88A8A" stroke="${C}" stroke-width="${SW}"/>
        <path d="M54 60 c-2.6 -3.1 -7.4 -1.1 -7.4 2.4 c0 3.1 4.3 5 7.4 7.7 c3.1 -2.7 7.4 -4.6 7.4 -7.7 c0 -3.5 -4.8 -5.5 -7.4 -2.4 Z" fill="#FFFDF6"/>
        <path d="M30 76 Q54 82 78 76" fill="none" stroke="#D07070" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
      `,
    },

    snowglobe: {
      w: 100, h: 110,
      sil: `<path d="M14 80 L29.5 80 A38 38 0 1 1 70.5 80 L86 80 L84 92 Q83 99 76 99 L24 99 Q17 99 16 92 Z"/>`,
      body: `
        <circle cx="50" cy="48" r="38" fill="#EAF6FF" stroke="${C}" stroke-width="${SW}"/>
        <path d="M50 26 L62 46 L56 46 L66 62 L34 62 L44 46 L38 46 Z" fill="#86CF9C" stroke="#58A46F" stroke-width="2.5" stroke-linejoin="round"/>
        <rect x="46" y="62" width="8" height="8" fill="#B98F7B" stroke="${C}" stroke-width="2"/>
        <ellipse cx="50" cy="72" rx="24" ry="6" fill="#FFFDF6"/>
        <circle cx="30" cy="34" r="2.5" fill="#FFFFFF"/>
        <circle cx="66" cy="28" r="2.5" fill="#FFFFFF"/>
        <circle cx="70" cy="48" r="2.5" fill="#FFFFFF"/>
        <circle cx="28" cy="52" r="2.5" fill="#FFFFFF"/>
        <circle cx="58" cy="18" r="2.5" fill="#FFFFFF"/>
        <path d="M24 34 Q28 24 38 18" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" opacity="0.9"/>
        <path d="M14 80 L86 80 L84 92 Q83 99 76 99 L24 99 Q17 99 16 92 Z" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
        <path d="M46 88 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7 c0 2.2 3 3.5 5.2 5.4 c2.2 -1.9 5.2 -3.2 5.2 -5.4 c0 -2.5 -3.4 -3.9 -5.2 -1.7 Z" fill="#E88A8A" transform="translate(4 -3)"/>
      `,
    },

    wreath: {
      w: 115, h: 115,
      sil: `<circle cx="57" cy="52" r="47"/>`,
      body: `
        <circle cx="57" cy="52" r="38" fill="none" stroke="#7FB98B" stroke-width="18"/>
        <circle cx="57" cy="52" r="38" fill="none" stroke="#58A46F" stroke-width="3" stroke-dasharray="10 8" opacity="0.6"/>
        <ellipse cx="57" cy="14" rx="8" ry="5" fill="#A7E0B6" stroke="#58A46F" stroke-width="2" transform="rotate(20 57 14)"/>
        <ellipse cx="92" cy="36" rx="8" ry="5" fill="#86CF9C" stroke="#58A46F" stroke-width="2" transform="rotate(60 92 36)"/>
        <ellipse cx="22" cy="36" rx="8" ry="5" fill="#86CF9C" stroke="#58A46F" stroke-width="2" transform="rotate(-60 22 36)"/>
        <ellipse cx="92" cy="70" rx="8" ry="5" fill="#A7E0B6" stroke="#58A46F" stroke-width="2" transform="rotate(120 92 70)"/>
        <ellipse cx="22" cy="70" rx="8" ry="5" fill="#A7E0B6" stroke="#58A46F" stroke-width="2" transform="rotate(-120 22 70)"/>
        <circle cx="38" cy="22" r="4" fill="#E88A8A" stroke="${C}" stroke-width="1.5"/>
        <circle cx="80" cy="24" r="4" fill="#E88A8A" stroke="${C}" stroke-width="1.5"/>
        <circle cx="94" cy="54" r="4" fill="#E88A8A" stroke="${C}" stroke-width="1.5"/>
        <circle cx="20" cy="54" r="4" fill="#E88A8A" stroke="${C}" stroke-width="1.5"/>
        <path d="M57 86 l-10 -6 q-8 -4 -8 4 q0 8 8 6 Z M57 86 l10 -6 q8 -4 8 4 q0 8 -8 6 Z" fill="#E88A8A" stroke="${C}" stroke-width="2.5"/>
        <circle cx="57" cy="86" r="5" fill="#F0A3A3" stroke="${C}" stroke-width="2"/>
      `,
    },

    blanketbasket: {
      w: 120, h: 115,
      sil: `<path d="M26 52 L26 40 Q26 32 34 32 Q34 20 46 20 Q56 20 56 30 L56 32 L60 32 Q60 18 72 18 Q84 18 84 30 L84 34 Q92 36 92 44 L92 52 L96 52 Q100 52 100 56 L100 60 Q100 64 96 64 L94 64 L88 104 Q86 112 78 112 L42 112 Q34 112 32 104 L26 64 L24 64 Q20 64 20 60 L20 56 Q20 52 24 52 Z"/>`,
      body: `
        <rect x="30" y="22" width="24" height="30" rx="11" fill="#E88A8A" stroke="${C}" stroke-width="3"/>
        <circle cx="42" cy="30" r="6" fill="#F0A3A3" stroke="${C}" stroke-width="2"/>
        <rect x="62" y="20" width="20" height="32" rx="9" fill="#A7C6A0" stroke="${C}" stroke-width="3"/>
        <path d="M64 28 h16 M64 36 h16" stroke="#8FB287" stroke-width="2.5"/>
        <rect x="24" y="52" width="72" height="12" rx="6" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
        <path d="M28 64 h64 l-5.5 38 a8 8 0 0 1 -8 7 h-37 a8 8 0 0 1 -8 -7 Z" fill="#F0CD9C" stroke="${C}" stroke-width="${SW}"/>
        <path d="M32 76 Q60 82 88 76" fill="none" stroke="#D9A468" stroke-width="3" stroke-dasharray="9 8" stroke-linecap="round"/>
        <path d="M35 92 Q60 97 85 92" fill="none" stroke="#D9A468" stroke-width="3" stroke-dasharray="9 8" stroke-linecap="round"/>
      `,
    },

    /* ════════ ROOM FILLER PACK (2 extra stickers per room) ════════ */

    /* ---- bedroom: crescent moon night-light ---- */
    moonlight: {
      w: 100, h: 110,
      sil: `<path d="M34 12 Q10 30 10 55 Q10 84 34 100 Q50 110 68 104 Q46 92 40 72 Q34 48 46 28 Q54 14 70 8 Q50 0 34 12 Z"/>`,
      body: `
        <ellipse cx="38" cy="55" rx="44" ry="50" fill="#FFE9AE" opacity="0.3"/>
        <path d="M36 14 Q14 32 14 55 Q14 82 36 96 Q48 104 62 100 Q44 88 38 70 Q32 48 43 29 Q50 17 63 12 Q48 4 36 14 Z"
              fill="#FFD98E" stroke="${C}" stroke-width="${SW}"/>
        <path d="M26 42 q3 3.4 6 0" ${o}/>
        <path d="M26 60 q3 2.8 6 0" transform="translate(2 0)" ${o}/>
        <ellipse cx="22" cy="52" rx="4" ry="2.8" fill="#F9AFC0" opacity="0.9"/>
        ${ST(78, 28, 1, '#FFE9AE')}
        ${ST(84, 72, 0.75, '#FFE9AE')}
      `,
    },

    /* ---- bedroom: bunny slippers ---- */
    slippers: {
      w: 125, h: 75,
      sil: `<path d="M16 36 Q16 14 38 13 L48 13 Q66 14 66 34 Q66 38 64 41 Q68 32 78 31 L88 31 Q106 32 106 52 Q106 70 88 71 L74 71 Q62 70 60 60 Q56 68 44 69 L34 69 Q16 68 16 46 Z"/>`,
      body: `
        <ellipse cx="41" cy="41" rx="24" ry="26" fill="#F9BFCE" stroke="${C}" stroke-width="3"/>
        <path d="M20 34 Q26 18 41 18 Q56 18 62 34 Q54 44 41 44 Q28 44 20 34 Z" fill="#FBD9E2" stroke="${C}" stroke-width="2.5"/>
        <path d="M37 30 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7 c0 2.2 3 3.5 5.2 5.4 c2.2 -1.9 5.2 -3.2 5.2 -5.4 c0 -2.5 -3.4 -3.9 -5.2 -1.7 Z" fill="#EE8FA6" transform="translate(4 0)"/>
        <ellipse cx="82" cy="52" rx="22" ry="17" fill="#F9BFCE" stroke="${C}" stroke-width="3"/>
        <path d="M63 47 Q68 34 82 34 Q96 34 101 47 Q94 55 82 55 Q70 55 63 47 Z" fill="#FBD9E2" stroke="${C}" stroke-width="2.5"/>
        <circle cx="82" cy="45" r="3" fill="#EE8FA6"/>
      `,
    },

    /* ---- kitchen: crate of apples ---- */
    fruitcrate: {
      w: 120, h: 95,
      sil: `<path d="M20 34 Q20 24 30 24 Q32 12 44 12 Q54 12 56 22 Q60 18 66 20 Q68 10 80 10 Q92 10 94 22 L96 24 Q106 24 106 34 L110 34 Q116 34 115 41 L108 84 Q106 92 98 92 L28 92 Q20 92 18 84 L11 41 Q10 34 16 34 Z"/>`,
      body: `
        <circle cx="42" cy="28" r="15" fill="#F98D8D" stroke="${C}" stroke-width="3"/>
        <path d="M42 15 q0.5 -5 4 -6" fill="none" stroke="${C}" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="64" cy="24" r="13" fill="#FFB26B" stroke="${C}" stroke-width="3"/>
        <circle cx="86" cy="27" r="14" fill="#F98D8D" stroke="${C}" stroke-width="3"/>
        <ellipse cx="92" cy="14" rx="5" ry="3" transform="rotate(-24 92 14)" fill="#86CF9C" stroke="#58A46F" stroke-width="1.8"/>
        <path d="M16 36 L110 36 L103 82 Q102 89 95 89 L31 89 Q24 89 23 82 Z" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <path d="M22 52 L104 52 M25 68 L101 68" stroke="#D9A468" stroke-width="3" stroke-linecap="round"/>
        <path d="M63 42 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7 c0 2.2 3 3.5 5.2 5.4 c2.2 -1.9 5.2 -3.2 5.2 -5.4 c0 -2.5 -3.4 -3.9 -5.2 -1.7 Z" fill="#B9743F" opacity="0.6"/>
      `,
    },

    /* ---- kitchen: wall rack with mugs ---- */
    mugrack: {
      w: 130, h: 85,
      sil: `<path d="M14 12 L116 12 Q124 12 124 20 L124 28 Q124 36 116 36 L106 36 L106 40 Q112 40 112 48 L112 64 Q112 74 102 74 L78 74 Q68 74 68 64 L68 48 Q68 40 74 40 L74 36 L60 36 L60 42 Q66 42 66 50 L66 66 Q66 76 56 76 L32 76 Q22 76 22 66 L22 50 Q22 42 28 42 L28 36 L14 36 Q6 36 6 28 L6 20 Q6 12 14 12 Z"/>`,
      body: `
        <rect x="6" y="12" width="118" height="24" rx="8" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <circle cx="42" cy="38" r="3" fill="#B98F7B" stroke="${C}" stroke-width="1.5"/>
        <circle cx="88" cy="38" r="3" fill="#B98F7B" stroke="${C}" stroke-width="1.5"/>
        <rect x="22" y="44" width="42" height="30" rx="8" fill="#BFE0F7" stroke="${C}" stroke-width="3"/>
        <path d="M64 52 q8 -2 8 6 q0 8 -8 6" fill="none" stroke="${C}" stroke-width="3"/>
        ${ST(43, 59, 0.8, '#FFFDF6')}
        <rect x="68" y="42" width="42" height="30" rx="8" fill="#F9BFCE" stroke="${C}" stroke-width="3"/>
        <path d="M110 50 q8 -2 8 6 q0 8 -8 6" fill="none" stroke="${C}" stroke-width="3"/>
        <path d="M89 52 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7 c0 2.2 3 3.5 5.2 5.4 c2.2 -1.9 5.2 -3.2 5.2 -5.4 c0 -2.5 -3.4 -3.9 -5.2 -1.7 Z" fill="#FFFDF6"/>
      `,
    },

    /* ---- nook: garden gnome ---- */
    gnome: {
      w: 95, h: 125,
      sil: `<path d="M48 4 Q58 4 60 14 L72 60 Q88 66 90 84 Q92 106 72 114 Q60 119 48 119 Q36 119 24 114 Q4 106 6 84 Q8 66 24 60 L36 14 Q38 4 48 4 Z"/>`,
      body: `
        <path d="M48 6 Q56 6 58 14 L70 60 L26 60 L38 14 Q40 6 48 6 Z" fill="#E88A8A" stroke="${C}" stroke-width="${SW}"/>
        ${ST(48, 32, 0.9, '#FFE9AE')}
        <path d="M26 60 Q10 70 12 90 Q14 108 34 112 Q48 116 62 112 Q82 108 84 90 Q86 70 70 60 Q60 74 48 74 Q36 74 26 60 Z"
              fill="#FFFDF6" stroke="${C}" stroke-width="${SW}"/>
        <circle cx="48" cy="64" r="8" fill="#F8C3A4" stroke="${C}" stroke-width="2.5"/>
        <ellipse cx="36" cy="66" rx="4" ry="2.8" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="60" cy="66" rx="4" ry="2.8" fill="#F9AFC0" opacity="0.9"/>
        <path d="M40 92 Q48 98 56 92" fill="none" stroke="#E8D5C0" stroke-width="2.5" stroke-linecap="round"/>
        <ellipse cx="36" cy="114" rx="9" ry="5" fill="#B98F7B" stroke="${C}" stroke-width="2.5"/>
        <ellipse cx="60" cy="114" rx="9" ry="5" fill="#B98F7B" stroke="${C}" stroke-width="2.5"/>
      `,
    },

    /* ---- nook: birdhouse ---- */
    birdhouse: {
      w: 100, h: 115,
      sil: `<path d="M46 6 Q50 3 54 6 L92 38 Q97 43 91 47 L88 47 L88 94 Q88 104 78 104 L22 104 Q12 104 12 94 L12 47 L9 47 Q3 43 8 38 Z"/>`,
      body: `
        <rect x="16" y="46" width="68" height="54" rx="8" fill="#F6D9AF" stroke="${C}" stroke-width="${SW}"/>
        <path d="M8 42 L50 8 L92 42 Q94 46 88 46 L12 46 Q6 46 8 42 Z" fill="#E88A8A" stroke="${C}" stroke-width="${SW}"/>
        <circle cx="50" cy="70" r="13" fill="#6E5147" stroke="${C}" stroke-width="3"/>
        <path d="M42 70 a8 8 0 0 1 16 0 Z" fill="#BFE0F7" stroke="${C}" stroke-width="2"/>
        <path d="M48 66 q2 2.4 4 0" stroke="#FFFDF6" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M50 83 v9" stroke="${C}" stroke-width="3" stroke-linecap="round"/>
        <circle cx="50" cy="94" r="3" fill="#E8C08A" stroke="${C}" stroke-width="2"/>
        <path d="M24 56 c-1.6 -1.9 -4.6 -0.7 -4.6 1.5" fill="none" stroke="#F9AFC0" stroke-width="2.5" stroke-linecap="round"/>
      `,
    },

    /* ---- café: takeaway cup tower ---- */
    cupstack: {
      w: 95, h: 105,
      sil: `<path d="M34 10 L62 10 Q70 10 69 18 L67 32 L72 32 Q80 32 79 40 L77 54 L82 54 Q90 54 89 62 L85 92 Q84 100 76 100 L20 100 Q12 100 11 92 L7 62 Q6 54 14 54 L19 54 L17 40 Q16 32 24 32 L29 32 L27 18 Q26 10 34 10 Z"/>`,
      body: `
        <path d="M30 12 h36 l-3 22 h-30 Z" fill="#F9BFCE" stroke="${C}" stroke-width="3"/>
        <path d="M28 22 h40" stroke="#E58FAB" stroke-width="2.5"/>
        <path d="M22 36 h52 l-3 20 h-46 Z" fill="#BFE0F7" stroke="${C}" stroke-width="3"/>
        ${ST(48, 46, 0.8, '#FFFDF6')}
        <path d="M12 58 h72 l-4 34 Q79 97 74 97 h-52 Q17 97 16 92 Z" fill="#A7E0B6" stroke="${C}" stroke-width="${SW}"/>
        <path d="M45 70 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7 c0 2.2 3 3.5 5.2 5.4 c2.2 -1.9 5.2 -3.2 5.2 -5.4 c0 -2.5 -3.4 -3.9 -5.2 -1.7 Z" fill="#FFFDF6" transform="translate(3 0)"/>
        <path d="M14 64 h68" stroke="#6FB884" stroke-width="2.5" opacity="0.7"/>
      `,
    },

    /* ---- café: framed latte print ---- */
    latteart: {
      w: 100, h: 115,
      sil: `<rect x="10" y="12" width="80" height="92" rx="10"/>`,
      body: `
        <rect x="10" y="12" width="80" height="92" rx="10" fill="#D9A468" stroke="${C}" stroke-width="${SW}"/>
        <rect x="18" y="20" width="64" height="76" rx="6" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <path d="M30 56 Q30 48 38 48 L62 48 Q70 48 70 56 Q70 74 50 76 Q30 74 30 56 Z" fill="#F6D9AF" stroke="${C}" stroke-width="2.5"/>
        <path d="M70 52 q7 -1 7 5 q0 6 -7 5" fill="none" stroke="${C}" stroke-width="2.5"/>
        <path d="M50 52 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7 c0 2.2 3 3.5 5.2 5.4 c2.2 -1.9 5.2 -3.2 5.2 -5.4 c0 -2.5 -3.4 -3.9 -5.2 -1.7 Z" fill="#FFFDF6"/>
        <path d="M42 40 q3 -4 1 -8 M56 40 q3 -4 1 -8" stroke="#B98F7B" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
        <rect x="34" y="6" width="32" height="12" rx="3" transform="rotate(-3 50 12)" fill="#BEE8CD" opacity="0.92"/>
      `,
    },

    /* ---- bath: towel ring ---- */
    towelring: {
      w: 95, h: 115,
      sil: `<path d="M30 10 Q48 2 66 10 Q80 18 76 34 Q72 44 62 46 L66 46 L66 52 Q78 54 78 66 L78 94 Q78 106 66 106 L30 106 Q18 106 18 94 L18 66 Q18 54 30 52 L30 46 Q24 44 20 34 Q16 18 30 10 Z"/>`,
      body: `
        <circle cx="48" cy="28" r="20" fill="none" stroke="#E8C08A" stroke-width="7"/>
        <circle cx="48" cy="28" r="20" fill="none" stroke="${C}" stroke-width="2" opacity="0.4"/>
        <circle cx="48" cy="8" r="5" fill="#FFF2DC" stroke="${C}" stroke-width="2.5"/>
        <rect x="22" y="50" width="52" height="54" rx="9" fill="#BFE0F7" stroke="${C}" stroke-width="${SW}"/>
        <path d="M22 62 L74 62" stroke="#8FC1E8" stroke-width="3"/>
        <path d="M28 78 h40 M28 88 h40" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
        <path d="M24 102 q6 5 12 0 q6 5 12 0 q6 5 12 0 q6 5 12 0" fill="none" stroke="#8FC1E8" stroke-width="2.5"/>
      `,
    },

    /* ---- bath: octopus buddy ---- */
    octo: {
      w: 105, h: 90,
      sil: `<path d="M52 6 Q84 6 88 38 Q90 52 82 60 Q88 64 86 72 Q83 80 74 78 Q76 84 68 86 Q60 88 56 82 Q50 88 42 86 Q34 84 36 76 Q26 80 22 72 Q19 64 26 58 Q16 50 17 38 Q20 6 52 6 Z"/>`,
      body: `
        <ellipse cx="52" cy="40" rx="34" ry="32" fill="#CBB4E8" stroke="${C}" stroke-width="${SW}"/>
        <path d="M26 62 q-4 8 4 12 M42 70 q-2 8 6 10 M62 70 q2 8 -6 10 M78 62 q4 8 -4 12"
              fill="none" stroke="#B39BD9" stroke-width="7" stroke-linecap="round"/>
        ${F(52, 44, 0.9)}
        <path d="M30 24 Q36 16 46 14" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" opacity="0.6"/>
        <circle cx="90" cy="18" r="5" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2"/>
        <circle cx="98" cy="30" r="3.5" fill="#EAF6FF" stroke="#7FC4BD" stroke-width="2"/>
      `,
    },

    /* ---- study: rolling desk chair ---- */
    deskchair: {
      w: 110, h: 140,
      sil: `<path d="M30 14 Q30 4 40 4 L70 4 Q80 4 80 14 L80 46 Q80 56 70 56 L60 56 L60 64 Q78 64 82 70 Q86 78 78 82 L60 84 L60 104 Q76 106 82 112 Q88 120 78 124 L32 124 Q22 120 28 112 Q34 106 50 104 L50 84 L32 82 Q24 78 28 70 Q32 64 50 64 L50 56 L40 56 Q30 56 30 46 Z"/>`,
      body: `
        <rect x="30" y="4" width="50" height="52" rx="12" fill="#A7C6A0" stroke="${C}" stroke-width="${SW}"/>
        <rect x="38" y="12" width="34" height="36" rx="8" fill="#BFD8B8"/>
        <path d="M46 30 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7 c0 2.2 3 3.5 5.2 5.4 c2.2 -1.9 5.2 -3.2 5.2 -5.4 c0 -2.5 -3.4 -3.9 -5.2 -1.7 Z" fill="#FFFDF6" transform="translate(9 -2)"/>
        <ellipse cx="55" cy="72" rx="26" ry="11" fill="#A7C6A0" stroke="${C}" stroke-width="3"/>
        <rect x="50" y="80" width="10" height="28" rx="5" fill="#B8A08E" stroke="${C}" stroke-width="2.5"/>
        <path d="M30 116 Q38 108 55 108 Q72 108 80 116 Q85 121 77 122 L33 122 Q25 121 30 116 Z" fill="#B8A08E" stroke="${C}" stroke-width="3"/>
        <circle cx="34" cy="124" r="4" fill="#8A6357" stroke="${C}" stroke-width="2"/>
        <circle cx="76" cy="124" r="4" fill="#8A6357" stroke="${C}" stroke-width="2"/>
      `,
    },

    /* ---- study: paper bin ---- */
    wastebasket: {
      w: 90, h: 100,
      sil: `<path d="M34 8 Q46 0 56 8 Q64 14 60 24 L70 24 Q78 24 77 32 L70 88 Q69 96 61 96 L29 96 Q21 96 20 88 L13 32 Q12 24 20 24 L30 24 Q26 14 34 8 Z"/>`,
      body: `
        <circle cx="45" cy="17" r="12" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <path d="M38 14 l6 4 M46 12 l-3 7 M48 20 l4 -3" stroke="#D9C6AC" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M16 28 h58 l-6 58 Q67 93 60 93 h-30 Q23 93 22 86 Z" fill="#8FC1E8" stroke="${C}" stroke-width="${SW}"/>
        <path d="M28 34 L31 88 M45 34 L45 88 M62 34 L59 88" stroke="#6FA3D4" stroke-width="2.5" opacity="0.7"/>
        <circle cx="61" cy="28" r="8" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
      `,
    },

    /* ---- studio: rolled canvases ---- */
    canvasroll: {
      w: 115, h: 95,
      sil: `<path d="M40 26 L76 26 Q90 26 90 40 L90 44 L98 44 Q112 44 112 58 L112 70 Q112 84 98 84 L18 84 Q4 84 4 70 L4 58 Q4 44 18 44 L26 44 L26 40 Q26 26 40 26 Z"/>`,
      body: `
        <rect x="26" y="26" width="64" height="28" rx="14" fill="#FFFDF6" stroke="${C}" stroke-width="3"/>
        <circle cx="78" cy="40" r="9" fill="#F6E9D8" stroke="${C}" stroke-width="2.5"/>
        <path d="M78 40 a4 4 0 0 1 4 -4" stroke="#D9C6AC" stroke-width="2" fill="none"/>
        <rect x="4" y="44" width="58" height="40" rx="14" fill="#FFF6EE" stroke="${C}" stroke-width="3"/>
        <circle cx="50" cy="64" r="11" fill="#F6E9D8" stroke="${C}" stroke-width="2.5"/>
        <rect x="54" y="44" width="58" height="40" rx="14" fill="#FFFDF6" stroke="${C}" stroke-width="3"/>
        <circle cx="100" cy="64" r="11" fill="#F6E9D8" stroke="${C}" stroke-width="2.5"/>
        <path d="M34 30 L30 82" stroke="#F49BB0" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 7"/>
        <path d="M20 60 q3 3.4 6 0" ${o}/>
      `,
    },

    /* ---- studio: award rosette ---- */
    ribbon: {
      w: 95, h: 125,
      sil: `<path d="M22 68 Q10 60 10 42 Q10 16 34 8 Q60 0 78 18 Q92 32 84 56 Q80 66 72 70 L80 108 Q81 116 73 114 L60 106 L54 116 Q50 122 44 116 L38 106 L26 114 Q18 116 19 108 L26 70 Q24 70 22 68 Z"/>`,
      body: `
        <path d="M34 70 L26 108 L40 100 L48 112 L56 100 L70 108 L62 70 Z" fill="#F49BB0" stroke="${C}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="48" cy="40" r="32" fill="#F49BB0" stroke="${C}" stroke-width="${SW}"/>
        <path d="M48 8 L48 16 M70 14 L65 21 M82 34 L74 37 M82 48 L74 45 M26 14 L31 21 M14 34 L22 37 M14 48 L22 45" stroke="#E58FAB" stroke-width="3" stroke-linecap="round"/>
        <circle cx="48" cy="40" r="19" fill="#FBD9E2" stroke="${C}" stroke-width="2.5"/>
        ${ST(48, 40, 1.4, '#FFD98E')}
      `,
    },

    /* ---- music: little amp ---- */
    amp: {
      w: 115, h: 100,
      sil: `<path d="M28 22 L36 22 Q36 8 57 8 Q78 8 78 22 L86 22 Q98 22 98 34 L98 80 Q98 92 86 92 L28 92 Q16 92 16 80 L16 34 Q16 22 28 22 Z"/>`,
      body: `
        <path d="M40 22 Q40 12 57 12 Q74 12 74 22" fill="none" stroke="${C}" stroke-width="3.5" stroke-linecap="round"/>
        <rect x="16" y="22" width="82" height="70" rx="12" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <rect x="22" y="28" width="70" height="14" rx="7" fill="#F6D9AF" stroke="#D9A468" stroke-width="2"/>
        <circle cx="34" cy="35" r="4" fill="#B98F7B" stroke="${C}" stroke-width="1.8"/>
        <circle cx="48" cy="35" r="4" fill="#B98F7B" stroke="${C}" stroke-width="1.8"/>
        <circle cx="76" cy="35" r="4" fill="#E88A8A" stroke="${C}" stroke-width="1.8"/>
        <circle cx="52" cy="64" r="19" fill="#8A6357" stroke="${C}" stroke-width="3"/>
        <path d="M40 56 L64 72 M40 72 L64 56 M52 47 L52 81" stroke="#B8A08E" stroke-width="2" opacity="0.8"/>
        ${ST(82, 66, 1, '#FFD98E')}
      `,
    },

    /* ---- music: tambourine ---- */
    tambourine: {
      w: 105, h: 110,
      sil: `<path d="M44 8 Q52 0 60 8 L62 16 A38 38 0 1 1 42 16 Z"/>`,
      body: `
        <path d="M46 8 Q52 3 58 8 L60 18 L44 18 Z" fill="#F49BB0" stroke="${C}" stroke-width="2.5"/>
        <circle cx="52" cy="56" r="36" fill="#F6D9AF" stroke="${C}" stroke-width="${SW}"/>
        <circle cx="52" cy="56" r="25" fill="#FFF6EE" stroke="#D9A468" stroke-width="2.5"/>
        <circle cx="22" cy="42" r="5" fill="#FFD98E" stroke="${C}" stroke-width="2"/>
        <circle cx="82" cy="42" r="5" fill="#FFD98E" stroke="${C}" stroke-width="2"/>
        <circle cx="18" cy="66" r="5" fill="#FFD98E" stroke="${C}" stroke-width="2"/>
        <circle cx="86" cy="66" r="5" fill="#FFD98E" stroke="${C}" stroke-width="2"/>
        <circle cx="52" cy="90" r="5" fill="#FFD98E" stroke="${C}" stroke-width="2"/>
        <path d="M46 52 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7 c0 2.2 3 3.5 5.2 5.4 c2.2 -1.9 5.2 -3.2 5.2 -5.4 c0 -2.5 -3.4 -3.9 -5.2 -1.7 Z" fill="#F9BFCE" transform="translate(6 0)"/>
      `,
    },

    /* ---- games: cloud plush ---- */
    cloudplush: {
      w: 125, h: 85,
      sil: `<path d="M24 62 Q8 58 10 44 Q12 30 28 30 Q30 14 48 12 Q64 10 70 22 Q78 12 92 16 Q106 20 104 34 Q116 38 114 52 Q112 64 98 66 Q94 76 78 76 L42 76 Q28 76 24 62 Z"/>`,
      body: `
        <path d="M26 60 Q13 56 14 45 Q16 33 30 33 Q32 18 48 16 Q62 14 68 25 Q76 15 90 19 Q102 23 101 35 Q112 39 110 51 Q108 61 96 63 Q92 72 78 72 L44 72 Q30 72 26 60 Z"
              fill="#FFFDF6" stroke="${C}" stroke-width="${SW}"/>
        ${F(62, 48, 0.95)}
        <path d="M34 46 Q38 40 44 38" fill="none" stroke="#E8DED2" stroke-width="3" stroke-linecap="round"/>
        <path d="M84 60 q6 6 14 4" fill="none" stroke="#E8DED2" stroke-width="3" stroke-linecap="round" stroke-dasharray="7 7"/>
        <path d="M96 28 a5 5 0 0 1 8 3" fill="none" stroke="#F49BB0" stroke-width="3" stroke-linecap="round"/>
      `,
    },

    /* ---- games: retro rocket poster ---- */
    retroposter: {
      w: 110, h: 140,
      sil: `<rect x="12" y="14" width="86" height="112" rx="10"/>`,
      body: `
        <rect x="12" y="14" width="86" height="112" rx="10" fill="#5C5064" stroke="${C}" stroke-width="${SW}"/>
        <rect x="20" y="22" width="70" height="96" rx="6" fill="none" stroke="#786C80" stroke-width="2.5" stroke-dasharray="6 6"/>
        <g fill="#F9BFCE">
          <rect x="50" y="34" width="10" height="10"/><rect x="45" y="44" width="20" height="20"/>
          <rect x="45" y="64" width="8" height="10"/><rect x="57" y="64" width="8" height="10"/>
        </g>
        <rect x="50" y="76" width="10" height="8" fill="#FFD98E"/>
        <circle cx="32" cy="40" r="2.5" fill="#BFE0F7"/>
        <circle cx="78" cy="52" r="2.5" fill="#BFE0F7"/>
        <circle cx="30" cy="70" r="2.5" fill="#BFE0F7"/>
        <path d="M28 96 h22 M28 104 h32 M28 112 h18" stroke="#8FD4C3" stroke-width="4" stroke-linecap="round"/>
      `,
    },

    /* ---- cats: donut cat bed ---- */
    catbed: {
      w: 130, h: 85,
      sil: `<ellipse cx="65" cy="46" rx="58" ry="33"/>`,
      body: `
        <ellipse cx="65" cy="44" rx="56" ry="30" fill="#F0A987" stroke="${C}" stroke-width="${SW}"/>
        <ellipse cx="65" cy="50" rx="38" ry="17" fill="#FBD9E2" stroke="${C}" stroke-width="2.5"/>
        <path d="M34 54 Q65 66 96 54" fill="none" stroke="#E0955F" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 8"/>
        <path d="M28 30 q4 -6 10 -6 M92 24 q6 0 10 6" stroke="#E0955F" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M60 34 Q64 30 68 34 Q70 38 65 40 Q60 38 60 34 Z" fill="#F49BB0" opacity="0.9"/>
      `,
    },

    /* ---- cats: mouse toy ---- */
    mousetoy: {
      w: 95, h: 70,
      sil: `<path d="M14 44 Q14 20 40 16 Q44 4 56 8 Q64 10 62 20 Q76 24 80 38 Q84 52 70 58 Q50 66 30 60 Q14 56 14 44 Z"/>`,
      body: `
        <path d="M64 24 q14 -4 18 6 q3 10 -8 12" fill="none" stroke="#B8A08E" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="1 6"/>
        <path d="M16 44 Q16 24 40 20 Q62 16 72 30 Q80 42 68 52 Q52 62 32 57 Q16 53 16 44 Z" fill="#CBB8A8" stroke="${C}" stroke-width="${SW}"/>
        <circle cx="48" cy="18" r="10" fill="#CBB8A8" stroke="${C}" stroke-width="3"/>
        <circle cx="48" cy="18" r="4.5" fill="#E8B99B"/>
        <path d="M24 40 q3 3.4 6 0" ${o}/>
        <circle cx="17" cy="46" r="3.5" fill="#EE8FA6"/>
        <path d="M22 50 l-8 2 M23 44 l-8 -2" stroke="#B8A08E" stroke-width="1.8" stroke-linecap="round"/>
        <ellipse cx="34" cy="48" rx="4" ry="2.8" fill="#F9AFC0" opacity="0.9"/>
      `,
    },

    /* ---- balcony: hanging bird feeder ---- */
    birdfeeder: {
      w: 100, h: 130,
      sil: `<path d="M45 4 Q51 0 55 6 L55 14 L88 36 Q94 41 88 45 L84 45 L84 78 L90 80 Q96 84 92 90 L88 92 L88 104 Q88 114 78 114 L22 114 Q12 114 12 104 L12 92 L8 90 Q4 84 10 80 L16 78 L16 45 L12 45 Q6 41 12 36 L45 14 Z"/>`,
      body: `
        <path d="M50 4 L50 16" stroke="${C}" stroke-width="3" stroke-linecap="round"/>
        <rect x="20" y="44" width="60" height="36" rx="7" fill="#F6D9AF" stroke="${C}" stroke-width="3"/>
        <path d="M12 40 L50 14 L88 40 Q92 44 86 44 L14 44 Q8 44 12 40 Z" fill="#A7C6A0" stroke="${C}" stroke-width="${SW}"/>
        <circle cx="34" cy="62" r="2.5" fill="#B98F7B"/><circle cx="44" cy="66" r="2.5" fill="#B98F7B"/>
        <circle cx="39" cy="72" r="2.5" fill="#B98F7B"/><circle cx="50" cy="62" r="2.5" fill="#B98F7B"/>
        <path d="M8 92 Q8 84 18 84 L82 84 Q92 84 92 92 L92 100 Q92 110 82 110 L18 110 Q8 110 8 100 Z" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <ellipse cx="66" cy="76" rx="11" ry="9" fill="#F9BFCE" stroke="${C}" stroke-width="2.5"/>
        <circle cx="72" cy="70" r="6" fill="#F9BFCE" stroke="${C}" stroke-width="2.5"/>
        <path d="M78 70 q4 0 3 3 Z" fill="#FFD98E" stroke="${C}" stroke-width="1.5"/>
        <path d="M73 68 q1.5 1.8 3 0" stroke="${C}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      `,
    },

    /* ---- balcony: stargazer telescope ---- */
    telescope: {
      w: 125, h: 130,
      sil: `<path d="M98 6 Q106 0 112 8 L120 18 Q126 26 118 32 L70 62 Q78 74 70 80 L66 76 L62 92 Q76 108 70 116 Q62 122 54 112 L50 100 L38 116 Q30 124 22 116 Q16 108 26 102 L44 88 L40 76 Q30 78 28 68 Q27 60 36 56 L86 24 Z"/>`,
      body: `
        <rect x="30" y="52" width="66" height="22" rx="11" transform="rotate(-32 63 63)" fill="#8B92D8" stroke="${C}" stroke-width="${SW}"/>
        <rect x="82" y="16" width="40" height="28" rx="12" transform="rotate(-32 102 30)" fill="#A7ACE0" stroke="${C}" stroke-width="3"/>
        <path d="M40 70 L26 106 M52 74 L58 108" stroke="#B8A08E" stroke-width="6" stroke-linecap="round"/>
        <path d="M46 72 L44 108" stroke="#8A6357" stroke-width="6" stroke-linecap="round"/>
        <circle cx="46" cy="70" r="8" fill="#E8C08A" stroke="${C}" stroke-width="2.5"/>
        ${ST(116, 10, 1.2, '#FFE9AE')}
        ${ST(100, 2, 0.7, '#FFE9AE')}
      `,
    },

    /* ---- camp: sleepy owl ---- */
    owl: {
      w: 95, h: 95,
      sil: `<path d="M22 30 L28 14 Q30 6 38 12 L44 20 Q48 18 52 20 L58 12 Q66 6 68 14 L74 30 Q86 40 84 58 Q82 80 62 86 Q48 90 34 86 Q14 80 12 58 Q10 40 22 30 Z"/>`,
      body: `
        <path d="M26 28 L30 14 Q32 8 37 13 L42 20 Z" fill="#C9A87E" stroke="${C}" stroke-width="3"/>
        <path d="M70 28 L66 14 Q64 8 59 13 L54 20 Z" fill="#C9A87E" stroke="${C}" stroke-width="3"/>
        <ellipse cx="48" cy="52" rx="36" ry="34" fill="#C9A87E" stroke="${C}" stroke-width="${SW}"/>
        <ellipse cx="48" cy="64" rx="20" ry="16" fill="#F6E3C8"/>
        <path d="M40 58 q4 4 8 0 M44 66 q4 4 8 0" stroke="#D9A468" stroke-width="2" fill="none"/>
        <circle cx="36" cy="42" r="10" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <circle cx="60" cy="42" r="10" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <path d="M28 38 a10 10 0 0 1 16 0 M52 38 a10 10 0 0 1 16 0" fill="#C9A87E" stroke="${C}" stroke-width="2"/>
        <circle cx="36" cy="45" r="3" fill="${C}"/>
        <circle cx="60" cy="45" r="3" fill="${C}"/>
        <path d="M45 50 h6 l-3 4 Z" fill="#FFD98E" stroke="${C}" stroke-width="1.5"/>
        <path d="M20 56 q-4 8 2 14 M76 56 q4 8 -2 14" stroke="${C}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M40 86 v5 M56 86 v5" stroke="#E8A05C" stroke-width="2.5" stroke-linecap="round"/>
      `,
    },

    /* ---- camp: cooler box ---- */
    cooler: {
      w: 110, h: 95,
      sil: `<path d="M20 26 L34 26 Q34 14 55 14 Q76 14 76 26 L90 26 Q100 26 100 36 L100 44 L96 44 L96 82 Q96 90 88 90 L22 90 Q14 90 14 82 L14 44 L10 44 L10 36 Q10 26 20 26 Z"/>`,
      body: `
        <path d="M38 26 Q38 18 55 18 Q72 18 72 26" fill="none" stroke="${C}" stroke-width="3.5" stroke-linecap="round"/>
        <rect x="10" y="26" width="90" height="20" rx="8" fill="#8FC1E8" stroke="${C}" stroke-width="${SW}"/>
        <rect x="14" y="44" width="82" height="46" rx="9" fill="#BFE0F7" stroke="${C}" stroke-width="${SW}"/>
        <rect x="46" y="42" width="18" height="10" rx="4" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <g transform="translate(55 68)" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.9">
          <path d="M0 -10 V10 M-10 0 H10 M-7 -7 L7 7 M-7 7 L7 -7" fill="none"/>
        </g>
        <path d="M22 52 Q26 48 32 47" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
      `,
    },

    /* ---- lodge: rocking chair ---- */
    rockingchair: {
      w: 135, h: 150,
      sil: `
        <rect x="34" y="2" width="68" height="62" rx="14"/>
        <rect x="26" y="62" width="82" height="26" rx="11"/>
        <path d="M44 82 L90 82 Q96 106 110 118 Q116 124 109 129 Q67 143 25 129 Q18 124 24 118 Q38 106 44 82 Z"/>`,
      body: `
        <rect x="34" y="2" width="68" height="62" rx="14" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <path d="M50 10 L50 56 M67 10 L67 56 M84 10 L84 56" stroke="#D9A468" stroke-width="3.5" stroke-linecap="round"/>
        <rect x="26" y="64" width="82" height="22" rx="10" fill="#E88A8A" stroke="${C}" stroke-width="${SW}"/>
        <path d="M34 75 h66" stroke="#D07070" stroke-width="2.5" stroke-dasharray="7 7" stroke-linecap="round"/>
        <rect x="38" y="86" width="12" height="28" rx="5" fill="#D9A468" stroke="${C}" stroke-width="2.5"/>
        <rect x="84" y="86" width="12" height="28" rx="5" fill="#D9A468" stroke="${C}" stroke-width="2.5"/>
        <path d="M22 122 Q67 138 112 122" fill="none" stroke="#B98F7B" stroke-width="6" stroke-linecap="round"/>
      `,
    },

    /* ---- lodge: wall candle sconce ---- */
    sconce: {
      w: 92, h: 115,
      sil: `<path d="M40 26 Q36 18 42 10 Q46 4 50 10 Q56 18 52 26 Q56 28 56 34 L56 50 L62 50 Q70 50 70 58 L70 64 Q70 74 60 76 L60 86 Q60 94 52 96 L52 100 Q60 102 60 108 Q60 114 52 114 L40 114 Q32 114 32 108 Q32 102 40 100 L40 96 Q32 94 32 86 L32 76 Q22 74 22 64 L22 58 Q22 50 30 50 L36 50 L36 34 Q36 28 40 26 Z"/>`,
      body: `
        <ellipse cx="46" cy="24" rx="30" ry="26" fill="#FFE9AE" opacity="0.35"/>
        <path d="M46 8 Q39 18 46 27 Q53 18 46 8 Z" fill="#FFD98E" stroke="#F2B95C" stroke-width="2.5"/>
        <rect x="37" y="28" width="18" height="24" rx="5" fill="#FFFDF6" stroke="${C}" stroke-width="3"/>
        <path d="M37 36 q4 6 0 10" stroke="#E8DED2" stroke-width="2.5" fill="none"/>
        <path d="M26 52 L66 52 Q70 62 60 68 Q52 72 40 72 Q32 70 28 64 Q24 58 26 52 Z" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <rect x="42" y="72" width="8" height="24" rx="4" fill="#D9A468" stroke="${C}" stroke-width="2.5"/>
        <ellipse cx="46" cy="102" rx="16" ry="9" fill="#E8C08A" stroke="${C}" stroke-width="3"/>
      `,
    },

    /* ════════ DETAIL PACK (2 more per room, 132 total) ════════ */

    fairyjar: {
      w: 85, h: 100,
      sil: `<path d="M28 18 Q24 8 34 8 L52 8 Q62 8 58 18 L62 18 Q68 18 68 24 L68 30 Q68 36 64 36 L64 82 Q64 94 52 94 L34 94 Q22 94 22 82 L22 36 Q18 36 18 30 L18 24 Q18 18 24 18 Z"/>`,
      body: `
        <ellipse cx="43" cy="60" rx="34" ry="30" fill="#FBD9E2" opacity="0.4"/>
        <rect x="18" y="18" width="50" height="14" rx="7" fill="#E8C08A" stroke="${C}" stroke-width="2.5"/>
        <path d="M22 34 L64 34 L64 80 Q64 91 53 91 L33 91 Q22 91 22 80 Z" fill="#FFF6FA" opacity="0.75" stroke="${C}" stroke-width="3"/>
        ${ST(35, 52, 1, '#F49BB0')}
        ${ST(52, 66, 0.8, '#FFD98E')}
        ${ST(38, 76, 0.65, '#F49BB0')}
      `,
    },
    dreambanner: {
      w: 130, h: 70,
      sil: `<path d="M10 10 L118 10 Q124 10 124 16 Q124 22 118 22 L114 22 L102 50 Q99 55 96 50 L84 22 L76 22 L64 50 Q61 55 58 50 L46 22 L38 22 L26 50 Q23 55 20 50 L8 22 Q4 21 4 16 Q4 10 10 10 Z"/>`,
      body: `
        <rect x="4" y="11" width="120" height="10" rx="5" fill="#B98F7B" stroke="${C}" stroke-width="2.5"/>
        <path d="M10 22 L36 22 L23 48 Z" fill="#F9BFCE" stroke="${C}" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M23 28 q-5 3 -2 8 q4 3 7 -1 q-6 1 -5 -7 Z" fill="#FFFDF6"/>
        <path d="M48 22 L74 22 L61 48 Z" fill="#BFE0F7" stroke="${C}" stroke-width="2.5" stroke-linejoin="round"/>
        ${ST(61, 32, 0.8, '#FFFDF6')}
        <path d="M86 22 L112 22 L99 48 Z" fill="#CBB4E8" stroke="${C}" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M99 30 c-1.6 -1.9 -4.6 -0.7 -4.6 1.5 c0 1.9 2.7 3.1 4.6 4.8 c1.9 -1.7 4.6 -2.9 4.6 -4.8 c0 -2.2 -3 -3.4 -4.6 -1.5 Z" fill="#FFFDF6"/>
      `,
    },
    fryingpan: {
      w: 115, h: 85,
      sil: `<path d="M72 34 L102 38 Q110 39 110 46 Q110 53 102 54 L72 58 A30 30 0 1 1 72 34 Z"/>`,
      body: `
        <circle cx="44" cy="46" r="30" fill="#8A6357" stroke="${C}" stroke-width="${SW}"/>
        <circle cx="44" cy="46" r="23" fill="#6E5147"/>
        <rect x="72" y="40" width="36" height="12" rx="6" fill="#B98F7B" stroke="${C}" stroke-width="3"/>
        <circle cx="100" cy="46" r="2.5" fill="#6E5147"/>
        <path d="M33 38 Q29 29 38 28 Q45 21 52 29 Q62 29 59 40 Q64 48 55 52 Q49 59 40 54 Q29 53 33 44 Z" fill="#FFFDF6" stroke="#E8DED2" stroke-width="2"/>
        <circle cx="45" cy="41" r="8.5" fill="#FFD98E" stroke="#F2B95C" stroke-width="2"/>
        <circle cx="42" cy="39" r="1.3" fill="${C}"/><circle cx="48" cy="39" r="1.3" fill="${C}"/>
        <path d="M43 44 q2.5 2 5 0" stroke="${C}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      `,
    },
    milkcarton: {
      w: 70, h: 95,
      sil: `<path d="M14 30 L35 12 L56 30 L56 82 Q56 90 48 90 L22 90 Q14 90 14 82 Z"/>`,
      body: `
        <path d="M14 30 L35 12 L56 30 L56 82 Q56 90 48 90 L22 90 Q14 90 14 82 Z" fill="#FFFDF6" stroke="${C}" stroke-width="${SW}"/>
        <path d="M14 30 L56 30 M35 12 L35 30" stroke="${C}" stroke-width="2.5"/>
        <rect x="14" y="50" width="42" height="16" fill="#BFE0F7"/>
        <path d="M22 40 q5 -4 9 0 q4 4 8 0" stroke="#B8A08E" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M25 74 q4 -5 9 -1 q3 3 -1 6 q-6 3 -8 -5 Z" fill="#B8A08E" opacity="0.6"/>
        <path d="M40 56 c-1.6 -1.9 -4.6 -0.7 -4.6 1.5 c0 1.9 2.7 3.1 4.6 4.8 c1.9 -1.7 4.6 -2.9 4.6 -4.8 c0 -2.2 -3 -3.4 -4.6 -1.5 Z" fill="#FFFDF6"/>
      `,
    },
    butterfly: {
      w: 95, h: 85,
      sil: `<path d="M46 34 Q34 8 16 12 Q2 16 8 34 Q12 46 30 50 Q12 56 12 68 Q14 80 28 78 Q42 74 46 60 Q50 74 64 78 Q78 80 80 68 Q80 56 62 50 Q80 46 84 34 Q90 16 76 12 Q58 8 46 34 Z"/>`,
      body: `
        <ellipse cx="27" cy="28" rx="17" ry="14" transform="rotate(-24 27 28)" fill="#F9BFCE" stroke="${C}" stroke-width="3"/>
        <ellipse cx="65" cy="28" rx="17" ry="14" transform="rotate(24 65 28)" fill="#F9BFCE" stroke="${C}" stroke-width="3"/>
        <ellipse cx="31" cy="62" rx="12" ry="10" transform="rotate(20 31 62)" fill="#FBD9E2" stroke="${C}" stroke-width="3"/>
        <ellipse cx="61" cy="62" rx="12" ry="10" transform="rotate(-20 61 62)" fill="#FBD9E2" stroke="${C}" stroke-width="3"/>
        <circle cx="27" cy="27" r="4" fill="#FFFDF6"/><circle cx="65" cy="27" r="4" fill="#FFFDF6"/>
        <rect x="42" y="24" width="9" height="38" rx="4.5" fill="#8A6357" stroke="${C}" stroke-width="2.5"/>
        <path d="M44 22 q-4 -8 -10 -10 M49 22 q4 -8 10 -10" stroke="${C}" stroke-width="2" fill="none" stroke-linecap="round"/>
        <circle cx="34" cy="11" r="2" fill="${C}"/><circle cx="59" cy="11" r="2" fill="${C}"/>
      `,
    },
    seedpackets: {
      w: 95, h: 95,
      sil: `<path d="M18 24 Q16 14 26 13 L48 10 Q56 9 57 17 L58 24 L70 22 Q78 21 79 29 L84 74 Q85 82 77 83 L34 88 Q26 89 25 81 L24 74 L20 74 Q12 74 12 66 L12 32 Q12 24 18 24 Z"/>`,
      body: `
        <rect x="12" y="24" width="34" height="50" rx="5" fill="#FFF6EE" stroke="${C}" stroke-width="2.5"/>
        <path d="M29 44 l-5 12 h10 Z" fill="#F8B58E" stroke="${C}" stroke-width="1.8"/>
        <path d="M29 44 q-3 -6 2 -8" stroke="#58A46F" stroke-width="2" fill="none"/>
        <g transform="rotate(9 55 46)"><rect x="38" y="20" width="34" height="52" rx="5" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <circle cx="55" cy="42" r="6" fill="#FFD98E" stroke="${C}" stroke-width="1.8"/>
        <circle cx="49" cy="38" r="3.5" fill="#F9BFCE"/><circle cx="61" cy="38" r="3.5" fill="#F9BFCE"/>
        <circle cx="49" cy="46" r="3.5" fill="#F9BFCE"/><circle cx="61" cy="46" r="3.5" fill="#F9BFCE"/></g>
        <g transform="rotate(17 66 52)"><rect x="50" y="28" width="32" height="48" rx="5" fill="#FFF6EE" stroke="${C}" stroke-width="2.5"/>
        <circle cx="66" cy="50" r="7" fill="#F98D8D" stroke="${C}" stroke-width="1.8"/>
        <ellipse cx="66" cy="42" rx="4" ry="2" fill="#86CF9C"/></g>
        <circle cx="22" cy="82" r="1.8" fill="#B98F7B"/><circle cx="30" cy="85" r="1.8" fill="#B98F7B"/>
      `,
    },
    donutplate: {
      w: 95, h: 75,
      sil: `<path d="M23 34 A24 24 0 1 1 71 34 L71 46 L84 46 Q89 47 89 54 Q89 64 76 66 L18 66 Q5 64 5 54 Q5 47 10 46 L23 46 Z"/>`,
      body: `
        <ellipse cx="47" cy="56" rx="42" ry="11" fill="#D9EEFC" stroke="${C}" stroke-width="3"/>
        <circle cx="47" cy="34" r="24" fill="#F2C48D" stroke="${C}" stroke-width="3"/>
        <path d="M25 32 Q30 20 47 19 Q64 20 69 32 Q66 44 58 42 Q54 48 47 44 Q40 48 36 42 Q28 44 25 32 Z" fill="#F9BFCE" stroke="${C}" stroke-width="2.5"/>
        <circle cx="47" cy="35" r="8" fill="#FFF6EE" stroke="${C}" stroke-width="2.5"/>
        <path d="M34 28 l5 -3 M50 24 l5 2 M58 33 l5 -2" stroke="#FFFDF6" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M40 31 l4 3" stroke="#A7E0B6" stroke-width="2.5" stroke-linecap="round"/>
      `,
    },
    opensign: {
      w: 95, h: 85,
      sil: `<path d="M42 4 Q47 0 52 4 L54 14 L78 14 Q86 14 86 22 L86 66 Q86 74 78 74 L16 74 Q8 74 8 66 L8 22 Q8 14 16 14 L40 14 Z"/>`,
      body: `
        <path d="M40 14 L44 4 M54 14 L50 4" stroke="${C}" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="8" y="14" width="78" height="60" rx="9" fill="#A7C6A0" stroke="${C}" stroke-width="${SW}"/>
        <rect x="15" y="21" width="64" height="46" rx="6" fill="none" stroke="#8FB287" stroke-width="2" stroke-dasharray="5 5"/>
        <path d="M34 36 Q34 32 38 32 L54 32 Q58 32 58 36 Q58 50 46 52 Q34 50 34 36 Z" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <path d="M58 36 q6 -1 6 4 q0 5 -6 4" fill="none" stroke="${C}" stroke-width="2.5"/>
        <path d="M41 28 q2 -3 0 -6 M50 28 q2 -3 0 -6" stroke="#FFFDF6" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M32 60 h30" stroke="#FFFDF6" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
      `,
    },
    toothcup: {
      w: 80, h: 95,
      sil: `<path d="M24 44 L20 16 Q19 8 27 8 Q34 8 35 16 L37 42 L43 42 L45 10 Q45 2 52 2 Q59 2 59 10 L57 42 L62 44 Q70 44 69 52 L66 86 Q65 94 57 94 L23 94 Q15 94 14 86 L11 52 Q10 44 18 44 Z"/>`,
      body: `
        <rect x="22" y="12" width="11" height="34" rx="5" fill="#F49BB0" stroke="${C}" stroke-width="2.5" transform="rotate(-6 27 29)"/>
        <path d="M21 14 q5 -6 11 -1 l-1 8 -10 1 Z" fill="#FFFDF6" stroke="${C}" stroke-width="2"/>
        <rect x="46" y="6" width="11" height="38" rx="5" fill="#A7E0B6" stroke="${C}" stroke-width="2.5" transform="rotate(5 51 25)"/>
        <path d="M45 8 q5 -6 11 -1 l-1 8 -10 1 Z" fill="#FFFDF6" stroke="${C}" stroke-width="2"/>
        <path d="M14 46 h52 l-3 40 Q62 91 56 91 h-32 Q18 91 17 86 Z" fill="#BFE0F7" stroke="${C}" stroke-width="${SW}"/>
        <path d="M18 56 Q40 62 62 56" stroke="#8FC1E8" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M32 72 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7 c0 2.2 3 3.5 5.2 5.4 c2.2 -1.9 5.2 -3.2 5.2 -5.4 c0 -2.5 -3.4 -3.9 -5.2 -1.7 Z" fill="#FFFDF6" transform="translate(8 -2)"/>
      `,
    },
    bathboat: {
      w: 100, h: 85,
      sil: `<path d="M48 10 Q52 8 54 12 L54 14 L80 40 Q84 46 78 48 L54 48 L54 52 L86 52 Q94 52 90 62 Q84 76 66 78 L34 78 Q16 76 10 62 Q6 52 14 52 L46 52 L46 14 Q46 10 48 10 Z"/>`,
      body: `
        <path d="M50 12 L50 50" stroke="${C}" stroke-width="3" stroke-linecap="round"/>
        <path d="M54 16 L78 42 Q80 46 75 46 L54 46 Z" fill="#FFFDF6" stroke="${C}" stroke-width="2.5"/>
        <path d="M50 12 L64 17 L50 22 Z" fill="#F49BB0" stroke="${C}" stroke-width="2"/>
        <path d="M12 54 L88 54 Q92 54 90 60 Q85 74 66 75 L34 75 Q15 74 10 60 Q8 54 12 54 Z" fill="#F49BB0" stroke="${C}" stroke-width="${SW}"/>
        <circle cx="30" cy="62" r="3.5" fill="#FBD9E2"/><circle cx="50" cy="64" r="3.5" fill="#FBD9E2"/><circle cx="70" cy="62" r="3.5" fill="#FBD9E2"/>
      `,
    },
    paperplane: {
      w: 95, h: 70,
      sil: `<path d="M8 52 L82 8 Q90 4 88 14 L60 62 Q56 68 50 62 L42 52 L12 58 Q4 58 8 52 Z"/>`,
      body: `
        <path d="M12 52 L82 11 L56 60 L44 50 Z" fill="#FFFDF6" stroke="${C}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M44 50 L82 11 L46 42 Z" fill="#E8E2D8" stroke="${C}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M14 51 L44 49" stroke="#D9CFC2" stroke-width="1.8"/>
        <path d="M20 30 q6 -12 18 -14" stroke="${C}" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="1 6" opacity="0.6"/>
      `,
    },
    studybanner: {
      w: 120, h: 70,
      sil: `<path d="M10 10 L110 10 Q116 10 116 16 Q116 22 110 22 L108 22 L108 42 Q108 50 100 50 L92 50 Q84 50 84 42 L84 22 L72 22 L72 42 Q72 50 64 50 L56 50 Q48 50 48 42 L48 22 L36 22 L36 42 Q36 50 28 50 L20 50 Q12 50 12 42 L12 22 Q4 22 4 16 Q4 10 10 10 Z"/>`,
      body: `
        <rect x="4" y="11" width="112" height="10" rx="5" fill="#B98F7B" stroke="${C}" stroke-width="2.5"/>
        <rect x="12" y="22" width="24" height="26" rx="4" fill="#FFD98E" stroke="${C}" stroke-width="2.5"/>
        <rect x="20" y="27" width="7" height="14" rx="2" fill="#F49BB0" stroke="${C}" stroke-width="1.5" transform="rotate(18 24 34)"/>
        <rect x="48" y="22" width="24" height="26" rx="4" fill="#A7C6A0" stroke="${C}" stroke-width="2.5"/>
        ${ST(60, 35, 0.9, '#FFFDF6')}
        <rect x="84" y="22" width="24" height="26" rx="4" fill="#BFE0F7" stroke="${C}" stroke-width="2.5"/>
        <rect x="90" y="29" width="12" height="12" rx="2" fill="#FFFDF6" stroke="${C}" stroke-width="1.5"/>
      `,
    },
    claypot: {
      w: 95, h: 90,
      sil: `<path d="M25 32 Q30 24 47 24 Q64 24 69 32 Q78 36 78 48 Q78 68 66 79 Q57 88 47 88 Q37 88 28 79 Q16 68 16 48 Q16 36 25 32 Z"/>`,
      body: `
        <path d="M26 34 Q20 38 20 48 Q20 66 30 76 Q38 84 47 84 Q56 84 64 76 Q74 66 74 48 Q74 38 68 34 Z" fill="#E8A578" stroke="${C}" stroke-width="${SW}"/>
        <ellipse cx="47" cy="33" rx="21" ry="7" fill="#D98E68" stroke="${C}" stroke-width="3"/>
        <path d="M26 48 Q47 54 68 48 M28 62 Q47 67 66 62" stroke="#D98E68" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        ${F(47, 58, 0.7)}
      `,
    },
    sketchbook: {
      w: 95, h: 85,
      sil: `<path d="M10 22 Q28 14 46 20 L48 20 Q66 12 84 20 Q92 22 92 30 L92 62 Q92 70 84 70 Q66 66 50 72 Q46 74 44 72 Q28 66 12 70 Q4 70 4 62 L4 30 Q4 22 10 22 Z"/>`,
      body: `
        <path d="M10 24 Q28 17 46 23 L46 68 Q28 62 12 67 Q6 68 6 61 L6 30 Q6 25 10 24 Z" fill="#FFFDF6" stroke="${C}" stroke-width="3"/>
        <path d="M84 24 Q66 17 48 23 L48 68 Q66 62 82 67 Q88 68 88 61 L88 30 Q88 25 84 24 Z" fill="#FFF6EE" stroke="${C}" stroke-width="3"/>
        <path d="M47 22 L47 69" stroke="${C}" stroke-width="2.5"/>
        <circle cx="24" cy="36" r="6" fill="#FFD98E" stroke="#F2B95C" stroke-width="1.8"/>
        <path d="M14 52 q6 -6 12 0 q6 6 12 0" stroke="#8FC1E8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <rect x="54" y="38" width="30" height="7" rx="3.5" fill="#F49BB0" stroke="${C}" stroke-width="2" transform="rotate(-8 69 41)"/>
        <path d="M84 34 l6 2 -4 4 Z" fill="#F8C3A4" stroke="${C}" stroke-width="1.5" transform="rotate(-8 86 37)"/>
      `,
    },
    maraca: {
      w: 80, h: 95,
      sil: `<path d="M16 32 Q12 8 38 6 Q64 8 60 32 Q58 46 46 52 L56 80 Q58 88 50 90 L44 90 Q36 90 36 82 L34 54 Q18 48 16 32 Z"/>`,
      body: `
        <ellipse cx="38" cy="29" rx="23" ry="25" fill="#F2C48D" stroke="${C}" stroke-width="${SW}"/>
        <path d="M17 24 Q38 32 59 24" stroke="#E0955F" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="30" cy="38" r="3" fill="#E88A8A"/><circle cx="44" cy="40" r="3" fill="#8FC1E8"/><circle cx="37" cy="46" r="3" fill="#A7E0B6"/>
        <path d="M36 54 L38 82 Q38 87 43 87 L47 87 Q52 87 51 81 L44 52 Z" fill="#B98F7B" stroke="${C}" stroke-width="3"/>
        <circle cx="66" cy="66" r="5" fill="#8B92D8"/>
        <path d="M71 66 L71 50 L78 48 L78 62" stroke="#8B92D8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      `,
    },
    sheetmusic: {
      w: 90, h: 100,
      sil: `<path d="M14 8 L60 8 L78 26 L78 90 Q78 98 70 98 L14 98 Q6 98 6 90 L6 16 Q6 8 14 8 Z"/>`,
      body: `
        <path d="M14 10 L58 10 L76 28 L76 88 Q76 95 69 95 L15 95 Q8 95 8 88 L8 16 Q8 10 14 10 Z" fill="#FFFDF6" stroke="${C}" stroke-width="${SW}"/>
        <path d="M58 10 L58 28 L76 28 Z" fill="#F6EFE2" stroke="${C}" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M16 42 h48 M16 50 h48 M16 58 h48 M16 74 h44 M16 82 h44" stroke="#D9CFC2" stroke-width="2"/>
        <circle cx="28" cy="50" r="4.5" fill="#8B92D8"/><path d="M32.5 50 L32.5 36" stroke="#8B92D8" stroke-width="2.5"/>
        <circle cx="48" cy="58" r="4.5" fill="#F49BB0"/><path d="M52.5 58 L52.5 44" stroke="#F49BB0" stroke-width="2.5"/>
        <circle cx="36" cy="82" r="4.5" fill="#8B92D8"/><path d="M40.5 82 L40.5 68" stroke="#8B92D8" stroke-width="2.5"/>
      `,
    },
    dicepair: {
      w: 95, h: 75,
      sil: `<path d="M16 16 Q18 8 26 9 L52 13 Q58 8 64 10 L86 20 Q94 24 91 32 L84 58 Q82 66 74 64 L52 60 Q48 66 40 64 L14 56 Q6 53 8 45 Z"/>`,
      body: `
        <g transform="rotate(-8 30 36)"><rect x="12" y="18" width="38" height="38" rx="8" fill="#FFFDF6" stroke="${C}" stroke-width="3"/>
        <circle cx="24" cy="30" r="3" fill="${C}"/><circle cx="38" cy="44" r="3" fill="${C}"/><circle cx="31" cy="37" r="3" fill="${C}"/></g>
        <g transform="rotate(10 66 42)"><rect x="50" y="24" width="34" height="34" rx="8" fill="#BFE0F7" stroke="${C}" stroke-width="3"/>
        <circle cx="59" cy="33" r="2.8" fill="${C}"/><circle cx="75" cy="33" r="2.8" fill="${C}"/>
        <circle cx="59" cy="49" r="2.8" fill="${C}"/><circle cx="75" cy="49" r="2.8" fill="${C}"/></g>
      `,
    },
    trophy: {
      w: 85, h: 95,
      sil: `<path d="M20 10 L64 10 Q70 10 70 16 L72 16 Q82 16 80 28 Q78 42 66 46 Q62 56 52 60 L52 68 Q62 70 64 76 Q66 84 56 86 L28 86 Q18 84 20 76 Q22 70 32 68 L32 60 Q22 56 18 46 Q6 42 4 28 Q2 16 12 16 L14 16 Q14 10 20 10 Z"/>`,
      body: `
        <path d="M14 18 Q6 18 7 27 Q8 38 18 42 M70 18 Q78 18 77 27 Q76 38 66 42" stroke="#E0A93E" stroke-width="4" fill="none"/>
        <path d="M18 12 L66 12 L62 44 Q58 56 42 56 Q26 56 22 44 Z" fill="#FFD98E" stroke="${C}" stroke-width="${SW}"/>
        ${ST(42, 30, 1.3, '#FFFDF6')}
        <rect x="36" y="56" width="12" height="12" fill="#E0A93E" stroke="${C}" stroke-width="2.5"/>
        <rect x="24" y="68" width="36" height="14" rx="5" fill="#B98F7B" stroke="${C}" stroke-width="3"/>
      `,
    },
    kibblebag: {
      w: 85, h: 105,
      sil: `<path d="M16 16 L70 16 Q78 16 78 24 L78 30 Q78 36 72 36 L72 92 Q72 100 64 100 L22 100 Q14 100 14 92 L14 36 Q8 36 8 30 L8 24 Q8 16 16 16 Z"/>`,
      body: `
        <rect x="8" y="16" width="70" height="18" rx="8" fill="#E0955F" stroke="${C}" stroke-width="3"/>
        <rect x="14" y="34" width="58" height="64" rx="8" fill="#F0A987" stroke="${C}" stroke-width="${SW}"/>
        <rect x="24" y="46" width="38" height="28" rx="7" fill="#FFF6EE" stroke="${C}" stroke-width="2.5"/>
        <path d="M32 60 Q37 52 44 58 Q50 63 44 66 Q36 68 32 60 Z M44 58 l8 -5 0 10 Z" fill="#F49BB0" stroke="${C}" stroke-width="1.8"/>
        <circle cx="24" cy="88" r="2.5" fill="#B98F7B"/><circle cx="34" cy="91" r="2.5" fill="#B98F7B"/><circle cx="46" cy="89" r="2.5" fill="#B98F7B"/>
      `,
    },
    photostrip: {
      w: 70, h: 115,
      sil: `<rect x="12" y="6" width="46" height="104" rx="8"/>`,
      body: `
        <rect x="12" y="6" width="46" height="104" rx="8" fill="#FFFDF6" stroke="${C}" stroke-width="${SW}"/>
        <rect x="18" y="14" width="34" height="26" rx="3" fill="#FBD9E2" stroke="${C}" stroke-width="2"/>
        <path d="M28 30 l3 -6 3 5 5 -5 3 6" stroke="${C}" stroke-width="2" fill="none" stroke-linejoin="round"/>
        <rect x="18" y="46" width="34" height="26" rx="3" fill="#D8F0EC" stroke="${C}" stroke-width="2"/>
        <circle cx="35" cy="60" r="7" fill="#C9A87E" stroke="${C}" stroke-width="1.8"/>
        <path d="M30 55 l-2 -4 M40 55 l2 -4" stroke="${C}" stroke-width="1.8" stroke-linecap="round"/>
        <rect x="18" y="78" width="34" height="26" rx="3" fill="#FFE9AE" stroke="${C}" stroke-width="2"/>
        <path d="M30 94 q5 -8 10 0" stroke="${C}" stroke-width="2" fill="none"/>
        <rect x="22" y="0" width="26" height="10" rx="2" transform="rotate(-4 35 5)" fill="#BEE8CD" opacity="0.92"/>
      `,
    },
    succulents: {
      w: 110, h: 75,
      sil: `<path d="M14 46 Q14 40 20 40 L24 40 Q20 26 34 24 Q44 22 46 34 L48 40 L58 40 Q56 24 70 22 Q82 22 80 38 L80 40 L86 40 Q84 30 94 28 Q104 28 102 40 Q108 40 108 46 L108 54 Q108 62 100 62 L22 62 Q14 62 14 54 Z"/>`,
      body: `
        <circle cx="34" cy="36" r="11" fill="#8FCF9F" stroke="#58A46F" stroke-width="2.5"/>
        <circle cx="34" cy="36" r="4" fill="#BEE8CD"/>
        <ellipse cx="68" cy="32" rx="10" ry="11" fill="#A7DFB5" stroke="#58A46F" stroke-width="2.5"/>
        <path d="M68 24 v16 M62 27 l12 10 M74 27 l-12 10" stroke="#58A46F" stroke-width="1.8"/>
        <circle cx="93" cy="36" r="8" fill="#7FC494" stroke="#58A46F" stroke-width="2.5"/>
        <circle cx="93" cy="30" r="2.5" fill="#F9BFCE"/>
        <rect x="14" y="44" width="94" height="18" rx="9" fill="#E8C08A" stroke="${C}" stroke-width="${SW}"/>
        <circle cx="30" cy="53" r="1.8" fill="#D9A468"/><circle cx="56" cy="54" r="1.8" fill="#D9A468"/><circle cx="84" cy="53" r="1.8" fill="#D9A468"/>
      `,
    },
    starlamp: {
      w: 85, h: 110,
      sil: `<path d="M42 6 L52 26 L74 30 L58 46 L62 68 L48 58 L48 84 Q60 86 64 92 Q68 100 58 102 L26 102 Q16 100 20 92 Q24 86 36 84 L36 58 L22 68 L26 46 L10 30 L32 26 Z"/>`,
      body: `
        <path d="M42 2 L54 24 L80 28 L62 47 L66 72 L42 60 L18 72 L22 47 L4 28 L30 24 Z" fill="#FFE9AE" opacity="0.4"/>
        <path d="M42 10 L51 27 L71 30 L57 44 L60 64 L42 55 L24 64 L27 44 L13 30 L33 27 Z" fill="#FFD98E" stroke="${C}" stroke-width="${SW}"/>
        ${F(42, 38, 0.7)}
        <rect x="38" y="60" width="8" height="26" rx="4" fill="#B8A08E" stroke="${C}" stroke-width="2.5"/>
        <path d="M24 94 Q30 88 42 88 Q54 88 60 94 Q64 99 56 100 L28 100 Q20 99 24 94 Z" fill="#B8A08E" stroke="${C}" stroke-width="3"/>
      `,
    },
    trailsign: {
      w: 100, h: 110,
      sil: `<path d="M42 10 Q50 3 58 10 L58 26 L86 26 Q90 26 92 31 L97 40 L92 49 Q90 54 86 54 L58 54 L58 94 Q58 102 50 102 Q42 102 42 94 Z"/>`,
      body: `
        <rect x="44" y="10" width="12" height="90" rx="5" fill="#B98F7B" stroke="${C}" stroke-width="3"/>
        <path d="M56 28 L84 28 Q87 28 88 31 L93 40 L88 49 Q87 52 84 52 L56 52 Z" fill="#E8C08A" stroke="${C}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M62 40 h16 M74 34 l6 6 -6 6" stroke="${C}" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M50 16 c-1.6 -1.9 -4.6 -0.7 -4.6 1.5 c0 1.9 2.7 3.1 4.6 4.8 c1.9 -1.7 4.6 -2.9 4.6 -4.8 c0 -2.2 -3 -3.4 -4.6 -1.5 Z" fill="#E88A8A"/>
      `,
    },
    fireflyjar: {
      w: 80, h: 95,
      sil: `<path d="M26 16 Q22 6 32 6 L48 6 Q58 6 54 16 L58 16 Q64 16 64 22 L64 28 Q64 34 60 34 L60 78 Q60 90 48 90 L32 90 Q20 90 20 78 L20 34 Q16 34 16 28 L16 22 Q16 16 22 16 Z"/>`,
      body: `
        <ellipse cx="40" cy="58" rx="32" ry="28" fill="#FFE9AE" opacity="0.4"/>
        <rect x="16" y="16" width="48" height="14" rx="7" fill="#B98F7B" stroke="${C}" stroke-width="2.5"/>
        <path d="M20 32 L60 32 L60 76 Q60 87 49 87 L31 87 Q20 87 20 76 Z" fill="#FFFBEA" opacity="0.7" stroke="${C}" stroke-width="3"/>
        <circle cx="32" cy="50" r="7" fill="#FFE9AE" opacity="0.5"/><circle cx="32" cy="50" r="3.5" fill="#FFD98E"/>
        <circle cx="48" cy="64" r="7" fill="#FFE9AE" opacity="0.5"/><circle cx="48" cy="64" r="3.5" fill="#FFD98E"/>
        <circle cx="36" cy="74" r="2.8" fill="#FFD98E"/>
        <path d="M28 46 l-4 -3 M52 60 l4 -3" stroke="#E0A93E" stroke-width="1.8" stroke-linecap="round"/>
      `,
    },
    sled: {
      w: 130, h: 95,
      sil: `<path d="M104 22 Q120 20 122 34 Q124 46 112 50 L112 52 Q122 54 120 64 Q118 72 108 72 L24 72 Q10 72 10 60 Q10 50 22 48 L22 44 Q22 32 34 32 L98 32 Q102 26 104 22 Z"/>`,
      body: `
        <path d="M14 62 Q12 52 24 52 L104 52 Q116 52 118 40 Q119 30 108 30 Q100 30 100 38" fill="none" stroke="#B98F7B" stroke-width="6" stroke-linecap="round"/>
        <rect x="20" y="34" width="88" height="18" rx="9" fill="#E88A8A" stroke="${C}" stroke-width="${SW}"/>
        <path d="M36 34 v18 M62 34 v18 M88 34 v18" stroke="#D07070" stroke-width="2.5"/>
        <path d="M24 43 q-8 -8 -14 -4" stroke="#B8A08E" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-dasharray="1 5"/>
        <path d="M30 66 h70" stroke="#B98F7B" stroke-width="4" stroke-linecap="round"/>
      `,
    },
    mistletoe: {
      w: 85, h: 95,
      sil: `<path d="M38 6 Q42 0 48 4 L52 12 Q60 10 64 16 Q70 24 62 30 L58 32 Q66 42 60 56 Q54 70 42 76 Q30 70 24 56 Q18 42 26 32 L22 30 Q14 24 20 16 Q24 10 32 12 Z"/>`,
      body: `
        <path d="M30 16 Q22 18 24 26 Q26 32 34 30 L42 24 Z" fill="#E88A8A" stroke="${C}" stroke-width="2.5"/>
        <path d="M54 16 Q62 18 60 26 Q58 32 50 30 L42 24 Z" fill="#E88A8A" stroke="${C}" stroke-width="2.5"/>
        <circle cx="42" cy="24" r="6" fill="#F0A3A3" stroke="${C}" stroke-width="2"/>
        <ellipse cx="32" cy="46" rx="9" ry="16" transform="rotate(18 32 46)" fill="#7FB98B" stroke="#58A46F" stroke-width="2.5"/>
        <ellipse cx="52" cy="46" rx="9" ry="16" transform="rotate(-18 52 46)" fill="#8FCF9F" stroke="#58A46F" stroke-width="2.5"/>
        <ellipse cx="42" cy="58" rx="8" ry="14" fill="#7FB98B" stroke="#58A46F" stroke-width="2.5"/>
        <circle cx="36" cy="68" r="4" fill="#FFFDF6" stroke="${C}" stroke-width="2"/>
        <circle cx="46" cy="70" r="4" fill="#FFFDF6" stroke="${C}" stroke-width="2"/>
        <circle cx="41" cy="76" r="4" fill="#FFFDF6" stroke="${C}" stroke-width="2"/>
      `,
    },
  });
})();
