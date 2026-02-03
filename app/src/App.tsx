import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Configure GSAP defaults
    gsap.config({
      nullTargetWarn: false,
    });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Handle reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      gsap.globalTimeline.timeScale(0);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-off-white">
      <Navigation />
      
      <main className="relative">
        <Hero />
        
        <div id="about">
          <About />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="experience">
          <Experience />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="education">
          <Education />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
