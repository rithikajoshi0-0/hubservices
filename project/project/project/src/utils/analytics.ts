// Google Analytics and performance tracking utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track events
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters,
    });
  }
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Track conversions
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', {
    event_category: 'conversion',
    event_label: conversionType,
    value: value || 0,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, formData: Record<string, any>) => {
  trackEvent('form_submit', {
    event_category: 'form',
    event_label: formName,
    custom_parameters: {
      service_type: formData.service || 'unknown',
      is_student: formData.isStudent || false,
      budget_range: formData.budget || 'not_specified',
    },
  });
};

// Performance monitoring
export const trackPerformance = () => {
  // Track Core Web Vitals
  if ('web-vitals' in window) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS((metric) => trackEvent('web_vital', { name: 'CLS', value: metric.value }));
      getFID((metric) => trackEvent('web_vital', { name: 'FID', value: metric.value }));
      getFCP((metric) => trackEvent('web_vital', { name: 'FCP', value: metric.value }));
      getLCP((metric) => trackEvent('web_vital', { name: 'LCP', value: metric.value }));
      getTTFB((metric) => trackEvent('web_vital', { name: 'TTFB', value: metric.value }));
    });
  }

  // Track custom performance metrics
  if (performance && performance.getEntriesByType) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      
      trackEvent('performance', {
        event_category: 'timing',
        event_label: 'page_load',
        value: Math.round(loadTime),
        custom_parameters: {
          dom_content_loaded: Math.round(domContentLoaded),
          dns_lookup: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
          tcp_connect: Math.round(navigation.connectEnd - navigation.connectStart),
        },
      });
    }
  }
};

// A/B Testing utilities
export const getABTestVariant = (testName: string, variants: string[]): string => {
  const userId = localStorage.getItem('user_id') || Math.random().toString(36).substr(2, 9);
  localStorage.setItem('user_id', userId);
  
  // Simple hash function to determine variant
  let hash = 0;
  const str = testName + userId;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  const variantIndex = Math.abs(hash) % variants.length;
  const variant = variants[variantIndex];
  
  // Track the variant assignment
  trackEvent('ab_test_assignment', {
    event_category: 'experiment',
    event_label: testName,
    custom_parameters: {
      variant: variant,
      user_id: userId,
    },
  });
  
  return variant;
};

// User engagement tracking
export const trackUserEngagement = () => {
  let startTime = Date.now();
  let isActive = true;
  
  // Track time on page
  const trackTimeOnPage = () => {
    if (isActive) {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent('user_engagement', {
        event_category: 'timing',
        event_label: 'time_on_page',
        value: timeSpent,
      });
    }
  };
  
  // Track when user becomes inactive
  const handleVisibilityChange = () => {
    if (document.hidden) {
      isActive = false;
      trackTimeOnPage();
    } else {
      isActive = true;
      startTime = Date.now();
    }
  };
  
  // Track scroll depth
  let maxScrollDepth = 0;
  const trackScrollDepth = () => {
    const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (scrollDepth > maxScrollDepth) {
      maxScrollDepth = scrollDepth;
      
      // Track milestone scroll depths
      if (scrollDepth >= 25 && scrollDepth < 50) {
        trackEvent('scroll_depth', { event_label: '25%', value: 25 });
      } else if (scrollDepth >= 50 && scrollDepth < 75) {
        trackEvent('scroll_depth', { event_label: '50%', value: 50 });
      } else if (scrollDepth >= 75 && scrollDepth < 90) {
        trackEvent('scroll_depth', { event_label: '75%', value: 75 });
      } else if (scrollDepth >= 90) {
        trackEvent('scroll_depth', { event_label: '90%', value: 90 });
      }
    }
  };
  
  // Add event listeners
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('scroll', trackScrollDepth, { passive: true });
  window.addEventListener('beforeunload', trackTimeOnPage);
  
  // Cleanup function
  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('scroll', trackScrollDepth);
    window.removeEventListener('beforeunload', trackTimeOnPage);
  };
};
