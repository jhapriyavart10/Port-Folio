import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';

import { 
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiDocker,
  SiGit, SiGithub, SiVisualstudiocode, SiFigma, 
  SiHtml5, SiCss3, SiAngular,  SiAmazonaws, SiBootstrap, SiRedux,
  SiVercel, SiNetlify, SiPostman, SiNpm, SiChartdotjs, SiStyledcomponents
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const SkillsSection = () => {
  const languages = [
    { label: 'JavaScript', value: 90, icon: SiJavascript, color: 'text-yellow-400' },
    { label: 'TypeScript', value: 85, icon: SiTypescript, color: 'text-blue-500' },
    { label: 'Python', value: 80, icon: SiPython, color: 'text-blue-500' },
    { label: 'C/C++', value: 85, icon: DiJava, color: 'text-red-500' },
  ];

  const frontend = [
    { label: 'HTML5', icon: SiHtml5, color: 'text-orange-600' },
    { label: 'CSS3', icon: SiCss3, color: 'text-blue-600' },
    { label: 'React', icon: SiReact, color: 'text-blue-400' },
    { label: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
    { label: 'Redux', icon: SiRedux, color: 'text-purple-600' },
    { label: 'Angular', icon: SiAngular, color: 'text-red-600' },
    { label: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
    { label: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' },
  ];

  const backend = [
    { label: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { label: 'Express', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
    { label: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { label: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
  ];

  const tools = [
    { label: 'Git', icon: SiGit, color: 'text-orange-500' },
    { label: 'GitHub', icon: SiGithub, color: 'text-gray-700 dark:text-gray-300' },
    { label: 'Docker', icon: SiDocker, color: 'text-blue-600' },
    { label: 'AWS', icon: SiAmazonaws, color: 'text-orange-400' },
    { label: 'Vercel', icon: SiVercel, color: 'text-black dark:text-white' },
    { label: 'Netlify', icon: SiNetlify, color: 'text-teal-500' },
    { label: 'Postman', icon: SiPostman, color: 'text-orange-500' },
    { label: 'NPM', icon: SiNpm, color: 'text-red-500' },
    { label: 'Figma', icon: SiFigma, color: 'text-purple-500' },
    { label: 'Chart.js', icon: SiChartdotjs, color: 'text-pink-500' },
    { label: 'VS Code', icon: SiVisualstudiocode, color: 'text-blue-500' },
    { label: 'Styled Components', icon: SiStyledcomponents, color: 'text-pink-500' },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are the technologies and tools I work with
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-6">Programming Languages</h3>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center mb-1">
                    <lang.icon className={`w-5 h-5 mr-2 ${lang.color}`} />
                    <span className="font-medium">{lang.label}</span>
                  </div>
                  <ProgressBar value={lang.value} label="" />
                </div>
              ))}
            </div>
          </Card>

          {/* Frontend */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-6">Frontend Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {frontend.map((tech, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                  whileHover={{ scale: 1.03 }}
                >
                  <tech.icon className={`w-8 h-8 mr-3 ${tech.color}`} />
                  <span className="font-medium">{tech.label}</span>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold my-6">Backend Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {backend.map((tech, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                  whileHover={{ scale: 1.03 }}
                >
                  <tech.icon className={`w-8 h-8 mr-3 ${tech.color}`} />
                  <span className="font-medium">{tech.label}</span>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Tools */}
          <Card className="p-6 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <tool.icon className={`w-6 h-6 mr-2 ${tool.color}`} />
                  <span className="font-medium">{tool.label}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;