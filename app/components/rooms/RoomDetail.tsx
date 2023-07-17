"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "../styles";
import Image from "next/image";
import { Range, RangeFocus } from "react-date-range";
import { differenceInCalendarDays, differenceInDays } from "date-fns";
import RoomReservation from "./RoomReservation";
import useDateRange from "@/app/hooks/useDateRange";
import ReservationModal from "../modals/ReservationModal";

interface RoomDetailProps {
  id: string;
  title: string;
  image: string;
  guestCount: number;
  price: number;
  bathroomCount: number;
  description: string;
  createdAt: string;
}
interface Room {
  room: RoomDetailProps;
}

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const RoomDetail: React.FC<Room> = ({ room }) => {
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const [totalPrice, setTotalPrice] = useState(room.price);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );
      if (dayCount && room.price) {
        setTotalPrice(dayCount * room.price);
        return;
      }
    }

    setTotalPrice(room.price);
  }, [dateRange, room.price, totalPrice]);

  return (
    <div className={`${styles.paddingX}`}>
      <ReservationModal
        dateRange={dateRange}
        totalPrice={totalPrice}
        roomId={room.id}
      />
      <div className="relative aspect-square w-full h-[80vh]">
        <Image src={room.image} alt="room" fill />
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <RoomReservation
          dateRange={dateRange}
          onChangeDate={setDateRange}
          totalPrice={totalPrice}
          price={room.price}
        />

        <div className="">{/* Another component comes here */}</div>
      </div>
    </div>
  );
};

export default RoomDetail;
