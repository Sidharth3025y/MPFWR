import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaCode, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section id='Footer' className="relative">
      <footer className="bg-black text-white py-16 px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-center space-y-10 md:space-y-0">
          
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex flex-col items-center">
              
                <FaCode className="text-purple-500 text-4xl mb-2" />
              
              <span className="text-3xl font-bold">Sidharth Giri</span>
            </div>
            <p className="text-xl text-gray-400 max-w-xs mx-auto">
              Full Stack Developer specializing in MERN stack application.
            </p>
            <div className="flex space-x-6 justify-center">
              <a href="https://www.facebook.com/sid.giri.391" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110" aria-label="GitHub">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://github.com/sidharth3025y" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110" aria-label="GitHub">
                <FaGithub className="text-3xl" />
              </a>
              <a href="https://linkedin.com/in/sidharth-giri-74b611367/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110" aria-label="LinkedIn">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="https://instagram.com/sid3025y" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110" aria-label="Instagram">
                <FaInstagram className="text-3xl" />
              </a>
            
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
            <ul className="space-y-2 text-xl text-gray-400">
              <li className="hover:text-purple-500 transition-colors">sid3025y@gmail.com</li>
              <li className="hover:text-purple-500 transition-colors">+977-9826467839</li>
              <li className="hover:text-purple-500 transition-colors">Pokhara, Nepal</li>
            </ul>
          </div>

          {/* Optional: Extra Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Follow Me</h3>
            <p className="text-gray-400 text-lg">Connect on social media for latest updates!</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xl text-gray-500 w-full">
          <p>© {new Date().getFullYear()} Sidharth Giri. All rights reserved.</p>
        </div>

        {/* Back to Top Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all z-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        )}
      </footer>
    </section>
  );
};

export default Footer;
