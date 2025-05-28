import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const ContactCTA: React.FC = () => {
  return (
    <Section className="bg-blue-600 text-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to bring your idea to life?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-blue-100">
          Let's discuss how we can help transform your vision into a digital reality. Our team is ready to create a tailored solution for your business.
        </p>
        <Link to="/contact">
          <Button 
            variant="secondary" 
            size="lg" 
          >
            Get in Touch
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default ContactCTA;