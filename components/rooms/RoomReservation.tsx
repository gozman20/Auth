import React from "react";
import Calendar from "@/components/inputs/calendar/Calendar";
import { Range } from "react-date-range";
import Button from "../Button";
import useReservationModal from "@/hooks/useReservationModal";
import Currency from "../ui/Currency";

interface RoomReservationProps {
  totalNight: number;
  dateRange: Range;
  onChangeDate(value: Range): void;
  price: number;
  totalPrice: number;
  disabledDates: Date[];
}
const RoomReservation: React.FC<RoomReservationProps> = ({
  dateRange,
  totalNight,
  onChangeDate,
  totalPrice,
  price,
  disabledDates,
}) => {
  const reservationModal = useReservationModal();

  return (
    <div>
      <div className="border rounded-lg ">
        <div className="font-semibold text-sm p-2 flex gap-4">
          Price/night <Currency value={price} />
        </div>
        <hr />
        <Calendar
          onChange={(value) => onChangeDate(value.selection)}
          value={dateRange}
          disabledDates={disabledDates}
        />
        <hr />
        <div className="font-semibold text-sm  p-2 flex justify-between">
          Total price for {totalNight} night
          <Currency value={totalPrice} />
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
