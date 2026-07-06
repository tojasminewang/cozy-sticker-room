/* ============================================================
   COZY STICKER ROOM — save.js
   localStorage save. Delete the key in DevTools to start fresh:
     localStorage.removeItem('cozy-sticker-room-v1')
   ============================================================ */

window.CSR = window.CSR || {};

CSR.save = (() => {
  const KEY = 'cozy-sticker-room-v1';

  const fresh = () => ({
    coins: 0,
    sound: true,
    rooms: {},        // roomId → { placed: [stickerIds], done, rewarded }
    collection: [],   // stickerIds ever placed (sticker book)
  });

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return fresh();
      const data = { ...fresh(), ...JSON.parse(raw) };
      return data;
    } catch (e) {
      return fresh();
    }
  }

  function write(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* private mode etc. */ }
  }

  function room(data, roomId) {
    if (!data.rooms[roomId]) data.rooms[roomId] = { placed: [], done: false, rewarded: false };
    return data.rooms[roomId];
  }

  return { load, write, room, KEY };
})();
