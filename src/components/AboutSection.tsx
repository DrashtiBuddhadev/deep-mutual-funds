import heroImage from '/images/hero1.png';
import { PiggyBank, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const metrics = [
    {
      icon: PiggyBank,
      value: '₹100+ Cr',
      label: 'Guided in Family Wealth'
    },
    {
      icon: TrendingUp,
      value: '1,500+',
      label: 'SIP Plans Created'
    },
    {
      icon: Shield,
      value: '20+',
      label: 'Years of Trusted Advice'
    }
  ];

  return (
    <section 
      className="py-16 lg:py-24"
      style={{
        backgroundImage: "url('/images/bg-option1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative max-w-sm mx-auto order-2 lg:order-1 mb-8 lg:mb-0">
            {/* Offset Background Container */}
            <div 
              className="absolute bottom-0 left-0 w-full h-full rounded-lg z-0"
              style={{
                backgroundColor: '#115099',
                transform: 'translate(-24px, 24px)'
              }}
            ></div>
            
            {/* Main Image */}
            <img 
              src={heroImage}
              alt="Financial consultation with trusted advice" 
              className="relative w-full h-auto rounded-lg shadow-lg z-10"
            />
            
            {/* Experience Badge */}
            <div 
              className="absolute -top-4 -right-4 px-4 py-3 rounded-lg shadow-lg z-20"
              style={{backgroundColor: '#e3b317'}}
            >
              <div className="text-white text-center">
                <div className="text-2xl font-bold leading-tight">20+</div>
                <div className="text-xs font-medium uppercase tracking-wide">Years of Trusted Advice</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8 order-1 lg:order-2">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium" style={{backgroundColor: 'rgba(17, 80, 153, 0.1)', color: '#115099'}}>
                About Us
              </span>
            </div>
            
            <h2 className="font-heading font-medium text-xl sm:text-2xl lg:text-3xl mb-6 leading-tight" style={{color: '#115099'}}>
              Trusted by Families and Businesses Across India
            </h2>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 gap-4 mb-6 sm:mb-8">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#e3b317'}}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg sm:text-xl" style={{color: '#115099'}}>{metric.value}</div>
                      <div className="text-sm sm:text-base text-gray-600">{metric.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              We help protect and grow wealth through personalised planning, smart investing and legacy protection.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/about">
                <button className="text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors hover:opacity-90 w-full sm:w-auto" style={{backgroundColor: '#e3b317'}}>
                  Learn more →
                </button>
              </Link>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(17, 80, 153, 0.1)'}}>
                  <svg className="w-5 h-5 sm:w-6 h-6" style={{color: '#115099'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500">Call Us Now</div>
                  <div className="text-sm sm:text-base font-semibold" style={{color: '#115099'}}>+91-123-456-7890</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;