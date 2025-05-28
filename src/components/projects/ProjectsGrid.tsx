import React, { useState } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { projects } from '../../data/projects';

type Category = 'All' | 'Fintech' | 'Healthcare' | 'AgriTech' | 'EdTech';

const categories: Category[] = ['All', 'Fintech', 'Healthcare', 'AgriTech', 'EdTech'];

const ProjectsGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <Section className="bg-white dark:bg-gray-900">
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center mb-12 gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} hoverable className="overflow-hidden">
            <div className="aspect-video mb-6 overflow-hidden rounded-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="mb-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsGrid;