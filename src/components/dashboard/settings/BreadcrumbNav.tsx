
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
        <span className="material-symbols text-sm">chevron_right</span>
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
