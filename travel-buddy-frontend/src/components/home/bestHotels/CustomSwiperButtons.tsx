import { IconButton } from "@mui/material";
import React from "react";
import { useSwiper } from "swiper/react";
import NavigationIcon from "@mui/icons-material/DoubleArrow";
import { colorConfig } from "@/configs/colorConfig";

const CustomSwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute bottom-0 right-2 z-50 flex items-center gap-2">
      <IconButton
        sx={{
          background: `${colorConfig.lightGray} !important`,
          color: colorConfig.white,
          transform: "rotate(-180deg)",
        }}
        onClick={() => swiper.slidePrev()}
      >
        <NavigationIcon />
      </IconButton>
      <IconButton
        sx={{
          background: `linear-gradient(45deg, ${colorConfig.primary}, ${colorConfig.secondary}) !important`,
          color: colorConfig.white,
        }}
        onClick={() => swiper.slideNext()}
      >
        <NavigationIcon />
      </IconButton>
    </div>
  );
};

export default CustomSwiperButtons;
