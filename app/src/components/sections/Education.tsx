import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { educations, certifications } from '@/data/education';
import { GraduationCap, Award, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = contentRef.current?.querySelectorAll('.edu-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
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
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-lavender/30 text-dark text-sm font-medium rounded-full mb-4">
            Education & Certifications
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Academic Background
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-dark flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-orange" />
              Education
            </h3>
            
            <div className="space-y-4">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="edu-card p-6 bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-display text-lg font-bold text-dark">
                        {edu.degree}
                      </h4>
                      <p className="text-orange font-medium">{edu.institution}</p>
                    </div>
                    <span className="px-3 py-1 bg-warm-cream text-dark text-sm font-medium rounded-full flex-shrink-0">
                      {edu.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-dark flex items-center gap-2">
              <Award className="w-6 h-6 text-coral" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="edu-card p-6 bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-lavender/40 to-peach/40 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-dark" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-dark mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-gray text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional info card */}
            <div className="edu-card p-6 bg-gradient-to-br from-orange/5 to-coral/5 rounded-2xl border border-orange/10">
              <h4 className="font-display text-lg font-bold text-dark mb-2">
                Always Learning
              </h4>
              <p className="text-gray text-sm leading-relaxed">
                Currently exploring AI/ML technologies, cloud architecture patterns, 
                and advanced React patterns. Committed to staying at the forefront 
                of web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
