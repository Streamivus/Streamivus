/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import BuildWebsite from "../assets/images/hero/BuildWebsite.png";

import { Stats } from "../json/companyData";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
          <Fade direction="up" triggerOnce>
            <p className="text-xs sm:text-sm tracking-widest uppercase text-theme-purple font-semibold mb-4">
              Digital Product Studio · Web · Mobile · AI · Cloud
            </p>
          </Fade>
          <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
            Growing your business <br />
            is our calling.
          </h1>

          <p className="font-light text-xl text-gray-400 leading-relaxed mb-10">
            Streamivus is a founder-led product studio with a growing network of
            senior engineers, designers, and AI specialists — partnering with
            ambitious teams to ship software that scales.
          </p>
          <Fade direction="up" delay={300} triggerOnce>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                href="/discuss-project"
                type="link"
                className="flex w-full sm:w-auto h-18 items-center justify-center px-10 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200"
              >
                Start a Project
                <svg
                  className="ml-2 w-6 h-6 text-white animate-bounce-x"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                className="flex w-full sm:w-auto h-18 items-center justify-center px-10 py-5 text-theme-purple text-xl bg-white border-2 border-theme-purple rounded-lg hover:bg-light-theme-purple transition duration-200"
              >
                See Our Work
              </Button>
            </div>
          </Fade>
        </div>
        <div className="flex pt-5 md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/2">
          <Fade direction="up" triggerOnce>
            <img className="" src={BuildWebsite} alt="Build Website" />
          </Fade>
        </div>
      </section>

      <Fade direction="up" triggerOnce>
        <section className="container mx-auto px-4 sm:px-8 -mt-4 mb-16 sm:mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 bg-white rounded-2xl shadow-xl border border-light-theme-purple py-8 px-6 sm:px-10">
            {Stats.map((stat) => (
              <div key={stat.label} className="text-center">
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
      </Fade>
    </>
  );
}
