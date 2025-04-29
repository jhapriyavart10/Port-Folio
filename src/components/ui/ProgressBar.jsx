import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({ value, label }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${value}%`,
        transition: { duration: 1, ease: "easeOut" }
      });
    }
  }, [controls, inView, value]);

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium">{label}</span>
        <span className="text-base font-medium">{value}%</span>
      </div>
      <div ref={ref} className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          className="h-2.5 rounded-full bg-primary-light dark:bg-primary-dark"
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
