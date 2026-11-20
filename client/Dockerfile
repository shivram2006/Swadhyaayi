# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY client/package*.json ./client/

RUN npm install --workspace=client

COPY client ./client

WORKDIR /app/client
RUN npm run build

# Stage 2: Nginx Static Server
FROM nginx:alpine AS runner

COPY --from=builder /app/client/dist /usr/share/nginx/html

# Replace default nginx config for SPA routing
RUN printf 'server {\n\
    listen 80;\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html index.htm;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
    location /assets/ {\n\
        root /usr/share/nginx/html;\n\
        expires 1y;\n\
        add_header Cache-Control "public, no-transform";\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
