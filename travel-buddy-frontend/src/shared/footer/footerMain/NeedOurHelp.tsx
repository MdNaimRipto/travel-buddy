import Link from "next/link";
import React from "react";
import PhoneIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/MailOutlineRounded";
import { FooterTitle, commonListStyle } from "../footerCommon";

const NeedOurHelp = () => {
  const commonLinkClass =
    "flex items-center gap-2 hover:text-primary duration-300";
  return (
    <div>
      <FooterTitle title="Need Our Help" />
      <div className={commonListStyle}>
        <Link href="tel:+8801632970990" className={commonLinkClass}>
          <PhoneIcon sx={{ fontSize: "24px" }} />
          <span>+880161234560</span>
        </Link>
        <Link
          href="mailto:mdnaimurrahman681@gmail.com"
          className={commonLinkClass}
        >
          <MailIcon sx={{ fontSize: "24px" }} />
          <span>travelbuddy@gmail.com</span>
        </Link>
      </div>
    </div>
  );
};

export default NeedOurHelp;
