/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Partners } from '../json/resourcesData';

export default function PartnersGrid() {
  return (
    <>
      <section className="container mx-auto px-6 lg:px-12 pt-12 pb-12 text-center">
        <Fade direction="up" triggerOnce>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-4">
            {Partners.hero.eyebrow}
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-theme-blue font-bold leading-tight mb-6 max-w-3xl mx-auto">
            {Partners.hero.title}
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={200}>
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            {Partners.hero.description}
          </p>
        </Fade>
      </section>

      <section className="container mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {Partners.categories.map((cat, idx) => (
            <Fade direction="up" triggerOnce delay={idx * 60} key={cat.title}>
              <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-lg border border-gray-100 hover:border-light-theme-purple hover:shadow-2xl transition duration-300 h-full">
                <h3 className="text-xl text-theme-blue font-bold mb-5">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-light text-theme-blue bg-light-theme-purple bg-opacity-50 px-4 py-2 rounded-full border border-light-theme-purple hover:bg-opacity-100 transition duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </>
  );
}
