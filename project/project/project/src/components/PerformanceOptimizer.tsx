import React, { useState, useEffect } from 'react';
import { Zap, Image, Clock, TrendingUp } from 'lucide-react';

const PerformanceOptimizer = () => {
  const [performanceScore, setPerformanceScore] = useState(0);
  const [loadTime, setLoadTime] = useState(0);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Simulate performance measurement
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      setLoadTime(Math.round(loadTime));
      
      // Calculate a performance score based on load time
      const score = Math.max(0, Math.min(100, 100 - (loadTime / 50)));
      setPerformanceScore(Math.round(score));
    };

    // Measure after component mounts
    setTimeout(measurePerformance, 1000);
  }, []);

  const optimizationFeatures = [
    {
      icon: <Image className="w-5 h-5" />,
      title: 'Image Optimization',
      description: 'Lazy loading and WebP format conversion',
      status: 'active',
      improvement: '+15% faster loading',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Code Minification',
      description: 'Compressed CSS and JavaScript files',
      status: 'active',
      improvement: '+20% smaller bundle',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Caching Strategy',
      description: 'Browser and CDN caching enabled',
      status: 'active',
      improvement: '+40% repeat visits',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Performance Monitoring',
      description: 'Real-time performance tracking',
      status: 'active',
      improvement: 'Continuous optimization',
    },
  ];

  const handleOptimize = () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    setTimeout(() => {
      setPerformanceScore(Math.min(100, performanceScore + 10));
      setLoadTime(Math.max(100, loadTime - 200));
      setIsOptimizing(false);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Performance Dashboard</h3>
            <p className="text-gray-600">Real-time website optimization metrics</p>
          </div>
        </div>
        
        <button
          onClick={handleOptimize}
          disabled={isOptimizing}
          className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 disabled:opacity-50 transition-colors duration-200"
        >
          {isOptimizing ? 'Optimizing...' : 'Optimize Now'}
        </button>
      </div>

      {/* Performance Score */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className={`${getScoreBg(performanceScore)} rounded-xl p-6`}>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Performance Score</h4>
            <TrendingUp className={`w-5 h-5 ${getScoreColor(performanceScore)}`} />
          </div>
          <div className={`text-4xl font-bold ${getScoreColor(performanceScore)} mb-2`}>
            {performanceScore}/100
          </div>
          <p className="text-sm text-gray-600">
            {performanceScore >= 90 ? 'Excellent' : performanceScore >= 70 ? 'Good' : 'Needs Improvement'}
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Load Time</h4>
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {loadTime}ms
          </div>
          <p className="text-sm text-gray-600">
            {loadTime < 1000 ? 'Very Fast' : loadTime < 2000 ? 'Fast' : 'Could be faster'}
          </p>
        </div>
      </div>

      {/* Optimization Features */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Active Optimizations</h4>
        
        {optimizationFeatures.map((feature, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-cyan-100 text-cyan-600 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h5 className="font-medium text-gray-900">{feature.title}</h5>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-600">Active</span>
              </div>
              <p className="text-xs text-gray-500">{feature.improvement}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Tips */}
      <div className="mt-8 p-4 bg-cyan-50 rounded-lg">
        <h5 className="font-medium text-cyan-900 mb-2">💡 Performance Tips</h5>
        <ul className="text-sm text-cyan-800 space-y-1">
          <li>• Images are automatically optimized and lazy-loaded</li>
          <li>• CSS and JavaScript are minified for faster loading</li>
          <li>• Browser caching reduces repeat visit load times</li>
          <li>• CDN delivery ensures fast global access</li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;
