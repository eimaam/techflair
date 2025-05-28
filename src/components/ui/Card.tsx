import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
}) => {
  return (
    <div 
      className={`
        bg-gray-900/50 backdrop-blur-sm border border-gray-800
        rounded-lg shadow-xl shadow-gray-950/10 p-4
        ${hoverable ? 'transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10 hover:border-gray-700' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;