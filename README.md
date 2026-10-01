# Studiyo

Portfolio site for Studiyo, the mascot studio for consumer apps.

## Stack

[Astro](https://astro.build) static site. No server, no client framework. Vercel serves the `dist` output.

## Pages

- `/` homepage
- `/work/tripbff`
- `/work/dino`
- `/work/grok-bot`
- `/work/parrot`

## Structure

- `src/pages` — routes
- `src/components` — nav, footer, video player, call to action
- `src/layouts/Base.astro` — document shell, meta tags, font
- `src/styles/global.css` — layout and type
- `src/data/media.ts` — video slots (file, poster, dimensions)
- `public/assets/img` — Tripbff and Dino art (WebP)
- `public/assets/video` — muted H.264 clips and poster JPGs
- `public/favicon.svg`
- `vercel.json` — `cleanUrls`, no trailing slash, immutable cache for `/assets` and `/_astro`

Videos below the fold use `preload="none"` and play only while in view. The hero showreel loads immediately. `prefers-reduced-motion` shows posters instead of autoplay.

## Local

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Deploy

Vercel detects Astro. `npm run build` writes `dist`. Clean URLs come from `vercel.json` (`/work/tripbff`, not `/work/tripbff.html`).

The call to action is [Book a call](https://cal.com/studiyo/chat).
