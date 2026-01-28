/**
 * SEO Module
 * Handles SEO improvements and structured data
 */

/**
 * Add structured data (JSON-LD) for better SEO
 */
export const initStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "[Jouw Naam]",
    "jobTitle": "Full-Stack Software Developer",
    "url": "https://jouwdomein.nl",
    "sameAs": [
      "https://github.com/",
      "https://www.linkedin.com/in/",
      "https://www.instagram.com/",
      "https://twitter.com/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nederland",
      "addressCountry": "NL"
    },
    "email": "jouw@email.com",
    "knowsAbout": [
      "Web Development",
      "Mobile App Development",
      "Full-Stack Development",
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Node.js",
      "PHP",
      "MySQL"
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

/**
 * Initialize SEO enhancements
 */
export const initSEO = () => {
  initStructuredData();
};
