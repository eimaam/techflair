import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../../ui/Button';

const ViewAllButton: React.FC = () => {
  return (
    <div className="relative z-10 mt-12 text-center">
      <Link to="/projects">
        <Button 
          variant="outline" 
          className="inline-flex items-center group hover:bg-primary-500/10 hover:border-primary-500/50"
        >
          View All Projects
          <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={16} />
        </Button>
      </Link>
    </div>
  );
};

export default ViewAllButton;