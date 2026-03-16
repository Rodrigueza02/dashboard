
"use client"

import { ChevronDown } from "lucide-react"

// Custom SVG icons matching the design exactly
const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const OrdersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ProductsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const AnalyticsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const MarketingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.41 9.59L12.41 4.59C12.15 4.47 11.85 4.47 11.59 4.59L2.59 9.59C2.23 9.77 2 10.13 2 10.53V19C2 19.55 2.45 20 3 20H21C21.55 20 22 19.55 22 19V10.53C22 10.13 21.77 9.77 21.41 9.59Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const MessagesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Jira Icon
const JiraIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 2L2 11.5L11.5 21L21 11.5L11.5 2Z" fill="#2684FF"/>
    <path d="M11.5 8L8 11.5L11.5 15L15 11.5L11.5 8Z" fill="white"/>
  </svg>
)

// Slack Icon
const SlackIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 10C15.33 10 16 9.33 16 8.5V3.5C16 2.67 15.33 2 14.5 2C13.67 2 13 2.67 13 3.5V8.5C13 9.33 13.67 10 14.5 10Z" fill="#E01E5A"/>
    <path d="M20.5 10H19V8.5C19 7.67 19.67 7 20.5 7C21.33 7 22 7.67 22 8.5C22 9.33 21.33 10 20.5 10Z" fill="#E01E5A"/>
    <path d="M9.5 14C8.67 14 8 14.67 8 15.5V20.5C8 21.33 8.67 22 9.5 22C10.33 22 11 21.33 11 20.5V15.5C11 14.67 10.33 14 9.5 14Z" fill="#36C5F0"/>
    <path d="M3.5 14C2.67 14 2 14.67 2 15.5C2 16.33 2.67 17 3.5 17H5V15.5C5 14.67 4.33 14 3.5 14Z" fill="#36C5F0"/>
    <path d="M14 9.5C14 8.67 13.33 8 12.5 8H7.5C6.67 8 6 8.67 6 9.5C6 10.33 6.67 11 7.5 11H12.5C13.33 11 14 10.33 14 9.5Z" fill="#2EB67D"/>
    <path d="M15.5 6H14V7.5C14 8.33 14.67 9 15.5 9C16.33 9 17 8.33 17 7.5C17 6.67 16.33 6 15.5 6Z" fill="#2EB67D"/>
    <path d="M10 14.5C10 15.33 10.67 16 11.5 16H16.5C17.33 16 18 15.33 18 14.5C18 13.67 17.33 13 16.5 13H11.5C10.67 13 10 13.67 10 14.5Z" fill="#ECB22E"/>
    <path d="M8.5 18H10V16.5C10 15.67 9.33 15 8.5 15C7.67 15 7 15.67 7 16.5C7 17.33 7.67 18 8.5 18Z" fill="#ECB22E"/>
  </svg>
)

// Intercom Icon
const IntercomIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#1F8DED"/>
    <path d="M7 8V14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 6V16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M13 6V16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 8V14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Logo Hexagon with R
const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0L30 8V24L16 32L2 24V8L16 0Z" fill="#F59E0B"/>
    <text x="16" y="21" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="sans-serif">R</text>
  </svg>
)

const menuItems = [
  { icon: HomeIcon, label: "Dashboard", active: true },
  { icon: OrdersIcon, label: "Orders", hasDropdown: true },
  { icon: ProductsIcon, label: "Products", hasDropdown: true },
  { icon: AnalyticsIcon, label: "Analytics" },
  { icon: MarketingIcon, label: "Marketing" },
  { icon: MessagesIcon, label: "Messages", badge: 25 },
]

const integrations = [
  { icon: JiraIcon, label: "Jira" },
  { icon: SlackIcon, label: "Slack" },
  { icon: IntercomIcon, label: "Intercom" },
]

export default function Sidebar() {
  return (
    <aside className="w-[260px] bg-white border-r border-[#E5E7EB] flex flex-col h-screen fixed left-0 top-0">
      {/* Logo */}
      <div className="px-6 py-5 flex items-center gap-2">
        <LogoIcon />
        <span className="text-xl font-semibold text-gray-900">flex</span>
      </div>

      {/* Menu Section */}
      <div className="px-4 pt-2">
        <span className="text-xs font-medium text-gray-400 px-2">Menu</span>
      </div>

      {/* Menu Items */}
      <nav className="px-4 py-3 flex-1">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const IconComponent = item.icon
            return (
              <li key={item.label}>
                <a
                  href="#"
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    item.active
                      ? "bg-gradient-to-r from-[#5B6CFF] to-[#7B8AFF] text-white shadow-md"
                      : "text-gray-600 hover:bg-indigo-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent />
                    <span>{item.label}</span>
                  </div>
                  {item.hasDropdown && (
                    <ChevronDown size={16} className="opacity-60" />
                  )}
                  {item.badge && (
                    <span className="bg-[#22C55E] text-white text-xs font-medium px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Integrations Section */}
        <div className="mt-6">
          <span className="text-xs font-medium text-gray-400 px-2">
            Integrations
          </span>
          <ul className="mt-3 space-y-1">
            {integrations.map((item) => {
              const IconComponent = item.icon
              return (
                <li key={item.label}>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-indigo-50 transition-all"
                  >
                    <IconComponent />
                    <span>{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      {/* Logout */}
      <div className="px-4 pb-6">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-indigo-50 transition-all"
        >
          <LogoutIcon />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  )
}
