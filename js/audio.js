/* ============================================================
   COZY STICKER ROOM — audio.js
   All sound effects are generated with WebAudio (no files).
   Volumes are gentle on purpose — it's a relaxing game.
   ============================================================ */

window.CSR = window.CSR || {};

CSR.audio = (() => {
  let ctx = null;
  let master = null;
  let enabled = true;

  function ensure() {
    if (!enabled) return false;
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.45;
      master.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return true;
  }

  // one soft tone: frequency f → f1 over duration d
  function tone({ f = 440, f1, d = 0.15, type = 'sine', v = 0.4, at = 0 }) {
    if (!ensure()) return;
    const t0 = ctx.currentTime + at;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(f, t0);
    if (f1) osc.frequency.exponentialRampToValueAtTime(f1, t0 + d);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(v, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + d);
    osc.connect(g).connect(master);
    osc.start(t0);
    osc.stop(t0 + d + 0.05);
  }

  return {
    setOn(on) { enabled = on; if (on) ensure(); },
    isOn: () => enabled,
    unlock() { if (enabled) ensure(); },

    click() { tone({ f: 620, f1: 480, d: 0.06, type: 'triangle', v: 0.22 }); },
    pick()  { tone({ f: 500, f1: 680, d: 0.07, type: 'sine', v: 0.28 }); },
    pop()   {
      tone({ f: 330, f1: 740, d: 0.1, type: 'triangle', v: 0.42 });
      tone({ f: 1250, f1: 1600, d: 0.06, type: 'sine', v: 0.12, at: 0.03 });
    },
    back()  { tone({ f: 300, f1: 205, d: 0.13, type: 'sine', v: 0.18 }); },
    coin()  { tone({ f: 1150, f1: 1520, d: 0.08, type: 'triangle', v: 0.16 }); },
    complete() {
      [523, 659, 784, 1047].forEach((f, i) =>
        tone({ f, d: 0.34, type: 'sine', v: 0.3, at: i * 0.11 }));
      [1480, 1720, 1980, 2260].forEach((f, i) =>
        tone({ f, d: 0.22, type: 'sine', v: 0.08, at: 0.4 + i * 0.07 }));
    },
  };
})();
