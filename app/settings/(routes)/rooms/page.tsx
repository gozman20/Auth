import React from "react";
import getRooms from "@/actions/getRooms";
import { RoomParams } from "@/actions/getRooms";
import ClientOnly from "@/components/ClientOnly";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import PropertyClient from "./components/RoomsClient";

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

  const formattedRoom = rooms.map((item: any) => ({
    id: item.id,
    name: item.title,
    description: item.description,
    guest: item.guestCount,
  }));

  return (
    <ClientOnly>
      <div className="flex justify-between items-center">
        <Heading title={`Rooms ${rooms.length}`} />
        <div className="flex justify-end gap-y-2">
          {" "}
          <Button variant="default">Add new</Button>
        </div>
      </div>

      <div>
        <PropertyClient rooms={formattedRoom} />
      </div>
    </ClientOnly>
  );
};

export default Properties;
