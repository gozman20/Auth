import React from "react";
import RoomSearch from "@/components/rooms/RoomSearch";
import RoomCard from "@/components/rooms/RoomCard";
import styles from "@/components/styles";
import getRooms from "@/actions/getRooms";
import { RoomParams } from "@/actions/getRooms";
import ClientOnly from "@/components/ClientOnly";
import Image from "next/image";
import Heading from "@/components/Heading";

export const dynamic = "force-dynamic";
interface Homeprops {
  searchParams: RoomParams;
}
const Rooms = async ({ searchParams }: Homeprops) => {
  const rooms = await getRooms(searchParams);

  return (
    <ClientOnly>
      <div className="mt-6">
        <RoomSearch />

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[30px] gap-4">
            {rooms.map((room: any) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default Rooms;
