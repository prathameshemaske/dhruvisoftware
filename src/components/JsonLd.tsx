import React from "react";

interface JsonLdProps {
  data: Record<string, any> | Array<Record<string, any>>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dhruvi Software Solutions",
  url: "https://dhruvisoftwaresolutions.com",
  logo: "https://dhruvisoftwaresolutions.com/logo.png",
  description:
    "Software product engineering and custom software development company. Builders of Neojan and Talentgate platforms.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@dhruvisoftwaresolutions.com",
    contactType: "customer service",
  },
  sameAs: [
    "https://linkedin.com/company/dhruvi-software-solutions",
    "https://twitter.com/dhruvisoftware",
    "https://github.com/prathameshemaske/dhruvisoftware",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dhruvi Software Solutions",
  url: "https://dhruvisoftwaresolutions.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://dhruvisoftwaresolutions.com/insights?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
