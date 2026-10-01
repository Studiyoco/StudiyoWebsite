export type GalleryCat = 'app' | '3d' | 'mascot' | 'motion';

export type GalleryPiece = {
  title: string;
  cat: GalleryCat;
  width: number;
  height: number;
  /** Video file. Poster is required when src is set. */
  src?: string;
  poster?: string;
  /** Still image, when the piece is not a video. */
  image?: string;
  /** Link to the X post, when this piece came from a post. */
  x?: string;
};

export const galleryFilters = [
  { id: 'app', label: 'App design' },
  { id: '3d', label: '3D' },
  { id: 'mascot', label: 'Mascot' },
  { id: 'motion', label: 'Motion' },
] as const;

export const galleryTags: Record<GalleryCat, string> = {
  app: 'App design',
  '3d': '3D',
  mascot: 'Mascot',
  motion: 'Motion',
};

// One tile per unique piece. Case-study clips (Tripbff, Dino, Parrot, Grok)
// stay on the homepage and are not repeated here.
export const gallery: GalleryPiece[] = [
  // App design
  {
    title: 'Cal AI website',
    cat: 'app',
    src: '/assets/live/cal-ai-website.mp4',
    poster: '/assets/live/cal-ai-website.jpg',
    width: 1280,
    height: 960,
    x: 'https://x.com/Studiyoco/status/2007532045170344075',
  },
  {
    title: 'App explainer',
    cat: 'app',
    src: '/assets/live/explainer-3d.mp4',
    poster: '/assets/live/explainer-3d.jpg',
    width: 1280,
    height: 720,
  },
  {
    title: 'Paywall',
    cat: 'app',
    src: '/assets/video/mip-bluebird-paywall.mp4',
    poster: '/assets/video/mip-bluebird-paywall.jpg',
    width: 1280,
    height: 960,
  },
  {
    title: 'Achievement screens',
    cat: 'app',
    src: '/assets/video/m3d-achievement-screens.mp4',
    poster: '/assets/video/m3d-achievement-screens.jpg',
    width: 1280,
    height: 720,
  },

  // 3D
  {
    title: 'Rip packs',
    cat: '3d',
    src: '/assets/x/rip-packs.mp4',
    poster: '/assets/x/rip-packs.jpg',
    width: 960,
    height: 720,
    x: 'https://x.com/Studiyoco/status/2104719983913968003',
  },
  {
    title: 'Mystic',
    cat: '3d',
    src: '/assets/live/celestial-logo.mp4',
    poster: '/assets/live/celestial-logo.jpg',
    width: 1280,
    height: 720,
  },
  {
    title: 'Audemars Piguet',
    cat: '3d',
    src: '/assets/live/audemars-piguet.mp4',
    poster: '/assets/live/audemars-piguet.jpg',
    width: 1080,
    height: 1920,
  },
  {
    title: 'Cuneiform',
    cat: '3d',
    src: '/assets/live/cuneiform-hd.mp4',
    poster: '/assets/live/cuneiform-hd.jpg',
    width: 1280,
    height: 720,
  },
  {
    title: 'Dream Melts',
    cat: '3d',
    src: '/assets/live/dream-melts-hero-3d.mp4',
    poster: '/assets/live/dream-melts-hero-3d.jpg',
    width: 1280,
    height: 720,
  },
  {
    title: 'Get Better Melts',
    cat: '3d',
    image: '/assets/live/get-better-melts.jpg',
    width: 1080,
    height: 1280,
  },
  {
    title: 'Product breakdown',
    cat: '3d',
    src: '/assets/live/product-breakdown-3d.mp4',
    poster: '/assets/live/product-breakdown-3d.jpg',
    width: 1080,
    height: 1280,
  },
  {
    title: 'Sequence',
    cat: '3d',
    src: '/assets/live/sequence-01.mp4',
    poster: '/assets/live/sequence-01.jpg',
    width: 1280,
    height: 720,
  },
  {
    title: 'Solana',
    cat: '3d',
    src: '/assets/live/solana-3d.mp4',
    poster: '/assets/live/solana-3d.jpg',
    width: 1280,
    height: 720,
  },
  {
    title: 'Capsules',
    cat: '3d',
    src: '/assets/live/stimuleye-3d-animation-filling-capsules.mp4',
    poster: '/assets/live/stimuleye-3d-animation-filling-capsules.jpg',
    width: 1280,
    height: 1280,
  },
  {
    title: 'Stimuleye',
    cat: '3d',
    src: '/assets/live/stimuleye.mp4',
    poster: '/assets/live/stimuleye.jpg',
    width: 1280,
    height: 1280,
  },
  {
    title: 'Product turntable',
    cat: '3d',
    src: '/assets/live/video-2025-06-23-19-43-57.mp4',
    poster: '/assets/live/video-2025-06-23-19-43-57.jpg',
    width: 1280,
    height: 720,
  },
  {
    title: 'Studio mark',
    cat: '3d',
    src: '/assets/live/video-2025-08-20-21-59-45.mp4',
    poster: '/assets/live/video-2025-08-20-21-59-45.jpg',
    width: 1280,
    height: 758,
  },
  {
    title: 'LIT',
    cat: '3d',
    src: '/assets/live/video-2025-10-23-02-16-24.mp4',
    poster: '/assets/live/video-2025-10-23-02-16-24.jpg',
    width: 1280,
    height: 720,
  },
  {
    title: 'Wallet unbox',
    cat: '3d',
    src: '/assets/live/wallet-opening-3d.mp4',
    poster: '/assets/live/wallet-opening-3d.jpg',
    width: 1280,
    height: 720,
  },
  {
    title: 'Pokémon pack',
    cat: '3d',
    src: '/assets/video/m3d-pokemon-pack.mp4',
    poster: '/assets/video/m3d-pokemon-pack.jpg',
    width: 1280,
    height: 960,
    x: 'https://x.com/Studiyoco/status/2103534801378816308',
  },
  {
    title: 'Product renders',
    cat: '3d',
    src: '/assets/video/m3d-ecom-renders.mp4',
    poster: '/assets/video/m3d-ecom-renders.jpg',
    width: 1280,
    height: 720,
  },

  // Mascot
  {
    title: 'Chicken',
    cat: 'mascot',
    src: '/assets/video/mm-chicken.mp4',
    poster: '/assets/video/mm-chicken.jpg',
    width: 1080,
    height: 1080,
  },
  {
    title: 'Juno',
    cat: 'mascot',
    src: '/assets/live/juno-reference-style.mp4',
    poster: '/assets/live/juno-reference-style.jpg',
    width: 1280,
    height: 1280,
  },
  {
    title: 'Pear',
    cat: 'mascot',
    src: '/assets/live/pear-motion.mp4',
    poster: '/assets/live/pear-motion.jpg',
    width: 1280,
    height: 1354,
  },
  {
    title: 'Siri',
    cat: 'mascot',
    src: '/assets/live/siri-mascot-animation.mp4',
    poster: '/assets/live/siri-mascot-animation.jpg',
    width: 1280,
    height: 1280,
  },
  {
    title: 'YoYoYo',
    cat: 'mascot',
    src: '/assets/live/yoyoyo.mp4',
    poster: '/assets/live/yoyoyo.jpg',
    width: 1280,
    height: 1280,
  },
  {
    title: 'Globe states',
    cat: 'mascot',
    image: '/assets/live/globe-states.jpg',
    width: 1440,
    height: 810,
  },
  {
    title: 'Muse',
    cat: 'mascot',
    src: '/assets/video/mm-muse.mp4',
    poster: '/assets/video/mm-muse.jpg',
    width: 1280,
    height: 960,
    x: 'https://x.com/Studiyoco/status/2103838860753199251',
  },
  {
    title: 'Pillow',
    cat: 'mascot',
    src: '/assets/video/mm-pillow.mp4',
    poster: '/assets/video/mm-pillow.jpg',
    width: 1280,
    height: 960,
  },
  {
    title: 'Orbit',
    cat: 'mascot',
    src: '/assets/video/mm-orbit-robot.mp4',
    poster: '/assets/video/mm-orbit-robot.jpg',
    width: 1280,
    height: 766,
  },
  {
    title: 'Tobu',
    cat: 'mascot',
    src: '/assets/video/mm-tobu.mp4',
    poster: '/assets/video/mm-tobu.jpg',
    width: 1280,
    height: 960,
  },
  {
    title: 'Llamas',
    cat: 'mascot',
    src: '/assets/video/mm-llama.mp4',
    poster: '/assets/video/mm-llama.jpg',
    width: 1280,
    height: 960,
  },
  {
    title: 'Red panda',
    cat: 'mascot',
    src: '/assets/video/mm-red-panda.mp4',
    poster: '/assets/video/mm-red-panda.jpg',
    width: 1280,
    height: 960,
  },
  {
    title: 'Atlas (Concept)',
    cat: 'mascot',
    src: '/assets/video/mm-concept-airbnb-atlas.mp4',
    poster: '/assets/video/mm-concept-airbnb-atlas.jpg',
    width: 1280,
    height: 720,
  },
  {
    title: 'Turbo (Concept)',
    cat: 'mascot',
    src: '/assets/video/mm-concept-doordash-turbo.mp4',
    poster: '/assets/video/mm-concept-doordash-turbo.jpg',
    width: 1280,
    height: 720,
  },

  // Motion
  {
    title: 'Logo',
    cat: 'motion',
    src: '/assets/live/logo-update.mp4',
    poster: '/assets/live/logo-update.jpg',
    width: 1280,
    height: 960,
  },
  {
    title: 'DoorDash',
    cat: 'motion',
    src: '/assets/video/mo-doordash.mp4',
    poster: '/assets/video/mo-doordash.jpg',
    width: 1280,
    height: 720,
  },
  {
    title: 'Liftoff (Concept)',
    cat: 'motion',
    src: '/assets/video/mo-liftoff.mp4',
    poster: '/assets/video/mo-liftoff.jpg',
    width: 1280,
    height: 720,
  },
  {
    title: 'Chip',
    cat: 'motion',
    src: '/assets/live/video-2025-09-20-17-39-58.mp4',
    poster: '/assets/live/video-2025-09-20-17-39-58.jpg',
    width: 1280,
    height: 720,
  },
];
