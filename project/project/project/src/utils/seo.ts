// SEO optimization utilities

interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

// Update page metadata
export const updateSEOMetadata = (metadata: SEOMetadata) => {
  // Update title
  document.title = metadata.title;
  
  // Update meta description
  updateMetaTag('description', metadata.description);
  
  // Update keywords
  updateMetaTag('keywords', metadata.keywords.join(', '));
  
  // Update Open Graph tags
  updateMetaTag('og:title', metadata.ogTitle || metadata.title, 'property');
  updateMetaTag('og:description', metadata.ogDescription || metadata.description, 'property');
  updateMetaTag('og:type', 'website', 'property');
  updateMetaTag('og:url', window.location.href, 'property');
  
  if (metadata.ogImage) {
    updateMetaTag('og:image', metadata.ogImage, 'property');
  }
  
  // Update Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', metadata.ogTitle || metadata.title);
  updateMetaTag('twitter:description', metadata.ogDescription || metadata.description);
  
  // Update canonical URL
  if (metadata.canonicalUrl) {
    updateLinkTag('canonical', metadata.canonicalUrl);
  }
  
  // Add structured data
  if (metadata.structuredData) {
    addStructuredData(metadata.structuredData);
  }
};

// Helper function to update meta tags
const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.content = content;
};

// Helper function to update link tags
const updateLinkTag = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  
  element.href = href;
};

// Add structured data (JSON-LD)
const addStructuredData = (data: Record<string, any>) => {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Generate structured data for services
export const generateServiceStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "FreelanceHub - Professional Design & Writing Services",
    "description": "Affordable freelance services for students and small businesses in India. Logo design, web design, content writing, and more.",
    "url": window.location.origin,
    "telephone": "+91-98765-43210",
    "email": "hello@freelancehub.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0760",
      "longitude": "72.8777"
    },
    "openingHours": "Mo-Sa 10:00-20:00",
    "priceRange": "₹500-₹15000",
    "serviceType": [
      "Logo Design",
      "Web Design",
      "Content Writing",
      "Graphic Design",
      "Social Media Design",
      "Photo Editing"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "founder": {
      "@type": "Person",
      "name": "FreelanceHub Founder",
      "age": "19"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50"
    }
  };
};

// Generate structured data for blog posts
export const generateBlogStructuredData = (title: string, description: string, publishDate: string, author: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "FreelanceHub",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/logo.png`
      }
    },
    "datePublished": publishDate,
    "dateModified": publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };
};

// SEO-friendly URL generation
export const generateSEOFriendlyURL = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

// Generate meta keywords based on content
export const generateKeywords = (content: string, baseKeywords: string[] = []): string[] => {
  const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should'];
  
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.includes(word));
  
  const wordCount: Record<string, number> = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  const topWords = Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word);
  
  return [...baseKeywords, ...topWords];
};

// Check and improve SEO score
export const calculateSEOScore = (metadata: SEOMetadata, content: string): { score: number; suggestions: string[] } => {
  let score = 0;
  const suggestions: string[] = [];
  
  // Title check
  if (metadata.title.length >= 30 && metadata.title.length <= 60) {
    score += 20;
  } else {
    suggestions.push('Title should be between 30-60 characters');
  }
  
  // Description check
  if (metadata.description.length >= 120 && metadata.description.length <= 160) {
    score += 20;
  } else {
    suggestions.push('Meta description should be between 120-160 characters');
  }
  
  // Keywords check
  if (metadata.keywords.length >= 5 && metadata.keywords.length <= 15) {
    score += 15;
  } else {
    suggestions.push('Include 5-15 relevant keywords');
  }
  
  // Content length check
  if (content.length >= 300) {
    score += 15;
  } else {
    suggestions.push('Content should be at least 300 words');
  }
  
  // Heading structure check
  const h1Count = (content.match(/<h1/g) || []).length;
  const h2Count = (content.match(/<h2/g) || []).length;
  
  if (h1Count === 1 && h2Count >= 2) {
    score += 15;
  } else {
    suggestions.push('Use one H1 tag and multiple H2 tags for better structure');
  }
  
  // Image alt text check (simplified)
  const imgCount = (content.match(/<img/g) || []).length;
  const altCount = (content.match(/alt="/g) || []).length;
  
  if (imgCount === altCount && imgCount > 0) {
    score += 15;
  } else if (imgCount > 0) {
    suggestions.push('Add alt text to all images');
  }
  
  return { score, suggestions };
};

// Local SEO optimization for Indian market
export const optimizeForLocalSEO = (city: string = 'Mumbai') => {
  const localKeywords = [
    `freelance designer ${city}`,
    `logo design ${city}`,
    `web design services ${city}`,
    `content writing ${city}`,
    `graphic designer ${city}`,
    'freelance services India',
    'student discount design services',
    'affordable web design India'
  ];
  
  return {
    keywords: localKeywords,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "FreelanceHub",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": city === 'Mumbai' ? "19.0760" : "28.6139", // Default to Delhi if not Mumbai
        "longitude": city === 'Mumbai' ? "72.8777" : "77.2090"
      },
      "telephone": "+91-98765-43210",
      "openingHours": "Mo-Sa 10:00-20:00",
      "priceRange": "₹500-₹15000"
    }
  };
};
