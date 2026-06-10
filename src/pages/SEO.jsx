import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://piimtedtech.in/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://piimtedtech.in/og-image.jpg" />

      {/* Schema Markup */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "PIIMT EdTech",
          "url": "https://piimtedtech.in",
          "logo": "https://piimtedtech.in/logo.png",
          "description": "Best IT Training Institute in Jaipur & Sikar offering React JS, Python, Laravel, Web Development courses with 100% placement assistance.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.facebook.com/piimtedtech",
            "https://www.instagram.com/piimtedtech"
          ]
        }
      `}</script>
    </Helmet>
  );
};

export default SEO;