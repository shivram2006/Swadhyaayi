# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy root package and server package
COPY package*.json ./
COPY server/package*.json ./server/

RUN npm install --workspace=server

COPY server ./server

WORKDIR /app/server
RUN npm run build

# Stage 2: Production Runner
FROM node:20-slim AS runner

WORKDIR /app

# Install system runtime dependencies for sandboxed code runner (Python 3, GCC, G++, curl)
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    gcc \
    g++ \
    curl \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY server/package*.json ./server/

RUN npm install --omit=dev --workspace=server

COPY --from=builder /app/server/dist ./server/dist

WORKDIR /app/server

ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

USER node

CMD ["node", "dist/server.js"]
