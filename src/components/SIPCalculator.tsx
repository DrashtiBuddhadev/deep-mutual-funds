import React, { useState, useEffect, useCallback } from 'react';
import { Calculator } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

const SIPCalculator = () => {
  const [sipAmount, setSipAmount] = useState<number>(45000);
  const [years, setYears] = useState<number>(10);
  const [annualRate, setAnnualRate] = useState<number>(12);
  const [results, setResults] = useState({
    totalInvestment: 0,
    maturityAmount: 0,
    totalReturns: 0
  });

  // SIP Calculation Formula
  const calculateSIP = useCallback(() => {
    const monthlyRate = annualRate / 12 / 100;
    const totalMonths = years * 12;
    
    // SIP Formula: M = P × ({[1 + i]^n - 1} / i) × (1 + i)
    // Where M = Maturity amount, P = Monthly investment, i = Monthly interest rate, n = Number of months
    const maturityAmount = sipAmount * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalInvestment = sipAmount * totalMonths;
    const totalReturns = maturityAmount - totalInvestment;

    setResults({
      totalInvestment,
      maturityAmount,
      totalReturns
    });
  }, [sipAmount, years, annualRate]);

  useEffect(() => {
    calculateSIP();
  }, [calculateSIP]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Generate chart data points
  const generateChartData = () => {
    const data = [];
    const monthlyRate = annualRate / 12 / 100;
    
    for (let year = 1; year <= years; year++) {
      const months = year * 12;
      const investment = sipAmount * months;
      const maturity = sipAmount * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
      
      data.push({
        year,
        investment,
        maturity,
        returns: maturity - investment
      });
    }
    return data;
  };

  const chartData = generateChartData();
  const maxAmount = Math.max(...chartData.map(d => d.maturity));
  const investmentPercentage = results.maturityAmount > 0 ? (results.totalInvestment / results.maturityAmount) * 100 : 0;
  const returnsPercentage = results.maturityAmount > 0 ? (results.totalReturns / results.maturityAmount) * 100 : 0;

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-6">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
            SIP Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate how your Systematic Investment Plan can grow your wealth over time
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Input Section */}
            <div className="p-4 sm:p-6 lg:p-12 bg-white">
              <div className="flex items-center mb-6 lg:mb-8">
                <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3" />
                <h3 className="font-bold text-lg sm:text-xl text-gray-800">Returns Estimator</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-6 lg:mb-8">Estimation is based on the past performance</p>
              
              {/* Monthly SIP Amount */}
              <div className="mb-6 lg:mb-8">
                <div className="border-2 border-primary rounded-lg p-3 sm:p-4 bg-primary/5">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    ENTER AMOUNT(per month)
                  </label>
                  <div className="relative">
                    <span className="absolute left-0 top-0 text-lg sm:text-2xl font-bold text-gray-800">₹</span>
                    <input
                      type="number"
                      value={sipAmount}
                      onChange={(e) => setSipAmount(Number(e.target.value) || 0)}
                      className="w-full bg-transparent text-xl sm:text-3xl font-bold text-gray-800 ml-4 sm:ml-6 outline-none"
                      min="500"
                      step="1000"
                      placeholder="45,000"
                    />
                  </div>
                </div>
              </div>

              {/* Duration Slider */}
              <div className="mb-6 lg:mb-8">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Select Duration</label>
                  <span className="text-lg sm:text-xl font-bold text-gray-800">{years} Yrs</span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-primary"
                    style={{
                      background: `linear-gradient(to right, #115099 0%, #115099 ${((years - 1) / 29) * 100}%, #e5e5e5 ${((years - 1) / 29) * 100}%, #e5e5e5 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1 Yr</span>
                    <span>30 Yrs</span>
                  </div>
                </div>
              </div>

              {/* Expected Rate Slider */}
              <div className="mb-6 lg:mb-8">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Expected Rate of Return</label>
                  <span className="text-lg sm:text-xl font-bold text-gray-800">{annualRate} %</span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="8"
                    max="30"
                    value={annualRate}
                    onChange={(e) => setAnnualRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-primary"
                    style={{
                      background: `linear-gradient(to right, #115099 0%, #115099 ${((annualRate - 8) / 22) * 100}%, #e5e5e5 ${((annualRate - 8) / 22) * 100}%, #e5e5e5 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>8%</span>
                    <span>30%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="p-4 sm:p-6 lg:p-12 bg-gray-50">
              {/* Investment Summary */}
              <div className="text-center mb-6 lg:mb-8">
                <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                  The total value of your investment after <span className="font-bold">{years} Years</span> will be
                </p>
                
                {/* Results Summary Box */}
                <div className="bg-white border-2 border-primary/20 rounded-xl p-4 mb-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Invested Amount:</span>
                    <span className="font-bold text-gray-800">{formatCurrency(results.totalInvestment)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Profit:</span>
                    <span className="font-bold text-green-600">{formatCurrency(results.totalReturns)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-semibold text-gray-800">Total Amount:</span>
                      <span className="text-2xl sm:text-3xl font-bold text-primary">{formatCurrency(results.maturityAmount)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Line Chart */}
              <div className="w-full h-48 sm:h-56 lg:h-64 mb-6 lg:mb-8 bg-white rounded-xl p-2 sm:p-3 lg:p-4 shadow-sm overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 350 180" preserveAspectRatio="xMidYMid meet">
                  {/* Grid lines - simplified for mobile */}
                  <defs>
                    <pattern id="grid" width="35" height="22" patternUnits="userSpaceOnUse">
                      <path d="M 35 0 L 0 0 0 22" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="350" height="180" fill="url(#grid)" />
                  
                  {/* Y-axis labels - fewer labels for mobile */}
                  {[0, 0.5, 1].map((ratio, index) => {
                    const y = 160 - (ratio * 140);
                    const amount = maxAmount * ratio;
                    return (
                      <g key={index}>
                        <line x1="30" y1={y} x2="35" y2={y} stroke="#666" strokeWidth="1"/>
                        <text x="28" y={y + 3} fontSize="8" fill="#666" textAnchor="end">
                          ₹{amount > 10000000 ? `${(amount/10000000).toFixed(0)}Cr` : 
                             amount > 100000 ? `${(amount/100000).toFixed(0)}L` : `${(amount/1000).toFixed(0)}K`}
                        </text>
                      </g>
                    );
                  })}
                  
                  {/* X-axis labels - fewer labels for mobile */}
                  {chartData.filter((_, index) => 
                    index === 0 || 
                    index === Math.floor(chartData.length / 2) || 
                    index === chartData.length - 1
                  ).map((point, index) => {
                    const x = years === 1 ? 160 : 40 + ((point.year - 1) / (years - 1)) * 280;
                    return (
                      <g key={index}>
                        <line x1={x} y1="160" x2={x} y2="165" stroke="#666" strokeWidth="1"/>
                        <text x={x} y="175" fontSize="8" fill="#666" textAnchor="middle">
                          {point.year}Y
                        </text>
                      </g>
                    );
                  })}
                  
                  {/* Amount Invested line (linear growth) */}
                  <path
                    d={`M 40,${160 - (chartData[0].investment / maxAmount) * 140} ${chartData.map((point, index) => {
                      const x = chartData.length === 1 ? 160 : 40 + (index / (chartData.length - 1)) * 280;
                      const y = 160 - (point.investment / maxAmount) * 140;
                      return `L ${x},${y}`;
                    }).join(' ')}`}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Worth of Investment line (exponential growth) */}
                  <path
                    d={`M 40,${160 - (chartData[0].maturity / maxAmount) * 140} ${chartData.map((point, index) => {
                      const x = chartData.length === 1 ? 160 : 40 + (index / (chartData.length - 1)) * 280;
                      const y = 160 - (point.maturity / maxAmount) * 140;
                      return `L ${x},${y}`;
                    }).join(' ')}`}
                    fill="none"
                    stroke="#115099"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Data points - only show key points on mobile */}
                  {chartData.filter((_, index) => 
                    index === chartData.length - 1
                  ).map((point, index) => {
                    const x = years === 1 ? 160 : 40 + ((point.year - 1) / (years - 1)) * 280;
                    const investmentY = 160 - (point.investment / maxAmount) * 140;
                    const maturityY = 160 - (point.maturity / maxAmount) * 140;
                    
                    return (
                      <g key={index}>
                        <circle cx={x} cy={investmentY} r="3" fill="#10b981" stroke="white" strokeWidth="1.5"/>
                        <circle cx={x} cy={maturityY} r="3" fill="#115099" stroke="white" strokeWidth="1.5"/>
                      </g>
                    );
                  })}
                  
                  {/* Chart labels */}
                  <text x="175" y="12" fontSize="10" fill="#333" fontWeight="bold" textAnchor="middle">
                    SIP Growth Over Time
                  </text>
                </svg>
              </div>

              {/* Legend */}
              <div className="space-y-3 sm:space-y-4 mb-6 lg:mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 sm:w-4 h-1 bg-green-500 rounded mr-2 sm:mr-3"></div>
                    <span className="text-xs sm:text-sm text-gray-700">Amount Invested</span>
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-gray-800">
                    {results.totalInvestment > 10000000 ? 
                      `₹${(results.totalInvestment/10000000).toFixed(2)}Cr` : 
                      `₹${(results.totalInvestment/100000).toFixed(2)}L`}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 sm:w-4 h-1 bg-primary rounded mr-2 sm:mr-3"></div>
                    <span className="text-xs sm:text-sm text-gray-700">Worth of Investment</span>
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-gray-800">
                    {results.maturityAmount > 10000000 ? 
                      `₹${(results.maturityAmount/10000000).toFixed(2)}Cr` : 
                      `₹${(results.maturityAmount/100000).toFixed(2)}L`}
                  </span>
                </div>
              </div>

              {/* Invest Now Button */}
              <ContactFormModal buttonText="Investment Consultation">
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-sm sm:text-lg transition-colors duration-300">
                  INVEST NOW
                </button>
              </ContactFormModal>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 max-w-3xl mx-auto">
            *This calculator provides an estimate based on the inputs provided. Actual returns may vary based on market conditions. 
            Mutual funds are subject to market risks. Please read all scheme-related documents carefully before investing.
          </p>
        </div>
      </div>

      {/* Add custom slider styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .slider-primary::-webkit-slider-thumb {
            appearance: none;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background: #115099;
            cursor: pointer;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }

          .slider-primary::-moz-range-thumb {
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background: #115099;
            cursor: pointer;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            -moz-appearance: none;
          }

          .slider-primary::-webkit-slider-track {
            height: 8px;
            border-radius: 4px;
          }

          .slider-primary::-moz-range-track {
            height: 8px;
            border-radius: 4px;
            background: transparent;
            border: none;
          }

          @media (max-width: 640px) {
            .slider-primary::-webkit-slider-thumb {
              height: 16px;
              width: 16px;
            }
            
            .slider-primary::-moz-range-thumb {
              height: 16px;
              width: 16px;
            }
          }
        `
      }} />
    </section>
  );
};

export default SIPCalculator;