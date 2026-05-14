/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';
import ApplicationForm from './ApplicationForm';

function Section({ title, items }) {
  if (!items || items.length === 0) return null;
  return (
    <Fade direction="up" triggerOnce>
      <div className="mb-10">
        <h2 className="text-2xl text-theme-blue font-bold mb-4">{title}</h2>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start text-gray-600 font-light text-lg">
              <span className="text-theme-purple mr-3 mt-1.5 text-lg leading-none">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Fade>
  );
}

export default function JobDetail({ job }) {
  if (!job) {
    return (
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl text-theme-blue font-bold mb-4">Role not found</h1>
        <p className="text-gray-500 mb-6">
          This role may have been closed. Check our other openings.
        </p>
        <Button
          href="/careers"
          type="link"
          className="inline-block px-6 py-3 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple"
        >
          See all open roles
        </Button>
      </section>
    );
  }

  return (
    <>
      <section className="container mx-auto px-6 lg:px-12 pt-12 pb-8">
        <Fade direction="up" triggerOnce>
          <Button
            href="/careers"
            type="link"
            className="inline-flex items-center text-sm text-gray-500 font-medium mb-6 hover:text-theme-purple"
          >
            <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All open roles
          </Button>
        </Fade>

        <Fade direction="up" triggerOnce delay={100}>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
            {job.department}
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={150}>
          <h1 className="text-4xl sm:text-5xl text-theme-blue font-bold leading-tight mb-5">
            {job.title}
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={200}>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
            <span className="text-sm bg-light-theme-purple bg-opacity-60 text-theme-blue px-4 py-1.5 rounded-full">
              {job.location}
            </span>
            <span className="text-sm bg-light-theme-purple bg-opacity-60 text-theme-blue px-4 py-1.5 rounded-full">
              {job.type}
            </span>
            <span className="text-sm bg-light-theme-purple bg-opacity-60 text-theme-blue px-4 py-1.5 rounded-full">
              {job.experience}
            </span>
            <span className="text-sm text-gray-400">
              Posted {job.postedOn}
            </span>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce delay={250}>
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-3xl mb-10">
            {job.summary}
          </p>
        </Fade>

        <Fade direction="up" triggerOnce delay={300}>
          <Button
            href="#apply"
            type="link"
            className="inline-flex items-center px-8 py-4 bg-theme-purple text-white rounded-lg hover:bg-dark-theme-purple shadow-xl transition duration-200 mb-12"
          >
            Apply now
            <svg className="ml-2 w-5 h-5 animate-bounce-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </Fade>
      </section>

      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <Section title="What you'll do" items={job.responsibilities} />
          <Section title="What we look for" items={job.requirements} />
          <Section title="Nice to have" items={job.niceToHave} />
        </div>
      </section>

      <section id="apply" className="container mx-auto px-6 lg:px-12 py-16">
        <ApplicationForm jobTitle={job.title} jobId={job.id} />
      </section>
    </>
  );
}
