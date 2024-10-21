import { colorConfig } from "@/configs/colorConfig";
import React from "react";
import { FaPlus as ExpandIcon } from "react-icons/fa6";

const SideNavTitle = ({
  title,
  isOpen,
}: {
  title: string;
  isOpen: boolean;
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h5 className="font-poppins text-sm md:text-base font-medium text-black">
        {title}
      </h5>
      <ExpandIcon
        // size={24}
        color={colorConfig.black}
        className={`${
          isOpen ? "rotate-45 duration-300" : "rotate-0 duration-300"
        } text-lg md:text-2xl`}
      />
    </div>
  );
};

export default SideNavTitle;
