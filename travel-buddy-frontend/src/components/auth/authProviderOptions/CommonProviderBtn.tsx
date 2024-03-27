import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";

interface ILogo {
  src: string;
  width: number;
  height: number;
}

const CommonProviderBtn = ({ logo, title }: { logo: ILogo; title: string }) => {
  return (
    <>
      <IconButton
        sx={{
          width: "50px",
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <Image
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt="Google Logo"
          className=""
          priority
        />
      </IconButton>
      <Button
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
        }}
      >
        <Image
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt="Google Logo"
          className="w-[10%] h-[90%] object-contain"
          priority
        />
        <p className="text-black font-poppins font-normal w-[90%]">{title}</p>
      </Button>
    </>
  );
};

export default CommonProviderBtn;
