import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Award, Users, Shield } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Rajesh Patel",
      title: "Certified Financial Planner & Founder",
      bio: "With over 20 years of experience in wealth management, Rajesh founded Deep Investment in 2003 with a vision to provide personalized financial planning to families across India.",
      certifications: ["CFP", "MDRT Member", "SEBI Registered"]
    },
    {
      name: "Priya Sharma",
      title: "Senior Investment Advisor",
      bio: "Priya brings 15 years of expertise in portfolio management and investment strategies. She specializes in SIP planning and risk assessment for growing families.",
      certifications: ["AMFI Certified", "CFA Level II", "Insurance Licensed"]
    }
  ];

  const certifications = [
    {
      icon: Shield,
      title: "SEBI Registered",
      description: "Authorized by Securities and Exchange Board of India"
    },
    {
      icon: Award,
      title: "AMFI Certified",
      description: "Association of Mutual Funds in India certification"
    },
    {
      icon: Users,
      title: "MDRT Member",
      description: "Million Dollar Round Table member - global standard of excellence"
    }
  ];

  return (
    <Layout>
      <Hero 
        title="About Deep Investment"
        subtitle="Building Wealth, Securing Futures Since 2003"
        showCTA={false}
      />

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                Deep Investment was founded in 2003 in Bharuch, Gujarat, with a simple yet powerful mission: 
                to help families and businesses build, protect, and transfer wealth across generations. What 
                started as a local financial planning practice has grown into a trusted wealth management firm 
                serving clients across India.
              </p>
              <p>
                Our journey began when our founder, Rajesh Patel, recognized the gap between complex financial 
                products and the real needs of Indian families. He envisioned a firm that would combine 
                international best practices with deep understanding of Indian financial markets and family values.
              </p>
              <p>
                Today, we are proud to be SEBI registered, AMFI certified, and led by Certified Financial 
                Planners who bring more than two decades of combined experience. Our commitment to trust, 
                empathy, and long-term relationships has helped us guide over ₹100 crores in family wealth 
                and create more than 1,500 systematic investment plans.
              </p>
              <p>
                From our offices in Bharuch and Surat, we serve clients across India through personalized 
                consultations, comprehensive financial planning, and ongoing portfolio management. Every 
                recommendation we make is backed by thorough research and tailored to your unique circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 lg:py-24 surface-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <div key={index} className="surface-card text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-2">
                  {member.name}
                </h3>
                <p className="font-medium text-accent mb-4">
                  {member.title}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.certifications.map((cert, certIndex) => (
                    <span 
                      key={certIndex}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognized by leading financial institutions and regulatory bodies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {cert.description}
                  </p>
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
          <Button className="btn-hero text-lg">
            Book Your Free Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;