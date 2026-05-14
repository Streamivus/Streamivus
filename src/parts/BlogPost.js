/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';
import { BlogPosts } from '../json/blogData';

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl text-theme-blue font-bold mb-4">Post not found</h1>
        <Button
          href="/blog"
          type="link"
          className="inline-block px-6 py-3 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple"
        >
          See all posts
        </Button>
      </section>
    );
  }

  const related = BlogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="container mx-auto px-6 lg:px-12 pt-12 pb-12 max-w-3xl">
        <Fade direction="up" triggerOnce>
          <Button
            href="/blog"
            type="link"
            className="inline-flex items-center text-sm text-gray-500 font-medium mb-6 hover:text-theme-purple"
          >
            <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All posts
          </Button>
        </Fade>

        <Fade direction="up" triggerOnce delay={100}>
          <p className="text-sm tracking-widest uppercase text-theme-purple font-semibold mb-3">
            {post.category}
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={150}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-theme-blue font-bold leading-tight mb-5">
            {post.title}
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={200}>
          <div className="flex flex-wrap items-center text-sm text-gray-400 font-light mb-8">
            <span className="text-theme-blue font-medium">{post.author}</span>
            <span className="mx-2">·</span>
            <span>{post.publishedOn}</span>
            <span className="mx-2">·</span>
            <span>{post.readTime}</span>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce delay={250}>
          <div className="bg-gradient-to-br from-theme-purple to-dark-theme-purple flex items-center justify-center h-64 sm:h-80 rounded-2xl mb-12 shadow-2xl">
            <span className="text-8xl sm:text-9xl">{post.coverEmoji}</span>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce delay={300}>
          <div className="prose-content">
            {post.content.map((block, idx) => {
              if (block.type === 'heading') {
                return (
                  <h2
                    // eslint-disable-next-line react/no-array-index-key
                    key={`h-${idx}`}
                    className="text-2xl sm:text-3xl text-theme-blue font-bold mt-10 mb-4"
                  >
                    {block.text}
                  </h2>
                );
              }
              return (
                <p
                  // eslint-disable-next-line react/no-array-index-key
                  key={`p-${idx}`}
                  className="text-lg text-gray-600 font-light leading-relaxed mb-5"
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </Fade>

        <Fade direction="up" triggerOnce delay={400}>
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-light text-theme-blue bg-light-theme-purple bg-opacity-50 px-4 py-1.5 rounded-full border border-light-theme-purple"
              >
                #{tag}
              </span>
            ))}
          </div>
        </Fade>
      </article>

      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <Fade direction="up" triggerOnce>
            <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-8 text-center">
              Keep reading
            </h2>
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {related.map((p, idx) => (
              <Fade direction="up" triggerOnce delay={idx * 100} key={p.slug}>
                <Button
                  type="link"
                  href={`/blog/${p.slug}`}
                  className="block bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-light-theme-purple hover:shadow-xl transition duration-300"
                >
                  <span className="text-3xl mb-3 inline-block">{p.coverEmoji}</span>
                  <h3 className="text-lg text-theme-blue font-semibold mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light line-clamp-2">
                    {p.excerpt}
                  </p>
                </Button>
              </Fade>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
