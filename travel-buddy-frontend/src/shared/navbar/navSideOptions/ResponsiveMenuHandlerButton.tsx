import React from "react";
import { colorConfig } from "@/configs/colorConfig";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuRounded";
import CloseMenuIcon from "@mui/icons-material/CloseRounded";

const ResponsiveMenuHandlerButton = ({
  isNavOpen,
  setIsNavOpen,
  isScrolled,
  isHomePage,
}: {
  isNavOpen: boolean;
  setIsNavOpen: any;
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  return (
    <div className="block xl:hidden">
      <IconButton
        onClick={() => setIsNavOpen(!isNavOpen)}
        sx={{
          color:
            !isScrolled && isHomePage ? colorConfig.white : colorConfig.black,
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
