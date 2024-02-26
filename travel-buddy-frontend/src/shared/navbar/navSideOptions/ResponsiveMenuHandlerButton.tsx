import React from "react";
import { IconButton } from "@mui/material";

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
  const commonStyle = `w-6 h-[2px] rounded ${
    !isScrolled && isHomePage ? "bg-white" : "bg-black"
  } group-hover:bg-primary absolute left-0 duration-700`;
  return (
    <IconButton
      onClick={() => setIsNavOpen(!isNavOpen)}
      sx={{
        p: 0.3,
        "&:hover": {
          background: "none",
        },
        display: {
          xs: "block",
          lg: "none",
        },
        width: 26,
        height: 20,
        overflow: "hidden",
        borderRadius: 0,
      }}
    >
      <div className="relative w-full h-full overflow-hidden group">
        <p
          className={`${commonStyle} top-0 ${
            isNavOpen ? "opacity-0" : "opacity-100"
          }`}
        ></p>
        <p
          className={`${commonStyle} top-1/2 -translate-y-1/2 ${
            isNavOpen ? "rotate-45" : "rotate-0"
          }`}
        ></p>
        <p
          className={`${commonStyle} top-1/2 -translate-y-1/2 ${
            isNavOpen ? "-rotate-45" : "rotate-90   opacity-0"
          }`}
        ></p>
        <p
          className={`${commonStyle} bottom-0 ${
            isNavOpen ? "opacity-0" : "opacity-100"
          }`}
        ></p>
      </div>
    </IconButton>
  );
};

export default ResponsiveMenuHandlerButton;
