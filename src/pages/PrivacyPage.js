/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import LegalLayout from 'parts/LegalLayout';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

import { PrivacyPolicy } from 'json/legalData';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Streamivus Privacy Policy — what data we collect, how we use it, and your rights."
        path="/privacy-policy"
      />
      <Header />
      <LegalLayout
        title={PrivacyPolicy.title}
        lastUpdated={PrivacyPolicy.lastUpdated}
        intro={PrivacyPolicy.intro}
        sections={PrivacyPolicy.sections}
      />
      <Footer />
    </>
  );
}
