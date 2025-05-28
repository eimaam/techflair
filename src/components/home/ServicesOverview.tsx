import React from 'react';
import Section from '../ui/Section';
import ServiceCard from './services/ServiceCard';
import BackgroundEffects from './services/BackgroundEffects';
import { services } from '../../data/services';

const ServicesOverview: React.FC = () => {
  return (
    <Section 
      id="services" 
      title="Our Services" 
      subtitle="From ideation to deployment, we provide comprehensive software development solutions tailored to your business needs."
      centered
      className="bg-gray-950 relative"
    >
      <BackgroundEffects />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px] max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`
              ${index === 0 ? 'md:col-span-3 md:row-span-2' : ''}
              ${index === 1 ? 'md:col-span-3 md:row-span-2' : ''}
              ${index === 2 ? 'md:col-span-2 md:row-span-1' : ''}
              ${index === 3 ? 'md:col-span-2 md:row-span-1' : ''}
              ${index === 4 ? 'md:col-span-2 md:row-span-1' : ''}
            `}
          >
            <ServiceCard service={service} featured={index < 2} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesOverview;