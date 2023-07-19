import prisma from "@/app/libs/prismadb";
interface Iparams {
  roomId?: string;
}
export default async function getRoomById(params: Iparams) {
  try {
    const { roomId } = params;

    const room = await prisma.rooms.findUnique({
      where: {
        id: roomId,
      },
    });

    if (!room) return null;
    return {
      ...room,
      createdAt: room.createdAt.toISOString(),
    };
  } catch (err) {
    throw new Error();
  }
}
