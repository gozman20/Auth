import React from "react";
import RoomSearch from "@/components/rooms/RoomSearch";
import RoomCard from "@/components/rooms/RoomCard";
import styles from "@/components/styles";
import getRooms from "@/actions/getRooms";
import { RoomParams } from "@/actions/getRooms";
import ClientOnly from "@/components/ClientOnly";
import { Image } from "@prisma/client";

export const dynamic = "force-dynamic";
interface Homeprops {
  searchParams: RoomParams;
}

export type RoomType = {
  id: string;
  images: Image[];
  title: string;
  description: string;
  price: string;
  bathroomCount: string;
  guestCount: string;
};
const Rooms = async ({ searchParams }: Homeprops) => {
  const rooms = await getRooms(searchParams);

  const formatedRoom: RoomType[] = rooms.map((room) => ({
    id: room.id,
    images: room.images,
    title: room.title,
    description: room.description,
    price: room.price,
    bathroomCount: room.bathroomCount,
    guestCount: room.guestCount,
  }));

  return (
    <ClientOnly>
      <div className="mt-6">
        <RoomSearch />

        <div>
          <div
            className="grid grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3
           lg:grid-cols-4 
            pt-[30px] gap-4"
          >
            {formatedRoom.map((item: any) => (
              <RoomCard key={item.id} room={item} />
            ))}
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default Rooms;
