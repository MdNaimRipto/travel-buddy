import React from "react";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { IoHome as HomeIcon } from "react-icons/io5";
import { CiLocationOn as LocationIcon } from "react-icons/ci";
import RatingComponent from "@/components/common/RatingComponent";
import {
  FaRegThumbsUp as PositiveThumbIcon,
  FaRegThumbsDown as NegativeThumbIcon,
  FaRegShareFromSquare as ShareIcon,
  FaPlus as WishlistIcon,
} from "react-icons/fa6";

const ReservationDetailsTopContent = ({
  title,
  path,
  locationPath,
}: {
  title: string;
  path: string;
  locationPath: string;
}) => {
  return (
    <div>
      <div className="flex items-center justify-between pb-5">
        <Breadcrumbs>
          <Link href="/" className="text-black font-poppins text-xs md:text-sm">
            <HomeIcon />
          </Link>
          <Link
            href="/reservations"
            className="text-black font-poppins text-xs md:text-sm"
          >
            Reservations
          </Link>
          <Link
            href={path}
            className="text-black font-poppins text-xs md:text-sm"
          >
            {title.length >= 30 ? `${title.slice(0, 30)}...` : title}
          </Link>
        </Breadcrumbs>
        <Link
          href="/reservations"
          className="hidden md:block text-black font-poppins text-sm hover:text-secondary duration-300"
        >
          Discover Premier Accommodations
        </Link>
      </div>
      <div className="mt-3 mb-6 flex flex-col gap-2">
        <h2 className="titleFont text-sm md:text-xl lg:text-3xl lg:leading-[55px] font-semibold text-black w-3/5">
          {title}
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href={locationPath}
              className="flex items-center gap-1 text-xs lg:text-sm text-black hover:text-secondary duration-300"
            >
              <LocationIcon className="text-xs lg:text-xl" />
              <span className="font-inter font-medium">{`Inani Beach, Cox's Bazar`}</span>
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
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-black">
              <WishlistIcon className="text-xs lg:text-xl" />
              <p className="text-xs font-poppins font-medium">Wishlist</p>
            </button>
            <div className="flex items-center gap-2 text-black">
              <ShareIcon className="text-xs lg:text-xl" />
              <p className="text-xs font-poppins font-medium">Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetailsTopContent;
