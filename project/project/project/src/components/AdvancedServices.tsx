import React from 'react';
import PricingCalculator from './PricingCalculator';
import PortfolioFilter from './PortfolioFilter';
import LiveChat from './LiveChat';
import PerformanceOptimizer from './PerformanceOptimizer';
import SEOOptimizer from './SEOOptimizer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs';

const AdvancedServices = () => {
  return (
    <section id="advanced-services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>Advanced Features</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enhanced Tools &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              {' '}Smart Features
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our advanced tools designed to streamline your project journey and deliver exceptional results.
          </p>
        </div>

        {/* Advanced Features Tabs */}
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="calculator">Price Calculator</TabsTrigger>
            <TabsTrigger value="portfolio">Smart Portfolio</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="seo">SEO Insights</TabsTrigger>
            <TabsTrigger value="chat">Live Support</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-8">
            <PricingCalculator />
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-8">
            <PortfolioFilter />
          </TabsContent>

          <TabsContent value="performance" className="space-y-8">
            <PerformanceOptimizer />
          </TabsContent>

          <TabsContent value="seo" className="space-y-8">
            <SEOOptimizer />
          </TabsContent>

          <TabsContent value="chat" className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Live Chat Support</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get instant answers to your questions with our intelligent chat assistant. 
                Available round the clock to help with quotes, project details, and general inquiries.
              </p>
              <div className="bg-cyan-50 rounded-xl p-6 max-w-md mx-auto">
                <p className="text-sm text-cyan-800 mb-4">
                  💬 The chat widget is available in the bottom-right corner of your screen. 
                  Click the blue chat icon to start a conversation!
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-cyan-700">
                  <span>✓ Instant responses</span>
                  <span>✓ Project quotes</span>
                  <span>✓ 24/7 availability</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Live Chat Component */}
        <LiveChat />
      </div>
    </section>
  );
};

export default AdvancedServices;
