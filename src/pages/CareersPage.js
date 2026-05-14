/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import CareersHero from 'parts/CareersHero';
import CareersCulture from 'parts/CareersCulture';
import HiringProcess from 'parts/HiringProcess';
import JobList from 'parts/JobList';
import OpenApplication from 'parts/OpenApplication';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

import { Jobs } from 'json/careersData';
import { Company } from 'json/companyData';

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mapEmploymentType = (t = '') => {
    const v = t.toLowerCase();
    if (v.includes('full')) return 'FULL_TIME';
    if (v.includes('part')) return 'PART_TIME';
    if (v.includes('contract')) return 'CONTRACTOR';
    if (v.includes('intern')) return 'INTERN';
    if (v.includes('temp')) return 'TEMPORARY';
    return 'OTHER';
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Careers at Streamivus',
    description:
      'Open roles at Streamivus — engineering, design, AI, and growth. Remote-first, founder-led, senior-only.',
    mainEntity: Jobs.map((j) => ({
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: j.title,
      description: j.summary,
      datePosted: j.postedOn,
      employmentType: mapEmploymentType(j.type),
      hiringOrganization: {
        '@type': 'Organization',
        name: Company.name,
        sameAs: 'https://www.streamivus.com',
      },
      jobLocation: {
        '@type': 'Place',
        address: { '@type': 'PostalAddress', addressLocality: j.location },
      },
    })),
  };

  return (
    <>
      <SEO
        title="Careers"
        description="Open roles at Streamivus. Remote-first, founder-led, senior-only. Engineering, design, AI, and growth positions."
        path="/careers"
        jsonLd={jsonLd}
      />
      <Header />
      <CareersHero />
      <CareersCulture />
      <HiringProcess />
      <JobList />
      <OpenApplication />
      <Footer />
    </>
  );
}
