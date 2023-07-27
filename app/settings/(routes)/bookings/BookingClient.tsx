"use client";
import React, { useState } from "react";
import { SafeReservation } from "@/types";
import RoomCard from "@/components/rooms/RoomCard";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { BookingColumn, columns } from "@/components/column";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";

interface BookingClientprops {
  reservations: BookingColumn[];
}
const BookingClient: React.FC<BookingClientprops> = ({ reservations = [] }) => {
  const router = useRouter();

  return (
    <>
      <DataTable columns={columns} data={reservations} />
    </>
  );
};

export default BookingClient;
