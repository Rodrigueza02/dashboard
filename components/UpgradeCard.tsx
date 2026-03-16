// Circular arrow icon for Go Pro button
const CircleArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 12L12 8L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function UpgradeCard() {
  return (
    <div className="bg-gradient-to-br from-[#5B6CFF] via-[#6B7BFF] to-[#8B9AFF] rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden h-full min-h-[160px] sm:min-h-[180px] w-full">
      {/* Cloud decorations */}
      <div className="absolute top-4 right-12 sm:right-16">
        <svg width="35" height="21" viewBox="0 0 40 24" fill="none">
          <ellipse cx="20" cy="16" rx="16" ry="8" fill="white" fillOpacity="0.2"/>
          <ellipse cx="12" cy="12" rx="10" ry="6" fill="white" fillOpacity="0.15"/>
          <ellipse cx="28" cy="10" rx="8" ry="5" fill="white" fillOpacity="0.15"/>
        </svg>
      </div>
      <div className="absolute top-10 sm:top-12 right-2 sm:right-4">
        <svg width="26" height="16" viewBox="0 0 30 18" fill="none">
          <ellipse cx="15" cy="12" rx="12" ry="6" fill="white" fillOpacity="0.15"/>
          <ellipse cx="10" cy="9" rx="7" ry="4" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Need More Stats?</h3>
        <p className="text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">
          Upgrade to pro for added benefits.
        </p>
        <button className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#22C55E] rounded-full text-xs sm:text-sm font-medium text-white hover:bg-[#16A34A] transition-colors shadow-lg">
          <CircleArrowIcon />
          <span>Go Pro Now</span>
        </button>
      </div>

      {/* Decorative Illustration - Person with flag/chart */}
      <div className="absolute right-0 bottom-0 hidden sm:block">
        <svg
          width="110"
          height="130"
          viewBox="0 0 110 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Chart/graph line going up */}
          <path
            d="M15 95 L25 85 L35 90 L50 60 L65 45"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.4"
          />
          
          {/* Flag at top */}
          <path
            d="M65 45 L65 25 L85 32 L65 39"
            fill="white"
            fillOpacity="0.5"
          />
          <line x1="65" y1="45" x2="65" y2="20" stroke="white" strokeWidth="2" opacity="0.6"/>
          
          {/* Arrow pointing up */}
          <path
            d="M60 30 L65 20 L70 30"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
          />
          
          {/* Person - head (dark skin) */}
          <circle cx="75" cy="55" r="10" fill="#8B5A2B" />
          
          {/* Person - hair */}
          <path d="M67 50 Q75 42 83 50" fill="#2D1810" />
          
          {/* Person - body/shirt (white) */}
          <path d="M65 65 Q65 75 67 95 L83 95 Q85 75 85 65 Q85 60 75 60 Q65 60 65 65Z" fill="white" />
          
          {/* Person - arm pointing up */}
          <path d="M68 68 L55 50" stroke="#8B5A2B" strokeWidth="5" strokeLinecap="round" />
          
          {/* Person - pants (dark) */}
          <path d="M67 95 L65 120 L72 120 L75 100 L78 120 L85 120 L83 95 Z" fill="#1F2937" />
          
          {/* Person - shoes */}
          <ellipse cx="68" cy="122" rx="5" ry="3" fill="#374151" />
          <ellipse cx="82" cy="122" rx="5" ry="3" fill="#374151" />
        </svg>
      </div>
    </div>
  )
}
