/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ResourcesHero, Resources } from '../json/resourcesData';
import sendContactEmail from '../utils/sendEmail.js';

export default function ResourcesGrid() {
  const [activeResource, setActiveResource] = useState(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const open = (r) => {
    if (!r.gated) {
      toast.info(`"${r.title}" — public resources will be available for direct download soon.`);
      return;
    }
    setActiveResource(r);
    setEmail('');
  };

  const close = () => {
    setActiveResource(null);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!email || !activeResource) return;
    setLoading(true);
    sendContactEmail({
      fromName: `Resource request: ${activeResource.title} — ${email}`,
      message: `Requested resource: ${activeResource.title} (${activeResource.slug})\nFrom: ${email}`,
    })
      .then(
        () => {
          toast.success('Thanks! We\'ll send the resource to your inbox shortly.');
          setLoading(false);
          close();
        },
        () => {
          toast.error('Couldn\'t process right now. Email info@streamivus.com.');
          setLoading(false);
        },
      );
  };

  return (
    <>
      <section className="container mx-auto px-6 lg:px-12 pt-12 pb-12 text-center">
        <Fade direction="up" triggerOnce>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-4">
            {ResourcesHero.eyebrow}
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-theme-blue font-bold leading-tight mb-6 max-w-3xl mx-auto">
            {ResourcesHero.title}
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={200}>
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            {ResourcesHero.description}
          </p>
        </Fade>
      </section>

      <section className="container mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Resources.map((r, idx) => (
            <Fade direction="up" triggerOnce delay={idx * 60} key={r.slug}>
              <button
                type="button"
                onClick={() => open(r)}
                className="block text-left bg-white rounded-3xl p-7 sm:p-8 shadow-lg border border-gray-100 hover:border-light-theme-purple hover:shadow-2xl transition duration-300 h-full w-full focus:outline-none"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl">{r.coverEmoji}</span>
                  <span className="text-xs uppercase tracking-wider text-theme-purple font-semibold">
                    {r.type}
                    {r.pages ? ` · ${r.pages} pages` : ''}
                  </span>
                </div>
                <h3 className="text-xl text-theme-blue font-bold mb-3">
                  {r.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed mb-5">
                  {r.summary}
                </p>
                <span className="inline-flex items-center text-theme-purple font-medium">
                  {r.gated ? 'Get free download' : 'Coming soon'}
                  <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Fade>
          ))}
        </div>
      </section>

      {activeResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <button
            type="button"
            onClick={close}
            aria-label="Close dialog"
            className="absolute inset-0 bg-black bg-opacity-60 cursor-default focus:outline-none"
          />
          <div
            className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl relative"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none focus:outline-none"
              aria-label="Close"
            >
              ×
            </button>
            <div className="text-5xl mb-4">{activeResource.coverEmoji}</div>
            <h2 className="text-2xl text-theme-blue font-bold mb-2">
              Get &quot;{activeResource.title}&quot;
            </h2>
            <p className="text-gray-500 font-light mb-6">
              Drop your email and we&apos;ll send it straight to your inbox.
            </p>
            <form onSubmit={submit}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-3 text-base font-light text-theme-blue rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-theme-purple mb-4"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-theme-purple text-white text-base rounded hover:bg-dark-theme-purple transition duration-200 disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send me the download'}
              </button>
              <p className="text-xs text-gray-400 mt-3 text-center">
                We&apos;ll never sell your email. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
}
