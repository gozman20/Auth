import getRoomById from "@/actions/getRoomById";
import RoomDetail from "@/app/rooms/[roomId]/component/RoomDetail";
import getReservations from "@/actions/getReservations";
import ClientOnly from "@/components/ClientOnly";

interface Iparams {
  roomId?: string;
}
const RoomDetails = async ({ params }: { params: Iparams }) => {
  const room = await getRoomById(params);
  const reservations = await getReservations(params);

  if (!room) {
    return <div>No rrom matches this id</div>;
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
