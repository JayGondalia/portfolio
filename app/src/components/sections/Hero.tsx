import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Award, Star, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        characterRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
      );

      gsap.fromTo(
        counterRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );

      // Scroll-triggered counter animation
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = Math.floor(self.progress * 999);
          setCounter(Math.max(1, progress));
        },
      });

      // Character parallax
      gsap.to(characterRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const formatCounter = (num: number) => {
    return num.toString().padStart(3, '0');
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff7f3] via-[#fef1ea] to-[#fffcfb]" />

      {/* City skyline background */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30">
        <img
          src="/assets/city-skyline.png"
          alt="City skyline"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Title section */}
        <div ref={titleRef} className="text-center mb-8">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-4">
            Jay Gondalia
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray font-medium">
            Full-Stack Developer
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm text-gray">
            <span className="px-3 py-1 bg-peach/50 rounded-full">React</span>
            <span className="px-3 py-1 bg-lavender/30 rounded-full">Node.js</span>
            <span className="px-3 py-1 bg-coral/30 rounded-full">TypeScript</span>
            <span className="px-3 py-1 bg-peach/50 rounded-full">AWS</span>
            <span className="px-3 py-1 bg-lavender/30 rounded-full">Azure</span>
          </div>
        </div>

        {/* 3D Character */}
        <div
          ref={characterRef}
          className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
        >
          <img
            src="/assets/character-scooter.png"
            alt="3D Character on scooter"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
          
          {/* Floating shapes decoration */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-lavender/40 rounded-full animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/4 -left-8 w-8 h-8 bg-peach/60 rounded-lg animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 -right-6 w-10 h-10 bg-coral/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        </div>

        {/* Counter */}
        <div
          ref={counterRef}
          className="mt-8 font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-dark/10 select-none"
        >
          {formatCounter(counter)}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sm text-gray uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 text-gray animate-scroll-indicator" />
        </div>
      </div>

      {/* Award badges */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6 md:gap-8">
        <div className="flex items-center gap-2 text-dark/60">
          <Award className="w-5 h-5" />
          <span className="text-xs sm:text-sm font-medium hidden sm:inline">3+ Years Experience</span>
        </div>
        <div className="flex items-center gap-2 text-dark/60">
          <Star className="w-5 h-5" />
          <span className="text-xs sm:text-sm font-medium hidden sm:inline">Production Ready</span>
        </div>
        <div className="flex items-center gap-2 text-dark/60">
          <Trophy className="w-5 h-5" />
          <span className="text-xs sm:text-sm font-medium hidden sm:inline">1000+ Users Served</span>
        </div>
      </div>
    </section>
  );
}
