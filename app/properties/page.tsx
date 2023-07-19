import React from "react";
import { getRooms } from "../actions/getRooms";
import { RoomParams } from "../actions/getRooms";
import PropertyClient from "./PropertyClient";
import styles from "../components/styles";
import ClientOnly from "../components/ClientOnly";

interface Homeprops {
  searchParams: RoomParams;
}
const Properties = async ({ searchParams }: Homeprops) => {
  const rooms = await getRooms(searchParams);
  if (rooms.length === 0)
    return (
      <ClientOnly>
        <div className={`pt-[145px] ${styles.paddingX}`}>
          You have not created any room
        </div>
      </ClientOnly>
    );

  return (
    <ClientOnly>
      <div className={`pt-[145px] ${styles.paddingX}`}>
        <PropertyClient rooms={rooms} />
      </div>
    </ClientOnly>
  );
};

export default Properties;
