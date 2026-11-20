import { Opportunity } from './opportunity.model';

export const seedOpportunities = async (institutionId?: string) => {
  const existingCount = await Opportunity.countDocuments({ bypassTenantFilter: true });
  if (existingCount > 0) return;

  const opportunities = [
    {
      institutionId: institutionId ? institutionId : null,
      title: 'Graduate Software Engineer (SDE 1)',
      company: {
        name: 'Google',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        website: 'https://careers.google.com',
        industry: 'Internet & Technology',
      },
      type: 'FULL_TIME',
      workMode: 'HYBRID',
      location: 'Bengaluru, India',
      salary: {
        min: 22,
        max: 32,
        currency: 'INR',
        period: 'LPA',
      },
      requirements: {
        skills: ['Data Structures & Algorithms', 'C++', 'Java', 'Python', 'Distributed Systems'],
        minCgpa: 8.0,
        allowedBatches: ['2025', '2026'],
      },
      description: 'Design, develop, test, deploy, maintain, and enhance large-scale distributed software solutions across Google Cloud and Search infrastructure.',
      applyUrl: 'https://careers.google.com/jobs/results/',
      source: institutionId ? 'CAMPUS_DRIVE' : 'VERIFIED_PARTNER',
      status: 'ACTIVE',
    },
    {
      institutionId: null,
      title: 'Full Stack Engineering Intern',
      company: {
        name: 'Razorpay',
        logoUrl: 'https://razorpay.com/build/browser/static/razorpay-logo.5fb62b66.svg',
        website: 'https://razorpay.com/jobs',
        industry: 'FinTech',
      },
      type: 'INTERNSHIP',
      workMode: 'HYBRID',
      location: 'Bengaluru, India',
      salary: {
        min: 45000,
        max: 60000,
        currency: 'INR',
        period: 'PER_MONTH',
      },
      requirements: {
        skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'REST API'],
        minCgpa: 7.0,
        allowedBatches: ['2026', '2027'],
      },
      description: 'Build fast, accessible, and mission-critical financial web workflows supporting over 10M+ Indian businesses accepting digital payments.',
      applyUrl: 'https://razorpay.com/careers',
      source: 'VERIFIED_PARTNER',
      status: 'ACTIVE',
    },
    {
      institutionId: institutionId ? institutionId : null,
      title: 'Systems Development Engineer (Cloud)',
      company: {
        name: 'Amazon',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        website: 'https://amazon.jobs',
        industry: 'Cloud & E-Commerce',
      },
      type: 'FULL_TIME',
      workMode: 'HYBRID',
      location: 'Hyderabad, India',
      salary: {
        min: 18,
        max: 26,
        currency: 'INR',
        period: 'LPA',
      },
      requirements: {
        skills: ['Linux', 'Python', 'Docker', 'AWS', 'Networking', 'Git'],
        minCgpa: 7.5,
        allowedBatches: ['2025', '2026'],
      },
      description: 'Automate deployment pipelines and manage AWS fleet infrastructure supporting billions of transactions annually.',
      applyUrl: 'https://amazon.jobs/en',
      source: institutionId ? 'CAMPUS_DRIVE' : 'VERIFIED_PARTNER',
      status: 'ACTIVE',
    },
    {
      institutionId: null,
      title: 'TCS Digital Campus Innovator',
      company: {
        name: 'Tata Consultancy Services',
        logoUrl: '',
        website: 'https://tcs.com/careers',
        industry: 'Consulting & Services',
      },
      type: 'FULL_TIME',
      workMode: 'ON_SITE',
      location: 'Pune / Mumbai, India',
      salary: {
        min: 7,
        max: 9,
        currency: 'INR',
        period: 'LPA',
      },
      requirements: {
        skills: ['Java', 'SQL', 'Data Structures & Algorithms', 'Problem Solving'],
        minCgpa: 6.5,
        allowedBatches: ['2025', '2026'],
      },
      description: 'National Qualifier campus recruitment drive for high-performing engineering students.',
      applyUrl: 'https://nextstep.tcs.com',
      source: 'CAMPUS_DRIVE',
      status: 'ACTIVE',
    },
  ];

  await Opportunity.insertMany(opportunities);
};
