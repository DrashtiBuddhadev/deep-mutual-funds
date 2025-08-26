import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">D</span>
              </div>
              <span className="font-heading font-bold text-xl">Deep Investment</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering wealth for life and legacy since 2003. Trusted wealth management 
              for families and businesses across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-accent" />
                <div className="text-sm">
                  <p className="text-primary-foreground/80">+91 94081 02596</p>
                  <p className="text-primary-foreground/60">Mon-Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-accent" />
                <p className="text-primary-foreground/80 text-sm">info@deepinvestment.com</p>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Offices</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-accent" />
                <div className="text-sm">
                  <p className="text-primary-foreground/90 font-medium">Bharuch Office</p>
                  <p className="text-primary-foreground/70">Main Branch, Gujarat</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-accent" />
                <div className="text-sm">
                  <p className="text-primary-foreground/90 font-medium">Surat Office</p>
                  <p className="text-primary-foreground/70">Consultation Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 Deep Investment. Founded 2003. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-xs text-center md:text-right">
              SEBI Registered. Investments are subject to market risks.
              <br className="hidden md:block" />
              Please read all scheme related documents carefully.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;