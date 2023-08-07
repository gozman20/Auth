"use client";

import { RoomsColumn } from "@/components/roomcolumn";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineMoreHoriz } from "react-icons/md";

interface CellActionProps {
  data: RoomsColumn;
}
const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();

  const onDelete = (id: string) => {
    axios
      .delete(`/api/rooms/${id}`)
      .then(() => {
        toast.success("Deleted");
        router.refresh();
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error);
      });
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-0">
            <span className="sr-only">Open menu</span>
            <MdOutlineMoreHoriz size={30} color="dark" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => router.push(`/settings/rooms/${data.id}`)}
          >
            <BiEdit size={25} className="mr-2" />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onDelete(data.id)}>
            <MdDeleteOutline size={25} className="mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CellAction;
