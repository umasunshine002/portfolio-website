import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left: Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>

        {/* Right: Social Icons & Resume */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://www.linkedin.com/in/umadeviThulluru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/umasunshine002"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a 
            href="/UT_Resume.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="sm" 
              variant="outline" 
              className="relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-primary to-accent opacity-20 group-hover:w-full transition-all duration-300"></span>
              <span className="relative z-10">View Resume</span>
            </Button>
          </a>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
        </div>

        {/* Mobile: Theme toggle and menu icon */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                href="/UT_Resume.docx"
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
