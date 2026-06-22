/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';
import { ServicesList } from '../json/servicesData';

export default function ServiceDetail({ service }) {
  if (!service) {
    return (
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl text-theme-blue font-bold mb-4">Service not found</h1>
        <p className="text-gray-500 mb-6">The service you&apos;re looking for doesn&apos;t exist.</p>
        <Button href="/services" type="link" className="inline-block px-6 py-3 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple">
          See all services
        </Button>
      </section>
    );
  }

  const related = ServicesList.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="container mx-auto px-6 lg:px-12 pt-12 pb-12">
        <Fade direction="up" triggerOnce>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-4">
            Service
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-theme-blue font-bold leading-tight mb-5 max-w-4xl">
            {service.title}
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={200}>
          <p className="text-xl sm:text-2xl text-theme-purple font-light mb-6 max-w-3xl">
            {service.tagline}
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={300}>
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-3xl mb-8">
            {service.summary}
          </p>
        </Fade>

        <Fade direction="up" triggerOnce delay={400}>
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="bg-light-theme-purple bg-opacity-50 px-4 py-2 rounded-full text-sm text-theme-blue">
              <span className="font-medium">Timeline:</span> {service.timeline}
            </div>
            <div className="bg-light-theme-purple bg-opacity-50 px-4 py-2 rounded-full text-sm text-theme-blue">
              <span className="font-medium">Investment:</span> {service.startsAt}
            </div>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce delay={500}>
          <Button
            href="/discuss-project"
            type="link"
            className="inline-flex items-center px-8 py-4 bg-theme-purple text-white rounded-lg hover:bg-dark-theme-purple shadow-xl transition duration-200"
          >
            Start a {service.title} project
            <svg className="ml-2 w-5 h-5 animate-bounce-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </Fade>
      </section>

      <section className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            <Fade direction="up" triggerOnce>
              <div>
                <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-5">
                  Problems we solve
                </h2>
                <ul className="space-y-4">
                  {service.problems.map((p) => (
                    <li key={p} className="flex items-start text-gray-600 font-light text-lg">
                      <span className="text-red-500 mr-3 mt-1 text-xl leading-none">×</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce delay={150}>
              <div>
                <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-5">
                  What you get
                </h2>
                <ul className="space-y-4">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start text-gray-600 font-light text-lg">
                      <span className="text-theme-purple mr-3 mt-1 text-xl leading-none">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12 py-20">
        <Fade direction="up" triggerOnce>
          <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-6 text-center">
            Technology stack
          </h2>
        </Fade>
        <Fade direction="up" triggerOnce delay={150}>
          <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
            {service.stack.map((tech) => (
              <span
                key={tech}
                className="text-sm sm:text-base font-light text-theme-blue bg-white px-5 py-2.5 rounded-full border border-light-theme-purple shadow-sm hover:shadow-md transition duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </Fade>
      </section>

      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <Fade direction="up" triggerOnce>
            <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-10 text-center">
              Other services
            </h2>
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {related.map((s, idx) => (
              <Fade direction="up" triggerOnce delay={idx * 100} key={s.slug}>
                <Button
                  href={`/services/${s.slug}`}
                  type="link"
                  className="block bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-light-theme-purple hover:shadow-xl transition duration-300"
                >
                  <h3 className="text-lg text-theme-blue font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light">
                    {s.tagline}
                  </p>
                </Button>
              </Fade>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
