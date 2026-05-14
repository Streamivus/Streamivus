/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function LegalLayout({
  title, lastUpdated, intro, sections,
}) {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-12 max-w-4xl">
      <Fade direction="up" triggerOnce>
        <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
          Legal
        </p>
      </Fade>
      <Fade direction="up" triggerOnce delay={100}>
        <h1 className="text-4xl sm:text-5xl text-theme-blue font-bold mb-3">
          {title}
        </h1>
      </Fade>
      <Fade direction="up" triggerOnce delay={150}>
        <p className="text-sm text-gray-400 mb-8">
          Last updated: {lastUpdated}
        </p>
      </Fade>

      {intro && (
        <Fade direction="up" triggerOnce delay={200}>
          <p className="text-lg text-gray-500 font-light leading-relaxed mb-10">
            {intro}
          </p>
        </Fade>
      )}

      <div className="space-y-10">
        {sections.map((section, idx) => (
          <Fade direction="up" triggerOnce delay={50 * idx} key={section.heading}>
            <div>
              <h2 className="text-2xl text-theme-blue font-bold mb-4">
                {idx + 1}. {section.heading}
              </h2>
              {section.body.map((p) => (
                <p key={p.slice(0, 40)} className="text-base text-gray-600 font-light leading-relaxed mb-3">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="text-base text-gray-600 font-light">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
