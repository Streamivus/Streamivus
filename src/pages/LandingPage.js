/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import {
  Services, Portfolios, Advantages, Testimonials,
} from 'json/landingPageData';
import { Company } from 'json/companyData';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import ClientLogos from 'parts/ClientLogos';
import Service from 'parts/Service';
import Portfolio from 'parts/Portfolio';
import Advantage from 'parts/Advantage';
import Testimonial from 'parts/Testimonial';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const organizationJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: Company.name,
      url: 'https://www.streamivus.com',
      logo: 'https://www.streamivus.com/logo192.png',
      description: Company.shortDescription,
      foundingDate: `${Company.foundedYear}`,
      email: Company.email,
      sameAs: [
        Company.social.linkedin,
        Company.social.instagram,
        Company.social.twitter,
      ],
    };
    return (
      <>
        <SEO
          title="Streamivus | Digital Product Studio for Web, Mobile & AI"
          description={Company.shortDescription}
          path="/"
          jsonLd={organizationJsonLd}
        />
        <Header />
        <Hero />
        <ClientLogos />
        <Service data={Services} />
        <Portfolio data={Portfolios} />
        <Advantage data={Advantages} />
        <Testimonial data={Testimonials} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
