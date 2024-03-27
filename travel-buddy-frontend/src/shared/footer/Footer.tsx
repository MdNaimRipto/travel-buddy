import React from "react";
import NeedOurHelp from "./footerMain/NeedOurHelp";
import AboutUs from "./footerMain/AboutUs";
import Discover from "./footerMain/Discover";
import MobileApps from "./footerMain/MobileApps";
import FooterSocial from "./FooterSocial";
import { Divider } from "@mui/material";

const Footer = () => {
  return (
    <div className="w-full static lg:fixed bottom-0 bg-[#222] text-white -z-50">
      <div className="container px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <NeedOurHelp />
          <AboutUs />
          <Discover />
          <MobileApps />
        </div>
        <Divider sx={{ background: `#ffffff33`, mb: 5 }} />
        <FooterSocial />
        <p className="text-center pt-6 pb-8 text-sm titleFont text-[#ffffff33]">
          © Copyright Travel-Buddy 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
