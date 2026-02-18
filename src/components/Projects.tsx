import React from 'react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  image: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Motiv',
    description:
      'Backend infrastructure for an education management app. Built RESTful APIs and optimized MySQL schemas.',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    githubUrl: 'https://github.com/Galaviv15',
    image: '/images/motiv app.png',
  },
  {
    id: 2,
    title: 'Microservices Cost Manager',
    description:
      'A backend system for expense management using microservices architecture. Academic project demonstrating distributed system design.',
    technologies: ['Node.js', 'Microservices', 'MongoDB'],
    githubUrl: 'https://github.com/Galaviv15/Cost-Manager-RESTful-Web-Services',
    image: '/images/microservices.jpg',
  },
  {
    id: 3,
    title: 'Real-time Audio Fraud Detection',
    description:
      'Deep learning system designed to identify fraud calls using advanced neural networks.',
    technologies: ['Python', 'Deep Learning', 'TensorFlow'],
    githubUrl: 'https://github.com/Galaviv15/Real-Time-Voice-Fraud-Detection',
    image: '/images/fraud call.png',
  },
]

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Featured <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-400 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-400/20"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-slate-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition duration-300 font-semibold"
                >
                  <span>View on GitHub</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
