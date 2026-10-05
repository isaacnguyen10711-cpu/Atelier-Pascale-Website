# Atelier Pascale

Next.js App Router website built with TypeScript and Tailwind CSS v4.

## Development

Run these commands from the main repository folder, `Atelier Pascale Website`:

```sh
npm install
npm run dev
```

Open http://localhost:3000. Pages live in `app`:

- `page.tsx`: home
- `about/page.tsx`: about
- `contact/page.tsx`: contact
- `products/*/page.tsx`: collection pages

`app/layout.tsx` provides the navbar, footer, global CSS and metadata. Shared components live in `components/`. Interactive components such as the navbar and reveal animations use `'use client'`. Images stay in `assets/images`; Tangerine fonts are self-hosted through Fontsource. Tailwind tokens are in `app/globals.css`, with PostCSS configured in `postcss.config.mjs`.

## Checks and production preview

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

`npm run build` exports the static site to `out/`. It also runs `fix-static-export.mjs` to work around a Next.js Windows bug that otherwise gives navigation prefetch files incorrect names. On other platforms this step does nothing. `npm run preview` and `npm start` serve that export locally. Rebuild after changes before previewing.

## Hosting

For Vercel, use the repository root (leave Root Directory empty or set it to `.`), select the Next.js framework preset, and clear any old `ap-frontend`, Vite or `dist` output overrides. Use `npm run build` and the framework's default output handling.

For AWS S3 with CloudFront or another static host, upload the contents of `out/`. Routes export as directories containing `index.html`; the host must resolve these for URLs such as `/about/`. Configure the exported `404.html` for missing pages. Do not use the old SPA rewrite that sends every route to the homepage.

The app uses `output: 'export'` and `images.unoptimized` so it needs no Node.js server in production. If server APIs or database-backed runtime features are added later, remove static export and deploy with a Next.js server runtime.
