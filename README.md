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

Docker (build & run)

```bash
# build image
docker build -t ppt-editor:latest .

# run container
docker run -p 3000:3000 --env NODE_ENV=production ppt-editor:latest
```

Docker notes

- Uses `pnpm` inside the image. If you prefer `npm`/`yarn`, update the `Dockerfile` accordingly.
- .dockerignore excludes build artifacts and node_modules.

docker-compose (development / quick run)

```bash
docker compose up --build
```

CI workflow

- A GitHub Actions workflow was added at `.github/workflows/ci.yml` that runs `pnpm install`, `pnpm build`, and `pnpm lint` for pushes and pull requests.

UI polish

- Toolbar is now sticky, slightly translucent, has an elevated card look, and scrolls horizontally on small screens for improved responsiveness.


Deploying to Vercel

1. Sign in at https://vercel.com and import the Git repository.
2. Framework: Next.js (auto-detected). Build command: `pnpm build`. Output directory: (leave empty).
3. Ensure environment variables (if any) are added in Vercel dashboard.

UI changes in this update

- Added a simple responsive header and centered main container in `app/layout.tsx`.
- Improved base typography and small utility classes in `app/globals.css` for cleaner cards and container.

Next recommended steps (optional)

- Polish component spacing and responsive behavior across editor panes.
- Add end-to-end tests and a CI workflow for Vercel preview deployments.
