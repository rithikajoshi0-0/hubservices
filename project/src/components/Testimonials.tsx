import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'College Student',
      company: 'Delhi University',
      image: 'https://images.pexels.com/photos/3771111/pexels-photo-3771111.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Amazing work on my startup\'s logo! The design perfectly captured our vision, and the price was so student-friendly. Highly recommend to all my fellow entrepreneurs!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Rajesh Patel',
      role: 'Small Business Owner',
      company: 'Local Restaurant',
      image: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Got a complete social media design package for my restaurant. The designs increased our online engagement by 300%! Great quality at an unbeatable price.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Anita Verma',
      role: 'Freelance Writer',
      company: 'Content Creator',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Needed a professional website design for my writing business. The result exceeded my expectations! Fast delivery and excellent communication throughout.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Kiran Kumar',
      role: 'Student Entrepreneur',
      company: 'Tech Startup',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Perfect understanding of what young entrepreneurs need. Created our entire brand identity within our tight budget. Will definitely work together again!',
      rating: 5,
    },
    {
      id: 5,
      name: 'Meera Joshi',
      role: 'NGO Founder',
      company: 'Environmental NGO',
      image: 'https://images.pexels.com/photos/3772612/pexels-photo-3772612.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Helped us design impactful posters for our environmental campaign. The designs were not only beautiful but also very effective in conveying our message.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Amit Singh',
      role: 'E-commerce Owner',
      company: 'Online Store',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'Redesigned my e-commerce website and created product descriptions. Sales increased by 150% in just 2 months! Incredible ROI for the investment.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Client Reviews</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What My Clients
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              {' '}Say About Me
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from students, startups, and small businesses who trusted me with their projects.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">5.0</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">100%</div>
            <div className="text-gray-600">Project Success</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">24hr</div>
            <div className="text-gray-600">Response Time</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-cyan-200" />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-cyan-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join These Happy Clients?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's create something amazing together. Get your free quote today and see why students and small businesses choose me for their projects.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center space-x-2 bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <span className="font-semibold">Start Your Project</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;