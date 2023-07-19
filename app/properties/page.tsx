import React from "react";
import { getRooms } from "../actions/getRooms";
import { RoomParams } from "../actions/getRooms";
import PropertyClient from "./PropertyClient";
import styles from "../components/styles";

interface Homeprops {
  searchParams: RoomParams;
}
const Properties = async ({ searchParams }: Homeprops) => {
  const rooms = await getRooms(searchParams);
  if (rooms.length === 0)
    return (
      <div className={`pt-[145px] ${styles.paddingX}`}>
        You have not created any room
      </div>
    );

  return (
    <div className={`pt-[145px] ${styles.paddingX}`}>
      <PropertyClient rooms={rooms} />
    </div>
  );
};

export default Properties;
