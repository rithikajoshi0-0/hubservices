import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    isStudent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        isStudent: false,
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            <span>Let's Connect</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Start
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              {' '}Your Project?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a free quote within 24 hours. Let's discuss your project and bring your vision to life!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">hello@freelancehub.in</p>
                    <p className="text-sm text-gray-500">Reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-sm text-gray-500">Mon-Sat, 10 AM - 8 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Mumbai, India</p>
                    <p className="text-sm text-gray-500">Serving clients worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
                    <p className="text-gray-600">Within 24 hours</p>
                    <p className="text-sm text-gray-500">Usually much faster!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Discount Banner */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
              <h4 className="text-lg font-bold mb-2">🎓 Student Discount</h4>
              <p className="mb-4 opacity-90">Show your student ID and get 20% off on all services!</p>
              <div className="text-sm opacity-75">
                Valid for college and university students across India
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank you!</h4>
                  <p className="text-gray-600">Your message has been sent successfully. I'll get back to you within 24 hours!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select a service</option>
                        <option value="logo-branding">Logo & Branding</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="web-design">Web Design</option>
                        <option value="content-writing">Content Writing</option>
                        <option value="social-media">Social Media Content</option>
                        <option value="photo-editing">Photo Editing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1000">Under ₹1,000</option>
                      <option value="1000-3000">₹1,000 - ₹3,000</option>
                      <option value="3000-5000">₹3,000 - ₹5,000</option>
                      <option value="5000-10000">₹5,000 - ₹10,000</option>
                      <option value="10000-plus">₹10,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="isStudent"
                      name="isStudent"
                      checked={formData.isStudent}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isStudent" className="text-sm text-gray-700">
                      I'm a student (eligible for 20% discount)
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cyan-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message & Get Quote</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Prefer to reach out directly?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:hello@freelancehub.in"
              className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-200 hover:border-cyan-300 hover:text-cyan-600 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-200 hover:border-cyan-300 hover:text-cyan-600 transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>Call Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;