import React from "react";
import FooterSocial from "../footer/FooterSocial";
import { colorConfig } from "@/configs/colorConfig";

const ProfileDashboardFooter = () => {
  return (
    <footer className="border-t border-t-lightGray w-full flex flex-col md:flex-row items-center justify-between p-5 mt-3">
      <p className="text-lg text-black font-inter">© Travel-Buddy 2025</p>
      <FooterSocial iconColor={colorConfig.black} />
    </footer>
  );
};

export default ProfileDashboardFooter;
