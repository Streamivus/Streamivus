/* eslint-disable linebreak-style */

import { Company } from './companyData.js';
import { ServicesList } from './servicesData.js';
import { IndustriesList } from './industriesData.js';
import { BlogPosts } from './blogData.js';
import { Jobs } from './careersData.js';
import { Portfolios } from './landingPageData.js';

export const SITE_URL = 'https://www.streamivus.com';
export const SITE_NAME = 'Streamivus';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.svg`;
export const DEFAULT_KEYWORDS = 'Streamivus, digital product studio, web development company, mobile app development, UI UX design, AI development, SaaS development, cloud consulting, software agency India, React, Next.js, .NET, Java, Python, Ruby on Rails';

export const DEFAULT_SEO = {
  title: 'Streamivus | Digital Product Studio for Web, Mobile & AI',
  description: Company.shortDescription,
  keywords: DEFAULT_KEYWORDS,
  path: '/',
};

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function buildPageTitle(title) {
  if (!title) return DEFAULT_SEO.title;
  return title.includes('Streamivus') ? title : `${title} | Streamivus`;
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: Company.name,
    legalName: Company.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: DEFAULT_OG_IMAGE,
    description: Company.shortDescription,
    foundingDate: `${Company.foundedYear}`,
    email: Company.email,
    telephone: Company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: Company.address.line1,
      addressLocality: Company.address.line2.split(',')[0].trim(),
      addressRegion: 'Gujarat',
      addressCountry: Company.address.country,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: Company.email,
        telephone: Company.phone,
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
        areaServed: 'Worldwide',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'careers',
        email: Company.careersEmail,
        availableLanguage: ['English'],
      },
    ],
    sameAs: Object.values(Company.social),
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: Company.shortDescription,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/services?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/contact#business`,
    name: Company.name,
    url: `${SITE_URL}/contact`,
    image: DEFAULT_OG_IMAGE,
    description: Company.longDescription,
    email: Company.email,
    telephone: Company.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: Company.address.line1,
      addressLocality: 'Rajkot',
      addressRegion: 'Gujarat',
      postalCode: '360001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.3039,
      longitude: 70.8022,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '22:00',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    sameAs: Object.values(Company.social),
  };
}

export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#webpage`,
    name: 'Contact Streamivus',
    url: `${SITE_URL}/contact`,
    description:
      'Contact Streamivus for project inquiries, partnerships, press, careers, and support.',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  };
}

export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getServiceSchema(service) {
  if (!service) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: 'Worldwide',
    serviceType: service.title,
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

export function getBlogPostSchema(post) {
  if (!post) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    datePublished: post.publishedOn,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    url: absoluteUrl(`/blog/${post.slug}`),
    image: DEFAULT_OG_IMAGE,
    keywords: post.tags?.join(', '),
  };
}

export function buildSitemapUrls() {
  const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.9', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'monthly' },
    { path: '/industries', priority: '0.8', changefreq: 'monthly' },
    { path: '/case-studies', priority: '0.9', changefreq: 'monthly' },
    { path: '/process', priority: '0.7', changefreq: 'monthly' },
    { path: '/team', priority: '0.7', changefreq: 'monthly' },
    { path: '/careers', priority: '0.9', changefreq: 'weekly' },
    { path: '/blog', priority: '0.8', changefreq: 'weekly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/book-call', priority: '0.7', changefreq: 'monthly' },
    { path: '/discuss-project', priority: '0.8', changefreq: 'monthly' },
    { path: '/resources', priority: '0.7', changefreq: 'monthly' },
    { path: '/partners', priority: '0.6', changefreq: 'monthly' },
    { path: '/press', priority: '0.4', changefreq: 'monthly' },
    { path: '/faq', priority: '0.5', changefreq: 'monthly' },
    { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
    { path: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
  ];

  const dynamicPages = [
    ...ServicesList.map((s) => ({
      path: `/services/${s.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
    })),
    ...IndustriesList.map((i) => ({
      path: `/industries/${i.slug}`,
      priority: '0.7',
      changefreq: 'monthly',
    })),
    ...Portfolios.map((p) => ({
      path: `/case-studies/${p.id}`,
      priority: '0.7',
      changefreq: 'monthly',
    })),
    ...BlogPosts.map((b) => ({
      path: `/blog/${b.slug}`,
      priority: '0.6',
      changefreq: 'monthly',
    })),
    ...Jobs.map((j) => ({
      path: `/careers/${j.id}`,
      priority: '0.7',
      changefreq: 'weekly',
    })),
  ];

  return [...staticPages, ...dynamicPages];
}

export function renderSitemapXml() {
  const urls = buildSitemapUrls();
  const body = urls
    .map(
      (entry) => `  <url>
    <loc>${absoluteUrl(entry.path)}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}
