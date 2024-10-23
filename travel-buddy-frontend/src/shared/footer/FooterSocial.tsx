import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const FooterSocial = ({ iconColor }: { iconColor: string }) => {
  const options = [
    {
      logo: <FacebookOutlinedIcon />,
      opacityDelay: ".4s",
    },
    {
      logo: <InstagramIcon />,
      opacityDelay: ".5s",
    },
    {
      logo: <XIcon />,
      opacityDelay: ".6s",
    },
    {
      logo: <YouTubeIcon />,
      opacityDelay: ".7s",
    },
    {
      logo: <LinkedInIcon />,
      opacityDelay: ".8s",
    },
  ];

  return (
    <div>
      <div className={`flex gap-4 items-center justify-center`}>
        {options.map((o, i) => (
          <IconButton
            key={i}
            sx={{
              color: iconColor,
              transition: ".3s",
              "&:hover": {
                color: colorConfig.primary,
                transform: "scale(1.4)",
              },
            }}
          >
            {o.logo}
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;
