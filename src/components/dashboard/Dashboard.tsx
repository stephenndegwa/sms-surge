import React from "react";
import Sidebar from "./Sidebar";
import SettingsPage from "./settings/SettingsPage";

const Dashboard: React.FC = () => {
  return (
    <div className="items-stretch bg-[color(display-p3_1_1_1)] flex max-w-[840px] gap-[-85px] overflow-hidden flex-wrap">
      <Sidebar />
      <SettingsPage />
    </div>
  );
};

export default Dashboard;
