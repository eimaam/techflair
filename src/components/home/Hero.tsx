import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      const spotlight = container.querySelector('.spotlight') as HTMLElement;
      if (spotlight) {
        spotlight.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(99, 102, 241, 0.15), transparent 80%)`;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-950 dark:bg-black"
    >
      {/* Spotlight effect */}
      <div className="spotlight absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -top-8 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm text-gray-300">Available for new projects</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
            Building digital solutions
            <br />
            with <span className="text-blue-400">flair</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We craft exceptional software experiences that empower businesses 
            <br className="hidden md:block" />
            to thrive in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Start a Project
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex items-center text-lg px-8 py-6 border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => window.location.href = '/services'}
            >
              Explore Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </Container>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
    </section>
  );
};

export default Hero;