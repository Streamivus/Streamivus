/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { CompanyValues, Benefits } from '../json/careersData';

export default function CareersCulture() {
  return (
    <>
      <section className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <Fade direction="up" triggerOnce>
              <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
                Culture
              </p>
            </Fade>
            <Fade direction="up" triggerOnce delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-theme-blue font-bold">
                How we work
              </h2>
            </Fade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {CompanyValues.map((v, idx) => (
              <Fade direction="up" triggerOnce delay={idx * 80} key={v.title}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-light-theme-purple transition duration-300 h-full">
                  <h3 className="text-xl text-theme-blue font-semibold mb-3">
                    {v.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-12">
          <Fade direction="up" triggerOnce>
            <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
              Perks & Benefits
            </p>
          </Fade>
          <Fade direction="up" triggerOnce delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-theme-blue font-bold">
              What we offer
            </h2>
          </Fade>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Benefits.map((b, idx) => (
            <Fade direction="up" triggerOnce delay={idx * 60} key={b.title}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-md hover:shadow-xl hover:border-light-theme-purple transition duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-light-theme-purple text-theme-purple font-bold text-xl flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="text-lg text-theme-blue font-semibold mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  {b.description}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </>
  );
}
