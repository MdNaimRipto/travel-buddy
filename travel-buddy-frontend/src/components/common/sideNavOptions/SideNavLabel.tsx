import React from "react";

const SideNavLabel = ({ option: o }: { option: { label: string } }) => {
  return (
    <p className="font-inter text-xs md:text-sm text-black font-medium md:font-normal whitespace-nowrap">
      {o.label.length >= 18 ? `${o.label.slice(0, 18)}...` : o.label}
    </p>
  );
};

export default SideNavLabel;
