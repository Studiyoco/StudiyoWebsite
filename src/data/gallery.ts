import type { ClipKey } from './media';

export type GalleryCat = 'case' | 'mascot' | 'product' | '3d' | 'motion' | 'app';

export type GalleryPiece = {
  clip: ClipKey;
  title: string;
  tag: string;
  cat: GalleryCat;
  href?: string;
};

export const galleryFilters = [
  { id: 'all', label: 'All' },
  { id: 'case', label: 'Case studies' },
  { id: 'product', label: 'In-product mascots' },
  { id: '3d', label: '3D' },
  { id: 'motion', label: 'Motion' },
  { id: 'app', label: 'App design' },
] as const;

// Every library clip except Mogging cat, Codex, Tripbff brand-face, and the hero showreel.
export const gallery: GalleryPiece[] = [
  { clip: 'tripbff-official-mascot', title: 'Tripbff', tag: 'Case study', cat: 'case', href: '/work/tripbff' },
  { clip: 'dino-streak-screens', title: 'Dino', tag: 'Case study', cat: 'case', href: '/work/dino' },
  { clip: 'grokbot-widget', title: 'Grok bot', tag: 'Case study', cat: 'case', href: '/work/grok-bot' },
  { clip: 'parrot-emotions-rive', title: 'Parrot', tag: 'Case study', cat: 'case', href: '/work/parrot' },
  { clip: 'dino-mascot-system', title: 'Dino system', tag: 'Case study', cat: 'case', href: '/work/dino' },
  { clip: 'grokbot-origin', title: 'Origin', tag: 'Case study', cat: 'case', href: '/work/grok-bot' },
  { clip: 'grokbot-welcome', title: 'Welcome', tag: 'Case study', cat: 'case', href: '/work/grok-bot' },
  { clip: 'grokbot-companion', title: 'Companion', tag: 'Case study', cat: 'case', href: '/work/grok-bot' },

  { clip: 'mm-chicken', title: 'Chicken', tag: 'Mascot', cat: 'mascot' },
  { clip: 'mm-muse', title: 'Muse (Redesign)', tag: 'Mascot', cat: 'mascot' },
  { clip: 'mm-pillow', title: 'Pillow', tag: 'Mascot', cat: 'mascot' },
  { clip: 'mm-orbit-robot', title: 'Orbit', tag: 'Mascot', cat: 'mascot' },
  { clip: 'mm-tobu', title: 'Tobu', tag: 'Mascot', cat: 'mascot' },
  { clip: 'mm-llama', title: 'Llamas', tag: 'Mascot', cat: 'mascot' },
  { clip: 'mm-red-panda', title: 'Red panda', tag: 'Mascot', cat: 'mascot' },
  { clip: 'mm-concept-airbnb-atlas', title: 'Atlas (Concept)', tag: 'Mascot', cat: 'mascot' },
  { clip: 'mm-concept-doordash-turbo', title: 'Turbo (Concept)', tag: 'Mascot', cat: 'mascot' },

  { clip: 'mip-bluebird-paywall', title: 'Paywall', tag: 'In-product', cat: 'product' },
  { clip: 'mip-recent-work', title: 'In-product screens', tag: 'In-product', cat: 'product' },

  { clip: 'm3d-achievement-screens', title: 'Achievement screens', tag: '3D', cat: '3d' },
  { clip: 'm3d-pokemon-pack', title: 'Pokemon pack', tag: '3D', cat: '3d' },
  { clip: 'm3d-ecom-renders', title: 'Ecom renders', tag: '3D', cat: '3d' },

  { clip: 'mo-app-mascot', title: 'App mascot', tag: 'Motion', cat: 'motion' },
  { clip: 'mo-doordash', title: 'DoorDash (Concept)', tag: 'Motion', cat: 'motion' },
  { clip: 'mo-calorie-congrats', title: 'Calorie congrats', tag: 'Motion', cat: 'motion' },
  { clip: 'mo-liftoff', title: 'Liftoff (Concept)', tag: 'Motion', cat: 'motion' },
  { clip: 'mo-streak-achievement', title: 'Streak achievement', tag: 'Motion', cat: 'motion' },

  { clip: 'dino-app-screens', title: 'Dino screens', tag: 'App design', cat: 'app' },
  { clip: 'parrot-app-screens', title: 'Parrot screens', tag: 'App design', cat: 'app' },
  { clip: 'tripbff-new-app', title: 'Tripbff screens', tag: 'App design', cat: 'app' },
  { clip: 'parrot-website', title: 'Parrot website', tag: 'App design', cat: 'app' },
  { clip: 'parrot-language-buddy', title: 'Language buddy', tag: 'App design', cat: 'app' },
];
