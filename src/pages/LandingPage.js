/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component, lazy, Suspense } from 'react';

import {
  Services, Portfolios, Advantages, Testimonials,
} from 'json/landingPageData';
import { Company } from 'json/companyData';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';
import {
  getOrganizationSchema,
  getWebSiteSchema,
} from 'json/seoData';

const ClientLogos = lazy(() => import('parts/ClientLogos'));
const Service = lazy(() => import('parts/Service'));
const Portfolio = lazy(() => import('parts/Portfolio'));
const Advantage = lazy(() => import('parts/Advantage'));
const Testimonial = lazy(() => import('parts/Testimonial'));
const Discuss = lazy(() => import('parts/Discuss'));

function SectionFallback() {
  return <div className="min-h-[12rem]" aria-hidden="true" />;
}

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const organizationJsonLd = getOrganizationSchema();
    const websiteJsonLd = getWebSiteSchema();
    return (
      <>
        <SEO
          title="Streamivus | Digital Product Studio for Web, Mobile & AI"
          description={Company.shortDescription}
          path="/"
          jsonLd={[organizationJsonLd, websiteJsonLd]}
        />
        <Header />
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <ClientLogos />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Service data={Services} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Portfolio data={Portfolios} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Advantage data={Advantages} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonial data={Testimonials} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Discuss />
        </Suspense>
        <Footer />
      </>
    );
  }
}
