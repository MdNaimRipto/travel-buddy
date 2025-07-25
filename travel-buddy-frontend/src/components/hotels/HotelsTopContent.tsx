import React from "react";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { IoHome as HomeIcon } from "react-icons/io5";
import TopNavFilters from "../common/sideNavOptions/TopNavFilters";

const HotelsTopContent = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <Breadcrumbs>
          <Link href="/" className="text-black font-poppins text-xs md:text-sm">
            <HomeIcon />
          </Link>
          <Link
            href="/hotels"
            className="text-black font-poppins text-xs md:text-sm"
          >
            Hotels
          </Link>
        </Breadcrumbs>
        <Link
          href="/reservations"
          className="hidden md:block text-black font-poppins text-sm hover:text-secondary duration-300"
        >{`Want to Find The Best Reservations?`}</Link>
      </div>
      <div className="mt-3 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
        <h2 className="titleFont text-sm md:text-xl lg:text-3xl font-medium text-black">
          Explore The Best Hotel to Stay
        </h2>
        <TopNavFilters limits={[9, 12, 15]} />
      </div>
    </div>
  );
};

export default HotelsTopContent;
