"use client";

import CellAction from "@/app/settings/(routes)/properties/CellAction";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RoomsColumn = {
  id: string;
  name: string;
  description: string;
  guest: number;
};

export const roomcolumns: ColumnDef<RoomsColumn>[] = [
  {
    accessorKey: "id",
    header: " Room id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "guest",
    header: "Guest",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  { id: "actions", cell: ({ row }) => <CellAction data={row.original} /> },
];
