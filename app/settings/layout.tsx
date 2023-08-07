import React from "react";
import SettingsNavbar from "./components/SettingsNavbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-10 ">
        {" "}
        <SettingsNavbar />
      </div>
      <div>{children}</div>
    </div>
  );
}
