import React from 'react';
import Layout from '../components/layout/Layout';
import AboutHero from '../components/about/AboutHero';
import CompanyOverview from '../components/about/CompanyOverview';
import CoreValues from '../components/about/CoreValues';
import TeamSection from '../components/about/TeamSection';
import ContactCTA from '../components/home/ContactCTA';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <AboutHero />
      <CompanyOverview />
      <CoreValues />
      {/* <TeamSection /> */}
      <ContactCTA />
    </Layout>
  );
};

export default AboutPage;