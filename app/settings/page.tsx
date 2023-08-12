import React from "react";
import getBookings from "@/actions/getReservations";
import BookingClient from "./BookingClient";
import { BookingColumn } from "@/components/column";
import format from "date-fns/format";
interface Iparams {
  roomId?: string;
}
const Bookings = async ({ params }: { params: Iparams }) => {
  const reservations = await getBookings(params);

  if (!reservations) return <div>No bookings</div>;

  if (reservations.length === 0) return <div>No booking inside array</div>;

  const formattedBooking: BookingColumn[] = reservations.map((item) => ({
    id: item.id,
    firstname: item.firstname,
    lastname: item.lastname,
    email: item.email,
    phone: item.phone,
    arrival: format(item.startDate, "dd/MM/yyyy"),
    departure: format(item.endDate, "dd/MM/yyyy"),
  }));

  return (
    <div>
      <BookingClient reservations={formattedBooking} />
    </div>
  );
};

export default Bookings;
