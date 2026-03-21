# SlideCraft

Minimal web-based slide editor (SlideCraft) built with Next.js and Tailwind CSS.

Quick setup

- Install dependencies (pnpm):

```bash
pnpm install
pnpm dev
```

Build for production

```bash
pnpm build
pnpm start
```

Note about Docker & CI

This repository no longer includes Docker images or a GitHub Actions CI workflow. Development and deployment are intended to use the local `pnpm` workflow and Vercel (or your preferred hosting).

If you previously used Docker or CI for builds, please migrate any automation to your hosting platform's recommended pipelines.

UI polish

- Toolbar is now sticky, slightly translucent, has an elevated card look, and scrolls horizontally on small screens for improved responsiveness.


Deploying to Vercel

1. Sign in at https://vercel.com and import the Git repository.
2. Framework: Next.js (auto-detected). Build command: `pnpm build`. Output directory: (leave empty).
3. Ensure environment variables (if any) are added in Vercel dashboard.

Vercel Node version note

- Vercel currently requires Node.js 24 for this project. The `engines.node` field in `package.json` has been set to `"24.x"` to match that requirement.
- If you encounter native build failures for packages like `canvas`, consider pinning the Node version in the Vercel project settings or using compatible prebuilt binaries.

UI changes in this update

- Added a simple responsive header and centered main container in `app/layout.tsx`.
- Improved base typography and small utility classes in `app/globals.css` for cleaner cards and container.

Next recommended steps (optional)

- Polish component spacing and responsive behavior across editor panes.
- Add end-to-end tests and a CI workflow for Vercel preview deployments.
