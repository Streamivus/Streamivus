/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import PartnersGrid from 'parts/PartnersGrid';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

export default function PartnersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Partners & Tech Stack"
        description="The cloud platforms, frameworks, and tools Streamivus uses across web, mobile, AI, design, and DevOps engagements."
        path="/partners"
      />
      <Header />
      <PartnersGrid />
      <Discuss />
      <Footer />
    </>
  );
}
