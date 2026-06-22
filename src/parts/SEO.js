/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

import {
  absoluteUrl,
  buildPageTitle,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  DEFAULT_SEO,
  SITE_NAME,
  SITE_URL,
} from '../json/seoData';

function normalizeJsonLd(jsonLd) {
  if (!jsonLd) return [];
  return Array.isArray(jsonLd) ? jsonLd : [jsonLd];
}

export default function SEO({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  keywords = DEFAULT_KEYWORDS,
  jsonLd = null,
  noindex = false,
}) {
  const url = absoluteUrl(path);
  const fullTitle = buildPageTitle(title);
  const robots = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';
  const schemas = normalizeJsonLd(jsonLd);

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Rajkot, Gujarat, India" />
      <link rel="canonical" href={url} />

      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${SITE_NAME} — digital product studio`} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Streamivus" />
      <meta name="twitter:creator" content="@Streamivus" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} — digital product studio`} />

      {schemas.map((schema) => (
        <script key={schema['@id'] || schema['@type']} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
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
  jsonLd: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  noindex: PropTypes.bool,
};

export { SITE_URL, DEFAULT_OG_IMAGE };
