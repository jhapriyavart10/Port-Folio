import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    primary: 'bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark',
    success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500',
    danger: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500',
  };

  return (
    <motion.span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.span>
  );
};

export default Badge;
