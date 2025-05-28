import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section from '../ui/Section';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <Section 
      className="bg-gray-950 relative overflow-hidden"
      id="testimonials"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-purple-light rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Quote className="mx-auto text-primary-400" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-400 to-white">
            Client Testimonials
          </h2>
        </div>
        
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-500 ${
                activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 absolute top-0 left-0 translate-x-8'
              }`}
              style={{ display: activeIndex === index ? 'block' : 'none' }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-8 mb-8 shadow-xl">
                <p className="text-gray-300 italic text-lg mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl" />
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-primary-500 mr-4"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-8 bg-primary-400'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;