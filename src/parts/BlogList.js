/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';
import { BlogPosts, BlogCategories } from '../json/blogData';

export default function BlogList() {
  const [category, setCategory] = useState('All');

  const filtered = category === 'All'
    ? BlogPosts
    : BlogPosts.filter((p) => p.category === category);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <section className="container mx-auto px-6 lg:px-12 pt-12 pb-8 text-center">
        <Fade direction="up" triggerOnce>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-4">
            Insights
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-theme-blue font-bold leading-tight mb-6 max-w-3xl mx-auto">
            Notes from the studio.
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={200}>
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            Practical writing on engineering, design, AI, and building software
            that ships. No clickbait, no listicles.
          </p>
        </Fade>
      </section>

      <section className="container mx-auto px-6 lg:px-12 pb-8">
        <Fade direction="up" triggerOnce>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {BlogCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`px-4 sm:px-5 py-2 text-sm font-medium rounded-full border transition duration-300 focus:outline-none ${
                  category === c
                    ? 'bg-theme-purple text-white border-theme-purple'
                    : 'text-theme-purple border-theme-purple hover:bg-theme-purple hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Fade>
      </section>

      <section className="container mx-auto px-6 lg:px-12 py-12">
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 font-light py-12">
            No posts in this category yet.
          </p>
        )}

        {featured && (
          <Fade direction="up" triggerOnce>
            <Button
              type="link"
              href={`/blog/${featured.slug}`}
              className="block bg-white rounded-3xl border border-gray-100 hover:border-light-theme-purple shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden mb-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-theme-purple to-dark-theme-purple flex items-center justify-center min-h-64 lg:min-h-96 p-12">
                  <span className="text-8xl sm:text-9xl">{featured.coverEmoji}</span>
                </div>
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <p className="text-xs tracking-widest uppercase text-theme-purple font-semibold mb-3">
                    Featured · {featured.category}
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-theme-blue font-bold mb-4 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-5">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-400 font-light">
                    <span>{featured.author}</span>
                    <span className="mx-2">·</span>
                    <span>{featured.publishedOn}</span>
                    <span className="mx-2">·</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </div>
            </Button>
          </Fade>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, idx) => (
            <Fade direction="up" triggerOnce delay={idx * 80} key={post.slug}>
              <Button
                type="link"
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl border border-gray-100 hover:border-light-theme-purple shadow-md hover:shadow-xl transition duration-300 overflow-hidden h-full"
              >
                <div className="bg-gradient-to-br from-light-theme-purple to-theme-purple flex items-center justify-center h-48 p-8">
                  <span className="text-6xl">{post.coverEmoji}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-widest uppercase text-theme-purple font-semibold mb-2">
                    {post.category}
                  </p>
                  <h3 className="text-lg sm:text-xl text-theme-blue font-bold mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-400 font-light">
                    <span>{post.publishedOn}</span>
                    <span className="mx-2">·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Button>
            </Fade>
          ))}
        </div>
      </section>
    </>
  );
}
