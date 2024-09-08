import { useEffect, useState } from "react";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { createViewMonthGrid } from "@schedule-x/calendar";

import "@schedule-x/theme-default/dist/index.css";
import "../DiaryCalendar/DiaryCalendar.css";

const DiaryCalendar = () => {
  const [selectedDate, setSelectedDate] = useState("2024-09-07");
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "My new event",
      start: "2024-09-09",
      end: "2024-09-09",
    },
    {
      id: "2",
      title: "My new event",
      start: "2024-09-07",
      end: "2024-09-07",
    },
    {
      id: "3",
      title: "My new event",
      start: "2024-09-08",
      end: "2024-09-08",
    },
    {
      id: "4",
      title: "My new event",
      start: "2024-09-10",
      end: "2024-09-10",
    },
  ]);

  const calendar = useCalendarApp({
    views: [createViewMonthGrid()],
    events,
    selectedDate,
  });

  useEffect(() => {
    setEvents([]);
    setSelectedDate("2024-09-07");
  }, []);

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
};

export default DiaryCalendar;

