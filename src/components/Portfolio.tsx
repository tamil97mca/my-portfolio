'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Menu, Download } from 'lucide-react'
import Image from 'next/image'

import Confetti from 'react-confetti'
import {
  SiAngular, SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiGit,
  SiRedux, SiNextdotjs, SiNginx, SiNgrok, SiNgrx, SiNx, SiPostgresql, SiPostman, SiPwa, SiBootstrap, SiHtml5, SiCss3,
  SiNestjs, SiIonic, SiApachecordova, SiCapacitor, SiMui, SiApachecouchdb, SiI18Next, SiJsonwebtokens, SiJson, SiCanva
} from 'react-icons/si'

import profileImage from '@/assets/images/Profile.jpg';

import ecommerceDashboard  from "@/assets/images/ecommerce-dashboard.jpg";
import taskManagement  from "@/assets/images/Task Management App.jpg"
import smartAppBuilder  from "@/assets/images/Smart App Builder.png";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  interface Skill {
    name: string
    icon: React.ComponentType
    category: SkillCategory
    proficiency: number // 1-100
  }

  enum SkillCategory {
    Frontend = 'Frontend Development',
    Backend = 'Backend Development',
    Mobile = 'Mobile Development',
    Database = 'Databases',
    DevOps = 'DevOps & Tools',
    Other = 'Other Skills'
  }

  const skillsData: Record<SkillCategory, Skill[]> = {
    [SkillCategory.Frontend]: [
      { name: 'Angular', icon: SiAngular, category: SkillCategory.Frontend, proficiency: 90 },
      { name: 'React', icon: SiReact, category: SkillCategory.Frontend, proficiency: 85 },
      { name: 'TypeScript', icon: SiTypescript, category: SkillCategory.Frontend, proficiency: 90 },
      { name: 'JavaScript', icon: SiJavascript, category: SkillCategory.Frontend, proficiency: 90 },
      { name: 'Next.js', icon: SiNextdotjs, category: SkillCategory.Frontend, proficiency: 80 },
      { name: 'HTML5', icon: SiHtml5, category: SkillCategory.Frontend, proficiency: 95 },
      { name: 'CSS3', icon: SiCss3, category: SkillCategory.Frontend, proficiency: 90 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, category: SkillCategory.Frontend, proficiency: 85 },
      { name: 'Bootstrap', icon: SiBootstrap, category: SkillCategory.Frontend, proficiency: 85 },
      { name: 'Material UI', icon: SiMui, category: SkillCategory.Frontend, proficiency: 80 },
      { name: 'Redux', icon: SiRedux, category: SkillCategory.Frontend, proficiency: 85 },
      { name: 'NgRx', icon: SiNgrx, category: SkillCategory.Frontend, proficiency: 85 },
      { name: 'PWA', icon: SiPwa, category: SkillCategory.Frontend, proficiency: 75 },
    ],
    [SkillCategory.Backend]: [
      { name: 'Node.js', icon: SiNodedotjs, category: SkillCategory.Backend, proficiency: 85 },
      { name: 'Express.js', icon: SiExpress, category: SkillCategory.Backend, proficiency: 85 },
      { name: 'NestJS', icon: SiNestjs, category: SkillCategory.Backend, proficiency: 80 },
      { name: 'JWT', icon: SiJsonwebtokens, category: SkillCategory.Backend, proficiency: 85 },
    ],
    [SkillCategory.Mobile]: [
      { name: 'Ionic', icon: SiIonic, category: SkillCategory.Mobile, proficiency: 80 },
      { name: 'Cordova', icon: SiApachecordova, category: SkillCategory.Mobile, proficiency: 75 },
      { name: 'Capacitor', icon: SiCapacitor, category: SkillCategory.Mobile, proficiency: 75 },
    ],
    [SkillCategory.Database]: [
      { name: 'MongoDB', icon: SiMongodb, category: SkillCategory.Database, proficiency: 85 },
      { name: 'PostgreSQL', icon: SiPostgresql, category: SkillCategory.Database, proficiency: 80 },
      { name: 'CouchDB', icon: SiApachecouchdb, category: SkillCategory.Database, proficiency: 70 },
    ],
    [SkillCategory.DevOps]: [
      { name: 'Git', icon: SiGit, category: SkillCategory.DevOps, proficiency: 90 },
      { name: 'Nginx', icon: SiNginx, category: SkillCategory.DevOps, proficiency: 75 },
      { name: 'Ngrok', icon: SiNgrok, category: SkillCategory.DevOps, proficiency: 70 },
      { name: 'Nx', icon: SiNx, category: SkillCategory.DevOps, proficiency: 75 },
      { name: 'Postman', icon: SiPostman, category: SkillCategory.DevOps, proficiency: 85 },
    ],
    [SkillCategory.Other]: [
      { name: 'i18next', icon: SiI18Next, category: SkillCategory.Other, proficiency: 80 },
      { name: 'JSON', icon: SiJson, category: SkillCategory.Other, proficiency: 90 },
      { name: 'Canva', icon: SiCanva, category: SkillCategory.Other, proficiency: 75 },
    ],
  }

  useEffect(() => {    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleDownloadResume();
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDownloadResume = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
    // Add your resume download logic here
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {showConfetti && <Confetti />}      
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-primary-900 min-h-screen text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold text-primary dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Tamilselvan Kuppuraj
            </motion.h1>
            <div className="hidden md:flex items-center space-x-6">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors ${activeSection === item.toLowerCase() ? 'text-primary dark:text-secondary' : ''
                    }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? '🌞' : '🌙'}
              </motion.button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="p-2">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>

        <main className="container mx-auto px-4 pt-20">
          <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Specializing in Angular and React with 3+ years of experience
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="#contact" className="bg-primary dark:bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondary dark:hover:bg-primary transition-colors">
                Get in touch
              </a>
              <a href="#projects" className="bg-gray-200 dark:bg-gray-700 px-6 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                View projects
              </a>
            </motion.div>
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            >
              <ChevronDown size={32} className="text-primary dark:text-white" />
            </motion.div>
          </section>

          <section id="about" className="py-20">
            <h3 className="text-3xl font-bold mb-8 text-primary dark:text-white">About Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <p>
                  Hello! I&apos;m Tamilselvan Kuppuraj, a Full Stack Developer with over 3 years of experience in building robust web applications.
                  I specialize in both Angular and React, creating efficient, scalable, and user-friendly solutions that solve real-world problems.
                </p>
                <p>
                  Currently, I&apos;m working at Chainsys India Pvt Ltd, where I&apos;ve had the opportunity to lead the design and development
                  of both Front-End and Back-End web applications, particularly focusing on the innovative Smart App Builder project.
                </p>
                <p>
                  My expertise includes Angular, React, TypeScript, Node.js, and Express.js. I&apos;ve successfully implemented optimized methods
                  for RESTful web services communication, resulting in a 35% increase in data retrieval speed.
                </p>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <a
                    href="/Resume.pdf"
                    onClick={handleDownloadResume}
                    download
                    className="inline-flex items-center px-6 py-3 bg-primary dark:bg-secondary text-white rounded-full hover:bg-secondary dark:hover:bg-primary transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>                  
                </motion.div>
              </div>
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-primary-200 dark:bg-primary-800 rounded-full overflow-hidden">
                  <Image
                    src={profileImage}
                    alt="Tamilselvan Kuppuraj"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-200 dark:bg-secondary-800 rounded-full flex items-center justify-center text-4xl font-bold">
                  3+
                </div>
              </div>
            </div>
          </section>

          {/* <section id="skills" className="py-20">
            <h3 className="text-3xl font-bold mb-8 text-primary dark:text-white">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                'Angular', 'React', 'TypeScript', 'JavaScript', 'RxJS', 'Redux', 
                'Node.js', 'Express.js', 'Next.js', 'MongoDB', 'HTML5', 'CSS3', 
                'SASS', 'Tailwind CSS', 'Git', 'RESTful APIs', 'GraphQL', 'Jest'
              ].map((skill) => (
                <motion.div 
                  key={skill}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h4 className="text-lg font-semibold mb-2 text-primary dark:text-secondary">{skill}</h4>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary dark:bg-secondary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section> */}

          {/* <section id="skills" className="py-20">
            <h3 className="text-3xl font-bold mb-8 text-primary dark:text-white">{'skills'}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {Object.entries(skillIcons).map(([skill, Icon]) => (
                <motion.div
                  key={skill}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-primary dark:text-secondary" />
                  <h4 className="text-lg font-semibold mb-2 text-primary dark:text-secondary">{skill}</h4>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary dark:bg-secondary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section> */}

          <section id="skills" className="py-20">
            <h3 className="text-3xl font-bold mb-8 text-primary dark:text-white">Skills</h3>
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="mb-12">
                <h4 className="text-xl font-semibold mb-6 text-primary dark:text-white">{category}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* <skill.icon className="w-8 h-8 mx-auto mb-4 text-primary dark:text-secondary" /> */}
                      <h5 className="text-lg font-semibold mb-2 text-primary dark:text-secondary">
                        {skill.name}
                      </h5>
                      {/* <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-primary dark:bg-secondary h-2.5 rounded-full"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div> */}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section id="experience" className="py-20">
            <h3 className="text-3xl font-bold mb-8 text-primary dark:text-white">Experience</h3>
            <div className="space-y-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-semibold mb-2 text-primary dark:text-secondary">Full Stack Developer</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Chainsys India Pvt Ltd, Madurai • July 2021 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Lead the design and development of both Front-End (Angular and React) and Back-End web applications</li>
                  <li>Analyze project requirements and assign tasks to team members</li>
                  <li>Integrate Front-End with API code and handle real-time data synchronization using RxJS and Redux</li>
                  <li>Implement responsive designs using Tailwind CSS and SASS</li>
                  <li>Develop and maintain RESTful APIs using Node.js and Express.js</li>
                  <li>Implement unit testing using Jest and Angular Testing Library</li>
                  <li>Report directly to the head of the development team on a daily basis</li>
                  <li>Handle and respond to live production issues efficiently</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projects" className="py-20">
            <h3 className="text-3xl font-bold mb-8 text-primary dark:text-white">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Smart App Builder',
                  description: 'A low-code/no-code application builder platform for creating custom web and mobile applications without writing code.',
                  technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB'],
                  link: '#',
                  image: smartAppBuilder
                },
                {
                  title: 'E-commerce Dashboard',
                  description: 'A comprehensive dashboard for managing online store operations with real-time analytics.',
                  technologies: ['React', 'Redux', 'Node.js', 'Express.js'],
                  link: '#',
                  image: ecommerceDashboard
                },
                {
                  title: 'Task Management App',
                  description: 'A real-time collaborative task management application with team features.',
                  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
                  link: '#',
                  image: taskManagement
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    layout="responsive"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-primary dark:text-secondary">{project.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-primary-100 dark:bg-secondary-900 text-primary-800 dark:text-secondary-200 text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-primary dark:text-secondary hover:underline"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="contact" className="py-20">
            <h3 className="text-3xl font-bold mb-8 text-primary dark:text-white">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  I&apos;m always open to new opportunities and collaborations. Whether you have a project in mind
                  or just want to connect, feel free to reach out!
                </p>
                <div className="flex items-center space-x-4">
                  <Mail size={20} className="text-primary dark:text-secondary" />
                  <a href="mailto:tamil97mca@gmail.com" className="hover:underline text-gray-600 dark:text-gray-300">tamil97mca@gmail.com</a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin size={20} className="text-primary dark:text-secondary" />
                  <a href="https://www.linkedin.com/in/tamilselvan-k-angular" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-600 dark:text-gray-300">
                    linkedin.com/in/tamilselvan-k-angular
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Github size={20} className="text-primary dark:text-secondary" />
                  <a href="https://github.com/tamilselvan-k" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-600 dark:text-gray-300">
                    github.com/tamilselvan-k
                  </a>
                </div>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary dark:bg-gray-800"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary dark:bg-gray-800"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary dark:bg-gray-800"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary dark:bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondary dark:hover:bg-primary transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; {new Date().getFullYear()} Tamilselvan Kuppuraj. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}