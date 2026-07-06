/* ============================================================
   COZY STICKER ROOM — art.js
   All artwork is hand-drawn SVG (no image files!) so it stays
   crisp at any size and is easy to recolor.

   Each sticker has:
     w, h  — its own little canvas size
     sil   — silhouette shapes (used for the white die-cut border,
             the dashed target spot, and the grey "???" mystery card)
     body  — the detailed drawing
   ============================================================ */

window.CSR = window.CSR || {};

CSR.art = (() => {
  const COCOA = '#7A5A4E';          // hand-drawn outline color
  const SW = 3.5;                   // outline width
  const o = `fill="none" stroke="${COCOA}" stroke-width="3" stroke-linecap="round"`; // face lines

  /* ---------------------------------------------------------- *
   *  STICKERS                                                   *
   * ---------------------------------------------------------- */
  const stickers = {

    /* ---- scallop rug (top-down oval) ---- */
    rug: {
      w: 160, h: 92,
      sil: `<ellipse cx="80" cy="46" rx="74" ry="40"/>`,
      body: `
        <ellipse cx="80" cy="46" rx="74" ry="40" fill="#F9BFCE" stroke="${COCOA}" stroke-width="${SW}"/>
        <ellipse cx="80" cy="46" rx="63" ry="32" fill="none" stroke="#FFFFFF" stroke-width="5"
                 stroke-dasharray="0.1 14" stroke-linecap="round" opacity="0.95"/>
        <ellipse cx="80" cy="46" rx="52" ry="27" fill="#FFF1E4"/>
        <ellipse cx="80" cy="46" rx="52" ry="27" fill="none" stroke="#F2A9BE" stroke-width="2.5"
                 stroke-dasharray="7 8" stroke-linecap="round"/>
        <ellipse cx="80" cy="46" rx="29" ry="14.5" fill="#FBD1DB"/>
        <path d="M80 41 c-2.8 -3.4 -8.2 -1.2 -8.2 2.7 c0 3.4 4.8 5.5 8.2 8.5 c3.4 -3 8.2 -5.1 8.2 -8.5 c0 -3.9 -5.4 -6.1 -8.2 -2.7 Z" fill="#EE8FA6"/>
      `,
    },

    /* ---- leafy plant in a smiley pot ---- */
    plant: {
      w: 120, h: 150,
      sil: `<path d="M39 87 A46 46 0 1 1 81 87 L90 87 Q93 87 93 90 L93 99 Q93 102 90 102 L88.5 102 L82 141 Q80.5 148.5 73 148.5 L47 148.5 Q39.5 148.5 38 141 L31.5 102 L30 102 Q27 102 27 99 L27 90 Q27 87 30 87 Z"/>`,
      body: `
        <path d="M60 66 C 42 60 26 62 14 51 C 28 40 48 49 60 66 Z" fill="#6FBE8A" stroke="#58A46F" stroke-width="3"/>
        <path d="M60 66 C 78 60 94 62 106 51 C 92 40 72 49 60 66 Z" fill="#6FBE8A" stroke="#58A46F" stroke-width="3"/>
        <path d="M60 66 C 42 52 28 44 22 26 C 42 26 56 42 60 66 Z" fill="#A7E0B6" stroke="#58A46F" stroke-width="3"/>
        <path d="M60 66 C 78 52 92 44 98 26 C 78 26 64 42 60 66 Z" fill="#A7E0B6" stroke="#58A46F" stroke-width="3"/>
        <path d="M60 68 C 50 42 52 22 60 6 C 68 22 70 42 60 68 Z" fill="#86CF9C" stroke="#58A46F" stroke-width="3"/>
        <path d="M60 60 L 60 22" stroke="#58A46F" stroke-width="2.5" stroke-linecap="round" opacity="0.75"/>
        <path d="M34 46 q7 -9 14 -11" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
        <path d="M86 46 q-7 -9 -14 -11" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
        <path d="M32 96 h56 l-6.5 44 a9 9 0 0 1 -9 8 h-25 a9 9 0 0 1 -9 -8 Z" fill="#F3AE8B" stroke="${COCOA}" stroke-width="${SW}"/>
        <rect x="27" y="87" width="66" height="15" rx="7.5" fill="#F8C3A4" stroke="${COCOA}" stroke-width="${SW}"/>
        <rect x="33" y="90" width="15" height="5.5" rx="2.75" fill="#FFFFFF" opacity="0.4"/>
        <path d="M47 115 q3 3.6 6 0" ${o}/>
        <path d="M67 115 q3 3.6 6 0" ${o}/>
        <path d="M57 122 q3 2.8 6 0" ${o}/>
        <ellipse cx="44" cy="123" rx="4.6" ry="3.1" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="76" cy="123" rx="4.6" ry="3.1" fill="#F9AFC0" opacity="0.9"/>
      `,
    },

    /* ---- mushroom glow lamp with a sleepy face ---- */
    lamp: {
      w: 112, h: 142,
      sil: `<path d="M12 58 A44 44 0 0 1 100 58 L100 61 Q100 66 95 66 L65 66 L65 108 Q86 110 86 120 Q86 131 56 131 Q26 131 26 120 Q26 110 47 108 L47 66 L17 66 Q12 66 12 61 Z"/>`,
      body: `
        <ellipse cx="56" cy="50" rx="53" ry="43" fill="#FFE9AE" opacity="0.32"/>
        <path d="M56 14 a44 44 0 0 1 44 44 v4 a4 4 0 0 1 -4 4 H16 a4 4 0 0 1 -4 -4 v-4 a44 44 0 0 1 44 -44 Z"
              fill="#FFC49E" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M25 44 Q30 26 45 19" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.55"/>
        <circle cx="34" cy="34" r="5" fill="#FFFFFF" opacity="0.85"/>
        <circle cx="58" cy="25" r="6" fill="#FFFFFF" opacity="0.85"/>
        <circle cx="81" cy="38" r="4.5" fill="#FFFFFF" opacity="0.85"/>
        <path d="M39 46 q3 3.6 6 0" ${o}/>
        <path d="M66 46 q3 3.6 6 0" ${o}/>
        <path d="M52.5 52 q3 2.8 6 0" ${o}/>
        <ellipse cx="36" cy="53" rx="4.2" ry="2.9" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="75" cy="53" rx="4.2" ry="2.9" fill="#F9AFC0" opacity="0.9"/>
        <rect x="48" y="64" width="16" height="52" rx="7" fill="#FFF2DC" stroke="${COCOA}" stroke-width="${SW}"/>
        <ellipse cx="56" cy="120" rx="30" ry="11" fill="#FFF2DC" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M97 12 l2.2 5.6 5.6 2.2 -5.6 2.2 -2.2 5.6 -2.2 -5.6 -5.6 -2.2 5.6 -2.2 Z" fill="#FFD98E"/>
      `,
    },

    /* ---- book nook shelf with a tiny plant ---- */
    bookshelf: {
      w: 150, h: 152,
      sil: `<path d="M24 26 L106 26 A14 14 0 1 1 130 26 Q142 26 142 42 L142 130 Q142 146 126 146 L24 146 Q8 146 8 130 L8 42 Q8 26 24 26 Z"/>`,
      body: `
        <rect x="8" y="26" width="134" height="120" rx="16" fill="#F6E3C8" stroke="${COCOA}" stroke-width="${SW}"/>
        <rect x="20" y="38" width="110" height="44" rx="9" fill="#FFF8EC" stroke="#E5C08F" stroke-width="2.5"/>
        <rect x="20" y="92" width="110" height="42" rx="9" fill="#FFF8EC" stroke="#E5C08F" stroke-width="2.5"/>
        <rect x="26" y="50" width="12" height="32" rx="4" fill="#F49BB0" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="40" y="46" width="12" height="36" rx="4" fill="#8FC1E8" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="54" y="52" width="12" height="30" rx="4" fill="#FFD98E" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="72" y="47" width="12" height="35" rx="4" fill="#A7E0B6" stroke="${COCOA}" stroke-width="2.5" transform="rotate(9 78 64)"/>
        <circle cx="106" cy="72" r="3" fill="#EE8FA6"/>
        <rect x="26" y="100" width="14" height="34" rx="4" fill="#CBB4E8" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="44" y="106" width="12" height="28" rx="4" fill="#F8B58E" stroke="${COCOA}" stroke-width="2.5"/>
        <circle cx="94" cy="118" r="14" fill="#D8EEF9" stroke="${COCOA}" stroke-width="2.5"/>
        <path d="M94 111 l1.9 4.2 4.6 0.5 -3.4 3.1 0.9 4.5 -4 -2.3 -4 2.3 0.9 -4.5 -3.4 -3.1 4.6 -0.5 Z" fill="#8FC1E8"/>
        <path d="M108 22 h20 l-3 12 h-14 Z" fill="#F3AE8B" stroke="${COCOA}" stroke-width="2.5"/>
        <ellipse cx="111" cy="12" rx="7" ry="5.5" fill="#86CF9C" stroke="#58A46F" stroke-width="2" transform="rotate(-24 111 12)"/>
        <ellipse cx="125" cy="11" rx="7" ry="5.5" fill="#A7E0B6" stroke="#58A46F" stroke-width="2" transform="rotate(22 125 11)"/>
      `,
    },

    /* ---- mochi bunny plush ---- */
    bunny: {
      w: 132, h: 142,
      sil: `<path d="M35 60 Q34 44 42 35 L32 13 Q29 3 38.5 3 Q47 3 49 11 L55 29 Q60 25 66 25 Q72 25 77 29 L83 11 Q85 3 93.5 3 Q103 3 100 13 L90 35 Q98 44 97 60 Q104 70 107 84 Q110 100 105 114 Q100 131 88 137 Q66 144 44 137 Q32 131 27 114 Q22 100 25 84 Q28 70 35 60 Z"/>`,
      body: `
        <rect x="34" y="4" width="21" height="48" rx="10.5" transform="rotate(-14 44 28)" fill="#FFF6EE" stroke="${COCOA}" stroke-width="${SW}"/>
        <rect x="40" y="11" width="9" height="32" rx="4.5" transform="rotate(-14 44 28)" fill="#FBC9D6"/>
        <rect x="77" y="4" width="21" height="48" rx="10.5" transform="rotate(14 88 28)" fill="#FFF6EE" stroke="${COCOA}" stroke-width="${SW}"/>
        <rect x="83" y="11" width="9" height="32" rx="4.5" transform="rotate(14 88 28)" fill="#FBC9D6"/>
        <ellipse cx="66" cy="100" rx="42" ry="36" fill="#FFF6EE" stroke="${COCOA}" stroke-width="${SW}"/>
        <ellipse cx="66" cy="108" rx="24" ry="19" fill="#FFEFDE"/>
        <path d="M60 103 l7 7 M67 103 l-7 7" stroke="#E8B99B" stroke-width="2.5" stroke-linecap="round"/>
        <ellipse cx="36" cy="103" rx="9.5" ry="7" transform="rotate(-24 36 103)" fill="#FFF6EE" stroke="${COCOA}" stroke-width="3"/>
        <ellipse cx="96" cy="103" rx="9.5" ry="7" transform="rotate(24 96 103)" fill="#FFF6EE" stroke="${COCOA}" stroke-width="3"/>
        <circle cx="66" cy="56" r="31" fill="#FFF6EE" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M51 54 q3.5 4 7 0" ${o}/>
        <path d="M73 54 q3.5 4 7 0" ${o}/>
        <path d="M63.4 60.5 h5.2 l-2.6 3.4 Z" fill="#EE8FA6"/>
        <path d="M61.5 66 q2.2 2.6 4.4 0 q2.2 2.6 4.4 0" ${o}/>
        <ellipse cx="45" cy="63" rx="5.2" ry="3.6" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="87" cy="63" rx="5.2" ry="3.6" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="46" cy="129" rx="13" ry="9" fill="#FFF6EE" stroke="${COCOA}" stroke-width="3"/>
        <ellipse cx="86" cy="129" rx="13" ry="9" fill="#FFF6EE" stroke="${COCOA}" stroke-width="3"/>
        <ellipse cx="46" cy="129" rx="6" ry="4" fill="#FBC9D6"/>
        <ellipse cx="86" cy="129" rx="6" ry="4" fill="#FBC9D6"/>
      `,
    },

    /* ---- rainbow wall poster with washi tape ---- */
    poster: {
      w: 122, h: 150,
      sil: `<rect x="12" y="16" width="98" height="122" rx="10"/>`,
      body: `
        <rect x="12" y="16" width="98" height="122" rx="10" fill="#FFFDF6" stroke="${COCOA}" stroke-width="${SW}"/>
        <rect x="21" y="25" width="80" height="104" rx="7" fill="none" stroke="#F4CBB4" stroke-width="2" stroke-dasharray="5 6"/>
        <path d="M31 98 a30 30 0 0 1 60 0" fill="none" stroke="#F49BB0" stroke-width="7" stroke-linecap="round"/>
        <path d="M40 98 a21 21 0 0 1 42 0" fill="none" stroke="#FFD98E" stroke-width="7" stroke-linecap="round"/>
        <path d="M49 98 a12 12 0 0 1 24 0" fill="none" stroke="#A7D8F0" stroke-width="7" stroke-linecap="round"/>
        <ellipse cx="30" cy="100" rx="11" ry="7.5" fill="#FFFFFF" stroke="${COCOA}" stroke-width="2.5"/>
        <ellipse cx="92" cy="100" rx="11" ry="7.5" fill="#FFFFFF" stroke="${COCOA}" stroke-width="2.5"/>
        <circle cx="86" cy="44" r="10" fill="#FFD98E" stroke="${COCOA}" stroke-width="3"/>
        <path d="M86 29 v-5 M86 59 v3 M71 44 h-4 M99 44 h4 M75 33 l-3 -3 M97 33 l3 -3" stroke="#F2B95C" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M36 46 c-2 -2.4 -5.8 -0.9 -5.8 1.9 c0 2.4 3.4 3.9 5.8 6 c2.4 -2.1 5.8 -3.6 5.8 -6 c0 -2.8 -3.8 -4.3 -5.8 -1.9 Z" fill="#F6A9BD"/>
        <path d="M52 34 l1.7 4.3 4.3 1.7 -4.3 1.7 -1.7 4.3 -1.7 -4.3 -4.3 -1.7 4.3 -1.7 Z" fill="#C9E7F6"/>
        <path d="M46 118 q8 5 16 0 q8 -5 16 0" fill="none" stroke="#F2A9BE" stroke-width="3" stroke-linecap="round"/>
        <rect x="38" y="6" width="46" height="16" rx="3" transform="rotate(-4 61 14)" fill="#BEE8CD" opacity="0.92"/>
        <rect x="88" y="126" width="30" height="13" rx="3" transform="rotate(32 103 132)" fill="#FFD9E0" opacity="0.92"/>
      `,
    },

    /* ════════ SUNNY KITCHEN stickers ════════ */

    /* ---- whistling kettle with a sleepy face ---- */
    kettle: {
      w: 115, h: 120,
      sil: `<path d="M18 110 Q14 72 32 52 Q36 47 40 44 Q44 20 57 20 Q70 20 74 44 Q78 47 82 52 L104 38 Q110 35 109 42 L92 62 Q98 84 96 110 Q96 118 88 118 L26 118 Q18 118 18 110 Z"/>`,
      body: `
        <path d="M100 26 q6 -5 2 -11" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" opacity="0.8"/>
        <path d="M108 30 q5 -4 2 -9" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.65"/>
        <path d="M82 56 L103 40 Q108 37 107 43 L93 63 Z" fill="#C5E8D6" stroke="${COCOA}" stroke-width="3"/>
        <path d="M40 46 Q45 24 57 24 Q69 24 74 46" fill="none" stroke="${COCOA}" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M20 108 Q17 74 34 55 Q44 44 57 44 Q70 44 80 55 Q97 74 94 108 Q94 116 86 116 L28 116 Q20 116 20 108 Z"
              fill="#C5E8D6" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M36 52 L78 52" stroke="${COCOA}" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="57" cy="47" r="5" fill="#FFD98E" stroke="${COCOA}" stroke-width="2.5"/>
        <path d="M28 68 Q32 57 42 52" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
        <path d="M44 80 q3 3.4 6 0" ${o}/>
        <path d="M64 80 q3 3.4 6 0" ${o}/>
        <path d="M54 87 q3 2.8 6 0" ${o}/>
        <ellipse cx="41" cy="88" rx="4.4" ry="3" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="73" cy="88" rx="4.4" ry="3" fill="#F9AFC0" opacity="0.9"/>
        <path d="M26 102 Q57 108 88 102" fill="none" stroke="#9CCDB4" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
      `,
    },

    /* ---- retro toaster with happy toast ---- */
    toaster: {
      w: 125, h: 110,
      sil: `<path d="M12 56 Q12 38 30 38 L30 14 Q30 6 38 6 L78 6 Q86 6 86 14 L86 38 L95 38 Q113 38 113 56 L113 86 Q113 104 95 104 L30 104 Q12 104 12 86 Z"/>`,
      body: `
        <rect x="34" y="10" width="48" height="44" rx="10" fill="#F2C48D" stroke="${COCOA}" stroke-width="3"/>
        <rect x="40" y="16" width="36" height="34" rx="7" fill="#F8DBB4"/>
        <path d="M50 28 q2.5 3 5 0" ${o}/>
        <path d="M61 28 q2.5 3 5 0" ${o}/>
        <path d="M55 34 q3 2.6 6 0" ${o}/>
        <ellipse cx="47" cy="34" rx="3" ry="2.2" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="69" cy="34" rx="3" ry="2.2" fill="#F9AFC0" opacity="0.9"/>
        <rect x="24" y="98" width="14" height="6" rx="3" fill="#B98F7B" stroke="${COCOA}" stroke-width="2"/>
        <rect x="87" y="98" width="14" height="6" rx="3" fill="#B98F7B" stroke="${COCOA}" stroke-width="2"/>
        <path d="M12 86 L12 58 Q12 40 30 40 L95 40 Q113 40 113 58 L113 86 Q113 100 95 100 L30 100 Q12 100 12 86 Z"
              fill="#F9BFCE" stroke="${COCOA}" stroke-width="${SW}"/>
        <rect x="28" y="36" width="62" height="10" rx="5" fill="#8A6357" stroke="${COCOA}" stroke-width="2.5"/>
        <circle cx="98" cy="70" r="7" fill="#FFFDF6" stroke="${COCOA}" stroke-width="2.5"/>
        <path d="M98 70 L102 66" stroke="${COCOA}" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M20 58 Q24 48 34 46" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
        <path d="M36 74 c-2 -2.4 -5.8 -0.9 -5.8 1.9 c0 2.4 3.4 3.9 5.8 6 c2.4 -2.1 5.8 -3.6 5.8 -6 c0 -2.8 -3.8 -4.3 -5.8 -1.9 Z" fill="#FFFFFF" opacity="0.85"/>
      `,
    },

    /* ---- bowl of fruit friends ---- */
    fruitbowl: {
      w: 135, h: 105,
      sil: `<path d="M14 62 Q14 58 20 58 L36 58 A17 17 0 1 1 60 58 L77 58 A16 16 0 1 1 99 58 L115 58 Q121 58 121 62 Q120 84 106 93 Q92 101 67 101 Q42 101 28 93 Q14 84 14 62 Z"/>`,
      body: `
        <circle cx="48" cy="45" r="17" fill="#FFB26B" stroke="${COCOA}" stroke-width="3"/>
        <ellipse cx="57" cy="30" rx="6.5" ry="4.2" transform="rotate(-28 57 30)" fill="#86CF9C" stroke="#58A46F" stroke-width="2"/>
        <circle cx="43" cy="41" r="1.4" fill="#E08A3C" opacity="0.8"/>
        <circle cx="50" cy="49" r="1.4" fill="#E08A3C" opacity="0.8"/>
        <circle cx="55" cy="42" r="1.4" fill="#E08A3C" opacity="0.8"/>
        <circle cx="88" cy="45" r="16" fill="#F98D8D" stroke="${COCOA}" stroke-width="3"/>
        <path d="M88 31 q0.5 -5 4 -7" fill="none" stroke="${COCOA}" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M78 38 q3 -5 8 -6" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" opacity="0.6"/>
        <path d="M67 46 q-9 0 -9 8 q0 9 9 13 q9 -4 9 -13 q0 -8 -9 -8 Z" fill="#F76D8E" stroke="${COCOA}" stroke-width="2.5"/>
        <circle cx="64" cy="56" r="1.2" fill="#FFF1C4"/>
        <circle cx="70" cy="56" r="1.2" fill="#FFF1C4"/>
        <circle cx="67" cy="61" r="1.2" fill="#FFF1C4"/>
        <path d="M16 60 Q16 58 20 58 L115 58 Q119 58 119 60 Q118 82 105 91 Q91 99 67 99 Q43 99 29 91 Q16 82 16 60 Z"
              fill="#BFE0F7" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M24 74 Q67 84 111 74" fill="none" stroke="#8FC1E8" stroke-width="4" stroke-linecap="round"/>
        <path d="M24 64 Q40 68 56 68" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" opacity="0.6"/>
      `,
    },

    /* ---- wall shelf with spice jars ---- */
    spiceshelf: {
      w: 150, h: 100,
      sil: `<path d="M14 72 L22 72 L22 37 Q22 29 30 29 L44 29 Q52 29 52 37 L52 72 L58 72 L58 29 Q58 21 66 21 L82 21 Q90 21 90 29 L90 72 L96 72 L96 41 Q96 33 104 33 L116 33 Q124 33 124 41 L124 72 L136 72 Q140 72 140 76 L140 82 Q140 86 136 86 L14 86 Q10 86 10 82 L10 76 Q10 72 14 72 Z"/>`,
      body: `
        <rect x="26" y="30" width="22" height="9" rx="4.5" fill="#FFF2DC" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="24" y="37" width="26" height="35" rx="7" fill="#C5E8D6" stroke="${COCOA}" stroke-width="3"/>
        <rect x="29" y="47" width="16" height="13" rx="3" fill="#FFFDF6"/>
        <circle cx="37" cy="53.5" r="2.6" fill="#7FBF98"/>
        <rect x="62" y="22" width="24" height="9" rx="4.5" fill="#FFF2DC" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="60" y="29" width="28" height="43" rx="8" fill="#F9BFCE" stroke="${COCOA}" stroke-width="3"/>
        <rect x="66" y="41" width="16" height="14" rx="3" fill="#FFFDF6"/>
        <path d="M74 45 c-1.6 -1.9 -4.6 -0.7 -4.6 1.5 c0 1.9 2.7 3.1 4.6 4.8 c1.9 -1.7 4.6 -2.9 4.6 -4.8 c0 -2.2 -3 -3.4 -4.6 -1.5 Z" fill="#EE8FA6"/>
        <rect x="100" y="34" width="20" height="9" rx="4.5" fill="#FFF2DC" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="98" y="41" width="24" height="31" rx="7" fill="#BFE0F7" stroke="${COCOA}" stroke-width="3"/>
        <rect x="102" y="50" width="16" height="12" rx="3" fill="#FFFDF6"/>
        <path d="M110 52 l1.3 2.9 3.1 0.4 -2.3 2.1 0.6 3.1 -2.7 -1.6 -2.7 1.6 0.6 -3.1 -2.3 -2.1 3.1 -0.4 Z" fill="#8FC1E8"/>
        <rect x="10" y="72" width="130" height="14" rx="7" fill="#EAB786" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M16 79 L134 79" stroke="#D9A468" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
      `,
    },

    /* ---- kawaii wall clock ---- */
    clock: {
      w: 110, h: 110,
      sil: `<circle cx="55" cy="55" r="47"/>`,
      body: `
        <circle cx="55" cy="55" r="46" fill="#FFD98E" stroke="${COCOA}" stroke-width="${SW}"/>
        <circle cx="55" cy="55" r="35" fill="#FFFDF6" stroke="${COCOA}" stroke-width="3"/>
        <path d="M55 26 v6 M84 55 h-6 M55 84 v-6 M26 55 h6" stroke="${COCOA}" stroke-width="3" stroke-linecap="round"/>
        <path d="M55 55 L45 45" stroke="${COCOA}" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M55 55 L67 44" stroke="${COCOA}" stroke-width="3" stroke-linecap="round"/>
        <circle cx="55" cy="55" r="4" fill="#EE8FA6" stroke="${COCOA}" stroke-width="2"/>
        <path d="M55 68 c-1.8 -2.2 -5.2 -0.8 -5.2 1.7 c0 2.2 3 3.5 5.2 5.4 c2.2 -1.9 5.2 -3.2 5.2 -5.4 c0 -2.5 -3.4 -3.9 -5.2 -1.7 Z" fill="#F9BFCE"/>
        <ellipse cx="18" cy="64" rx="4.5" ry="3.2" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="92" cy="64" rx="4.5" ry="3.2" fill="#F9AFC0" opacity="0.9"/>
        <path d="M28 34 Q34 25 44 21" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
      `,
    },

    /* ---- baby basil on the windowsill ---- */
    herb: {
      w: 95, h: 95,
      sil: `<path d="M25 56 A30 30 0 1 1 69 56 L74 56 Q77 56 77 59 L77 64 Q77 67 74 67 L72 67 L67.5 86 Q66.5 92 60 92 L34 92 Q27.5 92 26.5 86 L22 67 L20 67 Q17 67 17 64 L17 59 Q17 56 20 56 Z"/>`,
      body: `
        <path d="M47 58 L47 28 M47 52 Q37 46 33 33 M47 52 Q57 46 61 33" fill="none" stroke="#58A46F" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="47" cy="23" rx="7.5" ry="10" fill="#86CF9C" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="31" cy="28" rx="6" ry="8.5" transform="rotate(-24 31 28)" fill="#A7E0B6" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="63" cy="28" rx="6" ry="8.5" transform="rotate(24 63 28)" fill="#A7E0B6" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="38" cy="42" rx="5" ry="7" transform="rotate(-30 38 42)" fill="#6FBE8A" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="56" cy="42" rx="5" ry="7" transform="rotate(30 56 42)" fill="#6FBE8A" stroke="#58A46F" stroke-width="2"/>
        <rect x="22" y="56" width="50" height="12" rx="6" fill="#F8C3A4" stroke="${COCOA}" stroke-width="3"/>
        <rect x="27" y="58.5" width="12" height="4.5" rx="2.25" fill="#FFFFFF" opacity="0.45"/>
        <path d="M26 68 h42 l-4.5 19 a7 7 0 0 1 -7 6 h-19 a7 7 0 0 1 -7 -6 Z" fill="#F3AE8B" stroke="${COCOA}" stroke-width="3"/>
        <path d="M39 76 q2.5 3 5 0" ${o}/>
        <path d="M51 76 q2.5 3 5 0" ${o}/>
        <ellipse cx="36" cy="82" rx="3.4" ry="2.4" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="59" cy="82" rx="3.4" ry="2.4" fill="#F9AFC0" opacity="0.9"/>
      `,
    },

    /* ---- honey stool ---- */
    stool: {
      w: 110, h: 118,
      sil: `<path d="M13 34 A42 16 0 0 1 97 34 L97 38 Q97 46 89 48 L82 102 Q80 112 70 112 L40 112 Q30 112 28 102 L21 48 Q13 46 13 38 Z"/>`,
      body: `
        <path d="M21 46 L89 46 L82 100 Q80 108 71 108 L39 108 Q30 108 28 100 Z" fill="#F0CB92" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M27 58 Q55 63 83 58" fill="none" stroke="#DDAF70" stroke-width="3" stroke-linecap="round" stroke-dasharray="7 8"/>
        <path d="M55 74 c-2.2 -2.7 -6.4 -1 -6.4 2.1 c0 2.7 3.7 4.3 6.4 6.6 c2.7 -2.3 6.4 -3.9 6.4 -6.6 c0 -3.1 -4.2 -4.8 -6.4 -2.1 Z" fill="#EE8FA6"/>
        <ellipse cx="55" cy="34" rx="42" ry="15" fill="#F9BFCE" stroke="${COCOA}" stroke-width="${SW}"/>
        <ellipse cx="55" cy="31" rx="30" ry="9" fill="#FBD9E2"/>
      `,
    },

    /* ════════ PLANT CORNER stickers ════════ */

    /* ---- big monstera in a woven basket ---- */
    monstera: {
      w: 150, h: 160,
      sil: `<path d="M31 96 L30 58 Q26 44 36 42 Q44 26 58 26 Q64 14 75 14 Q86 14 92 26 Q106 26 114 42 Q124 44 120 58 L119 96 Q123 96 123 100 L123 104 Q123 108 119 108 L116.5 108 L110 148 Q108.5 156 100 156 L50 156 Q41.5 156 40 148 L33.5 108 L31 108 Q27 108 27 104 L27 100 Q27 96 31 96 Z"/>`,
      body: `
        <path d="M75 98 C 52 90 34 78 28 52 C 46 42 68 60 75 98 Z" fill="#8FCF9F" stroke="#58A46F" stroke-width="3"/>
        <path d="M75 98 C 98 90 116 78 122 52 C 104 42 82 60 75 98 Z" fill="#8FCF9F" stroke="#58A46F" stroke-width="3"/>
        <path d="M75 96 C 56 76 50 52 58 30 C 74 36 82 66 75 96 Z" fill="#A7DFB5" stroke="#58A46F" stroke-width="3"/>
        <path d="M75 96 C 94 76 100 52 92 30 C 76 36 68 66 75 96 Z" fill="#A7DFB5" stroke="#58A46F" stroke-width="3"/>
        <path d="M75 98 C 64 68 64 40 75 18 C 86 40 86 68 75 98 Z" fill="#6FBE8A" stroke="#58A46F" stroke-width="3"/>
        <path d="M75 88 L75 32" stroke="#58A46F" stroke-width="2.5" stroke-linecap="round" opacity="0.75"/>
        <path d="M40 58 q8 -8 16 -10" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
        <path d="M110 58 q-8 -8 -16 -10" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
        <rect x="27" y="94" width="96" height="14" rx="7" fill="#E8C08A" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M33 108 h84 l-6.5 40 a9 9 0 0 1 -9 8 h-53 a9 9 0 0 1 -9 -8 Z" fill="#F0CD9C" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M38 122 Q75 130 112 122" fill="none" stroke="#D9A468" stroke-width="3" stroke-dasharray="10 8" stroke-linecap="round"/>
        <path d="M42 138 Q75 145 108 138" fill="none" stroke="#D9A468" stroke-width="3" stroke-dasharray="10 8" stroke-linecap="round"/>
      `,
    },

    /* ---- hanging fern ball in a rope net ---- */
    hangplant: {
      w: 120, h: 120,
      sil: `<path d="M53 12 Q51 2 60 2 Q69 2 67 12 L76 34 A38 38 0 1 1 44 34 Z"/>`,
      body: `
        <circle cx="60" cy="9" r="7" fill="#E8C08A" stroke="${COCOA}" stroke-width="3"/>
        <path d="M56 15 L46 40 M64 15 L74 40 M60 16 L60 42" stroke="#D9A468" stroke-width="3" stroke-linecap="round"/>
        <circle cx="60" cy="68" r="36" fill="#7FC494" stroke="#58A46F" stroke-width="${SW}"/>
        <ellipse cx="38" cy="52" rx="8" ry="12" transform="rotate(-34 38 52)" fill="#A7DFB5" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="82" cy="52" rx="8" ry="12" transform="rotate(34 82 52)" fill="#A7DFB5" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="60" cy="42" rx="9" ry="12" fill="#8FCF9F" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="34" cy="78" rx="7" ry="10" transform="rotate(-70 34 78)" fill="#6FBE8A" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="86" cy="78" rx="7" ry="10" transform="rotate(70 86 78)" fill="#6FBE8A" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="60" cy="94" rx="9" ry="11" fill="#8FCF9F" stroke="#58A46F" stroke-width="2"/>
        <path d="M30 58 Q60 76 90 58" fill="none" stroke="#E8C08A" stroke-width="3" opacity="0.9"/>
        <path d="M36 90 Q60 72 84 90" fill="none" stroke="#E8C08A" stroke-width="3" opacity="0.9"/>
        <circle cx="48" cy="66" r="2.5" fill="#FFFFFF" opacity="0.7"/>
        <circle cx="72" cy="62" r="2.5" fill="#FFFFFF" opacity="0.7"/>
        <circle cx="60" cy="80" r="2.5" fill="#FFFFFF" opacity="0.7"/>
      `,
    },

    /* ---- three cactus friends in a tray ---- */
    cactustrio: {
      w: 140, h: 105,
      sil: `<path d="M14 84 Q14 78 20 78 L23 78 A17 19 0 1 1 57 78 L60 78 L60 34 Q60 20 71 20 Q82 20 82 34 L82 78 L88 78 A15 16 0 1 1 118 78 L120 78 Q126 78 126 84 L126 90 Q126 96 120 96 L20 96 Q14 96 14 90 Z"/>`,
      body: `
        <ellipse cx="40" cy="60" rx="16" ry="19" fill="#8FCF9F" stroke="#58A46F" stroke-width="3"/>
        <path d="M34 48 v22 M46 48 v22" stroke="#6FB884" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="40" cy="41" r="5" fill="#F49BB0" stroke="${COCOA}" stroke-width="2"/>
        <circle cx="40" cy="41" r="1.8" fill="#FFF1C4"/>
        <path d="M36 62 q2.5 3 5 0" ${o}/>
        <ellipse cx="33" cy="67" rx="3" ry="2.2" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="49" cy="67" rx="3" ry="2.2" fill="#F9AFC0" opacity="0.9"/>
        <rect x="60" y="22" width="22" height="56" rx="11" fill="#7FC494" stroke="#58A46F" stroke-width="3"/>
        <path d="M66 32 v36 M76 32 v36" stroke="#6FB884" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="71" cy="21" r="4.5" fill="#FFD98E" stroke="${COCOA}" stroke-width="2"/>
        <path d="M64 40 l-3 -2 M78 48 l3 -2 M64 56 l-3 2 M78 62 l3 2" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="103" cy="64" rx="15" ry="16" fill="#A7DFB5" stroke="#58A46F" stroke-width="3"/>
        <circle cx="97" cy="58" r="1.5" fill="#FFFFFF" opacity="0.9"/>
        <circle cx="109" cy="56" r="1.5" fill="#FFFFFF" opacity="0.9"/>
        <circle cx="103" cy="70" r="1.5" fill="#FFFFFF" opacity="0.9"/>
        <path d="M99 63 q2.5 3 5 0" ${o}/>
        <rect x="14" y="76" width="112" height="20" rx="10" fill="#F3AE8B" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M22 86 Q70 92 118 86" fill="none" stroke="#E0955F" stroke-width="2.5" stroke-dasharray="5 7" stroke-linecap="round"/>
      `,
    },

    /* ---- lilac watering can ---- */
    wateringcan: {
      w: 135, h: 115,
      sil: `<path d="M30 96 L30 54 Q30 42 42 42 L48 42 Q50 22 65 22 Q80 22 82 42 L84 42 L104 32 Q108 24 115 29 Q122 34 116 41 L98 58 L96 58 L96 96 Q96 108 84 108 L42 108 Q30 108 30 96 Z"/>`,
      body: `
        <path d="M120 50 q3 6 -2 10" fill="none" stroke="#8FC1E8" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
        <path d="M127 41 q3 5 -1 9" fill="none" stroke="#8FC1E8" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
        <path d="M84 52 L106 35 L113 41 L96 60 Z" fill="#CBB4E8" stroke="${COCOA}" stroke-width="3"/>
        <ellipse cx="110" cy="37" rx="8.5" ry="6.5" transform="rotate(-38 110 37)" fill="#B39BD9" stroke="${COCOA}" stroke-width="2.5"/>
        <circle cx="107" cy="34" r="1.3" fill="#FFFDF6"/>
        <circle cx="113" cy="37" r="1.3" fill="#FFFDF6"/>
        <circle cx="109" cy="41" r="1.3" fill="#FFFDF6"/>
        <path d="M50 44 Q52 26 65 26 Q78 26 80 44" fill="none" stroke="${COCOA}" stroke-width="3.5" stroke-linecap="round"/>
        <rect x="30" y="42" width="66" height="66" rx="13" fill="#CBB4E8" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M34 94 Q63 100 92 94" fill="none" stroke="#B39BD9" stroke-width="3" stroke-linecap="round"/>
        <path d="M36 56 Q40 47 49 45" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
        <path d="M52 72 q3 3.4 6 0" ${o}/>
        <path d="M70 72 q3 3.4 6 0" ${o}/>
        <path d="M61 79 q3 2.8 6 0" ${o}/>
        <ellipse cx="49" cy="80" rx="4.2" ry="2.9" fill="#F9AFC0" opacity="0.9"/>
        <ellipse cx="79" cy="80" rx="4.2" ry="2.9" fill="#F9AFC0" opacity="0.9"/>
      `,
    },

    /* ---- sweet tulips in a vase ---- */
    tulipvase: {
      w: 110, h: 130,
      sil: `<path d="M23 50 A34 34 0 1 1 87 50 L82 62 Q88 68 88 80 Q88 102 78 111 Q71 118 55 118 Q39 118 32 111 Q22 102 22 80 Q22 68 28 62 Z"/>`,
      body: `
        <path d="M39 34 L47 62 M55 26 L55 60 M71 34 L63 62" stroke="#58A46F" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="44" cy="52" rx="7" ry="4.5" transform="rotate(-32 44 52)" fill="#86CF9C" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="66" cy="52" rx="7" ry="4.5" transform="rotate(32 66 52)" fill="#86CF9C" stroke="#58A46F" stroke-width="2"/>
        <path d="M30 24 q0 -13 9 -13 q9 0 9 13 q0 8 -9 10 q-9 -2 -9 -10 Z" fill="#F49BB0" stroke="${COCOA}" stroke-width="2.5"/>
        <path d="M39 13 v17" stroke="#E37E9C" stroke-width="2" stroke-linecap="round"/>
        <path d="M46 16 q0 -13 9 -13 q9 0 9 13 q0 8 -9 10 q-9 -2 -9 -10 Z" fill="#FFD98E" stroke="${COCOA}" stroke-width="2.5"/>
        <path d="M55 5 v17" stroke="#EAB65C" stroke-width="2" stroke-linecap="round"/>
        <path d="M62 24 q0 -13 9 -13 q9 0 9 13 q0 8 -9 10 q-9 -2 -9 -10 Z" fill="#CBB4E8" stroke="${COCOA}" stroke-width="2.5"/>
        <path d="M71 13 v17" stroke="#A98BD4" stroke-width="2" stroke-linecap="round"/>
        <path d="M32 64 Q24 70 24 82 Q24 102 34 110 Q42 116 55 116 Q68 116 76 110 Q86 102 86 82 Q86 70 78 64 Z" fill="#BFE0F7" stroke="${COCOA}" stroke-width="${SW}"/>
        <rect x="32" y="58" width="46" height="10" rx="5" fill="#D3ECFA" stroke="${COCOA}" stroke-width="3"/>
        <path d="M30 88 Q42 94 55 90 Q68 86 80 92" fill="none" stroke="#8FC1E8" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M30 76 Q34 68 42 66" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" opacity="0.6"/>
      `,
    },

    /* ---- little hanging grow-sign ---- */
    sign: {
      w: 120, h: 110,
      sil: `<path d="M55 10 Q53 2 60 2 Q67 2 65 10 L94 40 Q100 42 100 48 L100 88 Q100 98 90 98 L30 98 Q20 98 20 88 L20 48 Q20 42 26 40 Z"/>`,
      body: `
        <circle cx="60" cy="8" r="5" fill="#B98F7B" stroke="${COCOA}" stroke-width="2.5"/>
        <path d="M58 12 L30 44 M62 12 L90 44" stroke="#D9A468" stroke-width="3" stroke-linecap="round"/>
        <rect x="20" y="42" width="80" height="56" rx="10" fill="#E8C08A" stroke="${COCOA}" stroke-width="${SW}"/>
        <rect x="26" y="48" width="68" height="44" rx="7" fill="none" stroke="#D9A468" stroke-width="2.5" stroke-dasharray="6 6"/>
        <path d="M60 84 L60 68" stroke="#58A46F" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="52" cy="64" rx="8" ry="5.5" transform="rotate(-28 52 64)" fill="#86CF9C" stroke="#58A46F" stroke-width="2"/>
        <ellipse cx="68" cy="64" rx="8" ry="5.5" transform="rotate(28 68 64)" fill="#86CF9C" stroke="#58A46F" stroke-width="2"/>
        <circle cx="38" cy="57" r="2.2" fill="#F49BB0"/>
        <circle cx="82" cy="57" r="2.2" fill="#F49BB0"/>
        <circle cx="60" cy="90" r="2.2" fill="#F49BB0"/>
      `,
    },

    /* ---- bumble bee buddy ---- */
    bee: {
      w: 110, h: 84,
      sil: `<path d="M38 36 Q30 14 46 14 Q56 14 54 30 Q58 26 62 28 Q60 12 74 12 Q86 14 78 32 Q86 38 86 50 Q86 70 60 70 Q34 70 34 50 Q34 42 38 36 Z"/>`,
      body: `
        <path d="M8 62 q8 -16 22 -8 q10 6 2 12" fill="none" stroke="${COCOA}" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="1 7" opacity="0.6"/>
        <ellipse cx="46" cy="24" rx="11" ry="8" transform="rotate(-24 46 24)" fill="#EAF6FF" stroke="${COCOA}" stroke-width="2.5" opacity="0.95"/>
        <ellipse cx="70" cy="22" rx="11" ry="8" transform="rotate(18 70 22)" fill="#EAF6FF" stroke="${COCOA}" stroke-width="2.5" opacity="0.95"/>
        <ellipse cx="60" cy="48" rx="26" ry="20" fill="#FFD98E" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M43 32 C 40 43 40 53 43 64 L 52 66 C 49 54 49 42 52 30 Z" fill="${COCOA}"/>
        <path d="M60 28.5 C 58 41 58 55 60 67.5 L 69 66 C 68 54 68 42 69 30 Z" fill="${COCOA}"/>
        <path d="M74 44 q2.5 3 5 0" ${o}/>
        <path d="M77 52 q2 2.4 4 0" ${o}/>
        <ellipse cx="72" cy="54" rx="3.4" ry="2.4" fill="#F9AFC0" opacity="0.9"/>
        <path d="M36 44 q-4 -1 -5 3" stroke="${COCOA}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      `,
    },
  };

  /* ---------------------------------------------------------- *
   *  ROOM SCENE — the cozy bedroom base (720 × 920)             *
   *  Everything here is decor; stickers get placed on top.      *
   * ---------------------------------------------------------- */
  function bedroomScene(p) {
    // polka dots on the floor
    let dots = '';
    for (let r = 0; r < 3; r++) {
      for (let i = 0; i < 8; i++) {
        dots += `<circle cx="${55 + i * 92 + (r % 2) * 46}" cy="${688 + r * 82}" r="6" fill="#FFFFFF" opacity="0.16"/>`;
      }
    }

    // soft wall texture: sparse dots + two little sparkle-crosses
    let wallDeco = '';
    [[60, 400], [180, 360], [300, 395], [352, 298], [430, 335], [640, 350], [110, 455], [560, 330]]
      .forEach(([x, y]) => { wallDeco += `<circle cx="${x}" cy="${y}" r="5" fill="#FFFFFF" opacity="0.13"/>`; });
    wallDeco += `
      <path d="M245 340 h14 M252 333 v14" stroke="#F2C9CF" stroke-width="3.5" stroke-linecap="round" opacity="0.55"/>
      <path d="M683 318 h14 M690 311 v14" stroke="#F2C9CF" stroke-width="3.5" stroke-linecap="round" opacity="0.55"/>`;

    // fairy lights
    const bulbCols = ['#FFD98E', '#F9BFCE', '#BEE8CD', '#BFE0F7'];
    const bulbs = [[60, 72], [160, 81], [260, 62], [360, 50], [450, 70], [545, 64], [645, 48]]
      .map(([x, y], i) => `
        <circle cx="${x}" cy="${y}" r="14" fill="${bulbCols[i % 4]}" opacity="0.28"/>
        <circle cx="${x}" cy="${y}" r="8" fill="${bulbCols[i % 4]}" stroke="${COCOA}" stroke-width="2.5"/>`)
      .join('');

    return `
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
        <clipPath id="winClip"><rect x="0" y="0" width="244" height="216" rx="16"/></clipPath>
      </defs>

      <rect x="0" y="0" width="720" height="608" fill="url(#wallG)"/>
      <rect x="0" y="604" width="720" height="316" fill="url(#floorG)"/>
      <rect x="-6" y="596" width="732" height="15" rx="7.5" fill="#FFF4E4" stroke="#EAC9A8" stroke-width="2"/>
      ${dots}
      ${wallDeco}
      <ellipse cx="205" cy="700" rx="150" ry="42" fill="#FFFFFF" opacity="0.12"/>

      <path d="M-10 44 C 90 96 190 80 290 58 C 390 38 430 76 520 66 C 600 57 660 46 730 40"
            fill="none" stroke="#B98F7B" stroke-width="4" stroke-linecap="round"/>
      ${bulbs}

      <!-- window -->
      <g transform="translate(58 88)">
        <rect x="-26" y="-26" width="296" height="10" rx="5" fill="#EAB786" stroke="${COCOA}" stroke-width="2.5"/>
        <circle cx="-26" cy="-21" r="8" fill="#EAB786" stroke="${COCOA}" stroke-width="2.5"/>
        <circle cx="270" cy="-21" r="8" fill="#EAB786" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="-10" y="-10" width="264" height="240" rx="24" fill="#FFF7EA" stroke="#E8C7A6" stroke-width="3"/>
        <rect x="0" y="0" width="244" height="216" rx="16" fill="url(#skyG)" stroke="${COCOA}" stroke-width="3"/>
        <g clip-path="url(#winClip)">
          <circle cx="58" cy="54" r="22" fill="#FFE29E" stroke="#F2C46F" stroke-width="3"/>
          <ellipse cx="150" cy="64" rx="34" ry="16" fill="#FFFFFF" opacity="0.95"/>
          <ellipse cx="172" cy="52" rx="22" ry="14" fill="#FFFFFF" opacity="0.95"/>
          <path d="M0 216 q 60 -52 124 -36 q 66 17 120 -6 l0 42 l-244 0 Z" fill="#CDEBD2" opacity="0.9"/>
          <rect x="117" y="0" width="10" height="216" fill="#FFF7EA" opacity="0.9"/>
          <rect x="0" y="102" width="244" height="10" fill="#FFF7EA" opacity="0.9"/>
        </g>
        <rect x="0" y="0" width="244" height="216" rx="16" fill="none" stroke="${COCOA}" stroke-width="3"/>
        <rect x="-18" y="214" width="280" height="18" rx="9" fill="#FFF7EA" stroke="#E8C7A6" stroke-width="3"/>
        <path d="M-6 -16 Q 42 88 -2 206 L -20 206 L -20 -16 Z" fill="#FBCAD6" stroke="#E9A9BB" stroke-width="3"/>
        <path d="M250 -16 Q 202 88 246 206 L 264 206 L 264 -16 Z" fill="#FBCAD6" stroke="#E9A9BB" stroke-width="3"/>
        <circle cx="2" cy="30" r="4" fill="#FFFFFF" opacity="0.55"/>
        <circle cx="10" cy="82" r="4" fill="#FFFFFF" opacity="0.55"/>
        <circle cx="0" cy="136" r="4" fill="#FFFFFF" opacity="0.55"/>
        <circle cx="242" cy="30" r="4" fill="#FFFFFF" opacity="0.55"/>
        <circle cx="234" cy="82" r="4" fill="#FFFFFF" opacity="0.55"/>
        <circle cx="244" cy="136" r="4" fill="#FFFFFF" opacity="0.55"/>
      </g>

      <!-- bed -->
      <g transform="translate(420 398)">
        <ellipse cx="145" cy="348" rx="152" ry="20" fill="#B98F7B" opacity="0.18"/>
        <path d="M20 130 v-64 a52 52 0 0 1 52 -52 h146 a52 52 0 0 1 52 52 v64 Z" fill="#F6D9AF" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M38 128 v-56 a38 38 0 0 1 38 -38 h138 a38 38 0 0 1 38 38 v56 Z" fill="#FBEACC" stroke="#EBC9A0" stroke-width="2.5"/>
        <rect x="26" y="310" width="16" height="26" rx="6" fill="#EAB786" stroke="${COCOA}" stroke-width="3"/>
        <rect x="248" y="310" width="16" height="26" rx="6" fill="#EAB786" stroke="${COCOA}" stroke-width="3"/>
        <rect x="10" y="122" width="270" height="54" rx="18" fill="#FFFDF6" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M10 190 C 58 178 96 194 145 186 C 196 178 234 194 280 184 L 280 296 a26 26 0 0 1 -26 26 H 36 a26 26 0 0 1 -26 -26 Z"
              fill="#F9BFCE" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M32 300 q 14 12 28 0 q 14 12 28 0 q 14 12 28 0 q 14 12 28 0 q 14 12 28 0 q 14 12 28 0 q 14 12 28 0 q 14 12 28 0"
              fill="none" stroke="#FFFFFF" stroke-width="3.5" opacity="0.85"/>
        <circle cx="70" cy="226" r="5" fill="#FFFFFF" opacity="0.6"/>
        <circle cx="130" cy="262" r="5" fill="#FFFFFF" opacity="0.6"/>
        <circle cx="205" cy="228" r="5" fill="#FFFFFF" opacity="0.6"/>
        <circle cx="245" cy="272" r="5" fill="#FFFFFF" opacity="0.6"/>
        <circle cx="95" cy="288" r="5" fill="#FFFFFF" opacity="0.6"/>
        <path d="M168 246 c-2.4 -2.9 -7 -1 -7 2.3 c0 2.9 4.1 4.7 7 7.2 c2.9 -2.5 7 -4.3 7 -7.2 c0 -3.3 -4.6 -5.2 -7 -2.3 Z" fill="#FFFFFF" opacity="0.75"/>
        <g transform="rotate(-8 92 146)">
          <rect x="34" y="118" width="118" height="54" rx="26" fill="#FFFDF6" stroke="${COCOA}" stroke-width="${SW}"/>
          <ellipse cx="66" cy="146" rx="5" ry="3.4" fill="#F9AFC0" opacity="0.8"/>
          <ellipse cx="120" cy="146" rx="5" ry="3.4" fill="#F9AFC0" opacity="0.8"/>
        </g>
        <g transform="translate(58 202) rotate(-9)">
          <path d="M0 7 c-7.5 -9 -23 -3 -23 8.5 c0 10 14 15.5 23 24 c9 -8.5 23 -14 23 -24 c0 -11.5 -15.5 -17.5 -23 -8.5 Z"
                fill="#FFFDF6" stroke="${COCOA}" stroke-width="3.5"/>
        </g>
      </g>

      <!-- nightstand -->
      <g transform="translate(304 470)">
        <ellipse cx="49" cy="192" rx="56" ry="12" fill="#B98F7B" opacity="0.18"/>
        <rect x="12" y="164" width="14" height="20" rx="5" fill="#EAB786" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="72" y="164" width="14" height="20" rx="5" fill="#EAB786" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="6" y="96" width="86" height="74" rx="14" fill="#F6D9AF" stroke="${COCOA}" stroke-width="${SW}"/>
        <rect x="0" y="84" width="98" height="20" rx="10" fill="#FBEACC" stroke="${COCOA}" stroke-width="${SW}"/>
        <rect x="20" y="114" width="58" height="28" rx="9" fill="#FBEACC" stroke="#E5C08F" stroke-width="2.5"/>
        <circle cx="49" cy="128" r="5" fill="#EAB786" stroke="${COCOA}" stroke-width="2.5"/>
      </g>
    `;
  }

  /* ---------------------------------------------------------- *
   *  SUNNY KITCHEN scene (720 × 920)                            *
   * ---------------------------------------------------------- */
  function kitchenScene(p) {
    // soft checker tiles on the floor
    let tiles = '';
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 6; c++) {
        if ((r + c) % 2 === 0) {
          tiles += `<rect x="${18 + c * 118}" y="${626 + r * 92}" width="104" height="78" rx="14" fill="#FFFFFF" opacity="0.10"/>`;
        }
      }
    }

    // party bunting along the top
    const flagCols = ['#F9BFCE', '#BEE8CD', '#FFD98E', '#BFE0F7'];
    const flags = [[52, 62], [140, 76], [228, 82], [316, 78], [404, 66], [492, 56], [580, 50], [662, 46]]
      .map(([x, y], i) => `<path d="M${x} ${y} L${x + 34} ${y - 2} L${x + 19} ${y + 30} Z"
        fill="${flagCols[i % 4]}" stroke="${COCOA}" stroke-width="2.5" stroke-linejoin="round"/>`)
      .join('');

    let wallDeco = '';
    [[90, 380], [210, 420], [330, 440], [130, 470], [420, 450], [350, 140], [620, 300]]
      .forEach(([x, y]) => { wallDeco += `<circle cx="${x}" cy="${y}" r="5" fill="#FFFFFF" opacity="0.13"/>`; });
    wallDeco += `<path d="M607 262 h14 M614 255 v14" stroke="#F2D1A0" stroke-width="3.5" stroke-linecap="round" opacity="0.6"/>`;

    return `
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
        <clipPath id="winClip"><rect x="0" y="0" width="220" height="190" rx="14"/></clipPath>
      </defs>

      <rect x="0" y="0" width="720" height="608" fill="url(#wallG)"/>
      <rect x="0" y="604" width="720" height="316" fill="url(#floorG)"/>
      <rect x="-6" y="596" width="732" height="15" rx="7.5" fill="#FFF8E9" stroke="#EACFA0" stroke-width="2"/>
      ${tiles}
      ${wallDeco}
      <ellipse cx="200" cy="690" rx="150" ry="40" fill="#FFFFFF" opacity="0.12"/>

      <path d="M-10 46 Q 160 96 360 68 T 730 40" fill="none" stroke="#B98F7B" stroke-width="4" stroke-linecap="round"/>
      ${flags}

      <!-- window with café curtain -->
      <g transform="translate(64 98)">
        <rect x="-10" y="-10" width="240" height="230" rx="20" fill="#FFF7EA" stroke="#E8C7A6" stroke-width="3"/>
        <rect x="0" y="0" width="220" height="190" rx="14" fill="url(#skyG)" stroke="${COCOA}" stroke-width="3"/>
        <g clip-path="url(#winClip)">
          <circle cx="48" cy="46" r="18" fill="#FFE29E" stroke="#F2C46F" stroke-width="3"/>
          <ellipse cx="140" cy="52" rx="30" ry="13" fill="#FFFFFF" opacity="0.95"/>
          <ellipse cx="162" cy="42" rx="18" ry="11" fill="#FFFFFF" opacity="0.95"/>
          <path d="M0 190 q 55 -40 110 -28 q 60 13 110 -8 l0 36 l-220 0 Z" fill="#CDEBD2" opacity="0.9"/>
          <rect x="100" y="0" width="10" height="190" fill="#FFF7EA" opacity="0.9"/>
          <rect x="0" y="85" width="220" height="10" fill="#FFF7EA" opacity="0.9"/>
          <path d="M0 124 Q 27 112 55 124 T 110 124 T 165 124 T 220 124 L 220 190 L 0 190 Z"
                fill="#FDE0E9" stroke="#F0B9C9" stroke-width="3"/>
          <circle cx="36" cy="152" r="4" fill="#FFFFFF" opacity="0.7"/>
          <circle cx="110" cy="162" r="4" fill="#FFFFFF" opacity="0.7"/>
          <circle cx="184" cy="152" r="4" fill="#FFFFFF" opacity="0.7"/>
        </g>
        <rect x="0" y="0" width="220" height="190" rx="14" fill="none" stroke="${COCOA}" stroke-width="3"/>
        <rect x="-20" y="188" width="280" height="20" rx="10" fill="#FFF7EA" stroke="#E8C7A6" stroke-width="3"/>
      </g>

      <!-- fridge -->
      <g transform="translate(540 348)">
        <ellipse cx="82" cy="436" rx="88" ry="14" fill="#B98F7B" opacity="0.16"/>
        <rect x="18" y="424" width="20" height="10" rx="5" fill="#B98F7B" stroke="${COCOA}" stroke-width="2"/>
        <rect x="126" y="424" width="20" height="10" rx="5" fill="#B98F7B" stroke="${COCOA}" stroke-width="2"/>
        <rect x="0" y="0" width="164" height="428" rx="26" fill="#CDEBDD" stroke="${COCOA}" stroke-width="${SW}"/>
        <path d="M8 128 L156 128" stroke="${COCOA}" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="16" y="58" width="10" height="46" rx="5" fill="#FFF2DC" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="16" y="150" width="10" height="66" rx="5" fill="#FFF2DC" stroke="${COCOA}" stroke-width="2.5"/>
        <path d="M100 212 c-2.6 -3.1 -7.4 -1.1 -7.4 2.4 c0 3.1 4.3 5 7.4 7.7 c3.1 -2.7 7.4 -4.6 7.4 -7.7 c0 -3.5 -4.8 -5.5 -7.4 -2.4 Z" fill="#F49BB0" stroke="${COCOA}" stroke-width="2"/>
        <path d="M58 276 l2 4.6 5 0.5 -3.7 3.4 1 5 -4.3 -2.5 -4.3 2.5 1 -5 -3.7 -3.4 5 -0.5 Z" fill="#FFD98E" stroke="${COCOA}" stroke-width="2"/>
        <path d="M14 36 Q20 16 40 12" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.55"/>
      </g>

      <!-- counter with hob -->
      <g transform="translate(28 538)">
        <ellipse cx="236" cy="214" rx="230" ry="14" fill="#B98F7B" opacity="0.14"/>
        <rect x="10" y="26" width="452" height="182" rx="16" fill="#FBEACC" stroke="${COCOA}" stroke-width="${SW}"/>
        <rect x="28" y="46" width="132" height="142" rx="12" fill="#FFF8EC" stroke="#E5C08F" stroke-width="2.5"/>
        <circle cx="94" cy="117" r="6" fill="#EAB786" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="176" y="46" width="132" height="142" rx="12" fill="#FFF8EC" stroke="#E5C08F" stroke-width="2.5"/>
        <circle cx="242" cy="117" r="6" fill="#EAB786" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="324" y="46" width="122" height="64" rx="10" fill="#FFF8EC" stroke="#E5C08F" stroke-width="2.5"/>
        <rect x="364" y="72" width="42" height="8" rx="4" fill="#EAB786" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="324" y="122" width="122" height="66" rx="10" fill="#FFF8EC" stroke="#E5C08F" stroke-width="2.5"/>
        <rect x="364" y="150" width="42" height="8" rx="4" fill="#EAB786" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="0" y="0" width="472" height="26" rx="13" fill="#F6D9AF" stroke="${COCOA}" stroke-width="${SW}"/>
        <rect x="58" y="-14" width="98" height="22" rx="11" fill="#B98F7B" stroke="${COCOA}" stroke-width="3"/>
        <circle cx="107" cy="-3" r="12" fill="none" stroke="#EFD9B8" stroke-width="3.5"/>
      </g>
    `;
  }

  /* ---------------------------------------------------------- *
   *  PLANT CORNER scene (720 × 920)                             *
   * ---------------------------------------------------------- */
  function nookScene(p) {
    // wood plank floor
    let planks = '';
    [680, 760, 840].forEach((y) => { planks += `<path d="M0 ${y} L720 ${y}" stroke="#D9B98C" stroke-width="3" opacity="0.4"/>`; });
    [[170, 634], [430, 644], [650, 630], [90, 712], [320, 708], [560, 716], [210, 792], [470, 790], [120, 872], [390, 868], [630, 876]]
      .forEach(([x, y]) => { planks += `<path d="M${x} ${y} v18" stroke="#D9B98C" stroke-width="3" opacity="0.35" stroke-linecap="round"/>`; });

    // ivy garland along the beam
    const leafCols = ['#8FCF9F', '#A7DFB5'];
    let garland = `<path d="M-10 72 Q 90 94 190 76 T 390 76 T 590 76 T 730 66" fill="none" stroke="#7FB98B" stroke-width="3.5" stroke-linecap="round"/>`;
    [[60, 82], [130, 87], [200, 76], [270, 74], [340, 79], [410, 76], [480, 74], [550, 77], [620, 72], [680, 68]]
      .forEach(([x, y], i) => {
        garland += `<ellipse cx="${x}" cy="${y}" rx="8" ry="4.5" transform="rotate(${i % 2 ? 38 : -38} ${x} ${y})"
          fill="${leafCols[i % 2]}" stroke="#58A46F" stroke-width="1.8"/>`;
      });

    let wallDeco = '';
    [[350, 150], [430, 150], [330, 330], [450, 340], [360, 430], [240, 330], [250, 440], [600, 250]]
      .forEach(([x, y]) => { wallDeco += `<circle cx="${x}" cy="${y}" r="5" fill="#FFFFFF" opacity="0.16"/>`; });
    wallDeco += `<path d="M593 186 h14 M600 179 v14" stroke="#CFE0B8" stroke-width="3.5" stroke-linecap="round" opacity="0.8"/>
                 <path d="M273 476 h14 M280 469 v14" stroke="#CFE0B8" stroke-width="3.5" stroke-linecap="round" opacity="0.8"/>`;

    return `
      <defs>
        <linearGradient id="wallG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${p.wallTop}"/><stop offset="1" stop-color="${p.wallBottom}"/>
        </linearGradient>
        <linearGradient id="floorG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${p.floorTop}"/><stop offset="1" stop-color="${p.floorBottom}"/>
        </linearGradient>
        <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#C3E7F9"/><stop offset="1" stop-color="#EBF8FF"/>
        </linearGradient>
        <clipPath id="winClip"><path d="M0 238 L0 120 A120 120 0 0 1 240 120 L240 238 Z"/></clipPath>
      </defs>

      <rect x="0" y="0" width="720" height="608" fill="url(#wallG)"/>
      <rect x="0" y="604" width="720" height="316" fill="url(#floorG)"/>
      ${planks}
      <rect x="-6" y="596" width="732" height="15" rx="7.5" fill="#FBF7E4" stroke="#DCE2B8" stroke-width="2"/>
      ${wallDeco}
      <ellipse cx="176" cy="700" rx="150" ry="40" fill="#FFFFFF" opacity="0.12"/>

      <!-- ceiling beam + hook -->
      <rect x="-6" y="44" width="732" height="18" rx="9" fill="#E2B584" stroke="${COCOA}" stroke-width="3"/>
      ${garland}
      <path d="M240 62 v10" stroke="${COCOA}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="240" cy="79" r="6" fill="none" stroke="${COCOA}" stroke-width="4"/>

      <!-- arched window -->
      <g transform="translate(56 108)">
        <path d="M-10 240 L-10 120 A130 130 0 0 1 250 120 L250 240 Z" fill="#FBF7E4" stroke="#DCE0B4" stroke-width="3"/>
        <path d="M0 238 L0 120 A120 120 0 0 1 240 120 L240 238 Z" fill="url(#skyG)" stroke="${COCOA}" stroke-width="3"/>
        <g clip-path="url(#winClip)">
          <circle cx="54" cy="66" r="20" fill="#FFE29E" stroke="#F2C46F" stroke-width="3"/>
          <ellipse cx="150" cy="80" rx="30" ry="13" fill="#FFFFFF" opacity="0.95"/>
          <ellipse cx="172" cy="68" rx="18" ry="11" fill="#FFFFFF" opacity="0.95"/>
          <path d="M0 238 q 60 -44 120 -30 q 62 14 120 -8 l0 40 l-240 0 Z" fill="#CDEBD2" opacity="0.9"/>
          <rect x="114" y="0" width="12" height="238" fill="#FBF7E4" opacity="0.9"/>
          <rect x="0" y="132" width="240" height="10" fill="#FBF7E4" opacity="0.9"/>
        </g>
        <path d="M0 238 L0 120 A120 120 0 0 1 240 120 L240 238 Z" fill="none" stroke="${COCOA}" stroke-width="3"/>
        <rect x="-20" y="236" width="280" height="20" rx="10" fill="#FBF7E4" stroke="#DCE0B4" stroke-width="3"/>
      </g>

      <!-- plant ladder shelf -->
      <g transform="translate(470 300)">
        <ellipse cx="110" cy="424" rx="120" ry="13" fill="#B98F7B" opacity="0.16"/>
        <rect x="0" y="0" width="14" height="420" rx="7" fill="#E2B584" stroke="${COCOA}" stroke-width="3"/>
        <rect x="206" y="0" width="14" height="420" rx="7" fill="#E2B584" stroke="${COCOA}" stroke-width="3"/>
        <rect x="7" y="60" width="206" height="16" rx="8" fill="#EDC494" stroke="${COCOA}" stroke-width="3"/>
        <rect x="7" y="190" width="206" height="16" rx="8" fill="#EDC494" stroke="${COCOA}" stroke-width="3"/>
        <rect x="7" y="320" width="206" height="16" rx="8" fill="#EDC494" stroke="${COCOA}" stroke-width="3"/>
        <rect x="36" y="286" width="30" height="8" rx="4" fill="#F8C3A4" stroke="${COCOA}" stroke-width="2.5"/>
        <path d="M40 294 h22 l-3 24 h-16 Z" fill="#F3AE8B" stroke="${COCOA}" stroke-width="2.5"/>
        <rect x="76" y="296" width="24" height="7" rx="3.5" fill="#F5D0AE" stroke="${COCOA}" stroke-width="2"/>
        <path d="M79 303 h18 l-2.5 15 h-13 Z" fill="#F0CD9C" stroke="${COCOA}" stroke-width="2"/>
        <rect x="140" y="308" width="46" height="9" rx="3.5" fill="#F49BB0" stroke="${COCOA}" stroke-width="2"/>
        <rect x="146" y="299" width="38" height="9" rx="3.5" fill="#8FC1E8" stroke="${COCOA}" stroke-width="2"/>
      </g>
    `;
  }

  const scenes = { bedroom: bedroomScene, kitchen: kitchenScene, nook: nookScene };

  function roomBase(room) {
    const p = room.palette || {
      wallTop: '#FBE9DD', wallBottom: '#F8D7C6',
      floorTop: '#F6DEBD', floorBottom: '#F0CBA1', accent: '#EE8FA6',
    };
    return (scenes[room.id] || bedroomScene)(p);
  }

  /* ---------------------------------------------------------- *
   *  HELPERS                                                    *
   * ---------------------------------------------------------- */

  // A standalone sticker <svg> (tray, collection, ghost, hero…)
  // mode: 'die' = with white sticker border · 'plain' · 'mystery' = grey silhouette
  function stickerSVG(artId, mode = 'die', cls = '') {
    const a = stickers[artId];
    const pad = 18;
    const inner =
      mode === 'mystery'
        ? `<g class="sil-mystery">${a.sil}</g>`
        : `${mode === 'die' ? `<g class="sil-die">${a.sil}</g>` : ''}${a.body}`;
    return `<svg class="stk ${cls}" viewBox="${-pad} ${-pad} ${a.w + pad * 2} ${a.h + pad * 2}"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`;
  }

  // Dashed target-spot outline, positioned in room coordinates
  function spotMarkup(spec) {
    const a = stickers[spec.art];
    return `<g class="spot" data-spot="${spec.id}" transform="translate(${spec.x} ${spec.y}) scale(${spec.scale})">
      <g class="sil-spot" transform="translate(${-a.w / 2} ${-a.h / 2})">${a.sil}</g>
    </g>`;
  }

  // A placed sticker in the room (white die-cut + art + soft shadow)
  function placedMarkup(spec, withPop) {
    const a = stickers[spec.art];
    const shadow = spec.shadow
      ? `<ellipse cx="${a.w / 2}" cy="${a.h - 1}" rx="${a.w * 0.38}" ry="7" fill="${COCOA}" opacity="0.14"/>`
      : '';
    return `<g class="placed" data-id="${spec.id}" data-z="${spec.z || 0}" transform="translate(${spec.x} ${spec.y}) scale(${spec.scale})">
      <g class="breathe"><g class="inner${withPop ? ' pop' : ''}">
        <g transform="translate(${-a.w / 2} ${-a.h / 2})">
          ${shadow}
          <g class="sil-die">${a.sil}</g>
          ${a.body}
        </g>
      </g></g>
    </g>`;
  }

  // tiny star (used by particles + UI)
  const starPath = 'M0 -6 L1.7 -1.7 L6 0 L1.7 1.7 L0 6 L-1.7 1.7 L-6 0 L-1.7 -1.7 Z';

  // `scenes` and `stickers` are exposed so extra room packs
  // (js/rooms-plus.js, js/stickers-plus.js) can register more content.
  return { stickers, scenes, roomBase, stickerSVG, spotMarkup, placedMarkup, starPath, COCOA, SW };
})();
