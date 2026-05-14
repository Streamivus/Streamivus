/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { DiscussForm } from 'parts/DiscussForm';

import Header from 'parts/Header';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

const INITIAL_DATA = {
  name: '',
  email: '',
  company: '',
  budget: '',
  phone: '',
  services: [],
  projectIdea: '',
};

export const DiscussProjectPage = () => {
  const [data, setData] = useState(INITIAL_DATA);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const onChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const onToggleService = (service) => {
    setData((prevData) => ({
      ...prevData,
      services: prevData.services.includes(service)
        ? prevData.services.filter((s) => s !== service)
        : [...prevData.services, service],
    }));
  };

  const resetForm = () => {
    setData(INITIAL_DATA);
  };

  return (
    <>
      <SEO
        title="Discuss Your Project"
        description="Tell us about your project. Streamivus will get back to you within 24 hours with next steps."
        path="/discuss-project"
      />
      <Header />
      <DiscussForm
        data={data}
        onChange={onChange}
        onToggleService={onToggleService}
        resetForm={resetForm}
      />
      <Footer />
    </>
  );
};
