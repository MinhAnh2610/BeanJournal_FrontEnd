// import { useLayoutEffect, useState } from "react";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { createViewMonthGrid } from "@schedule-x/calendar";

import "@schedule-x/theme-default/dist/index.css";
import "../DiaryCalendar/DiaryCalendar.css";
// import { EventGet } from "@/models/Event";
import { DiaryEntryGet } from "@/models/DiaryEntry";

type Props = {
  diaries: DiaryEntryGet[];
};

const DiaryCalendar = ({ diaries }: Props) => {
  // const [events, setEvents] = useState<EventGet[]>([]);

  // useLayoutEffect(() => {
  //   setEvents(
  //     diaries.map((diary) => {
  //       return {
  //         id: diary.entryId,
  //         title: diary.title,
  //         start: diary.createdAt,
  //         end: diary.updatedAt,
  //       };
  //     })
  //   );
  // }, []);

  const calendar = useCalendarApp({
    views: [createViewMonthGrid()],
    events: diaries.map((diary) => {
      return {
        id: diary.entryId,
        title: diary.title,
        start: diary.createdAt,
        end: diary.updatedAt,
      };
    })
  });

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
};

export default DiaryCalendar;
