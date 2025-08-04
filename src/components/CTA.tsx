import { Button } from '@/components/ui/button';
import advisorImage from '@/assets/advisor-working.jpg';

const CTA = () => {
  return (
    <section 
      className="py-16 lg:py-24 relative"
      style={{
        backgroundImage: "url('/images/bg-option2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/30"></div>
             <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
           <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
             <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-primary">
               Book a Free 30 Minute Wealth Strategy Consultation
             </h2>
             <p className="text-base sm:text-lg font-semibold text-accent">
               (Worth ₹4,999 — Yours Free)
             </p>
             <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
               In this expert-led session, we'll review your finances, identify gaps, and help you 
               create a smarter plan. No pressure, no cost. Just clear guidance from certified 
               financial planners with over 20 years of experience.
             </p>
             <div className="space-y-3 sm:space-y-4">
               <div className="flex items-center space-x-3">
                 <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                 <span className="text-sm sm:text-base text-muted-foreground">Complete financial health checkup</span>
               </div>
               <div className="flex items-center space-x-3">
                 <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                 <span className="text-sm sm:text-base text-muted-foreground">Personalized investment strategy</span>
               </div>
               <div className="flex items-center space-x-3">
                 <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                 <span className="text-sm sm:text-base text-muted-foreground">Goal-based financial planning</span>
               </div>
             </div>
             <Button className="btn-hero text-base sm:text-lg w-full sm:w-auto">
               Schedule Your Free Consultation
             </Button>
           </div>
          
                     <div className="block relative order-1 lg:order-2 mb-8 lg:mb-0">
             <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
               {/* Main Image */}
               <img 
                 src={advisorImage}
                 alt="Financial advisor consultation"
                 className="w-full h-auto rounded-xl shadow-xl relative z-10"
               />
              
                             {/* Experience Badge - Left Side (50% overlap) */}
               <div className="absolute -left-8 sm:-left-12 lg:-left-16 top-1/2 transform -translate-y-1/2 z-20">
                 {/* Dotted Pattern Background */}
                 <div className="absolute -left-3 sm:-left-4 lg:-left-6 -top-3 sm:-top-4 lg:-top-6 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 opacity-30">
                   <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1">
                     {[...Array(9)].map((_, i) => (
                       <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                     ))}
                   </div>
                 </div>
                 
                 {/* Transparent Outer Circle Ring */}
                 <div className="w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 rounded-full border-2 sm:border-3 lg:border-4 border-gray-300 border-opacity-40 absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 z-0"></div>
                 
                 {/* Experience Circle - Main Badge */}
                 <div 
                   className="w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 rounded-full flex flex-col items-center justify-center text-white shadow-xl relative z-10 p-2 sm:p-3 lg:p-4"
                   style={{backgroundColor: '#e3b317'}}
                 >
                   <div className="text-sm sm:text-lg lg:text-2xl font-bold leading-tight">₹100Cr+</div>
                   <div className="text-xs font-medium text-center leading-tight mt-1">Wealth<br/>Managed</div>
                 </div>
               </div>

               {/* Client Satisfaction - Right Side */}
               <div className="absolute -right-6 sm:-right-8 lg:-right-12 top-4 sm:top-6 lg:top-8 z-20">
                 <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 lg:p-5 min-w-max">
                   <div className="flex items-center space-x-1 mb-2">
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                         <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                       </svg>
                     ))}
                   </div>
                   <div className="text-xs sm:text-sm font-bold text-gray-800">1,500+ Families</div>
                   <div className="text-xs text-gray-600">Trust Our Guidance</div>
                 </div>
               </div>

               {/* Additional Dotted Pattern - Right Bottom */}
               <div className="absolute -right-4 sm:-right-6 lg:-right-8 -bottom-4 sm:-bottom-6 lg:-bottom-8 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 opacity-20">
                 <div className="grid grid-cols-3 sm:grid-cols-4 gap-1">
                   {[...Array(9)].map((_, i) => (
                     <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;