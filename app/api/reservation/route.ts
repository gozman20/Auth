import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstname,
      lastname,
      email,
      phone,
      startDate,
      endDate,
      totalPrice,
      roomId,
    } = body;
    console.log("Hi");
    const reservation = await prisma.reservation.create({
      data: {
        firstname,
        lastname,
        email,
        roomId,
        phone,
        startDate,
        endDate,
        totalPrice: parseInt(totalPrice, 10),
      },
    });

    return NextResponse.json(reservation);
  } catch (err) {
    console.log(err);
  }
}
