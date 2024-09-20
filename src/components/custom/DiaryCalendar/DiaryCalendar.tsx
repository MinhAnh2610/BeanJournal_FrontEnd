import "../DiaryCalendar/DiaryCalendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { EventGet } from "@/models/Event";
import { useEffect, useState } from "react";
import { useDashboard } from "@/context/useDashboard";
import { Tally1 } from "lucide-react";
import { Button, Divider, Tooltip } from "@nextui-org/react";

const DiaryCalendar = () => {
  const { diaries } = useDashboard();
  const [events, setEvents] = useState<EventGet[]>([]);

  useEffect(() => {
    const mappedEvents = diaries.map((diary) => ({
      id: diary.entryId,
      title: diary.title,
      start: new Date(diary.createdAt).toISOString().split("T")[0],
      end: new Date(diary.createdAt).toISOString().split("T")[0],
      mood: diary.mood,
      content: diary.content,
    }));
    setEvents(mappedEvents);
  }, [diaries]);

  const localizer = momentLocalizer(moment);

  const CustomComponent = ({ event }: any) => {
    return (
      <Tooltip
        offset={15}
        content={
          <div className="px-1 py-2 w-80 space-y-2">
            <div className="text-xl font-bold text-colour-indigo">Mood: {event.mood}</div>
            <Divider/>
            <div className="text-md font-semibold text-gray-600">{event.content}</div>
            <Divider/>
            <div className="flex justify-end">
              <Button className="text-colour-indigo bg-colour-lavender font-semibold">
                Go to diary
              </Button>
            </div>
          </div>
        }
        className="shadow-lg"
      >
        <div className="text-gray-700 font-semibold flex items-center">
          <Tally1
            className="ml-2 py-0.5 text-colour-indigo font-bold"
            strokeWidth={6}
          />
          <p className="text-sm text-wrap">{event.title}</p>
        </div>
      </Tooltip>
    );
  };

  return (
    <div>
      <Calendar
        defaultView="month"
        events={events as EventGet[]}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "50em" }}
        components={{ event: CustomComponent }}
        onSelectEvent={(event) => console.log(event)}
      />
    </div>
  );
};

export default DiaryCalendar;
