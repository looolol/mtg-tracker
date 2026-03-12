# Stage 1: build
FROM node:24-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps ./apps
COPY packages ./packages
RUN npm install -g pnpm@latest && pnpm install --frozen-lockfile

RUN pnpm --filter api run build

# Stage 2: production
FROM node:24-alpine

WORKDIR /app

# Copy all node_modules from build stage (everything the API needs)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/api/package.json ./package.json
COPY packages ./packages

RUN npm install -g pnpm@latest && pnpm install --prod

# Copy the built app
COPY --from=build /app/apps/api/dist/. ./dist

ENV NODE_ENV=production

CMD ["node", "dist/main.js"]