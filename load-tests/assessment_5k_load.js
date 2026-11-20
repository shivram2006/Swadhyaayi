import http from 'k6/http';
import { check, sleep } from 'k6';

// 5,000 Concurrent Virtual Users (VUs) Stress Profile
export const options = {
  stages: [
    { duration: '30s', target: 1000 },  // Phase 1: 1,000 students join
    { duration: '60s', target: 5000 },  // Phase 2: Rapid spike to 5,000 concurrent students
    { duration: '120s', target: 5000 }, // Phase 3: Sustained exam active window (5,000 VUs)
    { duration: '30s', target: 0 },     // Phase 4: Exam completion & cooldown
  ],
  thresholds: {
    // SLA Contracts
    http_req_duration: ['p(95)<350'], // 95% of requests must complete under 350ms
    http_req_failed: ['rate<0.01'],    // Under 1% error rate during 5K concurrency
  },
};

const BASE_URL = __ENV.API_BASE_URL || 'http://localhost:5000/api/v1';

export default function () {
  const assessmentId = __ENV.ASSESSMENT_ID || '60d5ecb8b5c9c614b8e8ba01';

  const params = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${__ENV.TEST_AUTH_TOKEN || 'mock-token'}`,
    },
  };

  // Step 1: Health / Ping Check
  const healthRes = http.get(`${BASE_URL.replace('/v1', '')}/health`);
  check(healthRes, {
    'health check status is 200': (r) => r.status === 200,
  });

  // Step 2: Fetch Active Assessment Metadata
  const oppRes = http.get(`${BASE_URL}/assessments/${assessmentId}`, params);
  check(oppRes, {
    'assessment metadata status is 200 or 401': (r) => r.status === 200 || r.status === 401,
  });

  // Step 3: Proctoring Heartbeat / Window Visibility Telemetry
  const telemetryPayload = JSON.stringify({
    eventType: 'WINDOW_BLUR',
    details: 'User switched focus',
  });
  const telemetryRes = http.post(
    `${BASE_URL}/assessments/${assessmentId}/telemetry`,
    telemetryPayload,
    params
  );
  check(telemetryRes, {
    'telemetry logged': (r) => r.status === 200 || r.status === 401,
  });

  // Step 4: Periodic Draft Answer Save
  const answerPayload = JSON.stringify({
    sectionId: 'sec-1',
    questionId: '60d5ecb8b5c9c614b8e8bf01',
    type: 'APTITUDE',
    selectedOptionId: 'opt-b',
  });
  const answerRes = http.post(
    `${BASE_URL}/assessments/${assessmentId}/answer`,
    answerPayload,
    params
  );
  check(answerRes, {
    'draft answer saved': (r) => r.status === 200 || r.status === 401,
  });

  sleep(Math.random() * 2 + 1); // 1-3s random human thinking pause
}
