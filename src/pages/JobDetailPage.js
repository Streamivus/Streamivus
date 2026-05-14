/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from 'parts/Header';
import JobDetail from 'parts/JobDetail';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

import { Jobs } from 'json/careersData';
import { Company } from 'json/companyData';

export default function JobDetailPage() {
  const { id } = useParams();
  const job = Jobs.find((j) => j.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const mapEmploymentType = (t = '') => {
    const v = t.toLowerCase();
    if (v.includes('full')) return 'FULL_TIME';
    if (v.includes('part')) return 'PART_TIME';
    if (v.includes('contract')) return 'CONTRACTOR';
    if (v.includes('intern')) return 'INTERN';
    if (v.includes('temp')) return 'TEMPORARY';
    return 'OTHER';
  };

  const jsonLd = job
    ? {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: job.title,
      description: `${job.summary}\n\nResponsibilities: ${job.responsibilities.join('; ')}\n\nRequirements: ${job.requirements.join('; ')}`,
      datePosted: job.postedOn,
      employmentType: mapEmploymentType(job.type),
      hiringOrganization: {
        '@type': 'Organization',
        name: Company.name,
        sameAs: 'https://www.streamivus.com',
        logo: 'https://www.streamivus.com/logo192.png',
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: job.location,
          addressCountry: 'IN',
        },
      },
      experienceRequirements: job.experience,
    }
    : null;

  return (
    <>
      <SEO
        title={job ? `${job.title} — Careers` : 'Job not found'}
        description={
          job
            ? `${job.summary} Apply for ${job.title} at Streamivus.`
            : 'This role may no longer be open.'
        }
        path={`/careers/${id}`}
        jsonLd={jsonLd}
      />
      <Header />
      <JobDetail job={job} />
      <Footer />
    </>
  );
}
