# portfolio-hud

Arijeet Ghosh's portfolio — terminal/HUD look with a light game layer (achievements, console, decoding name).

Next.js 16 (App Router) · React 19 · TypeScript · plain CSS.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

| Path | What |
| --- | --- |
| `lib/data.ts` | All content: profile, stats, missions, skills, projects, achievements. Edit here first. |
| `app/globals.css` | Design tokens (`--acc` is the accent colour) and every style. |
| `app/page.tsx` | Section order; `SCANLINES` toggle. |
| `components/AchievementsProvider.tsx` | Unlock state, toast timing, persists to localStorage. |
| `components/ScrambleName.tsx` | Decode / flicker / glitch name animation (replays on hover). |
| `components/Console.tsx` | Console commands — add new ones in `exec()`. |

## Deploy

Push to GitHub and import into Vercel — no config needed.
