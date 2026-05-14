/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { PressKit } from '../json/resourcesData';

export default function PressKitSection() {
  return (
    <>
      <section className="container mx-auto px-6 lg:px-12 pt-12 pb-12">
        <div className="max-w-4xl">
          <Fade direction="up" triggerOnce>
            <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-4">
              {PressKit.hero.eyebrow}
            </p>
          </Fade>
          <Fade direction="up" triggerOnce delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-theme-blue font-bold leading-tight mb-6">
              {PressKit.hero.title}
            </h1>
          </Fade>
          <Fade direction="up" triggerOnce delay={200}>
            <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed">
              {PressKit.hero.description}
            </p>
          </Fade>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12 py-12">
        <Fade direction="up" triggerOnce>
          <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-6">
            Quick facts
          </h2>
        </Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
          {PressKit.quickFacts.map((f, idx) => (
            <Fade direction="up" triggerOnce delay={idx * 60} key={f.label}>
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-1">
                  {f.label}
                </p>
                <p className="text-theme-blue font-semibold">
                  {f.value}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <Fade direction="up" triggerOnce>
            <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-6">
              Brand colors
            </h2>
          </Fade>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
            {PressKit.brand.colors.map((c, idx) => (
              <Fade direction="up" triggerOnce delay={idx * 60} key={c.hex}>
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <div
                    className="w-full h-16 sm:h-20 rounded-lg mb-3"
                    style={{ backgroundColor: c.hex }}
                  />
                  <p className="text-sm font-semibold text-theme-blue">{c.name}</p>
                  <p className="text-xs text-gray-400 font-mono mt-1">{c.hex}</p>
                </div>
              </Fade>
            ))}
          </div>

          <Fade direction="up" triggerOnce>
            <div className="mt-10">
              <h3 className="text-lg text-theme-blue font-bold mb-2">Typography</h3>
              <p className="text-gray-500 font-light">{PressKit.brand.typography}</p>
            </div>
          </Fade>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12 py-16">
        <Fade direction="up" triggerOnce>
          <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-8">
            Founder bios
          </h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {PressKit.founderBios.map((f, idx) => (
            <Fade direction="up" triggerOnce delay={idx * 100} key={f.name}>
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-md">
                <h3 className="text-xl text-theme-blue font-bold">{f.name}</h3>
                <p className="text-sm text-theme-purple font-medium mb-3">{f.role}</p>
                <p className="text-gray-500 font-light leading-relaxed">{f.bio}</p>
              </div>
            </Fade>
          ))}
        </div>

        <Fade direction="up" triggerOnce>
          <div className="mt-12 p-7 bg-light-theme-purple bg-opacity-30 rounded-2xl border border-light-theme-purple">
            <h3 className="text-lg text-theme-blue font-bold mb-2">Media inquiries</h3>
            <p className="text-gray-600 font-light mb-3">
              Writing a piece? Booking a speaker? Need extra assets?
            </p>
            <a
              href="mailto:press@streamivus.com"
              className="inline-flex items-center text-theme-purple font-medium hover:underline"
            >
              press@streamivus.com
              <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </Fade>
      </section>
    </>
  );
}
