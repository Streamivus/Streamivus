/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from 'parts/Header';
import ServiceDetail from 'parts/ServiceDetail';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

import { ServicesList } from 'json/servicesData';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = ServicesList.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      <SEO
        title={service ? service.title : 'Service'}
        description={
          service
            ? `${service.tagline} — ${service.summary}`
            : 'Streamivus service offering.'
        }
        path={`/services/${slug}`}
      />
      <Header />
      <ServiceDetail service={service} />
      <Discuss />
      <Footer />
    </>
  );
}
