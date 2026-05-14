/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { DiscussForm } from 'parts/DiscussForm';

import Header from 'parts/Header';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

export const DiscussProjectPage = () => {
  const [data, setData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectIdea: '',
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const onChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectIdea: '',
    });
  };

  return (
    <>
      <SEO
        title="Discuss Your Project"
        description="Tell us about your project. Streamivus will get back to you within 24 hours with next steps."
        path="/discuss-project"
      />
      <Header />
      <DiscussForm data={data} onChange={onChange} resetForm={resetForm} />
      <Footer />
    </>
  );
};
