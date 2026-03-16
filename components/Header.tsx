"use client"

import { Search, ChevronLeft, ChevronDown } from "lucide-react"
import Image from "next/image"

// Bell icon with notification dot
const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 2V6" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 2V6" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 15V3" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const HomeIconFilled = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 9L12 2L21 9V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9Z" fill="#5B6CFF"/>
    <path d="M9 22V12H15V22" stroke="white" strokeWidth="2"/>
  </svg>
)

export default function Header() {
  return (
    <header className="min-h-[64px] sm:min-h-[72px] bg-white flex flex-col md:flex-row md:items-center md:justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-0 border-b border-[#E5E7EB] gap-3 sm:gap-0">

      {/* LEFT */}
      <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto">

        <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 flex-shrink-0">
          <ChevronLeft size={16} />
        </button>

        {/* Search */}
        <div className="relative flex-1 md:flex-initial">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-[220px] lg:w-[420px] h-9 sm:h-[42px] bg-[#F6F7FB] rounded-full pl-9 sm:pl-11 pr-4 text-sm text-gray-600 placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 sm:gap-4">

        <button className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F6F7FB] flex items-center justify-center text-gray-500 hover:bg-gray-200 flex-shrink-0">
          <BellIcon />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#22C55E] rounded-full"></span>
        </button>

        <div className="text-right hidden sm:block">
          <p className="text-xs text-gray-400">Your Balance</p>
          <p className="text-xs sm:text-sm font-semibold text-[#5B6CFF]">$5.456</p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
            alt="User avatar"
            width={36}
            height={36}
            className="w-8 h-8 sm:w-[42px] sm:h-[42px] rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-xs sm:text-sm font-medium text-gray-900">
              <span className="text-[#5B6CFF]">Hi,</span> Lay
            </p>
          </div>
        </div>

      </div>
    </header>
  )
}

export function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-3 sm:gap-4">

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#EEF0FF] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
          <HomeIconFilled />
        </div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
          Dashboard
        </h1>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">

        <button className="flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-white border border-gray-200 rounded-full text-xs sm:text-sm font-medium text-gray-600 hover:bg-gray-50 whitespace-nowrap">
          <CalendarIcon />
          <span>This Month</span>
          <ChevronDown size={16} />
        </button>

        <button className="flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-[#22C55E] rounded-full text-xs sm:text-sm font-medium text-white hover:bg-[#16A34A] shadow-sm whitespace-nowrap">
          <DownloadIcon />
          <span>Download</span>
        </button>

      </div>
    </div>
  )
}