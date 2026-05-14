/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

import NotFound from 'assets/images/NotFound.png';
import Button from 'elements/Button';

function MetricCard({ metric }) {
  return (
    <div className="bg-white border border-light-theme-purple rounded-2xl p-6 text-center shadow-sm">
      <p className="text-3xl sm:text-4xl text-theme-purple font-bold mb-1">
        {metric.value}
      </p>
      <p className="text-xs sm:text-sm text-gray-500 font-light tracking-wide uppercase">
        {metric.label}
      </p>
    </div>
  );
}

export default function PortfolioDetail({ data }) {
  if (data === null) {
    return (
      <section className="container mx-auto px-6 py-12">
        <Fade direction="up" triggerOnce>
          <div className="flex flex-col w-full justify-center text-center">
            <img src={NotFound} alt="Not Found" className="sm:w-3/4 xl:w-5/12 mx-auto" />
            <h1 className="text-theme-blue text-2xl text-center mt-5">
              Case study not found
            </h1>
            <div className="flex justify-center">
              <Button
                href="/case-studies"
                type="link"
                className="inline-flex px-5 py-2 mt-5 bg-theme-blue text-white items-center rounded transition duration-300 hover:bg-gray-900"
              >
                See all case studies
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-6 lg:px-12 py-8">
      <Fade direction="up" triggerOnce>
        <Button
          type="link"
          href="/case-studies"
          className="inline-flex items-center text-sm text-gray-500 font-medium mb-6 hover:text-theme-purple"
        >
          <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          All case studies
        </Button>
      </Fade>

      {data.map((item) => (
        <div className="flex flex-col mt-4" key={item.id}>
          <Fade direction="up" triggerOnce>
            <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3 text-center">
              {item.industry || item.type}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-theme-blue text-center font-bold mb-4">
              {item.title}
            </h1>
            {item.summary && (
              <p className="font-light text-lg sm:text-xl text-gray-500 text-center max-w-3xl mx-auto mb-10">
                {item.summary}
              </p>
            )}
          </Fade>

          <Fade direction="up" triggerOnce delay={150}>
            <div className="flex justify-center mb-12">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full sm:w-4/5 max-w-4xl rounded-2xl shadow-2xl"
              />
            </div>
          </Fade>

          {item.metrics && item.metrics.length > 0 && (
            <Fade direction="up" triggerOnce delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-16">
                {item.metrics.map((m) => (
                  <MetricCard metric={m} key={m.label} />
                ))}
              </div>
            </Fade>
          )}

          <div className="max-w-4xl mx-auto w-full">
            {item.challenge && (
              <Fade direction="up" triggerOnce delay={250}>
                <div className="mb-10">
                  <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-4">
                    The challenge
                  </h2>
                  <p className="font-light text-lg text-gray-500 leading-relaxed">
                    {item.challenge}
                  </p>
                </div>
              </Fade>
            )}

            {item.approach && (
              <Fade direction="up" triggerOnce delay={300}>
                <div className="mb-10">
                  <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-4">
                    Our approach
                  </h2>
                  <p className="font-light text-lg text-gray-500 leading-relaxed">
                    {item.approach}
                  </p>
                </div>
              </Fade>
            )}

            {item.results && item.results.length > 0 && (
              <Fade direction="up" triggerOnce delay={350}>
                <div className="mb-10">
                  <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-4">
                    The results
                  </h2>
                  <ul className="space-y-3">
                    {item.results.map((r) => (
                      <li key={r} className="flex items-start text-gray-600 font-light text-lg">
                        <span className="text-theme-purple mr-3 mt-1 text-xl leading-none">✓</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Fade>
            )}

            <Fade direction="up" triggerOnce delay={400}>
              <div className="mb-10">
                <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-4">
                  What we did
                </h2>
                <div className="flex flex-wrap gap-3">
                  {item.responsibility.map((responsibility) => (
                    <div
                      key={responsibility}
                      className="px-5 py-2 text-theme-purple border border-theme-purple rounded-full text-sm"
                    >
                      {responsibility}
                    </div>
                  ))}
                </div>
              </div>
            </Fade>

            {item.stack && item.stack.length > 0 && (
              <Fade direction="up" triggerOnce delay={450}>
                <div className="mb-10">
                  <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-4">
                    Tech stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm font-light text-theme-blue bg-light-theme-purple bg-opacity-50 px-4 py-1.5 rounded-full border border-light-theme-purple"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Fade>
            )}

            <Fade direction="up" triggerOnce delay={500}>
              <p className="font-light italic text-gray-400 mt-12 text-sm">
                * Example case study used for illustration.
                <br />
                Original design reference:{' '}
                <Button type="link" href={item.credit} target="_blank" className="text-theme-purple hover:underline" isExternal>
                  {item.credit}
                </Button>
              </p>
            </Fade>
          </div>
        </div>
      ))}
    </section>
  );
}
