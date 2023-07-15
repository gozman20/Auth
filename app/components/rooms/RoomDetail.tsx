"use client";
import React, { useState } from "react";
import styles from "../styles";
import Image from "next/image";
import ReservationForm from "../ReservationForm";
import CalendarHead from "../inputs/calendar/CalendarHead";
import { Range, RangeFocus } from "react-date-range";
import Heading from "../Heading";

interface RoomDetailProps {
  image: string;
  guestCount: string;
  price: string;
  bathroomCount: string;
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
  return (
    <div className={`${styles.paddingX}`}>
      <div className="relative aspect-square w-full h-[70vh]">
        <Image src={room.image} alt="room" fill />
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg">
          <div className="font-semibold text-[30px] p-4">${room.price}</div>
          <hr />
          <div>
            <CalendarHead
              dateRange={dateRange}
              onChangeDate={(value) => setDateRange(value)}
            />
          </div>
        </div>

        <div className="">
          <ReservationForm />
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
