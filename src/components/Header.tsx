import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Our Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header 
      className="sticky top-0 z-50 transition-all duration-300" 
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 lg:py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/logo1.jpg"
              alt="Deep Investment"
              className="transition-all duration-300 block h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain ml-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href) 
                    ? 'border-b-2'
                    : ''
                }`}
                style={{
                  color: isActive(item.href) ? '#e3b317' : 'black',
                  borderBottomColor: isActive(item.href) ? '#e3b317' : 'transparent'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#e3b317'}
                onMouseLeave={(e) => e.currentTarget.style.color = isActive(item.href) ? '#e3b317' : 'black'}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <ContactFormModal buttonText="Get Appointment">
              <Button className="text-white px-6 py-2 rounded-md transition-all duration-300" style={{backgroundColor: '#e3b317'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4a516'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e3b317'}>
                Get Appointment
              </Button>
            </ContactFormModal>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 transition-colors text-black"
            onMouseEnter={(e) => e.currentTarget.style.color = '#e3b317'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="lg:hidden py-4 backdrop-blur-md"
            style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}}
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-medium transition-colors px-4"
                  style={{color: isActive(item.href) ? '#e3b317' : 'black'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#e3b317'}
                  onMouseLeave={(e) => e.currentTarget.style.color = isActive(item.href) ? '#e3b317' : 'black'}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <ContactFormModal buttonText="Get Appointment">
                  <Button className="text-white w-full transition-all duration-300" style={{backgroundColor: '#e3b317'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4a516'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e3b317'}>
                    Get Appointment
                  </Button>
                </ContactFormModal>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;