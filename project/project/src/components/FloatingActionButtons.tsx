import React, { useState } from 'react';
import { MessageCircle, Calendar, Phone, Mail, Plus, X } from 'lucide-react';
import InteractiveModal from './InteractiveModal';

const FloatingActionButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalType, setModalType] = useState<'quote' | 'schedule' | 'contact' | null>(null);

  const actions = [
    {
      id: 'quote',
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Get Quote',
      color: 'bg-cyan-500 hover:bg-cyan-600',
      action: () => setModalType('quote')
    },
    {
      id: 'schedule',
      icon: <Calendar className="w-5 h-5" />,
      label: 'Schedule Call',
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => setModalType('schedule')
    },
    {
      id: 'contact',
      icon: <Phone className="w-5 h-5" />,
      label: 'Quick Contact',
      color: 'bg-green-500 hover:bg-green-600',
      action: () => setModalType('contact')
    }
  ];

  const handleActionClick = (action: typeof actions[0]) => {
    action.action();
    setIsExpanded(false);
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-40">
        {/* Action Buttons */}
        <div className={`flex flex-col-reverse space-y-reverse space-y-3 mb-3 transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          {actions.map((action, index) => (
            <div
              key={action.id}
              className="flex items-center space-x-3 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-700 whitespace-nowrap animate-fade-in">
                {action.label}
              </div>
              <button
                onClick={() => handleActionClick(action)}
                className={`w-12 h-12 ${action.color} text-white rounded-full shadow-lg interactive-button animate-scale-in flex items-center justify-center`}
              >
                {action.icon}
              </button>
            </div>
          ))}
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg interactive-button animate-float flex items-center justify-center transition-transform duration-300 ${
            isExpanded ? 'rotate-45' : 'rotate-0'
          }`}
        >
          {isExpanded ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </button>
      </div>

      {/* Interactive Modal */}
      {modalType && (
        <InteractiveModal
          isOpen={!!modalType}
          onClose={() => setModalType(null)}
          type={modalType}
        />
      )}
    </>
  );
};

export default FloatingActionButtons;