/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import IndustriesGrid from 'parts/IndustriesGrid';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

export default function IndustriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Industries We Serve"
        description="Streamivus delivers tailored software across FinTech, HealthTech, EdTech, E-commerce, B2B SaaS, and Logistics."
        path="/industries"
      />
      <Header />
      <IndustriesGrid />
      <Discuss />
      <Footer />
    </>
  );
}
