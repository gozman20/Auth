import getRoomById from "@/actions/getRoomById";
import RoomDetail from "@/app/rooms/[roomId]/RoomDetail";
import styles from "@/components/styles";
import getBookings from "@/actions/getBookings";
import ClientOnly from "@/components/ClientOnly";

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
      <div>
        <RoomDetail room={room} reservations={reservations} />
      </div>
    </ClientOnly>
  );
};

export default RoomDetails;
