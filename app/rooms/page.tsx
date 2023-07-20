import React from "react";
import RoomSearch from "@/components/rooms/RoomSearch";
import RoomCard from "@/components/rooms/RoomCard";
import styles from "@/components/styles";
import getRooms from "@/actions/getRooms";
import { RoomParams } from "@/actions/getRooms";
import ClientOnly from "@/components/ClientOnly";

interface Homeprops {
  searchParams: RoomParams;
}
const Rooms = async ({ searchParams }: Homeprops) => {
  const rooms = await getRooms(searchParams);

  return (
    <ClientOnly>
      <div className="pt-[145px]">
        <RoomSearch />
        <div className={`${styles.paddingX}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[30px] gap-4">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default Rooms;
