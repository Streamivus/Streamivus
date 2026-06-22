/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, A11y, Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonial({ data }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <Fade direction="up" triggerOnce>
            <h2 className="text-4xl sm:text-5xl text-theme-blue font-bold tracking-tight mb-4">
              Testimonials
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce delay={100}>
            <p className="font-light text-lg text-gray-500 max-w-2xl mx-auto">
              What our clients say about working with us.
            </p>
          </Fade>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation={{ prevEl: '.testimonial-prev', nextEl: '.testimonial-next' }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="testimonialSwiper pb-12"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 border border-gray-100 px-6 sm:px-10 py-8 sm:py-10 mx-2 sm:mx-4 transition-all duration-300">
                  <svg
                    aria-hidden
                    className="absolute top-5 left-6 w-9 h-9 text-light-theme-purple"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.17 6C4.32 7.59 3 10.33 3 13.7V18h6v-6H6c0-1.92.93-3.55 3-4.43L7.17 6zm9 0c-2.85 1.59-4.17 4.33-4.17 7.7V18h6v-6h-3c0-1.92.93-3.55 3-4.43L16.17 6z" />
                  </svg>

                  <div className="flex items-center gap-1 mb-4 pt-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-7">
                    &ldquo;
                    {item.testimoni}
                    &rdquo;
                  </p>

                  <div className="flex items-center pt-5 border-t border-gray-100">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-light-theme-purple to-theme-purple/30 flex items-center justify-center">
                      <span className="text-sm font-semibold text-theme-purple tracking-wider">
                        {item.initials}
                      </span>
                    </div>
                    <div className="ml-4">
                      <p className="text-theme-blue font-semibold text-base sm:text-lg leading-tight">
                        {item.name}
                      </p>
                      <p className="text-gray-500 text-sm font-light mt-0.5">
                        {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Previous testimonial"
            className="testimonial-prev hidden sm:flex absolute left-0 sm:-left-4 lg:-left-14 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white border border-gray-200 text-theme-blue shadow-md hover:shadow-xl hover:border-theme-purple hover:text-theme-purple transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            className="testimonial-next hidden sm:flex absolute right-0 sm:-right-4 lg:-right-14 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white border border-gray-200 text-theme-blue shadow-md hover:shadow-xl hover:border-theme-purple hover:text-theme-purple transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
