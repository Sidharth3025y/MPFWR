import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-100">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <FaCode className="text-purple-500 text-4xl mr-4" />
              <span className="text-3xl font-bold">Sidharth Giri</span>
            </div>
            <p className="text-xl text-gray-400">
              Full Stack Developer specializing in MERN stack application.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/sidharth3025y" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a 
                href="https://linkedin.com/in/sidharth-giri-74b611367/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a 
                href="https://instagram.com/sid3025y" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-3xl" />
              </a>
              <a 
                href="mailto:sid3025y@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h3>
            <ul className="space-y-4 text-xl text-gray-400">
              <li className="hover:text-purple-500 transition-colors">
                sid3025y@gmail.com
              </li>
              <li className="hover:text-purple-500 transition-colors">
                +977-9826467839
              </li>
              <li className="hover:text-purple-500 transition-colors">
                Pokhara, Nepal
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xl text-gray-500">
          <p>© {new Date().getFullYear()} Sidharth Giri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
