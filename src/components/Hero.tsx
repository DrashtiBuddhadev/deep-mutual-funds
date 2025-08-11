import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, Home, Briefcase, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
  backgroundImage?: string;
  className?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  showCTA = true, 
  backgroundImage,
  className = ""
}: HeroProps) => {
  const services = [
    { icon: Shield, label: 'Corporate Risk Management' },
    { icon: TrendingUp, label: 'Mutual Fund & Investment Planning(SIP & SWP)' },
    { icon: Home, label: 'Estate Creation and Legacy Planning' },
    { icon: Briefcase, label: 'Portfolio Management Services (PMS)' },
    { icon: Calculator, label: 'Tax and Compliance Advisory' }
  ];

  // Check if this is a non-home page (hero-no-circular class)
  const isHomePage = !className.includes('hero-no-circular');

  return (
    <section className={`relative min-h-screen flex items-center ${className}`}>
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <img 
            src={backgroundImage} 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`w-full h-full ${
            isHomePage 
              ? 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100' 
              : 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800'
          }`}></div>
        )}
        <div className={`absolute inset-0 ${
          isHomePage ? 'bg-white/10' : 'bg-black/60'
        }`}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-left order-1 lg:order-1">
            <div className={`${
              isHomePage 
                ? 'backdrop-blur-lg border-white/40 shadow-2xl' 
                : 'backdrop-blur-sm border-white/10 shadow-lg'
            } p-6 sm:p-8 rounded-lg`} style={{
              background: isHomePage 
                ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 30%, rgba(241, 245, 249, 0.95) 70%, rgba(226, 232, 240, 0.9) 100%)' 
                : 'linear-gradient(135deg, rgba(17, 80, 153, 0.15) 0%, rgba(17, 80, 153, 0.08) 30%, rgba(255, 255, 255, 0.08) 70%, rgba(255, 255, 255, 0.03) 100%)',
              boxShadow: isHomePage 
                ? '0 25px 50px -15px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.5)' 
                : '0 10px 25px -5px rgba(0, 0, 0, 0.15)'
            }}>
              <div className="font-medium mb-2 text-xs sm:text-sm uppercase tracking-wide" style={{color: '#e3b317'}}>
                Investment & Financial Planning
              </div>
              <h1 className={`font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 leading-tight ${
                isHomePage ? 'text-slate-800' : 'text-white'
              }`}>
                {title}
              </h1>
              <p className={`text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed ${
                isHomePage ? 'text-slate-700' : 'text-white/90'
              }`}>
                {subtitle}
              </p>
              {showCTA && (
                <Link to="/contact">
                  <Button className="text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium rounded-md transition-all duration-300 w-full sm:w-auto" style={{backgroundColor: '#e3b317', boxShadow: '0 10px 25px rgba(227, 179, 23, 0.25)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4a516'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e3b317'}>
                    Schedule Your Free Consultation
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Right Side - Services Section - Only show on home page */}
          {isHomePage && (
            <div className="order-1 lg:order-1 mb-8 lg:mb-0">
              {/* Mobile List View */}
              <div className="lg:hidden">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4 text-center drop-shadow-sm text-slate-900">Our Services</h3>
                  {services.map((service, index) => (
                    <div
                      key={service.label}
                      className="flex items-center p-4 bg-white/80 backdrop-blur-lg rounded-lg border border-white/50 hover:bg-white/90 transition-all duration-300 shadow-xl"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{backgroundColor: '#e3b317'}}>
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm leading-tight text-slate-900">{service.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Circular View */}
              <div className="hidden lg:flex relative items-center justify-center">
              <div className="relative w-[28rem] h-[28rem]">
                {/* Center Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/60 z-10" style={{
                  backgroundColor: '#e3b317', 
                  backdropFilter: 'blur(20px)'
                }}>
                  <svg width="40" height="44" viewBox="0 0 61 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.7974 36.0723H33.7148V38.1446H35.7974V36.0723Z" fill="white"/>
                    <path d="M35.7974 40.2173H33.7148V42.2897H35.7974V40.2173Z" fill="white"/>
                    <path d="M35.7974 44.3623H33.7148V46.4347H35.7974V44.3623Z" fill="white"/>
                    <path d="M27.4673 36.0723H25.3848V38.1446H27.4673V36.0723Z" fill="white"/>
                    <path d="M27.4673 40.2173H25.3848V42.2897H27.4673V40.2173Z" fill="white"/>
                    <path d="M27.4673 44.3623H25.3848V46.4347H27.4673V44.3623Z" fill="white"/>
                    <path d="M31.6312 2.94056V0.842285H29.5487V2.94056C13.3785 3.48974 0.392578 16.7425 0.392578 32.964H2.47516C2.47516 32.7049 2.48765 32.45 2.49494 32.1931C3.77468 30.0513 6.02178 28.8193 8.72289 28.8193C11.4427 28.8193 13.7055 30.0668 14.98 32.2387C14.9769 32.4801 14.9706 32.7205 14.9706 32.964H17.0532C17.0532 32.7112 17.0594 32.4604 17.0626 32.2086C18.3402 30.0565 20.5936 28.8193 23.3009 28.8193C26.0166 28.8193 28.2741 30.0627 29.5487 32.2242V59.9048C29.5487 61.8414 30.3078 63.663 31.6843 65.0329C33.0609 66.4027 34.8915 67.1581 36.8377 67.1581C38.7838 67.1581 40.6144 66.4027 41.991 65.0329C43.3676 63.663 44.1267 61.8414 44.1267 59.9048H42.0441C42.0441 61.2881 41.5016 62.5895 40.5186 63.5677C39.5357 64.5459 38.2278 65.0857 36.8377 65.0857C35.4476 65.0857 34.1397 64.5459 33.1567 63.5677C32.1737 62.5895 31.6312 61.2881 31.6312 59.9048V32.2252C32.9079 30.0627 35.1664 28.8193 37.879 28.8193C40.5884 28.8193 42.8418 30.0575 44.1173 32.2097C44.1205 32.4614 44.1267 32.7112 44.1267 32.964H46.2093C46.2093 32.7205 46.203 32.4811 46.1999 32.2397C47.4734 30.0679 49.7361 28.8193 52.457 28.8193C55.1592 28.8193 57.4073 30.0513 58.685 32.1941C58.6922 32.45 58.7047 32.706 58.7047 32.964H60.7873C60.7873 16.7425 47.8004 3.48974 31.6312 2.94056ZM8.72289 26.7469C6.46954 26.7469 4.41091 27.465 2.79587 28.7426C4.50359 17.557 12.8943 8.5287 23.7747 5.82322C19.0847 10.0975 15.7568 18.7134 15.0956 29.1363C13.4222 27.6183 11.1928 26.7469 8.72289 26.7469ZM23.3009 26.7469C20.9653 26.7469 18.8453 27.5251 17.2052 28.8908C18.1403 16.2731 23.3322 6.11543 29.5487 5.08235V29.0244C27.8899 27.5769 25.7105 26.7469 23.3009 26.7469ZM37.879 26.7469C35.4705 26.7469 33.291 27.5769 31.6312 29.0255V5.08235C37.8477 6.11543 43.0396 16.2721 43.9747 28.8908C42.3346 27.5251 40.2146 26.7469 37.879 26.7469ZM52.457 26.7469C49.986 26.7469 47.7577 27.6183 46.0843 29.1353C45.4231 18.7123 42.0951 10.0964 37.4052 5.82219C48.2846 8.5287 56.6753 17.5559 58.384 28.7415C56.77 27.465 54.7104 26.7469 52.457 26.7469Z" fill="white"/>
                    <path d="M50.6196 44.3616H52.4575V42.2893H51.1736L53.7685 37.9839L50.6571 34.8868L47.251 36.0162L43.845 34.8857L40.7336 37.9829L43.3285 42.2893H42.0446V44.3616H43.8825C43.4358 45.3792 42.4268 46.4682 41.3011 47.6805C38.8489 50.3207 35.7969 53.6075 35.7969 58.8682C35.7969 60.1407 35.9822 61.3033 36.3467 62.3239L38.3095 61.6297C38.0242 60.8318 37.8795 59.9023 37.8795 58.8682C37.8795 54.4178 40.5087 51.5859 42.8297 49.0877C44.3386 47.464 45.6756 46.0227 46.0838 44.3616H48.4183C48.8265 46.0227 50.1635 47.4629 51.6724 49.0877C53.9934 51.5859 56.6226 54.4178 56.6226 58.8682C56.6226 62.9933 54.5203 65.0853 50.3749 65.0853H44.1272V67.1577H50.3749C55.6688 67.1577 58.7052 64.1362 58.7052 58.8682C58.7052 53.6075 55.6532 50.3207 53.202 47.6805C52.0764 46.4682 51.0663 45.3792 50.6196 44.3616ZM45.7578 42.2893L43.3545 38.3051L44.4083 37.2576L47.251 38.2005L50.0927 37.2586L51.1465 38.3062L48.7443 42.2893H45.7578Z" fill="white"/>
                    <path d="M16.0128 44.3623C9.69735 44.3623 4.55859 49.4759 4.55859 55.7603C4.55859 62.0448 9.69735 67.1584 16.0128 67.1584C22.3282 67.1584 27.4669 62.0448 27.4669 55.7603C27.4669 49.4759 22.3282 44.3623 16.0128 44.3623ZM16.0128 65.086C10.8459 65.086 6.64117 60.9029 6.64117 55.7603C6.64117 50.6177 10.8459 46.4347 16.0128 46.4347C21.1796 46.4347 25.3844 50.6177 25.3844 55.7603C25.3844 60.9029 21.1796 65.086 16.0128 65.086Z" fill="white"/>
                    <path d="M17.0541 54.7239H14.9715C14.6935 54.7239 14.4321 54.6162 14.2343 54.4193C14.0385 54.2245 13.9302 53.9655 13.9302 53.6878C13.9302 53.4101 14.0385 53.151 14.2343 52.9562C14.4321 52.7593 14.6935 52.6516 14.9715 52.6516H19.1367V50.5792H17.0541V48.5068H14.9715V50.5792C14.1385 50.5792 13.3534 50.9025 12.7629 51.489C12.1725 52.0755 11.8477 52.8567 11.8477 53.6878C11.8477 54.5188 12.1736 55.3001 12.7629 55.8865C13.3523 56.473 14.1385 56.7963 14.9715 56.7963H17.0541C17.3321 56.7963 17.5935 56.9041 17.7913 57.1009C17.9871 57.2957 18.0954 57.5548 18.0954 57.8325C18.0954 58.1102 17.9871 58.3692 17.7913 58.564C17.5935 58.7609 17.3321 58.8687 17.0541 58.8687H12.8889V60.941H14.9715V63.0134H17.0541V60.941C17.8871 60.941 18.6723 60.6178 19.2627 60.0313C19.8531 59.4448 20.178 58.6635 20.178 57.8325C20.178 57.0015 19.852 56.2202 19.2627 55.6337C18.6733 55.0472 17.8871 54.7239 17.0541 54.7239Z" fill="white"/>
                  </svg>
                </div>

                {/* Radial Gradient Fill */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 448 448">
                  <defs>
                    <radialGradient id="centerGradient" cx="50%" cy="50%" r="40%">
                      <stop offset="0%" stopColor="rgba(227, 179, 23, 0.4)" />
                      <stop offset="30%" stopColor="rgba(227, 179, 23, 0.25)" />
                      <stop offset="60%" stopColor="rgba(255, 255, 255, 0.2)" />
                      <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
                    </radialGradient>
                  </defs>
                  
                  {/* Radial Gradient Fill Circle */}
                  <circle
                    cx="224"
                    cy="224"
                    r="180"
                    fill="url(#centerGradient)"
                  />

                  {/* Base Circle Border */}
                  <circle
                    cx="224"
                    cy="224"
                    r="180"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1"
                  />

                  {/* Moving Tracker Line - Longer and Slower */}
                  <circle
                    cx="224"
                    cy="224"
                    r="180"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.8)"
                    strokeWidth="3"
                    strokeDasharray="80,280"
                    strokeLinecap="round"
                    className="animate-spin"
                    style={{ 
                      animationDuration: '30s',
                      transformOrigin: '224px 224px'
                    }}
                  />
                </svg>

                {/* Surrounding Icons */}
                {services.map((service, index) => {
                  const angle = (index * 72) - 90; // 360/5 = 72 degrees between each icon (now 5 icons)
                  const radius = 180;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={service.label}
                      className="absolute w-16 h-16 bg-white/30 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-2xl border-2 border-white/60 hover:bg-white/40 hover:scale-110 transition-all duration-300 cursor-pointer group z-10"
                      style={{
                        left: `calc(50% + ${x}px - 32px)`,
                        top: `calc(50% + ${y}px - 32px)`,
                      }}
                    >
                      <service.icon className="w-8 h-8 text-white transition-colors drop-shadow-lg" onMouseEnter={(e) => e.currentTarget.style.color = '#e3b317'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'} />
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-medium text-slate-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-lg px-3 py-2 rounded-lg border border-white/40 shadow-xl">
                        {service.label}
                      </div>
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;