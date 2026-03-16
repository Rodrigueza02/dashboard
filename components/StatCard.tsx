// Shopping cart icon
const ShoppingCartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="21" r="1" fill="#5B6CFF"/>
    <circle cx="20" cy="21" r="1" fill="#5B6CFF"/>
    <path d="M1 1H5L7.68 14.39C7.77 14.83 8.02 15.22 8.38 15.51C8.74 15.79 9.19 15.95 9.64 15.95H19.36C19.81 15.95 20.26 15.79 20.62 15.51C20.98 15.22 21.23 14.83 21.32 14.39L23 6H6" stroke="#5B6CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Users icon
const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#5B6CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#5B6CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#5B6CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#5B6CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Package/Orders icon
const PackageIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 9.4L7.5 4.21" stroke="#5B6CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 16V8C20.9996 7.6481 20.9071 7.30287 20.7315 7.00024C20.556 6.69761 20.3037 6.44905 20 6.28L13 2.28C12.696 2.10972 12.3511 2.02063 12 2.02063C11.6489 2.02063 11.304 2.10972 11 2.28L4 6.28C3.69626 6.44905 3.44398 6.69761 3.26846 7.00024C3.09294 7.30287 3.00036 7.6481 3 8V16C3.00036 16.3519 3.09294 16.6971 3.26846 16.9998C3.44398 17.3024 3.69626 17.551 4 17.72L11 21.72C11.304 21.8903 11.6489 21.9794 12 21.9794C12.3511 21.9794 12.696 21.8903 13 21.72L20 17.72C20.3037 17.551 20.556 17.3024 20.7315 16.9998C20.9071 16.6971 20.9996 16.3519 21 16Z" stroke="#5B6CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="#5B6CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22.08V12" stroke="#5B6CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

interface StatCardProps {
  title: string
  value: string
  change: number
  icon: "sales" | "visitors" | "orders"
}

const iconMap = {
  sales: ShoppingCartIcon,
  visitors: UsersIcon,
  orders: PackageIcon,
}

export default function StatCard({ title, value, change, icon }: StatCardProps) {
  const IconComponent = iconMap[icon]
  const isPositive = change > 0

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 w-full">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EEF0FF] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
          <IconComponent />
        </div>
        <div className="min-w-0">
          <p className="text-xs sm:text-sm text-gray-500 mb-1">{title}</p>
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">{value}</span>
            <span
              className={`text-xs font-medium whitespace-nowrap ${
                isPositive ? "text-[#22C55E]" : "text-red-500"
              }`}
            >
              {isPositive ? "↑" : "↓"} {Math.abs(change)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
