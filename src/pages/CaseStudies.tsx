import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import advisorImage from '@/assets/advisor-working.jpg';

const CaseStudies = () => {
  const navigate = useNavigate();
  
  const caseStudies = [
    {
      id: "estate-protection",
      title: "Securing a Family Estate from Legal Disputes",
      client: "Entrepreneur, Age 52 | Industry: Manufacturing",
      cardDescription: "Strategic estate planning that protected substantial wealth from legal disputes and business liabilities through non-attachable family trust structures.",
      hoverDescription: "How we helped protect substantial wealth across fixed assets and properties from legal disputes and business liabilities through strategic estate planning.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=400&fit=crop&crop=faces", // Estate planning documents
      challenge: "The client had substantial wealth across fixed assets and properties but no structured estate plan. There were risks of disputes among heirs and exposure to business liabilities.",
      solution: "Created a non-attachable family trust, transferred assets into legally protected structures, and coordinated with tax and legal advisors for compliance.",
      results: [
        "The family now has a private, tax-efficient structure for generational wealth",
        "Zero exposure to external claims",
        "Protected children's future inheritance",
        "Eliminated risk of family disputes"
      ],
      testimonial: "We had no idea how exposed we were. Deep Investment helped us lock down our assets, avoid conflict, and protect our children's future.",
      clientName: "Rakesh M., Business Owner",
      timeframe: "18 months",
      investment: "Estate Protection"
    },
    {
      id: "partner-exit",
      title: "Partner Exit Without the Drama",
      client: "Co-Founders of a Tech Startup | Age: 29 & 31",
      cardDescription: "Strategic Buy-Sell Agreement design that enabled smooth founder exit without legal tension or financial disruption to startup operations.",
      hoverDescription: "Comprehensive partnership restructuring that prevented legal disputes and ensured business continuity during founder transition.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&h=400&fit=crop&crop=faces", // Business partnership discussion
      challenge: "One founder wanted to exit due to relocation, but no agreement existed. There was confusion, legal tension, and risk of financial disruption.",
      solution: "Designed a Buy–Sell Agreement with valuation aligned with mutual expectations and funded with insurance to avoid capital stress.",
      results: [
        "The exit was smooth and relationships intact",
        "Operations remained uninterrupted",
        "Clear legal framework established",
        "Financial strain avoided through insurance funding"
      ],
      testimonial: "Their team helped us avoid legal mess and financial strain. We got clarity, structure, and peace of mind.",
      clientName: "Nidhi & Vivek, Startup Co-founders",
      timeframe: "6 months",
      investment: "Buy-Sell Structure"
    },
    {
      id: "retirement-corpus",
      title: "Building a ₹2 Cr Retirement Corpus via SIPs",
      client: "Working Couple | Age 38 & 41",
      cardDescription: "Systematic Investment Plan strategy that transformed scattered investments into a disciplined approach targeting ₹2+ Cr retirement corpus.",
      hoverDescription: "Comprehensive financial planning that created automated investment discipline and streamlined insurance for long-term wealth building.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=400&fit=crop&crop=faces", // SIP investment growth chart
      challenge: "No structured long-term savings, scattered insurance and investments with no clear retirement plan.",
      solution: "Created goal-linked SIP strategy, reviewed insurance and removed duplication, set up automatic investment roadmap till age 60.",
      results: [
        "Projected retirement corpus of ₹2.1 Cr",
        "Streamlined insurance coverage",
        "Annual reviews for course correction",
        "Automated investment discipline"
      ],
      testimonial: "We now feel totally in control of our financial future. The SIP strategy is working perfectly.",
      clientName: "Anonymous Client",
      timeframe: "22 years (ongoing)",
      investment: "Monthly SIP Plan"
    },
    {
      id: "pms-portfolio",
      title: "Transition to PMS for Higher Returns",
      client: "Business Consultant | HNI",
      cardDescription: "Professional Portfolio Management Services delivering higher returns with reduced volatility through expert market analysis and quarterly reviews.",
      hoverDescription: "Advanced portfolio optimization that eliminated market timing stress while achieving superior risk-adjusted returns for high net worth individual.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop&crop=faces", // Portfolio management charts
      challenge: "High net worth individual needed professional portfolio management with better returns and reduced volatility while maintaining liquidity.",
      solution: "Implemented PMS with balanced equity and debt allocation based on goals and risk tolerance, set up quarterly performance reviews.",
      results: [
        "Higher returns with reduced volatility",
        "Professional portfolio management",
        "Clear quarterly reporting",
        "Expert market timing and strategy"
      ],
      testimonial: "With PMS, I've seen better returns and I don't stress about market timing anymore. I get clear reports, expert logic, and peace of mind.",
      clientName: "Mahesh J., Business Consultant",
      timeframe: "Ongoing",
      investment: "PMS Portfolio"
    }
  ];

  return (
    <Layout>
      <Hero 
        title="Case Studies & Client Stories"
        subtitle="Real Results for Real People - See how we've helped families and businesses achieve their financial goals through personalized strategies."
        showCTA={false}
        className="hero-no-circular"
      />

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-6">
              Proven Track Record of Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how we've helped families and businesses across India achieve their financial goals 
              through personalized wealth management strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className="relative h-80 sm:h-96 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => navigate(`/case-study/${study.id}`)}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${study.image}')`
                  }}
                />
                
                {/* Default Content - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 sm:p-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {study.cardDescription}
                  </p>
                </div>
                
                {/* Hover Overlay - Only on Hover */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 sm:p-8">
                  <div className="text-center space-y-3 sm:space-y-4">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base line-clamp-4">
                      {study.hoverDescription}
                    </p>
                    
                    <div className="flex items-center justify-center text-accent font-semibold text-base sm:text-lg mt-4 sm:mt-6">
                      LEARN MORE
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 surface-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These results speak for themselves - real families, real goals, real success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "₹100+ Cr", label: "Wealth Managed", description: "Total assets under management" },
              { number: "95%", label: "Goal Achievement", description: "Clients meeting their targets" },
              { number: "1,500+", label: "SIPs Created", description: "Systematic investment plans" },
              { number: "20+ Years", label: "Experience", description: "Combined team expertise" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-2">
                  {stat.number}
                </p>
                <p className="font-semibold text-lg text-accent mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-primary">
                Want to Be Our Next Success Story?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Let's understand your financial challenges and design a personalized plan that works for you. 
                Join the families and businesses who have already transformed their financial future with our guidance.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-muted-foreground">Personalized wealth strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-muted-foreground">Proven track record of success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-muted-foreground">Expert financial planning guidance</span>
                </div>
              </div>
              <Button className="btn-hero text-base sm:text-lg w-full sm:w-auto">
                👉 Schedule Your Free Consultation
              </Button>
              <p className="text-sm text-muted-foreground">
                Or Call: <span className="font-semibold text-primary">+91 76000 21664</span> | <span className="font-semibold text-primary">+91 94081 02596</span>
              </p>
            </div>
            
            <div className="block relative order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                {/* Main Image */}
                <img 
                  src={advisorImage}
                  alt="Financial advisor consultation"
                  className="w-full h-auto rounded-xl shadow-xl relative z-10"
                />
               
                {/* Experience Badge - Left Side (50% overlap) */}
                <div className="absolute -left-8 sm:-left-12 lg:-left-16 top-1/2 transform -translate-y-1/2 z-20">
                  {/* Dotted Pattern Background */}
                  <div className="absolute -left-3 sm:-left-4 lg:-left-6 -top-3 sm:-top-4 lg:-top-6 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 opacity-30">
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Transparent Outer Circle Ring */}
                  <div className="w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 rounded-full border-2 sm:border-3 lg:border-4 border-gray-300 border-opacity-40 absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 z-0"></div>
                  
                  {/* Experience Circle - Main Badge */}
                  <div 
                    className="w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 rounded-full flex flex-col items-center justify-center text-white shadow-xl relative z-10 p-2 sm:p-3 lg:p-4"
                    style={{backgroundColor: '#e3b317'}}
                  >
                    <div className="text-sm sm:text-lg lg:text-2xl font-bold leading-tight">₹100Cr+</div>
                    <div className="text-xs font-medium text-center leading-tight mt-1">Wealth<br/>Managed</div>
                  </div>
                </div>

                {/* Client Satisfaction - Right Side */}
                <div className="absolute -right-6 sm:-right-8 lg:-right-12 top-4 sm:top-6 lg:top-8 z-20">
                  <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 lg:p-5 min-w-max">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-gray-800">1,500+ Families</div>
                    <div className="text-xs text-gray-600">Trust Our Guidance</div>
                  </div>
                </div>

                {/* Additional Dotted Pattern - Right Bottom */}
                <div className="absolute -right-4 sm:-right-6 lg:-right-8 -bottom-4 sm:-bottom-6 lg:-bottom-8 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 opacity-20">
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;