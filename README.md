# Studiyo

Marketing site for Studiyo, the mascot, motion, and Rive character-system studio (a Zitlac Media studio).

Single-file static site. No build step.

## Structure
- `index.html` - the entire site (styles and script inline)
- `assets/` - videos, posters, the state-machine sketch, favicon
- `vercel.json` - static config with immutable asset caching

## Sections
1. Hero
2. Work marquee (curated Rive animation frames)
3. Disciplines: mascot design, motion, Rive systems
4. Thesis: static mascot vs character system
5. Selected work (tripbff and motion samples)
6. The Rive workflow: six phases with real day counts, plus a proportional timeline
7. The state machine: hand-drawn planning sketch beside an interactive rebuild you can trigger
8. Why Rive
9. Contact / mascot brief

## Local preview
Any static server works, for example:
```
npx serve .
```

## Deploy
Vercel detects it as a static site. No framework, no build command.

The primary call to action links to the mascot intake form at https://studiyo-form2.vercel.app/
