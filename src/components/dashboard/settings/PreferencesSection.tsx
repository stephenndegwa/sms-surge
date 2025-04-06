
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserSettings } from "@/services/settingsService";

interface PreferenceItemProps {
  icon: string;
  title: string;
  value: string;
  options?: string[];
  onSelect?: (value: string) => void;
}

const PreferenceItem: React.FC<PreferenceItemProps> = ({
  icon,
  title,
  value,
  options,
  onSelect,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="self-stretch flex items-stretch gap-2 mt-3.5 relative">
      <div className="text-sm text-[#314bf5] font-normal whitespace-nowrap leading-none">
        <div className="self-stretch bg-[color(display-p3_0.1922_0.2941_0.9608_/_0.05)] min-h-[31px] w-[31px] h-[31px] rounded-xl flex items-center justify-center">
          <span className="material-symbols">{icon}</span>
        </div>
      </div>
      <div className="flex flex-col text-[10px] text-[color(display-p3_0_0_0)] font-[450] leading-loose my-auto">
        <div>{title}</div>
        <div 
          className="text-[color(display-p3_0_0_0_/_0.50)] mt-[7px] cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {value}
        </div>
        
        {showDropdown && options && (
          <div className="absolute top-full left-[40px] mt-1 bg-white shadow-lg rounded-md z-50">
            {options.map((option) => (
              <div 
                key={option} 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  if (onSelect) onSelect(option);
                  setShowDropdown(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface PreferencesSectionProps {
  settings: UserSettings;
  onSave: (data: Partial<UserSettings>) => void;
}

const PreferencesSection: React.FC<PreferencesSectionProps> = ({ 
  settings,
  onSave 
}) => {
  const [formData, setFormData] = useState({
    timezone: settings?.timezone || "Pacific Time (UTC-08:00)",
    date_format: settings?.date_format || "MM/DD/YYYY",
    language: settings?.language || "English (US)",
    dark_mode: settings?.dark_mode || false,
  });

  const [isDirty, setIsDirty] = useState(false);

  const updateFormData = (key: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setIsDirty(true);
  };

  const handleSave = () => {
    onSave(formData);
    setIsDirty(false);
  };

  const timezones = [
    "Pacific Time (UTC-08:00)",
    "Mountain Time (UTC-07:00)",
    "Central Time (UTC-06:00)",
    "Eastern Time (UTC-05:00)",
  ];

  const dateFormats = [
    "MM/DD/YYYY",
    "DD/MM/YYYY",
    "YYYY-MM-DD",
  ];

  const languages = [
    "English (US)",
    "English (UK)",
    "Spanish",
    "French",
    "German",
  ];

  return (
    <div className="flex w-[381px] max-w-full items-stretch gap-5 justify-between ml-2.5 mt-[43px] max-md:mt-10">
      <div className="flex flex-col">
        <div className="text-neutral-950 text-[13px] font-[450] leading-loose">
          Preferences
        </div>

        <div className="flex items-stretch gap-2 mt-7">
          <div className="text-sm text-[#314bf5] font-normal whitespace-nowrap leading-none">
            <div className="self-stretch bg-[color(display-p3_0.1922_0.2941_0.9608_/_0.05)] min-h-[31px] w-[31px] h-[31px] rounded-xl flex items-center justify-center">
              <span className="material-symbols">schedule</span>
            </div>
            <div className="self-stretch bg-[color(display-p3_0.1922_0.2941_0.9608_/_0.05)] min-h-[31px] w-[31px] h-[31px] mt-3.5 rounded-xl flex items-center justify-center">
              <span className="material-symbols">calendar_today</span>
            </div>
          </div>
          <div className="flex flex-col text-[10px] text-[color(display-p3_0_0_0)] font-[450] leading-loose my-auto">
            <div>Time Zone</div>
            <div 
              className="text-[color(display-p3_0_0_0_/_0.50)] self-stretch mt-[9px] cursor-pointer"
              onClick={() => {
                const dropdown = document.getElementById("timezone-dropdown");
                if (dropdown) dropdown.classList.toggle("hidden");
              }}
            >
              {formData.timezone}
            </div>
            <div id="timezone-dropdown" className="hidden absolute mt-[45px] ml-[-10px] bg-white shadow-lg rounded-md z-50">
              {timezones.map((tz) => (
                <div 
                  key={tz} 
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    updateFormData("timezone", tz);
                    document.getElementById("timezone-dropdown")?.classList.add("hidden");
                  }}
                >
                  {tz}
                </div>
              ))}
            </div>
            <div className="mt-5">Date Format</div>
            <div 
              className="text-[color(display-p3_0_0_0_/_0.50)] mt-2.5 cursor-pointer"
              onClick={() => {
                const dropdown = document.getElementById("dateformat-dropdown");
                if (dropdown) dropdown.classList.toggle("hidden");
              }}
            >
              {formData.date_format}
            </div>
            <div id="dateformat-dropdown" className="hidden absolute mt-[75px] ml-[-10px] bg-white shadow-lg rounded-md z-50">
              {dateFormats.map((format) => (
                <div 
                  key={format} 
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    updateFormData("date_format", format);
                    document.getElementById("dateformat-dropdown")?.classList.add("hidden");
                  }}
                >
                  {format}
                </div>
              ))}
            </div>
          </div>
        </div>

        <PreferenceItem 
          icon="language" 
          title="Language" 
          value={formData.language}
          options={languages}
          onSelect={(value) => updateFormData("language", value)}
        />

        <div className="self-stretch flex items-stretch gap-2 mt-3.5">
          <div className="text-sm text-[#314bf5] font-normal whitespace-nowrap leading-none">
            <div className="self-stretch bg-[color(display-p3_0.1922_0.2941_0.9608_/_0.05)] min-h-[31px] w-[31px] h-[31px] rounded-xl flex items-center justify-center">
              <span className="material-symbols">dark_mode</span>
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
          <Button
            className={`bg-[color(display-p3_0.1922_0.2941_0.9608)] min-h-7 text-white px-[11px] py-2 rounded-xl ${
              !isDirty ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSave}
            disabled={!isDirty}
          >
            Save Changes
          </Button>
          <Button
            className={`border border-[color(display-p3_0.898_0.898_0.898)] min-h-[28px] text-[#314bf5] px-[12px] py-[8px] rounded-xl ${
              !isDirty ? "opacity-50 cursor-not-allowed" : ""
            }`}
            variant="outline"
            onClick={() => {
              setFormData({
                timezone: settings?.timezone || "Pacific Time (UTC-08:00)",
                date_format: settings?.date_format || "MM/DD/YYYY",
                language: settings?.language || "English (US)",
                dark_mode: settings?.dark_mode || false,
              });
              setIsDirty(false);
            }}
            disabled={!isDirty}
          >
            Cancel
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-stretch my-auto">
        <div className="items-center bg-[color(display-p3_0.898_0.9059_0.9216)] flex min-h-[17px] ml-[15px] mt-[31px] pl-[3px] pr-[17px] rounded-full max-md:ml-2.5 cursor-pointer">
          <div
            className={`bg-[color(display-p3_1_1_1)] self-stretch flex min-h-[11px] w-[11px] h-[11px] my-auto rounded-full ${
              formData.dark_mode ? "ml-auto" : ""
            } transition-all duration-300`}
            onClick={() => updateFormData("dark_mode", !formData.dark_mode)}
          />
        </div>
      </div>
    </div>
  );
};

export default PreferencesSection;
