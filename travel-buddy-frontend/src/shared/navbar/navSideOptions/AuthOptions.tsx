import React, { useState } from "react";
import { colorConfig } from "@/configs/colorConfig";
import { Divider, IconButton, Tooltip } from "@mui/material";
import AuthIcon from "@mui/icons-material/LockPersonOutlined";
import CloseAuthPageIcon from "@mui/icons-material/CloseRounded";
import { AuthButtons } from "@/components/common/buttons/AuthButtons";

const AuthOptions = ({
  isScrolled,
  isHomePage,
}: {
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);

  const { AuthSignInButton, AuthSignUpButton } = AuthButtons;

  return (
    <>
      <div className="block md:hidden">
        <Tooltip title="Sign In / Sign Up">
          <IconButton
            onClick={() => setIsAuthMenuOpen(!isAuthMenuOpen)}
            sx={{
              color:
                !isScrolled && isHomePage
                  ? colorConfig.white
                  : colorConfig.black,
              transition: ".7s",
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
        className={`bg-white md:bg-[#00000000] flex flex-col items-center justify-center md:h-auto md:w-auto fixed top-0 px-4 md:px-0 md:block md:static ${
          isAuthMenuOpen
            ? "right-0 z-50 h-screen w-full"
            : "-right-[1000px] w-0 h-0"
        } duration-1000 ease-in-out`}
      >
        <Tooltip title={"Close Search Menu"}>
          <IconButton
            sx={{
              position: "fixed",
              top: 16,
              right: `${isAuthMenuOpen ? "10px" : "-1000px"}`,
              color: colorConfig.black,
              transition: "1s ease-in-out",
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
        <AuthSignUpButton isScrolled={isScrolled} isHomePage={isHomePage} />
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
        <AuthSignInButton />
      </div>
    </>
  );
};

export default AuthOptions;
