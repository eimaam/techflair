import React from 'react';
import Section from '../ui/Section';

const CompanyOverview: React.FC = () => {
  return (
    <Section className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Story
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Founded in 2024, Tech Flair emerged from a vision to create a software development agency that truly understands the unique challenges and opportunities within the African tech ecosystem.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Based in Abuja, Nigeria, with a branch office in Jalingo, Taraba State capital, we've assembled a team of skilled developers, designers, and product managers who share a passion for building technology that makes a difference.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Today, Tech Flair is growing into a full-service digital agency, working with startups, established businesses, and organizations to create custom software solutions, websites, and mobile applications that drive growth and innovation across Nigeria and beyond.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Tech Flair team collaborating" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CompanyOverview;