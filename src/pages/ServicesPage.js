/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import ServicesHero from 'parts/ServicesHero';
import ServicesGrid from 'parts/ServicesGrid';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Services"
        description="Streamivus services: web development, mobile apps, UI/UX design, AI & GenAI, SaaS, cloud, DevOps, app security, and SEO."
        path="/services"
      />
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <Discuss />
      <Footer />
    </>
  );
}
