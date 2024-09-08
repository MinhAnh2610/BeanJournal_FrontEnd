import Sidebar from "@/components/custom/Sidebar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <main className="w-full flex flex-row relative">
      <Sidebar />
      <section className="w-full">
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
