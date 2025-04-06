
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserSettings } from "@/services/settingsService";

interface ProfileSectionProps {
  settings: UserSettings;
  onSave: (data: Partial<UserSettings>) => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ settings, onSave }) => {
  const [formData, setFormData] = useState({
    full_name: settings?.full_name || "",
    email: settings?.email || "",
    phone_number: settings?.phone_number || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = () => {
    onSave(formData);
  };

  return (
    <>
      <div className="text-[13px] leading-loose mt-[31px]">
        Profile Information
      </div>
      
      <div className="mt-[13px]">Full Name</div>
      <div className="mt-[9px]">
        <Input
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="min-h-7 rounded-xl"
        />
      </div>
      
      <div className="mt-[13px]">Email Address</div>
      <div className="mt-[9px]">
        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="min-h-7 rounded-xl"
        />
      </div>
      
      <div className="mt-[13px]">Phone Number</div>
      <div className="mt-[9px]">
        <Input
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          onBlur={handleBlur}
          className="min-h-7 rounded-xl"
        />
      </div>
    </>
  );
};

export default ProfileSection;
