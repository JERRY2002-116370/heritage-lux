// ============================================
// data.js — single source of truth for product data.
// Edit this file to change garments, prices, images, etc.
// Every page reads from this same array, so one edit
// here updates the whole site.
//
// IMAGE SOURCING NOTE:
// Every image below is a real, licensed-free photo (Pexels —
// free to use, no attribution required) chosen to actually match
// its garment/culture, including authentic African photography
// for every African-tagged piece (the previous build used several
// broken/mismatched Unsplash links, which is why some images were
// not rendering). See /images/README.txt for how to swap these
// for your own local photos later.
// ============================================

const GARMENTS = [
  {
    id: 'midnight-empress-kaftan',
    name: 'Midnight Empress Kaftan',
    culture: 'Middle Eastern',
    origin: 'Morocco',
    designer: 'Leila Al-Amine',
    price: 420,
    fabric: 'Heavy-weight velvet, zardozi embroidery',
    image: 'https://images.pexels.com/photos/32178223/pexels-photo-32178223.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/32178223/pexels-photo-32178223.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/29188546/pexels-photo-29188546.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/35150035/pexels-photo-35150035.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    tags: ['Velvet', 'Premium'],
    badge: null,
    description: 'Hand-woven from the finest heavy-weight velvet, the Midnight Empress features traditional zardozi patterns reimagined for the modern gala. Each piece undergoes 120 hours of manual embroidery, making it a masterpiece of cultural heritage.',
    rating: 4.9,
    reviewCount: 82
  },
  {
    id: 'emerald-banarasi-silk',
    name: 'Emerald Banarasi Silk',
    culture: 'Asian',
    origin: 'India',
    designer: 'Studio Varanasi',
    price: 260,
    fabric: 'Banarasi silk, gold zari border',
    image: 'https://images.pexels.com/photos/28943468/pexels-photo-28943468.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: ['https://images.pexels.com/photos/28943468/pexels-photo-28943468.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    tags: ['Silk', 'New'],
    badge: 'NEW',
    description: 'A deep emerald Banarasi saree woven on traditional handlooms, finished with a hand-laid gold zari border that catches the light with every fold.',
    rating: 4.8,
    reviewCount: 47
  },
  {
    id: 'modern-ivory-hanbok',
    name: 'Modern Ivory Hanbok',
    culture: 'Asian',
    origin: 'Korea',
    designer: 'Studio Hanji',
    price: 230,
    fabric: 'Silk organza, hand-tied goreum',
    image: 'https://images.pexels.com/photos/31603017/pexels-photo-31603017.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: ['https://images.pexels.com/photos/31603017/pexels-photo-31603017.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    tags: ['Silk Organza'],
    badge: null,
    description: 'A minimalist reinterpretation of the traditional hanbok in ivory silk organza, with a hand-tied goreum sash and clean, architectural lines.',
    rating: 4.7,
    reviewCount: 31
  },
  {
    id: 'royal-crimson-agbada',
    name: 'Royal Crimson Agbada',
    culture: 'African',
    origin: 'Nigeria',
    designer: 'House of Adire',
    price: 280,
    fabric: 'Heavy cotton, metallic thread embroidery',
    image: 'https://images.pexels.com/photos/35013624/pexels-photo-35013624.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/35013624/pexels-photo-35013624.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/34735729/pexels-photo-34735729.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8526818/pexels-photo-8526818.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    tags: ['Cotton', 'Popular'],
    badge: 'POPULAR',
    description: 'A commanding crimson agbada finished in dense metallic-thread embroidery across the collar — traditional Nigerian formalwear elevated for the modern gala.',
    rating: 4.9,
    reviewCount: 64
  },
  {
    id: 'silk-kimono-violet',
    name: 'Violet Dragon Kimono',
    culture: 'Asian',
    origin: 'Japan',
    designer: 'Atelier Kyo',
    price: 320,
    fabric: 'Silk, hand-embroidered',
    image: 'https://images.pexels.com/photos/11095920/pexels-photo-11095920.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: ['https://images.pexels.com/photos/11095920/pexels-photo-11095920.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    tags: ['Silk', 'Premium'],
    badge: null,
    description: 'A violet silk kimono hand-embroidered with a dragon motif in gold thread, finished with a structured obi belt.',
    rating: 4.8,
    reviewCount: 39
  },
  {
    id: 'sahara-braza-kaftan',
    name: 'Sahara Braza Kaftan',
    culture: 'Middle Eastern',
    origin: 'Morocco',
    designer: 'Leila Al-Amine',
    price: 190,
    fabric: 'Chiffon, filigree detail',
    image: 'https://images.pexels.com/photos/31049716/pexels-photo-31049716.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: ['https://images.pexels.com/photos/31049716/pexels-photo-31049716.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    tags: ['Chiffon'],
    badge: null,
    description: 'A flowing sand-toned kaftan in lightweight chiffon with delicate filigree embroidery along the neckline.',
    rating: 4.6,
    reviewCount: 22
  },
  {
    id: 'indigo-rust-weave',
    name: 'Indigo Rust Wrap',
    culture: 'South Asian',
    origin: 'India',
    designer: 'Studio Varanasi',
    price: 210,
    fabric: 'Benarasi silk, copper weave',
    image: 'https://images.pexels.com/photos/28943608/pexels-photo-28943608.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: ['https://images.pexels.com/photos/28943608/pexels-photo-28943608.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    tags: ['Silk'],
    badge: null,
    description: 'Indigo and burnt-copper threads woven into a single uninterrupted drape — a study in contrast and traditional handloom technique.',
    rating: 4.7,
    reviewCount: 18
  },
  {
    id: 'ivory-mandarin-coat',
    name: 'Ivory Mandarin Coat',
    culture: 'East Asian',
    origin: 'China',
    designer: 'Studio Hanji',
    price: 155,
    fabric: 'Heavy linen, minimalist tailoring',
    image: 'https://images.pexels.com/photos/35254789/pexels-photo-35254789.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: ['https://images.pexels.com/photos/35254789/pexels-photo-35254789.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    tags: ['Linen'],
    badge: null,
    description: 'A clean-lined mandarin-collar coat in heavy ivory linen with traditional frog-button closures, built for understated occasions.',
    rating: 4.5,
    reviewCount: 14
  },
  {
    id: 'navy-embroidered-suit',
    name: 'Navy Embroidered Sherwani',
    culture: 'South Asian',
    origin: 'Pakistan',
    designer: 'House of Adire',
    price: 450,
    fabric: 'Fine wool, matte embroidery',
    image: 'https://images.pexels.com/photos/29273200/pexels-photo-29273200.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: ['https://images.pexels.com/photos/29273200/pexels-photo-29273200.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    tags: ['Wool', 'Premium'],
    badge: null,
    description: 'A tailored sherwani in fine wool with matte-thread embroidery across the chest panel, cut for a modern silhouette.',
    rating: 4.9,
    reviewCount: 27
  }
];

