/* ============================================================
   COZY STICKER ROOM — app.js
   Screens, drag & drop, sparkles, saving. Sections:
     1. state & helpers        4. gameplay (drag, place, win)
     2. screen router          5. particles & popup
     3. start / rooms / book   6. boot + debug API (__csr)
   ============================================================ */

(() => {
  const C = CSR.config;
  const A = CSR.art;
  const S = CSR.save;
  const X = CSR.audio;

  /* ------------------------------------------------ 1. state */
  const state = {
    data: S.load(),      // persistent save
    screen: 'start',
    roomId: null,
    runEarned: 0,        // coins earned since entering the room
    drag: null,
    resetArmed: false,
  };
  X.setOn(state.data.sound);

  const $ = (sel) => document.querySelector(sel);
  const els = {};
  const roomById = (id) => C.rooms.find((r) => r.id === id);
  const curRoom = () => roomById(state.roomId);
  const specById = (id) => curRoom().stickers.find((s) => s.id === id);

  const COIN_SVG = `<svg viewBox="0 0 24 24" class="coin-svg" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#FFD25E" stroke="#E0A93E" stroke-width="2.5"/>
    <path d="M12 6.8 l1.5 3.2 3.5 .4 -2.6 2.4 .7 3.4 -3.1 -1.7 -3.1 1.7 .7 -3.4 -2.6 -2.4 3.5 -.4 Z" fill="#FFF1C4"/></svg>`;
  const STAR_SVG = (c = '#FFD25E') => `<svg viewBox="-8 -8 16 16" aria-hidden="true">
    <path d="${A.starPath}" fill="${c}" stroke="#E0A93E" stroke-width="1"/></svg>`;

  // room-base markup with unique gradient ids (safe to embed many times)
  function baseWithIds(room, sfx) {
    let s = A.roomBase(room);
    ['wallG', 'floorG', 'skyG', 'winClip'].forEach((n) => {
      s = s.split(`id="${n}"`).join(`id="${n}-${sfx}"`).split(`#${n})`).join(`#${n}-${sfx})`);
    });
    return s;
  }

  /* ---------- room coordinate mapping (720 × 920 canvas) ---------- */
  const roomRect = () => els.roomSvg.getBoundingClientRect();
  const roomScale = () => roomRect().width / 720;
  const roomToClient = (x, y) => {
    const r = roomRect();
    return { x: r.left + (x / 720) * r.width, y: r.top + (y / 920) * r.height };
  };
  const clientToRoom = (x, y) => {
    const r = roomRect();
    return { x: ((x - r.left) / r.width) * 720, y: ((y - r.top) / r.height) * 920 };
  };

  /* ------------------------------------------------ 2. router */
  function goto(name) {
    state.screen = name;
    document.querySelectorAll('.screen').forEach((s) =>
      s.classList.toggle('active', s.id === `screen-${name}`));
    if (name === 'start') updateCoins();
    if (name === 'rooms') renderRooms();
    if (name === 'collection') renderCollection();
  }

  function updateCoins() {
    document.querySelectorAll('.coin-num').forEach((el) => (el.textContent = state.data.coins));
  }

  /* ------------------------------------- 3. start / rooms / book */
  function renderRooms() {
    updateCoins();
    els.roomCards.innerHTML = C.rooms.map((room) => {
      if (room.locked) {
        return `<button class="room-card locked" disabled>
          <div class="room-thumb"><svg viewBox="0 0 48 48" class="lock">
            <rect x="10" y="20" width="28" height="22" rx="8" fill="#D9C6B4"/>
            <path d="M16 20 v-4 a8 8 0 0 1 16 0 v4" fill="none" stroke="#D9C6B4" stroke-width="5" stroke-linecap="round"/>
            <circle cx="24" cy="30" r="3.4" fill="#FFF7EA"/></svg></div>
          <div class="room-info"><h3>${room.name}</h3>
            <span class="chip chip-soft">Coming soon ✦</span></div>
        </button>`;
      }
      const rm = S.room(state.data, room.id);
      const placed = room.stickers.filter((s) => rm.placed.includes(s.id));
      const done = placed.length === room.stickers.length && room.stickers.length > 0;
      const preview = `<svg viewBox="0 0 720 920">${baseWithIds(room, 'p-' + room.id)}
        ${placed.sort((a, b) => (a.z || 0) - (b.z || 0)).map((s) => A.placedMarkup(s, false)).join('')}</svg>`;
      return `<button class="room-card" data-room="${room.id}">
        <div class="room-thumb">${preview}</div>
        <div class="room-info">
          <h3>${room.name}</h3>
          <span class="chip ${done ? 'chip-done' : ''}">${done ? '✓ Complete' : `${placed.length}/${room.stickers.length} stickers`}</span>
          <span class="go">${done ? 'visit again ➜' : 'decorate ➜'}</span>
        </div>
      </button>`;
    }).join('');

    els.roomCards.querySelectorAll('[data-room]').forEach((b) =>
      b.addEventListener('click', () => { X.click(); startRoom(b.dataset.room); }));
  }

  function renderCollection() {
    const rooms = C.rooms.filter((r) => r.stickers && r.stickers.length);
    const all = rooms.flatMap((r) => r.stickers);
    const got = all.filter((s) => state.data.collection.includes(s.id));
    els.collectionCount.textContent = `${got.length}/${all.length}`;
    els.collectionList.innerHTML = rooms.map((room) => `
      <h3 class="col-room">${room.name}</h3>
      <div class="col-grid">
        ${room.stickers.map((s) => {
          const has = state.data.collection.includes(s.id);
          return `<div class="col-card ${has ? 'got' : 'missing'}">
            ${A.stickerSVG(s.art, has ? 'die' : 'mystery')}
            <span class="col-name">${has ? s.name : '???'}</span>
          </div>`;
        }).join('')}
      </div>`).join('');
  }

  /* ------------------------------------------------ 4. gameplay */
  function startRoom(id) {
    state.roomId = id;
    state.runEarned = 0;
    renderGame();
    goto('game');
  }

  function renderGame() {
    const room = curRoom();
    const rm = S.room(state.data, state.roomId);
    els.gameRoomName.textContent = room.name;

    // spots and placed stickers share one z-sorted layer, so a dashed
    // outline that belongs in front of a placed sticker draws on top of it
    const items = room.stickers.slice().sort((a, b) => (a.z || 0) - (b.z || 0));
    const spots = room.stickers.filter((s) => !rm.placed.includes(s.id));

    els.roomSvg.innerHTML = `
      <g id="gBase">${baseWithIds(room, 'game')}</g>
      <g id="gItems">${items.map((s) => (rm.placed.includes(s.id) ? A.placedMarkup(s, false) : A.spotMarkup(s))).join('')}</g>`;

    els.trayList.innerHTML = spots.map((s) => `
      <li data-id="${s.id}">
        <button class="tray-item" data-id="${s.id}" aria-label="${s.name}">
          ${A.stickerSVG(s.art, 'die')}
          <span class="tray-name">${s.name}</span>
        </button>
      </li>`).join('');

    updateProgress(false);
    setTrayComplete(rm.placed.length === room.stickers.length);
    els.btnReset.hidden = rm.placed.length === 0;
    disarmReset();
  }

  function updateProgress(bump = true) {
    const room = curRoom();
    const rm = S.room(state.data, state.roomId);
    els.progressNum.textContent = `${rm.placed.length}/${room.stickers.length}`;
    if (bump) {
      els.progressPill.classList.remove('bump');
      void els.progressPill.offsetWidth;
      els.progressPill.classList.add('bump');
    }
  }

  function setTrayComplete(done) {
    els.trayList.hidden = done;
    els.trayLabel.hidden = done;
    els.trayComplete.hidden = !done;
  }

  function insertPlaced(spec, pop) {
    const g = els.roomSvg.querySelector('#gItems');
    g.insertAdjacentHTML('beforeend', A.placedMarkup(spec, pop));
    const node = g.lastElementChild;
    const z = spec.z || 0;
    const before = [...g.children].find((ch) => ch !== node && Number(ch.dataset.z || 0) > z);
    if (before) g.insertBefore(node, before);
    return node;
  }

  function placeSticker(id, opts = {}) {
    const spec = specById(id);
    const rm = S.room(state.data, state.roomId);
    if (!spec || rm.placed.includes(id)) return false;

    rm.placed.push(id);
    if (!state.data.collection.includes(id)) {
      state.data.collection.push(id);
      state.data.coins += C.coinsPerSticker;
      state.runEarned += C.coinsPerSticker;
    }

    const spot = els.roomSvg.querySelector(`.spot[data-spot="${id}"]`);
    if (spot) { spot.classList.add('found'); setTimeout(() => spot.remove(), 350); }

    insertPlaced(spec, opts.pop !== false);

    const li = els.trayList.querySelector(`li[data-id="${id}"]`);
    if (li) { li.classList.add('gone'); setTimeout(() => li.remove(), 320); }

    if (opts.fx !== false) {
      const p = roomToClient(spec.x, spec.y);
      sparkleBurst(p.x, p.y);
      X.pop();
      if (navigator.vibrate) navigator.vibrate(12);
    }

    updateProgress();
    updateCoins();
    els.btnReset.hidden = false;
    S.write(state.data);

    if (rm.placed.length === curRoom().stickers.length) onRoomComplete(rm);
    return true;
  }

  function onRoomComplete(rm) {
    rm.done = true;
    if (!rm.rewarded) {
      rm.rewarded = true;
      state.data.coins += C.coinsPerRoom;
      state.runEarned += C.coinsPerRoom;
    }
    S.write(state.data);
    setTrayComplete(true);
    setTimeout(() => {
      X.complete();
      confetti();
      showPopup();
      updateCoins();
    }, 750);
  }

  /* ---------------- drag & drop ---------------- */
  function beginDrag(e, id) {
    if (state.drag || !els.popup.hidden) return;
    const spec = specById(id);
    const a = A.stickers[spec.art];
    const li = els.trayList.querySelector(`li[data-id="${id}"]`);
    const item = li.querySelector('.tray-item');

    const artPx = a.w * spec.scale * roomScale();          // final in-room width
    const ghost = document.createElement('div');
    ghost.className = 'ghost';
    ghost.innerHTML = A.stickerSVG(spec.art, 'die');
    ghost.style.width = artPx * ((a.w + 36) / a.w) + 'px'; // + die-cut padding
    ghost.style.left = e.clientX + 'px';
    ghost.style.top = e.clientY - C.dragLift + 'px';
    els.fx.appendChild(ghost);

    item.style.visibility = 'hidden';
    const spot = els.roomSvg.querySelector(`.spot[data-spot="${id}"]`);
    if (spot) spot.classList.add('hot');

    state.drag = {
      id, spec, a, li, item, ghost, spot,
      ptr: e.pointerId, x0: e.clientX, y0: e.clientY,
      t0: performance.now(), moved: false, rot: 0,
    };
    X.pick();
  }

  function moveDrag(e) {
    const d = state.drag;
    if (!d || e.pointerId !== d.ptr) return;
    if (Math.hypot(e.clientX - d.x0, e.clientY - d.y0) > 7) d.moved = true;
    d.rot = Math.max(-9, Math.min(9, d.rot * 0.75 + (e.movementX || 0) * 0.5));
    d.ghost.style.left = e.clientX + 'px';
    d.ghost.style.top = e.clientY - C.dragLift + 'px';
    d.ghost.style.setProperty('--r', d.rot.toFixed(1) + 'deg');
  }

  function endDrag(e, cancelled) {
    const d = state.drag;
    if (!d || (e && e.pointerId !== d.ptr)) return;
    state.drag = null;
    if (d.spot) d.spot.classList.remove('hot');

    // a quick tap = show a hint (pulse the matching spot)
    const dt = performance.now() - d.t0;
    if (!cancelled && !d.moved && dt < 280) {
      d.ghost.remove();
      d.item.style.visibility = '';
      if (d.spot) {
        d.spot.classList.add('hint');
        setTimeout(() => d.spot.classList.remove('hint'), 1400);
      }
      X.click();
      return;
    }

    const gr = d.ghost.getBoundingClientRect();
    const center = { x: gr.left + gr.width / 2, y: gr.top + gr.height / 2 };
    const rp = clientToRoom(center.x, center.y);
    const dist = Math.hypot(rp.x - d.spec.x, rp.y - d.spec.y);

    if (!cancelled && dist <= C.snapDistance) {
      // ---- snap! glide onto the spot, then commit ----
      const p = roomToClient(d.spec.x, d.spec.y);
      d.ghost.classList.add('snap');
      d.ghost.style.setProperty('--r', '0deg');
      d.ghost.style.left = p.x + 'px';
      d.ghost.style.top = p.y + (C.dragLift * 0.55) + 'px'; // ghost anchor sits ~56% up
      setTimeout(() => { d.ghost.remove(); placeSticker(d.id); }, 150);
    } else {
      // ---- glide back to the tray ----
      const ir = d.item.getBoundingClientRect();
      d.ghost.classList.add('fly');
      d.ghost.style.left = ir.left + ir.width / 2 + 'px';
      d.ghost.style.top = ir.top + ir.height / 2 + 'px';
      d.ghost.style.width = ir.width * 0.9 + 'px';
      d.ghost.style.opacity = '0.25';
      setTimeout(() => { d.ghost.remove(); d.item.style.visibility = ''; }, 300);
      X.back();
    }
  }

  /* ---------------- reset (two-tap confirm) ---------------- */
  function disarmReset() {
    state.resetArmed = false;
    els.btnReset.classList.remove('armed');
    clearTimeout(state.resetTimer);
  }

  function onReset() {
    if (!state.resetArmed) {
      state.resetArmed = true;
      els.btnReset.classList.add('armed');
      X.click();
      state.resetTimer = setTimeout(disarmReset, 2600);
      return;
    }
    disarmReset();
    X.back();
    els.roomSvg.querySelectorAll('#gItems .placed .inner').forEach((el) => {
      el.classList.remove('pop');
      el.classList.add('peel');
    });
    setTimeout(() => {
      const rm = S.room(state.data, state.roomId);
      rm.placed = [];
      rm.done = false;      // rewarded stays true — no coin farming, just cozy replay
      S.write(state.data);
      hidePopup();
      renderGame();
    }, 330);
  }

  /* ------------------------------------- 5. particles & popup */
  function sparkleBurst(cx, cy, n = 13) {
    const colors = ['#FFD98E', '#FFFFFF', '#F9BFCE', '#BEE8CD', '#FFE9AE'];
    const ring = document.createElement('div');
    ring.className = 'fx-ring';
    ring.style.left = cx + 'px';
    ring.style.top = cy + 'px';
    els.fx.appendChild(ring);
    ring.animate(
      [{ transform: 'translate(-50%,-50%) scale(.3)', opacity: 0.9 },
       { transform: 'translate(-50%,-50%) scale(1.7)', opacity: 0 }],
      { duration: 480, easing: 'ease-out' }).onfinish = () => ring.remove();

    for (let i = 0; i < n; i++) {
      const s = document.createElement('div');
      s.className = 'fx-p';
      const size = 7 + Math.random() * 12;
      s.style.cssText = `left:${cx}px;top:${cy}px;width:${size}px;height:${size}px`;
      s.innerHTML = STAR_SVG(colors[i % colors.length]);
      els.fx.appendChild(s);
      const ang = Math.random() * Math.PI * 2;
      const dist = 34 + Math.random() * 66;
      s.animate(
        [{ transform: 'translate(-50%,-50%) scale(.3) rotate(0deg)', opacity: 1 },
         { transform: `translate(calc(-50% + ${Math.cos(ang) * dist}px), calc(-50% + ${Math.sin(ang) * dist - 14}px)) scale(1) rotate(${Math.random() * 240 - 120}deg)`, opacity: 0 }],
        { duration: 520 + Math.random() * 380, easing: 'cubic-bezier(.16,.84,.44,1)' }
      ).onfinish = () => s.remove();
    }
  }

  function confetti() {
    const r = els.stage.getBoundingClientRect();
    const colors = ['#F49BB0', '#FFD98E', '#A7E0B6', '#8FC1E8', '#CBB4E8', '#FFFFFF'];
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      const star = Math.random() < 0.35;
      const size = star ? 12 + Math.random() * 10 : 8 + Math.random() * 7;
      const x = r.left + Math.random() * r.width;
      const y = r.top + r.height * (0.08 + Math.random() * 0.12);
      p.className = 'fx-p';
      p.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px`;
      p.innerHTML = star
        ? STAR_SVG(colors[i % colors.length])
        : `<svg viewBox="0 0 10 12"><rect width="10" height="12" rx="3" fill="${colors[i % colors.length]}"/></svg>`;
      els.fx.appendChild(p);
      const fall = r.height * (0.35 + Math.random() * 0.4);
      const sway = (Math.random() - 0.5) * 120;
      p.animate(
        [{ transform: 'translate(-50%,-50%) rotate(0deg)', opacity: 1 },
         { transform: `translate(calc(-50% + ${sway * 0.6}px), calc(-50% + ${fall * 0.5}px)) rotate(${180 + Math.random() * 180}deg)`, opacity: 1, offset: 0.6 },
         { transform: `translate(calc(-50% + ${sway}px), calc(-50% + ${fall}px)) rotate(${360 + Math.random() * 240}deg)`, opacity: 0 }],
        { duration: 1300 + Math.random() * 700, easing: 'cubic-bezier(.2,.6,.4,1)', delay: Math.random() * 250 }
      ).onfinish = () => p.remove();
    }
  }

  function showPopup() {
    const room = curRoom();
    els.popupSub.textContent = `${room.name} is looking adorable ♥`;
    if (state.runEarned > 0) {
      els.coinEarn.classList.remove('zero');
      countUp(els.coinEarnNum, state.runEarned, 800);
    } else {
      els.coinEarn.classList.add('zero');
      els.coinEarnNum.textContent = '';
    }
    els.popup.hidden = false;
    requestAnimationFrame(() => els.popup.classList.add('show'));
  }

  function hidePopup() {
    els.popup.classList.remove('show');
    setTimeout(() => { els.popup.hidden = true; }, 260);
  }

  function countUp(el, to, dur) {
    const t0 = performance.now();
    let lastTick = -1;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      const v = Math.round(to * (1 - Math.pow(1 - k, 3)));
      el.textContent = v;
      if (Math.floor(v / 8) !== lastTick) { lastTick = Math.floor(v / 8); X.coin(); }
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    setTimeout(() => { el.textContent = to; }, dur + 150); // backstop if rAF is throttled
  }

  function toast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add('show');
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => els.toast.classList.remove('show'), 2300);
  }

  /* ---------------- ambient floaties ---------------- */
  function spawnAmbient() {
    const shapes = [
      `<svg viewBox="0 0 60 32"><ellipse cx="24" cy="21" rx="17" ry="9" fill="#FFF"/><ellipse cx="38" cy="16" rx="13" ry="9" fill="#FFF"/></svg>`,
      `<svg viewBox="-8 -8 16 16"><path d="${A.starPath}" fill="#FFD98E"/></svg>`,
      `<svg viewBox="0 0 20 18"><path d="M10 4 c-2.4-3 -8-1.4 -8 2.6 c0 3.6 5 6 8 9 c3-3 8-5.4 8-9 c0-4 -5.6-5.6 -8-2.6Z" fill="#F9BFCE"/></svg>`,
    ];
    let html = '';
    for (let i = 0; i < 9; i++) {
      const w = 4 + Math.random() * 6;
      html += `<span class="amb" style="left:${4 + Math.random() * 88}%;top:${3 + Math.random() * 72}%;
        width:${w}cqw;--d:${7 + Math.random() * 9}s;--dl:${-Math.random() * 10}s;
        opacity:${0.25 + Math.random() * 0.3}">${shapes[i % 3]}</span>`;
    }
    els.ambient.innerHTML = html;
  }

  /* ------------------------------------------------ 6. boot */
  function boot() {
    ['stage', 'ambient', 'fx', 'toast', 'popup', 'roomCards', 'collectionList', 'collectionCount',
      'roomSvg', 'gameRoomName', 'progressPill', 'progressNum', 'trayList', 'trayLabel',
      'trayComplete', 'btnReset', 'popupSub', 'coinEarn', 'coinEarnNum']
      .forEach((id) => { els[id] = document.getElementById(id); });

    // decorate static bits
    document.querySelectorAll('.coin-ico').forEach((el) => (el.innerHTML = COIN_SVG));
    document.querySelectorAll('.pp-star, .star').forEach((el) => (el.innerHTML = STAR_SVG()));
    $('#heroBunny').innerHTML = A.stickerSVG('bunny', 'die');
    spawnAmbient();
    updateCoins();

    // sound button
    const btnSound = $('#btnSound');
    const syncSound = () => btnSound.classList.toggle('muted', !X.isOn());
    syncSound();
    btnSound.addEventListener('click', () => {
      state.data.sound = !X.isOn();
      X.setOn(state.data.sound);
      S.write(state.data);
      syncSound();
      X.click();
    });

    // navigation
    $('#btnPlay').addEventListener('click', () => { X.click(); goto('rooms'); });
    $('#btnCollection').addEventListener('click', () => { X.click(); goto('collection'); });
    document.querySelectorAll('[data-back]').forEach((b) =>
      b.addEventListener('click', () => { X.click(); goto(b.dataset.back); }));

    // gameplay controls
    els.btnReset.addEventListener('click', onReset);
    $('#btnNextRoom').addEventListener('click', () => {
      X.click();
      hidePopup();
      const idx = C.rooms.findIndex((r) => r.id === state.roomId);
      const next = C.rooms.slice(idx + 1).find((r) => !r.locked && r.stickers.length);
      if (next) startRoom(next.id);
      else { goto('rooms'); toast('More rooms are on the way! 🌸'); }
    });
    $('#btnStay').addEventListener('click', () => { X.click(); hidePopup(); });

    // drag & drop (delegated)
    els.trayList.addEventListener('pointerdown', (e) => {
      const item = e.target.closest('.tray-item');
      if (!item) return;
      e.preventDefault();
      beginDrag(e, item.dataset.id);
    });
    window.addEventListener('pointermove', moveDrag, { passive: true });
    window.addEventListener('pointerup', (e) => endDrag(e, false));
    window.addEventListener('pointercancel', (e) => endDrag(e, true));
    document.addEventListener('contextmenu', (e) => {
      if (e.target.closest('.tray-item')) e.preventDefault();
    });

    // unlock audio on first touch
    window.addEventListener('pointerdown', () => X.unlock(), { once: true, capture: true });

    goto('start');
    console.log('🧸 Cozy Sticker Room ready — debug helpers on window.__csr');
  }

  /* ---------------- debug / testing API ---------------- */
  window.__csr = {
    goto,
    startRoom,
    place(id) {
      if (state.screen !== 'game') startRoom(state.roomId || C.rooms[0].id);
      return placeSticker(id);
    },
    spotClient(id) { const s = specById(id); return roomToClient(s.x, s.y); },
    itemRect(id) {
      const el = els.trayList.querySelector(`.tray-item[data-id="${id}"]`);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    },
    screen: () => state.screen,
    save: () => JSON.parse(JSON.stringify(state.data)),
    wipe() { localStorage.removeItem(S.KEY); location.reload(); },
  };

  document.addEventListener('DOMContentLoaded', boot);
})();
