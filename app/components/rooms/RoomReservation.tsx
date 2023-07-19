import React from "react";
import Calendar from "@/app/components/inputs/calendar/Calendar";
import { Range } from "react-date-range";
import Button from "../Button";
import useReservationModal from "@/app/hooks/useReservationModal";
import useAdminModal from "@/app/hooks/useAdminModal";
import useDateRange from "@/app/hooks/useDateRange";

interface RoomReservationProps {
  dateRange: Range;
  onChangeDate(value: Range): void;
  price: number;
  totalPrice: number;
  disabledDates: Date[];
}
const RoomReservation: React.FC<RoomReservationProps> = ({
  dateRange,
  onChangeDate,
  totalPrice,
  price,
  disabledDates,
}) => {
  const reservationModal = useReservationModal();
  const date = useDateRange();
  return (
    <div>
      <div className="border rounded-lg">
        <div className="font-semibold text-[30px] p-4">
          Price/night ${price}
        </div>
        <hr />
        <Calendar
          onChange={(value) => onChangeDate(value.selection)}
          value={dateRange}
          disabledDates={disabledDates}
        />
        <hr />
        <div className="font-semibold text-[30px]  p-2">
          Total price ${totalPrice}
        </div>
        <hr />
        <div className="p-2">
          <Button label="BOOK NOW" onClick={reservationModal.onOpen} />
        </div>
      </div>
    </div>
  );
};

export default RoomReservation;