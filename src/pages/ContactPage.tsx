import React from 'react';
import Layout from '../components/layout/Layout';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <MapSection />
    </Layout>
  );
};

export default ContactPage;