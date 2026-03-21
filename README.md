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

- If you see native build failures for packages like `canvas`, Vercel may be using a Node.js version that lacks prebuilt binaries for that package (e.g., Node 22). Pin the Node version to 18 in one of the following ways:
	- Add an `engines.node` field in `package.json` (already added: `"node": "18.x"`).
	- In the Vercel project settings, set the Node.js version to `18`.
	- Commit a `pnpm-lock.yaml` from a local machine that uses Node 18.

This project is configured to use Node 18 to avoid native build errors for `canvas` during deploy.

UI changes in this update

- Added a simple responsive header and centered main container in `app/layout.tsx`.
- Improved base typography and small utility classes in `app/globals.css` for cleaner cards and container.

Next recommended steps (optional)

- Polish component spacing and responsive behavior across editor panes.
- Add end-to-end tests and a CI workflow for Vercel preview deployments.
