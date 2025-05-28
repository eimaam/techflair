import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Section from '../ui/Section';

const features = [
  'Expert developers with startup experience',
  'Focus on scalable, maintainable code',
  'Design-driven development approach',
  'Transparent project management',
  'Post-launch support and maintenance',
  'Agile development methodology'
];

const FeaturesMission: React.FC = () => {
  return (
    <Section className="bg-gray-950 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-400 to-white">
            Why Choose <span className="text-primary-400">Tech Flair</span>
          </h2>
          <p className="text-gray-400 mb-6">
            We combine technical excellence with business understanding to create digital solutions that make a real difference. Our team brings years of experience working with startups and established businesses across Africa and beyond.
          </p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start group">
                <CheckCircle2 className="flex-shrink-0 mr-2 mt-1 text-primary-500 group-hover:text-primary-400 transition-colors" size={20} />
                <span className="text-gray-300 group-hover:text-gray-100 transition-colors">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:ml-12">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 shadow-xl hover:shadow-primary-500/10 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Our Mission</h3>
            <p className="text-gray-400 mb-6">
              To empower African businesses and startups with world-class software solutions that drive growth, efficiency, and innovation.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Our Vision</h3>
            <p className="text-gray-400">
              To be the leading technology partner for businesses looking to thrive in the digital economy, known for our technical excellence, business acumen, and positive impact across the continent.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeaturesMission;