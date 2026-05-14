/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

export default function AllTeam({ data }) {
  return (
    <section className="container mx-auto px-5 sm:px-12 relative">
      <div className="text-center mb-12 sm:mb-16">
        <Fade direction="up" triggerOnce>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-medium mb-3">
            Leadership
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={150}>
          <h2 className="text-4xl sm:text-5xl text-theme-blue font-bold mb-4">
            Engineering meets design
          </h2>
        </Fade>
        <Fade direction="up" triggerOnce delay={300}>
          <p className="font-light text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Streamivus is led by senior founders and backed by a growing network
            of engineers, designers, and specialists — so every decision, from
            architecture to pixel, is made by people who&apos;ve shipped it before.
          </p>
        </Fade>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
        {
          data.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fade direction="up" triggerOnce delay={200 * index} key={index}>
              <div className="relative flex flex-col items-center text-center bg-white rounded-3xl shadow-xl border border-light-theme-purple overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl h-full">
                <div
                  className="w-full h-24 bg-gradient-to-r from-theme-purple to-dark-theme-purple"
                  aria-hidden="true"
                />

                <div className="-mt-16 mb-4 relative">
                  <div
                    className="absolute inset-1 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-full blur-md opacity-40"
                    aria-hidden="true"
                  />
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>

                <div className="px-6 sm:px-8 pb-8 w-full flex flex-col items-center flex-1">
                  <h3 className="text-theme-blue text-2xl sm:text-3xl font-bold mb-1">
                    {item.name}
                  </h3>
                  <p className="font-light text-theme-purple text-sm sm:text-base mb-5 tracking-wide">
                    {item.position}
                  </p>

                  {item.bio && (
                    <p className="font-light text-gray-500 text-base leading-relaxed mb-7 max-w-md">
                      {item.bio}
                    </p>
                  )}

                  {item.expertise && item.expertise.length > 0 && (
                    <div className="w-full mt-auto">
                      <p className="text-xs tracking-widest uppercase text-gray-400 font-medium mb-4">
                        Specialties
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {item.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs sm:text-sm font-light text-theme-blue bg-light-theme-purple bg-opacity-50 px-3 py-1.5 rounded-full border border-light-theme-purple transition duration-200 hover:bg-opacity-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Fade>
          ))
        }
      </div>
    </section>
  );
}
