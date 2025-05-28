import React from 'react';
import Section from '../ui/Section';
import { services } from '../../data/services';
import { Code, Smartphone, Cloud, Rocket, CreditCard } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={48} className="text-blue-600 dark:text-blue-400" />,
  Smartphone: <Smartphone size={48} className="text-blue-600 dark:text-blue-400" />,
  Cloud: <Cloud size={48} className="text-blue-600 dark:text-blue-400" />,
  Rocket: <Rocket size={48} className="text-blue-600 dark:text-blue-400" />,
  CreditCard: <CreditCard size={48} className="text-blue-600 dark:text-blue-400" />,
};

const serviceDetails: Record<string, string[]> = {
  '1': [
    'Requirements analysis and solution design',
    'Custom business logic and workflows',
    'Database design and implementation',
    'API development and integration',
    'Testing and quality assurance',
    'Deployment and maintenance'
  ],
  '2': [
    'Responsive web application development',
    'Progressive Web Apps (PWAs)',
    'Cross-platform mobile applications',
    'Native iOS and Android development',
    'UI/UX design for mobile experiences',
    'App Store and Play Store submission'
  ],
  '3': [
    'Multi-tenant architecture design',
    'Subscription management systems',
    'User management and authentication',
    'Usage analytics and reporting',
    'Cloud infrastructure setup',
    'Continuous integration and deployment'
  ],
  '4': [
    'Rapid prototyping and wireframing',
    'Core feature implementation',
    'User testing and feedback collection',
    'Iterative development approach',
    'Scalable architecture for future growth',
    'Investor-ready demonstration builds'
  ],
  '5': [
    'Payment gateway integrations',
    'Financial reporting systems',
    'Invoice and billing automation',
    'Inventory management',
    'Customer relationship management',
    'Data security and compliance'
  ]
};

const ServicesList: React.FC = () => {
  return (
    <Section className="bg-white dark:bg-gray-900">
      <div className="space-y-20">
        {services.map((service) => (
          <div key={service.id} className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg inline-block mb-4">
                {iconMap[service.icon]}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {service.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
            </div>
            <div className="lg:col-span-3 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                What's Included:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 dark:text-gray-300">
                {serviceDetails[service.id].map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesList;