FROM node:18-alpine

WORKDIR /app

# Install pnpm and basic deps
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm@8

# Copy package manifests first for cached installs
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

# Copy rest of the sources
COPY . .

# Build the Next.js app
RUN pnpm build

ENV NODE_ENV=production
EXPOSE 3000

CMD ["pnpm", "start"]
