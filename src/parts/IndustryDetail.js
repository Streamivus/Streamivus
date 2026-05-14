/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';
import { IndustriesList } from '../json/industriesData';

export default function IndustryDetail({ industry }) {
  if (!industry) {
    return (
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl text-theme-blue font-bold mb-4">Industry not found</h1>
        <Button
          href="/industries"
          type="link"
          className="inline-block px-6 py-3 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple"
        >
          See all industries
        </Button>
      </section>
    );
  }

  const others = IndustriesList.filter((i) => i.slug !== industry.slug).slice(0, 3);

  return (
    <>
      <section className="container mx-auto px-6 lg:px-12 pt-12 pb-12">
        <Fade direction="up" triggerOnce>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-4">
            Industry
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-theme-blue font-bold leading-tight mb-5 max-w-4xl">
            {industry.title}
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={200}>
          <p className="text-xl sm:text-2xl text-theme-purple font-light mb-6 max-w-3xl">
            {industry.tagline}
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={300}>
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-3xl mb-10">
            {industry.summary}
          </p>
        </Fade>

        <Fade direction="up" triggerOnce delay={400}>
          <Button
            href="/discuss-project"
            type="link"
            className="inline-flex items-center px-8 py-4 bg-theme-purple text-white rounded-lg hover:bg-dark-theme-purple shadow-xl transition duration-200"
          >
            Talk to us about {industry.title}
            <svg className="ml-2 w-5 h-5 animate-bounce-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </Fade>
      </section>

      <section className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            <Fade direction="up" triggerOnce>
              <div>
                <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-5">
                  Industry challenges
                </h2>
                <ul className="space-y-4">
                  {industry.challenges.map((c) => (
                    <li key={c} className="flex items-start text-gray-600 font-light text-lg">
                      <span className="text-red-500 mr-3 mt-1 text-xl leading-none">×</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce delay={150}>
              <div>
                <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-5">
                  Where we help
                </h2>
                <ul className="space-y-4">
                  {industry.solutions.map((s) => (
                    <li key={s} className="flex items-start text-gray-600 font-light text-lg">
                      <span className="text-theme-purple mr-3 mt-1 text-xl leading-none">✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12 py-20">
        <Fade direction="up" triggerOnce>
          <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-10 text-center">
            Other industries we serve
          </h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {others.map((ind, idx) => (
            <Fade direction="up" triggerOnce delay={idx * 100} key={ind.slug}>
              <Button
                href={`/industries/${ind.slug}`}
                type="link"
                className="block bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-light-theme-purple hover:shadow-xl transition duration-300"
              >
                <h3 className="text-lg text-theme-blue font-semibold mb-2">
                  {ind.title}
                </h3>
                <p className="text-sm text-gray-500 font-light">
                  {ind.tagline}
                </p>
              </Button>
            </Fade>
          ))}
        </div>
      </section>
    </>
  );
}
