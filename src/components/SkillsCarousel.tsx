import React, { useState, useRef } from 'react'

interface Skill {
  name: string
  category: string
  logo: string
}

const SKILLS: Skill[] = [
  // Backend
  {
    name: 'Java',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  },
  {
    name: 'Spring Boot',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Python',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  {
    name: 'C#',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  },
  {
    name: 'C++',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  },
  // Frontend
  {
    name: 'React',
    category: 'Frontend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  // Databases
  {
    name: 'MySQL',
    category: 'Database',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
  // Tools
  {
    name: 'GCP',
    category: 'Tools',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
  },
  {
    name: 'Git',
    category: 'Tools',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'Linux',
    category: 'Tools',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  },
]

export const SkillsCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(carouselRef.current?.scrollLeft || 0)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (carouselRef.current) {
      const newScrollLeft = scrollLeft - walk
      carouselRef.current.scrollLeft = newScrollLeft
      
      // Infinite scroll - reset to beginning when reaching near the end
      if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 100) {
        carouselRef.current.scrollLeft = 100
      } else if (carouselRef.current.scrollLeft <= 0) {
        carouselRef.current.scrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 100
      }
    }
  }

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Skills & <span className="text-blue-400">Technologies</span>
        </h2>

        {/* Scrollable Carousel */}
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="overflow-x-auto bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-8 rounded-lg cursor-grab active:cursor-grabbing scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex space-x-8 px-6 pb-4 animate-scroll">
            {[...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center space-y-2 px-6 hover:opacity-80 transition"
                draggable={false}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-16 object-contain"
                  draggable={false}
                />
                <span className="text-white font-medium whitespace-nowrap text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          <style>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 25s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}
