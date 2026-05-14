/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import * as emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';

export default function ApplicationForm({ jobTitle = 'Open application', jobId = 'open' }) {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    resumeLink: '',
    coverLetter: '',
  });

  const onChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setData({
      name: '',
      email: '',
      phone: '',
      linkedin: '',
      resumeLink: '',
      coverLetter: '',
    });
  };

  const submitApplication = () => {
    const {
      name, email, phone, linkedin, resumeLink, coverLetter,
    } = data;

    if (name === '' || email === '' || resumeLink === '') {
      toast.error('Please fill name, email, and resume link.');
      return;
    }

    const templateParams = {
      from_name: `Application: ${jobTitle} — ${name} (${email}, ${phone || 'no phone'})`,
      to_name: 'Streamivus Careers',
      message:
        `Role: ${jobTitle} (id: ${jobId})\n`
        + `Name: ${name}\n`
        + `Email: ${email}\n`
        + `Phone: ${phone || '—'}\n`
        + `LinkedIn: ${linkedin || '—'}\n`
        + `Resume: ${resumeLink}\n\n`
        + `Cover letter / message:\n${coverLetter || '—'}`,
    };

    emailjs.send(
      'service_h4gtndg',
      'template_a9tvs7a',
      templateParams,
      'user_csqIxzN5mKsl1yw4ffJzV',
    )
      .then(() => {
        toast.success('Application received! We\'ll reach out within 5 business days.');
        resetForm();
      }, (error) => {
        toast.error(error.text || 'Something went wrong. Please email careers@streamivus.com.');
      });
  };

  return (
    <Fade direction="up" triggerOnce>
      <div className="bg-white rounded-3xl border border-light-theme-purple shadow-2xl p-7 sm:p-10 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-2">
          Apply for {jobTitle}
        </h2>
        <p className="text-gray-500 font-light mb-8">
          Tell us about you. We read every application personally — typically
          reply within 5 business days.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 sm:gap-x-6">
          <div className="flex flex-col mb-6">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Full name *"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col mb-6">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Email *"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col mb-6">
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Phone (optional)"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col mb-6">
            <Form
              id="linkedin"
              name="linkedin"
              type="text"
              value={data.linkedin}
              placeholder="LinkedIn URL (optional)"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="mx-2 lg:mx-5 mb-2">
          <Form
            id="resumeLink"
            name="resumeLink"
            type="text"
            value={data.resumeLink}
            placeholder="Resume link (Google Drive, Dropbox, Notion, etc.) *"
            onChange={onChange}
          />
        </div>
        <p className="text-xs text-gray-400 mx-2 lg:mx-5 mb-6">
          Tip: make sure your link is publicly viewable
          (Drive: &quot;Anyone with the link can view&quot;).
        </p>

        <div className="mx-2 lg:mx-5">
          <Form
            id="coverLetter"
            name="coverLetter"
            type="textarea"
            value={data.coverLetter}
            placeholder="Why Streamivus? Why this role? (optional but helps a lot)"
            onChange={onChange}
          />
        </div>

        <Button
          className="text-lg w-full sm:w-auto px-10 py-3 mt-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200 focus:outline-none"
          type="button"
          onClick={submitApplication}
        >
          Submit application
        </Button>

        <ToastContainer />
      </div>
    </Fade>
  );
}
