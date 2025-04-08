import React from "react";
import hotelImg from "@/assets/hotels/hotel.jpg";
import Image from "next/image";
import Link from "next/link";
import NavigateIcon from "@mui/icons-material/OpenInNew";

const VisitHotel = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/hotels/${id}`}
      className="relative h-24 md:h-48 overflow-hidden block"
    >
      <Image
        src={hotelImg.src}
        alt="Hotel Image"
        width={hotelImg.width}
        height={hotelImg.height}
        priority
        className="absolute z-0 w-full h-full object-cover brightness-50"
      />
      <p className="absolute bottom-1/2 md:bottom-8 translate-y-1/2 md:translate-y-0 md:left-8 px-4 md:px-0 text-white flex items-center gap-4 md:gap-2">
        <span className="text-xl md:text-5xl font-semibold titleFont">
          Visit Hotel Sheraton
        </span>
        <NavigateIcon
          sx={{
            fontSize: {
              xs: 30,
              sm: 48,
            },
          }}
        />
      </p>
    </Link>
  );
};

export default VisitHotel;
