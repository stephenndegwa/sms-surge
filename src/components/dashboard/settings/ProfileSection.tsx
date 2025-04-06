import React from "react";

interface InputFieldProps {
  label: string;
  value: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value }) => {
  return (
    <>
      <div className="leading-loose mt-[13px]">{label}</div>
      <div className="justify-center bg-[color(display-p3_0.9725_0.9725_0.9686)] self-stretch flex min-h-7 overflow-hidden mt-[9px] px-4 py-2 rounded-xl">
        <div className="min-w-60 w-[358px] overflow-hidden">{value}</div>
      </div>
    </>
  );
};

const ProfileSection: React.FC = () => {
  return (
    <>
      <div className="text-[13px] leading-loose mt-[31px]">
        Profile Information
      </div>
      <InputField label="Full Name" value="John Smith" />
      <InputField label="Email Address" value="john.smith@company.com" />
      <InputField label="Phone Number" value="+1 (555) 123-4567" />
    </>
  );
};

export default ProfileSection;
