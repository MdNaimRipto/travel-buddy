import React from "react";
import hotelImg from "@/assets/hotels/hotel.jpg";
import Image from "next/image";
import Link from "next/link";
import NavigateIcon from "@mui/icons-material/OpenInNew";

const VisitHotel = () => {
  return (
    <Link
      href={"/reservations/01"}
      className="relative h-48 overflow-hidden block"
    >
      <Image
        src={hotelImg.src}
        alt="Hotel Image"
        width={hotelImg.width}
        height={hotelImg.height}
        priority
        className="absolute z-0 w-full h-full object-cover brightness-50"
      />
      <p className="absolute bottom-8 left-8 text-white flex items-center gap-2">
        <span className="text-5xl font-semibold titleFont">
          Visit Hotel Sheraton
        </span>
        <NavigateIcon sx={{ fontSize: 48 }} />
      </p>
    </Link>
  );
};

export default VisitHotel;
