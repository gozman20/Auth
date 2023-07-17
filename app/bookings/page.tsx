import React from "react";
import getBookings from "../actions/getBookings";
import RoomCard from "../components/rooms/RoomCard";
import BookingClient from "./BookingClient";
import { getRooms } from "../actions/getRooms";
import styles from "../components/styles";

const Bookings = async () => {
  const reservations = await getBookings();

  if (!reservations) return <div>No bookings</div>;

  if (reservations.length === 0) return <div>No booking inside array</div>;

  return (
    <div className={`pt-[145px] ${styles.paddingX}`}>
      <BookingClient reservations={reservations} />
    </div>
  );
};

export default Bookings;
