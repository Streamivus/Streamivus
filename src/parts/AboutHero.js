/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { AboutHero as AboutHeroData } from '../json/aboutData';
import { Stats } from '../json/companyData';

export default function AboutHero() {
  return (
    <section className="container mx-auto px-6 lg:px-12 pt-12 pb-20">
      <div className="max-w-4xl">
        <Fade direction="up" triggerOnce>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-4">
            {AboutHeroData.eyebrow}
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-theme-blue font-bold leading-tight mb-6">
            {AboutHeroData.title}
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={200}>
          <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed">
            {AboutHeroData.description}
          </p>
        </Fade>
      </div>

      <Fade direction="up" triggerOnce delay={300}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {Stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-light-theme-purple rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition duration-300"
            >
              <p className="text-3xl sm:text-4xl text-theme-purple font-bold mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-light tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}
