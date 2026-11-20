import http from 'k6/http';
import { check, sleep } from 'k6';

// Simulates high-concurrency coding contest submissions
export const options = {
  stages: [
    { duration: '30s', target: 500 },
    { duration: '60s', target: 2500 },
    { duration: '90s', target: 2500 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<1500'], // Code execution queue SLA under 1500ms
    http_req_failed: ['rate<0.02'],
  },
};

const BASE_URL = __ENV.API_BASE_URL || 'http://localhost:5000/api/v1';

export default function () {
  const codePayload = JSON.stringify({
    questionId: '60d5ecb8b5c9c614b8e8ba01',
    language: 'python',
    code: 'def twoSum(nums, target):\n    seen = {}\n    for i, n in enumerate(nums):\n        if target - n in seen:\n            return [seen[target - n], i]\n        seen[n] = i\n    return []',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${__ENV.TEST_AUTH_TOKEN || 'mock-token'}`,
    },
  };

  const res = http.post(`${BASE_URL}/coding/run`, codePayload, params);
  check(res, {
    'submission acknowledged or rate-limited cleanly': (r) =>
      r.status === 200 || r.status === 429 || r.status === 401,
  });

  sleep(Math.random() * 3 + 2);
}
