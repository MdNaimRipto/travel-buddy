import React from "react";
import DetailsPageTitle from "./DetailsPageTitle";
import { IBusinessProfile } from "@/types/hotelTypes";

const DetailsPageDescription = ({ hotel }: { hotel: IBusinessProfile }) => {
  return (
    <div>
      <DetailsPageTitle title={`Description of ${hotel?.hotelName}... :`} />
      <p className="text-xs md:text-base my-5 font-inter font-light md:font-normal leading-6 md:leading-9 text-black">
        {hotel?.description}
      </p>
    </div>
  );
};

export default DetailsPageDescription;
