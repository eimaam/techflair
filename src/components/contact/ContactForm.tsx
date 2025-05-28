import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  message: '',
};

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState(initialFormState);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <Section className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact information */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Contact Information
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Our team is ready to answer your questions and discuss your project needs. Reach out to us using the contact form or through the contact information below.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Email Us
              </h3>
              <a 
                href="mailto:techflairhq@gmail.com" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                techflairhq@gmail.com
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Call Us
              </h3>
              <a 
                href="tel:+2348068375557" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                +234 806 837 5557
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Visit Us
              </h3>
              <address className="not-italic text-gray-600 dark:text-gray-300">
                Main Office:<br />
                MZ Aminu Street, CRD, FHA<br />
                Lugbe, FCT, Abuja, Nigeria<br /><br />
                Branch Office:<br />
                11 Donga Street<br />
                Jalingo, Taraba State, Nigeria
              </address>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Business Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 2pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact form */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Send Us a Message
          </h2>
          
          {isSubmitted ? (
            <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-4 rounded-md mb-6">
              Thank you for your message! We'll get back to you shortly.
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formState.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a project type</option>
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="software">Custom Software</option>
                  <option value="mvp">MVP Development</option>
                  <option value="payment">Payment Solution</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send className="ml-2" size={16} />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;