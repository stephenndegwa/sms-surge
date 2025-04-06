import React from "react";

interface BreadcrumbItemProps {
  label: string;
  isLast?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  label,
  isLast = false,
}) => {
  return (
    <div className="self-stretch flex items-center gap-1.5 my-auto pr-1.5">
      <div className="self-stretch my-auto">{label}</div>
      {!isLast && (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/faace0565f62426eaf915fab390727a2/3c4b20201a61378e683bcc583a455f2e8bd81f54?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[11px] self-stretch shrink-0 my-auto"
        />
      )}
    </div>
  );
};

const BreadcrumbNav: React.FC = () => {
  return (
    <div className="flex items-center gap-[3px] text-[#121826] whitespace-nowrap">
      <BreadcrumbItem label="Dashboard" />
      <BreadcrumbItem label="Management" />
      <div className="self-stretch my-auto">Settings</div>
    </div>
  );
};

export default BreadcrumbNav;
