import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHotel,
  FaShoppingCart,
  FaPlane,
  FaCoffee,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Hotel Booking',
      description: 'A full-stack hotel reservation system with user authentication and payment integration',
      icon: <FaHotel className="text-purple-500" />,
      tags: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'E-commerce',
      description: 'Online store with cart functionality, product filtering, and admin dashboard',
      icon: <FaShoppingCart className="text-green-500" />,
      tags: ['Next.js', 'Stripe', 'Firebase'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Travel App',
      description: 'Interactive travel planning application with map integration and itinerary builder',
      icon: <FaPlane className="text-blue-500" />,
      tags: ['React', 'Mapbox', 'Express'],
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Cafe Management',
      description: 'System for cafe owners to manage orders, inventory, and staff scheduling',
      icon: <FaCoffee className="text-yellow-500" />,
      tags: ['MERN Stack', 'Redux', 'JWT'],
      github: '#',
      live: '#'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-purple-900 to-blue-900 pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
            My Projects
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Some of my recent work and experiments
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white/10 rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-700/50 px-2 py-1 rounded text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <SiNetlify className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
