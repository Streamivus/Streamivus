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
              <Button
                href={Company.social.instagram}
                type="link"
                target="_blank"
                isExternal
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:text-theme-purple hover:border-theme-purple transition duration-200"
              >
                <span className="text-sm font-medium">Ig</span>
              </Button>
              <Button
                href={Company.social.linkedin}
                type="link"
                target="_blank"
                isExternal
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:text-theme-purple hover:border-theme-purple transition duration-200"
              >
                <span className="text-sm font-medium">In</span>
              </Button>
              <Button
                href={Company.social.twitter}
                type="link"
                target="_blank"
                isExternal
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:text-theme-purple hover:border-theme-purple transition duration-200"
              >
                <span className="text-sm font-medium">X</span>
              </Button>
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
