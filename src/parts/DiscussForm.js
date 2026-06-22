/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';

import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';
import { FIELD_CLASSES } from 'elements/Form';
import sendContactEmail from '../utils/sendEmail';

const STEPS = [
  'We read every message personally',
  'We respond within 24 hours',
  'Free 30-minute discovery call',
  'Written proposal in 3 – 5 days',
];

const TRUST_BADGES = ['NDA available', 'Founder-led', 'Remote-friendly'];

const SERVICE_OPTIONS = [
  'UI/UX Design',
  'Website Development',
  'Mobile App Development',
  'SaaS Product Design',
  'Branding',
  'AI Integration',
  'MVP Development',
  'Other',
];

const TRUST_MICROCOPY = [
  'Response within 24 hours',
  'NDA available on request',
  'Trusted by startups & growing businesses',
];

export const DiscussForm = (actions) => {
  const { data, resetForm, onToggleService } = actions;
  const taRef = useRef(null);

  useEffect(() => {
    if (!taRef.current) return;
    taRef.current.style.height = 'auto';
    taRef.current.style.height = `${taRef.current.scrollHeight}px`;
  }, [data.projectIdea]);

  const submitEmail = () => {
    const {
      name, company, email, phone, budget, services, projectIdea,
    } = data;

    if (name === '' || company === '' || email === '' || projectIdea === '') {
      toast.error('Please fill in your name, company, email, and project description.');
      return;
    }

    sendContactEmail({
      fromName: `${name} - ${company} ( ${email}${phone ? ` · ${phone}` : ''} )`,
      message: [
        `Budget: ${budget || 'Not specified'}`,
        `Services: ${services && services.length ? services.join(', ') : 'Not specified'}`,
        '',
        projectIdea,
      ].join('\n'),
    })
      .then(() => {
        toast.success('Success! we\'\ll get back to you soon. Thank you!');
        resetForm();
      }, (error) => {
        toast.error(error?.text || 'Something went wrong. Please email info@streamivus.com.');
      });
  };

  return (
    <section className="container mx-auto px-4 sm:px-8 py-14 sm:py-20 max-w-6xl overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left column */}
        <div className="lg:col-span-5 lg:pr-4 min-w-0">
          <Fade direction="up" triggerOnce>
            <p className="text-xs sm:text-sm tracking-widest uppercase text-theme-purple font-semibold mb-4">
              Start a Project
            </p>
            <h2 className="text-4xl sm:text-5xl text-theme-blue font-bold tracking-tight leading-[1.1] mb-5">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Let's Build Something Great
            </h2>
            <p className="font-light text-lg text-gray-500 leading-relaxed mb-10 max-w-md">
              Tell us about your idea and our team will get back to you within
              24 hours.
            </p>
          </Fade>

          <Fade direction="up" delay={150} triggerOnce>
            <div className="mb-10">
              <p className="text-sm font-semibold tracking-wide uppercase text-theme-blue mb-5">
                What happens next
              </p>
              <ol className="space-y-4">
                {STEPS.map((step, idx) => (
                  <li key={step} className="flex items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-light-theme-purple text-theme-purple text-sm font-semibold flex items-center justify-center mr-3 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-gray-600 font-light leading-relaxed pt-0.5">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Fade>

          <Fade direction="up" delay={250} triggerOnce>
            <div className="flex flex-wrap gap-2.5">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-600 shadow-sm"
                >
                  <svg
                    className="w-3.5 h-3.5 mr-1.5 text-theme-purple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </Fade>
        </div>

        {/* Right column - form card */}
        <div className="lg:col-span-7 min-w-0">
          <Fade direction="up" triggerOnce>
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-7 sm:p-9 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <label htmlFor="discuss-name" className="block">
                  <span className="block text-sm font-medium text-theme-blue mb-2">
                    Full name
                  </span>
                  <input
                    id="discuss-name"
                    name="name"
                    type="text"
                    value={data.name}
                    placeholder="Jane Doe"
                    className={FIELD_CLASSES}
                    onChange={actions.onChange}
                  />
                </label>
                <label htmlFor="discuss-email" className="block">
                  <span className="block text-sm font-medium text-theme-blue mb-2">
                    Work email
                  </span>
                  <input
                    id="discuss-email"
                    name="email"
                    type="email"
                    value={data.email}
                    placeholder="jane@company.com"
                    className={FIELD_CLASSES}
                    onChange={actions.onChange}
                  />
                </label>
                <label htmlFor="discuss-company" className="block">
                  <span className="block text-sm font-medium text-theme-blue mb-2">
                    Company / Startup name
                  </span>
                  <input
                    id="discuss-company"
                    name="company"
                    type="text"
                    value={data.company}
                    placeholder="Acme Inc."
                    className={FIELD_CLASSES}
                    onChange={actions.onChange}
                  />
                </label>
                <label htmlFor="discuss-budget" className="block">
                  <span className="block text-sm font-medium text-theme-blue mb-2">
                    Budget range
                  </span>
                  <input
                    id="discuss-budget"
                    name="budget"
                    type="text"
                    value={data.budget}
                    placeholder="e.g. $5K – $15K"
                    className={FIELD_CLASSES}
                    onChange={actions.onChange}
                  />
                </label>
                <label htmlFor="discuss-phone" className="block sm:col-span-2">
                  <span className="block text-sm font-medium text-theme-blue mb-2">
                    Phone
                    {' '}
                    <span className="text-gray-400 font-light">(optional)</span>
                  </span>
                  <input
                    id="discuss-phone"
                    name="phone"
                    type="tel"
                    value={data.phone}
                    placeholder="+1 555 123 4567"
                    className={FIELD_CLASSES}
                    onChange={actions.onChange}
                  />
                </label>
              </div>

              {/* Services multi-select */}
              <fieldset className="mt-7">
                <legend className="block text-sm font-medium text-theme-blue mb-3">
                  What do you need help with?
                </legend>
                <div className="flex flex-wrap gap-2.5">
                  {SERVICE_OPTIONS.map((service) => {
                    const selected = data.services && data.services.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => onToggleService && onToggleService(service)}
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition duration-200 focus:outline-none focus:ring-2 focus:ring-theme-purple/30 ${
                          selected
                            ? 'bg-light-theme-purple border-theme-purple text-theme-purple shadow-sm'
                            : 'bg-white border-gray-300 text-gray-600 hover:border-theme-purple/60 hover:text-theme-blue'
                        }`}
                      >
                        {selected && (
                          <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {service}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Project description */}
              <label htmlFor="discuss-projectIdea" className="block mt-7">
                <span className="block text-sm font-medium text-theme-blue mb-2">
                  Tell us about your project
                </span>
                <textarea
                  id="discuss-projectIdea"
                  name="projectIdea"
                  ref={taRef}
                  value={data.projectIdea}
                  placeholder="Tell us about your product, goals, and what you’re looking to build…"
                  rows={4}
                  className={`${FIELD_CLASSES} min-h-28 resize-none overflow-hidden`}
                  onChange={actions.onChange}
                />
              </label>

              {/* CTA */}
              <div className="mt-8">
                <button
                  type="button"
                  onClick={submitEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white text-base font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-theme-purple/40 focus:ring-offset-2"
                >
                  Start a Project
                  <svg
                    className="ml-2 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {/* Trust microcopy */}
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {TRUST_MICROCOPY.map((item) => (
                  <li key={item} className="inline-flex items-center text-xs sm:text-sm text-gray-500 font-light">
                    <svg className="w-4 h-4 mr-1.5 text-theme-purple flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Mail fallback */}
              <p className="mt-5 text-sm text-gray-500 font-light">
                Prefer email instead?
                {' '}
                <a
                  href="mailto:info@streamivus.com"
                  className="text-theme-purple font-medium underline-offset-4 hover:underline transition"
                >
                  info@streamivus.com
                </a>
              </p>
            </div>
          </Fade>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};
