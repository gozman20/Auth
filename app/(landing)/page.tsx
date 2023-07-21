import RoomSearch from "@/components/rooms/RoomSearch";
import RoomCard from "@/components/rooms/RoomCard";
import styles from "@/components/styles";
import getRooms from "@/actions/getRooms";
import { RoomParams } from "@/actions/getRooms";
import ClientOnly from "@/components/ClientOnly";

import PageSetUp from "./PageSetUp";

export const dynamic = "force-dynamic";

interface Homeprops {
  searchParams: RoomParams;
}
const Home = async ({ searchParams }: Homeprops) => {
  const rooms = await getRooms(searchParams);

  if (rooms.length === 0)
    return (
      <ClientOnly>
        <div>No room found</div>
      </ClientOnly>
    );
  return (
    <ClientOnly>
      <PageSetUp rooms={rooms} />
    </ClientOnly>
  );
};

export default Home;
