"use client"

// Check icon (green)
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Arrow up-right icon
const ArrowUpRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7H17V17" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function ConversionChart() {
  const percentage = 58.19

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 w-full">
      <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-4 md:mb-6">Conversion</h3>

      {/* Gauge Chart */}
      <div className="flex justify-center mb-6 md:mb-8">
        <div className="relative w-44 h-28 sm:w-56 sm:h-36 md:w-64 md:h-40">
          <svg width="100%" height="100%" viewBox="0 0 240 140" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="conversionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A5B4FC" />
                <stop offset="50%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#5B6CFF" />
              </linearGradient>
            </defs>
            
            {/* Background Arc - light gray */}
            <path
              d="M 20 120 A 100 100 0 0 1 220 120"
              fill="none"
              stroke="#EDEFF3"
              strokeWidth={20}
              strokeLinecap="round"
            />
            
            {/* Progress Arc - gradient (58.19% of semicircle ≈ 233.5 degrees) */}
            <path
              d="M 20 120 A 100 100 0 0 1 198 45"
              fill="none"
              stroke="url(#conversionGradient)"
              strokeWidth={20}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl sm:text-4xl font-bold text-gray-900">{percentage}%</span>
            <span className="text-xs font-medium text-[#10B981] flex items-center gap-1 mt-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1L10 8H2L6 1Z" fill="#10B981"/>
              </svg>
              3.5%
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 px-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span className="text-xs text-gray-500">Income</span>
          </div>
          <span className="text-xs sm:text-sm font-semibold text-gray-900 ml-6">$542,317</span>
        </div>
        
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <ArrowUpRightIcon />
            <span className="text-xs text-gray-500">Expenses</span>
          </div>
          <span className="text-xs sm:text-sm font-semibold text-gray-900 ml-6">$497,456</span>
        </div>
      </div>
    </div>
  )
}
