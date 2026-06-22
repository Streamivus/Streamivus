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
import {
  getBreadcrumbSchema,
  getServiceSchema,
} from 'json/seoData';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = ServicesList.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const jsonLd = service
    ? [
      getServiceSchema(service),
      getBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: service.title, path: `/services/${service.slug}` },
      ]),
    ]
    : null;

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
        keywords={
          service
            ? `${service.title}, ${service.stack.slice(0, 8).join(', ')}, Streamivus services`
            : undefined
        }
        jsonLd={jsonLd}
        noindex={!service}
      />
      <Header />
      <ServiceDetail service={service} />
      <Discuss />
      <Footer />
    </>
  );
}
