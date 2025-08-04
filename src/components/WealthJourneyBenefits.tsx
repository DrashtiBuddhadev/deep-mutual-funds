import { Check } from 'lucide-react';

const WealthJourneyBenefits = () => {
  const benefits = [
    {
      title: "Build Wealth",
      description: "SIPs, Portfolio Management, Income Continuation Planning",
      isHighlighted: false
    },
    {
      title: "Protect What You've Built",
      description: "Corporate Risk Strategies, Insurance, Tax and Legal Compliance",
      isHighlighted: true
    },
    {
      title: "Leave a Legacy",
      description: "Trust Planning, Estate Structuring, Buy Sell Agreements",
      isHighlighted: false,
      isFullWidth: true
    }
  ];

  return (
    <section 
      className="py-16 lg:py-24 relative"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="relative z-10 container mx-auto px-6 sm:px-6 lg:px-8">
                 {/* Header Section */}
         <div className="text-center mb-8 sm:mb-12">
           <div className="inline-flex items-center px-3 py-1 text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4" style={{backgroundColor: '#e3b317', color: '#8b6914'}}>
             Your Journey
           </div>
           <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-primary mb-3 sm:mb-4">
             Your Wealth Journey, Simplified
           </h2>
           <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto">
             Where are you in your financial journey? We guide you at every step — from building to protecting to passing on your wealth.
           </p>
         </div>

         {/* Cards Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* First Row - 2 Cards */}
          {benefits.slice(0, 2).map((benefit, index) => (
                         <div
               key={index}
               className={`relative p-4 sm:p-6 rounded-lg shadow-sm border overflow-hidden transition-all duration-500 ease-in-out group ${
                 benefit.isHighlighted 
                   ? 'bg-green-50 border-green-200' 
                   : 'bg-white border-gray-200'
               } hover:shadow-lg hover:scale-[1.02]`}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                const fillElement = e.currentTarget.querySelector('.gold-fill') as HTMLElement;
                if (fillElement) {
                  fillElement.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
                }
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                const fillElement = e.currentTarget.querySelector('.gold-fill') as HTMLElement;
                if (fillElement) {
                  fillElement.style.clipPath = 'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)';
                }
              }}
            >
              {/* Gold diagonal fill on hover */}
              <div 
                className="gold-fill absolute inset-0 rounded-lg transition-all duration-700 ease-in-out"
                style={{
                  background: '#115099',
                  clipPath: 'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)',
                  transition: 'clip-path 0.7s ease-in-out'
                }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-start mb-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 transition-all duration-300 group-hover:!bg-white group-hover:!border-2 group-hover:!border-blue-600" 
                    style={{
                      backgroundColor: '#115099',
                      border: '2px solid transparent'
                    }}
                  >
                    <Check 
                      className="w-4 h-4 transition-colors duration-300 group-hover:!text-blue-600" 
                      style={{color: 'white'}}
                    />
                  </div>
                                     <div className="flex-1">
                     <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2 group-hover:text-white transition-colors duration-300">
                       {benefit.title}
                     </h3>
                     <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-white transition-colors duration-300">
                       {benefit.description}
                     </p>
                   </div>
                </div>
              </div>
              
              {/* Curved accent at bottom right corner like in the image */}
              <div 
                className="absolute bottom-0 right-0 w-20 h-20 transition-all duration-300"
                style={{
                  backgroundColor: '#115099',
                  borderRadius: '100% 0 0.5rem 0',
                  transform: 'translate(50%, 50%)'
                }}
              ></div>
            </div>
          ))}
        </div>

                 {/* Second Row - 1 Full Width Card */}
         <div className="mt-4 sm:mt-6 lg:mt-8">
           <div 
             className="relative p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 bg-white overflow-hidden transition-all duration-500 ease-in-out group hover:shadow-lg hover:scale-[1.02]"
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
              const fillElement = e.currentTarget.querySelector('.gold-fill') as HTMLElement;
              if (fillElement) {
                fillElement.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
              }
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
              const fillElement = e.currentTarget.querySelector('.gold-fill') as HTMLElement;
              if (fillElement) {
                fillElement.style.clipPath = 'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)';
              }
            }}
          >
            {/* Gold diagonal fill on hover */}
            <div 
              className="gold-fill absolute inset-0 rounded-lg transition-all duration-700 ease-in-out"
              style={{
                background: '#115099',
                clipPath: 'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)',
                transition: 'clip-path 0.7s ease-in-out'
              }}
            ></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="flex items-start mb-4">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 transition-all duration-300 group-hover:!bg-white group-hover:!border-2 group-hover:!border-blue-600" 
                  style={{
                    backgroundColor: '#115099',
                    border: '2px solid transparent'
                  }}
                >
                  <Check 
                    className="w-4 h-4 transition-colors duration-300 group-hover:!text-blue-600" 
                    style={{color: 'white'}}
                  />
                </div>
                                 <div className="flex-1">
                   <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2 group-hover:text-white transition-colors duration-300">
                     {benefits[2].title}
                   </h3>
                   <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-white transition-colors duration-300">
                     {benefits[2].description}
                   </p>
                 </div>
              </div>
            </div>
            
            {/* Curved accent at bottom right corner like in the image */}
            <div 
              className="absolute bottom-0 right-0 w-20 h-20 transition-all duration-300"
              style={{
                backgroundColor: '#115099',
                borderRadius: '100% 0 0.5rem 0',
                transform: 'translate(50%, 50%)'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WealthJourneyBenefits; 