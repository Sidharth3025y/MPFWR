import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiRedux
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, category: 'frontend' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, category: 'frontend' },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, category: 'frontend' },
    { name: 'React', icon: <FaReact className="text-blue-400" />, category: 'frontend' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" />, category: 'frontend' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, category: 'frontend' },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" />, category: 'frontend' },
    { name: 'Redux', icon: <SiRedux className="text-purple-400" />, category: 'frontend' },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, category: 'backend' },
    { name: 'Express', icon: <SiExpress className="text-gray-300" />, category: 'backend' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, category: 'backend' },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, category: 'tools' },
    { name: 'Figma', icon: <FaFigma className="text-purple-500" />, category: 'tools' },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-500" />, category: 'tools' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id='Skills'>
    <div className="bg-gradient-to-b from-purple-900 to-blue-900 pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
            My Skills
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm"
            >
              <div className="text-4xl mb-3 text-white">{skill.icon}</div>
              <span className="text-lg text-white">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Skills;
