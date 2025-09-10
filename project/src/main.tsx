import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initGA, trackPerformance, trackUserEngagement } from './utils/analytics';
import { updateSEOMetadata, generateServiceStructuredData } from './utils/seo';
import { initScrollAnimations } from './utils/animations';

// Initialize analytics (replace with your actual GA measurement ID)
// initGA('GA_MEASUREMENT_ID');

// Set up SEO metadata
updateSEOMetadata({
  title: 'FreelanceHub - Affordable Design & Writing Services for Students | India',
  description: 'Professional freelance services at student-friendly prices. Logo design, web design, content writing & more. 20% student discount. Based in India, serving globally.',
  keywords: [
    'freelance designer India',
    'student discount design',
    'affordable logo design',
    'web design Mumbai',
    'content writing services',
    'graphic design India',
    'freelance services students',
    'cheap web design',
    'logo design India',
    'social media graphics'
  ],
  ogTitle: 'FreelanceHub - Professional Freelance Services for Students & Small Businesses',
  ogDescription: 'Get high-quality design and writing services at student-friendly prices. 20% discount for students. Fast delivery, professional results.',
  structuredData: generateServiceStructuredData()
});

// Track performance and user engagement
trackPerformance();
trackUserEngagement();

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
