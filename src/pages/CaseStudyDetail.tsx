import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Target, Users, CheckCircle, Clock, DollarSign, ArrowLeft } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import ContactFormModal from '../components/ContactFormModal';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const caseStudies = [
    {
      id: "estate-protection",
      title: "Securing a Family Estate from Legal Disputes",
      client: "Entrepreneur, Age 52 | Industry: Manufacturing",
      cardDescription: "How we helped protect substantial wealth across fixed assets and properties from legal disputes and business liabilities through strategic estate planning.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop&crop=faces",
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
      title: "Partner Exit Without Drama",
      client: "Co-Founders of a Tech Startup | Age: 29 & 31",
      cardDescription: "Strategic Buy-Sell Agreement design that enabled smooth founder exit without legal tension or financial disruption to the startup operations.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=400&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=400&fit=crop&crop=faces",
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
      title: "Building ₹2 Cr Retirement Corpus",
      client: "Working Couple | Age 38 & 41",
      cardDescription: "Systematic Investment Plan strategy that transformed scattered investments into a disciplined approach targeting ₹2+ Cr retirement corpus.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=400&fit=crop&crop=faces",
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
      title: "Portfolio Management Services Success",
      client: "Business Consultant | HNI",
      cardDescription: "Professional Portfolio Management Services delivering higher returns with reduced volatility through expert market analysis and quarterly reviews.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop&crop=faces",
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

  const study = caseStudies.find(s => s.id === id);

  if (!study) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">Case Study Not Found</h1>
            <Button onClick={() => navigate('/case-studies')}>
              Back to Case Studies
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero 
        title={study.title}
        subtitle={study.client}
        showCTA={false}
        className="hero-no-circular"
      />

      {/* Back Button */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/case-studies')}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Button>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Images */}
            <div className="space-y-6">
              <div className="relative h-120 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={study.image2} 
                  alt={`${study.title} - Additional`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-3xl text-primary mb-4">
                  Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {study.cardDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="bg-surface rounded-lg px-6 py-4 flex items-center">
                  <Clock className="w-5 h-5 text-accent mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Timeframe</p>
                    <p className="font-semibold text-primary">{study.timeframe}</p>
                  </div>
                </div>
                <div className="bg-surface rounded-lg px-6 py-4 flex items-center">
                  <DollarSign className="w-5 h-5 text-accent mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Service Type</p>
                    <p className="font-semibold text-primary">{study.investment}</p>
                  </div>
                </div>
              </div>

              {/* Challenge */}
              <div>
                <h3 className="font-semibold text-xl text-primary mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-accent" />
                  The Challenge
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="font-semibold text-xl text-primary mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-accent" />
                  Our Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h3 className="font-semibold text-xl text-primary mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-accent" />
                  Results Achieved
                </h3>
                <ul className="space-y-3">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-accent/10 rounded-lg p-8 border-l-4 border-accent">
                <blockquote className="text-xl text-primary font-medium italic mb-4">
                  "{study.testimonial}"
                </blockquote>
                <p className="font-semibold text-accent">
                  — {study.clientName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-16 lg:py-24 text-center relative"
        style={{
          backgroundImage: "url('/images/bg-option2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-6">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your financial goals with a personalized strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ContactFormModal buttonText="Schedule Your Free Consultation">
              <Button className="btn-hero text-lg">
                Schedule Your Free Consultation
              </Button>
            </ContactFormModal>
          </div>
          <p className="text-base text-muted-foreground mt-6">
             Call: <span className="font-semibold text-primary">+91 76000 21664</span> | <span className="font-semibold text-primary">+91 94081 02596</span>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyDetail;