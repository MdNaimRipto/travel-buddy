import React from "react";
import Image from "next/image";
import FeaturesPng from "@/assets/featured-icons/feature-list/check-mark.webp";

const ReservationList = ({ list }: { list: string }) => {
  return (
    <li className="flex items-center gap-2 mb-5">
      <div className="w-6">
        <Image
          src={FeaturesPng.src}
          alt="Features Menu"
          width={200}
          height={200}
          priority
        />
      </div>
      <span className="text-base font-normal font-inter">{list}</span>
    </li>
  );
};

export default ReservationList;
