import React, { useState } from "react";

interface PreferenceItemProps {
  icon: string;
  title: string;
  value: string;
}

const PreferenceItem: React.FC<PreferenceItemProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <div className="self-stretch flex items-stretch gap-2 mt-3.5">
      <div className="text-sm text-[#314bf5] font-normal whitespace-nowrap leading-none">
        <div className="self-stretch bg-[color(display-p3_0.1922_0.2941_0.9608_/_0.05)] min-h-[31px] w-[31px] h-[31px] rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex flex-col text-[10px] text-[color(display-p3_0_0_0)] font-[450] leading-loose my-auto">
        <div>{title}</div>
        <div className="text-[color(display-p3_0_0_0_/_0.50)] mt-[7px]">
          {value}
        </div>
      </div>
    </div>
  );
};

interface SelectButtonProps {
  onClick: () => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({ onClick }) => {
  return (
    <div
      className="flex items-stretch gap-2 text-[10px] text-neutral-950 font-[450] whitespace-nowrap leading-loose mt-[34px] cursor-pointer"
      onClick={onClick}
    >
      <div className="my-auto">Select</div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/faace0565f62426eaf915fab390727a2/7c65276514151bbac5ed41c1b4d1c64501c5f3b7?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-[11px] shrink-0"
      />
    </div>
  );
};

const PreferencesSection: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex w-[381px] max-w-full items-stretch gap-5 justify-between ml-2.5 mt-[43px] max-md:mt-10">
      <div className="flex flex-col">
        <div className="text-neutral-950 text-[13px] font-[450] leading-loose">
          Preferences
        </div>

        <div className="flex items-stretch gap-2 mt-7">
          <div className="text-sm text-[#314bf5] font-normal whitespace-nowrap leading-none">
            <div className="self-stretch bg-[color(display-p3_0.1922_0.2941_0.9608_/_0.05)] min-h-[31px] w-[31px] h-[31px] rounded-xl flex items-center justify-center">
              schedule
            </div>
            <div className="self-stretch bg-[color(display-p3_0.1922_0.2941_0.9608_/_0.05)] min-h-[31px] w-[31px] h-[31px] mt-3.5 rounded-xl flex items-center justify-center">
              calendar_today
            </div>
          </div>
          <div className="flex flex-col text-[10px] text-[color(display-p3_0_0_0)] font-[450] leading-loose my-auto">
            <div>Time Zone</div>
            <div className="text-[color(display-p3_0_0_0_/_0.50)] self-stretch mt-[9px]">
              Pacific Time (UTC-08:00)
            </div>
            <div className="mt-5">Date Format</div>
            <div className="text-[color(display-p3_0_0_0_/_0.50)] mt-2.5">
              MM/DD/YYYY
            </div>
          </div>
        </div>

        <PreferenceItem icon="language" title="Language" value="English (US)" />

        <div className="self-stretch flex items-stretch gap-2 mt-3.5">
          <div className="text-sm text-[#314bf5] font-normal whitespace-nowrap leading-none">
            <div className="self-stretch bg-[color(display-p3_0.1922_0.2941_0.9608_/_0.05)] min-h-[31px] w-[31px] h-[31px] rounded-xl flex items-center justify-center">
              dark_mode
            </div>
          </div>
          <div className="flex flex-col text-[10px] text-[color(display-p3_0_0_0)] font-[450] leading-loose my-auto">
            <div>Dark Mode</div>
            <div className="text-[color(display-p3_0_0_0_/_0.50)] self-stretch mt-2.5">
              Use dark theme across the platform
            </div>
          </div>
        </div>

        <div className="flex w-[162px] max-w-full items-stretch gap-5 text-[10px] font-[450] text-center justify-between mt-[15px]">
          <button className="bg-[color(display-p3_0.1922_0.2941_0.9608)] min-h-7 text-white px-[11px] py-2 rounded-xl">
            Save Changes
          </button>
          <button className="border border-[color(display-p3_0.898_0.898_0.898)] min-h-[28px] text-[#314bf5] px-[12px] py-[8px] rounded-xl">
            Cancel
          </button>
        </div>
      </div>

      <div className="flex flex-col items-stretch my-auto">
        <SelectButton onClick={() => {}} />
        <SelectButton onClick={() => {}} />
        <SelectButton onClick={() => {}} />

        <div
          className="items-center bg-[color(display-p3_0.898_0.9059_0.9216)] flex min-h-[17px] ml-[15px] mt-[31px] pl-[3px] pr-[17px] rounded-full max-md:ml-2.5 cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        >
          <div
            className={`bg-[color(display-p3_1_1_1)] self-stretch flex min-h-[11px] w-[11px] h-[11px] my-auto rounded-full ${
              darkMode ? "ml-auto" : ""
            } transition-all duration-300`}
          />
        </div>
      </div>
    </div>
  );
};

export default PreferencesSection;
