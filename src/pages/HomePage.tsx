import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import FeaturesMission from '../components/home/FeaturesMission';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';
import ContactForm from '../components/contact/ContactForm';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <ServicesOverview />
      <FeaturesMission />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
      <ContactForm />
    </Layout>
  );
};

export default HomePage;