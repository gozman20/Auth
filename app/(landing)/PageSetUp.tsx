"use client";
import ClientOnly from "@/components/ClientOnly";
import Heading from "@/components/Heading";
import { SafeRoom } from "@/types";
import { Room } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
interface PageSerUpProps {
  rooms: Room[];
}
const PageSetUp: React.FC<PageSerUpProps> = ({ rooms }) => {
  const router = useRouter();
  return (
    <>
      <ClientOnly>
        <Heading title="Browse by property type" />
        <div
          className="
        grid 
        grid-cols-1 
      sm:grid-cols-2
       md:grid-cols-3 
      lg:grid-cols-4 
      gap-10"
        >
          <div className="cursor-pointer" onClick={() => router.push("/rooms")}>
            <div className="relative aspect-square mb-3 ">
              {" "}
              <Image
                src="/room-1.jpg"
                alt="room-1"
                fill
                className="rounded-lg"
              />
            </div>
            <div className="hover:underline">
              <span className="font-semibold ">Hotel </span> {rooms?.length}
            </div>
          </div>

          <div onClick={() => router.push("/rooms")}>
            <div className="relative aspect-square mb-3 rounded-lg">
              {" "}
              <Image
                src="/room-2.jpg"
                alt="room-1"
                fill
                className="rounded-lg"
              />
            </div>
            <div>
              <span className="font-semibold">Hotel </span> {rooms?.length}
            </div>
          </div>
          <div onClick={() => router.push("/rooms")}>
            <div className="relative aspect-square mb-3 rounded-lg">
              {" "}
              <Image
                src="/room-3.jpg"
                alt="room-1"
                fill
                className="rounded-lg"
              />
            </div>
            <div>
              <span className="font-semibold">Hotel </span> {rooms?.length}
            </div>
          </div>
          <div onClick={() => router.push("/rooms")}>
            <div className="relative aspect-square mb-3 rounded-lg">
              {" "}
              <Image
                src="/room-2.jpg"
                alt="room-1"
                fill
                className="rounded-lg"
              />
            </div>
            <div>
              <span className="font-semibold">Hotel </span> {rooms?.length}
            </div>
          </div>
        </div>
      </ClientOnly>
    </>
  );
};

export default PageSetUp;
