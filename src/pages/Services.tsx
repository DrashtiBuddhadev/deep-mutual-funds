import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import './services.css';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
        </svg>
      ),
      title: "Corporate Risk Management",
      description: "Defend your business from legal, financial and operational threats with smart risk cover and continuity plans."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
        </svg>
      ),
      title: "Mutual Fund and Investment Planning (SIP and SWP)",
      description: "SIP for building, SWP for retiring. Get risk adjusted mutual fund plans designed for real goals."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z"/>
        </svg>
      ),
      title: "Estate Creation and Legacy Planning",
      description: "Set up family trusts, write legally sound wills and ensure your wealth passes smoothly to future generations."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M10.5,7H13.5C14.06,7 14.57,7.28 14.85,7.73L20.5,16.5C20.95,17.26 20.71,18.24 19.95,18.69C19.19,19.14 18.21,18.9 17.76,18.14L16.12,15.5H7.88L6.24,18.14C5.79,18.9 4.81,19.14 4.05,18.69C3.29,18.24 3.05,17.26 3.5,16.5L9.15,7.73C9.43,7.28 9.94,7 10.5,7M12,8.5L9.5,13H14.5L12,8.5Z"/>
        </svg>
      ),
      title: "Keyman and Partnership Insurance",
      description: "Protect your company's most critical people and secure buyouts or exits with clear insurance strategies."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
        </svg>
      ),
      title: "Income Continuation and Retirement Planning",
      description: "Ensure uninterrupted income through health events, accidents or post retirement with tailored protection."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z"/>
        </svg>
      ),
      title: "Business Continuity and Buy Sell Agreements",
      description: "Be ready for any what if. Our team drafts solid continuity plans and ownership transfer frameworks."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,17H7V10H9V17M13,17H11V7H13V17M17,17H15V13H17V17M19.5,19.1H4.5V5H19.5V19.1M19.5,3H4.5C3.4,3 2.5,3.9 2.5,5V19.1C2.5,20.2 3.4,21.1 4.5,21.1H19.5C20.6,21.1 21.5,20.2 21.5,19.1V5C21.5,3.9 20.6,3 19.5,3Z"/>
        </svg>
      ),
      title: "Portfolio Management Services (PMS)",
      description: "Customised portfolio strategies for HNIs. Actively managed, transparently reported, performance focused."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
        </svg>
      ),
      title: "Asset Protection and Non Attachable Family Trusts",
      description: "Create wealth shields that cannot be claimed by lawsuits, creditors or external disruptions."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      ),
      title: "Tax and Compliance Advisory",
      description: "Minimise taxes and stay compliant. We plan with SEBI and RBI regulations in mind, not just compliance."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Let's Talk — Get Personalised Financial Advice",
      content: "We offer complete financial solutions from investments to succession planning, all tailored for individuals, professionals and business owners.",
      buttonText: "Contact Us",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4A2,2 0 0,0 20,2M6,9V7H18V9H6M14,11V13H6V11H14M16,15V17H6V15H16Z"/>
        </svg>
      )
    },
    {
      number: "02",
      title: "Book Your Free 30-Minute Consultation",
      content: "You'll receive tailored insights into your wealth strategy, tax exposure, risk planning, and investment options.",
      buttonText: "Schedule Call",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19M7,10V12H12V10H7Z"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Get Your Customized Financial Plan",
      content: "Receive a comprehensive strategy document with actionable steps, timelines, and specific recommendations for your financial goals.",
      buttonText: "Get Started",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
        </svg>
      )
    }
  ];

  return (
    <Layout>
      <Hero 
        title="Our Services"
        subtitle="We offer complete financial solutions from investments to succession planning, all tailored for individuals, professionals and business owners."
        showCTA={false}
        className="hero-no-circular"
      />

      <div className="min-h-screen" style={{
        backgroundImage: `linear-gradient(
          135deg,
          rgba(244, 244, 244, 0.07) 0%,
          rgba(244, 244, 244, 0.07) 12.5%,
          rgba(211, 211, 211, 0.07) 12.5%,
          rgba(211, 211, 211, 0.07) 25%,
          rgba(178, 178, 178, 0.07) 25%,
          rgba(178, 178, 178, 0.07) 37.5%,
          rgba(145, 145, 145, 0.07) 37.5%,
          rgba(145, 145, 145, 0.07) 50%,
          rgba(113, 113, 113, 0.07) 50%,
          rgba(113, 113, 113, 0.07) 62.5%,
          rgba(80, 80, 80, 0.07) 62.5%,
          rgba(80, 80, 80, 0.07) 75%,
          rgba(47, 47, 47, 0.07) 75%,
          rgba(47, 47, 47, 0.07) 87.5%,
          rgba(14, 14, 14, 0.07) 87.5%,
          rgba(14, 14, 14, 0.07) 100%
        ),
        linear-gradient(
          45deg,
          rgba(236, 236, 236, 0.07) 0%,
          rgba(236, 236, 236, 0.07) 12.5%,
          rgba(210, 210, 210, 0.07) 12.5%,
          rgba(210, 210, 210, 0.07) 25%,
          rgba(183, 183, 183, 0.07) 25%,
          rgba(183, 183, 183, 0.07) 37.5%,
          rgba(157, 157, 157, 0.07) 37.5%,
          rgba(157, 157, 157, 0.07) 50%,
          rgba(130, 130, 130, 0.07) 50%,
          rgba(130, 130, 130, 0.07) 62.5%,
          rgba(104, 104, 104, 0.07) 62.5%,
          rgba(104, 104, 104, 0.07) 75%,
          rgba(77, 77, 77, 0.07) 75%,
          rgba(77, 77, 77, 0.07) 87.5%,
          rgba(51, 51, 51, 0.07) 87.5%,
          rgba(51, 51, 51, 0.07) 100%
        ),
        linear-gradient(90deg, #ffffff, #ffffff)`
      }}>
        {/* Services Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card group">
                {/* Gradient Overlay */}
                <div className="gradient-overlay">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="32px" className="fill-white">
                    <path strokeWidth="0" d="M0 0 C50 100 50 100 100 0  L100 100 0 100"></path>
                  </svg>
                </div>

                {/* Service Icon */}
                <div className="service-icon">
                  <span>{service.icon}</span>
                </div>

                {/* Service Content */}
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  {/* Read More Button */}
                  <div className="read-more-btn">
                    <button className="text-white hover:text-gray-200 transition-colors duration-300 flex items-center">
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Steps Section */}
          <div className="mt-20">
            <div className="max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="step-item">
                  <div className="step-content">
                    <div className="step-text">
                      <h5 className="step-title">{step.title}</h5>
                      <div className="step-description">{step.content}</div>
                      <div className="step-button">
                        <Link to="/contact">
                          <button className="bg-transparent border-2 border-gray-400 text-gray-700 px-6 py-3 rounded-full hover:bg-[#115099] hover:text-white hover:border-[#115099] transition-all duration-300">
                            {step.buttonText}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="step-meta">
                    <div className="step-meta-inner">
                      <div className="step-number">{step.number}</div>
                      <div className="step-icon">
                        {step.icon}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="step-arrow">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;