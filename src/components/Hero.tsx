import { Button } from '@/components/ui/button';

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
  return (
    <section className={`relative py-20 lg:py-32 hero-gradient ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0 opacity-20">
          <img 
            src={backgroundImage} 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 text-balance">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          {showCTA && (
            <Button className="btn-hero text-lg px-8 py-4">
              Schedule Your Free Consultation
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;