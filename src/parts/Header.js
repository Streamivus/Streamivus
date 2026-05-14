/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Transition } from '@headlessui/react';
import { useLocation } from 'react-router-dom';

import Button from '../elements/Button';
import BrandIcon from './BrandIcon';
import { ServicesList } from '../json/servicesData';

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();
  const path = location.pathname;

  const linkBase = 'font-medium text-base xl:text-lg px-4 no-underline transition duration-200';
  const isActive = (target) => path === target || path.startsWith(`${target}/`);
  const linkClass = (target) => `${linkBase} ${isActive(target) ? 'text-theme-purple' : 'text-theme-blue hover:text-theme-purple'}`;

  return (
    <header className="header relative">
      <div className="flex justify-between px-4 lg:px-0">
        <BrandIcon />

        <button
          className="block text-theme-blue lg:hidden focus:outline-none"
          onClick={() => setIsCollapse(!isCollapse)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path className={`${isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            <path className={`${!isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <ul className="hidden tracking-wide items-center lg:flex flex-row mt-0">
        <li>
          <Button className={linkClass('/')} type="link" href="/">
            Home
          </Button>
        </li>

        <li
          className="relative"
          onMouseEnter={() => setOpenMenu('services')}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <Button className={linkClass('/services')} type="link" href="/services">
            Services
          </Button>
          {openMenu === 'services' && (
            <div className="absolute left-0 top-full pt-3 z-50">
              <div className="w-72 bg-white rounded-xl shadow-2xl border border-light-theme-purple py-3">
                {ServicesList.map((s) => (
                  <Button
                    key={s.slug}
                    type="link"
                    href={`/services/${s.slug}`}
                    className="block px-5 py-2.5 text-sm text-theme-blue font-light hover:bg-light-theme-purple hover:text-theme-purple transition duration-150"
                  >
                    {s.title}
                  </Button>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <Button
                    type="link"
                    href="/services"
                    className="block px-5 py-2 text-sm text-theme-purple font-medium hover:bg-light-theme-purple"
                  >
                    View all services →
                  </Button>
                </div>
              </div>
            </div>
          )}
        </li>

        <li
          className="relative"
          onMouseEnter={() => setOpenMenu('company')}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <Button className={linkClass('/about')} type="link" href="/about">
            Company
          </Button>
          {openMenu === 'company' && (
            <div className="absolute left-0 top-full pt-3 z-50">
              <div className="w-56 bg-white rounded-xl shadow-2xl border border-light-theme-purple py-3">
                <Button type="link" href="/about" className="block px-5 py-2.5 text-sm text-theme-blue font-light hover:bg-light-theme-purple hover:text-theme-purple">
                  About
                </Button>
                <Button type="link" href="/team" className="block px-5 py-2.5 text-sm text-theme-blue font-light hover:bg-light-theme-purple hover:text-theme-purple">
                  Team
                </Button>
                <Button type="link" href="/process" className="block px-5 py-2.5 text-sm text-theme-blue font-light hover:bg-light-theme-purple hover:text-theme-purple">
                  Process
                </Button>
                <Button type="link" href="/careers" className="block px-5 py-2.5 text-sm text-theme-blue font-light hover:bg-light-theme-purple hover:text-theme-purple">
                  Careers
                </Button>
              </div>
            </div>
          )}
        </li>

        <li>
          <Button className={linkClass('/case-studies')} type="link" href="/case-studies">
            Case Studies
          </Button>
        </li>

        <li>
          <Button className={linkClass('/industries')} type="link" href="/industries">
            Industries
          </Button>
        </li>

        <li>
          <Button className={linkClass('/contact')} type="link" href="/contact">
            Contact
          </Button>
        </li>

        <li>
          <Button
            className="font-medium text-base xl:text-lg mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
            type="link"
            href="/discuss-project"
          >
            Start a Project
          </Button>
        </li>
      </ul>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div>
          <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden left-0 right-0 max-h-screen overflow-y-auto">
            <li className="py-2 px-6 border-b border-gray-100">
              <Button className={`${path === '/' ? 'text-theme-purple' : ''} font-medium block w-full text-left`} type="link" href="/">
                Home
              </Button>
            </li>
            <li className="py-2 px-6 border-b border-gray-100">
              <Button className="font-medium block w-full text-left" type="link" href="/services">
                Services
              </Button>
            </li>
            <li className="py-2 px-6 border-b border-gray-100">
              <Button className="font-medium block w-full text-left" type="link" href="/about">
                About
              </Button>
            </li>
            <li className="py-2 px-6 border-b border-gray-100">
              <Button className="font-medium block w-full text-left" type="link" href="/team">
                Team
              </Button>
            </li>
            <li className="py-2 px-6 border-b border-gray-100">
              <Button className="font-medium block w-full text-left" type="link" href="/process">
                Process
              </Button>
            </li>
            <li className="py-2 px-6 border-b border-gray-100">
              <Button className="font-medium block w-full text-left" type="link" href="/case-studies">
                Case Studies
              </Button>
            </li>
            <li className="py-2 px-6 border-b border-gray-100">
              <Button className="font-medium block w-full text-left" type="link" href="/industries">
                Industries
              </Button>
            </li>
            <li className="py-2 px-6 border-b border-gray-100">
              <Button className="font-medium block w-full text-left" type="link" href="/careers">
                Careers
              </Button>
            </li>
            <li className="py-2 px-6 border-b border-gray-100">
              <Button className="font-medium block w-full text-left" type="link" href="/contact">
                Contact
              </Button>
            </li>
            <li className="mx-auto my-6">
              <Button
                className="font-bold mx-auto px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
                type="link"
                href="/discuss-project"
              >
                Start a Project
              </Button>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
}
