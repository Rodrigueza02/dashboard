"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

// Calendar icon
const CalendarSmallIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// Visitors icon - grid of dots (3x3)
const VisitorsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="4" r="2" fill="#5B6CFF"/>
    <circle cx="10" cy="4" r="2" fill="#5B6CFF"/>
    <circle cx="16" cy="4" r="2" fill="#5B6CFF"/>
    <circle cx="4" cy="10" r="2" fill="#5B6CFF"/>
    <circle cx="10" cy="10" r="2" fill="#5B6CFF"/>
    <circle cx="16" cy="10" r="2" fill="#5B6CFF"/>
    <circle cx="4" cy="16" r="2" fill="#5B6CFF"/>
    <circle cx="10" cy="16" r="2" fill="#5B6CFF"/>
    <circle cx="16" cy="16" r="2" fill="#5B6CFF"/>
  </svg>
)

// Data matching the chart curve in the image
const data = [
  { day: "21", sessions: 1 },
  { day: "22", sessions: 6 },
  { day: "23", sessions: 4 },
  { day: "24", sessions: 7 },
  { day: "25", sessions: 15 },
]

export default function SessionChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900">
          Online Store Sessions
        </h3>
        <button className="flex items-center gap-1 px-4 py-1.5 border border-gray-200 rounded-full text-xs font-medium text-gray-500 hover:bg-gray-50 transition-colors">
          View Report
        </button>
      </div>

      {/* Stats Row */}
      <div className="flex items-center gap-8 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#EEF0FF] rounded-xl flex items-center justify-center">
            <VisitorsIcon />
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Visitors</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">68</span>
              <span className="text-xs font-medium text-[#22C55E] flex items-center gap-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 2L8 6H2L5 2Z" fill="#22C55E"/>
                </svg>
                15.6%
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-300">26</span>
          <span className="text-xs font-medium text-red-500 flex items-center gap-0.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 8L8 4H2L5 8Z" fill="#EF4444"/>
            </svg>
            1.6%
          </span>
        </div>
      </div>

      {/* Chart Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-gray-900">Sessions Over Time</h4>
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-full text-xs font-medium text-gray-400 hover:bg-gray-50 transition-colors">
            <CalendarSmallIcon />
            <span>February</span>
            <ChevronDown size={14} />
          </button>
        </div>

        {/* Chart - Area chart with smooth curve */}
        <div className="h-[120px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="sessionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5B6CFF" stopOpacity={0.2}/>
                  <stop offset="100%" stopColor="#5B6CFF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                domain={[0, 15]}
                ticks={[0, 5, 10, 15]}
              />
              <Area
                type="monotone"
                dataKey="sessions"
                stroke="#5B6CFF"
                strokeWidth={2}
                fill="url(#sessionGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Day Navigation */}
        <div className="flex items-center justify-center gap-1 mt-4">
          <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 hover:bg-gray-50 transition-colors">
            <ChevronLeft size={14} />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#5B6CFF] text-white flex items-center justify-center text-xs font-medium">
            21
          </button>
          <span className="text-sm text-gray-400 px-2">22</span>
          <span className="text-sm text-gray-400 px-2">23</span>
          <span className="text-sm text-gray-400 px-2">24</span>
          <span className="text-sm text-gray-400 px-2">25</span>
          <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 hover:bg-gray-50 transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
