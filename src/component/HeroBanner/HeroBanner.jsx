import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHandshake, FaTimes } from 'react-icons/fa';

const HeroBanner = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id='home'>
    <div className="relative overflow-hidden min-h-screen">
      {/* Hero Content Container */}
      <section className="bg-gradient-to-b from-purple-800 to-blue-900 min-h-screen flex items-center justify-center p-6">
        <div className="container mx-auto">
          {/* Content Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-100 relative z-10">
            {/* Left Column - Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-cyan-500/70 overflow-hidden shadow-xl mx-auto lg:mx-0"
            >
              <img 
                src="./sid.jpg" 
                alt="Professional portrait of Sidharth Giri" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md mx-auto lg:mx-0"
            >
              <div className="space-y-4">
                <p className="text-3xl text-cyan-100 font-light">Hello, I'm</p>
                
                <h1 className="text-8xl md:text-7xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent leading-tight">
                  Sidharth Giri
                </h1>
                
                <div className="space-y-2">
                  <p className="text-4xl text-white">MERN Stack Developer</p>
                  <p className="text-3xl text-cyan-100">JavaScript Expert</p>
                  <p className="text-xg text-blue-200">Full Stack Solutions Architect</p>
                </div>
              </div>

              {/* Connect Button */}
              <motion.button
                onClick={() => setShowForm(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 px-10 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <FaHandshake className="mr-2" />
                Let's Connect
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showForm && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
            />

            {/* Form Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="relative w-full max-w-md bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl shadow-2xl border border-cyan-400/20 overflow-hidden">
                <div className="relative z-10 p-6 md:p-8">
                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute top-4 right-4 text-white hover:text-cyan-300 transition-colors text-xl"
                  >
                    <FaTimes />
                  </button>

                  <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                    Let's Work Together
                  </h3>

                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        className="w-full bg-blue-800/50 border border-cyan-400/20 rounded-lg px-4 py-3 text-white placeholder-cyan-100 focus:ring-2 focus:ring-cyan-300 focus:outline-none text-base"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        className="w-full bg-blue-800/50 border border-cyan-400/20 rounded-lg px-4 py-3 text-white placeholder-cyan-100 focus:ring-2 focus:ring-cyan-300 focus:outline-none text-base"
                        placeholder="Your Email"
                      />
                    </div>

                    <div>
                      <textarea
                        className="w-full bg-blue-800/50 border border-cyan-400/20 rounded-lg px-4 py-3 text-white placeholder-cyan-100 focus:ring-2 focus:ring-cyan-300 focus:outline-none text-base min-h-[120px]"
                        placeholder="Tell me about your project needs..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-medium py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
    </section>
  );
};

export default HeroBanner;