import React from 'react';
import Container from '../ui/Container';

const ProjectsHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our <span className="text-blue-600 dark:text-blue-400">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore our latest projects and see how we've helped businesses across industries
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsHero;