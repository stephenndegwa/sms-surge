
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserSettings } from "@/services/settingsService";

interface CompanySectionProps {
  settings: UserSettings;
  onSave: (data: Partial<UserSettings>) => void;
}

const CompanySection: React.FC<CompanySectionProps> = ({ settings, onSave }) => {
  const [formData, setFormData] = useState({
    company_name: settings?.company_name || "",
    business_address: settings?.business_address || "",
    industry: settings?.industry || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = () => {
    onSave(formData);
  };

  return (
    <>
      <div className="text-[13px] leading-loose mt-[30px]">Company Details</div>
      
      <div className="mt-[13px]">Company Name</div>
      <div className="mt-[7px]">
        <Input
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="min-h-7 rounded-xl"
        />
      </div>
      
      <div className="mt-[13px]">Business Address</div>
      <div className="mt-[9px]">
        <Textarea
          name="business_address"
          value={formData.business_address}
          onChange={handleChange}
          onBlur={handleBlur}
          className="min-h-[104px] rounded-xl resize-none"
        />
      </div>
      
      <div className="mt-[13px]">Industry</div>
      <div className="mt-[7px]">
        <Input
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          onBlur={handleBlur}
          className="min-h-7 rounded-xl"
        />
      </div>
    </>
  );
};

export default CompanySection;
