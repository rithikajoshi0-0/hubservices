import React from 'react';
import { ArrowRight, Star, Users, Award, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Trusted by 50+ Happy Clients</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Affordable
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  {' '}Freelance Services
                </span>
                <br />
                for Students & Small Businesses
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Hi! I'm a 19-year-old freelancer from India helping students and startups succeed with professional design and writing services at student-friendly prices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center space-x-2 bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="font-semibold">Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={scrollToPortfolio}
                className="inline-flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-cyan-500 hover:text-cyan-500 transition-all duration-200"
              >
                <span className="font-semibold">View Portfolio</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg mb-2 mx-auto">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Quality Work</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg mb-2 mx-auto">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24hr</div>
                <div className="text-sm text-gray-600">Quick Turnaround</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Young freelancer working on laptop"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">5.0 Rating</div>
                  <div className="text-sm text-gray-600">From all clients</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Student Friendly</div>
                  <div className="text-sm text-gray-600">20% Student Discount</div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-2xl transform rotate-6 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;