/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import BookingWidget from 'parts/BookingWidget';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

export default function BookCallPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Book a Call"
        description="Schedule a 30-minute call with Streamivus to talk through your project."
        path="/book-call"
      />
      <Header />
      <BookingWidget />
      <Footer />
    </>
  );
}
