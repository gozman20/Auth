import getRoomById from "@/app/actions/getRoomById";
import { getRooms } from "@/app/actions/getRooms";
import RoomDetail from "@/app/rooms/[roomId]/RoomDetail";
import styles from "@/app/components/styles";
import getBookings from "@/app/actions/getBookings";

interface Iparams {
  roomId?: string;
}
const RoomDetails = async ({ params }: { params: Iparams }) => {
  const room = await getRoomById(params);
  const reservations = await getBookings(params);
  console.log(reservations);
  if (!room) {
    return <div>Pls this room has been booked</div>;
  }

  return (
    <div className="pt-[140px]">
      <div className={styles.paddingX}>
        <RoomDetail room={room} reservations={reservations} />
      </div>
    </div>
  );
};

export default RoomDetails;
