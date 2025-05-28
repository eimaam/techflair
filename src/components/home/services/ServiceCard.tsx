import React from 'react';
import { Code, Smartphone, Cloud, Rocket, CreditCard } from 'lucide-react';
import Card from '../../ui/Card';
import { ServiceType } from '../../../types';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={36} className="text-primary-400" />,
  Smartphone: <Smartphone size={36} className="text-primary-400" />,
  Cloud: <Cloud size={36} className="text-primary-400" />,
  Rocket: <Rocket size={36} className="text-primary-400" />,
  CreditCard: <CreditCard size={36} className="text-primary-400" />,
};

interface ServiceCardProps {
  service: ServiceType;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  return (
    <Card 
      hoverable 
      className="group h-full p-6 backdrop-blur-sm border-gray-800/50 transition-all duration-500 hover:border-primary-500/50 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-900/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary-500/20 to-accent-purple-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
      
      <div className="relative z-10">
        <div className="mb-4 relative">
          {iconMap[service.icon]}
          <div className="absolute -inset-4 bg-primary-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-primary-400 transition-colors">
          {service.title}
        </h3>
        
        {featured ? (
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
            {service.description}
          </p>
        ) : (
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-2">
            {service.description}
          </p>
        )}
      </div>
      
      {/* Tech pattern background */}
      <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-gradient-to-br from-primary-500/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
    </Card>
  );
};

export default ServiceCard;