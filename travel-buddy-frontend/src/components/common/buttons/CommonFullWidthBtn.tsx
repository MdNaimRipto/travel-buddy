import { colorConfig } from "@/configs/colorConfig";
import { Button } from "@mui/material";
import React from "react";

const CommonFullWidthBtn = ({ title }: { title: string }) => {
  return (
    <Button
      className="titleFont"
      sx={{
        background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
        color: colorConfig.white,
        fontWeight: 600,
        fontSize: 15,
        width: "100%",
        py: "10px",
        transition: ".8s",
        "&:hover": {
          background: `linear-gradient(45deg, ${colorConfig.primary}, ${colorConfig.secondary}) !important`,
        },
      }}
    >
      {title}
    </Button>
  );
};

export default CommonFullWidthBtn;
