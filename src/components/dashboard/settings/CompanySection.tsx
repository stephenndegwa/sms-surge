import React from "react";

interface InputFieldProps {
  label: string;
  value: string;
  isTextarea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  isTextarea = false,
}) => {
  return (
    <>
      <div className="mt-[13px]">{label}</div>
      {isTextarea ? (
        <div className="bg-[color(display-p3_0.9725_0.9725_0.9686)] self-stretch min-h-[104px] overflow-hidden leading-5 mt-[9px] pl-[11px] pr-[121px] pt-[5px] pb-[79px] rounded-xl max-md:pr-5">
          {value}
        </div>
      ) : (
        <div className="justify-center bg-[color(display-p3_0.9725_0.9725_0.9686)] self-stretch flex min-h-7 overflow-hidden mt-[7px] px-4 py-2 rounded-xl">
          <div className="min-w-60 w-[358px] overflow-hidden">{value}</div>
        </div>
      )}
    </>
  );
};

const CompanySection: React.FC = () => {
  return (
    <>
      <div className="text-[13px] leading-loose mt-[30px]">Company Details</div>
      <InputField label="Company Name" value="Acme Corporation" />
      <InputField
        label="Business Address"
        value="123 Business Ave, Suite 100, San Francisco, CA 94107"
        isTextarea={true}
      />
      <InputField label="Industry" value="Technology" />
    </>
  );
};

export default CompanySection;
