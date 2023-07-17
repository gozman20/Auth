"use client";
import { SafeReservation, SafeRoom } from "@/app/types";
import { Rooms } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { GoPeople } from "react-icons/go";
import { MdOutlineBathroom } from "react-icons/md";

interface RoomProps {
  room: SafeRoom;
  reservation?: SafeReservation;
}

const RoomCard: React.FC<RoomProps> = ({ room, reservation }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/rooms/${room.id}`)}
      className={`flex flex-col col-span-1 cursor-pointer `}
    >
      <div
        className="aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-t-lg"
      >
        <Image src={room.image} alt="room" fill />
      </div>
      <div className="bg-gray-200 p-4 ">
        <div className="my-3 font-semibold text-[25px]">{room.title}</div>
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-row gap-2  items-center">
            <div>
              {" "}
              <GoPeople size={25} />
            </div>

            <div>Max. guest {room.guestCount}</div>
          </div>
          <div className="flex flex-row gap-2  items-center">
            <div>
              {" "}
              <MdOutlineBathroom size={25} />
            </div>

            <div>{room.bathroomCount} bathroom</div>
          </div>
        </div>
        <div className="mt-2">{room.description}</div>
      </div>
    </div>
  );
};

export default RoomCard;
