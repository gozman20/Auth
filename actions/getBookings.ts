import prismadb from "@/libs/prismadb";

interface Iparams {
  roomId?: string;
}
export default async function getBookings(params: Iparams) {
  try {
    const { roomId } = params;
    const query: any = {};
    if (roomId) {
      query.roomId = roomId;
    }

    const bookings = await prismadb.reservation.findMany({
      where: query,
      include: { rooms: true },
      orderBy: { createdAt: "desc" },
    });

    const safeBookings = bookings.map((booking) => ({
      ...booking,
      createdAt: booking.createdAt.toISOString(),
      // startDate: booking.startDate.toISOString(),
      // endDate: booking.endDate.toISOString(),
      rooms: {
        ...booking.rooms,
        createdAt: booking.rooms.createdAt.toISOString(),
      },
    }));
    return safeBookings;
  } catch (err) {
    throw new Error();
  }
}
