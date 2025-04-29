import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiPython } from 'react-icons/si';

const techIcons = [
  { icon: SiJavascript, color: 'text-yellow-400' },
  { icon: SiReact, color: 'text-blue-400' },
  { icon: SiTailwindcss, color: 'text-teal-400' },
  { icon: SiNodedotjs, color: 'text-green-500' },
  { icon: SiPython, color: 'text-blue-500' }
];

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' } }
  };

  const iconVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, type: 'spring' }
    })
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-16">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="w-full md:w-2/3 mt-10 md:mt-0" variants={itemVariants}>
            <motion.h3 
              className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400"
              variants={itemVariants}
            >
              Hello 👋, I'm
            </motion.h3>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-light to-purple-600 dark:from-primary-dark dark:to-purple-400 text-transparent bg-clip-text"
              variants={itemVariants}
            >
              Priyavart Jha
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              Full Stack Developer & Problem Solver
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
              variants={itemVariants}
            >
              Computer Science student at IIITDM Kancheepuram with expertise in building 
              web applications using modern technologies like React, Next.js, and the MERN stack.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-10" variants={itemVariants}>
              <Button size="lg" onClick={() => window.open('/resume.pdf', '_blank')}>
                <FaFileDownload className="mr-2" /> Download Resume
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Let's Connect
              </Button>
            </motion.div>

            <motion.div className="flex space-x-4" variants={itemVariants}>
              <motion.a 
                href="https://github.com/jhapriyavart10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/priyavart-jha-0207z/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/3 flex justify-center mb-10 md:mb-0"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-light to-purple-600 dark:from-primary-dark dark:to-purple-500 rounded-full overflow-hidden flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              />
              <motion.div className="absolute inset-4 bg-background-light dark:bg-background-dark rounded-full flex items-center justify-center overflow-hidden">
                <motion.div className="w-full h-full relative overflow-hidden">
                  <motion.img 
                    src="/images/avatar(2).jpg" 
                    alt="Developer" 
                    className="absolute w-full h-full object-cover object-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
              
              {techIcons.map((tech, i) => (
                <motion.div
                  key={i}
                  className={`absolute p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg ${tech.color}`}
                  style={{
                    top: `${50 + 45 * Math.sin(i * (2 * Math.PI / techIcons.length))}%`,
                    left: `${50 + 45 * Math.cos(i * (2 * Math.PI / techIcons.length))}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  custom={i}
                  variants={iconVariants}
                >
                  <tech.icon size={24} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
