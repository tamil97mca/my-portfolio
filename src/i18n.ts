import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          name: 'Tamilselvan Kuppuraj',
          jobTitle: 'Full Stack Developer',
          tagline: 'Specializing in Angular and React with 3+ years of experience',
          about: 'About Me',
          skills: 'Skills',
          experience: 'Experience',
          projects: 'Projects',
          contact: 'Contact',
          getInTouch: 'Get in Touch',
          viewProjects: 'View Projects',
          downloadResume: 'Download Resume',
          sendMessage: 'Send Message',
          footerText: '© 2023 Tamilselvan Kuppuraj. All rights reserved.',
          company: 'Chainsys India Pvt Ltd',
          employmentPeriod: 'July 2021 - Present',
          responsibilities: [
            'Lead the design and development of both Front-End (Angular and React) and Back-End web applications',
            'Analyze project requirements and assign tasks to team members',
            'Integrate Front-End with API code and handle real-time data synchronization using RxJS and Redux',
            'Implement responsive designs using Tailwind CSS and SASS',
            'Develop and maintain RESTful APIs using Node.js and Express.js',
          ],
          // Add more translations as needed
        },
      },
      // Add more languages here
    },
    lng: 'en', // Set the default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;