/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { HiringProcess as HiringSteps } from '../json/careersData';

export default function HiringProcess() {
  return (
    <section className="bg-theme-blue text-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <Fade direction="up" triggerOnce>
            <p className="text-sm tracking-widest uppercase text-light-theme-purple font-semibold mb-3">
              Hiring Process
            </p>
          </Fade>
          <Fade direction="up" triggerOnce delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              4 steps. Usually under 2 weeks.
            </h2>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {HiringSteps.map((s, idx) => (
            <Fade direction="up" triggerOnce delay={idx * 100} key={s.step}>
              <div className="border border-white border-opacity-20 rounded-2xl p-6 h-full hover:bg-white hover:bg-opacity-5 transition duration-300">
                <p className="text-3xl font-bold text-light-theme-purple mb-3">
                  {s.step}
                </p>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-300 font-light leading-relaxed text-sm">
                  {s.description}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
