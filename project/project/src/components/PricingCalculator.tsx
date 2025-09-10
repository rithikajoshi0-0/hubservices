import React, { useState } from 'react';
import { Calculator, IndianRupee, Clock, FileText } from 'lucide-react';

const PricingCalculator = () => {
  const [serviceType, setServiceType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [urgency, setUrgency] = useState('standard');
  const [isStudent, setIsStudent] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const serviceRates = {
    'content-writing': { base: 2, unit: 'words', min: 500 },
    'logo-design': { base: 2000, unit: 'logos', min: 1 },
    'social-media': { base: 150, unit: 'posts', min: 5 },
    'web-design': { base: 8000, unit: 'pages', min: 1 },
    'graphic-design': { base: 500, unit: 'designs', min: 1 },
    'photo-editing': { base: 100, unit: 'photos', min: 1 },
  };

  const urgencyMultipliers = {
    'standard': 1,
    'urgent': 1.5,
    'rush': 2,
  };

  const calculatePrice = () => {
    if (!serviceType || !quantity) return;

    const service = serviceRates[serviceType as keyof typeof serviceRates];
    if (!service) return;

    let basePrice = service.base * parseInt(quantity);
    const urgencyMultiplier = urgencyMultipliers[urgency as keyof typeof urgencyMultipliers];
    let finalPrice = basePrice * urgencyMultiplier;

    // Apply student discount
    if (isStudent) {
      finalPrice = finalPrice * 0.8; // 20% discount
    }

    setEstimatedPrice(Math.round(finalPrice));
  };

  React.useEffect(() => {
    calculatePrice();
  }, [serviceType, quantity, urgency, isStudent]);

  const getDeliveryTime = () => {
    const times = {
      'standard': '3-5 days',
      'urgent': '1-2 days',
      'rush': '24 hours',
    };
    return times[urgency as keyof typeof times];
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Instant Price Calculator</h3>
          <p className="text-gray-600">Get an estimate for your project in seconds</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Type *
          </label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="">Select a service</option>
            <option value="content-writing">Content Writing</option>
            <option value="logo-design">Logo Design</option>
            <option value="social-media">Social Media Posts</option>
            <option value="web-design">Web Design</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="photo-editing">Photo Editing</option>
          </select>
        </div>

        {/* Quantity */}
        {serviceType && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity ({serviceRates[serviceType as keyof typeof serviceRates]?.unit}) *
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min={serviceRates[serviceType as keyof typeof serviceRates]?.min}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200"
              placeholder={`Minimum ${serviceRates[serviceType as keyof typeof serviceRates]?.min}`}
            />
          </div>
        )}

        {/* Urgency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Delivery Timeline
          </label>
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(urgencyMultipliers).map(([key, multiplier]) => (
              <button
                key={key}
                onClick={() => setUrgency(key)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  urgency === key
                    ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                    : 'border-gray-200 hover:border-cyan-300'
                }`}
              >
                <div className="text-sm font-medium capitalize">{key}</div>
                <div className="text-xs text-gray-500">
                  {multiplier > 1 && `+${Math.round((multiplier - 1) * 100)}%`}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Student Discount */}
        <div className="flex items-center space-x-3 p-4 bg-cyan-50 rounded-lg">
          <input
            type="checkbox"
            id="student-discount"
            checked={isStudent}
            onChange={(e) => setIsStudent(e.target.checked)}
            className="w-5 h-5 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
          />
          <label htmlFor="student-discount" className="text-sm text-gray-700">
            I'm a student (20% discount applies)
          </label>
        </div>

        {/* Price Display */}
        {estimatedPrice > 0 && (
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm opacity-90">Estimated Price</div>
                <div className="flex items-center space-x-2">
                  <IndianRupee className="w-6 h-6" />
                  <span className="text-3xl font-bold">{estimatedPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 text-sm opacity-90">
                  <Clock className="w-4 h-4" />
                  <span>{getDeliveryTime()}</span>
                </div>
                {isStudent && (
                  <div className="text-sm bg-white/20 px-2 py-1 rounded-full mt-2">
                    Student discount applied!
                  </div>
                )}
              </div>
            </div>
            
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full bg-white text-cyan-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Detailed Quote
            </button>
          </div>
        )}

        {/* Disclaimer */}
        <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
          <FileText className="w-4 h-4 inline mr-1" />
          This is an estimated price. Final quote may vary based on project complexity and specific requirements.
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
