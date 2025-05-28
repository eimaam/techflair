import React from 'react';
import Section from '../ui/Section';
import ProjectCard from './featured/ProjectCard';
import BackgroundEffects from './featured/BackgroundEffects';
import ViewAllButton from './featured/ViewAllButton';
import { projects } from '../../data/projects';

const FeaturedProjects: React.FC = () => {
  const featuredProjects = projects.slice(0, 6); // Show 6 projects for bento grid
  
  return (
    <Section 
      id="projects" 
      title="Featured Projects" 
      subtitle="Explore some of our recent work and see how we've helped businesses transform their digital presence."
      centered
      className="bg-gray-950 relative"
    >
      <BackgroundEffects />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px] max-w-7xl mx-auto">
        {featuredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className={`
              ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              ${index === 1 ? 'md:col-span-2 md:row-span-1' : ''}
              ${index === 2 ? 'md:col-span-2 md:row-span-1' : ''}
              ${index === 3 ? 'md:col-span-2 md:row-span-1' : ''}
              ${index === 4 ? 'md:col-span-2 md:row-span-2' : ''}
              ${index === 5 ? 'md:col-span-2 md:row-span-1' : ''}
            `}
          >
            <ProjectCard project={project} featured={index === 0 || index === 4} />
          </div>
        ))}
      </div>
      
      <ViewAllButton />
    </Section>
  );
};

export default FeaturedProjects;