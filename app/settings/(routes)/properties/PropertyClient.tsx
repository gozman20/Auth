"use client";
import React, { useCallback, useState } from "react";
import RoomCard from "@/components/rooms/RoomCard";
import { SafeRoom } from "@/types";
import styles from "@/components/styles";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { RoomsColumn, roomcolumns } from "@/components/roomcolumn";
import { BookingColumn } from "@/components/column";

interface PropertyClientProps {
  // rooms: SafeRoom[];
  rooms: RoomsColumn[];
}
const PropertyClient: React.FC<PropertyClientProps> = ({ rooms = [] }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

 
  return (
    <div className={`${styles.boxWidth} `}>
      <div className="my-3">
        {" "}
        <DataTable data={rooms} columns={roomcolumns} />
      </div>
      {/* {rooms.map((room) => (
          <RoomCard
            room={room}
            key={room.id}
            onAction={onDelete}
            actionLabel="Delete Room"
            actionId={room.id}
            disabled={isLoading}
          />
        ))} */}
    </div>
  );
};

export default PropertyClient;
