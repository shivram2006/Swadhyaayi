import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('DevOps & Production Infrastructure Integrity Tests', () => {
  const rootDir = path.resolve(__dirname, '../../../');

  it('should have a valid docker-compose.yml with all 5 required production services', () => {
    const composePath = path.join(rootDir, 'docker-compose.yml');
    expect(fs.existsSync(composePath)).toBe(true);

    const content = fs.readFileSync(composePath, 'utf-8');
    expect(content).toContain('mongo:');
    expect(content).toContain('redis:');
    expect(content).toContain('api:');
    expect(content).toContain('client:');
    expect(content).toContain('nginx:');
    expect(content).toContain('mongo-data:');
    expect(content).toContain('redis-data:');
    expect(content).toContain('swadhyayi-net:');
  });

  it('should have a production Nginx configuration with rate limiting and gzip', () => {
    const nginxPath = path.join(rootDir, 'nginx', 'nginx.conf');
    expect(fs.existsSync(nginxPath)).toBe(true);

    const content = fs.readFileSync(nginxPath, 'utf-8');
    expect(content).toContain('gzip on;');
    expect(content).toContain('limit_req_zone');
    expect(content).toContain('proxy_pass http://backend_api;');
    expect(content).toContain('proxy_pass http://frontend_client;');
    expect(content).toContain('client_max_body_size 15M;');
    expect(content).toContain('X-Frame-Options');
  });

  it('should have multi-stage Dockerfiles for both server and client', () => {
    const serverDockerPath = path.join(rootDir, 'server', 'Dockerfile');
    const clientDockerPath = path.join(rootDir, 'client', 'Dockerfile');

    expect(fs.existsSync(serverDockerPath)).toBe(true);
    expect(fs.existsSync(clientDockerPath)).toBe(true);

    const serverContent = fs.readFileSync(serverDockerPath, 'utf-8');
    expect(serverContent).toContain('FROM node:20-alpine AS builder');
    expect(serverContent).toContain('FROM node:20-slim AS runner');
    expect(serverContent).toContain('python3');
    expect(serverContent).toContain('gcc');

    const clientContent = fs.readFileSync(clientDockerPath, 'utf-8');
    expect(clientContent).toContain('FROM node:20-alpine AS builder');
    expect(clientContent).toContain('FROM nginx:alpine AS runner');
    expect(clientContent).toContain('try_files $uri $uri/ /index.html;');
  });

  it('should have an automated GitHub Actions CI/CD workflow in .github/workflows/ci.yml', () => {
    const ciPath = path.join(rootDir, '.github', 'workflows', 'ci.yml');
    expect(fs.existsSync(ciPath)).toBe(true);

    const content = fs.readFileSync(ciPath, 'utf-8');
    expect(content).toContain('name: Swadhyayi Enterprise CI/CD Pipeline');
    expect(content).toContain('npm run test --workspace=server');
    expect(content).toContain('npm run test --workspace=client');
    expect(content).toContain('npm run build --workspace=server');
    expect(content).toContain('npm run build --workspace=client');
  });
});
