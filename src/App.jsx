import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { motion } from 'framer-motion';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page sections
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ContactSection from './components/sections/ContactSection';

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <motion.main 
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </motion.main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
