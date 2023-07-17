import prisma from "@/app/libs/prismadb";

export default async function getBookings() {
  try {
    const bookings = await prisma.reservation.findMany({
      include: { rooms: true },
      orderBy: { createdAt: "desc" },
    });
    if (!bookings) return null;

    const safeBookings = bookings.map((booking) => ({
      ...booking,
      createdAt: booking.createdAt.toISOString(),
      startDate: booking.startDate.toISOString(),
      endDate: booking.endDate.toISOString(),
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
