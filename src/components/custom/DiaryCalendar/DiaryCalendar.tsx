import { useEffect, useState } from "react";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { createViewMonthGrid } from "@schedule-x/calendar";

import "@schedule-x/theme-default/dist/index.css";
import "../DiaryCalendar/DiaryCalendar.css";
import { GetDiaryEntriesAPI } from "@/services/DiaryEntryService";
import { toast } from "sonner";
import { EventGet } from "@/models/Event";
import { DiaryEntryGet } from "@/models/DiaryEntry";

const DiaryCalendar = () => {
  const [diaries, setDiaries] = useState<DiaryEntryGet[]>([]);
  const [events, setEvents] = useState<EventGet[]>([]);

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

  useEffect(() => {
    setEvents(
      diaries.map((diary) => {
        return {
          id: diary.entryId,
          title: diary.title,
          start: diary.createdAt,
          end: diary.updatedAt,
        };
      })
    );
  }, [diaries]);

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
