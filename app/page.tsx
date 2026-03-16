import Sidebar from "@/components/Sidebar"
import Header, { DashboardHeader } from "@/components/Header"
import StatCard from "@/components/StatCard"
import SessionChart from "@/components/SessionChart"
import ConversionChart from "@/components/ConversionChart"
import UpgradeCard from "@/components/UpgradeCard"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#F6F7FB]">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 w-full md:ml-[260px]">
        
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="p-3 sm:p-4 md:p-6 w-full">
          
          {/* Dashboard Header */}
          <DashboardHeader />

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-5">
            <StatCard
              title="Total Sales"
              value="263k"
              change={15.6}
              icon="sales"
            />
            <StatCard
              title="Total Visitors"
              value="35k"
              change={-6.2}
              icon="visitors"
            />
            <StatCard
              title="Total Orders"
              value="165k"
              change={3.5}
              icon="orders"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            
            {/* Session Chart */}
            <div className="lg:col-span-3 w-full">
              <SessionChart />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-4 md:gap-5 w-full">
              <UpgradeCard />
              <ConversionChart />
            </div>

          </div>

        </main>
      </div>
    </div>
  )
}