"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React from "react";

const SettingsNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex gap-6 ">
      <div
        className={`${
          pathname === "/settings" ? "font-semibold" : ""
        } p-1 rounded-lg cursor-pointer`}
        onClick={() => router.push("/settings")}
      >
        Customers
      </div>
      <div
        className={`${
          pathname === "/settings/rooms" ? "font-semibold" : ""
        } p-1 rounded-lg cursor-pointer`}
        onClick={() => router.push("/settings/rooms")}
      >
        Manage rooms
      </div>
    </div>
  );
};

export default SettingsNavbar;
