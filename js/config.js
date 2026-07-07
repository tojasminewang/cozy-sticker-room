/* ============================================================
   COZY STICKER ROOM — config.js
   All the game tuning lives here. Edit freely!

   To add a sticker to a room:
     1. Draw it in js/art.js or js/stickers-plus.js
     2. Add a line to the room's `stickers` array below:
        { id, art, name, x, y, scale, z, shadow }
        x/y  = the sticker's target spot, in room coordinates
               (the room canvas is 720 wide × 920 tall)
        z    = draw order (0 = behind, bigger = in front)
   To add a room: copy a room block, register a scene for its id.
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
      bgImage: 'assets/bedroom-bg.jpg',
      palette: {
        wallTop: '#FAD9D0', wallBottom: '#F5C3B8',
        floorTop: '#F3D3AB', floorBottom: '#EBBE8D',
        accent: '#EE8FA6',
      },
      stickers: [
        { id: 'rug',       art: 'rug',       name: 'Scallop Rug',    x: 456, y: 812, scale: 2.05, z: 0, shadow: false },
        { id: 'shelf',     art: 'bookshelf', name: 'Book Nook',      x: 572, y: 598, scale: 1.5,  z: 1, shadow: true  },
        { id: 'lamp',      art: 'lamp',      name: 'Glow Lamp',      x: 316, y: 452, scale: 0.95, z: 2, shadow: false },
        { id: 'plant',     art: 'plant',     name: 'Leafy Friend',   x: 75,  y: 840, scale: 1.0,  z: 3, shadow: true  },
        { id: 'bunny',     art: 'bunny',     name: 'Mochi Bunny',    x: 208, y: 494, scale: 0.85, z: 2, shadow: false },
        { id: 'poster',    art: 'poster',    name: 'Rainbow Poster', x: 158, y: 208, scale: 1.15, z: 1, shadow: false },
        { id: 'moonlight', art: 'moonlight', name: 'Moon Light',     x: 345, y: 325, scale: 0.9,  z: 1, shadow: false },
        { id: 'slippers',  art: 'slippers',  name: 'Slippers',       x: 395, y: 874, scale: 0.95, z: 3, shadow: false },
        { id: 'fairyjar',    art: 'fairyjar',    name: 'Fairy Jar',    x: 175, y: 855, scale: 0.9,  z: 3, shadow: true  },
        { id: 'dreambanner', art: 'dreambanner', name: 'Dream Flags',  x: 285, y: 122, scale: 0.95, z: 1, shadow: false },
      ],
    },
    {
      id: 'kitchen',
      name: 'Sunny Kitchen',
      bgImage: 'assets/kitchen-bg.jpg',
      palette: {
        wallTop: '#FBE9BC', wallBottom: '#F6D897',
        floorTop: '#F5D9B4', floorBottom: '#ECC793',
        accent: '#F2B95C',
      },
      stickers: [
        { id: 'kettle',     art: 'kettle',     name: 'Tea Kettle',   x: 130, y: 484, scale: 0.95, z: 2, shadow: false },
        { id: 'toaster',    art: 'toaster',    name: 'Happy Toast',  x: 300, y: 497, scale: 0.95, z: 2, shadow: false },
        { id: 'fruitbowl',  art: 'fruitbowl',  name: 'Fruit Friends',x: 428, y: 498, scale: 0.95, z: 3, shadow: false },
        { id: 'spiceshelf', art: 'spiceshelf', name: 'Spice Shelf',  x: 595, y: 240, scale: 1.2,  z: 1, shadow: false },
        { id: 'clock',      art: 'clock',      name: 'Tick-Tock',    x: 595, y: 140, scale: 1.0,  z: 1, shadow: false },
        { id: 'herb',       art: 'herb',       name: 'Baby Basil',   x: 110, y: 358, scale: 0.8,  z: 2, shadow: false },
        { id: 'stool',      art: 'stool',      name: 'Honey Stool',  x: 520, y: 810, scale: 1.1,  z: 2, shadow: true  },
        { id: 'fruitcrate', art: 'fruitcrate', name: 'Fruit Crate',  x: 140, y: 800, scale: 1.0,  z: 2, shadow: true  },
        { id: 'mugrack',    art: 'mugrack',    name: 'Mug Rack',     x: 300, y: 435, scale: 0.85, z: 1, shadow: false },
        { id: 'fryingpan',  art: 'fryingpan',  name: 'Frying Pan',   x: 205, y: 440, scale: 0.9,  z: 1, shadow: false },
        { id: 'milkcarton', art: 'milkcarton', name: 'Milk Carton',  x: 215, y: 494, scale: 0.85, z: 2, shadow: false },
      ],
    },
    {
      id: 'nook',
      name: 'Plant Corner',
      bgImage: 'assets/nook-bg.jpg',
      palette: {
        wallTop: '#EDF2D3', wallBottom: '#E0E8B6',
        floorTop: '#EED8AF', floorBottom: '#E3C28E',
        accent: '#8FBF98',
      },
      stickers: [
        { id: 'monstera',  art: 'monstera',    name: 'Monstera Pal', x: 140, y: 770, scale: 1.35, z: 2, shadow: true  },
        { id: 'hangplant', art: 'hangplant',   name: 'Sky Fern',     x: 212, y: 130, scale: 0.95, z: 1, shadow: false },
        { id: 'sign',      art: 'sign',        name: 'Grow Sign',    x: 400, y: 240, scale: 1.05, z: 1, shadow: false },
        { id: 'bee',       art: 'bee',         name: 'Bee Buddy',    x: 415, y: 110, scale: 0.75, z: 1, shadow: false },
        { id: 'tulipvase', art: 'tulipvase',   name: 'Sweet Tulips', x: 590, y: 505, scale: 0.9,  z: 2, shadow: false },
        { id: 'cactus',    art: 'cactustrio',  name: 'Cactus Trio',  x: 470, y: 584, scale: 0.85, z: 2, shadow: false },
        { id: 'can',       art: 'wateringcan', name: 'Watering Pal', x: 330, y: 822, scale: 1.0,  z: 3, shadow: true  },
        { id: 'gnome',     art: 'gnome',       name: 'Gnome Pal',    x: 590, y: 840, scale: 0.95, z: 3, shadow: true  },
        { id: 'birdhouse', art: 'birdhouse',   name: 'Birdhouse',    x: 360, y: 440, scale: 0.95, z: 1, shadow: false },
        { id: 'butterfly',   art: 'butterfly',   name: 'Flutterby',    x: 615, y: 145, scale: 0.8,  z: 1, shadow: false },
        { id: 'seedpackets', art: 'seedpackets', name: 'Seed Packets', x: 140, y: 560, scale: 0.9,  z: 1, shadow: false },
      ],
    },
    {
      id: 'cafe', name: 'Cozy Café',
      bgImage: 'assets/cafe-bg.jpg',
      palette: { wallTop: '#F3DFC2', wallBottom: '#EBCCA2', floorTop: '#E5C9A0', floorBottom: '#D9B584', accent: '#D98E68' },
      stickers: [
        { id: 'espresso',   art: 'espresso',   name: 'Espresso Pal', x: 140, y: 492, scale: 0.95, z: 2, shadow: false },
        { id: 'cakedome',   art: 'cakedome',   name: 'Cake Dome',    x: 300, y: 494, scale: 0.95, z: 2, shadow: false },
        { id: 'cafemug',    art: 'cafemug',    name: 'Cozy Latte',   x: 575, y: 524, scale: 0.9,  z: 2, shadow: false },
        { id: 'croissant',  art: 'croissant',  name: 'Croissant',    x: 640, y: 545, scale: 0.9,  z: 3, shadow: false },
        { id: 'menuboard',  art: 'menuboard',  name: 'Menu Board',   x: 475, y: 235, scale: 1.05, z: 1, shadow: false },
        { id: 'trailplant', art: 'trailplant', name: 'Ivy Hook',     x: 600, y: 230, scale: 1.0,  z: 1, shadow: false },
        { id: 'cupstack',   art: 'cupstack',   name: 'Cup Tower',    x: 415, y: 492, scale: 0.9,  z: 2, shadow: false },
        { id: 'latteart',   art: 'latteart',   name: 'Latte Print',  x: 600, y: 390, scale: 0.95, z: 1, shadow: false },
        { id: 'donutplate', art: 'donutplate', name: 'Donut Plate',  x: 214, y: 498, scale: 0.7,  z: 2, shadow: false },
        { id: 'opensign',   art: 'opensign',   name: 'Open Sign',    x: 120, y: 330, scale: 0.9,  z: 1, shadow: false },
      ],
    },
    {
      id: 'bath', name: 'Bubble Bath',
      bgImage: 'assets/bath-bg.jpg',
      palette: { wallTop: '#DDF0EC', wallBottom: '#C8E5DF', floorTop: '#F0E2CE', floorBottom: '#E4D0B4', accent: '#7FC4BD' },
      stickers: [
        { id: 'ducky',       art: 'ducky',       name: 'Ducky',        x: 515, y: 530, scale: 0.85, z: 2, shadow: false },
        { id: 'bubbles',     art: 'bubbles',     name: 'Bubble Cloud', x: 470, y: 410, scale: 0.9,  z: 1, shadow: false },
        { id: 'mirror',      art: 'mirror',      name: 'Wall Mirror',  x: 400, y: 225, scale: 1.0,  z: 1, shadow: false },
        { id: 'potionshelf', art: 'potionshelf', name: 'Potion Shelf', x: 580, y: 300, scale: 1.05, z: 1, shadow: false },
        { id: 'towelstack',  art: 'towelstack',  name: 'Towel Stack',  x: 120, y: 780, scale: 1.05, z: 2, shadow: true  },
        { id: 'bathmat',     art: 'bathmat',     name: 'Bath Mat',     x: 200, y: 850, scale: 1.5,  z: 0, shadow: false },
        { id: 'towelring',   art: 'towelring',   name: 'Towel Ring',   x: 170, y: 388, scale: 0.95, z: 1, shadow: false },
        { id: 'octo',        art: 'octo',        name: 'Octo Pal',     x: 418, y: 545, scale: 0.8,  z: 2, shadow: false },
        { id: 'toothcup',    art: 'toothcup',    name: 'Rinse Cup',    x: 170, y: 500, scale: 0.85, z: 1, shadow: false },
        { id: 'bathboat',    art: 'bathboat',    name: 'Tub Boat',     x: 610, y: 538, scale: 0.75, z: 2, shadow: false },
      ],
    },
    {
      id: 'study', name: 'Study Nook',
      bgImage: 'assets/study-bg.jpg',
      palette: { wallTop: '#F1E7C4', wallBottom: '#E8D6A3', floorTop: '#EDD8B0', floorBottom: '#E1C48F', accent: '#C9A25E' },
      stickers: [
        { id: 'desklamp',    art: 'desklamp',    name: 'Study Lamp',  x: 500, y: 428, scale: 0.95, z: 2, shadow: false },
        { id: 'laptop',      art: 'laptop',      name: 'Lil Laptop',  x: 620, y: 437, scale: 0.95, z: 2, shadow: false },
        { id: 'corkboard',   art: 'corkboard',   name: 'Pin Board',   x: 380, y: 215, scale: 1.15, z: 1, shadow: false },
        { id: 'calendar',    art: 'calendar',    name: 'Calendar',    x: 565, y: 230, scale: 1.0,  z: 1, shadow: false },
        { id: 'globe',       art: 'globe',       name: 'World Globe', x: 150, y: 750, scale: 1.1,  z: 2, shadow: true  },
        { id: 'pouf',        art: 'pouf',        name: 'Pouf',        x: 300, y: 830, scale: 1.2,  z: 2, shadow: true  },
        { id: 'deskchair',   art: 'deskchair',   name: 'Desk Chair',  x: 485, y: 762, scale: 1.1,  z: 2, shadow: true  },
        { id: 'wastebasket', art: 'wastebasket', name: 'Paper Bin',   x: 655, y: 795, scale: 0.95, z: 2, shadow: true  },
        { id: 'paperplane',  art: 'paperplane',  name: 'Paper Plane', x: 482, y: 188, scale: 0.65, z: 1, shadow: false },
        { id: 'studybanner', art: 'studybanner', name: 'Study Flags', x: 665, y: 152, scale: 0.9,  z: 1, shadow: false },
      ],
    },
    {
      id: 'studio', name: 'Art Studio',
      bgImage: 'assets/studio-bg.jpg',
      palette: { wallTop: '#ECE0F6', wallBottom: '#DFCCF0', floorTop: '#EDDCBE', floorBottom: '#E0C89D', accent: '#A98BD4' },
      stickers: [
        { id: 'canvasart',   art: 'canvasart',   name: 'Rainbow Art',  x: 540, y: 530, scale: 1.2,  z: 2, shadow: false },
        { id: 'palette',     art: 'palette',     name: 'Palette',      x: 170, y: 795, scale: 1.05, z: 2, shadow: true  },
        { id: 'paintbucket', art: 'paintbucket', name: 'Paint Bucket', x: 320, y: 812, scale: 0.95, z: 3, shadow: true  },
        { id: 'brushjar',    art: 'brushjar',    name: 'Brush Jar',    x: 120, y: 417, scale: 0.95, z: 2, shadow: false },
        { id: 'painttubes',  art: 'painttubes',  name: 'Paint Tubes',  x: 240, y: 425, scale: 0.95, z: 2, shadow: false },
        { id: 'swatchboard', art: 'swatchboard', name: 'Swatches',     x: 370, y: 205, scale: 1.05, z: 1, shadow: false },
        { id: 'canvasroll',  art: 'canvasroll',  name: 'Canvas Rolls', x: 640, y: 830, scale: 1.0,  z: 3, shadow: true  },
        { id: 'ribbon',      art: 'ribbon',      name: 'Art Ribbon',   x: 520, y: 190, scale: 0.9,  z: 1, shadow: false },
        { id: 'claypot',     art: 'claypot',     name: 'Clay Pot',     x: 415, y: 798, scale: 0.85, z: 2, shadow: true  },
        { id: 'sketchbook',  art: 'sketchbook',  name: 'Sketchbook',   x: 210, y: 302, scale: 0.85, z: 1, shadow: false },
      ],
    },
    {
      id: 'music', name: 'Music Room',
      bgImage: 'assets/music-bg.jpg',
      palette: { wallTop: '#E2E4F8', wallBottom: '#D0D4F0', floorTop: '#EDD9B4', floorBottom: '#DFC392', accent: '#8B92D8' },
      stickers: [
        { id: 'metronome',  art: 'metronome',  name: 'Metronome',  x: 500, y: 490, scale: 0.9,  z: 2, shadow: false },
        { id: 'boombox',    art: 'boombox',    name: 'Boombox',    x: 615, y: 490, scale: 0.9,  z: 2, shadow: false },
        { id: 'guitar',     art: 'guitar',     name: 'Guitar',     x: 160, y: 715, scale: 1.3,  z: 2, shadow: true  },
        { id: 'micstand',   art: 'micstand',   name: 'Lil Mic',    x: 320, y: 750, scale: 1.1,  z: 2, shadow: true  },
        { id: 'headphones', art: 'headphones', name: 'Headphones', x: 360, y: 240, scale: 1.0,  z: 1, shadow: false },
        { id: 'vinyl',      art: 'vinyl',      name: 'Vinyl Star', x: 560, y: 255, scale: 1.0,  z: 1, shadow: false },
        { id: 'amp',        art: 'amp',        name: 'Lil Amp',    x: 560, y: 802, scale: 1.0,  z: 3, shadow: true  },
        { id: 'tambourine', art: 'tambourine', name: 'Tambourine', x: 255, y: 425, scale: 0.9,  z: 1, shadow: false },
        { id: 'maraca',     art: 'maraca',     name: 'Maraca',     x: 665, y: 798, scale: 0.85, z: 3, shadow: true  },
        { id: 'sheetmusic', art: 'sheetmusic', name: 'Sheet Music',x: 668, y: 252, scale: 0.85, z: 1, shadow: false },
      ],
    },
    {
      id: 'games', name: 'Game Den',
      bgImage: 'assets/games-bg.jpg',
      palette: { wallTop: '#DCEAFB', wallBottom: '#C8DCF6', floorTop: '#EDDEC0', floorBottom: '#DFC9A0', accent: '#7BA6E8' },
      stickers: [
        { id: 'arcadecab',   art: 'arcadecab',   name: 'Arcade Cab',   x: 170, y: 685, scale: 1.25, z: 2, shadow: true  },
        { id: 'controller',  art: 'controller',  name: 'Controller',   x: 320, y: 815, scale: 1.0,  z: 3, shadow: true  },
        { id: 'beanbag',     art: 'beanbag',     name: 'Bean Bag',     x: 615, y: 822, scale: 1.2,  z: 2, shadow: true  },
        { id: 'handheld',    art: 'handheld',    name: 'Handheld',     x: 628, y: 576, scale: 0.85, z: 2, shadow: false },
        { id: 'gamestack',   art: 'gamestack',   name: 'Game Stack',   x: 350, y: 758, scale: 0.9,  z: 2, shadow: true  },
        { id: 'starsign',    art: 'starsign',    name: 'Star Sign',    x: 245, y: 245, scale: 1.1,  z: 1, shadow: false },
        { id: 'cloudplush',  art: 'cloudplush',  name: 'Cloud Plush',  x: 468, y: 820, scale: 1.0,  z: 3, shadow: true  },
        { id: 'retroposter', art: 'retroposter', name: 'Retro Poster', x: 640, y: 248, scale: 0.95, z: 1, shadow: false },
        { id: 'dicepair',    art: 'dicepair',    name: 'Lucky Dice',   x: 150, y: 858, scale: 0.75, z: 3, shadow: true  },
        { id: 'trophy',      art: 'trophy',      name: 'Mini Trophy',  x: 470, y: 574, scale: 0.8,  z: 2, shadow: false },
      ],
    },
    {
      id: 'cats', name: 'Kitty Corner',
      bgImage: 'assets/cats-bg.jpg',
      palette: { wallTop: '#FAE3CB', wallBottom: '#F5CFAB', floorTop: '#F2DFC0', floorBottom: '#E7CBA0', accent: '#F0A987' },
      stickers: [
        { id: 'sleepycat',   art: 'sleepycat',   name: 'Sleepy Loaf',  x: 185, y: 420, scale: 1.0,  z: 2, shadow: false },
        { id: 'cattree',     art: 'cattree',     name: 'Cat Tower',    x: 565, y: 650, scale: 1.35, z: 2, shadow: true  },
        { id: 'foodbowls',   art: 'foodbowls',   name: 'Dinner Bowls', x: 350, y: 808, scale: 1.0,  z: 3, shadow: true  },
        { id: 'yarnball',    art: 'yarnball',    name: 'Yarn Ball',    x: 215, y: 838, scale: 0.9,  z: 3, shadow: true  },
        { id: 'pawframe',    art: 'pawframe',    name: 'Paw Art',      x: 395, y: 225, scale: 1.0,  z: 1, shadow: false },
        { id: 'fishpennant', art: 'fishpennant', name: 'Fish Flags',   x: 560, y: 190, scale: 1.1,  z: 1, shadow: false },
        { id: 'catbed',      art: 'catbed',      name: 'Cat Bed',      x: 360, y: 722, scale: 1.0,  z: 2, shadow: true  },
        { id: 'mousetoy',    art: 'mousetoy',    name: 'Mouse Toy',    x: 150, y: 756, scale: 0.85, z: 3, shadow: true  },
        { id: 'kibblebag',   art: 'kibblebag',   name: 'Kibble Bag',   x: 68,  y: 700, scale: 0.85, z: 2, shadow: true  },
        { id: 'photostrip',  art: 'photostrip',  name: 'Photo Strip',  x: 398, y: 342, scale: 0.85, z: 1, shadow: false },
      ],
    },
    {
      id: 'balcony', name: 'Balcony Garden',
      bgImage: 'assets/balcony-bg.jpg',
      palette: { wallTop: '#FCDDBC', wallBottom: '#EFB098', floorTop: '#DDB183', floorBottom: '#CE9A6A', accent: '#F49BB0' },
      stickers: [
        { id: 'flowerbox',    art: 'flowerbox',    name: 'Flower Box',  x: 250, y: 426, scale: 1.05, z: 2, shadow: false },
        { id: 'birdy',        art: 'birdy',        name: 'Birdy',       x: 450, y: 362, scale: 0.8,  z: 2, shadow: false },
        { id: 'windchime',    art: 'windchime',    name: 'Wind Chime',  x: 613, y: 128, scale: 0.95, z: 1, shadow: false },
        { id: 'candlejar',    art: 'candlejar',    name: 'Candle Jar',  x: 140, y: 795, scale: 1.0,  z: 2, shadow: true  },
        { id: 'teatable',     art: 'teatable',     name: 'Tea Table',   x: 360, y: 755, scale: 1.1,  z: 2, shadow: true  },
        { id: 'floorcushion', art: 'floorcushion', name: 'Sun Cushion', x: 585, y: 830, scale: 1.1,  z: 2, shadow: true  },
        { id: 'birdfeeder',   art: 'birdfeeder',   name: 'Bird Feeder', x: 100, y: 132, scale: 0.9,  z: 1, shadow: false },
        { id: 'telescope',    art: 'telescope',    name: 'Telescope',   x: 648, y: 724, scale: 1.0,  z: 2, shadow: true  },
        { id: 'succulents',   art: 'succulents',   name: 'Succulents',  x: 80,  y: 368, scale: 0.8,  z: 2, shadow: false },
        { id: 'starlamp',     art: 'starlamp',     name: 'Star Lamp',   x: 240, y: 798, scale: 0.9,  z: 2, shadow: true  },
      ],
    },
    {
      id: 'camp', name: 'Starry Camp',
      bgImage: 'assets/camp-bg.jpg',
      palette: { wallTop: '#C2ABDB', wallBottom: '#F0BE9F', floorTop: '#A3CC8E', floorBottom: '#88B475', accent: '#9A82C9' },
      stickers: [
        { id: 'campfire',    art: 'campfire',    name: 'Campfire',     x: 470, y: 745, scale: 1.1,  z: 2, shadow: false },
        { id: 'mallowstick', art: 'mallowstick', name: "S'more Stick", x: 605, y: 795, scale: 0.95, z: 3, shadow: false },
        { id: 'raccoon',     art: 'raccoon',     name: 'Raccoon Pal',  x: 330, y: 775, scale: 1.0,  z: 2, shadow: true  },
        { id: 'camplantern', art: 'camplantern', name: 'Lantern',      x: 185, y: 815, scale: 0.95, z: 3, shadow: true  },
        { id: 'backpack',    art: 'backpack',    name: 'Backpack',     x: 645, y: 650, scale: 1.0,  z: 2, shadow: true  },
        { id: 'starbunting', art: 'starbunting', name: 'Star Flags',   x: 420, y: 140, scale: 1.15, z: 1, shadow: false },
        { id: 'owl',         art: 'owl',         name: 'Owl Buddy',    x: 200, y: 218, scale: 0.85, z: 2, shadow: false },
        { id: 'cooler',      art: 'cooler',      name: 'Camp Cooler',  x: 490, y: 864, scale: 0.9,  z: 3, shadow: true  },
        { id: 'trailsign',   art: 'trailsign',   name: 'Trail Sign',   x: 80,  y: 798, scale: 0.9,  z: 2, shadow: true  },
        { id: 'fireflyjar',  art: 'fireflyjar',  name: 'Firefly Jar',  x: 605, y: 875, scale: 0.75, z: 3, shadow: true  },
      ],
    },
    {
      id: 'lodge', name: 'Winter Lodge',
      bgImage: 'assets/lodge-bg.jpg',
      palette: { wallTop: '#F5DFD3', wallBottom: '#EFC9B9', floorTop: '#E8CBA2', floorBottom: '#DAB584', accent: '#C97B6B' },
      stickers: [
        { id: 'hearthfire',    art: 'hearthfire',    name: 'Cozy Fire',    x: 550, y: 545, scale: 1.0,  z: 2, shadow: false },
        { id: 'stockings',     art: 'stockings',     name: 'Stockings',    x: 478, y: 400, scale: 0.9,  z: 2, shadow: false },
        { id: 'cocoamug',      art: 'cocoamug',      name: 'Hot Cocoa',    x: 472, y: 296, scale: 0.85, z: 2, shadow: false },
        { id: 'snowglobe',     art: 'snowglobe',     name: 'Snow Globe',   x: 605, y: 298, scale: 0.85, z: 2, shadow: false },
        { id: 'wreath',        art: 'wreath',        name: 'Wreath',       x: 545, y: 180, scale: 1.05, z: 1, shadow: false },
        { id: 'blanketbasket', art: 'blanketbasket', name: 'Knit Basket',  x: 180, y: 780, scale: 1.1,  z: 2, shadow: true  },
        { id: 'rockingchair',  art: 'rockingchair',  name: 'Rocker Chair', x: 322, y: 742, scale: 1.15, z: 2, shadow: true  },
        { id: 'sconce',        art: 'sconce',        name: 'Wall Candle',  x: 170, y: 420, scale: 0.9,  z: 1, shadow: false },
        { id: 'sled',          art: 'sled',          name: 'Snow Sled',    x: 560, y: 788, scale: 1.0,  z: 2, shadow: true  },
        { id: 'mistletoe',     art: 'mistletoe',     name: 'Mistletoe',    x: 655, y: 116, scale: 0.8,  z: 1, shadow: false },
      ],
    },

    // Locked teaser room — set locked:false and add stickers to open it up.
    { id: 'starloft', name: 'Star Loft', locked: true, stickers: [] },
  ],
};
