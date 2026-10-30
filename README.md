## Tech stack

| Purpose | Tool |
|---|---|
| Framework | [Astro](https://astro.build) |
| Animation | [GSAP](https://gsap.com) (ScrollTrigger, SplitText) |
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering) |
| Language | TypeScript |
| Styling | Plain CSS with custom properties |

## Getting started

Requires Node.js 18.20+ (20+ recommended).

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

| Command | Action |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build the production site to `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```
portfolio/
├── public/                  # Static files served as-is (favicon, etc.)
├── src/
│   ├── assets/
│   │   └── photos/          # Drop gallery photos here
│   ├── components/
│   │   ├── Cursor.astro         # Custom animated cursor
│   │   ├── Footer.astro
│   │   ├── GalleryGrid.astro    # Masonry grid, reads src/assets/photos
│   │   ├── Header.astro
│   │   └── ProjectCard.astro
│   ├── content/
│   │   └── projects/        # One Markdown file per project
│   ├── data/
│   │   └── site.ts          # Your name, email, socials, nav links
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell, fonts, shared scripts
│   ├── pages/
│   │   ├── index.astro          # Home
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── gallery.astro
│   │   └── work/
│   │       ├── index.astro      # Project list
│   │       └── [slug].astro     # Project detail page
│   ├── scripts/
│   │   ├── animations.ts    # GSAP / SplitText / ScrollTrigger setup
│   │   └── smooth-scroll.ts # Lenis + ScrollTrigger sync
│   ├── styles/
│   │   └── global.css       # Design tokens and base styles
│   └── content.config.ts    # Project collection schema
├── .env.example
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Customizing

**Your details.** Edit `src/data/site.ts` for your name, tagline, email, social links and navigation.

**Add a project.** Create a new file in `src/content/projects/`, for example `my-app.md`:

```md
---
title: My App
summary: One line about what it does.
year: 2026
role: Design & development
stack: [Astro, GSAP]
link: https://example.com
repo: https://github.com/you/my-app
featured: true   # shows on the home page
---

Write the case study in Markdown here.
```

It appears on `/work` and gets its own page automatically.

**Add photos.** Put images in `src/assets/photos/`. Use numbered filenames (`01-sunrise.jpg`) to control order. The filename becomes the alt text, so make it descriptive.

**Contact form.** Create a free endpoint with [Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io), then copy `.env.example` to `.env` and set:

```
PUBLIC_FORM_ENDPOINT=your-endpoint-url
```

The form only renders when this is set. Otherwise the page shows just your email.

## Deployment

The build output is a static site, so it deploys anywhere. Set `site` in `astro.config.mjs` to your final URL first.

- **Vercel / Netlify / Cloudflare Pages:** import the GitHub repo. Build command `npm run build`, output directory `dist`.
- **GitHub Pages:** use the [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

Remember to add `PUBLIC_FORM_ENDPOINT` in your host's environment variable settings.


## License

MIT. See [LICENSE](LICENSE).
