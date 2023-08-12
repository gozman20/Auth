"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "@/components/styles";
import Image from "next/image";
import { Range } from "react-date-range";
import {
  differenceInCalendarDays,
  differenceInDays,
  eachDayOfInterval,
} from "date-fns";
import RoomReservation from "@/components/rooms/RoomReservation";
import ReservationModal from "@/components/modals/ReservationModal";
import { SafeReservation } from "@/types";
import { RoomType } from "../../page";
import Gallery from "./Gallery";

interface Room {
  room: RoomType;
  reservations?: SafeReservation[];
}

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const RoomDetail: React.FC<Room> = ({ room, reservations = [] }) => {
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const [totalPrice, setTotalPrice] = useState(Number(room.price));
  //Disable the dates of the previous reservation made on this room
  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation: any) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );

      if (dayCount && room.price) {
        setTotalPrice(dayCount * +room.price);
        return;
      }
    }

    setTotalPrice(+room.price);
  }, [dateRange, room.price, totalPrice]);

  return (
    <div>
      <ReservationModal
        dateRange={dateRange}
        totalPrice={totalPrice}
        roomId={room.id}
      />
      <Gallery images={room.images} />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RoomReservation
          totalNight={totalPrice / +room.price}
          dateRange={dateRange}
          onChangeDate={setDateRange}
          totalPrice={totalPrice}
          price={+room.price}
          disabledDates={disabledDates}
        />

        <div className="">{/* Another component comes here */}</div>
      </div>
    </div>
  );
};

export default RoomDetail;
