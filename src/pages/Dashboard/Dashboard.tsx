import Sidebar from "@/components/custom/Sidebar";
import { CalendarDays, Clock } from "lucide-react";
import Weather from "@/components/custom/Weather";
import RecentlyVisited from "@/components/custom/RecentlyVisited";
import DiaryCalendar from "@/components/custom/DiaryCalendar";

const Dashboard = () => {
  return (
    <main className="w-full flex flex-row relative">
      <Sidebar />
      <section className="flex flex-col p-14 w-full gap-10">
        <Weather />
        <div className="flex items-center text-gray-500">
          <Clock className="" />
          <p className="text-lg font-semibold pl-2">Recently visited</p>
        </div>
        <RecentlyVisited />
        <div className="flex items-center text-gray-500">
          <CalendarDays className="" />
          <p className="text-lg font-semibold pl-2">Calendar</p>
        </div>
        <DiaryCalendar />
      </section>
    </main>
  );
};

export default Dashboard;
