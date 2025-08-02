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
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-primary mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our wealth management services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-base text-primary pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed text-sm pt-3">
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