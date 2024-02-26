import { colorConfig } from "@/configs/colorConfig";
import { Button } from "@mui/material";
import React from "react";

const CommonBtnWithIcon = ({ title, icon }: { title: string; icon: any }) => {
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
        color: colorConfig.white,
        px: 2,
        py: 1,
        borderRadius: "100px",
        whiteSpace: "nowrap",
      }}
    >
      <span>{title}</span>
      {icon}
    </Button>
  );
};

export default CommonBtnWithIcon;
