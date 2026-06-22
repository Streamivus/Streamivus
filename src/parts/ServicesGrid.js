/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';
import { ServicesList } from '../json/servicesData';

export default function ServicesGrid() {
  return (
    <section className="container mx-auto px-6 lg:px-12 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {ServicesList.map((s, idx) => (
          <Fade direction="up" triggerOnce delay={idx * 80} key={s.slug}>
            <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-lg border border-gray-100 hover:border-light-theme-purple hover:shadow-2xl transition duration-300 h-full flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-light-theme-purple text-theme-purple font-bold text-2xl flex items-center justify-center mb-5">
                {s.title.charAt(0)}
              </div>
              <h3 className="text-2xl text-theme-blue font-bold mb-2">
                {s.title}
              </h3>
              <p className="text-theme-purple text-sm font-medium mb-4">
                {s.tagline}
              </p>
              <p className="text-gray-500 font-light leading-relaxed mb-6 flex-1">
                {s.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {s.stack.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-light text-theme-blue bg-light-theme-purple bg-opacity-50 px-3 py-1 rounded-full border border-light-theme-purple"
                  >
                    {tech}
                  </span>
                ))}
                {s.stack.length > 6 && (
                  <span className="text-xs font-medium text-theme-purple bg-light-theme-purple bg-opacity-30 px-3 py-1 rounded-full border border-light-theme-purple">
                    +{s.stack.length - 6} more
                  </span>
                )}
              </div>

              <Button
                href={`/services/${s.slug}`}
                type="link"
                className="inline-flex items-center text-theme-purple font-medium hover:text-dark-theme-purple transition duration-200 mt-auto"
              >
                Learn more
                <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
