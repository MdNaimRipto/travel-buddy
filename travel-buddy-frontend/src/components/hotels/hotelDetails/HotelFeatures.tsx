import Image from "next/image";
import React from "react";
import FeaturesPng from "@/assets/featured-icons/feature-list/check-mark.webp";
import DetailsPageTitle from "@/components/common/detailsPage/DetailsPageTitle";

const HotelFeatures = ({ amenities }: { amenities: Array<string> }) => {
  return (
    <div className="w-full pt-4">
      <DetailsPageTitle title="Hotel Details:" />
      <ul className="ml-2 grid grid-cols-1 md:grid-cols-2 lg:px-8">
        {amenities.map((list, i) => (
          <li className="flex items-center gap-2 mb-5" key={i}>
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
        ))}
      </ul>
    </div>
  );
};

export default HotelFeatures;
