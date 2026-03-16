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
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-base font-semibold text-gray-900 mb-4">Conversion</h3>

      {/* Gauge Chart */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <svg width="200" height="110" viewBox="0 0 200 110">
            {/* Background Arc - light gray */}
            <path
              d="M 15 100 A 85 85 0 0 1 185 100"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth={16}
              strokeLinecap="round"
            />
            {/* Progress Arc - gradient from purple to blue (~58% of semicircle) */}
            <path
              d="M 15 100 A 85 85 0 0 1 160 30"
              fill="none"
              stroke="url(#conversionGradient)"
              strokeWidth={16}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="conversionGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A5B4FC" />
                <stop offset="50%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#5B6CFF" />
              </linearGradient>
            </defs>
          </svg>
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
            <span className="text-3xl font-bold text-[#5B6CFF]">{percentage}%</span>
            <span className="text-xs font-medium text-[#22C55E] flex items-center gap-0.5">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 2L8 6H2L5 2Z" fill="#22C55E"/>
              </svg>
              3.5%
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center gap-2">
          <CheckIcon />
          <span className="text-xs text-gray-400">Income</span>
          <span className="text-sm font-semibold text-gray-900">$542,317</span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowUpRightIcon />
          <span className="text-xs text-gray-400">Expences</span>
          <span className="text-sm font-semibold text-gray-900">$497,456</span>
        </div>
      </div>
    </div>
  )
}
