import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are your planners certified?",
      answer: "Yes. We are SEBI registered, AMFI certified, and led by Certified Financial Planners with decades of experience. Our team maintains the highest professional standards in the industry."
    },
    {
      question: "What is a non-attachable family trust?",
      answer: "It is a legal structure that protects your assets from lawsuits, creditors, and unforeseen claims. Commonly used by high net-worth individuals and family businesses to safeguard wealth for future generations."
    },
    {
      question: "Do I still need SIPs if I invest in real estate?",
      answer: "Yes. SIPs offer diversification, liquidity, and long-term returns with less effort. They work hand-in-hand with real estate to balance your portfolio and provide financial flexibility."
    },
    {
      question: "Do you only serve clients in Gujarat?",
      answer: "No. We serve clients across India via phone and video consultations. We also offer in-person sessions in Surat and Bharuch for local clients who prefer face-to-face meetings."
    },
    {
      question: "Is the first consultation really free?",
      answer: "Absolutely. It's a 30-minute, zero-obligation strategy call valued at ₹4,999. Offered to help you get clarity and confidence in your financial path with no strings attached."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 surface-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our wealth management services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 surface-card border border-border/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-surface/50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-lg text-primary pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;