import React from 'react';
import Layout from '../components/layout/Layout';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ProcessSection from '../components/services/ProcessSection';
import TechSection from '../components/services/TechSection';
import ContactCTA from '../components/home/ContactCTA';

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <TechSection />
      <ContactCTA />
    </Layout>
  );
};

export default ServicesPage;