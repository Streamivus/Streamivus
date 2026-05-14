/* eslint-disable linebreak-style */

export const ServicesList = [
  {
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'High-performance web apps that scale with your business.',
    icon: 'web',
    summary:
      'Custom web platforms, dashboards, and SaaS products built with React, Next.js, Node.js, and modern cloud infrastructure.',
    problems: [
      'Slow, outdated websites losing customers',
      'Internal tools that don\'t scale with the team',
      'No clear path from prototype to production',
    ],
    deliverables: [
      'Architecture & system design',
      'Frontend (React, Next.js, TypeScript)',
      'Backend (Node.js, Python, REST/GraphQL APIs)',
      'Database design (PostgreSQL, MySQL, MongoDB)',
      'CI/CD, hosting & DevOps',
      'Security audits & performance tuning',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    timeline: '4 – 16 weeks',
    startsAt: 'Custom quote',
  },
  {
    slug: 'mobile-development',
    title: 'Mobile App Development',
    tagline: 'Native-feel iOS & Android apps from a single codebase.',
    icon: 'mobile',
    summary:
      'Cross-platform mobile apps with React Native and Flutter — plus native iOS/Android where it matters.',
    problems: [
      'Need to ship to iOS + Android without doubling cost',
      'Existing app feels slow, dated, or unmaintained',
      'No clear strategy for push notifications, payments, or offline mode',
    ],
    deliverables: [
      'UX & UI design for mobile',
      'React Native / Flutter implementation',
      'Native modules (Swift / Kotlin) when needed',
      'Push notifications, in-app purchases, analytics',
      'App Store & Play Store submission',
      'Crash reporting & ongoing maintenance',
    ],
    stack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    timeline: '8 – 20 weeks',
    startsAt: 'Custom quote',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI / UX Design',
    tagline: 'Interfaces that convert — and customers actually love.',
    icon: 'design',
    summary:
      'End-to-end product design from user research to pixel-perfect Figma handoff — and beyond, with design systems built to last.',
    problems: [
      'Users abandon flows mid-way',
      'Inconsistent UI across products and screens',
      'No design system, every new screen reinvents the wheel',
    ],
    deliverables: [
      'User research & competitor audit',
      'Information architecture & wireframes',
      'High-fidelity UI in Figma',
      'Interactive prototypes',
      'Design systems & component libraries',
      'Brand identity & visual design',
    ],
    stack: ['Figma', 'Figma AI', 'Canva', 'Adobe CC', 'Framer'],
    timeline: '2 – 10 weeks',
    startsAt: 'Custom quote',
  },
  {
    slug: 'ai-genai',
    title: 'AI & GenAI Solutions',
    tagline: 'Production-ready AI that actually moves your business metrics.',
    icon: 'ai',
    summary:
      'Custom AI products, GenAI integrations, chatbots, voice agents, RAG pipelines, and AI-powered automations.',
    problems: [
      'Hype-driven AI POCs that never make it to production',
      'Customer support team drowning in repetitive queries',
      'Cold-calling & outreach burning rep time without converting',
    ],
    deliverables: [
      'GenAI integrations (OpenAI, Anthropic, open-source)',
      'RAG pipelines on your private data',
      'AI chatbots for support & sales',
      'AI voice agents for cold calling & inbound',
      'Document understanding & extraction',
      'Production monitoring & cost controls',
    ],
    stack: ['OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'Vapi', 'ElevenLabs'],
    timeline: '4 – 12 weeks',
    startsAt: 'Custom quote',
  },
  {
    slug: 'saas-crm',
    title: 'SaaS & CRM Platforms',
    tagline: 'Bespoke SaaS and CRM platforms tailored to your workflow.',
    icon: 'saas',
    summary:
      'From multi-tenant SaaS architecture to internal CRM portals — built for billing, roles, audit logs, and scale on day one.',
    problems: [
      'Off-the-shelf CRM doesn\'t fit your sales motion',
      'Manual spreadsheets are the source of truth',
      'No clear billing, subscription, or usage-based pricing setup',
    ],
    deliverables: [
      'Multi-tenant architecture',
      'Role-based access control & SSO',
      'Stripe / Razorpay billing & subscriptions',
      'Admin dashboards & audit logs',
      'Integrations (HubSpot, Slack, Zapier, webhooks)',
      'Customer onboarding flows',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Auth0', 'AWS'],
    timeline: '12 – 32 weeks',
    startsAt: 'Custom quote',
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    tagline: 'Reliable, secure, cost-efficient infrastructure on AWS, Azure & GCP.',
    icon: 'cloud',
    summary:
      'Cloud migrations, infrastructure-as-code, CI/CD pipelines, observability, and FinOps optimization.',
    problems: [
      'Cloud bill creeping up every month, no one knows why',
      'Deploys are scary and manual',
      'No real disaster recovery plan',
    ],
    deliverables: [
      'AWS / Azure / GCP architecture',
      'Terraform / IaC for every environment',
      'CI/CD pipelines (GitHub Actions, GitLab CI)',
      'Observability (Datadog, Grafana, CloudWatch)',
      'Cost optimization & FinOps',
      'Security hardening & compliance prep',
    ],
    stack: ['AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes'],
    timeline: '4 – 16 weeks',
    startsAt: 'Custom quote',
  },
  {
    slug: 'security-seo',
    title: 'App Security & SEO',
    tagline: 'Lock down your stack, then make Google fall in love with it.',
    icon: 'security',
    summary:
      'Application security (RSA, attack prevention, OWASP) and full technical + on-page SEO to drive organic growth.',
    problems: [
      'Auditors flagging security gaps in production',
      'Stuck on page 4 of Google despite great content',
      'No Core Web Vitals story, slow pages everywhere',
    ],
    deliverables: [
      'OWASP top-10 hardening',
      'Encryption (RSA, AES), key rotation',
      'Penetration testing & threat modelling',
      'Technical SEO audit (Core Web Vitals, schema)',
      'On-page SEO & content optimization',
      'Site speed & Lighthouse score improvements',
    ],
    stack: ['Burp Suite', 'OWASP ZAP', 'Lighthouse', 'Ahrefs', 'Google Search Console'],
    timeline: '2 – 8 weeks',
    startsAt: 'Custom quote',
  },
];

export const ServicesOverview = {
  eyebrow: 'What We Do',
  title: 'Software, design, and AI — under one roof.',
  description:
    'Streamivus is a full-stack digital studio. From the first sketch on a whiteboard to a production deployment serving real customers — we own the whole journey, or slot into your existing team. Whatever your stack, we adapt.',
};
