import React from 'react';
import { Palette, PenTool, Globe, FileText, MessageSquare, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Logo & Brand Design',
      description: 'Professional logos, business cards, and brand identity packages that make your business stand out.',
      price: '₹1,000 - ₹5,000',
      features: ['Logo design', 'Business cards', 'Brand guidelines', 'Social media kit'],
      popular: false,
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Graphic Design',
      description: 'Eye-catching flyers, posters, social media graphics, and marketing materials.',
      price: '₹500 - ₹3,000',
      features: ['Social media graphics', 'Flyers & posters', 'Brochures', 'Infographics'],
      popular: true,
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Design',
      description: 'Modern, responsive website designs that work perfectly on all devices.',
      price: '₹3,000 - ₹15,000',
      features: ['Responsive design', 'UI/UX design', 'Landing pages', 'E-commerce design'],
      popular: false,
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Content Writing',
      description: 'Engaging blog posts, website copy, and marketing content that converts.',
      price: '₹300 - ₹1,500',
      features: ['Blog writing', 'Website copy', 'Product descriptions', 'SEO content'],
      popular: false,
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Social Media Content',
      description: 'Creative social media posts, captions, and content strategies.',
      price: '₹2,000 - ₹8,000',
      features: ['Post design', 'Content calendar', 'Captions', 'Hashtag research'],
      popular: false,
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photo Editing',
      description: 'Professional photo editing and retouching for your business needs.',
      price: '₹200 - ₹1,000',
      features: ['Photo retouching', 'Background removal', 'Color correction', 'Batch editing'],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>My Services</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Services at
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              {' '}Student-Friendly Prices
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get high-quality design and writing services without breaking the bank. Special discounts available for students and startups.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg interactive-card hover-glow ${
                service.popular ? 'ring-2 ring-cyan-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium animate-glow">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-xl mb-6 morphing-shape animate-pulse-slow">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <div className="mb-6">
                <div className="text-2xl font-bold text-cyan-600 mb-2 text-shimmer">{service.price}</div>
                <div className="text-sm text-gray-500">Per project</div>
              </div>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600 animate-slide-in" style={{ animationDelay: `${featureIndex * 0.1}s` }}>
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 animate-pulse-slow"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 px-6 rounded-lg font-semibold interactive-button ripple-effect ${
                  service.popular
                    ? 'bg-cyan-500 text-white animate-glow'
                    : 'bg-gray-100 text-gray-700 hover:bg-cyan-100 hover:text-cyan-700 hover-glow'
                }`}
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>

        {/* Student Discount Banner */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-center text-white animate-gradient interactive-card">
          <h3 className="text-2xl font-bold mb-4 animate-bounce">Special Student Discount!</h3>
          <p className="text-lg mb-6 opacity-90 animate-fade-in">
            Show your student ID and get 20% off on all services. We understand student budgets!
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center space-x-2 bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold interactive-button animate-pulse-slow"
          >
            <span>Claim Student Discount</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;