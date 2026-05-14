/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from 'parts/Header';
import BlogPost from 'parts/BlogPost';
import Footer from 'parts/Footer';
import SEO from 'parts/SEO';

import { BlogPosts } from 'json/blogData';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BlogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const jsonLd = post
    ? {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Streamivus',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.streamivus.com/logo192.png',
        },
      },
      datePublished: post.publishedOn,
      keywords: post.tags.join(', '),
      mainEntityOfPage: `https://www.streamivus.com/blog/${post.slug}`,
    }
    : null;

  return (
    <>
      <SEO
        title={post ? post.title : 'Post not found'}
        description={post ? post.excerpt : 'Article on the Streamivus blog.'}
        path={`/blog/${slug}`}
        type="article"
        jsonLd={jsonLd}
      />
      <Header />
      <BlogPost post={post} />
      <Footer />
    </>
  );
}
