import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, price, guestCount, images, bathroomCount } =
      body;
    console.log("hi");

    if (!images || !images.length) {
      return new NextResponse("Images are required", { status: 400 });
    }

    const room = await prisma.room.create({
      data: {
        title,
        description,

        bathroomCount,
        guestCount,
        price,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    });
    return NextResponse.json(room);
  } catch (err) {
    throw new Error();
  }
}

export async function GET() {}
