import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
interface Params {
  roomId: string;
}
export async function DELETE(req: Request, { params }: { params: Params }) {
  try {
    const { roomId } = params;
    const room = await prisma.room.deleteMany({
      where: {
        id: roomId,
      },
    });
    return NextResponse.json(room);
  } catch (err) {
    console.log(err);
  }
}
export async function PATCH(req: Request, { params }: { params: Params }) {
  try {
    const { roomId } = params;
    const { image, description, name } = await req.json();
    const room = await prisma.room.update({
      where: {
        id: roomId,
      },
      data: {
        image,
        description,
        title: name,
      },
    });
    return NextResponse.json(room);
  } catch (err) {
    console.log(err);
  }
}
