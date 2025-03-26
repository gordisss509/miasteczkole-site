
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 py-4',
      scrolled 
        ? 'nav-glassmorphism text-primary' 
        : 'bg-primary/90 text-white shadow-md'
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold transition-colors duration-500">
            Miasteczkole
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['O nas', 'Oferta', 'Opinie', 'Kontakt'].map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={cn(
                'text-lg font-medium transition-all duration-300 hover:scale-105',
                scrolled ? 'text-primary font-semibold' : 'text-white font-semibold'
              )}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={cn("md:hidden", scrolled ? 'text-primary' : 'text-white')}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-4">
            {['O nas', 'Oferta', 'Opinie', 'Kontakt'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-lg font-medium text-primary hover:text-primary-light transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
