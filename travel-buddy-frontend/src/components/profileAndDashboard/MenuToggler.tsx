import { colorConfig } from "@/configs/colorConfig";
import { IconButton } from "@mui/material";
import React from "react";
import { IoIosSettings } from "react-icons/io";

const MenuToggler = ({
  isSideNavOpen,
  setIsSideNavOpen,
}: {
  isSideNavOpen: boolean;
  setIsSideNavOpen: any;
}) => {
  return (
    <IconButton
      onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      sx={{
        position: "fixed",
        bottom: 55,
        right: 5,
        background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
        borderRadius: 1,
        zIndex: 1,
      }}
    >
      <IoIosSettings
        style={{
          fontSize: "2rem",
          color: "white",
          animation: "spin 4s linear infinite", // slower animation (10s duration)
        }}
      />
    </IconButton>
  );
};

export default MenuToggler;
