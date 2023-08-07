import prismadb from "@/libs/prismadb";

export interface RoomParams {
  guestCount?: string;
  startDate?: string;
  endDate?: string;
}
export default async function getRooms(params: RoomParams) {
  try {
    const { guestCount, startDate, endDate } = params;
    let query: any = {};
    if (guestCount) {
      query.guestCount = { gte: +guestCount };
    }
    if (startDate && endDate) {
      query.NOT = {
        rooms: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate },
              },
            ],
          },
        },
      };
    }

    const rooms = await prismadb.rooms.findMany({
      where: query,
      orderBy: { createdAt: "desc" },
    });

    const safeRooms = rooms.map((room) => ({
      ...room,
      createdAt: room.createdAt.toISOString(),
    }));

    return safeRooms;
  } catch (err) {
    throw new Error();
  }
}
