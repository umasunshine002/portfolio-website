import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-xl shadow-lg border-b border-primary/20' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--cyber-blue))] to-[hsl(var(--cyber-violet))] flex items-center justify-center neon-glow group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg gradient-text hidden sm:block">Umadevi Thulluru</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-[hsl(var(--cyber-blue))] transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[hsl(var(--cyber-blue))] to-[hsl(var(--cyber-violet))] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Right: Social Icons & Resume */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/in/umadevithulluru/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[hsl(var(--cyber-blue))]/10 hover:text-[hsl(var(--cyber-blue))] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Umadevithulluru"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[hsl(var(--cyber-violet))]/10 hover:text-[hsl(var(--cyber-violet))] transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a 
              href="/UT_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="sm" 
                className="relative overflow-hidden group bg-[hsl(var(--cyber-blue))]/20 border-2 border-[hsl(var(--cyber-blue))]/50 hover:bg-[hsl(var(--cyber-blue))]/30 text-foreground"
              >
                <FileText className="w-4 h-4 mr-2" />
                <span className="relative z-10">Resume</span>
              </Button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium hover:text-primary transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 mt-4">
              <a href="https://linkedin.com/in/umadeviThulluru" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/umasunshine002" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a 
                href="/UT_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition-all duration-300"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
