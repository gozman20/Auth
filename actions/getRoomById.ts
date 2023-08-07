import prismadb from "@/libs/prismadb";
import { NextResponse } from "next/server";
interface Iparams {
  roomId?: string;
}
export default async function getRoomById(params: Iparams) {
  try {
    const { roomId } = params;

    const room = await prismadb.rooms.findUnique({
      where: {
        id: roomId,
      },
      include: {
        images: true,
      },
    });
    console.log(room);
    console.log("Hello");
    if (!room) return null;
    return room;
    // return {
    //   ...room,
    //   createdAt: room.createdAt.toISOString(),
    // };
  } catch (err) {
    throw new Error();
  }
}
