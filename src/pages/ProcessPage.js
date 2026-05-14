/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import ProcessTimeline from 'parts/ProcessTimeline';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

export default function ProcessPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Our Process"
        description="How Streamivus turns ideas into shipped products — Discover, Design, Build, Launch, Scale. Plus our three engagement models."
        path="/process"
      />
      <Header />
      <ProcessTimeline />
      <Discuss />
      <Footer />
    </>
  );
}
