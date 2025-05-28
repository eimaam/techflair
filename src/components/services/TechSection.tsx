import React from 'react';
import Section from '../ui/Section';

const technologies = {
  'Frontend': ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GraphQL', 'Webpack', 'Vite', 'Sass/SCSS', 'Material UI'],
  'Backend': ['Node.js', 'Django', 'Flask', 'Express', 'Spring Boot', 'Laravel', 'NestJS', 'FastAPI', 'Ruby on Rails', 'ASP.NET Core', 'Go', 'Rust'],
  'Mobile': ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'SwiftUI', 'Android Jetpack', 'Xamarin', 'Unity', 'Capacitor'],
  'Database': ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis', 'Supabase', 'Cassandra', 'DynamoDB', 'Elasticsearch', 'Neo4j', 'CouchDB', 'MariaDB'],
  'Cloud': ['AWS', 'Azure', 'Google Cloud', 'Digital Ocean', 'Heroku', 'Vercel', 'Cloudflare', 'Netlify', 'OVH Cloud', 'Linode', 'Oracle Cloud', 'IBM Cloud'],
  'Tools': ['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Jest', 'Cypress', 'Jenkins', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack'],
  'AI/ML': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Hugging Face', 'Keras', 'NLTK', 'Pandas', 'NumPy'],
  'Security': ['OAuth 2.0', 'JWT', 'SSL/TLS', 'WAF', 'Penetration Testing', 'OWASP', 'Encryption', 'Biometrics']
};

const TechSection: React.FC = () => {
  return (
    <Section 
      title="Our Technology Stack" 
      subtitle="We use modern, proven technologies tailored to each project's specific needs"
      centered
      className="bg-white dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechSection;