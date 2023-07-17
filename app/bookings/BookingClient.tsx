import { Rooms } from "@prisma/client";
import React from "react";
import { SafeReservation, SafeRoom } from "../types";
import RoomCard from "../components/rooms/RoomCard";

interface BookingClientprops {
  reservations: SafeReservation[];
}
const BookingClient: React.FC<BookingClientprops> = ({ reservations = [] }) => {
  return (
    <div
      className="
      mt-10
      grid 
      grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-3 
      gap-8
    "
    >
      {reservations.map((reservation) => (
        <RoomCard
          reservation={reservation}
          room={reservation.rooms}
          key={reservation.id}
        />
      ))}
    </div>
  );
};

export default BookingClient;
