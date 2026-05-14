/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import BlogList from 'parts/BlogList';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Blog & Insights"
        description="Practical writing from the Streamivus studio on engineering, design, AI, and building software that ships."
        path="/blog"
      />
      <Header />
      <BlogList />
      <Discuss />
      <Footer />
    </>
  );
}
