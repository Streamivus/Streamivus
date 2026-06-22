/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';

import Button from '../elements/Button';

import BuildWebsite from '../assets/images/hero/BuildWebsite.png';

import { Stats } from '../json/companyData';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 order-1">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
            Digital Product Studio · Web · Mobile · AI · Cloud
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-theme-blue font-bold leading-[1.05] tracking-tight mb-5">
            Growing your business <br />
            is our calling.
          </h1>

          <p className="font-light text-lg sm:text-xl text-gray-500 leading-relaxed mb-8 max-w-xl">
            Streamivus is a design and development studio helping startups and
            growing businesses launch fast, solve complex problems, and create
            products users love.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <Button
              href="/discuss-project"
              type="link"
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 text-white text-lg bg-theme-purple rounded-xl shadow-xl hover:bg-dark-theme-purple hover:shadow-2xl transition duration-200"
            >
              Start a Project
              <svg
                className="ml-2 w-5 h-5 text-white animate-bounce-x"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
            <Button
              href="/case-studies"
              type="link"
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 text-theme-purple text-lg bg-white border-2 border-theme-purple rounded-xl hover:bg-light-theme-purple transition duration-200"
            >
              See Our Work
            </Button>
          </div>
        </div>

        <div className="flex w-full justify-center items-center order-2 lg:order-2 lg:w-1/2 pt-5 lg:pt-0">
          <div className="w-full max-w-md lg:max-w-lg aspect-[4/3] flex items-center justify-center">
            <img
              src={BuildWebsite}
              alt="Streamivus digital product studio building web and mobile apps"
              width={640}
              height={480}
              decoding="async"
              fetchPriority="high"
              className="w-full h-auto max-h-[320px] sm:max-h-[380px] lg:max-h-none object-contain"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-8 mb-16 sm:mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 bg-white rounded-2xl shadow-xl border border-light-theme-purple py-7 px-6 sm:px-10">
          {Stats.map((stat) => (
            <div key={stat.label} className="text-center min-h-[4.5rem]">
              <p className="text-3xl sm:text-4xl xl:text-5xl text-theme-purple font-bold mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-light tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
