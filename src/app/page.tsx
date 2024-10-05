"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Typed from 'typed.js';
import heroImage from '../../public/images/profile/aul.jpg';
import profilePic from '../../public/images/profile/aulll.jpg';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaBootstrap, FaLaravel, FaGithub, FaDatabase, FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { motion } from 'framer-motion';


const DynamicTyped = dynamic(() => import('react-typed'), { ssr: false });

export default function Home() {
  const typedElement = useRef<HTMLSpanElement>(null);

  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', { // Adjust port if needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Full Stack Web Development', 'Freelancer'],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



  return (
    <>
      {/* Bagian Hero */}
      <section id="hero" className="relative h-screen w-full overflow-hidden"> {/* Changed min-h-screen to h-screen */}
  <div className="absolute inset-0">
    <Image
      src={heroImage}
      alt="Hero Background"
      fill
      style={{ objectFit: 'cover', objectPosition: 'center 75%' }}
      quality={100}
      className="z-0"
    />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 flex items-center justify-center h-full text-center text-white"
  >
    <div className="container mx-auto p-8">
      <h2 className="text-5xl font-bold">Aulia Permana</h2>
      <p className="text-2xl mt-4">
        I'm <span ref={typedElement}></span>
      </p>
    </div>
  </motion.div>
</section>

      {/* Bagian About */}
      <section id="about" data-aos="fade-up" className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-6xl p-8">
          {/* Judul Section */}
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-500 inline-block">About</h2>

          {/* Deskripsi Singkat */}
          <p className="text-lg mb-8">
            I am a BICT Hons graduate from Management Science University, and I enhanced my skills at Purwadhika Digital Technology School’s Full Stack Web Development program. While there, I developed projects such as a company profile website and an invoice management app using Next.js and TypeScript. I successfully delivered these projects, focusing on user experience and scalability. I’m eager to apply my technical expertise and problem-solving skills to contribute to your team’s success.
          </p>

          {/* Konten Profil dan Gambar */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Gambar */}
            <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8 w-64 h-64">
              <Image
                src={profilePic}
                alt="Profile Image"
                width={215}
                height={215}
                className="object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Deskripsi dan Detail */}
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-4">Full Stack Web Development</h3>

              {/* Detail Profil */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
                <p><strong>Birthday:</strong> <span className="ml-2">7 May 1999</span></p>
                <p><strong>Age:</strong> <span className="ml-2">25</span></p>
                <p><strong>Degree:</strong> <span className="ml-2">Bachelor</span></p>
                <p><strong>Phone:</strong> <span className="ml-2">081261421647</span></p>
                <p><strong>Email:</strong> <span className="ml-2">permanaulia@gmail.com</span></p>
                <p><strong>City:</strong> <span className="ml-2">Padang, Indonesia</span></p>
                <p><strong>Freelance:</strong> <span className="ml-2">Available</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Bagian Resume */}
      <section id="resume" data-aos="fade-up" className="min-h-screen w-full bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Judul Section */}
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-500 inline-block">Resume</h2>

          {/* Education Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-4">Education</h3>
            <div className="relative pl-8 border-l-4 border-blue-500 mb-4">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full -ml-2"></div>
              <div className="ml-6">
                <p className="font-semibold">DIII Informatic Management</p>
                <p className="text-gray-600">Padang State Polytechnic, 2019 - 2022</p>
              </div>
            </div>
            <div className="relative pl-8 border-l-4 border-blue-500 mb-4">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full -ml-2"></div>
              <div className="ml-6">
                <p className="font-semibold">Bachelor of Information and Communication Technology</p>
                <p className="text-gray-600">Management Science University, 2022 - 2023</p>
              </div>
            </div>
            <div className="relative pl-8 border-l-4 border-blue-500 mb-4">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full -ml-2"></div>
              <div className="ml-6">
                <p className="font-semibold">Full Stack Web Development</p>
                <p className="text-gray-600">Purwadhika Digital Technology School, 2024</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4 text-lg">
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <FaHtml5 className="text-orange-500 mr-2" /> HTML
                </li>
                <li className="flex items-center">
                  <FaCss3Alt className="text-blue-500 mr-2" /> CSS
                </li>
                <li className="flex items-center">
                  <FaJs className="text-yellow-500 mr-2" /> JavaScript
                </li>
                <li className="flex items-center">
                  <SiTypescript className="text-blue-600 mr-2" /> TypeScript
                </li>
                <li className="flex items-center">
                  <FaReact className="text-blue-400 mr-2" /> React.js
                </li>
                <li className="flex items-center">
                  <SiNextdotjs className="text-black mr-2" /> Next.js
                </li>
              </ul>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <SiTailwindcss className="text-teal-500 mr-2" /> Tailwind CSS
                </li>
                <li className="flex items-center">
                  <FaBootstrap className="text-purple-500 mr-2" /> Bootstrap
                </li>
                <li className="flex items-center">
                  <FaPhp className="text-indigo-600 mr-2" /> PHP
                </li>
                <li className="flex items-center">
                  <FaLaravel className="text-red-500 mr-2" /> Laravel
                </li>
                <li className="flex items-center">
                  <FaDatabase className="text-blue-800 mr-2" /> MySQL
                </li>
                <li className="flex items-center">
                  <FaGithub className="text-gray-600 mr-2" /> GitHub
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Bagian Work Experience */}
      <section id="work-experience" data-aos="fade-up" className="min-h-screen w-full bg-white p-8">
        <div className="max-w-6xl mx-auto">
          {/* Judul Section */}
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-500 inline-block">Work Experience</h2>

          {/* Pengalaman Kerja */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">Internship - IT Engineer <span className="text-lg font-normal">(February 2022 - May 2022)</span></h3>
            <p className="text-lg font-semibold text-gray-700">PT. Bejana Investidata Globalindo</p>

            {/* Poin-poin Pengalaman */}
            <ul className="list-disc list-inside mt-4 text-lg text-gray-800">
              <li>Collaborated with the team on projects for the client, Biofarma.</li>
              <li>Responsible for developing new features in the application.</li>
              <li>Resolved bugs to ensure smooth project delivery.</li>
              <li>Improved the application's overall functionality and performance.</li>
              <li>Contributed to project enhancements through effective teamwork.</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Bagian Project Experience */}
      <section id="project-experience" data-aos="fade-up" className="min-h-screen w-full bg-white p-8">
        <div className="max-w-6xl mx-auto">
          {/* Judul Section */}
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-500 inline-block">Project Experience</h2>

          {/* Project 1 */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-2">Invoice Management App</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[1, 2, 3, 4].map((num, index) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }} // Adds staggered effect
                >
                  <Image
                    src={`/images/project/invoice${num}.jpg`} // Pastikan format gambar sesuai
                    alt={`Invoice Management App ${num}`}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
            {/* Changed from <p> to <div> for wrapping the list */}
            <div className="text-lg mb-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Developed a full-featured invoice management application handling both frontend and backend.</li>
                <li>Implemented functionality for users to create custom invoices tailored to their needs.</li>
                <li>Developed features to view all invoices and access detailed client information.</li>
                <li>Integrated the ability to send invoices directly via Gmail from the app.</li>
              </ul>
            </div>
            <p className="text-lg font-semibold mt-4">Tech Stack: <span className="font-normal">Next.js, Tailwind CSS, Express API, TypeScript, Nodemailer, Axios</span></p>
          </div>

          {/* Project 2 */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-2">Ticketing Management App</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[1, 2, 3, 4].map((num, index) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }} // Adds staggered effect
                >
                  <Image
                    src={`/images/project/invoice${num}.jpg`} // Pastikan format gambar sesuai
                    alt={`Invoice Management App ${num}`}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
            {/* Changed from <p> to <div> */}
            <div className="text-lg mb-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Developed a landing page for event discovery with responsiveness, including search, filtering, and pagination.</li>
                <li>Implemented features allowing attendees to browse, filter, and purchase tickets for upcoming events.</li>
                <li>Added functionality for promotions, including discount vouchers and referral codes.</li>
                <li>Integrated reviews and ratings for attendees to provide feedback on events.</li>
              </ul>
            </div>
            <p className="text-lg font-semibold mt-4">Tech Stack: <span className="font-normal">Next.js, Tailwind CSS, Express API, TypeScript, Nodemailer, Axios</span></p>
          </div>

          {/* Project 3 */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-2">Company Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[1, 2, 3, 4].map((num, index) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }} // Adds staggered effect
                >
                  <Image
                    src={`/images/project/invoice${num}.jpg`} // Pastikan format gambar sesuai
                    alt={`Invoice Management App ${num}`}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
            {/* Changed from <p> to <div> */}
            <div className="text-lg mb-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Developed a company profile website focused on frontend development.</li>
                <li>Designed the website to introduce the company and showcase its products and services to potential clients and partners.</li>
                <li>Ensured a user-friendly interface with responsive design for various devices.</li>
              </ul>
            </div>
            <p className="text-lg font-semibold mt-4">Tech Stack: <span className="font-normal">React.js, JavaScript, Tailwind CSS</span></p>
          </div>
        </div>
      </section>



      {/* Bagian Contact */}
      <section id="contact" data-aos="fade-up" className="min-h-screen w-full bg-white p-8">
        <div className="max-w-6xl mx-auto">
          {/* Judul Section */}
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-500 inline-block">Contact</h2>
          <p className="text-lg mb-8">Feel free to reach out through the following contact methods or use the form to send a message:</p>

          {/* Konten Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informasi Kontak */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Address</h4>
                  <p>Padang, West Sumatra, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaWhatsapp className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Call Us</h4>
                  <a href="https://wa.me/6281261421647" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    +62 812 6142 1647
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaEnvelope className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Email Us</h4>
                  <a href="mailto:permanaaulia@gmail.com" className="text-blue-500">
                    permanaaulia@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* Form Kontak */}
            <div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-2 border border-gray-300 rounded h-32"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>



    </>
  );
}
