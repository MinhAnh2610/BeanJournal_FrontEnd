import Sidebar from "@/components/custom/SidebarComponents/Sidebar";
import { DashboardProvider } from "@/context/useDashboard";
import { LocationProvider } from "@/context/useLocation";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <LocationProvider>
      <DashboardProvider>
        <main className="w-full flex flex-row relative">
          <Sidebar />
          <section className="w-full">
            <Outlet />
          </section>
        </main>
      </DashboardProvider>
    </LocationProvider>
  );
};

export default Dashboard;
