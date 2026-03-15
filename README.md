# Trips Between Deadlines

> Honest travel notes from a 9-to-5 guy

A travel blog built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Fast, SEO-optimized, and designed for a working professional who documents trips on weekends and holidays.

## Quick Start

```bash
npm install
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production
npm run preview    # Preview production build locally
```

## Adding a New Trip

1. Create a new `.mdx` file in `src/content/trips/en/`
2. Add frontmatter (see existing posts for the schema)
3. Write your content in Markdown
4. Add photos to the `gallery` array in frontmatter
5. Commit & push — Vercel auto-deploys

## Project Structure

```
src/
├── components/        # Reusable UI components
├── content/trips/en/  # Trip blog posts (MDX)
├── i18n/              # Internationalization (translations, config)
├── layouts/           # Page layouts (BaseLayout, TripLayout)
├── lib/               # Utility functions
├── pages/en/          # Route pages
└── styles/            # Global CSS (Tailwind)
```

## Deploy to Vercel

### First-time setup

1. Push this repo to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click "New Project" → Import your GitHub repo

4. Vercel auto-detects Astro — just click "Deploy"

5. Your site is live at `your-project.vercel.app`

### Custom Domain

1. Buy a domain from [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) (cheapest) or Namecheap

2. In Vercel dashboard → your project → Settings → Domains

3. Add your domain (e.g. `tripsbetweendeadlines.com`)

4. Update DNS records as Vercel instructs (usually just point nameservers)

5. SSL is automatic and free

6. Update `site` in `astro.config.mjs` to your actual domain

### After Deploy — SEO Checklist

- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console) (`yourdomain.com/sitemap-index.xml`)
- [ ] Submit to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Verify Open Graph tags with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter cards at [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## i18n (Adding a New Language)

1. Add locale to `src/i18n/config.ts`
2. Create translation file in `src/i18n/translations/` (e.g. `hi.json`)
3. Create translated content in `src/content/trips/hi/`
4. Create page routes in `src/pages/hi/`
5. Update `astro.config.mjs` locales array

## Tech Stack

- **Astro v6** — Static site generator (zero JS by default)
- **Tailwind CSS v4** — Utility-first styling
- **MDX** — Markdown with embedded components
- **React** — Interactive islands (photo gallery, dark mode)
- **Vercel** — Hosting with automatic deploys

## License

Personal project. All trip content is original.
