/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import PressKitSection from 'parts/PressKitSection';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

export default function PressPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Press & Media"
        description="Streamivus press kit — logos, brand colors, founder bios, and media contacts."
        path="/press"
      />
      <Header />
      <PressKitSection />
      <Footer />
    </>
  );
}
