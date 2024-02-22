import React from "react";
import { colorConfig } from "@/configs/colorConfig";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuRounded";
import CloseMenuIcon from "@mui/icons-material/CloseRounded";

const ResponsiveMenuHandlerButton = ({
  isNavOpen,
  setIsNavOpen,
}: {
  isNavOpen: boolean;
  setIsNavOpen: any;
}) => {
  return (
    <div className="block xl:hidden">
      <IconButton
        onClick={() => setIsNavOpen(!isNavOpen)}
        sx={{
          color: colorConfig.black,
          transition: ".3s",
          p: 0.3,
          "&:hover": {
            color: colorConfig.secondary,
          },
        }}
      >
        {isNavOpen ? <CloseMenuIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
};

export default ResponsiveMenuHandlerButton;
