/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

export default function Advantage({ data }) {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <Fade direction="up" triggerOnce>
            <p className="text-xs sm:text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
              Why Choose Us
            </p>
          </Fade>
          <Fade direction="up" triggerOnce delay={100}>
            <h2 className="text-4xl sm:text-5xl text-theme-blue font-bold tracking-tight mb-4">
              Built for clarity, collaboration, and outcomes
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce delay={200}>
            <p className="font-light text-lg text-gray-500 max-w-2xl mx-auto">
              A senior, founder-led team that treats your product like our own.
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {data.map((item, idx) => (
            <div key={item.title} className="h-full">
              <Fade
                direction="up"
                triggerOnce
                delay={idx * 100}
                style={{ height: '100%' }}
              >
                <div className="h-full flex items-center gap-5 sm:gap-6 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 transition duration-300 hover:shadow-2xl hover:border-light-theme-purple hover:-translate-y-1">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-theme-blue text-xl sm:text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="font-light text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
