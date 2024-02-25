import React from "react";
import ContactMenuIcon from "@mui/icons-material/MoreVertOutlined";
import { IconButton } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const ContactUs = ({
  isScrolled,
  isHomePage,
}: {
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  return (
    <div className="hidden md:block">
      <IconButton
        sx={{
          color:
            !isScrolled && isHomePage ? colorConfig.white : colorConfig.black,
          transition: ".3s",
          p: 0.3,
          "&:hover": {
            color: colorConfig.secondary,
          },
        }}
      >
        <ContactMenuIcon sx={{ fontSize: 28 }} />
      </IconButton>
    </div>
  );
};

export default ContactUs;
