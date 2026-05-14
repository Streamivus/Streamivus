/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';

import { Fade } from 'react-awesome-reveal';

import Button from 'elements/Button';

const FILTERS = ['All', 'Web', 'Mobile'];

export default function AllPortfolio({ data }) {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return data;
    if (filter === 'Mobile') return data.filter((d) => /mobile/i.test(d.type));
    if (filter === 'Web') return data.filter((d) => /web/i.test(d.type));
    return data;
  }, [filter, data]);

  return (
    <section className="container mx-auto px-6 lg:px-12 py-8">
      <Fade direction="up" triggerOnce>
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 text-base font-medium rounded-full border transition duration-300 focus:outline-none ${
                filter === f
                  ? 'bg-theme-purple text-white border-theme-purple'
                  : 'text-theme-purple border-theme-purple hover:bg-theme-purple hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item, index) => (
          <Fade direction="up" triggerOnce delay={index * 80} key={item.id}>
            <Button
              type="link"
              href={`/case-studies/${item.id}`}
              className="block group rounded-2xl shadow-xl bg-white border border-gray-100 hover:border-light-theme-purple hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full transform transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="py-5 px-6">
                {item.industry && (
                  <p className="text-xs uppercase tracking-wider text-theme-purple font-semibold mb-2">
                    {item.industry}
                  </p>
                )}
                <h2 className="text-theme-blue text-xl font-bold mb-1">
                  {item.title}
                </h2>
                <p className="font-light text-gray-500 text-sm leading-relaxed">
                  {item.summary || item.type}
                </p>

                {item.metrics && item.metrics.length > 0 && (
                  <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
                    {item.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <p className="text-lg font-bold text-theme-purple">{m.value}</p>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Button>
          </Fade>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 font-light py-12">
          No case studies in this category yet.
        </p>
      )}
    </section>
  );
}
