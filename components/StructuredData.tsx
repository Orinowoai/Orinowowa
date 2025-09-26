export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Orinowo",
    "alternateName": "Orinowo AI Music Studio",
    "description": "Luxury AI music creation suite with social gamification and investor-ready features.",
    "url": "https://orinowowa.vercel.app",
    "logo": "https://orinowowa.vercel.app/brand/orinowo-primary-logo.png",
    "image": "https://orinowowa.vercel.app/og.jpg",
    "sameAs": [
      "https://twitter.com/orinowo",
      "https://instagram.com/orinowo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@orinowo.com",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "service": [
      {
        "@type": "Service",
        "name": "AI Music Production",
        "description": "Create luxury-grade AI music with professional tools"
      },
      {
        "@type": "Service", 
        "name": "Film Scores",
        "description": "Original cinematic compositions for film and media"
      },
      {
        "@type": "Service",
        "name": "Runway Music",
        "description": "High-fashion runway soundtracks and event music"
      }
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Orinowo",
    "url": "https://orinowowa.vercel.app",
    "description": "Luxury AI music creation suite with social gamification and investor-ready features.",
    "publisher": {
      "@type": "Organization",
      "name": "Orinowo"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://orinowowa.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://orinowowa.vercel.app"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Plans",
        "item": "https://orinowowa.vercel.app/plans"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Leaderboard",
        "item": "https://orinowowa.vercel.app/leaderboard"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Blog",
        "item": "https://orinowowa.vercel.app/blog"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://orinowowa.vercel.app/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData)
        }}
      />
    </>
  );
}