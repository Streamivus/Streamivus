/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';

const CAL_LINK = process.env.REACT_APP_CAL_LINK;

export default function BookingWidget() {
  if (!CAL_LINK) {
    return (
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <Fade direction="up" triggerOnce>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-light-theme-purple text-center max-w-2xl mx-auto">
            <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
              Book a Call
            </p>
            <h2 className="text-3xl sm:text-4xl text-theme-blue font-bold mb-4">
              Prefer to talk it through?
            </h2>
            <p className="text-gray-500 font-light leading-relaxed mb-6">
              Email us at info@streamivus.com and we&apos;ll schedule a 30-minute call
              within 24 hours. We&apos;ll bring questions, you bring context.
            </p>
            <Button
              href="mailto:info@streamivus.com"
              type="link"
              isExternal
              className="inline-flex items-center px-8 py-4 bg-theme-purple text-white rounded-lg hover:bg-dark-theme-purple shadow-xl transition duration-200"
            >
              Email to book a call
            </Button>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-6 lg:px-12 py-16">
      <Fade direction="up" triggerOnce>
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
            Book a Call
          </p>
          <h2 className="text-3xl sm:text-4xl text-theme-blue font-bold mb-3">
            Find a time that works.
          </h2>
          <p className="text-gray-500 font-light leading-relaxed">
            Pick a 30-minute slot below. Async-friendly: send an email if you&apos;d prefer.
          </p>
        </div>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-light-theme-purple overflow-hidden">
          <iframe
            src={CAL_LINK}
            title="Book a call with Streamivus"
            className="w-full"
            style={{ height: '720px', border: 0 }}
            loading="lazy"
          />
        </div>
      </Fade>
    </section>
  );
}
