/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SITE_URL = 'https://www.streamivus.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export default function SEO({
  title = 'Streamivus | Digital Product Studio for Web, Mobile & AI',
  description = 'Streamivus is a founder-led digital product studio building modern web, mobile, AI, and cloud solutions for ambitious businesses worldwide.',
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = 'web development, mobile app development, UI UX design, AI development, SaaS development, cloud consulting, digital agency, Streamivus',
  jsonLd = null,
}) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes('Streamivus') ? title : `${title} | Streamivus`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Streamivus" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Streamivus" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  keywords: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  jsonLd: PropTypes.object,
};
