'use client'
import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { IoArrowUpOutline } from 'react-icons/io5'
import HeroSection from '@/modules/HeroSection'
import AboutMe from '@/modules/About/AboutMe'
import Skills from '@/modules/About/skills'
import Projects from '@/modules/portfolio/projects'
import Contact from '@/modules/contact/contact'

export default function Home() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  })
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="relative" ref={scrollRef}>
      <motion.div
        className="fixed top-[66px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent origin-left z-50"
        style={{ scaleX }}
      />
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
        <HeroSection />
      </section>
      <section id="about" className="relative py-20">
        <div className="absolute inset-0 bg-white/5 dark:bg-gray-900/50 backdrop-blur-sm" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <AboutMe />
          <Skills />
        </div>
      </section>
      <section id="projects" className="relative py-20 bg-gradient-to-br from-background via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Projects />
        </div>
      </section>

      <section id="contact" className="relative py-20">
        <div className="absolute inset-0 bg-white/5 dark:bg-gray-900/50 backdrop-blur-sm" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Contact />
        </div>
      </section>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 hover:bg-primary/20 transition-all duration-300 z-50 group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
          y: scrollYProgress.get() > 0.1 ? 0 : 20
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <IoArrowUpOutline className="w-6 h-6 text-primary group-hover:animate-bounce" />
      </motion.button>
    </main>
  )
}
