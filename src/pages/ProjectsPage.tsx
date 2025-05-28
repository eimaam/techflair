import React from 'react';
import Layout from '../components/layout/Layout';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ContactCTA from '../components/home/ContactCTA';

const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <ProjectsHero />
      <ProjectsGrid />
      <ContactCTA />
    </Layout>
  );
};

export default ProjectsPage;