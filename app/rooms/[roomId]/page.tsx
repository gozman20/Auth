import getRoomById from "@/app/actions/getRoomById";
import { getRooms } from "@/app/actions/getRooms";
import RoomDetail from "@/app/rooms/[roomId]/RoomDetail";
import styles from "@/app/components/styles";
import getBookings from "@/app/actions/getBookings";
import ClientOnly from "@/app/components/ClientOnly";

interface Iparams {
  roomId?: string;
}
const RoomDetails = async ({ params }: { params: Iparams }) => {
  const room = await getRoomById(params);
  const reservations = await getBookings(params);

  if (!room) {
    return <div>Pls this room has been booked</div>;
  }

  return (
    <ClientOnly>
      <div className="pt-[140px]">
        <div className={styles.paddingX}>
          <RoomDetail room={room} reservations={reservations} />
        </div>
      </div>
    </ClientOnly>
  );
};

export default RoomDetails;
