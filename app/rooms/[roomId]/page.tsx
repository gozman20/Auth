import getRoomById from "@/app/actions/getRoomById";
import { getRooms } from "@/app/actions/getRooms";
import RoomDetail from "@/app/components/rooms/RoomDetail";
import styles from "@/app/components/styles";

interface Iparams {
  roomId?: string;
}
const RoomDetails = async ({ params }: { params: Iparams }) => {
  const room = await getRoomById(params);

  if (!room) {
    return <div>Pls this room has been booked</div>;
  }

  return (
    <div className="pt-[140px]">
      <div className={styles.paddingX}>
        <RoomDetail room={room} />
      </div>
    </div>
  );
};

export default RoomDetails;
