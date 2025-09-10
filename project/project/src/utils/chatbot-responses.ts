// ServiceHub Assistant Response System
// This file contains the comprehensive response logic for the AI assistant

export interface ChatContext {
  userName?: string;
  previousMessages: string[];
  userPreferences?: {
    isStudent: boolean;
    budget?: string;
    serviceInterest?: string;
  };
}

export class ServiceHubAssistant {
  private context: ChatContext;

  constructor(context: ChatContext = { previousMessages: [] }) {
    this.context = context;
  }

  // Main response generator
  generateResponse(userMessage: string): string {
    const message = userMessage.toLowerCase().trim();
    
    // Update context
    this.context.previousMessages.push(message);
    
    // Detect user intent and generate appropriate response
    if (this.isGreeting(message)) {
      return this.getGreetingResponse();
    }
    
    if (this.isServiceInquiry(message)) {
      return this.getServiceResponse(message);
    }
    
    if (this.isPricingInquiry(message)) {
      return this.getPricingResponse(message);
    }
    
    if (this.isStudentRelated(message)) {
      return this.getStudentResponse(message);
    }
    
    if (this.isBookingInquiry(message)) {
      return this.getBookingResponse();
    }
    
    if (this.isGeneralHelp(message)) {
      return this.getGeneralHelpResponse(message);
    }
    
    // Default response with CTA
    return this.getDefaultResponse(message);
  }

