import React from "react";
import Roomspage from "../components/rooms/RoomSearch";
import RoomCard from "../components/rooms/RoomCard";
import { AiFillAccountBook } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import styles from "../components/styles";
import { getRooms } from "../actions/getRooms";
import { RoomParams } from "../actions/getRooms";
import getBookings from "../actions/getBookings";
import RoomClient from "./RoomClient";

interface Homeprops {
  searchParams: RoomParams;
}
const Rooms = async ({ searchParams }: Homeprops) => {
  const rooms = await getRooms(searchParams);

  return (
    <div className="pt-[145px]">
      <Roomspage />
      <div className={`${styles.paddingX}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[30px] gap-4">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
