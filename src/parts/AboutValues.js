/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Values, WhyStreamivus } from '../json/aboutData';

export default function AboutValues() {
  return (
    <>
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-12">
          <Fade direction="up" triggerOnce>
            <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
              How We Operate
            </p>
          </Fade>
          <Fade direction="up" triggerOnce delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-theme-blue font-bold">
              Values we actually live by
            </h2>
          </Fade>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Values.map((v, idx) => (
            <Fade direction="up" triggerOnce delay={100 * idx} key={v.title}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-light-theme-purple transition duration-300 h-full">
                <div className="w-10 h-10 rounded-lg bg-light-theme-purple text-theme-purple font-bold text-lg flex items-center justify-center mb-4">
                  {String(idx + 1).padStart(2, '0')}
                </div>
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
      </section>

      <section className="bg-theme-blue text-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <Fade direction="up" triggerOnce>
              <p className="text-sm tracking-widest uppercase text-light-theme-purple font-semibold mb-3">
                Why Streamivus
              </p>
            </Fade>
            <Fade direction="up" triggerOnce delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                What makes us different
              </h2>
            </Fade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {WhyStreamivus.map((item, idx) => (
              <Fade direction="up" triggerOnce delay={100 * idx} key={item.title}>
                <div className="border border-white border-opacity-20 rounded-2xl p-7 h-full hover:bg-white hover:bg-opacity-5 transition duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed">
                    {item.description}
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
