import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import WealthJourneyBenefits from '@/components/WealthJourneyBenefits';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import financialChartsImage from '@/assets/financial-charts.jpg';

const Index = () => {
  return (
    <Layout>
      <Hero 
        title="Empowering Wealth for Life and Legacy"
        subtitle="Founded in 2003, Deep Investment helps families and businesses in Bharuch and across India protect, manage and grow their wealth. Our Certified Financial Planner and MDRT member bring more than 20 years of combined experience, and our firm's values mirror the best practices in the industry. Leading wealth managers emphasize service, trust, empathy, advice and long-term relationships. We are committed to these same pillars through every interaction."
        backgroundImage={financialChartsImage}
      />
      
      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-6">
            We help protect and grow wealth through personalised planning, smart investing, and legacy protection.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every family's financial journey is unique. That's why we create customized strategies 
            that align with your goals, risk tolerance, and timeline. From systematic investment 
            plans to comprehensive insurance coverage, we ensure your wealth works as hard as you do.
          </p>
        </div>
      </section>
      <AboutSection />
      <WealthJourneyBenefits />
      <CTA />
      <FAQ />
    </Layout>
  );
};

export default Index;
