"use client"

import { Search, ChevronLeft, ChevronDown } from "lucide-react"
import Image from "next/image"

// Bell icon with notification dot
const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Calendar icon
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// Download icon
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Home icon for Dashboard header
const HomeIconFilled = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" fill="#5B6CFF" stroke="#5B6CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 22V12H15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Header() {
  return (
    <header className="h-[72px] bg-white flex items-center justify-between px-6 border-b border-[#E5E7EB]">
      {/* Left Section - Collapse button */}
      <div className="flex items-center gap-4">
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
          <ChevronLeft size={16} />
        </button>

        {/* Search Bar */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-[420px] h-[42px] bg-[#F6F7FB] rounded-full pl-11 pr-4 text-sm text-gray-600 placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Notification */}
        <button className="relative w-10 h-10 rounded-full bg-[#F6F7FB] flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
          <BellIcon />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#22C55E] rounded-full"></span>
        </button>

        {/* Balance */}
        <div className="text-right">
          <p className="text-xs text-gray-400">Your Balance</p>
          <p className="text-sm font-semibold text-[#5B6CFF]">$5.456</p>
        </div>

        {/* User Avatar & Greeting */}
        <div className="flex items-center gap-3">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
            alt="User avatar"
            width={42}
            height={42}
            className="w-[42px] h-[42px] rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">
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
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#EEF0FF] rounded-xl flex items-center justify-center">
          <HomeIconFilled />
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      <div className="flex items-center gap-3">
        {/* This Month button - rounded/pill shape */}
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
          <CalendarIcon />
          <span>This Month</span>
          <ChevronDown size={16} />
        </button>
        {/* Download Report button - rounded/pill shape, green */}
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#22C55E] rounded-full text-sm font-medium text-white hover:bg-[#16A34A] transition-all shadow-sm">
          <DownloadIcon />
          <span>Download Report</span>
        </button>
      </div>
    </div>
  )
}
