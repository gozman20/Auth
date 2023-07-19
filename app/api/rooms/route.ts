import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, price, guestCount, image, bathroomCount } =
      body;
    console.log("hi");
    const room = await prisma.rooms.create({
      data: {
        title,
        description,
        image,
        bathroomCount,
        guestCount: parseInt(guestCount, 10),
        price: parseInt(price, 10),
      },
    });
    return NextResponse.json(room);
  } catch (err) {
    throw new Error();
  }
}
