import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line animation
      const timelineLine = timelineRef.current?.querySelector('.timeline-line');
      if (timelineLine) {
        gsap.fromTo(
          timelineLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Experience cards animation
      const cards = timelineRef.current?.querySelectorAll('.experience-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Achievement items animation
      const achievements = timelineRef.current?.querySelectorAll('.achievement-item');
      if (achievements) {
        gsap.fromTo(
          achievements,
          { opacity: 0, x: -10 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 60%',
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
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-coral/20 text-dark text-sm font-medium rounded-full mb-4">
            Work Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Building scalable solutions and delivering measurable results
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange via-coral to-peach origin-top hidden sm:block" />

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="experience-card relative pl-0 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-6 top-6 w-4 h-4 bg-orange rounded-full border-4 border-white shadow-lg hidden sm:block" />

                {/* Card */}
                <div className="p-6 sm:p-8 bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-orange" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-dark">
                            {exp.title}
                          </h3>
                          <p className="text-orange font-medium">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-warm-cream rounded-full">
                        <Calendar className="w-4 h-4" />
                        {exp.startDate} - {exp.endDate}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-warm-cream rounded-full">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="achievement-item flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                        <p className="text-gray leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
