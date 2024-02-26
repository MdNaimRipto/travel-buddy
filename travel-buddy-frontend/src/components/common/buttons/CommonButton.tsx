import { colorConfig } from "@/configs/colorConfig";
import { Button } from "@mui/material";
import React from "react";

const CommonButton = ({ title }: { title: string }) => {
  return (
    <Button
      className="titleFont"
      sx={{
        background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
        color: colorConfig.white,
        fontWeight: 600,
        fontSize: 12,
        px: 3,
        py: "10px",
        borderRadius: "100px",
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

export default CommonButton;
