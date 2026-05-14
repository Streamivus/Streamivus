/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import ContactForm from 'parts/ContactForm';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Streamivus — for project inquiries, partnerships, press, or just to say hi. We reply within one business day."
        path="/contact"
      />
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
}
