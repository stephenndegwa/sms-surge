import React from "react";
import BreadcrumbNav from "./BreadcrumbNav";
import SettingsTabs from "./SettingsTabs";
import ProfileSection from "./ProfileSection";
import CompanySection from "./CompanySection";
import PreferencesSection from "./PreferencesSection";

const SettingsPage: React.FC = () => {
  return (
    <div className="flex min-w-60 flex-col overflow-hidden items-center flex-1 shrink basis-[0%] pt-7 pb-[78px] px-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-[476px] max-w-full flex-col items-stretch">
        <div className="flex w-full flex-col text-[10px] text-neutral-950 font-[450] pl-2.5 max-md:max-w-full">
          <BreadcrumbNav />

          <div className="text-[17px] leading-[1.9] mt-[29px]">
            Account Settings
          </div>

          <div className="text-[#666666] text-[11px] leading-loose mt-[31px]">
            Manage your account preferences, notifications, and security
            settings
          </div>

          <SettingsTabs />

          <ProfileSection />
        </div>

        <div className="justify-center bg-[color(display-p3_0.9725_0.9725_0.9686)] flex min-h-7 overflow-hidden text-[10px] text-neutral-950 font-[450] whitespace-nowrap mt-[17px] px-4 py-2 rounded-xl max-md:mr-2.5">
          <div className="min-w-60 w-[358px] overflow-hidden">
            john.smith@company.com
          </div>
        </div>

        <div className="flex w-full flex-col text-[10px] text-neutral-950 font-[450] leading-loose mt-[5px] pl-2.5 max-md:max-w-full">
          <CompanySection />
        </div>

        <div className="text-[color(display-p3_0_0_0)] text-[11px] font-normal leading-none z-10 mt-[-15px] mr-[101px] max-md:mr-2.5">
          arrow_drop_down
        </div>

        <PreferencesSection />
      </div>
    </div>
  );
};

export default SettingsPage;
