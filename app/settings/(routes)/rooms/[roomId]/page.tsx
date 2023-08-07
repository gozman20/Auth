import React from "react";
import RoomForm from "./components/RoomForm";
import prismadb from "@/libs/prismadb";

interface Iparams {
  roomId?: string;
}
const page = async ({ params }: { params: { roomId: string } }) => {
  // const room = await getRoomById(params);
  console.log(params.roomId);
  const room = await prismadb.room.findUnique({
    where: {
      id: params.roomId,
    },
    include: {
      images: true,
    },
  });

  return (
    <div>
      {/* <AdminModal room={room} /> */}
      <RoomForm initialData={room} />
    </div>
  );
};

export default page;
