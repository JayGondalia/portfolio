import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingDown, Clock, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: TrendingDown,
    value: 25,
    suffix: '%',
    label: 'Data Processing Cut',
    color: 'bg-coral/20',
  },
  {
    icon: Clock,
    value: 3,
    suffix: '+ hrs',
    label: 'Saved Per Transaction',
    color: 'bg-lavender/30',
  },
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Daily Users Served',
    color: 'bg-peach/50',
  },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stats animation
      const statElements = statsRef.current?.querySelectorAll('.stat-card');
      if (statElements) {
        gsap.fromTo(
          statElements,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Counter animation for stats
      statElements?.forEach((stat) => {
        const valueEl = stat.querySelector('.stat-value');
        if (valueEl) {
          const targetValue = parseInt(valueEl.getAttribute('data-value') || '0');
          gsap.fromTo(
            { value: 0 },
            { value: targetValue },
            {
              duration: 2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: stat,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
              onUpdate: function () {
                valueEl.textContent = Math.floor(this.targets()[0].value).toString();
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div ref={contentRef} className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-orange/10 text-orange text-sm font-medium rounded-full">
              About Me
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Building digital experiences that{' '}
              <span className="gradient-text">make an impact</span>
            </h2>
            
            <p className="text-lg text-gray leading-relaxed">
              I'm a Full-Stack Developer with 3+ years of experience shipping production code 
              that delivers real results. I specialize in building scalable web applications 
              using modern technologies like React, Node.js, and TypeScript.
            </p>
            
            <p className="text-lg text-gray leading-relaxed">
              My approach combines technical expertise with a focus on performance and user 
              experience. From optimizing database queries to implementing CI/CD pipelines, 
              I ensure every line of code contributes to business goals.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="https://www.linkedin.com/in/jay-gondalia-6a8426177/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange text-white font-medium rounded-full hover:bg-orange/90 transition-all hover:scale-105 hover:shadow-glow"
              >
                View LinkedIn
              </a>
              <a
                href="https://github.com/JayGondalia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-dark text-dark font-medium rounded-full hover:bg-dark hover:text-white transition-all"
              >
                View GitHub
              </a>
            </div>
          </div>

          {/* Right stats */}
          <div ref={statsRef} className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card group relative p-6 bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2"
              >
                <div className={`absolute top-4 right-4 w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-dark" />
                </div>
                <div className="pt-8">
                  <div className="flex items-baseline gap-1">
                    <span
                      className="stat-value font-display text-4xl sm:text-5xl font-bold text-dark"
                      data-value={stat.value}
                    >
                      0
                    </span>
                    <span className="font-display text-2xl font-bold text-orange">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="mt-2 text-gray font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
