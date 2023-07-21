import React from "react";
import getRooms from "@/actions/getRooms";
import { RoomParams } from "@/actions/getRooms";
import PropertyClient from "./PropertyClient";
import styles from "@/components/styles";
import ClientOnly from "@/components/ClientOnly";

export const dynamic = "force-dynamic";

interface Homeprops {
  searchParams: RoomParams;
}
const Properties = async ({ searchParams }: Homeprops) => {
  const rooms = await getRooms(searchParams);
  if (rooms.length === 0)
    return (
      <ClientOnly>
        <div>You have not created any room</div>
      </ClientOnly>
    );

  return (
    <ClientOnly>
      <div>
        <PropertyClient rooms={rooms} />
      </div>
    </ClientOnly>
  );
};

export default Properties;
