import React from "react";
import {
  FaFacebookF as FacebookIcon,
  FaInstagram as InstagramIcon,
  FaTwitter as XIcon,
  FaLinkedin as LinkedInIcon,
  FaEdit as EditIcon,
} from "react-icons/fa";
import { colorConfig } from "@/configs/colorConfig";
import { Avatar, Button, IconButton } from "@mui/material";

const ProfileUserDetailsLeftContent = () => {
  const options = [
    {
      logo: FacebookIcon,
    },
    {
      logo: InstagramIcon,
    },
    {
      logo: XIcon,
    },
    {
      logo: LinkedInIcon,
    },
  ];
  return (
    <div className="col-span-1 lg:border-r lg:border-r-extraLightGray flex flex-col gap-4 items-center lg:pr-8 py-8">
      <IconButton
        sx={{
          p: 0,
          bg: "none",
          position: "relative",
        }}
      >
        <Avatar
          src=""
          sx={{
            width: 100,
            height: 100,
          }}
        />
        <EditIcon className="absolute bottom-1 right-0 bg-white p-0" />
      </IconButton>
      <h2 className="text-xl lg:text-base xl:text-xl font-inter text-black mt-5 whitespace-nowrap overflow-hidden">
        MD Naimur Rahman
      </h2>
      <h6 className="font-inter text-sm lg:text-xs xl:text-sm text-gray font-light whitespace-nowrap overflow-hidden">
        Customer
      </h6>
      <h6 className="font-inter text-sm lg:text-xs xl:text-sm text-gray font-light mb-3 whitespace-nowrap overflow-hidden">
        Member Since: 12-03-2024
      </h6>
      <Button
        sx={{
          borderRadius: 0,
          background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
          color: colorConfig.white,
          width: "60%",
          textTransform: "none",
        }}
      >
        <span className="font-inter mr-2 whitespace-nowrap overflow-hidden">
          Edit Profile
        </span>
        <EditIcon />
      </Button>
      <div className="flex items-center justify-center gap-1 mt-3">
        {options.map((o, i) => (
          <IconButton
            key={i}
            sx={{
              background: colorConfig.white,
              color: colorConfig.lightGray,
              transition: ".8s",
            }}
          >
            {<o.logo className="text-lg" />}
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default ProfileUserDetailsLeftContent;
