/* eslint-disable linebreak-style */

export const ProcessHero = {
  eyebrow: 'How We Work',
  title: 'A clear, repeatable process — built around shipping.',
  description:
    'No vague slide decks or six-month "discovery" phases. We follow a tight five-step process to take ideas from whiteboard to production — fast, predictable, and transparent at every step.',
};

export const ProcessSteps = [
  {
    step: '01',
    title: 'Discover',
    timeline: '1 – 2 weeks',
    description:
      'We dig into your goals, users, constraints, and stack. Output: written scope, success metrics, technical risks, and a clear plan you can sign off on.',
    deliverables: [
      'Stakeholder interviews',
      'Product brief & user stories',
      'Technical risk assessment',
      'Scope & success metrics',
    ],
  },
  {
    step: '02',
    title: 'Design',
    timeline: '1 – 2 weeks',
    description:
      'From IA and wireframes to high-fidelity Figma. Designers and engineers work in lockstep so the design is shippable, not aspirational.',
    deliverables: [
      'Information architecture',
      'Wireframes & user flows',
      'High-fidelity UI in Figma',
      'Interactive prototype',
    ],
  },
  {
    step: '03',
    title: 'Build',
    timeline: '1 – 16 weeks',
    description:
      'Weekly sprints with live demos, shared dashboards, and a working preview environment from week 1. You see progress every Friday.',
    deliverables: [
      'Weekly sprint demos',
      'Continuous preview environments',
      'Code reviews & tests',
      'Architecture documentation',
    ],
  },
  {
    step: '04',
    title: 'Launch',
    timeline: '1 – 2 weeks',
    description:
      'Production hardening, security review, observability, and a confident go-live. We rehearse rollbacks before we need them.',
    deliverables: [
      'Production CI/CD',
      'Security hardening',
      'Monitoring & alerts',
      'Documented runbooks',
    ],
  },
  {
    step: '05',
    title: 'Scale',
    timeline: 'Ongoing',
    description:
      'Optional retainer: ongoing iteration, growth experiments, performance tuning, security audits, and new features as you grow.',
    deliverables: [
      'Monthly roadmap planning',
      'Performance & cost reviews',
      'Quarterly security audits',
      'On-call & incident support',
    ],
  },
];

export const EngagementModels = [
  {
    title: 'Fixed-scope project',
    description:
      'Clear scope, fixed budget, fixed deadline. Best for well-defined MVPs, redesigns, and migrations.',
    bestFor: 'Founders with a clear PRD',
  },
  {
    title: 'Time & materials',
    description:
      'Monthly retainer with a senior team. Best when scope is evolving or you need ongoing iteration.',
    bestFor: 'Funded startups in scale mode',
  },
  {
    title: 'Embedded team',
    description:
      'Senior engineers and designers embedded directly into your team and rituals.',
    bestFor: 'Companies augmenting in-house teams',
  },
];
