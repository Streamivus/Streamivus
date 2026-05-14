/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Milestones } from '../json/aboutData';

export default function AboutTimeline() {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-20">
      <div className="text-center mb-14">
        <Fade direction="up" triggerOnce>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
            Our Journey
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-theme-blue font-bold">
            The story so far
          </h2>
        </Fade>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div
          className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-light-theme-purple"
          aria-hidden="true"
        />

        {Milestones.map((m, idx) => (
          <Fade direction="up" triggerOnce delay={idx * 100} key={`${m.year}-${m.title}`}>
            <div
              className={`relative pl-14 sm:pl-0 mb-10 sm:mb-12 sm:flex ${
                idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-8 h-8 rounded-full bg-theme-purple border-4 border-white shadow-lg flex items-center justify-center">
                <span className="w-2 h-2 bg-white rounded-full" />
              </div>

              <div className="sm:w-1/2 sm:px-8">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <p className="text-sm font-semibold text-theme-purple mb-1">
                    {m.year}
                  </p>
                  <h3 className="text-lg sm:text-xl text-theme-blue font-semibold mb-2">
                    {m.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
