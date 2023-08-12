import React from "react";
import getRooms from "@/actions/getRooms";
import { RoomParams } from "@/actions/getRooms";
import ClientOnly from "@/components/ClientOnly";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import PropertyClient from "./components/RoomsClient";
import SettingsPage from "./components/SettingsPage";

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

  const formattedRoom = rooms.map((item) => ({
    id: item.id,
    name: item.title,
    description: item.description,
    guest: item.guestCount,
  }));

  return (
    <ClientOnly>
      <SettingsPage formattedRoom={formattedRoom} />
    </ClientOnly>
  );
};

export default Properties;
