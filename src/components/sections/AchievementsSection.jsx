import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../ui/Card';
import { 
  SiCodeforces, 
  SiLeetcode, 
  SiCodechef,  
} from 'react-icons/si';

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(percentage * end));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    if (inView) {
      animationFrame = requestAnimationFrame(animate);
    }
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);
  
  return <span ref={ref}>{count}</span>;
};

const AchievementsSection = () => {
  const achievements = [
    {
      platform: 'Codeforces',
      title: 'Specialist',
      value: 1536,
      unit: 'Rating',
      description: 'Achieved a global rank of 666 out of 35,500 candidates in Div2 Round 1012',
      icon: SiCodeforces,
      color: 'text-blue-500 dark:text-blue-400'
    },
    {
      platform: 'LeetCode',
      title: 'Top 7.5%',
      value: 1831,
      unit: 'Rating',
      description: 'Attained a rank of 1199 out of 30,000 candidates in Weekly Contest 416',
      icon: SiLeetcode,
      color: 'text-yellow-500 dark:text-yellow-400'
    },
    {
      platform: 'CodeChef',
      title: '3-Star Coder',
      value: 1647,
      unit: 'Rating',
      description: 'Secured a 14th rank out of 5,500 candidates in Starters Contest 178',
      icon: SiCodechef,
      color: 'text-brown-500 dark:text-orange-400'
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Competitive programming standings and certifications
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 text-center">
              <achievement.icon className={`text-5xl mx-auto mb-4 ${achievement.color}`} />
              <h3 className="text-xl font-bold mb-2">{achievement.platform}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{achievement.title}</p>
              <div className="text-3xl font-bold text-primary-light dark:text-primary-dark mb-1">
                <CountUp end={achievement.value} />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{achievement.unit}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
