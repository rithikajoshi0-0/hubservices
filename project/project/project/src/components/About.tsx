import React from 'react';
import { GraduationCap, Heart, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Young entrepreneur working"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-2xl transform -rotate-6 scale-105"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                <span>About Me</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900">
                Your Friendly
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  {' '}19-Year-Old
                </span>
                <br />
                Freelance Partner
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Hey there! I'm a passionate freelancer from India who understands exactly what it's like to be a student or run a small business on a tight budget. Having started my freelancing journey at 17, I know the challenges young entrepreneurs and students face.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                That's why I offer professional-quality design and writing services at prices that won't break the bank. I believe everyone deserves access to great design and content, regardless of their budget size.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Student-Focused</h3>
                  <p className="text-gray-600 text-sm">Understanding student budgets with 20% student discounts</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Focused</h3>
                  <p className="text-gray-600 text-sm">Professional results that compete with expensive agencies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Delivery</h3>
                  <p className="text-gray-600 text-sm">Fast turnaround times to meet your urgent deadlines</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex-shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Touch</h3>
                  <p className="text-gray-600 text-sm">One-on-one communication and personalized service</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center space-x-2 bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors duration-200"
              >
                <span className="font-semibold">Let's Work Together</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;