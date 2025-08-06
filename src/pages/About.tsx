import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Shield, Star, Eye, Heart, TrendingUp, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: "Praful Mistry",
      title: "Founder & MDRT USA Member",
      bio: "Praful brings decades of experience in wealth management and financial planning. As an MDRT USA member, he has demonstrated excellence in serving clients and building lasting financial legacies for families and entrepreneurs.",
      certifications: ["MDRT USA Member", "SEBI Registered", "Insurance Licensed"]
    },
    {
      name: "Deep Mistry",
      title: "Co-Founder & Certified Financial Planner",
      bio: "Deep is a Certified Financial Planner who specializes in holistic wealth management strategies. He combines international best practices with deep understanding of Indian markets to create comprehensive financial solutions.",
      certifications: ["Certified Financial Planner", "AMFI Certified", "Risk Management Expert"]
    }
  ];

  const values = [
    {
      icon: Star,
      title: "Service Excellence",
      description: "A 10-star client experience every time"
    },
    {
      icon: Eye,
      title: "Trust and Transparency",
      description: "100% honest advice with clear disclosures"
    },
    {
      icon: Heart,
      title: "Empathy and Relationship",
      description: "We listen, understand and deliver"
    },
    {
      icon: TrendingUp,
      title: "Research Driven",
      description: "Informed by market analysis, tailored for you"
    },
    {
      icon: Building,
      title: "Legacy Focused",
      description: "We don't just grow wealth, we protect it for generations"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "SEBI registered and fully compliant with regulatory standards"
    }
  ];

  return (
    <Layout>
      <Hero 
        title="A Heritage of Trust and Expertise"
        subtitle="Deep Investment was built on the belief that protecting your intellectual and financial property requires both expertise and integrity."
        showCTA={false}
        className="hero-no-circular"
      />

      {/* Heritage of Trust and Expertise */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-8">
              A Heritage of Trust and Expertise
            </h2>
            <div className="space-y-5">
              <p className="text-base text-muted-foreground leading-relaxed">
                Deep Investment was built on the belief that protecting your financial property requires both expertise and integrity. Our founders Praful Mistry (MDRT USA member) and Deep Mistry (Certified Financial Planner) bring decades of experience to help families and entrepreneurs navigate wealth management.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We follow a holistic wealth management philosophy integrating investment advice, risk cover, tax optimization, and estate planning. This comprehensive approach combines international best practices with deep understanding of Indian markets to create sustainable financial strategies that protect wealth across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section 
        className="py-16 lg:py-24 relative"
        style={{
          backgroundImage: `url('/images/bg-option1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the certified professionals dedicated to your financial success
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="relative p-6 rounded-lg shadow-sm border border-gray-200 bg-white overflow-hidden transition-all duration-500 ease-in-out group hover:shadow-lg hover:scale-[1.02] text-center"
                onMouseEnter={(e) => {
                  const fillElement = e.currentTarget.querySelector('.gold-fill') as HTMLElement;
                  if (fillElement) {
                    fillElement.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
                  }
                }}
                onMouseLeave={(e) => {
                  const fillElement = e.currentTarget.querySelector('.gold-fill') as HTMLElement;
                  if (fillElement) {
                    fillElement.style.clipPath = 'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)';
                  }
                }}
              >
                {/* Gold diagonal fill on hover */}
                <div 
                  className="gold-fill absolute inset-0 rounded-lg transition-all duration-700 ease-in-out"
                  style={{
                    background: '#115099',
                    clipPath: 'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)',
                    transition: 'clip-path 0.7s ease-in-out'
                  }}
                ></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-white group-hover:border-2 group-hover:border-blue-600 transition-all duration-300">
                    <span className="text-2xl font-bold text-primary group-hover:text-blue-600 transition-colors duration-300">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary mb-2 group-hover:text-white transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="font-medium text-accent mb-4 group-hover:text-white transition-colors duration-300">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.certifications.map((cert, certIndex) => (
                      <span 
                        key={certIndex}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium group-hover:bg-white/20 group-hover:text-white transition-all duration-300"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Curved accent at bottom right corner */}
                <div 
                  className="absolute bottom-0 right-0 w-20 h-20 transition-all duration-300"
                  style={{
                    backgroundColor: '#115099',
                    borderRadius: '100% 0 0.5rem 0',
                    transform: 'translate(50%, 50%)'
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-8">
              Our Mission
            </h2>
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
              <blockquote className="text-xl lg:text-2xl font-medium text-primary leading-relaxed">
                "To empower families and entrepreneurs to protect today's wealth and build tomorrow's legacy through clarity, care and compliance."
              </blockquote>
              <div className="mt-6 w-16 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section 
        className="py-16 lg:py-24 relative"
        style={{
          backgroundImage: `url('/images/bg-option2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-8">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-2 relative">
                Our Values
              </h2>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-16 h-0.5 bg-accent"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and interaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index} 
                  className="relative border border-gray-300 p-12 text-center bg-white transition-all duration-500 ease-in-out group hover:text-white"
                  style={{
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    const element = e.currentTarget as HTMLElement;
                    element.style.backgroundImage = `url('/images/service-bg.jpg')`;
                    element.style.backgroundSize = 'cover';
                    element.style.backgroundPosition = 'center center';
                    element.style.backgroundAttachment = 'local';
                    
                    const overlay = element.querySelector('.hover-overlay') as HTMLElement;
                    if (overlay) {
                      overlay.style.opacity = '1';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const element = e.currentTarget as HTMLElement;
                    element.style.backgroundImage = 'none';
                    
                    const overlay = element.querySelector('.hover-overlay') as HTMLElement;
                    if (overlay) {
                      overlay.style.opacity = '0';
                    }
                  }}
                >
                  {/* Hover overlay */}
                  <div 
                    className="hover-overlay absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500"
                    style={{ zIndex: 1 }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-5">
                      <IconComponent className="w-10 h-10 text-accent mx-auto group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg capitalize group-hover:text-white transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 surface-gradient text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-6">
            Ready to Start Your Wealth Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experienced team help you create a personalized financial plan that aligns with your goals.
          </p>
          <Link to="/contact">
            <Button className="btn-hero text-lg">
              Book Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;