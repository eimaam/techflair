import React from 'react';
import Container from '../ui/Container';

const ContactHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a project in mind? We'd love to discuss how we can help bring your ideas to life.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;