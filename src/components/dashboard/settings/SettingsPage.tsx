
import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import BreadcrumbNav from "./BreadcrumbNav";
import SettingsTabs from "./SettingsTabs";
import ProfileSection from "./ProfileSection";
import CompanySection from "./CompanySection";
import PreferencesSection from "./PreferencesSection";
import { fetchUserSettings, updateUserSettings, UserSettings } from "@/services/settingsService";

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await fetchUserSettings();
        setSettings(data || {
          full_name: "John Smith",
          email: "john.smith@company.com",
          phone_number: "+1 (555) 123-4567",
          company_name: "Acme Corporation",
          business_address: "123 Business Ave, Suite 100, San Francisco, CA 94107",
          industry: "Technology",
          timezone: "Pacific Time (UTC-08:00)",
          date_format: "MM/DD/YYYY",
          language: "English (US)",
          dark_mode: false
        });
      } catch (error) {
        console.error("Error loading settings:", error);
        toast({
          title: "Error",
          description: "Failed to load settings",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, [toast]);

  const handleSaveSettings = async (data: Partial<UserSettings>) => {
    if (!settings) return;
    
    try {
      const updatedSettings = await updateUserSettings({
        ...settings,
        ...data,
      });
      
      if (updatedSettings) {
        setSettings(updatedSettings);
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      toast({
        title: "Error",
        description: "Failed to save settings",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex min-w-60 flex-col overflow-hidden items-center flex-1 shrink basis-[0%] pt-7 pb-[78px] px-20 max-md:max-w-full max-md:px-5">
        <div className="animate-pulse w-full h-[500px] bg-gray-200 rounded-md"></div>
      </div>
    );
  }

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

          {settings && (
            <ProfileSection settings={settings} onSave={handleSaveSettings} />
          )}
        </div>

        <div className="justify-center bg-[color(display-p3_0.9725_0.9725_0.9686)] flex min-h-7 overflow-hidden text-[10px] text-neutral-950 font-[450] whitespace-nowrap mt-[17px] px-4 py-2 rounded-xl max-md:mr-2.5">
          <div className="min-w-60 w-[358px] overflow-hidden">
            {settings?.email || "john.smith@company.com"}
          </div>
        </div>

        <div className="flex w-full flex-col text-[10px] text-neutral-950 font-[450] leading-loose mt-[5px] pl-2.5 max-md:max-w-full">
          {settings && (
            <CompanySection settings={settings} onSave={handleSaveSettings} />
          )}
        </div>

        <div className="text-[color(display-p3_0_0_0)] text-[11px] font-normal leading-none z-10 mt-[-15px] mr-[101px] max-md:mr-2.5">
          <span className="material-symbols">arrow_drop_down</span>
        </div>

        {settings && (
          <PreferencesSection settings={settings} onSave={handleSaveSettings} />
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
