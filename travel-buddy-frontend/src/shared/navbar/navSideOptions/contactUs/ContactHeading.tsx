import { colorConfig } from "@/configs/colorConfig";
import { IconButton } from "@mui/material";
import React from "react";
import CloseMenuIcon from "@mui/icons-material/CloseRounded";

const ContactHeading = ({ setIsContactOpen }: { setIsContactOpen: any }) => {
  return (
    <div className="flex items-center justify-between px-3 py-8">
      <div>
        <h2 className="uppercase text-xl titleFont font-medium text-black">
          Contact Us
        </h2>
      </div>
      <IconButton
        onClick={() => setIsContactOpen(false)}
        sx={{
          color: colorConfig.black,
          transition: ".3s",
          p: 0.4,
          border: `1px solid`,
          "&:hover": {
            color: colorConfig.secondary,
          },
        }}
      >
        <CloseMenuIcon sx={{ fontSize: 28 }} />
      </IconButton>
    </div>
  );
};

export default ContactHeading;
