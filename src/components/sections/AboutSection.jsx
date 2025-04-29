import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { FaGraduationCap, FaCode, FaGamepad, FaTableTennis, FaPlane } from 'react-icons/fa';

const AboutSection = () => {
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
    visible: { y: 0, opacity: 1 }
  };

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute of Information Technology Design and Manufacturing, Kancheepuram',
      year: '2022 - 2026',
      description: 'Current GPA: 7.5/10'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Delhi Public School, Ranchi',
      year: '2019 - 2021',
      description: 'Percentage: 95.66%'
    }
  ];

  const interests = [
    { icon: FaCode, label: 'Competitive Programming' },
    { icon: FaGamepad, label: 'Gaming' },
    { icon: FaTableTennis, label: 'Playing Badminton' },
    { icon: FaPlane, label: 'Traveling' }
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="flex flex-col md:flex-row gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Avatar & Bio */}
          <motion.div className="w-full md:w-1/2" variants={itemVariants}>
            <Card className="p-6 h-full">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary-light dark:border-primary-dark mb-6 md:mb-0 flex-shrink-0">
                  <div className="w-full h-full relative">
                    <img 
                      src="/images/avatar.jpg" 
                      alt="Profile" 
                      className="absolute w-full h-full object-cover object-center"
                      style={{ objectPosition: "center top" }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I'm Priyavart Jha, a Computer Science student at IIITDM Kancheepuram with a passion for full-stack development 
                    and competitive programming. I specialize in building web applications using React.js, Next.js, and the MERN stack.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Currently, I'm focused on creating accessible, high-performance web applications 
                    with clean code practices and modern development techniques.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Education & Interests */}
          <motion.div className="w-full md:w-1/2 flex flex-col gap-6" variants={itemVariants}>
            {/* Education */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FaGraduationCap className="mr-2 text-primary-light dark:text-primary-dark" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary-light dark:before:bg-primary-dark">
                    <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-primary-light dark:bg-primary-dark"></div>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-primary-light dark:text-primary-dark font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{edu.year}</p>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Interests & Fun Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"
                  >
                    <interest.icon className="w-6 h-6 mr-3 text-primary-light dark:text-primary-dark" />
                    <span className="font-medium">{interest.label}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
