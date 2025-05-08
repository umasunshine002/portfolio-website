
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText, Moon, Sun, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
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
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/lovable-uploads/26f65743-24ea-41d3-9b8d-30d514659169.png";
    link.download = "Umadevi_Thulluru_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open("/lovable-uploads/26f65743-24ea-41d3-9b8d-30d514659169.png", "_blank");
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-xl md:text-2xl font-bold gradient-text relative overflow-hidden group"
        >
          Umadevi<span className="text-foreground">.dev</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-all duration-300 relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/in/umadeviThulluru"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors transform hover:scale-125 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="hover:animate-spin-slow" />
            </a>
            <a
              href="https://github.com/umadevit67"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors transform hover:scale-125 transition-transform duration-300"
              aria-label="GitHub"
            >
              <Github size={20} className="hover:animate-spin-slow" />
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline" className="ml-2 group overflow-hidden relative">
                  <span className="absolute inset-0 w-0 bg-gradient-to-r from-primary/20 to-accent/20 group-hover:w-full transition-all duration-300"></span>
                  <FileText size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Resume</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="animate-fade-in">
                <DropdownMenuItem onClick={handleView} className="cursor-pointer group">
                  <Eye size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span>View</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDownload} className="cursor-pointer group">
                  <Download size={16} className="mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                  <span>Download</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              aria-label="Toggle theme"
              className="relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              <span className="relative z-10">
                {theme === 'light' ? 
                  <Moon size={18} className="transition-transform duration-700 rotate-0 hover:rotate-[360deg]" /> : 
                  <Sun size={18} className="transition-transform duration-700 rotate-0 hover:rotate-[360deg]" />
                }
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            className="relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            <span className="relative z-10">
              {theme === 'light' ? 
                <Moon size={18} className="transition-transform duration-700 rotate-0 hover:rotate-[360deg]" /> : 
                <Sun size={18} className="transition-transform duration-700 rotate-0 hover:rotate-[360deg]" />
              }
            </span>
          </Button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            {isMenuOpen ? 
              <X size={24} className="animate-spin-slow" /> : 
              <Menu size={24} className="hover:text-primary transition-colors" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 text-sm font-medium hover:text-primary transition-colors transform hover:translate-x-1 transition-transform duration-300"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.linkedin.com/in/umadeviThulluru"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors transform hover:scale-125 transition-transform duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/umadevit67"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors transform hover:scale-125 transition-transform duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" onClick={handleView} className="group">
                  <Eye size={16} className="mr-1 group-hover:scale-110 transition-transform duration-300" /> View Resume
                </Button>
                <Button size="sm" onClick={handleDownload} className="group">
                  <Download size={16} className="mr-1 group-hover:translate-y-1 transition-transform duration-300" /> Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
