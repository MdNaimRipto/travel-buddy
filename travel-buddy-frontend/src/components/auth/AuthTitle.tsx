import React from "react";
import HomeIcon from "@mui/icons-material/HomeRounded";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const AuthTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-2 items-center mb-5">
      <h2 className="titleFont text-3xl text-black font-medium">{title}</h2>
      <Tooltip title="Return To Home">
        <Link href="/">
          <HomeIcon
            sx={{
              fontSize: 20,
              color: colorConfig.black,
              transition: ".5s",
              ":hover": {
                color: colorConfig.secondary,
              },
            }}
          />
        </Link>
      </Tooltip>
    </div>
  );
};

export default AuthTitle;
