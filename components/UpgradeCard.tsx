// Info icon for Go Pro button
const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export default function UpgradeCard() {
  return (
    <div className="bg-gradient-to-br from-[#5B6CFF] to-[#7B8AFF] rounded-2xl p-6 relative overflow-hidden h-full min-h-[180px]">
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-white mb-2">Need More Stats?</h3>
        <p className="text-sm text-white/80 mb-4">
          Upgrade to pro for added benefits.
        </p>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-full text-sm font-medium text-[#22C55E] hover:bg-gray-50 transition-colors">
          <InfoIcon />
          <span>Go Pro Now</span>
        </button>
      </div>

      {/* Decorative Illustration - Person with chart */}
      <div className="absolute right-2 bottom-0">
        <svg
          width="120"
          height="140"
          viewBox="0 0 120 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Chart bars in background */}
          <rect x="5" y="90" width="12" height="35" rx="3" fill="white" fillOpacity="0.2" />
          <rect x="22" y="70" width="12" height="55" rx="3" fill="white" fillOpacity="0.25" />
          <rect x="39" y="50" width="12" height="75" rx="3" fill="white" fillOpacity="0.3" />
          
          {/* Dashed trend line */}
          <path
            d="M10 85 L45 45"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 4"
            opacity="0.5"
          />
          
          {/* Person - head */}
          <circle cx="85" cy="35" r="12" fill="#FCD34D" />
          
          {/* Person - body */}
          <path d="M75 50 C75 50 70 85 72 100 L78 100 L82 70 L88 70 L92 100 L98 100 C100 85 95 50 95 50 C95 50 90 47 85 47 C80 47 75 50 75 50Z" fill="#1F2937" />
          
          {/* Person - arm pointing */}
          <path d="M72 55 L55 45" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />
          
          {/* Person - legs */}
          <rect x="74" y="100" width="8" height="25" fill="#1F2937" />
          <rect x="88" y="100" width="8" height="25" fill="#1F2937" />
          
          {/* Person - shoes */}
          <ellipse cx="78" cy="127" rx="6" ry="3" fill="#374151" />
          <ellipse cx="92" cy="127" rx="6" ry="3" fill="#374151" />
        </svg>
      </div>

      {/* Background decorative circles */}
      <div className="absolute top-0 right-20 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2"></div>
      <div className="absolute bottom-10 left-0 w-16 h-16 bg-white/5 rounded-full -translate-x-1/2"></div>
    </div>
  )
}
