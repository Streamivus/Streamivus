/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Mission, Vision } from '../json/aboutData';

export default function AboutMissionVision() {
  return (
    <section className="bg-gray-50 py-20 border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Fade direction="left" triggerOnce>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-light-theme-purple h-full">
              <div className="w-12 h-12 rounded-xl bg-light-theme-purple flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-theme-purple">M</span>
              </div>
              <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-4">
                {Mission.title}
              </h2>
              <p className="text-gray-500 font-light text-lg leading-relaxed">
                {Mission.description}
              </p>
            </div>
          </Fade>
          <Fade direction="right" triggerOnce>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-light-theme-purple h-full">
              <div className="w-12 h-12 rounded-xl bg-light-theme-purple flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-theme-purple">V</span>
              </div>
              <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-4">
                {Vision.title}
              </h2>
              <p className="text-gray-500 font-light text-lg leading-relaxed">
                {Vision.description}
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
