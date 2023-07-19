import RoomSearch from "@/components/rooms/RoomSearch";
import RoomCard from "@/components/rooms/RoomCard";
import styles from "@/components/styles";
import getRooms from "@/actions/getRooms";
import { RoomParams } from "@/actions/getRooms";
import ClientOnly from "@/components/ClientOnly";

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
      <div className="pt-[145px]">
        <RoomSearch />

        <div className={`${styles.paddingX}`}>
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

export default Home;
