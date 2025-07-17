import Image from "next/image";
import React from "react";

import FeaturesMenuPng from "@/assets/featured-icons/feature-list/menu.webp";

const DetailsPageTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2 my-6">
      <div className="w-6">
        <Image
          src={FeaturesMenuPng.src}
          alt="Features Menu"
          width={200}
          height={200}
          priority
        />
      </div>
      <h4 className="text-xl font-medium titleFont">{title}</h4>
    </div>
  );
};

export default DetailsPageTitle;
