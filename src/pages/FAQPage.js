/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import FAQAccordion from 'parts/FAQAccordion';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

import { FAQCategories } from 'json/faqData';

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allQuestions = FAQCategories.flatMap((c) => c.items);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title="FAQ"
        description="Frequently asked questions about Streamivus engagements — pricing, process, ownership, security, and post-launch support."
        path="/faq"
        jsonLd={jsonLd}
      />
      <Header />
      <FAQAccordion />
      <Discuss />
      <Footer />
    </>
  );
}
