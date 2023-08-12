"use client";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import React from "react";
import PropertyClient from "./RoomsClient";
import { useRouter } from "next/navigation";
type Props = {
  id: string;
  name: string;
  description: string;
  guest: string;
};
interface SettingsProps {
  formattedRoom: Props[];
}
const SettingsPage: React.FC<SettingsProps> = ({ formattedRoom }) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading title={`Rooms (${formattedRoom.length})`} />
        <div className="flex justify-end gap-y-2">
          {" "}
          <Button
            variant="default"
            onClick={() =>
              router.push("/settings/rooms/64d165432590976543267856")
            }
          >
            Add new
          </Button>
        </div>
      </div>

      <div>
        <PropertyClient rooms={formattedRoom} />
      </div>
    </div>
  );
};

export default SettingsPage;
