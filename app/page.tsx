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
      <div className="flex-1 ml-[260px]">
        {/* Top Header/Navbar */}
        <Header />

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Dashboard Header */}
          <DashboardHeader />

          {/* Stats Cards Row */}
          <div className="grid grid-cols-3 gap-5 mb-5">
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

          {/* Charts Row */}
          <div className="grid grid-cols-5 gap-5">
            {/* Sessions Chart - Takes 3 columns */}
            <div className="col-span-3">
              <SessionChart />
            </div>

            {/* Right Column - 2 columns */}
            <div className="col-span-2 flex flex-col gap-5">
              {/* Upgrade Card */}
              <UpgradeCard />

              {/* Conversion Chart */}
              <ConversionChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
