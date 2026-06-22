/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import ContactForm from 'parts/ContactForm';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';
import {
  getBreadcrumbSchema,
  getContactPageSchema,
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from 'json/seoData';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getLocalBusinessSchema(),
    getContactPageSchema(),
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  ];

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Streamivus in Rajkot, India for web, mobile, AI, and cloud project inquiries. Email info@streamivus.com or call +91 99782 75972. We reply within one business day."
        path="/contact"
        keywords="contact Streamivus, web development agency contact, software company Rajkot, hire developers India, Streamivus email, Streamivus phone"
        jsonLd={jsonLd}
      />
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
}
