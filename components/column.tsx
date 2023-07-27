"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BookingColumn = {
  id: string;
  arrival: string;
  departure: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string | null;
};

export const columns: ColumnDef<BookingColumn>[] = [
  {
    accessorKey: "id",
    header: " Booking id",
  },
  {
    accessorKey: "firstname",
    header: "First Name",
  },
  {
    accessorKey: "lastname",
    header: "Last Name",
  },
  {
    accessorKey: "arrival",
    header: "Arrival Date",
  },
  {
    accessorKey: "departure",
    header: "Departure Date",
  },
];
