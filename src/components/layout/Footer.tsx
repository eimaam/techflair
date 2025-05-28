import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Tech</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Flair</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              A cutting-edge software development agency and tech startup studio specializing in building digital solutions for businesses across Africa and beyond.
            </p>
            <div className="flex space-x-4">
              {/* <a href="https://github.com" aria-label="GitHub" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <Linkedin size={20} />
              </a> */}
              {/* email */}
              <a href="mailto:techflairhq@gmail.com" aria-label="Email" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <Mail size={20} />
              </a>
              <a href="https://instagram.com/techflairhq" aria-label="Instagram" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-2 flex-shrink-0 text-blue-600 dark:text-blue-400" size={18} />
                <span className="text-gray-600 dark:text-gray-300">
                  MZ Aminu Street, CRD, FHA<br />
                  Lugbe, FCT, Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-blue-600 dark:text-blue-400" size={18} />
                <a href="tel:+2348068375557" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  +234 806 837 5557
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-blue-600 dark:text-blue-400" size={18} />
                <a href="mailto:techflairhq@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  techflairhq@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Tech Flair. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;