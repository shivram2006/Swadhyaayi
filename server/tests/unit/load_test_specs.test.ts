import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('5,000 Concurrent Users Load Testing Specs Verification', () => {
  const rootDir = path.resolve(__dirname, '../../../');
  const loadTestsDir = path.join(rootDir, 'load-tests');

  it('should include assessment_5k_load.js targeting 5,000 VUs with strict p95 threshold', () => {
    const filePath = path.join(loadTestsDir, 'assessment_5k_load.js');
    expect(fs.existsSync(filePath)).toBe(true);

    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toContain('target: 5000');
    expect(content).toContain("http_req_duration: ['p(95)<350']");
    expect(content).toContain("http_req_failed: ['rate<0.01']");
    expect(content).toContain('/telemetry');
    expect(content).toContain('/answer');
  });

  it('should include leaderboard_5k_load.js targeting 5,000 VUs with <200ms read SLA', () => {
    const filePath = path.join(loadTestsDir, 'leaderboard_5k_load.js');
    expect(fs.existsSync(filePath)).toBe(true);

    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toContain('target: 5000');
    expect(content).toContain("http_req_duration: ['p(95)<200']");
    expect(content).toContain('scope=GLOBAL');
  });

  it('should include coding_arena_load.js for sandboxed execution stress testing', () => {
    const filePath = path.join(loadTestsDir, 'coding_arena_load.js');
    expect(fs.existsSync(filePath)).toBe(true);

    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toContain('/coding/run');
    expect(content).toContain("http_req_duration: ['p(95)<1500']");
  });

  it('should provide comprehensive k6 execution instructions in load-tests/README.md', () => {
    const readmePath = path.join(loadTestsDir, 'README.md');
    expect(fs.existsSync(readmePath)).toBe(true);

    const content = fs.readFileSync(readmePath, 'utf-8');
    expect(content).toContain('5,000 Concurrent Users');
    expect(content).toContain('k6 run');
  });
});
