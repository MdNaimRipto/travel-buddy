import React from "react";
import Link from "next/link";
import { CiLocationOn as LocationIcon } from "react-icons/ci";
import RatingComponent from "@/components/common/RatingComponent";
import {
  FaRegThumbsUp as PositiveThumbIcon,
  FaRegThumbsDown as NegativeThumbIcon,
} from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { IBusinessProfile } from "@/types/hotelTypes";

const HotelProfileTopContent = ({ hotel }: { hotel: IBusinessProfile }) => {
  return (
    <div>
      <div className="mt-3 mb-6 flex flex-col gap-2">
        <h2 className="titleFont text-lg md:text-xl lg:text-3xl leading-[35px] md:leading-[45px] lg:leading-[55px] font-medium md:font-semibold text-black w-full md:w-3/5">
          {hotel?.hotelName}
        </h2>
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center gap-4 md:gap-3">
            <Link
              href={`/hotels?destination=${hotel?.hotelLocation?.destination}&area=${hotel?.hotelLocation?.area}`}
              className="flex items-center gap-1 text-xs lg:text-sm text-black hover:text-secondary duration-300"
            >
              <LocationIcon className="text-xs lg:text-xl" />
              <span className="font-inter font-medium">{`${hotel?.hotelLocation?.area}, ${hotel?.hotelLocation?.destination}`}</span>
            </Link>
            <div className="flex items-center gap-2">
              <RatingComponent value={4} readonly={true} />
              <p className="text-xs font-poppins text-success font-medium">
                4.8
              </p>
              <p className="text-xs font-poppins text-black font-medium">
                (269 Total)
              </p>
            </div>
            <div className="flex items-center gap-2 text-success">
              <PositiveThumbIcon className="text-xs lg:text-xl" />
              <p className="text-xs font-poppins font-medium">96% Positive</p>
            </div>
            <div className="flex items-center gap-2 text-error">
              <NegativeThumbIcon className="text-xs lg:text-xl" />
              <p className="text-xs font-poppins font-medium">04% Negative</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-black border border-black rounded-xl p-3">
            <p className="text-base font-poppins font-medium">Edit Profile</p>
            <CiEdit className="text-xs lg:text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelProfileTopContent;
