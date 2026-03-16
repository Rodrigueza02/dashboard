"use client"

// Check icon
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="#5B6CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Arrow icon
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function ConversionChart() {
  const percentage = 58.19

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-base font-semibold text-gray-900 mb-6">Conversion</h3>

      {/* Gauge Chart */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <svg width="200" height="120" viewBox="0 0 200 120">
            {/* Background Arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth={14}
              strokeLinecap="round"
            />
            {/* Progress Arc - approximately 58% of semicircle */}
            <path
              d="M 20 100 A 80 80 0 0 1 145 25"
              fill="none"
              stroke="url(#conversionGradient)"
              strokeWidth={14}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="conversionGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#5B6CFF" />
              </linearGradient>
            </defs>
          </svg>
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-6">
            <span className="text-3xl font-bold text-gray-900">{percentage}%</span>
            <span className="text-xs font-medium text-[#22C55E]">{"↑"} 3.5%</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <CheckIcon />
          <span className="text-xs text-gray-500">Income</span>
          <span className="text-sm font-semibold text-gray-900">$542,317</span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowRightIcon />
          <span className="text-xs text-gray-500">Expences</span>
          <span className="text-sm font-semibold text-gray-900">$497,456</span>
        </div>
      </div>
    </div>
  )
}
