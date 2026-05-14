/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';
import { CareersHeroData, Jobs } from '../json/careersData';

export default function CareersHero() {
  const openRoles = Jobs.length;
  return (
    <section className="container mx-auto px-6 lg:px-12 pt-12 pb-12">
      <div className="max-w-4xl">
        <Fade direction="up" triggerOnce>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-4">
            {CareersHeroData.eyebrow}
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-theme-blue font-bold leading-tight mb-6">
            {CareersHeroData.title}
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={200}>
          <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed mb-8">
            {CareersHeroData.description}
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={300}>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href="#open-roles"
              type="link"
              className="inline-flex items-center px-8 py-4 bg-theme-purple text-white rounded-lg hover:bg-dark-theme-purple shadow-xl transition duration-200"
            >
              See open roles
              <span className="ml-3 bg-white bg-opacity-20 text-white text-sm px-2 py-0.5 rounded-full">
                {openRoles}
              </span>
            </Button>
            <Button
              href="#open-application"
              type="link"
              className="inline-flex items-center px-8 py-4 bg-white text-theme-purple border-2 border-theme-purple rounded-lg hover:bg-light-theme-purple transition duration-200"
            >
              Open application
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  );
}
