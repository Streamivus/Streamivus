/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React, { useState, useMemo } from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';
import { Jobs } from '../json/careersData';

export default function JobList() {
  const [dept, setDept] = useState('All');
  const [location, setLocation] = useState('All');

  const departments = useMemo(
    () => ['All', ...Array.from(new Set(Jobs.map((j) => j.department)))],
    [],
  );
  const locations = useMemo(
    () => ['All', ...Array.from(new Set(Jobs.map((j) => j.location)))],
    [],
  );

  const filteredJobs = Jobs.filter(
    (j) => (dept === 'All' || j.department === dept)
      && (location === 'All' || j.location === location),
  );

  return (
    <section id="open-roles" className="container mx-auto px-6 lg:px-12 py-20">
      <div className="text-center mb-10">
        <Fade direction="up" triggerOnce>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
            Open Roles
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-theme-blue font-bold">
            {`${Jobs.length} ${Jobs.length === 1 ? 'role' : 'roles'} open right now`}
          </h2>
        </Fade>
      </div>

      <Fade direction="up" triggerOnce delay={200}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 max-w-3xl mx-auto">
          <div className="flex-1">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="dept-filter" className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-1">
              Department
              <select
                id="dept-filter"
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                className="mt-1 w-full p-3 text-base font-light text-theme-blue rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-theme-purple bg-white"
              >
                {departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex-1">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="loc-filter" className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-1">
              Location
              <select
                id="loc-filter"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 w-full p-3 text-base font-light text-theme-blue rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-theme-purple bg-white"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </Fade>

      <div className="space-y-4 max-w-5xl mx-auto">
        {filteredJobs.length === 0 && (
          <Fade direction="up" triggerOnce>
            <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-lg text-gray-500 font-light mb-3">
                No matching roles right now.
              </p>
              <Button
                href="#open-application"
                type="link"
                className="text-theme-purple font-medium hover:underline"
              >
                Send an open application →
              </Button>
            </div>
          </Fade>
        )}

        {filteredJobs.map((job, idx) => (
          <Fade direction="up" triggerOnce delay={idx * 80} key={job.id}>
            <Button
              href={`/careers/${job.id}`}
              type="link"
              className="block bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-100 hover:border-theme-purple hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider text-theme-purple font-semibold">
                      {job.department}
                    </span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                      {job.location}
                    </span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl text-theme-blue font-bold mb-1">
                    {job.title}
                  </h3>
                  <p className="text-gray-500 font-light text-base leading-relaxed">
                    {job.summary}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-theme-purple font-medium whitespace-nowrap">
                  Apply
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Button>
          </Fade>
        ))}
      </div>
    </section>
  );
}
