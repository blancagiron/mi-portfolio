'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Github } from 'lucide-react';

const techColors: { [key: string]: string } = {
  'Java': 'border-red-500 bg-red-50 text-red-700',
  'Python': 'border-blue-500 bg-blue-50 text-blue-700',
  'Go': 'border-cyan-500 bg-cyan-50 text-cyan-700',
  'C++': 'border-indigo-500 bg-indigo-50 text-indigo-700',
  'JavaScript': 'border-yellow-500 bg-yellow-50 text-yellow-700',
  'Spring Boot': 'border-green-500 bg-green-50 text-green-700',
  'React': 'border-cyan-400 bg-cyan-50 text-cyan-700',
  'PostgreSQL': 'border-blue-700 bg-blue-50 text-blue-700',
  'MySQL': 'border-orange-500 bg-orange-50 text-orange-700',
  'MongoDB': 'border-green-600 bg-green-50 text-green-700',
  'Git': 'border-red-600 bg-red-50 text-red-700',
  'Next.js': 'border-gray-800 bg-gray-50 text-gray-800',
  'TypeScript': 'border-blue-600 bg-blue-50 text-blue-700',
  'Tailwind CSS': 'border-cyan-500 bg-cyan-50 text-cyan-700',
  'Firebase': 'border-orange-500 bg-orange-50 text-orange-700',
  'Material UI': 'border-blue-500 bg-blue-50 text-blue-700',
  'D3.js': 'border-orange-600 bg-orange-50 text-orange-700',
  'python-telegram-bot': 'border-blue-500 bg-blue-50 text-blue-700',
  'HTML5': 'border-orange-600 bg-orange-50 text-orange-700',
  'Vite': 'border-purple-500 bg-purple-50 text-purple-700',
  'Flask': 'border-red-700 bg-red-50 text-red-700',
  'Bootstrap': 'border-purple-600 bg-purple-50 text-purple-700',
  'Node.js': 'border-green-600 bg-green-50 text-green-700',
  'Express': 'border-gray-700 bg-gray-50 text-gray-700',
  'Docker': 'border-blue-600 bg-blue-50 text-blue-700',
  'Java Swing': 'border-orange-600 bg-orange-50 text-orange-700',
};

const projectData = [
  {
    title: 'ErasmusUGR',
    description:
      'My Final Degree Project (TFG) at the University of Granada. A web platform that digitizes the Erasmus+ mobility process, centralizing students, tutors, and administrators in one place. Currently improving it for deployment in a real-world context.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Flask', 'MongoDB'],
    image: '/3.png',
    github: 'https://github.com/blancagiron/eramus-ugr',
    link: '/gallery#proyecto1',
  },
  {
    title: 'GranaBus',
    description: 'A Telegram bot that provides real-time bus schedules for interurban routes in Granada. This educational project fetches live data from the Granada Transport Consortium API, allowing users to quickly look up arrival times by searching for a specific stop.',
    tech: ['Python', 'Flask', 'python-telegram-bot'],
    image: '/1.png',
    github: 'https://github.com/blancagiron/granabus',
    link: '/gallery#proyecto2'
  },
  {
    title: 'Online Store',
    description:
      "My final project for the 'Internet Application Development' course. This full-stack e-commerce app was my first experience building a complete system with a React frontend and a Node.js backend, all connected to a MongoDB database.",
    tech: ['React', 'Vite', 'Bootstrap', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    image: '/4.png',
    github: 'https://github.com/usuario/proyecto3', // Please update this link
    link: '/gallery#proyecto3',
  },
  {
    title: 'MyPaint',
    description:
      'A desktop image editing application inspired by Microsoft Paint. Developed with Java and the Swing GUI toolkit, it features a complete set of tools for drawing shapes, managing colors, and applying various image filters and transformations.',
    tech: ['Java', 'Java Swing'],
    image: '/MyPaint.png', 
    github: 'https://github.com/blancagiron/MyPaint',
    link: '/gallery#proyecto4',
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-32 container mx-auto px-6 max-w-7xl">
      <div className="flex items-center justify-end mb-20">
        <h2 className="text-6xl font-bold text-gray-900 text-right">
          Some of my <span className="text-blue-500">projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project) => (
          <div
            key={project.title}
            className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            {/* Project image with hover zoom */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Project content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-900 flex items-center justify-center transition-all duration-300"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5 text-gray-700 hover:text-white transition-colors" />
                </a>
              </div>

              <p className="text-gray-600 leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-3 py-1.5 rounded-full border font-medium ${
                      techColors[tech] ||
                      'border-gray-300 bg-gray-50 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View link */}
              <Link
                href={project.link}
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group/link"
              >
                View in gallery
                <span className="ml-1 group-hover/link:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;