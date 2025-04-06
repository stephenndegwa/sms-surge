import React from "react";

interface SidebarLinkProps {
  icon: string;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, label }) => {
  return (
    <div className="flex h-[22px] w-full items-center gap-2 pl-2 pr-[69px] pb-px rounded-lg max-md:pr-5">
      <div className="text-[color(display-p3_0_0_0)] text-sm font-normal leading-none self-stretch my-auto">
        {icon}
      </div>
      <div className="text-neutral-950 text-[10px] font-[450] leading-6 self-stretch my-auto">
        {label}
      </div>
    </div>
  );
};

interface SidebarSectionProps {
  title: string;
  links: { icon: string; label: string }[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, links }) => {
  return (
    <>
      <div className="text-neutral-950 text-[8px] font-[450] leading-[3] ml-[22px] mt-4 max-md:ml-2.5">
        {title}
      </div>
      <div className="w-full mt-3 px-3.5">
        {links.map((link, index) => (
          <SidebarLink key={index} icon={link.icon} label={link.label} />
        ))}
      </div>
    </>
  );
};

const Sidebar: React.FC = () => {
  const mainLinks = [
    { icon: "dashboard", label: "Dashboard" },
    { icon: "campaign", label: "Campaigns" },
    { icon: "contacts", label: "Contacts" },
  ];

  const messagingLinks = [
    { icon: "send", label: "Send SMS" },
    { icon: "description", label: "Templates" },
    { icon: "schedule", label: "Scheduled" },
  ];

  const managementLinks = [
    { icon: "analytics", label: "Analytics" },
    { icon: "assessment", label: "Reports" },
    { icon: "shopping_cart", label: "Purchases" },
    { icon: "settings", label: "Settings" },
  ];

  const developerLinks = [
    { icon: "vpn_key", label: "API Keys" },
    { icon: "code", label: "Documentation" },
    { icon: "webhook", label: "Webhooks" },
  ];

  return (
    <div className="bg-[color(display-p3_0.1922_0.2941_0.9608_/_0.05)] flex flex-col items-stretch w-[179px] pt-[39px] pb-5">
      <div className="w-full whitespace-nowrap px-3.5">
        {mainLinks.map((link, index) => (
          <SidebarLink key={index} icon={link.icon} label={link.label} />
        ))}
      </div>

      <SidebarSection title="MESSAGING" links={messagingLinks} />
      <SidebarSection title="MANAGEMENT" links={managementLinks} />
      <SidebarSection title="DEVELOPERS" links={developerLinks} />

      <div className="justify-center items-center bg-[color(display-p3_0.851_0.851_0.851)] flex min-h-3.5 w-3.5 flex-col overflow-hidden h-3.5 ml-[17px] mt-[580px] rounded-full max-md:ml-2.5 max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/faace0565f62426eaf915fab390727a2/8e6285dcd336ac052f5c4b042d516ea9aa3a6989?placeholderIfAbsent=true"
          className="aspect-[0.71] object-contain w-full max-w-2.5 flex-1"
        />
      </div>
    </div>
  );
};

export default Sidebar;
