import { colorConfig } from "@/configs/colorConfig";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { Button, CircularProgress, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";

interface ILogo {
  src: string;
  width: number;
  height: number;
}

const CommonProviderBtn = ({
  logo,
  title,
  handleLogin,
  authMethod,
}: {
  logo: ILogo;
  title: string;
  handleLogin: any;
  authMethod: string;
}) => {
  const { Router } = UseCommonImports();

  const { method } = Router.query;

  return (
    <>
      <IconButton
        onClick={handleLogin}
        disabled={
          method !== undefined ||
          authMethod === "FACEBOOK" ||
          authMethod === "TWITTER"
        }
        sx={{
          width: "50px",
          display: {
            xs: "block",
            sm: "none",
          },
          ":disabled": {
            cursor: "not-allowed",
            pointerEvents: "all !important",
            opacity: 0.4,
            ":hover": {
              backgroundColor: "#00000000",
            },
          },
        }}
      >
        {method && authMethod === method ? (
          <CircularProgress />
        ) : (
          <Image
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt="Google Logo"
            className=""
            priority
          />
        )}
      </IconButton>
      <Button
        disabled={
          method !== undefined ||
          authMethod === "FACEBOOK" ||
          authMethod === "TWITTER"
        }
        onClick={handleLogin}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
          gap: 1,
          boxShadow: "0px 0px 6px -3px black",
          width: "100%",
          height: "50px",
          borderRadius: 100,
          ":disabled": {
            cursor: "not-allowed",
            pointerEvents: "all !important",
            opacity: 0.4,
            ":hover": {
              backgroundColor: "#00000000",
            },
          },
        }}
      >
        {method && authMethod === method ? (
          <CircularProgress sx={{ color: colorConfig.secondary }} />
        ) : (
          <>
            <Image
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt="Google Logo"
              className="w-[10%] h-[90%] object-contain"
              priority
            />
            <p className="text-black font-poppins font-normal w-[90%]">
              {title}
            </p>
          </>
        )}
      </Button>
    </>
  );
};

export default CommonProviderBtn;
