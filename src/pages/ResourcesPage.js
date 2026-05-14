/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import ResourcesGrid from 'parts/ResourcesGrid';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

export default function ResourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Resources"
        description="Whitepapers, templates, and workbooks from the Streamivus studio — covering MVPs, GenAI, design systems, security, and cloud costs."
        path="/resources"
      />
      <Header />
      <ResourcesGrid />
      <Discuss />
      <Footer />
    </>
  );
}
