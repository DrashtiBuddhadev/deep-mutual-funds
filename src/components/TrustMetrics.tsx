import { TrendingUp, PiggyBank, Shield } from 'lucide-react';

const TrustMetrics = () => {
  const metrics = [
    {
      icon: PiggyBank,
      value: '₹100+ Cr',
      label: 'Guided in Family Wealth',
      description: 'Total wealth managed for families across India'
    },
    {
      icon: TrendingUp,
      value: '1,500+',
      label: 'SIP Plans Created',
      description: 'Systematic investment plans helping build wealth'
    },
    {
      icon: Shield,
      value: '20+',
      label: 'Years of Trusted Advice',
      description: 'Decades of experience in wealth management'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
            Trusted by Families and Businesses Across India
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={index}
                className="surface-card text-center hover-lift"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-2">
                  {metric.value}
                </h3>
                <p className="font-semibold text-lg text-primary mb-3">
                  {metric.label}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;