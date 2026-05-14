/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import LegalLayout from 'parts/LegalLayout';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

import { TermsOfService } from 'json/legalData';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Terms of Service"
        description="Streamivus Terms of Service governing the use of streamivus.com and our services."
        path="/terms-of-service"
      />
      <Header />
      <LegalLayout
        title={TermsOfService.title}
        lastUpdated={TermsOfService.lastUpdated}
        intro={TermsOfService.intro}
        sections={TermsOfService.sections}
      />
      <Footer />
    </>
  );
}
