import React from "react";
import { FooterTitle, commonListStyle } from "../footerCommon";
import Image from "next/image";
import storesLogo from "@/assets/footer/stores.png";

const MobileApps = () => {
  return (
    <div>
      <FooterTitle title="Mobile Apps" />
      <div className="w-48 h-48 cursor-pointer -ml-2">
        <Image src={storesLogo} alt="Play-Store" />
      </div>
    </div>
  );
};

export default MobileApps;
