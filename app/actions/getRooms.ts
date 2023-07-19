import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export interface RoomParams {
  guestCount?: string;
}
export default async function getRooms(params: RoomParams) {
  try {
    const { guestCount } = params;
    let query: any = {};
    if (guestCount) {
      query.guestCount = { gte: +guestCount };
    }
    const rooms = await prisma.rooms.findMany({
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
