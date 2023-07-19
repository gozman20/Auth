"use client";
import { SafeReservation, SafeRoom } from "@/app/types";
import { Rooms } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import { GoPeople } from "react-icons/go";
import { MdOutlineBathroom } from "react-icons/md";
import Button from "../Button";

interface RoomCardProps {
  room: SafeRoom;
  reservation?: SafeReservation;
  onAction?(id: string): void;
  actionId?: string;
  actionLabel?: string;
  disabled?: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({
  room,
  reservation,
  onAction,
  actionLabel,
  actionId = "",
  disabled,
}) => {
  const router = useRouter();

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }
      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  return (
    <div
      onClick={() => router.push(`/rooms/${room.id}`)}
      className={`flex flex-col col-span-1 cursor-pointer shadow-xl`}
    >
      <div
        className="aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-t-lg
            h-[200px]
            "
      >
        <Image src={room.image} alt="room" fill />
      </div>
      <div className="bg-white p-2 ">
        <div className="my-1 font-semibold text-[20px]">{room.title}</div>
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
        <div className="mt-2 text-[14px] text-neutral-500">
          {room.description}
        </div>
        {onAction && (
          <div>
            <Button label={actionLabel} onClick={handleCancel} small />
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomCard;
