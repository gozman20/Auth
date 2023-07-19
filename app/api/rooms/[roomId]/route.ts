import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
interface Params {
  roomId: string;
}
export async function DELETE(req: Request, { params }: { params: Params }) {
  try {
    const { roomId } = params;
    const room = await prisma.rooms.deleteMany({
      where: {
        id: roomId,
      },
    });
    return NextResponse.json(room);
  } catch (err) {
    console.log(err);
  }
}
