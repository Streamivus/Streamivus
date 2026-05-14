/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from 'parts/Header';
import IndustryDetail from 'parts/IndustryDetail';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

import { IndustriesList } from 'json/industriesData';

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const industry = IndustriesList.find((i) => i.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      <SEO
        title={industry ? `${industry.title} Solutions` : 'Industry'}
        description={
          industry
            ? `${industry.tagline} — ${industry.summary}`
            : 'Industry solutions from Streamivus.'
        }
        path={`/industries/${slug}`}
      />
      <Header />
      <IndustryDetail industry={industry} />
      <Discuss />
      <Footer />
    </>
  );
}
