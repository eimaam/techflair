import React from 'react';
import Section from '../ui/Section';

const MapSection: React.FC = () => {
  return (
    <Section className="bg-gray-50 dark:bg-gray-800 px-0 py-0">
      <div className="h-96 w-full">
        {/* TODO: to add/embed map from google maps  */}
        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-2">Interactive map would be here in production</p>
            <p className="font-medium text-gray-900 dark:text-white">MZ Aminu Street, CRD, FHA, Lugbe, FCT, Abuja, Nigeria</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MapSection;