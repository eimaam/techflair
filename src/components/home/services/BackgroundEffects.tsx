import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Gradient orbs */}
      <div className="absolute -top-40 -right-20 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-accent-purple-light rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-accent-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
    </>
  );
};

export default BackgroundEffects;