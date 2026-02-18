import React from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { SkillsCarousel } from './components/SkillsCarousel'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  const profileImagePath = '/images/me.png'

  return (
    <div className="bg-slate-900 min-h-screen">
      <Navigation profileImage={profileImagePath} />
      <Hero profileImage={profileImagePath} />
      <Projects />
      <SkillsCarousel />
      <Footer />
    </div>
  )
}

export default App
