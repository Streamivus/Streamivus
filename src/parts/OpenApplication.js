/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import ApplicationForm from './ApplicationForm';

export default function OpenApplication() {
  return (
    <section id="open-application" className="bg-gray-50 py-20 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <Fade direction="up" triggerOnce>
            <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
              Don&apos;t see a match?
            </p>
          </Fade>
          <Fade direction="up" triggerOnce delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-theme-blue font-bold mb-4">
              Send an open application
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce delay={200}>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
              We&apos;re always interested in great engineers, designers, and operators.
              Tell us about yourself — we&apos;ll keep you in mind as new roles open up.
            </p>
          </Fade>
        </div>

        <ApplicationForm jobTitle="Open application" jobId="open" />
      </div>
    </section>
  );
}
