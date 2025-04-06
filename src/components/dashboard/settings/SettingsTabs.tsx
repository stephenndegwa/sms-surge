import React, { useState } from "react";

interface SettingsTabProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const SettingsTab: React.FC<SettingsTabProps> = ({
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <div
      className={`self-stretch relative py-2 cursor-pointer ${isActive ? "text-[#121826]" : ""}`}
      onClick={onClick}
    >
      <div className="z-0">{label}</div>
      {isActive && (
        <div className="bg-[color(display-p3_0.0706_0.0941_0.149)] absolute z-0 flex min-h-px w-[35px] h-px -bottom-px inset-x-0" />
      )}
    </div>
  );
};

const SettingsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("General");

  const tabs = ["General", "Security", "Notifications", "Billing", "Team"];

  return (
    <div className="justify-center items-stretch border-b-[color(display-p3_0_0_0_/_0.10)] w-full text-[#7c7c7c] mt-[19px] pb-[11px] border-b border-solid max-md:max-w-full">
      <div className="flex w-full items-center gap-[17px] flex-1 h-full max-md:max-w-full">
        {tabs.map((tab) => (
          <SettingsTab
            key={tab}
            label={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
    </div>
  );
};

export default SettingsTabs;
