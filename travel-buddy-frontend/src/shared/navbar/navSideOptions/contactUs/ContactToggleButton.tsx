import { colorConfig } from "@/configs/colorConfig";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import CropDinRoundedIcon from "@mui/icons-material/CropDinRounded";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

interface IToggleButton {
  isScrolled: boolean;
  isHomePage: boolean;
  setIsContactOpen: any;
  isNavOpen: boolean;
}

const ContactToggleButton = ({
  isScrolled,
  isHomePage,
  setIsContactOpen,
  isNavOpen,
}: IToggleButton) => {
  return (
    <Tooltip title="Contact Us">
      <IconButton
        disabled={isNavOpen}
        onClick={() => setIsContactOpen(true)}
        sx={{
          color:
            !isScrolled && isHomePage ? colorConfig.white : colorConfig.black,
          transition: ".7s",
          p: 0.3,
          "&:hover": {
            color: colorConfig.secondary,
          },
          "&:disabled": {
            color:
              !isScrolled && isHomePage ? colorConfig.white : colorConfig.black,
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
    </Tooltip>
  );
};

export default ContactToggleButton;
