import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Our Blog', href: '/blog' },
    { name: 'Pages', href: '/pages' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: '#e3b317'}}>
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-white">
              Deep Investment
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href) 
                    ? 'border-b-2 text-white'
                    : 'text-white'
                }`}
                style={{
                  color: isActive(item.href) ? '#e3b317' : 'white',
                  borderBottomColor: isActive(item.href) ? '#e3b317' : 'transparent'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#e3b317'}
                onMouseLeave={(e) => e.currentTarget.style.color = isActive(item.href) ? '#e3b317' : 'white'}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button className="text-white px-6 py-2 rounded-md transition-all duration-300" style={{backgroundColor: '#e3b317'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4a516'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e3b317'}>
              Get Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white transition-colors"
            onMouseEnter={(e) => e.currentTarget.style.color = '#e3b317'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 bg-black/90 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors px-4 ${
                    isActive(item.href) ? '' : 'text-white'
                  }`}
                  style={{color: isActive(item.href) ? '#e3b317' : 'white'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#e3b317'}
                  onMouseLeave={(e) => e.currentTarget.style.color = isActive(item.href) ? '#e3b317' : 'white'}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button className="text-white w-full transition-all duration-300" style={{backgroundColor: '#e3b317'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4a516'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e3b317'}>
                  Get Appointment
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;