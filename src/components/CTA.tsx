import { Button } from '@/components/ui/button';
import advisorImage from '@/assets/advisor-working.jpg';

const CTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          
          <div className="hidden lg:block">
            <img 
              src={advisorImage}
              alt="Financial advisor consultation"
              className="w-full h-auto rounded-xl shadow-large"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;