  // Intent detection methods
  private isGreeting(message: string): boolean {
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];
    return greetings.some(greeting => message.includes(greeting));
  }

  private isServiceInquiry(message: string): boolean {
    const services = ['logo', 'website', 'web', 'content', 'writing', 'design', 'marketing', 'social media'];
    return services.some(service => message.includes(service));
  }

  private isPricingInquiry(message: string): boolean {
    const pricingTerms = ['price', 'cost', 'quote', 'budget', 'how much', 'pricing', 'rate'];
    return pricingTerms.some(term => message.includes(term));
  }

  private isStudentRelated(message: string): boolean {
    const studentTerms = ['student', 'college', 'university', 'discount', 'study', 'exam'];
    return studentTerms.some(term => message.includes(term));
  }

  private isBookingInquiry(message: string): boolean {
    const bookingTerms = ['book', 'hire', 'start', 'begin', 'order', 'purchase'];
    return bookingTerms.some(term => message.includes(term));
  }

  private isGeneralHelp(message: string): boolean {
    const helpTerms = ['help', 'support', 'question', 'how to', 'advice', 'tip'];
    return helpTerms.some(term => message.includes(term));
  }

  // Response generators
  private getGreetingResponse(): string {
    const greetings = [
      "Hi there! 👋 Welcome to ServiceHub! I'm your friendly assistant, here to help with all your freelancing needs.",
      "Hello! 😊 Great to see you here! I'm ServiceHub Assistant - ready to help you with design, content, web development, and more!",
      "Hey! 🌟 Welcome to ServiceHub! I'm a 19-year-old freelancer who understands student budgets and startup challenges. How can I help today?"
    ];
    
    return this.getRandomResponse(greetings) + "\n\nWhat brings you here today? Looking for:\n• Logo design\n• Website development\n• Content writing\n• Marketing help\n• Or something else?";
  }

  private getServiceResponse(message: string): string {
    if (message.includes('logo') || message.includes('brand')) {
      return "Excellent choice! 🎨 Logo design is my specialty! I create professional, memorable logos that perfectly represent your brand.\n\n💰 **Pricing**: ₹1,000-₹5,000\n⏱️ **Timeline**: 2-3 days\n📦 **Includes**: Multiple concepts, unlimited revisions, all file formats\n\n🎓 **Student Discount**: 20% off with valid ID!\n\nWhat type of business/project is this for? I'd love to create something amazing for you!";
    }
    
    if (message.includes('website') || message.includes('web')) {
      return "Perfect timing! 💻 I specialize in creating stunning, responsive websites that work beautifully on all devices.\n\n💰 **Pricing**: ₹5,000-₹20,000\n⏱️ **Timeline**: 1-2 weeks\n📦 **Includes**: Responsive design, SEO optimization, mobile-friendly\n\n🎓 **Student Special**: 15% off + free hosting setup!\n\nDo you need e-commerce functionality, or is it more informational? Let's discuss your vision!";
    }
    
    if (message.includes('content') || message.includes('writing')) {
      return "Great choice! ✍️ Quality content is the heart of successful marketing. I create engaging, SEO-optimized content that converts.\n\n💰 **Pricing**: ₹300-₹2,000 per piece\n⏱️ **Timeline**: 1-3 days\n📦 **Includes**: Research, SEO optimization, unlimited revisions\n\n🎓 **Student Rate**: ₹200-₹1,500 per piece\n\nWhat type of content do you need? Blog posts, website copy, social media content, or something else?";
    }
    
    return "I offer comprehensive freelancing services! 🚀 From creative design to technical development, I've got you covered. What specific service interests you most?";
  }

  private getPricingResponse(message: string): string {
    return "Here's my transparent, student-friendly pricing! 💰\n\n**🎨 Design Services:**\n• Logo Design: ₹1,000-₹5,000\n• Social Media Graphics: ₹500-₹2,000\n• Brochures/Flyers: ₹800-₹3,000\n\n**💻 Web Development:**\n• Simple Website: ₹5,000-₹10,000\n• E-commerce Site: ₹15,000-₹25,000\n• Landing Pages: ₹3,000-₹8,000\n\n**✍️ Content Writing:**\n• Blog Posts: ₹500-₹1,500\n• Website Copy: ₹300-₹1,000\n• SEO Content: ₹400-₹1,200\n\n**📱 Marketing:**\n• Social Media Strategy: ₹2,000-₹8,000\n• Content Calendar: ₹1,500-₹5,000\n\n🎓 **Students get 10-20% off all services!**\n\nWhich service interests you? I can provide a detailed quote!";
  }

  private getStudentResponse(message: string): string {
    return "I totally get it - student life can be tough on the wallet! 🎓 That's why I offer special student pricing:\n\n**🎯 Student Benefits:**\n• 10-20% discount on all services\n• Flexible payment plans\n• Free consultations\n• Quick turnaround for urgent projects\n• Study tips and career advice\n\n**📚 Popular Student Services:**\n• Assignment presentations: ₹500-₹1,500\n• Project logos: ₹800-₹2,000\n• Resume design: ₹300-₹800\n• Social media for personal branding: ₹1,000-₹3,000\n\nJust show me your student ID and you're all set! What project are you working on? 😊";
  }

  private getBookingResponse(): string {
    return "Awesome! I'm excited to work with you! 🚀\n\n**📋 Next Steps:**\n1. Tell me about your project (scope, timeline, budget)\n2. I'll provide a detailed quote within 2 hours\n3. 50% advance to start, 50% on completion\n4. Regular updates throughout the project\n\n**💳 Payment Options:**\n• UPI (preferred)\n• Bank transfer\n• Razorpay (cards/wallets)\n• Student-friendly installments available\n\n**⚡ Quick Start:**\nClick 'Get Quote' button or describe your project here. I typically respond within 24 hours and deliver quality work on time.\n\nWhat's your project timeline? Let's create something amazing together! 🎨";
  }

  private getGeneralHelpResponse(message: string): string {
    if (message.includes('study') || message.includes('exam')) {
      return "Study tips from a fellow student! 📚\n\n**🎯 Effective Study Strategies:**\n• Use active recall and spaced repetition\n• Take regular breaks (Pomodoro technique)\n• Create visual aids and mind maps\n• Form study groups\n• Don't hesitate to ask for help!\n\n**💡 Pro Tip:** If you need help with presentations, infographics, or visual aids for your studies, I can create professional designs at student-friendly prices!\n\nWhat subject are you studying? Maybe I can help make it more engaging! 😊";
    }
    
    if (message.includes('startup') || message.includes('business')) {
      return "Love the entrepreneurial spirit! 🚀 Starting a business is exciting but challenging.\n\n**🎯 Startup Essentials:**\n• Strong brand identity (logo, colors, fonts)\n• Professional website\n• Social media presence\n• Quality content strategy\n• Clear value proposition\n\n**💰 Startup-Friendly Packages:**\n• Complete branding: ₹8,000-₹15,000\n• Website + logo combo: ₹12,000-₹20,000\n• Social media setup: ₹3,000-₹8,000\n\nI understand startup budgets - let's create something professional that grows with you! What's your startup about? 🌟";
    }
    
    return "I'm here to help with anything! 🤝 Whether it's creative services, technical questions, study advice, or just brainstorming ideas - I believe in building relationships, not just completing projects.\n\nFeel free to ask me about:\n• Design and development\n• Student life and career advice\n• Business and marketing tips\n• Creative problem-solving\n\nWhat's on your mind today? 😊";
  }

  private getDefaultResponse(message: string): string {
    const responses = [
      "That's interesting! 🤔 I love learning about different topics. As ServiceHub Assistant, I'm here to help with all your creative and technical needs.",
      "Great question! 💭 While I enjoy chatting about various subjects, my specialty is helping with freelancing services - design, content, web development, and more.",
      "I appreciate you sharing that! 😊 Whether it's related to my services or not, I'm always happy to help and brainstorm ideas."
    ];
    
    return this.getRandomResponse(responses) + "\n\nIs there a creative project I can assist you with? Or perhaps you'd like to know more about:\n• Professional design services\n• Student-friendly pricing\n• Quick project turnarounds\n• Portfolio examples\n\nWhat interests you most? 🎨";
  }

  private getRandomResponse(responses: string[]): string {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Context management
  updateContext(key: keyof ChatContext, value: any): void {
    this.context[key] = value;
  }

  getContext(): ChatContext {
    return this.context;
  }
}

// Export utility functions
export const createServiceHubAssistant = (context?: ChatContext) => {
  return new ServiceHubAssistant(context);
};

export const getQuickResponses = () => [
  "I need a logo design",
  "Website development quote",
  "Content writing help",
  "What's your pricing?",
  "Student discount info",
  "Portfolio examples",
  "How to get started?",
  "Payment options"
];

export const getServiceCategories = () => [
  {
    name: "Design Services",
    items: ["Logo Design", "Social Media Graphics", "Brochures", "Business Cards"]
  },
  {
    name: "Web Development",
    items: ["Responsive Websites", "E-commerce Sites", "Landing Pages", "Web Apps"]
  },
  {
    name: "Content & Marketing",
    items: ["Blog Writing", "SEO Content", "Social Media Strategy", "Email Campaigns"]
  },
  {
    name: "Student Specials",
    items: ["Assignment Help", "Presentation Design", "Resume Creation", "Project Branding"]
  }
];