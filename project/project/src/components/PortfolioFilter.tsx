import React, { useState } from 'react';
import { Filter, ExternalLink, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  year: string;
  tags: string[];
  featured: boolean;
}

const PortfolioFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const categories = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'branding', name: 'Branding', count: 4 },
    { id: 'web', name: 'Web Design', count: 3 },
    { id: 'graphic', name: 'Graphic Design', count: 3 },
    { id: 'content', name: 'Content', count: 2 },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'TechStart Logo & Branding',
      category: 'branding',
      description: 'Complete brand identity for a student-run tech startup including logo, business cards, and brand guidelines.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Student Startup',
      year: '2024',
      tags: ['logo', 'branding', 'startup', 'tech'],
      featured: true,
    },
    {
      id: 2,
      title: 'EcoFriendly Website Design',
      category: 'web',
      description: 'Modern, responsive website for an environmental NGO with donation integration and blog.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Small NGO',
      year: '2024',
      tags: ['website', 'responsive', 'ngo', 'environment'],
      featured: true,
    },
    {
      id: 3,
      title: 'Food Delivery App UI',
      category: 'web',
      description: 'Clean and intuitive mobile app interface design with user-friendly ordering flow.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Local Business',
      year: '2024',
      tags: ['app', 'ui', 'mobile', 'food'],
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'graphic',
      description: 'Instagram post series for a fashion brand with consistent visual identity.',
      image: 'https://images.pexels.com/photos/267401/pexels-photo-267401.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Fashion Startup',
      year: '2024',
      tags: ['social media', 'instagram', 'fashion', 'campaign'],
      featured: true,
    },
    {
      id: 5,
      title: 'Blog Content Strategy',
      category: 'content',
      description: '3-month content calendar and blog posts for SaaS company targeting Indian market.',
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Tech Company',
      year: '2024',
      tags: ['content', 'blog', 'saas', 'strategy'],
      featured: false,
    },
    {
      id: 6,
      title: 'Event Poster Design',
      category: 'graphic',
      description: 'Eye-catching poster series for college cultural fest with vibrant colors.',
      image: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'College Event',
      year: '2024',
      tags: ['poster', 'event', 'college', 'festival'],
      featured: false,
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFeatured = !showFeaturedOnly || project.featured;
    
    return matchesCategory && matchesSearch && matchesFeatured;
  });

  return (
    <div className="space-y-8">
      {/* Filter Controls */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <Filter className="w-5 h-5 text-cyan-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filter Projects</h3>
        </div>

        <div className="space-y-4">
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search projects or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-cyan-100 hover:text-cyan-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Featured Toggle */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="featured-only"
              checked={showFeaturedOnly}
              onChange={(e) => setShowFeaturedOnly(e.target.checked)}
              className="w-5 h-5 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
            />
            <label htmlFor="featured-only" className="text-sm text-gray-700">
              Show featured projects only
            </label>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center">
        <p className="text-gray-600">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {project.featured && (
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              )}

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
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <Eye className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioFilter;
