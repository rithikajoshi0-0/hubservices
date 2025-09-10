import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'branding', name: 'Branding' },
    { id: 'web', name: 'Web Design' },
    { id: 'graphic', name: 'Graphic Design' },
    { id: 'content', name: 'Content' },
  ];

  const projects = [
    {
      id: 1,
      title: 'TechStart Logo & Branding',
      category: 'branding',
      description: 'Complete brand identity for a student-run tech startup',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Student Startup',
      year: '2024',
    },
    {
      id: 2,
      title: 'EcoFriendly Website Design',
      category: 'web',
      description: 'Modern, responsive website for an environmental NGO',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Small NGO',
      year: '2024',
    },
    {
      id: 3,
      title: 'Food Delivery App UI',
      category: 'web',
      description: 'Clean and intuitive mobile app interface design',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Local Business',
      year: '2024',
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'graphic',
      description: 'Instagram post series for a fashion brand',
      image: 'https://images.pexels.com/photos/267401/pexels-photo-267401.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Fashion Startup',
      year: '2024',
    },
    {
      id: 5,
      title: 'Blog Content Strategy',
      category: 'content',
      description: '3-month content calendar and blog posts for SaaS company',
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Tech Company',
      year: '2024',
    },
    {
      id: 6,
      title: 'Event Poster Design',
      category: 'graphic',
      description: 'Eye-catching poster for college cultural fest',
      image: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'College Event',
      year: '2024',
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Eye className="w-4 h-4" />
            <span>My Work</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recent Projects &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              {' '}Success Stories
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on for students, startups, and small businesses across India.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-cyan-100 hover:text-cyan-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="text-white">
                        <div className="text-sm opacity-75">{project.client}</div>
                        <div className="text-sm opacity-75">{project.year}</div>
                      </div>
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium mb-3 capitalize">
                  {project.category}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to see your project here? Let's create something amazing together!
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
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;