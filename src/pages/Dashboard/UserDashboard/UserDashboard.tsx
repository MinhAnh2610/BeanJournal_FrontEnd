import DiaryCalendar from "@/components/custom/DiaryCalendar/DiaryCalendar";
import RecentlyVisited from "@/components/custom/RecentlyVisited";
import Weather from "@/components/custom/Weather";
import { DiaryEntryGet } from "@/models/DiaryEntry";
import { GetDiaryEntriesAPI } from "@/services/DiaryEntryService";
import { Clock, CalendarDays } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const UserDashboard = () => {
  const [diaries, setDiaries] = useState<DiaryEntryGet[]>([]);

  const getDiaries = async () => {
    await GetDiaryEntriesAPI()
      .then((res) => {
        if (res?.data) {
          setDiaries(res.data);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    getDiaries();
  }, []);

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
      <DiaryCalendar diaries={diaries} />
    </div>
  );
};

export default UserDashboard;
