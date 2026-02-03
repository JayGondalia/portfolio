import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/data/projects';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-peach/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-peach/50 text-dark text-sm font-medium rounded-full mb-4">
            Featured Projects
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Projects That Deliver Results
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices
          </p>
        </div>

        {/* Projects grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 overflow-hidden hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick links overlay */}
                {/* <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-xl font-bold text-dark group-hover:text-orange transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray group-hover:text-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                </div>

                {/* Description */}
                <p className="text-gray text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-warm-cream text-dark text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2.5 py-1 bg-warm-cream text-gray text-xs font-medium rounded-md">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Achievements */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  {project.achievements.slice(0, 2).map((achievement, index) => (
                    <p key={index} className="text-xs text-gray leading-relaxed">
                      • {achievement}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/JayGondalia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-white font-medium rounded-full hover:bg-orange transition-all hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
