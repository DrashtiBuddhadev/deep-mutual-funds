import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Users } from 'lucide-react';

const WealthJourney = () => {
  const journeySteps = [
    {
      icon: TrendingUp,
      title: 'Build Wealth',
      description: 'SIPs, Portfolio Management, Income Continuation Planning',
      details: 'Start your wealth-building journey with systematic investment plans and diversified portfolios designed for long-term growth.'
    },
    {
      icon: Shield,
      title: 'Protect What You\'ve Built',
      description: 'Corporate Risk Strategies, Insurance, Tax and Legal Compliance',
      details: 'Safeguard your accumulated wealth through comprehensive insurance coverage and strategic risk management.'
    },
    {
      icon: Users,
      title: 'Leave a Legacy',
      description: 'Trust Planning, Estate Structuring, Buy Sell Agreements',
      details: 'Ensure smooth wealth transfer to future generations through proper estate planning and legal structures.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 surface-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
            Your Wealth Journey, Simplified
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Where are you in your financial journey? We guide you at every step — from building 
            to protecting to passing on your wealth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="surface-card text-center hover-lift group"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <IconComponent className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-xl lg:text-2xl text-primary mb-4">
                  {step.title}
                </h3>
                <p className="font-medium text-muted-foreground mb-4">
                  {step.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {step.details}
                </p>
                <Button 
                  variant="outline" 
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WealthJourney;