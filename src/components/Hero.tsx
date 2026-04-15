import React, { useState, useEffect } from 'react'

interface HeroProps {
  profileImage?: string;
}

export const Hero: React.FC<HeroProps> = ({ profileImage }) => {
  const roles = [
    'Software Developer',
    'CS Student at HIT',
    'Problem Solver',
  ]
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex]
      
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1))
          setTypingSpeed(150)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1))
          setTypingSpeed(50)
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles])
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 text-white flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="order-2 md:order-1">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
              Hi, I'm <span className="text-blue-400">Gal Aviv</span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12">
              <span className="inline-block">
                {displayedText}
                <span className="animate-pulse text-blue-400">|</span>
              </span>
            </div>
            <p className="text-xl text-gray-400 mb-2 leading-relaxed">
              2 years of experience • 3rd Year CS Student at HIT
            </p>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Highly autodidactic and responsible developer with a proven ability to take products from concept to production. Experienced in architecture design, database management, and cloud deployment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-slate-900 transition duration-300 font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="order-1 md:order-2 flex justify-center">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Gal Aviv"
                className="h-80 w-80 rounded-full border-4 border-blue-400 object-cover shadow-2xl"
              />
            ) : (
              <div className="h-80 w-80 rounded-full border-4 border-blue-400 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-2xl">
                <span className="text-6xl text-blue-400 font-bold">GA</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
