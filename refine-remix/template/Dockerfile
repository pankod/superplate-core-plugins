FROM refinedev/node:18 AS base

FROM base as deps

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base as builder

COPY --from=deps /app/refine/node_modules ./node_modules

COPY . .

RUN npm run build

FROM base as production-deps

COPY --from=deps /app/refine/node_modules ./node_modules

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

ENV NODE_ENV production

RUN npm prune

FROM base AS runner

ENV NODE_ENV production

COPY --from=production-deps --chown=refine:nodejs /app/refine/node_modules ./node_modules
COPY --from=builder --chown=refine:nodejs /app/refine/build ./build
COPY --from=builder --chown=refine:nodejs /app/refine/public ./public
COPY --from=builder --chown=refine:nodejs /app/refine/package.json ./package.json

USER refine

CMD ["npm", "run", "start"]
