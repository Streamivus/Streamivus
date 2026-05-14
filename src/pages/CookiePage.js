/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import LegalLayout from 'parts/LegalLayout';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

import { CookiePolicy } from 'json/legalData';

export default function CookiePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Cookie Policy"
        description="How Streamivus uses cookies and similar technologies on streamivus.com."
        path="/cookie-policy"
      />
      <Header />
      <LegalLayout
        title={CookiePolicy.title}
        lastUpdated={CookiePolicy.lastUpdated}
        intro={CookiePolicy.intro}
        sections={CookiePolicy.sections}
      />
      <Footer />
    </>
  );
}
