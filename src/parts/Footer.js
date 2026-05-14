/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import React, { useState } from "react";
import * as emailjs from "@emailjs/browser";

import BrandIcon from "./BrandIcon";
import Button from "../elements/Button";
import { Company } from "../json/companyData";
import { ServicesList } from "../json/servicesData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    emailjs
      .send(
        "service_h4gtndg",
        "template_a9tvs7a",
        {
          from_name: `Newsletter signup: ${email}`,
          to_name: "Streamivus",
          message: `New newsletter subscriber: ${email}`,
        },
        "user_csqIxzN5mKsl1yw4ffJzV",
      )
      .then(
        () => {
          setStatus("success");
          setEmail("");
          setTimeout(() => setStatus("idle"), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        },
      );
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 mt-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          <div className="lg:col-span-2 pr-4">
            <BrandIcon />
            <p className="text-base text-gray-500 font-light mt-4 mb-6 leading-relaxed">
              {Company.shortDescription}
            </p>

            <form onSubmit={onNewsletterSubmit} className="mb-5">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label
                htmlFor="newsletter"
                className="block text-sm font-medium text-theme-blue mb-2"
              >
                Get insights in your inbox
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mt-2">
                  <input
                    id="newsletter"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 px-4 py-3 text-base font-light text-theme-blue rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-theme-purple"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-5 py-3 bg-theme-purple text-white text-base rounded hover:bg-dark-theme-purple transition duration-200 disabled:opacity-60"
                  >
                    {status === "loading" ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              </label>
              {status === "success" && (
                <p className="text-sm text-green-600 mt-2">
                  Thanks! We&apos;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 mt-2">
                  Couldn&apos;t subscribe right now. Email us at info@streamivus.com.
                </p>
              )}
            </form>

            <div className="flex gap-4 mt-4">
              <a
                href={Company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 shadow-sm hover:text-theme-purple hover:border-theme-purple hover:bg-light-theme-purple hover:shadow-[0_4px_14px_rgba(167,139,250,0.35)] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
              >
                <svg aria-hidden className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.265.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.849c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.141 0-3.51.012-4.745.068-1.014.046-1.564.215-1.93.357-.485.189-.832.413-1.196.777-.364.364-.588.711-.777 1.196-.142.366-.311.916-.357 1.93C2.939 8.49 2.927 8.859 2.927 12s.012 3.51.068 4.745c.046 1.014.215 1.564.357 1.93.189.485.413.832.777 1.196.364.364.711.588 1.196.777.366.142.916.311 1.93.357 1.235.056 1.604.068 4.745.068 3.141 0 3.51-.012 4.745-.068 1.014-.046 1.564-.215 1.93-.357.485-.189.832-.413 1.196-.777.364-.364.588-.711.777-1.196.142-.366.311-.916.357-1.93.056-1.235.068-1.604.068-4.745s-.012-3.51-.068-4.745c-.046-1.014-.215-1.564-.357-1.93-.189-.485-.413-.832-.777-1.196-.364-.364-.711-.588-1.196-.777-.366-.142-.916-.311-1.93-.357C15.51 3.977 15.141 3.965 12 3.965zm0 3.063A4.972 4.972 0 1 1 12 16.97a4.972 4.972 0 0 1 0-9.942zm0 8.205A3.233 3.233 0 1 0 12 8.764a3.233 3.233 0 0 0 0 6.469zm6.406-8.328a1.163 1.163 0 1 1-2.326 0 1.163 1.163 0 0 1 2.326 0z" />
                </svg>
              </a>
              <a
                href={Company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 shadow-sm hover:text-theme-purple hover:border-theme-purple hover:bg-light-theme-purple hover:shadow-[0_4px_14px_rgba(167,139,250,0.35)] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
              >
                <svg aria-hidden className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.778 13.019H3.555V9h3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={Company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 shadow-sm hover:text-theme-purple hover:border-theme-purple hover:bg-light-theme-purple hover:shadow-[0_4px_14px_rgba(167,139,250,0.35)] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-theme-purple/30"
              >
                <svg aria-hidden className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-theme-blue uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Button href="/about" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  About
                </Button>
              </li>
              <li>
                <Button href="/team" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  Team
                </Button>
              </li>
              <li>
                <Button href="/careers" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  Careers
                </Button>
              </li>
              <li>
                <Button href="/blog" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  Blog
                </Button>
              </li>
              <li>
                <Button href="/contact" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  Contact
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-theme-blue uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {ServicesList.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Button href={`/services/${s.slug}`} type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                    {s.title}
                  </Button>
                </li>
              ))}
              <li>
                <Button href="/services" type="link" className="text-base text-theme-purple font-medium hover:underline">
                  All services →
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-theme-blue uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3 mb-8">
              <li>
                <Button href="/case-studies" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  Case Studies
                </Button>
              </li>
              <li>
                <Button href="/industries" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  Industries
                </Button>
              </li>
              <li>
                <Button href="/process" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  Our Process
                </Button>
              </li>
              <li>
                <Button href="/resources" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  Free Resources
                </Button>
              </li>
              <li>
                <Button href="/partners" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  Tech Stack
                </Button>
              </li>
              <li>
                <Button href="/press" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  Press Kit
                </Button>
              </li>
              <li>
                <Button href="/faq" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  FAQ
                </Button>
              </li>
            </ul>

            <h4 className="text-sm font-semibold text-theme-blue uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Button href="/privacy-policy" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  Privacy Policy
                </Button>
              </li>
              <li>
                <Button href="/terms-of-service" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  Terms of Service
                </Button>
              </li>
              <li>
                <Button href="/cookie-policy" type="link" className="text-base text-gray-500 font-light hover:text-theme-purple">
                  Cookie Policy
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-500 font-light">
          <div>
            <p className="font-medium text-theme-blue mb-1">Visit us</p>
            <p>{Company.address.line1}</p>
            <p>{Company.address.line2}</p>
            <p>{Company.address.country}</p>
          </div>
          <div>
            <p className="font-medium text-theme-blue mb-1">Get in touch</p>
            <p>
              <a href={`mailto:${Company.email}`} className="hover:text-theme-purple">
                {Company.email}
              </a>
            </p>
            <p>
              <a href={`mailto:${Company.careersEmail}`} className="hover:text-theme-purple">
                {Company.careersEmail}
              </a>
            </p>
            <p>{Company.phone}</p>
          </div>
          <div>
            <p className="font-medium text-theme-blue mb-1">Hours</p>
            <p>{Company.hours}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 font-light">
          <p>
            {`© ${new Date().getFullYear()} ${Company.legalName}. All rights reserved.`}
          </p>
          <p className="mt-2 sm:mt-0">
            {Company.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
