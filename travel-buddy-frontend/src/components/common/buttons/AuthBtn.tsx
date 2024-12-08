import { colorConfig } from "@/configs/colorConfig";
import { Button, CircularProgress } from "@mui/material";
import React from "react";

const AuthBtn = ({
  title,
  isLoading,
}: {
  title: string;
  isLoading: boolean;
}) => {
  return (
    <Button
      className="titleFont"
      type="submit"
      sx={{
        background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
        color: colorConfig.white,
        width: {
          xs: "100%",
          sm: "auto",
        },
        fontWeight: 600,
        fontSize: 14,
        px: 5,
        py: "10px",
        borderRadius: 2,
        transition: ".8s",
        "&:hover": {
          background: `linear-gradient(45deg, ${colorConfig.primary}, ${colorConfig.secondary}) !important`,
        },
      }}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <CircularProgress sx={{ color: colorConfig.white }} size={20} />{" "}
          Loading...
        </span>
      ) : (
        <span>{title}</span>
      )}
    </Button>
  );
};

export default AuthBtn;
