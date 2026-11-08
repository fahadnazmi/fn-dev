## Tech stack

| Purpose | Tool |
|---|---|
| Framework | [Astro](https://astro.build) |
| Animation | [GSAP](https://gsap.com) (ScrollTrigger, SplitText) |
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering) |
| Language | TypeScript |
| Styling | Plain CSS with custom properties |

## Getting started

Requires Node.js 22.23.4 or newer (Node 22 LTS recommended).

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
├── public/                  # Static files served as-is (favicon, project images)
├── src/
│   ├── assets/
│   │   ├── hero.webp
│   │   └── photos/          # Source photography, optimized by Astro
│   ├── components/
│   │   ├── Cursor.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── ProjectCard.astro
│   │   └── ProjectSection.astro
│   ├── content/
│   │   └── projects/        # One Markdown file per project
│   ├── data/
│   │   └── site.ts          # Profile, navigation, About, and hero configuration
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── work/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── scripts/
│   │   ├── animations.ts
│   │   └── smooth-scroll.ts
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── .env.example
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Customizing

**Your details.** Edit `src/data/site.ts` for your name, tagline, email, socials, city, city coordinates, navigation, tech stack, timeline, and hero images. Edit `src/styles/global.css` for design tokens and global styles.

**Add a project.** Create a new file in `src/content/projects/`, for example `my-app.mdx`:


It appears on `/work` and gets its own page automatically.

**Update photography.** Replace the About portrait in `src/assets/photos/` or the project hero in `src/assets/`. Astro generates responsive AVIF and WebP variants for these images.

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