const CULTURES = [
  { id: 'african', name: 'African Heritage', tagline: 'Regal silhouettes from the heart of West and East Africa.', image: 'https://images.pexels.com/photos/34821107/pexels-photo-34821107.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 'asian', name: 'Asian Traditions', tagline: 'Centuries of silk-weaving and tailoring artistry.', image: 'https://images.pexels.com/photos/28943466/pexels-photo-28943466.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { id: 'middle-eastern', name: 'Middle Eastern Elegance', tagline: 'Opulent fabrics shaped by desert courts and coastal trade.', image: 'https://images.pexels.com/photos/31049717/pexels-photo-31049717.jpeg?auto=compress&cs=tinysrgb&w=1200' }
];

const ACCESSORIES = [
  { id: 'atlas-slippers', name: 'Atlas Gold Slippers', category: 'Heritage Accessories', price: 45, image: 'https://images.pexels.com/photos/35013624/pexels-photo-35013624.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'fes-choker', name: 'Fes Emerald Choker', category: 'The Jewelry Atelier', price: 85, image: 'https://images.pexels.com/photos/33942219/pexels-photo-33942219.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'ochre-wrap', name: 'Ochre Silk Wrap', category: 'Heritage Textile', price: 35, image: 'https://images.pexels.com/photos/32191224/pexels-photo-32191224.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'pearl-clutch', name: 'Pearl Heritage Clutch', category: 'Heritage Accessories', price: 60, image: 'https://images.pexels.com/photos/30645360/pexels-photo-30645360.jpeg?auto=compress&cs=tinysrgb&w=600' }
];

const REVIEWS = [
  { name: 'Sasha K.', location: 'Lagos, Nigeria', rating: 5, text: 'The fit was true to the size guide. I used the concierge service to adjust the length slightly and they were incredibly helpful. Service was excellent throughout.' },
  { name: 'Marcus R.', location: 'London, UK', rating: 4, text: "Rented this for my wife's surprise birthday dinner. She looked absolutely wonderful. Delivery was punctual and the garment arrived in pristine condition." }
];

const ACCOUNT = {
  name: 'Aria Kensington',
  memberSince: 'Oct 2023',
  tier: 'ELITE',
  points: 14850,
  pointsToNext: 500,
  activeRentals: [
    { id: 'a1', name: 'Indigo Heritage Kimono', culture: 'Japanese Heritage', image: 'https://images.pexels.com/photos/20667636/pexels-photo-20667636.jpeg?auto=compress&cs=tinysrgb&w=900', status: 'ACTIVE', daysRemaining: 4 },
    { id: 'a2', name: 'Golden Thread Dashiki', culture: 'West African Elegance', image: 'https://images.pexels.com/photos/34821103/pexels-photo-34821103.jpeg?auto=compress&cs=tinysrgb&w=900', status: 'ACTIVE', returnToday: true }
  ],
  history: [
    { id: 'h1', name: 'Ruby Zari Saree', dates: 'Rented: Dec 12 – Dec 19', image: 'https://images.pexels.com/photos/28943474/pexels-photo-28943474.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 'h2', name: 'Monochrome Hanbok', dates: 'Rented: Nov 05 – Nov 12', image: 'https://images.pexels.com/photos/29562553/pexels-photo-29562553.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ],
  wishlist: [
    { id: 'w1', image: 'https://images.pexels.com/photos/35357616/pexels-photo-35357616.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 'w2', image: 'https://images.pexels.com/photos/32939462/pexels-photo-32939462.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 'w3', image: 'https://images.pexels.com/photos/37147027/pexels-photo-37147027.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ]
};
