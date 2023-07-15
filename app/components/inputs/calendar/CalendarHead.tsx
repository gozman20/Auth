import React from "react";
import { DateRange, Range } from "react-date-range";
import Calendar from "@/app/components/inputs/calendar/Calendar";

interface CalendarHeadProps {
  dateRange: Range;
  onChangeDate(value: Range): void;
}
const CalendarHead: React.FC<CalendarHeadProps> = ({
  dateRange,
  onChangeDate,
}) => {
  return (
    <div>
      <Calendar
        value={dateRange}
        onChange={(value) => onChangeDate(value.selection)}
      />
    </div>
  );
};

export default CalendarHead;
