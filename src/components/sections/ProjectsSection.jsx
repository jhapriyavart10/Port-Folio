import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Next.js Dashboard',
      description: 'A real-time, responsive dashboard aggregating cryptocurrency prices, global weather data, and blockchain news with WebSocket implementation and fallback to REST polling for reliability.',
      image: '/images/crypto-dashboard.png',
      tech: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'WebSocket'],
      github: 'https://github.com/jhapriyavart10/weather-dashboard',
      live: 'https://crypto-dashboard-demo.example.com',
    },
    {
      title: 'FeastFlash',
      description: 'A MERN-based food ordering platform with JWT authentication, secure Stripe payments, and intuitive UI with product filtering, cart management, and order tracking.',
      image: '/images/feast-flash.png',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Multer'],
      github: 'https://github.com/jhapriyavart10/Feast-Flash/tree/master/Food-Delivery-main',
      live: 'https://feastflash.example.com',
    },
    {
      title: 'Code Quest',
      description: 'A scalable online learning platform enabling instructors to create and manage content with integrated Razorpay payments and personalized dashboards for real-time performance tracking.',
      image: '/images/code-quest.png',
      tech: ['React', 'Express.js', 'MongoDB', 'Razorpay', 'Tailwind'],
      github: 'https://github.com/jhapriyavart10/CodeQuest/tree/master/CodePlay-Edtech-MERN-main',
      live: 'https://code-quest.example.com',
    }
  ];

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="primary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex space-x-3 mt-auto">
                  <Button 
                    variant="outline" 
                    className="flex items-center"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <FaGithub className="mr-2" /> Code
                  </Button>
                  <Button 
                    className="flex items-center"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
