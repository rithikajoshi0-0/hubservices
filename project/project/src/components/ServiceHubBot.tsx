import React from 'react';
import { Bot, Zap, MessageSquare, Users, Award } from 'lucide-react';

const ServiceHubBot = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Intelligent Conversations',
      description: 'Understands context and provides personalized responses for all your queries'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Quotes',
      description: 'Get pricing estimates and project timelines in real-time'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Student-Friendly',
      description: 'Specially trained to understand student needs and budget constraints'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Always available to help with your freelancing needs and questions'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full mx-auto mb-4">
          <Bot className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet ServiceHub Assistant</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your intelligent AI companion designed specifically for freelancing services. 
          Get instant help, quotes, and personalized recommendations 24/7.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex-shrink-0">
              {feature.icon}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6">
        <h4 className="font-semibold text-gray-900 mb-3">🤖 What ServiceHub Assistant Can Do:</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <h5 className="font-medium mb-2">Service Inquiries:</h5>
            <ul className="space-y-1">
              <li>• Pricing for all services</li>
              <li>• Project timelines & scope</li>
              <li>• Portfolio recommendations</li>
              <li>• Student discount info</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">General Support:</h5>
            <ul className="space-y-1">
              <li>• Study & career advice</li>
              <li>• Business startup tips</li>
              <li>• Creative brainstorming</li>
              <li>• Technical guidance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-600 mb-4">
          Ready to experience intelligent assistance? Click the chat icon in the bottom-right corner!
        </p>
        <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
          <span>✓ Trained on 1000+ conversations</span>
          <span>✓ India-specific knowledge</span>
          <span>✓ Student-focused responses</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceHubBot;