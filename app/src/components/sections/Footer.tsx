import { Heart, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray">
            <span>© {currentYear} Jay Gondalia.</span>
            <span className="hidden sm:inline">Made with</span>
            <Heart className="w-4 h-4 text-coral hidden sm:inline" />
            <span className="hidden sm:inline">using</span>
            <Code2 className="w-4 h-4 text-orange hidden sm:inline" />
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/jay-gondalia-6a8426177/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray hover:text-orange transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/JayGondalia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray hover:text-orange transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:jaygondaliya301@gmail.com"
              className="text-sm text-gray hover:text-orange transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
