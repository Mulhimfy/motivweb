# AyahReel website

Landing page and guides for **AyahReel**, the Quran reel
maker for Android and iPhone. Next.js 16 (App Router) + Tailwind 4.

| Route | What it is |
|---|---|
| `/` | Landing page (`src/components/home/`) |
| `/blog`, `/blog/[slug]` | Guides. One module per post in `src/content/blog/`, listed in `src/lib/blog/registry.ts` |
| `/privacy` | The Ilham app's privacy policy (Ilham's store listing points here) |
| `/ayahreel` | Direct APK download (noindex, meant to be sent, not found) |
| `/d/[id]` | Legacy Ilham anonymous dua links, kept working |

Store links, site URL and contact live in `src/lib/constants.ts`.
Images in `public/scenes` and `public/thumbs` come from the app's
`assets/backgrounds` and `assets/scene_thumbs`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
