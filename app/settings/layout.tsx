import React from "react";
import SettingsClient from "./SettingsClient";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SettingsClient />
      {children}
    </div>
  );
};

export default SettingsLayout;
