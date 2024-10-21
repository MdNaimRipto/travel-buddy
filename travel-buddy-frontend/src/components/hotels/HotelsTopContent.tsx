import React from "react";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { IoHome as HomeIcon } from "react-icons/io5";

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
        <div className="lg:w-1/4 flex items-center gap-4">
          <select className="w-1/2 p-2 border border-lightGray focus:outline-none font-inter text-sm cursor-pointer">
            <option value="">Set Price</option>
            <option value="">Low to High</option>
            <option value="">High to Low</option>
          </select>
          <select className="w-1/2 p-2 border border-lightGray focus:outline-none font-inter text-sm cursor-pointer">
            <option value="">Set Limit</option>
            <option value="">10</option>
            <option value="">16</option>
            <option value="">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HotelsTopContent;
