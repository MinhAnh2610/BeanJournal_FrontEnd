import Sidebar from "@/components/custom/Sidebar";
import { DashboardProvider } from "@/context/useDashboard";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <DashboardProvider>
      <main className="w-full flex flex-row relative">
        <Sidebar />
        <section className="w-full">
          <Outlet />
        </section>
      </main>
    </DashboardProvider>
  );
};

export default Dashboard;
