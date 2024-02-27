import React, { useEffect, useRef, useState } from "react";
import { Divider } from "@mui/material";
import ContactHeading from "./ContactHeading";
import ContactForm from "./ContactForm";
import OtherContactOptions from "./OtherContactOptions";
import ContactToggleButton from "./ContactToggleButton";

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
      <ContactToggleButton
        isHomePage={isHomePage}
        isScrolled={isScrolled}
        setIsContactOpen={setIsContactOpen}
      />
      <div
        className={`bg-white top-0 px-4 fixed ${
          isContactOpen
            ? "right-0 w-[400px] h-screen z-50"
            : "-right-[1000px] w-0 h-0"
        } duration-700 ease-in-out overflow-auto lg:overflow-hidden`}
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
