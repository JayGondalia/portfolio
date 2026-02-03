import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories } from '@/data/skills';
import { Code2, Layout, Server, Database, Cloud, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
};

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.skill-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-peach/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-lavender/30 text-dark text-sm font-medium rounded-full mb-4">
            Technical Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Technologies I Work With
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            A comprehensive toolkit built over 3+ years of professional development experience
          </p>
        </div>

        {/* Skills grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <div
                key={index}
                className="skill-card group relative p-6 bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-lavender/40 to-peach/40 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-dark" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-dark mb-4">
                  {category.title}
                </h3>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-warm-cream text-dark text-sm font-medium rounded-lg hover:bg-peach/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lavender/5 to-peach/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
