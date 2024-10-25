import { IconType } from "react-icons/lib";
import { Button, Tooltip } from "@mui/material";
import React from "react";
import { colorConfig } from "@/configs/colorConfig";

const ProfileAndDashboardSideNavButton = ({
  title,
  Icon,
  variant,
  color,
  backgroundColor,
  hoverColor,
  hoverBackgroundColor,
  radiusStyle,
  handlerFunction,
  isSideNavOpen,
}: {
  title: string;
  Icon: IconType;
  variant: "text" | "outlined" | "contained";
  color: string;
  backgroundColor: string;
  hoverColor: string;
  hoverBackgroundColor: string;
  radiusStyle: string;
  handlerFunction?: any;
  isSideNavOpen: boolean;
}) => {
  return (
    <Tooltip title={title}>
      <Button
        onClick={handlerFunction}
        variant={variant}
        sx={{
          color: color,
          background: `${backgroundColor} !important`,
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: {
            xs: "24px",
            md: isSideNavOpen ? 0 : "24px",
            lg: isSideNavOpen ? "24px" : 0,
          },
          px: {
            xs: "12px",
            lg: "16px",
          },
          height: "100%",
          borderRadius: radiusStyle,
          width: "100%",
          scale: {
            md: isSideNavOpen ? ".8" : "1",
            lg: isSideNavOpen ? "1" : ".8",
          },
          transition: ".8s",
          whiteSpace: "nowrap",
          ":hover": {
            color: hoverColor,
            background: hoverBackgroundColor,
          },
        }}
      >
        <Icon
          className={`lg:text-xl xl:text-2xl block ${
            isSideNavOpen ? "lg:w-full xl:w-auto" : "lg:w-auto xl:w-full"
          } duration-200`}
        />
        <span
          className={`font-inter text-xs xl:text-base normal-case whitespace-nowrap overflow-hidden ${
            isSideNavOpen
              ? "lg:opacity-0 xl:opacity-100 lg:w-0 xl:w-auto"
              : "lg:opacity-100 xl:opacity-0 lg:w-auto xl:w-0"
          } duration-300`}
        >
          {title}
        </span>
      </Button>
    </Tooltip>
  );
};

export default ProfileAndDashboardSideNavButton;
