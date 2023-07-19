"use client";
import React from "react";
import { SafeReservation, SafeRoom } from "../types";
import RoomCard from "@/components/rooms/RoomCard";

interface BookingClientprops {
  reservations: SafeReservation[];
}
const BookingClient: React.FC<BookingClientprops> = ({ reservations = [] }) => {
  return (
    <>
      <div
        className="
      mt-3
      grid 
      grid-cols-1 
      sm::grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4
      gap-8
    "
      >
        {reservations.map((reservation) => (
          <RoomCard
            reservation={reservation}
            room={reservation.rooms}
            key={reservation.id}
            onAction={() => {}}
            actionLabel="Cancel booking"
          />
        ))}
      </div>
    </>
  );
};

export default BookingClient;
