import "../DiaryCalendar/DiaryCalendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { EventGet } from "@/models/Event";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/useDashboard";

const DiaryCalendar = () => {
  const { diaries } = useDashboard();
  const [events, setEvents] = useState<EventGet[]>([]);

  useEffect(() => {
    const mappedEvents = diaries.map((diary) => ({
      id: diary.entryId,
      title: diary.title,
      start: new Date(diary.createdAt).toISOString().split("T")[0],
      end: new Date(diary.createdAt).toISOString().split("T")[0],
    }));
    setEvents(mappedEvents);
  }, [diaries]);

  const localizer = momentLocalizer(moment);

  return (
    <div>
      <Calendar
        defaultView="month"
        events={events as EventGet[]}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "50em" }}
      />
    </div>
  );
};

export default DiaryCalendar;
