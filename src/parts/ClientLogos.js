/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Fade } from 'react-awesome-reveal';

const CLIENT_BRANDS = [
  'Surveyor Corps',
  'Shultan Oil',
  'Marley CO',
  'Aura Studio',
  'Surtido Rico',
  'Stream+',
];

export default function ClientLogos() {
  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <Fade direction="up" triggerOnce>
          <p className="text-center text-xs sm:text-sm tracking-widest uppercase text-gray-400 font-semibold mb-8">
            Trusted by teams across industries
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center max-w-5xl mx-auto">
            {CLIENT_BRANDS.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
              >
                <span className="text-lg sm:text-xl text-theme-blue font-bold tracking-wider text-center">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
