import { colorConfig } from "@/configs/colorConfig";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const commonButtonSx = {
  borderRadius: 100,
  py: {
    xs: "12px",
    sm: "4px",
    md: 1,
  },
  px: 2,
  fontSize: {
    xs: "12px",
    md: "0.875rem",
  },
  width: {
    xs: "100%",
    sm: "auto",
  },
  whiteSpace: "nowrap",
};

const AuthSignInButton = () => {
  return (
    <Link href="/auth/login" className="w-full">
      <Button
        variant="outlined"
        className="titleFont"
        sx={{
          ...commonButtonSx,
          color: colorConfig.white,
          background: `linear-gradient(45deg, ${colorConfig.primary}, ${colorConfig.secondary}) !important`,
          border: `1px solid ${colorConfig.secondary}`,
          "&:hover": {
            color: colorConfig.secondary,
            background: "none !important",
            border: `1px solid ${colorConfig.secondary}`,
          },
        }}
      >
        Sign In
      </Button>
    </Link>
  );
};

const AuthSignUpButton = ({
  isScrolled,
  isHomePage,
}: {
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  return (
    <Link href="/auth/register" className="w-full">
      <Button
        className="titleFont"
        sx={{
          ...commonButtonSx,
          color: {
            xs: colorConfig.black,
            sm:
              !isScrolled && isHomePage ? colorConfig.white : colorConfig.black,
          },
          border: {
            xs: `1px solid ${colorConfig.black}`,
            sm: "none",
          },
          transition: ".3s",
          "&:hover": {
            color: colorConfig.secondary,
            border: {
              xs: `1px solid ${colorConfig.secondary}`,
              sm: "none",
            },
          },
        }}
      >
        Sign Up
      </Button>
    </Link>
  );
};

export const AuthButtons = {
  AuthSignInButton,
  AuthSignUpButton,
};
