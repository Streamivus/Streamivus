/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FAQCategories } from '../json/faqData';

export default function FAQAccordion() {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <section className="container mx-auto px-6 lg:px-12 py-12 max-w-4xl">
      <Fade direction="up" triggerOnce>
        <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3 text-center">
          Frequently Asked Questions
        </p>
      </Fade>
      <Fade direction="up" triggerOnce delay={100}>
        <h1 className="text-4xl sm:text-5xl text-theme-blue font-bold mb-3 text-center">
          The honest answers.
        </h1>
      </Fade>
      <Fade direction="up" triggerOnce delay={200}>
        <p className="text-lg text-gray-500 font-light text-center mb-12 max-w-2xl mx-auto">
          Don&apos;t see your question? Email us at{' '}
          <a href="mailto:info@streamivus.com" className="text-theme-purple hover:underline">
            info@streamivus.com
          </a>{' '}
          and we&apos;ll get back to you within a business day.
        </p>
      </Fade>

      {FAQCategories.map((cat, catIdx) => (
        <div key={cat.category} className="mb-10">
          <Fade direction="up" triggerOnce>
            <h2 className="text-xl sm:text-2xl text-theme-blue font-bold mb-4 pb-2 border-b border-gray-200">
              {cat.category}
            </h2>
          </Fade>

          <div className="space-y-2">
            {cat.items.map((item, itemIdx) => {
              const key = `${catIdx}-${itemIdx}`;
              const isOpen = openKey === key;
              return (
                <Fade direction="up" triggerOnce delay={itemIdx * 40} key={item.question}>
                  <div className="bg-white rounded-xl border border-gray-100 hover:border-light-theme-purple shadow-sm transition duration-300">
                    <button
                      type="button"
                      onClick={() => toggle(key)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 sm:py-5 focus:outline-none"
                    >
                      <span className="text-base sm:text-lg text-theme-blue font-medium pr-3">
                        {item.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-theme-purple flex-shrink-0 transform transition duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 text-gray-500 font-light leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
