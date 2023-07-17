import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Range, RangeKeyDict } from "react-date-range";

interface DateRangeProps {
  dateRange: Range;
  setDateRange(value: RangeKeyDict): void;
}

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const useDateRange = create<DateRangeProps>()(
  persist(
    (set) => ({
      dateRange: initialDateRange,
      setDateRange: (value) => set({ dateRange: value.selection }),
    }),
    { name: "mycalendar" }
  )
);
export default useDateRange;
