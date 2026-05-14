/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import AboutHero from 'parts/AboutHero';
import AboutMissionVision from 'parts/AboutMissionVision';
import AboutValues from 'parts/AboutValues';
import AboutTimeline from 'parts/AboutTimeline';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="About Streamivus"
        description="Learn about Streamivus — a founder-led digital studio combining senior engineering and design with a growing network of specialists to ship great software."
        path="/about"
      />
      <Header />
      <AboutHero />
      <AboutMissionVision />
      <AboutValues />
      <AboutTimeline />
      <Discuss />
      <Footer />
    </>
  );
}
