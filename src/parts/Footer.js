/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React, { useState } from 'react';

import BrandIcon from './BrandIcon';
import Button from '../elements/Button';
import { Company } from '../json/companyData';
import { ServicesList } from '../json/servicesData';
import sendContactEmail from '../utils/sendEmail';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    sendContactEmail({
      fromName: `Newsletter signup: ${email}`,
      message: `New newsletter subscriber: ${email}`,
    })
      .then(() => {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 8000);
      });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 mt-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          <div className="lg:col-span-2 pr-4">
            <BrandIcon />
            <p className="text-base text-gray-500 font-light mt-4 mb-6 leading-relaxed">
              {Company.shortDescription}
            </p>

            <form onSubmit={onNewsletterSubmit} className="mb-5">
              <span className="block text-sm font-medium text-theme-blue mb-2">
                Get insights in your inbox
              </span>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                <label htmlFor="newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 min-w-0 px-4 py-3 text-base font-light text-theme-blue rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-theme-purple"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-5 py-3 bg-theme-purple text-white text-base rounded hover:bg-dark-theme-purple transition duration-200 disabled:opacity-60 shrink-0"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-sm text-green-600 mt-2">
                  Thanks! You&apos;re on the list — we&apos;ll send insights soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-600 mt-2">
                  Subscribe failed. Email us at{' '}
                  <a href={`mailto:${Company.email}?subject=Newsletter%20signup`} className="underline hover:text-theme-purple">
                    {Company.email}
                  </a>
                  {' '}and we&apos;ll add you manually.
                </p>
              )}
            </form>

            <div className="flex gap-4 mt-4">