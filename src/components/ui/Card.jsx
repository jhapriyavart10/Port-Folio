import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true }) => {
  return (
    <motion.div
      className={`bg-card-light dark:bg-card-dark rounded-lg shadow-md overflow-hidden ${className}`}
      whileHover={hoverEffect ? { y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
