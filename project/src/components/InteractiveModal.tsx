import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageCircle, Phone, Mail } from 'lucide-react';

interface InteractiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'quote' | 'schedule' | 'contact';
}

const InteractiveModal: React.FC<InteractiveModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    preferredTime: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        service: '',
        message: '',
        preferredTime: '',
      });
      onClose();
    }, 3000);
  };

  const getModalContent = () => {
    switch (type) {
      case 'quote':
        return {
          title: 'Get Instant Quote',
          icon: <MessageCircle className="w-6 h-6" />,
          description: 'Tell us about your project and get a personalized quote within minutes!'
        };
      case 'schedule':
        return {
          title: 'Schedule a Call',
          icon: <Calendar className="w-6 h-6" />,
          description: 'Book a free 15-minute consultation to discuss your project needs.'
        };
      case 'contact':
        return {
          title: 'Quick Contact',
          icon: <Phone className="w-6 h-6" />,
          description: 'Have a question? Send us a message and we\'ll get back to you quickly!'
        };
      default:
        return {
          title: 'Contact Us',
          icon: <Mail className="w-6 h-6" />,
          description: 'Get in touch with us!'
        };
    }
  };

  const modalContent = getModalContent();

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay ${isOpen ? 'active' : ''}`}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto modal-content ${isOpen ? 'active' : ''}`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg animate-pulse-slow">
                {modalContent.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold">{modalContent.title}</h3>
                <p className="text-sm opacity-90">{modalContent.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200 interactive-button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 animate-scale-in">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mx-auto mb-4 animate-bounce">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
              <p className="text-gray-600">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 stagger-animation">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg form-field focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg form-field focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="modal-service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select
                  id="modal-service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg form-field focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="logo-design">Logo Design</option>
                  <option value="web-design">Web Design</option>
                  <option value="content-writing">Content Writing</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="social-media">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {type === 'schedule' && (
                <div>
                  <label htmlFor="modal-time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="datetime-local"
                    id="modal-time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg form-field focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              )}

              <div>
                <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg form-field focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-vertical"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 text-white py-3 px-6 rounded-lg font-semibold interactive-button ripple-effect animate-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner w-5 h-5"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <MessageCircle className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveModal;