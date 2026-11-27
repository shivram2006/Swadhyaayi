import { ValidationError } from '../../core/utils/appError';

export interface ExternalJobFilters {
  query?: string;
  country?: string;
  datePosted?: string;
  remoteOnly?: boolean;
  employmentTypes?: string;
}

export interface NormalizedExternalJob {
  _id: string;
  isExternal: true;
  publisher: string;
  title: string;
  company: {
    name: string;
    logoUrl?: string;
    website?: string;
  };
  type: 'FULL_TIME' | 'INTERNSHIP' | 'CONTRACT';
  workMode: 'REMOTE' | 'HYBRID' | 'ON_SITE';
  location: string;
  salary: {
    min: number;
    max: number;
    currency: string;
    period: 'LPA' | 'PER_MONTH' | 'PER_HOUR';
  };
  requirements: {
    skills: string[];
  };
  description: string;
  applyUrl: string;
  source: 'LINKEDIN' | 'INTERNSHALA' | 'VERIFIED_PARTNER';
  status: 'ACTIVE';
  postedAt?: string;
  createdAt: string;
  updatedAt: string;
}

interface CacheEntry {
  expiresAt: number;
  jobs: NormalizedExternalJob[];
}

const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours
const jobCache = new Map<string, CacheEntry>();

function mapEmploymentType(rawType?: string): 'FULL_TIME' | 'INTERNSHIP' | 'CONTRACT' {
  const upper = (rawType || '').toUpperCase();
  if (upper.includes('INTERN')) return 'INTERNSHIP';
  if (upper.includes('CONTRACT') || upper.includes('PARTTIME')) return 'CONTRACT';
  return 'FULL_TIME';
}

function mapSource(publisher?: string): 'LINKEDIN' | 'INTERNSHALA' | 'VERIFIED_PARTNER' {
  const lower = (publisher || '').toLowerCase();
  if (lower.includes('linkedin')) return 'LINKEDIN';
  if (lower.includes('internshala')) return 'INTERNSHALA';
  return 'VERIFIED_PARTNER';
}

function mapSalaryPeriod(period?: string): 'LPA' | 'PER_MONTH' | 'PER_HOUR' {
  const upper = (period || '').toUpperCase();
  if (upper === 'HOUR') return 'PER_HOUR';
  if (upper === 'MONTH') return 'PER_MONTH';
  return 'LPA';
}

function normalizeJob(raw: any, idx: number): NormalizedExternalJob {
  const city = raw.job_city || '';
  const state = raw.job_state || '';
  const country = raw.job_country || '';
  const locationParts = [city, state, country].filter(Boolean);
  const location = raw.job_is_remote
    ? locationParts.length > 0
      ? `Remote · ${locationParts.join(', ')}`
      : 'Remote'
    : locationParts.join(', ') || 'India';

  const nowIso = new Date().toISOString();
  const minSal = Number(raw.job_min_salary) || 0;
  const maxSal = Number(raw.job_max_salary) || minSal;
  const period = mapSalaryPeriod(raw.job_salary_period);
  const scale = period === 'LPA' && minSal > 1000 ? 100000 : 1;

  const publisher = raw.job_publisher || 'External Portal';

  return {
    _id: `ext_${raw.job_id || idx}`,
    isExternal: true,
    publisher,
    title: raw.job_title || 'Software Role',
    company: {
      name: raw.employer_name || 'Hiring Company',
      logoUrl: raw.employer_logo || undefined,
      website: raw.employer_website || undefined,
    },
    type: mapEmploymentType(raw.job_employment_type),
    workMode: raw.job_is_remote ? 'REMOTE' : 'ON_SITE',
    location,
    salary: {
      min: scale > 1 ? Math.round((minSal / scale) * 10) / 10 : minSal,
      max: scale > 1 ? Math.round((maxSal / scale) * 10) / 10 : maxSal,
      currency: raw.job_salary_currency || 'INR',
      period,
    },
    requirements: {
      skills: Array.isArray(raw.job_required_skills) ? raw.job_required_skills.slice(0, 8) : [],
    },
    description: raw.job_description || 'View full job details on the external application portal.',
    applyUrl: raw.job_apply_link || raw.job_google_link || '#',
    source: mapSource(publisher),
    status: 'ACTIVE',
    postedAt: raw.job_posted_at_datetime_utc || nowIso,
    createdAt: raw.job_posted_at_datetime_utc || nowIso,
    updatedAt: nowIso,
  };
}

export class ExternalJobService {
  static clearCache() {
    jobCache.clear();
  }

  static async searchJobs(filters: ExternalJobFilters = {}): Promise<{
    jobs: NormalizedExternalJob[];
    cached: boolean;
    query: string;
  }> {
    const apiKey = process.env.RAPIDAPI_KEY?.trim();
    const apiHost = process.env.RAPIDAPI_JSEARCH_HOST?.trim() || 'jsearch.p.rapidapi.com';

    if (!apiKey) {
      throw new ValidationError('RAPIDAPI_KEY is not configured in server environment');
    }

    const query = (filters.query || 'software developer in India').trim();
    const country = (filters.country || 'in').trim().toLowerCase();
    const datePosted = (filters.datePosted || 'month').trim().toLowerCase();
    const remoteOnly = !!filters.remoteOnly;
    const employmentTypes = (filters.employmentTypes || '').trim().toUpperCase();

    const cacheKey = `${query.toLowerCase()}|${country}|${datePosted}|${remoteOnly}|${employmentTypes}`;
    const existing = jobCache.get(cacheKey);
    if (existing && existing.expiresAt > Date.now()) {
      return { jobs: existing.jobs, cached: true, query };
    }

    const params = new URLSearchParams({
      query,
      page: '1',
      num_pages: '1',
      country,
      date_posted: datePosted,
    });
    if (remoteOnly) params.set('work_from_home', 'true');
    if (employmentTypes) params.set('employment_types', employmentTypes);

    const response = await fetch(`https://${apiHost}/search-v2?${params.toString()}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost,
      },
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => '');
      if (response.status === 401 || response.status === 403) {
        throw new ValidationError('RapidAPI JSearch authorization failed. Please verify subscription & API key.');
      }
      if (response.status === 429) {
        throw new ValidationError('RapidAPI JSearch rate limit reached. Please try again later.');
      }
      throw new ValidationError(`External job provider error (${response.status}): ${errText.slice(0, 120)}`);
    }

    const payload: any = await response.json();
    const rawList: any[] = Array.isArray(payload?.data?.jobs)
      ? payload.data.jobs
      : Array.isArray(payload?.data)
      ? payload.data
      : [];
    const jobs = rawList.map((item, idx) => normalizeJob(item, idx));

    jobCache.set(cacheKey, {
      expiresAt: Date.now() + CACHE_TTL_MS,
      jobs,
    });

    return { jobs, cached: false, query };
  }
}
