import React from 'react';
import { Search, TrendingUp, Globe, Target, CheckCircle, AlertCircle } from 'lucide-react';

const SEOOptimizer = () => {
  const seoMetrics = {
    overallScore: 92,
    keywordRanking: 15,
    organicTraffic: 2340,
    backlinks: 45,
  };

  const seoChecklist = [
    {
      item: 'Meta titles and descriptions optimized',
      status: 'completed',
      impact: 'High',
      description: 'All pages have unique, keyword-rich meta tags under 60 characters',
    },
    {
      item: 'Schema markup implemented',
      status: 'completed',
      impact: 'High',
      description: 'Structured data for services, reviews, and business info',
    },
    {
      item: 'Mobile-first indexing ready',
      status: 'completed',
      impact: 'Critical',
      description: 'Responsive design optimized for mobile search',
    },
    {
      item: 'Local SEO optimization',
      status: 'completed',
      impact: 'High',
      description: 'Google My Business integration and local keywords',
    },
    {
      item: 'Page speed optimization',
      status: 'completed',
      impact: 'High',
      description: 'Core Web Vitals optimized for better rankings',
    },
    {
      item: 'Internal linking strategy',
      status: 'in-progress',
      impact: 'Medium',
      description: 'Strategic links between services and blog content',
    },
  ];

  const targetKeywords = [
    { keyword: 'freelance designer India', position: 3, volume: 1200, difficulty: 'Medium' },
    { keyword: 'student logo design', position: 7, volume: 800, difficulty: 'Low' },
    { keyword: 'affordable web design Mumbai', position: 12, volume: 600, difficulty: 'Medium' },
    { keyword: 'content writing services', position: 18, volume: 2100, difficulty: 'High' },
    { keyword: 'social media graphics', position: 5, volume: 950, difficulty: 'Low' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-red-600" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical':
        return 'bg-red-100 text-red-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Low':
        return 'text-green-600';
      case 'Medium':
        return 'text-yellow-600';
      default:
        return 'text-red-600';
    }
  };

  return (
    <div className="space-y-8">
      {/* SEO Overview */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">SEO Performance</h3>
            <p className="text-gray-600">Search engine optimization metrics and insights</p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg mx-auto mb-3">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-1">{seoMetrics.overallScore}</div>
            <div className="text-sm text-gray-600">SEO Score</div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mx-auto mb-3">
              <Target className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-1">{seoMetrics.keywordRanking}</div>
            <div className="text-sm text-gray-600">Keywords in Top 20</div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mx-auto mb-3">
              <Globe className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-1">{seoMetrics.organicTraffic.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Monthly Visitors</div>
          </div>

          <div className="bg-cyan-50 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg mx-auto mb-3">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-cyan-600 mb-1">{seoMetrics.backlinks}</div>
            <div className="text-sm text-gray-600">Quality Backlinks</div>
          </div>
        </div>
      </div>

      {/* SEO Checklist */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">SEO Optimization Checklist</h4>
        
        <div className="space-y-4">
          {seoChecklist.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 mt-1">
                {getStatusIcon(item.status)}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-gray-900">{item.item}</h5>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(item.impact)}`}>
                    {item.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyword Rankings */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Target Keywords Performance</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Keyword</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Position</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Volume</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {targetKeywords.map((keyword, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{keyword.keyword}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${
                      keyword.position <= 3 ? 'bg-green-100 text-green-800' :
                      keyword.position <= 10 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      #{keyword.position}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    {keyword.volume.toLocaleString()}/month
                  </td>
                  <td className="py-3 px-4">
                    <span className={`font-medium ${getDifficultyColor(keyword.difficulty)}`}>
                      {keyword.difficulty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SEO Tips */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
        <h4 className="text-xl font-bold text-gray-900 mb-4">🚀 SEO Optimization Tips</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Content Strategy</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Target long-tail keywords for student services</li>
              <li>• Create location-specific content for Indian cities</li>
              <li>• Regular blog posts about design trends</li>
              <li>• Student success stories and case studies</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Technical SEO</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Optimized images with alt text</li>
              <li>• Fast loading times (under 3 seconds)</li>
              <li>• Mobile-first responsive design</li>
              <li>• SSL certificate and HTTPS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOOptimizer;
