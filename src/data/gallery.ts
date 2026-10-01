import type { ClipKey } from './media';

export type GalleryCat = 'app' | '3d' | 'mascot' | 'motion';

type PieceBase = {
  title: string;
  cat: GalleryCat;
  href?: string;
};

export type GalleryPiece = PieceBase &
  (
    | { clip: ClipKey }
    | { src: string; poster: string; width: number; height: number }
    | { image: string; width: number; height: number }
  );

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

const img = (
  image: string,
  width: number,
  height: number,
  title: string,
  cat: GalleryCat,
  href?: string,
): GalleryPiece => ({ image, width, height, title, cat, href });

// App design is the default tab. Case-study media sits in whichever of the four fits.
export const gallery: GalleryPiece[] = [
  // App design
  { clip: 'tripbff-new-app', title: 'Tripbff screens', cat: 'app', href: '/work/tripbff' },
  {
    src: '/assets/works/work-09.mp4',
    poster: '/assets/works/work-09.jpg',
    width: 1138,
    height: 640,
    title: 'Tripbff in the app',
    cat: 'app',
    href: '/work/tripbff',
  },
  {
    src: '/assets/works/work-10.mp4',
    poster: '/assets/works/work-10.jpg',
    width: 1138,
    height: 640,
    title: 'Tripbff app frames',
    cat: 'app',
    href: '/work/tripbff',
  },
  { clip: 'dino-app-screens', title: 'Dino screens', cat: 'app', href: '/work/dino' },
  { clip: 'dino-streak-screens', title: 'Dino streaks', cat: 'app', href: '/work/dino' },
  img('/assets/img/dino/screens/dino_screen_01_onboarding-food-prefs.webp', 696, 1400, 'Food preferences', 'app', '/work/dino'),
  img('/assets/img/dino/screens/dino_screen_02_streak-2-days_a.webp', 696, 1400, 'Streak', 'app', '/work/dino'),
  img('/assets/img/dino/screens/dino_screen_03_dashboard-today.webp', 696, 1400, 'Today', 'app', '/work/dino'),
  img('/assets/img/dino/screens/dino_screen_04_never-forget-goals.webp', 696, 1400, 'Goals', 'app', '/work/dino'),
  img('/assets/img/dino/screens/dino_screen_05_streak-2-days_b.webp', 696, 1400, 'Streak, another take', 'app', '/work/dino'),
  img('/assets/img/dino/screens/dino_screen_06_streak-2-days_c.webp', 696, 1400, 'Streak, third take', 'app', '/work/dino'),
  img('/assets/img/dino/boards/dino_post1_onboarding-streak-dashboard.webp', 2000, 1500, 'Onboarding layout', 'app', '/work/dino'),
  img('/assets/img/dino/boards/dino_post2_goals-streak.webp', 2000, 1500, 'Goals layout', 'app', '/work/dino'),
  img('/assets/img/dino/brand/dino_ui_app-of-the-day-badge.webp', 1600, 1200, 'App of the Day art', 'app', '/work/dino'),
  img('/assets/img/dino/brand/dino_app-icon.webp', 798, 798, 'App icon', 'app', '/work/dino'),
  { clip: 'parrot-app-screens', title: 'Parrot screens', cat: 'app', href: '/work/parrot' },
  { clip: 'parrot-website', title: 'Parrot website', cat: 'app', href: '/work/parrot' },
  { clip: 'parrot-language-buddy', title: 'Language buddy', cat: 'app', href: '/work/parrot' },
  { clip: 'grokbot-widget', title: 'Grok bot widget', cat: 'app', href: '/work/grok-bot' },

  // 3D
  { clip: 'm3d-achievement-screens', title: 'Achievement screens', cat: '3d' },
  { clip: 'm3d-pokemon-pack', title: 'Pokemon pack', cat: '3d' },
  { clip: 'm3d-ecom-renders', title: 'Ecom renders', cat: '3d' },
  {
    src: '/assets/works/work-01.mp4',
    poster: '/assets/works/work-01.jpg',
    width: 640,
    height: 640,
    title: 'Character render',
    cat: '3d',
    href: '/work/tripbff',
  },
  img('/assets/img/tripbff/process/tripbff_process_3_render.webp', 1400, 1400, 'Tripbff render', '3d', '/work/tripbff'),

  // Mascot — more mascots, in-product mascots, and character stills
  { clip: 'tripbff-official-mascot', title: 'Tripbff', cat: 'mascot', href: '/work/tripbff' },
  { clip: 'dino-mascot-system', title: 'Dino', cat: 'mascot', href: '/work/dino' },
  { clip: 'parrot-emotions-rive', title: 'Parrot', cat: 'mascot', href: '/work/parrot' },
  { clip: 'grokbot-origin', title: 'Grok bot origin', cat: 'mascot', href: '/work/grok-bot' },
  { clip: 'grokbot-welcome', title: 'Grok bot welcome', cat: 'mascot', href: '/work/grok-bot' },
  { clip: 'grokbot-companion', title: 'Grok bot companion', cat: 'mascot', href: '/work/grok-bot' },
  { clip: 'mm-chicken', title: 'Chicken', cat: 'mascot' },
  { clip: 'mm-muse', title: 'Muse (Redesign)', cat: 'mascot' },
  { clip: 'mm-pillow', title: 'Pillow', cat: 'mascot' },
  { clip: 'mm-orbit-robot', title: 'Orbit', cat: 'mascot' },
  { clip: 'mm-tobu', title: 'Tobu', cat: 'mascot' },
  { clip: 'mm-llama', title: 'Llamas', cat: 'mascot' },
  { clip: 'mm-red-panda', title: 'Red panda', cat: 'mascot' },
  { clip: 'mm-concept-airbnb-atlas', title: 'Atlas (Concept)', cat: 'mascot' },
  { clip: 'mm-concept-doordash-turbo', title: 'Turbo (Concept)', cat: 'mascot' },
  { clip: 'mip-bluebird-paywall', title: 'Paywall', cat: 'mascot' },
  { clip: 'mip-recent-work', title: 'In-product screens', cat: 'mascot' },
  img('/assets/img/tripbff/tripbff_character-sheet.webp', 1440, 810, 'Character sheet', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/expressions/tripbff_expression_neutral.webp', 1200, 1200, 'Neutral', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/expressions/tripbff_expression_excited.webp', 1200, 1200, 'Excited', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/expressions/tripbff_expression_happy.webp', 1200, 1200, 'Happy', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/expressions/tripbff_expression_angry.webp', 1200, 1200, 'Angry', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/expressions/tripbff_expression_smirk.webp', 1200, 1200, 'Smirk', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/expressions/tripbff_expression_relaxed.webp', 1200, 1200, 'Relaxed', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/poses/tripbff_pose_side.webp', 1400, 1400, 'Side pose', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/poses/tripbff_pose_waving.webp', 1400, 1223, 'Waving', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/states/tripbff_state_default.webp', 1400, 1400, 'Default state', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/states/tripbff_state_going-on-a-trip.webp', 1024, 1024, 'Going on a trip', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/states/tripbff_state_travel-friends-meetup.webp', 1400, 1400, 'Meetup', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/process/tripbff_process_1_wireframe.webp', 1400, 1400, 'Wireframe', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/process/tripbff_process_2_wireframe-x-texture.webp', 1400, 1400, 'Wireframe and texture', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/props/tripbff_backpack.webp', 1400, 1400, 'Backpack', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/props/tripbff_airplane.webp', 1400, 1050, 'Airplane', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/props/tripbff_trophy.webp', 636, 568, 'Trophy', 'mascot', '/work/tripbff'),
  img('/assets/img/tripbff/props/tripbff_idle.webp', 1400, 1223, 'Idle', 'mascot', '/work/tripbff'),
  img('/assets/img/dino/mascot/dino_excited-jump_square.webp', 1600, 1600, 'Excited jump', 'mascot', '/work/dino'),
  img('/assets/img/dino/mascot/dino_standing-wave_cutout.webp', 1600, 914, 'Standing wave', 'mascot', '/work/dino'),
  img('/assets/img/dino/mascot/dino_waving-excited_cutout.webp', 1600, 914, 'Waving', 'mascot', '/work/dino'),
  img('/assets/img/dino/mascot/dino_waving-smile_cutout.webp', 1344, 768, 'Smile', 'mascot', '/work/dino'),
  img('/assets/img/dino/mascot/dino_sitting-on-food-plate_cutout.webp', 1600, 914, 'On a plate', 'mascot', '/work/dino'),
  img('/assets/img/dino/mascot/dino_lying-down_cutout.webp', 1600, 914, 'Lying down', 'mascot', '/work/dino'),
  img('/assets/img/dino/mascot/dino_peeking_cutout.webp', 1344, 768, 'Peeking', 'mascot', '/work/dino'),
  img('/assets/img/dino/boards/dino_branding-board.webp', 2000, 2000, 'Dino system', 'mascot', '/work/dino'),

  // Motion
  { clip: 'mo-app-mascot', title: 'App mascot', cat: 'motion' },
  { clip: 'mo-doordash', title: 'DoorDash (Concept)', cat: 'motion' },
  { clip: 'mo-calorie-congrats', title: 'Calorie congrats', cat: 'motion' },
  { clip: 'mo-liftoff', title: 'Liftoff (Concept)', cat: 'motion' },
  { clip: 'mo-streak-achievement', title: 'Streak achievement', cat: 'motion' },
  {
    src: '/assets/works/work-02.mp4',
    poster: '/assets/works/work-02.jpg',
    width: 854,
    height: 640,
    title: 'Mascot motion',
    cat: 'motion',
  },
  {
    src: '/assets/works/work-03.mp4',
    poster: '/assets/works/work-03.jpg',
    width: 854,
    height: 640,
    title: 'Expression loop',
    cat: 'motion',
  },
  {
    src: '/assets/works/work-04.mp4',
    poster: '/assets/works/work-04.jpg',
    width: 1138,
    height: 640,
    title: 'Wireframe motion',
    cat: 'motion',
  },
  {
    src: '/assets/works/work-05.mp4',
    poster: '/assets/works/work-05.jpg',
    width: 854,
    height: 640,
    title: 'Character motion',
    cat: 'motion',
  },
  {
    src: '/assets/works/work-06.mp4',
    poster: '/assets/works/work-06.jpg',
    width: 640,
    height: 640,
    title: 'Turnaround',
    cat: 'motion',
  },
  {
    src: '/assets/works/work-07.mp4',
    poster: '/assets/works/work-07.jpg',
    width: 854,
    height: 640,
    title: 'Launch clip',
    cat: 'motion',
  },
  {
    src: '/assets/works/work-08.mp4',
    poster: '/assets/works/work-08.jpg',
    width: 854,
    height: 640,
    title: 'Motion study',
    cat: 'motion',
  },
];
