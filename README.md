# Shree Shyam Movers & Packers

Production-grade Next.js App Router website for Shree Shyam Movers & Packers.

## Stack

- Next.js App Router
- JavaScript
- Manual CSS
- Local assets in `public/images`
- SEO routes via `robots.js` and `sitemap.js`

## Commands

```bash
npm install
npm run dev
npm run build
npm run start
```

Dev server URL: `http://localhost:3000`

## Structure

- `src/app` routes and metadata
- `src/components` reusable global and homepage components
- `src/data` cloned navigation/content data
- `src/styles` scalable CSS partials imported from `globals.css`
- `public/images` locally extracted original assets
- `public/source` research copies of original HTML/CSS

## GitHub Push

```bash
git add .
git commit -m "Build Shree Shyam Movers & Packers website"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

## Deployment

The project is Vercel-ready. Push to GitHub, import the repository in Vercel, and use the default Next.js build settings.
