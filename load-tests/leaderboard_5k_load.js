import http from 'k6/http';
import { check, sleep } from 'k6';

// 5,000 Concurrent Virtual Users (VUs) querying real-time leaderboards
export const options = {
  stages: [
    { duration: '30s', target: 2000 },
    { duration: '60s', target: 5000 },
    { duration: '120s', target: 5000 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<200'], // Leaderboard read queries must return in under 200ms
    http_req_failed: ['rate<0.01'],
  },
};

const BASE_URL = __ENV.API_BASE_URL || 'http://localhost:5000/api/v1';

export default function () {
  const metrics = ['OVERALL', 'CODING', 'APTITUDE', 'STREAK'];
  const metric = metrics[Math.floor(Math.random() * metrics.length)];

  // Global Leaderboard Lookup
  const res = http.get(`${BASE_URL}/leaderboards?scope=GLOBAL&metric=${metric}&page=1&limit=25`);
  check(res, {
    'leaderboard response is 200': (r) => r.status === 200,
    'has ranked students payload': (r) => {
      try {
        const body = JSON.parse(r.body);
        return body.success === true;
      } catch {
        return false;
      }
    },
  });

  sleep(Math.random() * 1.5 + 0.5);
}
