import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaLaptopCode, 
  FaServer,
  FaArrowRight
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGraphql
} from 'react-icons/si';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 py-28 px-6">
      <motion.div 
        className="container mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"
            whileHover={{ scale: 1.02 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-white/90 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full-Stack MERN Developer
          </motion.p>
          <motion.p 
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Specializing in Modern Web Applications
          </motion.p>
        </motion.div>

        {/* Expertise Sections */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-10"
        >
          {/* Frontend Card */}
          <motion.div 
            variants={item}
            className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -10 }}
          >
            <div className="p-10">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mr-6">
                  <FaLaptopCode className="text-purple-300 text-4xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                  Frontend
                </h2>
              </div>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                I design captivating user interfaces with React and Next.js, focusing
                on performance, accessibility, and seamless user experiences through
                modern CSS architecture and interactive animations.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { name: 'React', icon: <FaReact className="text-blue-400" /> },
                  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
                  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
                  { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center px-5 py-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="text-2xl mr-3">{tech.icon}</span>
                    <span className="text-lg">{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-lg text-purple-300 hover:text-white"
              >
                <span>View Frontend Projects</span>
                <FaArrowRight className="ml-2" />
              </motion.div>
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div 
            variants={item}
            className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -10 }}
          >
            <div className="p-10">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mr-6">
                  <FaServer className="text-blue-300 text-4xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
                  Backend
                </h2>
              </div>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                I develop powerful server-side applications using Node.js and Express,
                implementing RESTful APIs and efficient database architecture with MongoDB,
                ensuring scalability, security, and optimal performance.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
                  { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
                  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
                  { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center px-5 py-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="text-2xl mr-3">{tech.icon}</span>
                    <span className="text-lg">{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-lg text-blue-300 hover:text-white"
              >
                <span>View Backend Projects</span>
                <FaArrowRight className="ml-2" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
