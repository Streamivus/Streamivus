/* eslint-disable linebreak-style */

import { PartnerCategories } from './techStackData';

export const ResourcesHero = {
  eyebrow: 'Resources',
  title: 'Playbooks, guides, and templates.',
  description:
    'Deep dives, whitepapers, and templates we use ourselves — sharing the lessons so you can ship faster.',
};

export const Resources = [
  {
    slug: 'mvp-launch-playbook',
    title: 'The MVP Launch Playbook',
    type: 'Whitepaper',
    summary:
      'A 28-page guide covering scoping, building, and launching a venture-backable MVP in under 90 days.',
    pages: 28,
    gated: true,
    coverEmoji: '🚀',
  },
  {
    slug: 'genai-buyer-guide',
    title: 'GenAI Buyer\'s Guide for Enterprise',
    type: 'Whitepaper',
    summary:
      'How to evaluate GenAI vendors, model providers, and build-vs-buy decisions for enterprise AI initiatives.',
    pages: 22,
    gated: true,
    coverEmoji: '🧠',
  },
  {
    slug: 'design-system-starter',
    title: 'Design System Starter Kit',
    type: 'Template',
    summary:
      'A Figma file with tokens, components, and patterns to bootstrap a production-grade design system in a day.',
    pages: null,
    gated: false,
    coverEmoji: '🎨',
  },
  {
    slug: 'security-checklist-saas',
    title: 'SaaS Security Checklist',
    type: 'Checklist',
    summary:
      'A 60-point checklist covering app, infra, data, and process security for early-stage SaaS teams.',
    pages: 8,
    gated: false,
    coverEmoji: '🔒',
  },
  {
    slug: 'sow-template',
    title: 'Statement of Work Template',
    type: 'Template',
    summary:
      'A clean, plain-English SOW template you can adapt for your own client work — battle-tested across dozens of engagements.',
    pages: 4,
    gated: false,
    coverEmoji: '📝',
  },
  {
    slug: 'cloud-cost-audit',
    title: 'Cloud Cost Audit Workbook',
    type: 'Workbook',
    summary:
      'A spreadsheet workbook to audit your AWS / Azure / GCP spend and identify the top 10 quick wins.',
    pages: null,
    gated: true,
    coverEmoji: '☁️',
  },
];

export const Partners = {
  hero: {
    eyebrow: 'Partners & Tech Stack',
    title: 'The tools and platforms we trust.',
    description:
      'We pick technology on merit — not partnership marketing. Here\'s what we\'ve battle-tested across dozens of production deployments.',
  },
  categories: PartnerCategories,
};

export const PressKit = {
  hero: {
    eyebrow: 'Press & Media',
    title: 'Press kit & media resources.',
    description:
      'Everything you need to write, mention, or feature Streamivus — logos, brand colors, founder bios, and quick facts.',
  },
  quickFacts: [
    { label: 'Founded', value: '2024' },
    { label: 'HQ', value: 'Surat, India' },
    { label: 'Co-founders', value: 'Bhavin Ondhiya & Prachi Kathiria' },
    { label: 'Model', value: 'Founder-led + extended specialist network' },
    { label: 'Focus', value: 'Web, Mobile, AI, Cloud, Design' },
    { label: 'Reach out', value: 'press@streamivus.com' },
  ],
  brand: {
    colors: [
      { name: 'Streamivus Purple', hex: '#6610f2' },
      { name: 'Dark Purple', hex: '#520dc2' },
      { name: 'Light Purple', hex: '#E3D3FD' },
      { name: 'Theme Blue', hex: '#152C5B' },
    ],
    typography: 'Poppins (Google Fonts)',
  },
  founderBios: [
    {
      name: 'Bhavin Ondhiya',
      role: 'Co-Founder & CEO · Full-Stack Engineer',
      bio:
        'Engineering lead who turns ideas into production-ready products — owning the full journey from architecture and code to deployment, security, and scale.',
    },
    {
      name: 'Prachi Kathiria',
      role: 'Co-Founder & CEO · Lead Product Designer',
      bio:
        'Design-first thinker crafting intuitive, on-brand experiences — bridging user needs and product vision, pixel by pixel.',
    },
  ],
};
