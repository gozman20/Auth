import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
interface Params {
  reservationId: string;
}
export async function DELETE(req: Request, { params }: { params: Params }) {
  console.log(params);
  try {
    const { reservationId } = params;
    const room = await prisma.reservation.deleteMany({
      where: {
        id: reservationId,
      },
    });
    return NextResponse.json(room);
  } catch (err) {
    console.log(err);
  }
}
