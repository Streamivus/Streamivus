/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import heroPortfolio from 'assets/images/hero/portfolioHero.png';

export default function HeroPortfolio() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
            Case Studies
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={100}>
          <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
            Selected work.<br />
            Real results.
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={300}>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            A look at recent products we&apos;ve designed, built, and shipped —
            across web, mobile, AI, and SaaS. Each case study spells out the
            challenge, our approach, and the measurable results.
          </p>
        </Fade>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12">
        <Fade direction="up" triggerOnce>
          <img src={heroPortfolio} alt="Case Studies" />
        </Fade>
      </div>
    </section>
  );
}
