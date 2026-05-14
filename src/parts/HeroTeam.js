/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import Team from 'assets/images/hero/team.png';

export default function HeroTeam() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="hidden sm:block pointer-events-none absolute -top-10 right-0 w-72 h-72 bg-light-theme-purple opacity-50 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="hidden sm:block pointer-events-none absolute bottom-0 -left-10 w-80 h-80 bg-theme-purple opacity-10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="hero relative sm:items-center lg:items-start sm:flex-row">
        <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
          <Fade direction="up" triggerOnce>
            <span className="inline-flex w-fit items-center text-xs sm:text-sm tracking-widest uppercase text-theme-purple bg-light-theme-purple px-4 py-2 rounded-full mb-6 font-medium">
              <span className="w-2 h-2 bg-theme-purple rounded-full mr-2" />
              Founders & Co-CEOs
            </span>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
              Meet the team behind
              {' '}
              <span className="text-theme-purple">Streamivus</span>
            </h1>
          </Fade>
          <Fade direction="up" delay={400} triggerOnce>
            <p className="font-light text-xl text-gray-400 leading-relaxed">
              Two co-founders, one mission — building delightful software where
              solid engineering meets thoughtful design.
            </p>
          </Fade>
        </div>
        <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
          <Fade direction="top-right" triggerOnce delay={300}>
            <img src={Team} alt="Hero" />
          </Fade>
        </div>
      </div>
    </section>
  );
}
