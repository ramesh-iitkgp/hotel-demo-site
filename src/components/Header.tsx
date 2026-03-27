import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b border-transparent">
      <div className={`absolute inset-0 transition-all duration-500 ${scrolled ? 'bg-charcoal/90 backdrop-blur-md shadow-lg' : 'bg-charcoal/0 backdrop-blur-none'}`}></div>
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group z-50">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 border border-gold rounded-sm flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                <span className="font-display text-gold text-lg lg:text-xl font-medium tracking-tight group-hover:text-charcoal transition-colors duration-500">G</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-cream text-lg lg:text-xl tracking-tight block leading-none">THE GERRISH</span>
              <span className="block text-gold-light text-[10px] tracking-[0.2em] uppercase mt-1">Hotel & Suites</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Home', 'Accommodations', 'Amenities', 'History', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase() === 'accommodations' ? 'rooms' : item.toLowerCase()}`} className="nav-link text-sm text-cream/80 hover:text-gold transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center space-x-4 z-50">
            <a href="#contact" className="hidden sm:inline-flex items-center px-6 py-2.5 bg-gold text-charcoal text-xs font-medium tracking-wider uppercase rounded-sm hover:bg-white transition-all duration-300">
              Check Availability
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden w-10 h-10 flex flex-col items-end justify-center space-y-1.5 group" aria-label="Toggle menu">
              <span className={`block h-px bg-cream transition-all duration-300 group-hover:bg-gold ${menuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-6 group-hover:w-8'}`}></span>
              <span className={`block h-px bg-cream transition-all duration-300 group-hover:bg-gold ${menuOpen ? 'opacity-0' : 'w-4 group-hover:w-8'}`}></span>
              <span className={`block h-px bg-cream transition-all duration-300 group-hover:bg-gold ${menuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-6 group-hover:w-8'}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-charcoal z-40 transition-all duration-500 flex items-center justify-center ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-8">
          {['Home', 'Accommodations', 'Amenities', 'History', 'Gallery', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase() === 'accommodations' ? 'rooms' : item.toLowerCase()}`} onClick={closeMenu} className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300">
              {item === 'History' ? 'Our History' : item}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className="mt-8 px-8 py-3 bg-gold text-charcoal font-medium tracking-wider uppercase rounded-sm">Book Now</a>
        </nav>
      </div>
    </header>
  );
}
