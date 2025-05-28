import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { values } from '../../data/values';
import { Lightbulb, Handshake, Globe, CheckCircle } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb size={36} className="text-blue-600 dark:text-blue-400 mb-4" />,
  Handshake: <Handshake size={36} className="text-blue-600 dark:text-blue-400 mb-4" />,
  Globe: <Globe size={36} className="text-blue-600 dark:text-blue-400 mb-4" />,
  CheckCircle: <CheckCircle size={36} className="text-blue-600 dark:text-blue-400 mb-4" />,
};

const CoreValues: React.FC = () => {
  return (
    <Section 
      title="Our Core Values" 
      subtitle="The principles that guide our work and relationships"
      centered
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value) => (
          <Card key={value.id} className="flex flex-col">
            {iconMap[value.icon]}
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {value.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {value.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default CoreValues;