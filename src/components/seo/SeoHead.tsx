import React from "react";
import { Helmet } from "react-helmet";

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

const SeoHead = ({
  title = "Software Developer Portfolio | Web Development Expert",
  description = "Professional portfolio of a backend developer specializing in Node.js, databases, and API development with frontend skills in React and modern web technologies.",
  keywords = "backend developer, web development, Laravel, API development, database design, full-stack developer",
  ogImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
  ogUrl = "https://tender-hugle3-tdylr.dev-2.tempolabs.ai",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl = "https://tender-hugle3-tdylr.dev-2.tempolabs.ai",
  structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Backend Developer",
    url: "https://tender-hugle3-tdylr.dev-2.tempolabs.ai",
    jobTitle: "Backend Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Corporate",
    },
    sameAs: [
      "https://github.com/bienjrmendoza/",
      "https://www.linkedin.com/in/bienvenido-jr-mendoza-52828824a/",
    ],
    knowsAbout: [
      "Laravel",
      "React",
      "MySQL",
      "Git",
      "API Development",
      "TypeScript",
    ],
  },
}: SeoHeadProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Responsive Meta Tag */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Additional SEO-friendly Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Software Developer" />
      <meta name="language" content="English" />
    </Helmet>
  );
};

export default SeoHead;
