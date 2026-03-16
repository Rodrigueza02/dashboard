"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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

// Visitors icon - grid of dots
const VisitorsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="4" height="4" rx="1" fill="#5B6CFF"/>
    <rect x="10" y="3" width="4" height="4" rx="1" fill="#5B6CFF"/>
    <rect x="17" y="3" width="4" height="4" rx="1" fill="#5B6CFF"/>
    <rect x="3" y="10" width="4" height="4" rx="1" fill="#5B6CFF"/>
    <rect x="10" y="10" width="4" height="4" rx="1" fill="#5B6CFF"/>
    <rect x="17" y="10" width="4" height="4" rx="1" fill="#5B6CFF"/>
    <rect x="3" y="17" width="4" height="4" rx="1" fill="#5B6CFF"/>
    <rect x="10" y="17" width="4" height="4" rx="1" fill="#5B6CFF"/>
    <rect x="17" y="17" width="4" height="4" rx="1" fill="#5B6CFF"/>
  </svg>
)

const data = [
  { day: "21", sessions: 3 },
  { day: "22", sessions: 8 },
  { day: "23", sessions: 5 },
  { day: "24", sessions: 12 },
  { day: "25", sessions: 8 },
]

export default function SessionChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900">
          Online Store Sessions
        </h3>
        <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-50 transition-colors">
          View Report
        </button>
      </div>

      {/* Stats Row */}
      <div className="flex items-center gap-8 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#EEF0FF] rounded-xl flex items-center justify-center">
            <VisitorsIcon />
          </div>
          <div>
            <p className="text-xs text-gray-500">Visitors</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">68</span>
              <span className="text-xs font-medium text-[#22C55E]">{"↑"} 15.6%</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-400">26</span>
            <span className="text-xs font-medium text-red-500">{"↓"} 1.6%</span>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-gray-900">Sessions Over Time</h4>
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-50 transition-colors">
            <CalendarSmallIcon />
            <span>February</span>
            <ChevronDown size={14} />
          </button>
        </div>

        {/* Chart */}
        <div className="h-[140px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />
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
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="sessions"
                stroke="#5B6CFF"
                strokeWidth={2}
                dot={{ fill: "#5B6CFF", strokeWidth: 0, r: 4 }}
                activeDot={{ fill: "#5B6CFF", strokeWidth: 0, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Day Navigation */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#5B6CFF] text-white flex items-center justify-center text-xs font-medium">
            21
          </button>
          <span className="text-sm text-gray-400 px-1">22</span>
          <span className="text-sm text-gray-400 px-1">23</span>
          <span className="text-sm text-gray-400 px-1">24</span>
          <span className="text-sm text-gray-400 px-1">25</span>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
