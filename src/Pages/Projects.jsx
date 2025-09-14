import React from 'react';
import { motion } from 'framer-motion';
import {
  FaDrumstickBite,
  FaShoppingCart,
  FaPlane,
  FaCoffee,
  FaGithub,
  FaLink,
} from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Fewa Chicken Point',
      description: 'Restaurant website with online order system',
      icon: <FaDrumstickBite className="text-red-500" />,
      tags: ['React', 'Tailwind CSS'],
      github: 'https://github.com/Sidharth3025y/FewaChickenPoint',
      live: 'https://fewa-chicken-point.vercel.app/',
    },
    {
      id: 2,
      title: 'E-commerce',
      description:
        'Online store with cart functionality, product filtering, and admin dashboard',
      icon: <FaShoppingCart className="text-green-500" />,
      tags: ['Next.js', 'Stripe', 'Firebase'],
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Travel App',
      description:
        'Interactive travel planning application with map integration and itinerary builder',
      icon: <FaPlane className="text-blue-500" />,
      tags: ['React', 'Mapbox', 'Express'],
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Cafe Website',
      description: 'Cafe overview website',
      icon: <FaCoffee className="text-yellow-500" />,
      tags: ['HTML 5', 'CSS'],
      github: 'https://github.com/Sidharth3025y/coffee',
      live: 'https://coffee-gilt-six.vercel.app/',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="Projects">
      <div className="bg-gradient-to-b from-purple-900 to-blue-900 pt-20 pb-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
              My Projects
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto">
              Some of my recent work and experiments
            </p>
          </motion.div>

          {/* Project Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white/10 rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{project.icon}</div>
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs sm:text-sm bg-gray-700/50 px-2 py-1 rounded text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Links */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github}
                      className="flex items-center text-sm sm:text-base bg-blue-500 px-3 sm:px-4 py-1.5 rounded-2xl text-gray-300 hover:text-black hover:bg-blue-700 transition-colors"
                    >
                      <FaGithub className="mr-2" /> Code
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.live}
                      className="flex items-center text-sm sm:text-base bg-blue-500 px-3 sm:px-4 py-1.5 rounded-2xl text-gray-300 hover:text-black hover:bg-blue-700 transition-colors"
                    >
                      <FaLink className="mr-2" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
