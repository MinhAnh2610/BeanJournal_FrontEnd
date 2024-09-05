import { Calendar } from "@nextui-org/react";

const DiaryCalendar = () => {
  return (
    <div>
      <Calendar
        aria-label="Date (Show Month and Year Picker)"
        showMonthAndYearPickers
      />
    </div>
  );
};

export default DiaryCalendar;
