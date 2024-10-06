'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaHome,
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaProjectDiagram,
  FaPhone,
} from 'react-icons/fa';
import profilePic from '../../public/images/profile/aulll.jpg';

// Tambahkan interface untuk menerima props isOpen
interface SidebarProps {
  isOpen: boolean; // Mendefinisikan prop isOpen
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <>
      {/* Sidebar */}
      <motion.div
        initial={false} // Disable the initial animation
        animate={{ x: isOpen ? 0 : -250 }} // Control the animation based on isOpen
        transition={{ duration: 0.4 }}
        className={`fixed h-screen bg-gray-800 text-white p-4 overflow-y-auto shadow-lg md:w-64 ${isOpen ? 'w-64' : 'w-0'}`}
      >

        {/* Sidebar Content */}
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="profile-img mt-4 rounded-full border-4 border-gray-700 overflow-hidden w-32 h-32"
          >
            <Image
              src={profilePic}
              alt="Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </motion.div>

          {/* Name and Logo */}
          <a href="/" className="logo mt-4 text-center">
            <h1 className="sitename text-2xl font-semibold">Aulia Permana</h1>
          </a>

          {/* Social Media Icons */}
          <div className="social-links text-center mt-4 flex space-x-4">
            <a href="https://wa.me/6281261421647" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-300">
              <FaWhatsapp />
            </a>
            <a href="mailto:permanaaulia@gmail.com" className="hover:text-red-500 transition duration-300">
              <FaEnvelope />
            </a>
            <a href="https://linkedin.com/in/permanaaul" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/permanaaul" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition duration-300">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu mt-8 w-full">
          <ul className="space-y-4">
            <li>
              <Link to="hero" smooth={true} duration={500} className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg transition duration-300 cursor-pointer" activeClass="bg-gray-700">
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg transition duration-300 cursor-pointer" activeClass="bg-gray-700">
                <FaUser className="mr-2" /> About
              </Link>
            </li>
            <li>
              <Link to="resume" smooth={true} duration={500} className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg transition duration-300 cursor-pointer" activeClass="bg-gray-700">
                <FaFileAlt className="mr-2" /> Resume
              </Link>
            </li>
            <li>
              <Link to="work-experience" smooth={true} duration={500} className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg transition duration-300 cursor-pointer" activeClass="bg-gray-700">
                <FaBriefcase className="mr-2" /> Work Experience
              </Link>
            </li>
            <li>
              <Link to="project-experience" smooth={true} duration={500} className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg transition duration-300 cursor-pointer" activeClass="bg-gray-700">
                <FaProjectDiagram className="mr-2" /> Project Experience
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg transition duration-300 cursor-pointer" activeClass="bg-gray-700">
                <FaPhone className="mr-2" /> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default Sidebar;
