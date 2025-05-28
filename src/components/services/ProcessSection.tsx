import React from 'react';
import Section from '../ui/Section';

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and challenges through in-depth consultation sessions.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Our team creates a detailed project roadmap, including features, timeline, and resource allocation.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'We craft wireframes and interactive prototypes to visualize the user experience before development begins.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'Our engineers build your solution using modern technologies and following best practices in code quality.',
  },
  {
    step: '05',
    title: 'Testing',
    description: 'Rigorous testing ensures your product works flawlessly across all intended platforms and use cases.',
  },
  {
    step: '06',
    title: 'Deployment',
    description: 'We handle the launch process, ensuring a smooth transition to production environments.',
  },
  {
    step: '07',
    title: 'Support',
    description: 'Post-launch, we provide ongoing maintenance, updates, and technical support as needed.',
  },
];

const ProcessSection: React.FC = () => {
  return (
    <Section 
      title="Our Development Process" 
      subtitle="A structured approach that ensures quality, transparency, and on-time delivery"
      centered
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="relative mt-12">
        {/* Process timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 transform md:translate-x-px"></div>
        
        <div className="space-y-12">
          {process.map((item, index) => (
            <div key={index} className="relative">
              <div className={`flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Step indicator */}
                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center transform -translate-x-1/2 md:-translate-x-4 text-white font-bold z-10">
                  {item.step}
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProcessSection;