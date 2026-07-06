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

    {
      id: 'cafe', name: 'Cozy Café',
      palette: { wallTop: '#F8EBDB', wallBottom: '#F3DCC2', floorTop: '#EBD3AF', floorBottom: '#DFBF95', accent: '#D98E68' },
      stickers: [
        { id: 'espresso',   art: 'espresso',   name: 'Espresso Pal', x: 140, y: 492, scale: 0.95, z: 2, shadow: false },
        { id: 'cakedome',   art: 'cakedome',   name: 'Cake Dome',    x: 300, y: 494, scale: 0.95, z: 2, shadow: false },
        { id: 'cafemug',    art: 'cafemug',    name: 'Cozy Latte',   x: 575, y: 524, scale: 0.9,  z: 2, shadow: false },
        { id: 'croissant',  art: 'croissant',  name: 'Croissant',    x: 640, y: 545, scale: 0.9,  z: 3, shadow: false },
        { id: 'menuboard',  art: 'menuboard',  name: 'Menu Board',   x: 390, y: 235, scale: 1.05, z: 1, shadow: false },
        { id: 'trailplant', art: 'trailplant', name: 'Ivy Hook',     x: 600, y: 230, scale: 1.0,  z: 1, shadow: false },
      ],
    },
    {
      id: 'bath', name: 'Bubble Bath',
      palette: { wallTop: '#E9F5F3', wallBottom: '#DAECE8', floorTop: '#F2E7D8', floorBottom: '#E7D5BE', accent: '#7FC4BD' },
      stickers: [
        { id: 'ducky',       art: 'ducky',       name: 'Ducky',        x: 515, y: 530, scale: 0.85, z: 2, shadow: false },
        { id: 'bubbles',     art: 'bubbles',     name: 'Bubble Cloud', x: 470, y: 410, scale: 0.9,  z: 1, shadow: false },
        { id: 'mirror',      art: 'mirror',      name: 'Wall Mirror',  x: 400, y: 225, scale: 1.0,  z: 1, shadow: false },
        { id: 'potionshelf', art: 'potionshelf', name: 'Potion Shelf', x: 580, y: 300, scale: 1.05, z: 1, shadow: false },
        { id: 'towelstack',  art: 'towelstack',  name: 'Towel Stack',  x: 120, y: 780, scale: 1.05, z: 2, shadow: true  },
        { id: 'bathmat',     art: 'bathmat',     name: 'Bath Mat',     x: 200, y: 850, scale: 1.5,  z: 0, shadow: false },
      ],
    },
    {
      id: 'study', name: 'Study Nook',
      palette: { wallTop: '#F4EFDE', wallBottom: '#ECE3C8', floorTop: '#EFDCBA', floorBottom: '#E4C99E', accent: '#C9A25E' },
      stickers: [
        { id: 'desklamp',  art: 'desklamp',  name: 'Study Lamp',  x: 500, y: 428, scale: 0.95, z: 2, shadow: false },
        { id: 'laptop',    art: 'laptop',    name: 'Lil Laptop',  x: 620, y: 437, scale: 0.95, z: 2, shadow: false },
        { id: 'corkboard', art: 'corkboard', name: 'Pin Board',   x: 380, y: 215, scale: 1.15, z: 1, shadow: false },
        { id: 'calendar',  art: 'calendar',  name: 'Calendar',    x: 565, y: 230, scale: 1.0,  z: 1, shadow: false },
        { id: 'globe',     art: 'globe',     name: 'World Globe', x: 150, y: 750, scale: 1.1,  z: 2, shadow: true  },
        { id: 'pouf',      art: 'pouf',      name: 'Pouf',        x: 300, y: 830, scale: 1.2,  z: 2, shadow: true  },
      ],
    },
    {
      id: 'studio', name: 'Art Studio',
      palette: { wallTop: '#F2ECF8', wallBottom: '#E8DDF3', floorTop: '#EFDFC4', floorBottom: '#E3CBA4', accent: '#A98BD4' },
      stickers: [
        { id: 'canvasart',   art: 'canvasart',   name: 'Rainbow Art',  x: 600, y: 455, scale: 1.2,  z: 2, shadow: false },
        { id: 'palette',     art: 'palette',     name: 'Palette',      x: 170, y: 795, scale: 1.05, z: 2, shadow: true  },
        { id: 'paintbucket', art: 'paintbucket', name: 'Paint Bucket', x: 320, y: 812, scale: 0.95, z: 3, shadow: true  },
        { id: 'brushjar',    art: 'brushjar',    name: 'Brush Jar',    x: 135, y: 372, scale: 0.95, z: 2, shadow: false },
        { id: 'painttubes',  art: 'painttubes',  name: 'Paint Tubes',  x: 240, y: 385, scale: 0.95, z: 2, shadow: false },
        { id: 'swatchboard', art: 'swatchboard', name: 'Swatches',     x: 370, y: 205, scale: 1.05, z: 1, shadow: false },
      ],
    },
    {
      id: 'music', name: 'Music Room',
      palette: { wallTop: '#EBECF8', wallBottom: '#DDDFF1', floorTop: '#EFDCBA', floorBottom: '#E2C69A', accent: '#8B92D8' },
      stickers: [
        { id: 'metronome',  art: 'metronome',  name: 'Metronome',  x: 500, y: 398, scale: 0.9,  z: 2, shadow: false },
        { id: 'boombox',    art: 'boombox',    name: 'Boombox',    x: 615, y: 404, scale: 0.9,  z: 2, shadow: false },
        { id: 'guitar',     art: 'guitar',     name: 'Guitar',     x: 160, y: 715, scale: 1.3,  z: 2, shadow: true  },
        { id: 'micstand',   art: 'micstand',   name: 'Lil Mic',    x: 320, y: 750, scale: 1.1,  z: 2, shadow: true  },
        { id: 'headphones', art: 'headphones', name: 'Headphones', x: 360, y: 240, scale: 1.0,  z: 1, shadow: false },
        { id: 'vinyl',      art: 'vinyl',      name: 'Vinyl Star', x: 560, y: 255, scale: 1.0,  z: 1, shadow: false },
      ],
    },
    {
      id: 'games', name: 'Game Den',
      palette: { wallTop: '#E8F1FB', wallBottom: '#D9E7F7', floorTop: '#EFE0C6', floorBottom: '#E2CBA6', accent: '#7BA6E8' },
      stickers: [
        { id: 'arcadecab',  art: 'arcadecab',  name: 'Arcade Cab',  x: 170, y: 685, scale: 1.25, z: 2, shadow: true  },
        { id: 'controller', art: 'controller', name: 'Controller',  x: 320, y: 815, scale: 1.0,  z: 3, shadow: true  },
        { id: 'beanbag',    art: 'beanbag',    name: 'Bean Bag',    x: 615, y: 822, scale: 1.2,  z: 2, shadow: true  },
        { id: 'handheld',   art: 'handheld',   name: 'Handheld',    x: 628, y: 556, scale: 0.85, z: 2, shadow: false },
        { id: 'gamestack',  art: 'gamestack',  name: 'Game Stack',  x: 350, y: 758, scale: 0.9,  z: 2, shadow: true  },
        { id: 'starsign',   art: 'starsign',   name: 'Star Sign',   x: 245, y: 245, scale: 1.1,  z: 1, shadow: false },
      ],
    },
    {
      id: 'cats', name: 'Kitty Corner',
      palette: { wallTop: '#FBEFE3', wallBottom: '#F7E0CA', floorTop: '#F4E3C8', floorBottom: '#EAD0AA', accent: '#F0A987' },
      stickers: [
        { id: 'sleepycat',   art: 'sleepycat',   name: 'Sleepy Loaf',  x: 185, y: 392, scale: 1.0,  z: 2, shadow: false },
        { id: 'cattree',     art: 'cattree',     name: 'Cat Tower',    x: 565, y: 650, scale: 1.35, z: 2, shadow: true  },
        { id: 'foodbowls',   art: 'foodbowls',   name: 'Dinner Bowls', x: 350, y: 808, scale: 1.0,  z: 3, shadow: true  },
        { id: 'yarnball',    art: 'yarnball',    name: 'Yarn Ball',    x: 215, y: 838, scale: 0.9,  z: 3, shadow: true  },
        { id: 'pawframe',    art: 'pawframe',    name: 'Paw Art',      x: 395, y: 225, scale: 1.0,  z: 1, shadow: false },
        { id: 'fishpennant', art: 'fishpennant', name: 'Fish Flags',   x: 560, y: 190, scale: 1.1,  z: 1, shadow: false },
      ],
    },
    {
      id: 'balcony', name: 'Balcony Garden',
      palette: { wallTop: '#FDE3C8', wallBottom: '#F2BFA8', floorTop: '#E0B98E', floorBottom: '#D3A276', accent: '#F49BB0' },
      stickers: [
        { id: 'flowerbox',    art: 'flowerbox',    name: 'Flower Box',  x: 250, y: 426, scale: 1.05, z: 2, shadow: false },
        { id: 'birdy',        art: 'birdy',        name: 'Birdy',       x: 450, y: 426, scale: 0.8,  z: 2, shadow: false },
        { id: 'windchime',    art: 'windchime',    name: 'Wind Chime',  x: 613, y: 140, scale: 0.95, z: 1, shadow: false },
        { id: 'candlejar',    art: 'candlejar',    name: 'Candle Jar',  x: 140, y: 795, scale: 1.0,  z: 2, shadow: true  },
        { id: 'teatable',     art: 'teatable',     name: 'Tea Table',   x: 360, y: 755, scale: 1.1,  z: 2, shadow: true  },
        { id: 'floorcushion', art: 'floorcushion', name: 'Sun Cushion', x: 585, y: 830, scale: 1.1,  z: 2, shadow: true  },
      ],
    },
    {
      id: 'camp', name: 'Starry Camp',
      palette: { wallTop: '#C9B6DE', wallBottom: '#F2C9AE', floorTop: '#ABD198', floorBottom: '#92BE80', accent: '#9A82C9' },
      stickers: [
        { id: 'campfire',    art: 'campfire',    name: 'Campfire',     x: 470, y: 745, scale: 1.1,  z: 2, shadow: false },
        { id: 'mallowstick', art: 'mallowstick', name: "S'more Stick", x: 605, y: 795, scale: 0.95, z: 3, shadow: false },
        { id: 'raccoon',     art: 'raccoon',     name: 'Raccoon Pal',  x: 330, y: 775, scale: 1.0,  z: 2, shadow: true  },
        { id: 'camplantern', art: 'camplantern', name: 'Lantern',      x: 185, y: 815, scale: 0.95, z: 3, shadow: true  },
        { id: 'backpack',    art: 'backpack',    name: 'Backpack',     x: 645, y: 650, scale: 1.0,  z: 2, shadow: true  },
        { id: 'starbunting', art: 'starbunting', name: 'Star Flags',   x: 420, y: 140, scale: 1.15, z: 1, shadow: false },
      ],
    },
    {
      id: 'lodge', name: 'Winter Lodge',
      palette: { wallTop: '#F7E9E2', wallBottom: '#F1D8CC', floorTop: '#EBD2AF', floorBottom: '#DDBD92', accent: '#C97B6B' },
      stickers: [
        { id: 'hearthfire',    art: 'hearthfire',    name: 'Cozy Fire',   x: 550, y: 545, scale: 1.0,  z: 2, shadow: false },
        { id: 'stockings',     art: 'stockings',     name: 'Stockings',   x: 478, y: 442, scale: 0.9,  z: 2, shadow: false },
        { id: 'cocoamug',      art: 'cocoamug',      name: 'Hot Cocoa',   x: 472, y: 354, scale: 0.85, z: 2, shadow: false },
        { id: 'snowglobe',     art: 'snowglobe',     name: 'Snow Globe',  x: 605, y: 350, scale: 0.85, z: 2, shadow: false },
        { id: 'wreath',        art: 'wreath',        name: 'Wreath',      x: 545, y: 180, scale: 1.05, z: 1, shadow: false },
        { id: 'blanketbasket', art: 'blanketbasket', name: 'Knit Basket', x: 180, y: 780, scale: 1.1,  z: 2, shadow: true  },
      ],
    },

    // Locked teaser room — set locked:false and add stickers to open it up.
    { id: 'starloft', name: 'Star Loft', locked: true, stickers: [] },
  ],
};
