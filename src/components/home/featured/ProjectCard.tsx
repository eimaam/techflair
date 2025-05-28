import React from 'react';
import Card from '../../ui/Card';
import { ProjectType } from '../../../types';

interface ProjectCardProps {
  project: ProjectType;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  return (
    <Card 
      hoverable 
      className="group overflow-hidden backdrop-blur-sm border-gray-800/50 h-full transition-all duration-500 hover:border-primary-500/50"
    >
      <div className={`relative ${featured ? 'h-full' : 'h-full'} overflow-hidden rounded-lg`}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-60" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-400 rounded-full">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          {featured && (
            <p className="text-gray-300 mb-4 line-clamp-2">
              {project.description}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, featured ? 4 : 2).map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-3 py-1 bg-gray-900/50 text-gray-300 rounded-full border border-gray-800/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;