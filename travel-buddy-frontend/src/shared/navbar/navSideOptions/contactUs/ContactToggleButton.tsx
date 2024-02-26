import { colorConfig } from "@/configs/colorConfig";
import { IconButton } from "@mui/material";
import React from "react";
import CropDinRoundedIcon from "@mui/icons-material/CropDinRounded";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

interface IToggleButton {
  isScrolled: boolean;
  isHomePage: boolean;
  setIsContactOpen: any;
}

const ContactToggleButton = ({
  isScrolled,
  isHomePage,
  setIsContactOpen,
}: IToggleButton) => {
  return (
    <IconButton
      onClick={() => setIsContactOpen(true)}
      sx={{
        color:
          !isScrolled && isHomePage ? colorConfig.white : colorConfig.black,
        transition: ".7s",
        p: 0.3,
        "&:hover": {
          color: colorConfig.secondary,
        },
      }}
    >
      <div className="grid grid-cols-2 gap-[1px]">
        <CropDinRoundedIcon sx={{ fontSize: 14 }} />
        <CropDinRoundedIcon sx={{ fontSize: 14 }} />
        <CropDinRoundedIcon sx={{ fontSize: 14 }} />
        <CircleOutlinedIcon sx={{ fontSize: 14 }} />
      </div>
    </IconButton>
  );
};

export default ContactToggleButton;
