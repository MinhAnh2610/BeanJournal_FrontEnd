import DiaryCalendar from "@/components/custom/DiaryComponents/DiaryCalendar/DiaryCalendar";
import RecentlyVisited from "@/components/custom/DashboardComponents/RecentlyVisited";
import Weather from "@/components/custom/DashboardComponents/Weather";
import { Clock, CalendarDays } from "lucide-react";

const UserDashboard = () => {
  return (
    <div className="flex flex-col p-14 w-full gap-10">
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
    </div>
  );
};

export default UserDashboard;
