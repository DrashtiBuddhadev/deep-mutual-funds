import { Button } from '@/components/ui/button';
import advisorImage from '@/assets/advisor-working.jpg';

const CTA = () => {
  return (
    <section 
      className="py-16 lg:py-24 relative"
      style={{
        backgroundImage: "url('/images/bg-option2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary">
              Book a Free 30 Minute Wealth Strategy Consultation
            </h2>
            <p className="text-lg font-semibold text-accent">
              (Worth ₹4,999 — Yours Free)
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In this expert-led session, we'll review your finances, identify gaps, and help you 
              create a smarter plan. No pressure, no cost. Just clear guidance from certified 
              financial planners with over 20 years of experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Complete financial health checkup</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Personalized investment strategy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Goal-based financial planning</span>
              </div>
            </div>
            <Button className="btn-hero text-lg">
              Schedule Your Free Consultation
            </Button>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative max-w-lg mx-auto">
              {/* Main Image */}
              <img 
                src={advisorImage}
                alt="Financial advisor consultation"
                className="w-full h-auto rounded-xl shadow-xl relative z-10"
              />
              
              {/* Experience Badge - Left Side (50% overlap) */}
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-20">
                {/* Dotted Pattern Background */}
                <div className="absolute -left-6 -top-6 w-20 h-20 opacity-30">
                  <div className="grid grid-cols-5 gap-1">
                    {[...Array(25)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                {/* Transparent Outer Circle Ring */}
                <div className="w-40 h-40 rounded-full border-4 border-gray-300 border-opacity-40 absolute -top-4 -left-4 z-0"></div>
                
                {/* Experience Circle - Main Badge */}
                <div 
                  className="w-32 h-32 rounded-full flex flex-col items-center justify-center text-white shadow-xl relative z-10 p-4"
                  style={{backgroundColor: '#e3b317'}}
                >
                  <div className="text-2xl font-bold leading-tight">₹100Cr+</div>
                  <div className="text-xs font-medium text-center leading-tight mt-1">Wealth<br/>Managed</div>
                </div>
              </div>

              {/* Client Satisfaction - Right Side */}
              <div className="absolute -right-12 top-8 z-20">
                <div className="bg-white rounded-xl shadow-xl p-5 min-w-max">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm font-bold text-gray-800">1,500+ Families</div>
                  <div className="text-xs text-gray-600">Trust Our Guidance</div>
                </div>
              </div>

              {/* Additional Dotted Pattern - Right Bottom */}
              <div className="absolute -right-8 -bottom-8 w-16 h-16 opacity-20">
                <div className="grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;