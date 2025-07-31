import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Users, PiggyBank } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Wealth Building",
      subtitle: "Systematic Investment Plans & Portfolio Management",
      description: "Build your wealth systematically through carefully selected mutual funds, SIPs, and diversified investment portfolios. Our strategies are designed for long-term growth while managing risk.",
      features: [
        "Systematic Investment Plans (SIPs)",
        "Mutual Fund Selection & Management",
        "Portfolio Diversification",
        "Goal-based Investment Planning",
        "Regular Portfolio Reviews"
      ]
    },
    {
      icon: Shield,
      title: "Wealth Protection",
      subtitle: "Insurance & Risk Management",
      description: "Protect your accumulated wealth and family's future through comprehensive insurance coverage and corporate risk strategies that shield you from unforeseen circumstances.",
      features: [
        "Life & Health Insurance Planning",
        "Corporate Risk Strategies",
        "Tax Planning & Compliance",
        "Legal Structure Optimization",
        "Asset Protection Strategies"
      ]
    },
    {
      icon: Users,
      title: "Legacy Planning",
      subtitle: "Estate & Trust Structuring",
      description: "Ensure smooth wealth transfer to future generations through proper estate planning, trust structures, and buy-sell agreements that protect your family's financial future.",
      features: [
        "Family Trust Planning",
        "Estate Structuring",
        "Buy-Sell Agreements",
        "Succession Planning",
        "Generational Wealth Transfer"
      ]
    },
    {
      icon: PiggyBank,
      title: "Retirement Planning",
      subtitle: "Secure Your Golden Years",
      description: "Plan for a comfortable retirement with strategies that ensure you maintain your lifestyle and independence throughout your golden years.",
      features: [
        "Retirement Corpus Calculation",
        "Pension & Provident Fund Optimization",
        "Post-retirement Income Planning",
        "Healthcare Cost Planning",
        "Inflation-adjusted Strategies"
      ]
    }
  ];

  return (
    <Layout>
      <Hero 
        title="Our Services"
        subtitle="Personalised Solutions for Your Financial Goals"
        showCTA={false}
      />

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-6">
              Comprehensive Wealth Management Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From building wealth to protecting it and passing it on, we provide end-to-end 
              financial solutions tailored to your life stage and goals.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isReverse = index % 2 !== 0;
              
              return (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isReverse ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={isReverse ? 'lg:col-start-2' : ''}>
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl lg:text-3xl text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="font-semibold text-lg text-accent mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      Learn More
                    </Button>
                  </div>
                  
                  <div className={`surface-card ${isReverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="h-64 bg-surface rounded-lg flex items-center justify-center">
                      <IconComponent className="w-24 h-24 text-accent/30" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 surface-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to understanding your needs and delivering results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understand your financial goals, risk tolerance, and current situation"
              },
              {
                step: "02", 
                title: "Analysis",
                description: "Analyze your portfolio and identify gaps and opportunities"
              },
              {
                step: "03",
                title: "Strategy",
                description: "Develop a personalized financial plan aligned with your objectives"
              },
              {
                step: "04",
                title: "Execution",
                description: "Implement the strategy and provide ongoing monitoring and support"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-background text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your financial goals and learn how we can help you achieve them.
          </p>
          <Button className="btn-hero text-lg">
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;