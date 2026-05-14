/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { ServicesOverview } from '../json/servicesData';

export default function ServicesHero() {
  return (
    <section className="container mx-auto px-6 lg:px-12 pt-12 pb-12 text-center">
      <Fade direction="up" triggerOnce>
        <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-4">
          {ServicesOverview.eyebrow}
        </p>
      </Fade>
      <Fade direction="up" triggerOnce delay={100}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-theme-blue font-bold leading-tight mb-6 max-w-4xl mx-auto">
          {ServicesOverview.title}
        </h1>
      </Fade>
      <Fade direction="up" triggerOnce delay={200}>
        <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
          {ServicesOverview.description}
        </p>
      </Fade>
    </section>
  );
}
