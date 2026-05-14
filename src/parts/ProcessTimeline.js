/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { ProcessHero, ProcessSteps, EngagementModels } from '../json/processData';

export default function ProcessTimeline() {
  return (
    <>
      <section className="container mx-auto px-6 lg:px-12 pt-12 pb-12">
        <div className="max-w-4xl">
          <Fade direction="up" triggerOnce>
            <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-4">
              {ProcessHero.eyebrow}
            </p>
          </Fade>
          <Fade direction="up" triggerOnce delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-theme-blue font-bold leading-tight mb-6">
              {ProcessHero.title}
            </h1>
          </Fade>
          <Fade direction="up" triggerOnce delay={200}>
            <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed">
              {ProcessHero.description}
            </p>
          </Fade>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12 py-12">
        <div className="max-w-5xl mx-auto relative">
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-light-theme-purple hidden sm:block"
            aria-hidden="true"
          />

          {ProcessSteps.map((s, idx) => (
            <Fade direction="up" triggerOnce delay={idx * 100} key={s.step}>
              <div className="relative pl-0 sm:pl-16 mb-10 sm:mb-12">
                <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-theme-purple border-4 border-white shadow-lg items-center justify-center hidden sm:flex">
                  <span className="text-xs font-bold text-white">
                    {s.step}
                  </span>
                </div>

                <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-light-theme-purple transition duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3 gap-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-theme-purple sm:hidden">
                        {s.step}
                      </span>
                      <h3 className="text-2xl sm:text-3xl text-theme-blue font-bold">
                        {s.title}
                      </h3>
                    </div>
                    <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                      {s.timeline}
                    </span>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed text-lg mb-6">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.deliverables.map((d) => (
                      <span
                        key={d}
                        className="text-xs font-light text-theme-blue bg-light-theme-purple bg-opacity-50 px-3 py-1.5 rounded-full border border-light-theme-purple"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <Fade direction="up" triggerOnce>
              <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
                Engagement Models
              </p>
            </Fade>
            <Fade direction="up" triggerOnce delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-theme-blue font-bold">
                Three ways to work with us
              </h2>
            </Fade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {EngagementModels.map((m, idx) => (
              <Fade direction="up" triggerOnce delay={idx * 100} key={m.title}>
                <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-md border border-gray-100 hover:shadow-xl hover:border-light-theme-purple transition duration-300 h-full">
                  <h3 className="text-xl text-theme-blue font-bold mb-3">
                    {m.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-5">
                    {m.description}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-theme-purple font-semibold">
                    Best for: {m.bestFor}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
