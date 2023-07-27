"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React from "react";

const SettingsClient = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex gap-3 my-3">
      {pathname === "/settings/bookings" ? (
        <Button onClick={() => router.push("/settings/properties")}>
          Properties
        </Button>
      ) : (
        <Button onClick={() => router.push("/settings/bookings")}>
          Bookings
        </Button>
      )}
    </div>
  );
};

export default SettingsClient;
