import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { createViewMonthGrid } from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/index.css";
import "../DiaryCalendar/DiaryCalendar.css";
import { useDashboard } from "@/context/useDashboard";

const DiaryCalendar = () => {
  const { diaries } = useDashboard();

  const events = diaries.map((diary) => {
    return {
      id: diary.entryId,
      title: diary.title,
      start: diary.createdAt,
      end: diary.createdAt,
    };
  });

  const calendar = useCalendarApp({
    views: [createViewMonthGrid()],
    events: events,
  });

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
};

export default DiaryCalendar;
