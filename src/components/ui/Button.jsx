import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none transition-colors';
  
  const variants = {
    primary: 'bg-primary-light hover:bg-primary-light/90 text-white dark:bg-primary-dark dark:hover:bg-primary-dark/90',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100',
    outline: 'border border-primary-light text-primary-light hover:bg-primary-light/10 dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark/10',
    ghost: 'hover:bg-gray-100 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800',
  };
  
  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-2.5',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
