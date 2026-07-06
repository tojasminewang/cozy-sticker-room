/* ============================================================
   COZY STICKER ROOM — config.js
   All the game tuning lives here. Edit freely!

   To add a sticker to a room:
     1. Draw it in js/art.js (add an entry to CSR.art.stickers)
     2. Add a line to the room's `stickers` array below:
        { id, art, name, x, y, scale, z, shadow }
        x/y  = the sticker's target spot, in room coordinates
               (the room canvas is 720 wide × 920 tall)
        z    = draw order (0 = behind, bigger = in front)
   To add a room: copy the bedroom block and give it new stickers.
   ============================================================ */

window.CSR = window.CSR || {};

CSR.config = {
  gameTitle: 'Cozy Sticker Room',

  // --- economy ---
  coinsPerSticker: 2,   // first time a sticker is ever placed
  coinsPerRoom: 30,     // first time a room is completed

  // --- feel ---
  snapDistance: 110,    // how close (room units) a drop must be to snap
  dragLift: 26,         // px the sticker floats above your finger

  rooms: [
    {
      id: 'bedroom',
      name: 'Cozy Bedroom',
      // soft palette for this room (walls / floor accents)
      palette: {
        wallTop: '#FBE9DD', wallBottom: '#F8D7C6',
        floorTop: '#F6DEBD', floorBottom: '#F0CBA1',
        accent: '#EE8FA6',
      },
      stickers: [
        { id: 'rug',    art: 'rug',       name: 'Scallop Rug',    x: 264, y: 812, scale: 2.05, z: 0, shadow: false },
        { id: 'shelf',  art: 'bookshelf', name: 'Book Nook',      x: 148, y: 598, scale: 1.5,  z: 1, shadow: true  },
        { id: 'lamp',   art: 'lamp',      name: 'Glow Lamp',      x: 353, y: 494, scale: 0.95, z: 2, shadow: false },
        { id: 'plant',  art: 'plant',     name: 'Leafy Friend',   x: 655, y: 840, scale: 1.0,  z: 3, shadow: true  },
        { id: 'bunny',  art: 'bunny',     name: 'Mochi Bunny',    x: 600, y: 494, scale: 0.85, z: 2, shadow: false },
        { id: 'poster', art: 'poster',    name: 'Rainbow Poster', x: 562, y: 208, scale: 1.15, z: 1, shadow: false },
      ],
    },

    {
      id: 'kitchen',
      name: 'Sunny Kitchen',
      palette: {
        wallTop: '#FCF1DA', wallBottom: '#F9E3BC',
        floorTop: '#F7DFC2', floorBottom: '#F0CDA4',
        accent: '#F2B95C',
      },
      stickers: [
        { id: 'kettle',     art: 'kettle',     name: 'Tea Kettle',     x: 130, y: 484, scale: 0.95, z: 2, shadow: false },
        { id: 'toaster',    art: 'toaster',    name: 'Happy Toast',    x: 300, y: 497, scale: 0.95, z: 2, shadow: false },
        { id: 'fruitbowl',  art: 'fruitbowl',  name: 'Fruit Friends',  x: 428, y: 498, scale: 0.95, z: 3, shadow: false },
        { id: 'spiceshelf', art: 'spiceshelf', name: 'Spice Shelf',    x: 420, y: 296, scale: 1.2,  z: 1, shadow: false },
        { id: 'clock',      art: 'clock',      name: 'Tick-Tock',      x: 470, y: 158, scale: 1.0,  z: 1, shadow: false },
        { id: 'herb',       art: 'herb',       name: 'Baby Basil',     x: 176, y: 252, scale: 0.8,  z: 2, shadow: false },
        { id: 'stool',      art: 'stool',      name: 'Honey Stool',    x: 520, y: 810, scale: 1.1,  z: 2, shadow: true  },
      ],
    },

    {
      id: 'nook',
      name: 'Plant Corner',
      palette: {
        wallTop: '#F2F4E2', wallBottom: '#E9EDCD',
        floorTop: '#F0DDBA', floorBottom: '#E7C99B',
        accent: '#8FBF98',
      },
      stickers: [
        { id: 'monstera',  art: 'monstera',    name: 'Monstera Pal',  x: 140, y: 745, scale: 1.35, z: 2, shadow: true  },
        { id: 'hangplant', art: 'hangplant',   name: 'Sky Fern',      x: 240, y: 140, scale: 0.95, z: 1, shadow: false },
        { id: 'sign',      art: 'sign',        name: 'Grow Sign',     x: 385, y: 240, scale: 1.05, z: 1, shadow: false },
        { id: 'bee',       art: 'bee',         name: 'Bee Buddy',     x: 400, y: 120, scale: 0.75, z: 1, shadow: false },
        { id: 'tulipvase', art: 'tulipvase',   name: 'Sweet Tulips',  x: 580, y: 312, scale: 0.9,  z: 2, shadow: false },
        { id: 'cactus',    art: 'cactustrio',  name: 'Cactus Trio',   x: 580, y: 446, scale: 1.0,  z: 2, shadow: false },
        { id: 'can',       art: 'wateringcan', name: 'Watering Pal',  x: 350, y: 795, scale: 1.0,  z: 3, shadow: true  },
      ],
    },

    // Locked teaser room — set locked:false and add stickers to open it up.
    { id: 'cafe', name: 'Cozy Café', locked: true, stickers: [] },
  ],
};
