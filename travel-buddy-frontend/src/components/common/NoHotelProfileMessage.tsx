import React from "react";
import { FaExclamation } from "react-icons/fa";
import { Button } from "@mui/material";
import Link from "next/link";
import { colorConfig } from "@/configs/colorConfig";

const NoHotelProfileMessage = () => {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <FaExclamation className="p-4 text-6xl bg-primary bg-opacity-20 text-secondary rounded-full" />
      <p className="text-2xl font-poppins">Hotel Profile Not Found</p>
      <span className="text-sm font-inter">
        Please Create One Profile First
      </span>
      <Link href="/dashboard/seller/hotelProfile">
        <Button
          variant="contained"
          sx={{
            background: colorConfig.secondary,
          }}
        >
          Create Now
        </Button>
      </Link>
    </div>
  );
};

export default NoHotelProfileMessage;
