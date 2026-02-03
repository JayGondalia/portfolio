import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jaygondaliya301@gmail.com',
    href: 'mailto:jaygondaliya301@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(519) 702-6493',
    href: 'tel:+15197026493',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'London, ON, Canada',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jay-gondalia-6a8426177/',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/JayGondalia',
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const extractEmailFromText = (text: string) => {
    const match = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/i);
    return match ? match[0] : null;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = contentRef.current?.querySelectorAll('.contact-element');
      if (elements) {
        gsap.fromTo(
          elements,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Try to ensure we have a valid reply email. If the Email field is empty or invalid,
    // attempt to extract an email address from the message text.
    let emailToUse = (formData.email || '').trim();

    if (!isValidEmail(emailToUse)) {
      const extracted = extractEmailFromText(formData.message || '');
      if (extracted) {
        emailToUse = extracted;
      } else {
        setFormError(
          'Please include a valid email address in the Email field or in your message so I can reply.'
        );
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Using Formspree for form submission - replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/xojlrkkv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: emailToUse,
          message:
            formData.message +
            (emailToUse !== (formData.email || '').trim()
              ? `\n\n(Detected reply email: ${emailToUse})`
              : ''),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormError('Something went wrong. Please try again or email me directly.');
      }
    } catch (error) {
      setFormError('Something went wrong. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-gradient-to-b from-lavender/10 to-peach/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div ref={contentRef} className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="contact-element text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange/10 text-orange text-sm font-medium rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="contact-element lg:col-span-2 space-y-6">
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange/10 to-coral/10 rounded-xl flex items-center justify-center group-hover:from-orange group-hover:to-coral transition-all duration-300">
                    <item.icon className="w-5 h-5 text-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray">{item.label}</p>
                    <p className="font-medium text-dark">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray mb-4">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-xl card-shadow flex items-center justify-center hover:bg-dark hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-element lg:col-span-3">
            <div className="p-6 sm:p-8 bg-white rounded-2xl card-shadow">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-dark mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-6"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 bg-warm-cream/50 border-0 focus:ring-2 focus:ring-orange/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 bg-warm-cream/50 border-0 focus:ring-2 focus:ring-orange/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-warm-cream/50 border-0 focus:ring-2 focus:ring-orange/20 resize-none"
                    />
                  </div>
                  {formError && (
                    <p className="text-sm text-red-600">{formError}</p>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-orange hover:bg-orange/90 text-white font-medium rounded-xl transition-all hover:scale-[1.02] hover:shadow-glow"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
