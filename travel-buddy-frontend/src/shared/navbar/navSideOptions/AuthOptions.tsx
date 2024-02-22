import React, { useState } from "react";
import { colorConfig } from "@/configs/colorConfig";
import { Button, Divider, IconButton, Tooltip } from "@mui/material";
import AuthIcon from "@mui/icons-material/LockPersonOutlined";
import CloseAuthPageIcon from "@mui/icons-material/CloseRounded";

const AuthOptions = () => {
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);

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
  return (
    <>
      <div className="block md:hidden">
        <Tooltip title="Sign In / Sign Up">
          <IconButton
            onClick={() => setIsAuthMenuOpen(!isAuthMenuOpen)}
            sx={{
              color: colorConfig.black,
              transition: ".3s",
              p: 0.3,
              "&:hover": {
                color: colorConfig.secondary,
              },
            }}
          >
            <AuthIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div
        className={`flex flex-col items-center justify-center h-screen w-full md:h-auto md:w-auto fixed top-0 bg-white px-4 md:px-0 md:block md:static ${
          isAuthMenuOpen ? "right-0 z-50" : "-right-[1000px]"
        } duration-300`}
      >
        <Tooltip title={"Close Search Menu"}>
          <IconButton
            sx={{
              position: "fixed",
              top: 16,
              right: `${isAuthMenuOpen ? "10px" : "-1000px"}`,
              color: colorConfig.black,
              transition: "0.3s",
            }}
            onClick={() => setIsAuthMenuOpen(false)}
          >
            <CloseAuthPageIcon
              sx={{
                fontSize: {
                  xs: 30,
                  md: 40,
                },
              }}
            />
          </IconButton>
        </Tooltip>
        <Button
          className="titleFont"
          sx={{
            ...commonButtonSx,
            color: colorConfig.black,
            border: {
              xs: `1px solid ${colorConfig.black}`,
              sm: "none",
            },
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
        <Divider
          sx={{
            my: 3,
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          Or
        </Divider>
        <Button
          variant="outlined"
          className="titleFont"
          sx={{
            ...commonButtonSx,
            color: colorConfig.white,
            background: `linear-gradient(45deg, ${colorConfig.primary}, ${colorConfig.secondary}) !important`,
            border: `1px solid ${colorConfig.white}`,
            "&:hover": {
              color: colorConfig.secondary,
              background: "none !important",
              border: `1px solid ${colorConfig.secondary}`,
            },
          }}
        >
          Sign In
        </Button>
      </div>
    </>
  );
};

export default AuthOptions;
