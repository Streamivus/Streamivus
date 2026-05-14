/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import * as emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';
import { Company } from '../json/companyData';

const TOPICS = [
  'General inquiry',
  'Project quote',
  'Partnership',
  'Press / media',
  'Support',
];

export default function ContactForm() {
  const [data, setData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: TOPICS[0],
    message: '',
  });

  const onChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onTopicChange = (e) => {
    setData((prev) => ({ ...prev, topic: e.target.value }));
  };

  const resetForm = () => {
    setData({
      name: '',
      company: '',
      email: '',
      phone: '',
      topic: TOPICS[0],
      message: '',
    });
  };

  const submitEmail = () => {
    const {
      name, company, email, phone, topic, message,
    } = data;

    const templateParams = {
      from_name: `${name} - ${company || 'No company'} (${phone || 'No phone'} - ${email})`,
      to_name: 'Streamivus',
      message: `[${topic}]\n\n${message}`,
    };

    if (name !== '' && email !== '' && message !== '') {
      emailjs.send(
        'service_h4gtndg',
        'template_a9tvs7a',
        templateParams,
        'user_csqIxzN5mKsl1yw4ffJzV',
      )
        .then(() => {
          toast.success('Message sent! We\'ll get back to you within 24 hours.');
          resetForm();
        }, (error) => {
          toast.error(error.text || 'Something went wrong. Please try again.');
        });
    } else {
      toast.error('Please fill in name, email, and message.');
    }
  };

  return (
    <section className="container mx-auto px-6 lg:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
        <div className="lg:col-span-2">
          <Fade direction="up" triggerOnce>
            <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
              Contact
            </p>
          </Fade>
          <Fade direction="up" triggerOnce delay={100}>
            <h1 className="text-4xl sm:text-5xl text-theme-blue font-bold mb-5">
              Get in touch.
            </h1>
          </Fade>
          <Fade direction="up" triggerOnce delay={200}>
            <p className="text-lg text-gray-500 font-light leading-relaxed mb-10">
              Have a question, a project in mind, or just want to say hi? Drop us
              a line — we usually reply within one business day.
            </p>
          </Fade>

          <div className="space-y-6">
            <Fade direction="up" triggerOnce delay={300}>
              <div>
                <p className="text-sm font-semibold text-theme-blue uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${Company.email}`} className="text-base text-gray-500 hover:text-theme-purple">
                  {Company.email}
                </a>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce delay={350}>
              <div>
                <p className="text-sm font-semibold text-theme-blue uppercase tracking-wider mb-1">Careers</p>
                <a href={`mailto:${Company.careersEmail}`} className="text-base text-gray-500 hover:text-theme-purple">
                  {Company.careersEmail}
                </a>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce delay={400}>
              <div>
                <p className="text-sm font-semibold text-theme-blue uppercase tracking-wider mb-1">Office</p>
                <p className="text-base text-gray-500">{Company.address.line1}</p>
                <p className="text-base text-gray-500">{Company.address.line2}</p>
                <p className="text-base text-gray-500">{Company.address.country}</p>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce delay={450}>
              <div>
                <p className="text-sm font-semibold text-theme-blue uppercase tracking-wider mb-1">Hours</p>
                <p className="text-base text-gray-500">{Company.hours}</p>
              </div>
            </Fade>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Fade direction="up" triggerOnce delay={200}>
            <div className="bg-white rounded-3xl border border-light-theme-purple shadow-2xl p-7 sm:p-10">
              <h2 className="text-2xl text-theme-blue font-bold mb-6">
                Send us a message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 sm:gap-x-6">
                <div className="flex flex-col mb-6">
                  <Form
                    id="name"
                    name="name"
                    type="text"
                    value={data.name}
                    placeholder="Your name *"
                    onChange={onChange}
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <Form
                    id="company"
                    name="company"
                    type="text"
                    value={data.company}
                    placeholder="Company (optional)"
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
              </div>

              <div className="mb-6 mx-2 lg:mx-5">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="topic" className="block text-sm text-theme-blue font-medium mb-2">
                  What can we help with?
                  <select
                    id="topic"
                    name="topic"
                    value={data.topic}
                    onChange={onTopicChange}
                    className="mt-2 w-full p-4 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple bg-white"
                  >
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mx-2 lg:mx-5">
                <Form
                  id="message"
                  name="message"
                  type="textarea"
                  value={data.message}
                  placeholder="Tell us a little about what you need *"
                  onChange={onChange}
                />
              </div>

              <Button
                className="text-lg w-full sm:w-auto px-10 py-3 mt-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200 focus:outline-none"
                type="button"
                onClick={submitEmail}
              >
                Send message
              </Button>
            </div>
          </Fade>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}
