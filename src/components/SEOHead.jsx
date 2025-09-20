import { useEffect } from 'react';

export const SEOHead = ({ 
  title = "Royalty Free Beats - High Quality Beats for Licensing | royaltyfreebeats.io",
  description = "Discover high-quality royalty free beats for your music projects. Professional beats available for instant licensing from royaltyfreebeats.io",
  keywords = "royalty free beats, beats for sale, hip hop beats, rap beats, music licensing, instrumental beats, producer beats",
  ogImage = "/og-image.jpg",
  canonicalUrl = "https://royaltyfreebeats.io"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    
    // Add JSON-LD structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MusicStore",
      "name": "RoyaltyFreeBeats.io",
      "description": description,
      "url": canonicalUrl,
      "logo": `${canonicalUrl}/logo.png`,
      "sameAs": [
        "https://airbit.com/profile/733519"
      ],
      "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "category": "Music",
        "priceCurrency": "USD",
        "lowPrice": "30",
        "highPrice": "100"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${canonicalUrl}/#beats`,
        "query-input": "required name=search_term_string"
      }
    });
    document.head.appendChild(script);
    
    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null; // This is a head-only component
};

export default SEOHead;