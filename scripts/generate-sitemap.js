/* eslint-disable import/extensions, import/no-unresolved, no-console */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.streamivus.com';

const staticPages = [
  '/', '/about', '/services', '/industries', '/case-studies', '/process',
  '/team', '/careers', '/blog', '/contact', '/book-call', '/discuss-project',
  '/resources', '/partners', '/press', '/faq',
  '/privacy-policy', '/terms-of-service', '/cookie-policy',
];

const serviceSlugs = [
  'web-development', 'mobile-development', 'ui-ux-design', 'ai-genai',
  'saas-crm', 'cloud-devops', 'security-seo',
];

const industrySlugs = [
  'fintech', 'healthtech', 'edtech', 'ecommerce-d2c', 'saas-b2b', 'logistics-supplychain',
];

const portfolioIds = [
  'asd1293uasdads1', 'asd1293uhjkhkjh2', 'asd1293uvbvcbbd3',
  'asd1293ufgdfgs4', 'asd1293ulskmnb5', 'asd1293ulkmnbj6',
];

const blogSlugs = [
  'building-production-ai-agents',
  'why-we-choose-react-native-in-2026',
  'pricing-a-saas-from-scratch',
];

const jobIds = [
  'senior-fullstack-engineer', 'product-designer', 'ai-engineer',
  'devops-cloud-engineer', 'business-development',
];

function toUrl(pathname) {
  if (pathname === '/') return SITE_URL;
  return `${SITE_URL}${pathname}`;
}

const urls = [
  ...staticPages.map((p) => toUrl(p)),
  ...serviceSlugs.map((slug) => toUrl(`/services/${slug}`)),
  ...industrySlugs.map((slug) => toUrl(`/industries/${slug}`)),
  ...portfolioIds.map((id) => toUrl(`/case-studies/${id}`)),
  ...blogSlugs.map((slug) => toUrl(`/blog/${slug}`)),
  ...jobIds.map((id) => toUrl(`/careers/${id}`)),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n')}
</urlset>
`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`Sitemap written to ${outputPath} (${urls.length} URLs)`);
