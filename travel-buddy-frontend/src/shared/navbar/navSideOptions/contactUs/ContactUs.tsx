import React, { useEffect, useRef, useState } from "react";
import ContactMenuIcon from "@mui/icons-material/MoreVertOutlined";
import { Divider, IconButton } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import CommonFullWidthBtn from "@/components/common/buttons/CommonFullWidthBtn";
import ContactHeading from "./ContactHeading";
import ContactForm from "./ContactForm";
import OtherContactOptions from "./OtherContactOptions";

const ContactUs = ({
  isScrolled,
  isHomePage,
}: {
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  const menuRef = useRef(null);

  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !event?.target?.closest("#menuContactContainer")) {
        setIsContactOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div
      className="hidden md:block relative"
      id="menuContactContainer"
      ref={menuRef}
    >
      <IconButton
        onClick={() => setIsContactOpen(true)}
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
      <div
        className={`bg-white h-screen w-[400px] top-0 px-4 fixed ${
          isContactOpen ? "right-0 z-50" : "-right-[1000px]"
        } duration-1000 ease-in-out overflow-auto`}
      >
        <ContactHeading setIsContactOpen={setIsContactOpen} />
        <div className="px-3">
          <ContactForm isContactOpen={isContactOpen} />
          <Divider
            sx={{
              my: 3,
              fontSize: 16,
            }}
          >
            <span className="titleFont font-medium text-black">
              Or Contact Us On
            </span>
          </Divider>
          <OtherContactOptions isContactOpen={isContactOpen} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
