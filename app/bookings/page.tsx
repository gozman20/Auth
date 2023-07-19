import React from "react";
import getBookings from "../actions/getBookings";
import BookingClient from "./BookingClient";
import styles from "@/components/styles";
interface Iparams {
  roomId?: string;
}
const Bookings = async ({ params }: { params: Iparams }) => {
  const reservations = await getBookings(params);

  if (!reservations) return <div>No bookings</div>;

  if (reservations.length === 0) return <div>No booking inside array</div>;

  return (
    <div className={`pt-[145px] ${styles.paddingX}`}>
      <BookingClient reservations={reservations} />
    </div>
  );
};

export default Bookings;
