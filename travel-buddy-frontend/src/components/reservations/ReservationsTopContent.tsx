import React from "react";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { IoHome as HomeIcon } from "react-icons/io5";

const ReservationsTopContent = () => {
  return (
    <div>
      <div className="flex items-center justify-between text-sm py-5">
        <Breadcrumbs>
          <Link href="/" className="text-black font-poppins text-sm">
            <HomeIcon />
          </Link>
          <Link
            href="/reservations"
            className="text-black font-poppins text-sm"
          >
            Reservations
          </Link>
        </Breadcrumbs>
        <Link
          href="/hotels"
          className="text-black font-poppins text-sm hover:text-secondary duration-300"
        >{`Want to Find The Best Hotel's?`}</Link>
      </div>
      <div className="mt-3 mb-6 flex items-center justify-between">
        <h2 className="titleFont text-3xl font-medium text-black">
          Explore The Best Reservation to Book
        </h2>
        <div className="w-1/4 flex items-center gap-4">
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

export default ReservationsTopContent;
