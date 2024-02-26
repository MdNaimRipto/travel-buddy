import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const OtherContactOptions = ({ isContactOpen }: { isContactOpen: boolean }) => {
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
    <div className="grid grid-cols-5 gap-4 items-center justify-items-center px-10 mb-8">
      {options.map((o, i) => (
        <IconButton
          key={i}
          sx={{
            background: `linear-gradient(45deg, ${colorConfig.primary}, ${colorConfig.secondary}) !important`,
            color: colorConfig.white,
            opacity: isContactOpen ? 1 : 0,
            mt: isContactOpen ? 0 : 3,
            transition: ".8s",
            transitionDelay: isContactOpen ? o.opacityDelay : "0s",
          }}
        >
          {o.logo}
        </IconButton>
      ))}
    </div>
  );
};

export default OtherContactOptions;
