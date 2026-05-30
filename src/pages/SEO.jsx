import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  url
}) => {

  return (
    <Helmet>
      <title>PIIMT EdTech | IT Training Institute India — 100+ Courses</title>

      <meta
        name="description"
        content="PIIMT EdTech is a trusted IT training institute in India offering 100+ certified, job-oriented courses with live projects and placement support."
      />

      <meta
        name="keywords"
        content="IT training institute India, computer courses India, ISO certified IT institute, job oriented IT courses"
      />

      <link rel="canonical" href="https://piimtedtech.in/" />

      <meta property="og:title" content="PIIMT EdTech" />
      <meta
        property="og:description"
        content="100+ certified IT courses with placement support."
      />
      <meta property="og:url" content="https://piimtedtech.in/" />
      <meta property="og:type" content="website" />

      {/* Primary SEO */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={url}
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:image"
        content="https://piimtedtech.in/logo.png"
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content="https://piimtedtech.in/logo.png"
      />

    </Helmet>
  );
};

export default SEO;