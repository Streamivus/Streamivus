/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

import Button from '../elements/Button';

export default function Portfolio({ data }) {
  return (
    <section className="container mx-auto px-6 lg:px-12 flex flex-col items-center mt-20">
      <Fade direction="up" triggerOnce>
        <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
          Selected Work
        </p>
      </Fade>
      <Fade direction="up" triggerOnce delay={100}>
        <h2 className="text-4xl sm:text-5xl text-theme-blue text-center font-bold mb-3">
          Recent case studies
        </h2>
      </Fade>
      <Fade direction="up" triggerOnce delay={200}>
        <p className="font-light text-lg text-gray-400 text-center mb-12 max-w-2xl lg:max-w-4xl">
          Real products shipped for real customers — across web, mobile, AI, and SaaS.
        </p>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch">
        {data.slice(0, 6).map((item, index) => (
          <div key={item.id} className="h-full">
            <Fade
              direction="up"
              triggerOnce
              delay={index * 80}
              style={{ height: '100%' }}
            >
              <Button
                type="link"
                href={`/case-studies/${item.id}`}
                className="flex flex-col h-full group rounded-2xl shadow-xl bg-white border border-gray-100 hover:border-light-theme-purple hover:shadow-2xl transition duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 py-5 px-6">
                  {item.industry && (
                    <p className="text-xs uppercase tracking-wider text-theme-purple font-semibold mb-2">
                      {item.industry}
                    </p>
                  )}
                  <h3 className="text-theme-blue text-xl font-bold mb-1">{item.title}</h3>
                  <p className="font-light text-gray-500 text-sm">
                    {item.summary || item.type}
                  </p>
                </div>
              </Button>
            </Fade>
          </div>
        ))}
      </div>

      <Fade direction="up" triggerOnce>
        <Button
          href="/case-studies"
          type="link"
          className="inline-flex items-center mt-12 px-6 py-3 text-theme-purple border border-theme-purple rounded-full hover:bg-theme-purple hover:text-white transition duration-300"
        >
          See all case studies
          <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </Fade>
    </section>
  );
}
