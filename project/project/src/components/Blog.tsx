import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Market Your Student Startup on a Zero Budget',
      excerpt: 'Discover 10 proven strategies to promote your startup without spending money. Perfect for college students and young entrepreneurs.',
      category: 'Marketing',
      readTime: '5 min read',
      date: 'Jan 15, 2024',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: '5 Design Mistakes Small Businesses Make (And How to Fix Them)',
      excerpt: 'Learn about common design pitfalls that hurt your brand and discover simple solutions that make a big difference.',
      category: 'Design Tips',
      readTime: '7 min read',
      date: 'Jan 12, 2024',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'Building Your Personal Brand as a Student: A Complete Guide',
      excerpt: 'Step-by-step guide to creating a strong personal brand that opens doors to internships and opportunities.',
      category: 'Personal Branding',
      readTime: '8 min read',
      date: 'Jan 10, 2024',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: 'Why Every Small Business Needs Professional Design',
      excerpt: 'Understanding the impact of good design on customer trust, sales, and business growth.',
      category: 'Business Growth',
      readTime: '6 min read',
      date: 'Jan 8, 2024',
      image: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Blog & Resources</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tips & Insights for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              {' '}Growing Your Business
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical advice on marketing, design, and business growth specifically for students and small businesses in India.
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-80 lg:h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Featured Post
                </span>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">
                  {posts[0].category}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{posts[0].date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {posts[0].title}
              </h3>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {posts[0].excerpt}
              </p>
              
              <button className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 font-semibold transition-colors duration-200">
                <span>Read Full Article</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  
                  <button className="inline-flex items-center space-x-1 text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-200">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Weekly Tips!</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Get practical business and design tips delivered to your inbox every week. Join 500+ students and entrepreneurs.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;