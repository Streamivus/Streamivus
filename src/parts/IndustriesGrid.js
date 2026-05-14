/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';
import { IndustriesHero, IndustriesList } from '../json/industriesData';

export default function IndustriesGrid() {
  return (
    <>
      <section className="container mx-auto px-6 lg:px-12 pt-12 pb-12 text-center">
        <Fade direction="up" triggerOnce>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-4">
            {IndustriesHero.eyebrow}
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-theme-blue font-bold leading-tight mb-6 max-w-4xl mx-auto">
            {IndustriesHero.title}
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={200}>
          <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
            {IndustriesHero.description}
          </p>
        </Fade>
      </section>

      <section className="container mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {IndustriesList.map((ind, idx) => (
            <Fade direction="up" triggerOnce delay={idx * 80} key={ind.slug}>
              <Button
                href={`/industries/${ind.slug}`}
                type="link"
                className="block bg-white rounded-3xl p-7 sm:p-8 shadow-lg border border-gray-100 hover:border-light-theme-purple hover:shadow-2xl transition duration-300 h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-light-theme-purple text-theme-purple font-bold text-2xl flex items-center justify-center mb-5">
                  {ind.title.charAt(0)}
                </div>
                <h3 className="text-2xl text-theme-blue font-bold mb-2">
                  {ind.title}
                </h3>
                <p className="text-theme-purple text-sm font-medium mb-3">
                  {ind.tagline}
                </p>
                <p className="text-gray-500 font-light leading-relaxed mb-5">
                  {ind.summary}
                </p>
                <span className="inline-flex items-center text-theme-purple font-medium hover:text-dark-theme-purple transition duration-200">
                  Explore
                  <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </Fade>
          ))}
        </div>
      </section>
    </>
  );
}
