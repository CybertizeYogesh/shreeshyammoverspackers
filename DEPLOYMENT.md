# Deployment Guide

## Local Validation

```bash
npm install
npm run build
npm run start
```

Open `http://localhost:3000`.

## Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default framework preset: Next.js.
4. Build command: `npm run build`.
5. Output directory: managed by Next.js.

## Production Checks

- Confirm all pages render without console errors.
- Confirm `/robots.txt` and `/sitemap.xml` are available.
- Confirm images load from `/images/...`, not remote URLs.
- Run Lighthouse after visual QA and animation parity passes.
