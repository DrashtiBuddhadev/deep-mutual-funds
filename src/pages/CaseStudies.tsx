import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { TrendingUp, Target, CheckCircle, Users } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Family Business Wealth Restructuring",
      client: "Manufacturing Family in Surat",
      challenge: "₹50 Cr family business with unstructured investments and high tax liability. Multiple family members with conflicting financial goals and no succession plan.",
      solution: "Created a comprehensive family trust structure, implemented tax-efficient investment strategies, and developed a clear succession plan with buy-sell agreements.",
      results: [
        "Reduced tax liability by 35% through restructuring",
        "Established clear succession framework for next generation",
        "Diversified portfolio generating 12% annual returns",
        "Protected family assets through non-attachable trust structure"
      ],
      timeframe: "18 months",
      investment: "₹50 Cr restructured"
    },
    {
      title: "Young Professional Wealth Building",
      client: "IT Professional Couple in Bangalore",
      challenge: "High earning couple (₹25 LPA combined) with no systematic investment plan. Wanted to buy a home, plan for children's education, and build retirement corpus.",
      solution: "Designed goal-based SIP portfolio with different asset allocations for short, medium, and long-term goals. Optimized insurance coverage and tax planning.",
      results: [
        "Achieved home down payment goal in 3 years",
        "Built ₹15 lakh education corpus for children",
        "On track for ₹5 Cr retirement corpus by age 60",
        "Saved ₹1.5 lakh annually in taxes through planning"
      ],
      timeframe: "5 years",
      investment: "₹40,000 monthly SIPs"
    },
    {
      title: "Retirement Portfolio Optimization",
      client: "Senior Executive Nearing Retirement",
      challenge: "55-year-old executive with ₹1.5 Cr accumulated wealth but poor asset allocation. Needed income generation for retirement while preserving capital.",
      solution: "Restructured portfolio with balanced debt-equity allocation, created systematic withdrawal plan, and established healthcare contingency fund.",
      results: [
        "Generated ₹12 lakh annual retirement income",
        "Preserved capital with inflation-beating returns",
        "Created ₹20 lakh healthcare emergency fund",
        "Optimized tax efficiency in retirement phase"
      ],
      timeframe: "12 months",
      investment: "₹1.5 Cr restructured"
    },
    {
      title: "Multi-Generational Wealth Transfer",
      client: "Traditional Business Family in Bharuch",
      challenge: "Third-generation family business with complex ownership structure. Needed to plan for wealth transfer while minimizing tax impact and family disputes.",
      solution: "Implemented comprehensive estate planning with family trust, drafted clear wills, and created buy-sell agreements. Established family constitution for governance.",
      results: [
        "Seamless wealth transfer to fourth generation",
        "Minimized estate tax liability by 60%",
        "Prevented family disputes through clear agreements",
        "Maintained business continuity across generations"
      ],
      timeframe: "24 months", 
      investment: "₹80 Cr family wealth"
    }
  ];

  return (
    <Layout>
      <Hero 
        title="Our Success Stories"
        subtitle="Real Results for Real People"
        showCTA={false}
      />

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

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <h3 className="font-heading font-bold text-2xl lg:text-3xl text-primary mb-2">
                      {study.title}
                    </h3>
                    <p className="font-semibold text-lg text-accent mb-4">
                      {study.client}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-accent" />
                      Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-accent" />
                      Our Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                      Results Achieved
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="bg-surface rounded-lg px-4 py-2">
                      <p className="text-sm text-muted-foreground">Timeframe</p>
                      <p className="font-semibold text-primary">{study.timeframe}</p>
                    </div>
                    <div className="bg-surface rounded-lg px-4 py-2">
                      <p className="text-sm text-muted-foreground">Investment</p>
                      <p className="font-semibold text-primary">{study.investment}</p>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={`surface-card ${index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="h-80 bg-surface rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-24 h-24 text-accent/30 mx-auto mb-4" />
                      <p className="text-muted-foreground font-medium">{study.title}</p>
                      <p className="text-sm text-muted-foreground mt-2">{study.client}</p>
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
      <section className="py-16 lg:py-24 bg-background text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have achieved their financial goals with our proven strategies.
          </p>
          <Button className="btn-hero text-lg">
            Book Your Free Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;