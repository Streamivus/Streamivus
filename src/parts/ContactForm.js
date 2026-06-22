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

import { Form, FIELD_CLASSES } from 'elements/Form';
import Button from 'elements/Button';
import { Company } from '../json/companyData';

const TOPICS = [
  'General inquiry',
  'Project quote',
  'Partnership',
  'Press / media',
  'Support',
];

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: Company.email,
    href: `mailto:${Company.email}`,
    type: 'link',
  },
  {
    label: 'Phone',
    value: Company.phone,
    href: `tel:${Company.phone.replace(/\s/g, '')}`,
    type: 'link',
  },
  {
    label: 'Careers',
    value: Company.careersEmail,
    href: `mailto:${Company.careersEmail}`,
    type: 'link',
  },
  {
    label: 'Office',
    value: `${Company.address.line1}, ${Company.address.line2}, ${Company.address.country}`,
    type: 'text',
  },
  {
    label: 'Hours',
    value: Company.hours,
    type: 'text',
  },
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
    <section className="bg-gray-50 border-b border-gray-100 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 pt-16 pb-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 min-w-0">
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
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                Have a question, a project in mind, or just want to say hi? Drop us
                a line — we usually reply within one business day.
              </p>
            </Fade>

            <Fade direction="up" triggerOnce delay={250}>
              <div className="flex flex-wrap gap-3 mb-10">
                <Button
                  href="/discuss-project"
                  type="link"
                  className="inline-flex items-center px-6 py-3 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition duration-200"
                >
                  Start a project
                </Button>
                <Button
                  href="/book-call"
                  type="link"
                  className="inline-flex items-center px-6 py-3 bg-white text-theme-blue rounded-full border border-light-theme-purple hover:border-theme-purple transition duration-200"
                >
                  Book a call
                </Button>
              </div>
            </Fade>

            <div className="bg-white rounded-3xl border border-light-theme-purple shadow-lg p-7 space-y-6">
              {CONTACT_ITEMS.map((item, idx) => (
                <Fade direction="up" triggerOnce delay={300 + idx * 50} key={item.label}>
                  <div>
                    <p className="text-sm font-semibold text-theme-blue uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.type === 'link' ? (
                      <a href={item.href} className="text-base text-gray-500 hover:text-theme-purple transition duration-200 break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base text-gray-500 leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </Fade>
              ))}

              <Fade direction="up" triggerOnce delay={600}>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-sm font-semibold text-theme-blue uppercase tracking-wider mb-3">
                    Follow us
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(Company.social).map(([network, url]) => (
                      <a
                        key={network}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-theme-purple capitalize transition duration-200"
                      >
                        {network}
                      </a>
                    ))}
                  </div>
                </div>
              </Fade>
            </div>
          </div>

          <div className="lg:col-span-7 min-w-0">
            <Fade direction="up" triggerOnce delay={200}>
              <div className="bg-white rounded-3xl border border-light-theme-purple shadow-2xl p-7 sm:p-9 overflow-hidden">
                <h2 className="text-2xl text-theme-blue font-bold mb-2">
                  Send us a message
                </h2>
                <p className="text-sm text-gray-500 font-light mb-6">
                  Share a few details and we&apos;ll route your message to the right person.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <Form
                    id="contact-name"
                    name="name"
                    type="text"
                    value={data.name}
                    placeholder="Your name *"
                    onChange={onChange}
                  />
                  <Form
                    id="contact-company"
                    name="company"
                    type="text"
                    value={data.company}
                    placeholder="Company (optional)"
                    onChange={onChange}
                  />
                  <Form
                    id="contact-email"
                    name="email"
                    type="email"
                    value={data.email}
                    placeholder="Email *"
                    onChange={onChange}
                  />
                  <Form
                    id="contact-phone"
                    name="phone"
                    type="text"
                    value={data.phone}
                    placeholder="Phone (optional)"
                    onChange={onChange}
                  />
                </div>

                <label htmlFor="topic" className="block mt-6">
                  <span className="block text-sm text-theme-blue font-medium mb-2">
                    What can we help with?
                  </span>
                  <select
                    id="topic"
                    name="topic"
                    value={data.topic}
                    onChange={onTopicChange}
                    className={FIELD_CLASSES}
                  >
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </label>

                <div className="mt-6">
                  <Form
                    id="contact-message"
                    name="message"
                    type="textarea"
                    value={data.message}
                    placeholder="Tell us a little about what you need *"
                    onChange={onChange}
                  />
                </div>

                <Button
                  className="text-lg w-full sm:w-auto px-10 py-3 mt-8 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200 focus:outline-none"
                  type="button"
                  onClick={submitEmail}
                >
                  Send message
                </Button>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}
