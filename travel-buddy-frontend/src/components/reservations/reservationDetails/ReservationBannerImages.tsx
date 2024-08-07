import React from "react";
import { CgMenuGridO as ExpandIcon } from "react-icons/cg";

import img1 from "@/assets/reservations/fakeReservationImage.jpg";
import img2 from "@/assets/reservations/fakeReservationImage2.jpg";
import img3 from "@/assets/reservations/fakeReservationImage3.jpg";
import img4 from "@/assets/reservations/fakeReservationImage4.jpg";
import Image from "next/image";
import { Button } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const ReservationBannerImages = ({
  setIsImageViewerOpen,
}: {
  setIsImageViewerOpen: any;
}) => {
  const images = [
    { img: img1, gridStyle: "col-span-3 row-span-2" },
    { img: img2, gridStyle: "col-span-2 row-span-1" },
    { img: img3, gridStyle: "col-span-1 row-span-1" },
    { img: img4, gridStyle: "col-span-1 row-span-1" },
  ];

  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-4 h-[380px] relative rounded-lg overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`${img.gridStyle} w-full h-full overflow-hidden`}
        >
          <Image
            src={img.img}
            alt="Reservation Images"
            className={`w-full h-full object-cover`}
            priority
          />
        </div>
      ))}
      <Button
        onClick={() => setIsImageViewerOpen(true)}
        variant="outlined"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          borderColor: colorConfig.black,
          background: `${colorConfig.white} !important`,
          color: colorConfig.black,
          "&:hover": {
            borderColor: colorConfig.black,
            color: colorConfig.black,
          },
        }}
      >
        <ExpandIcon className="text-lg" />
        <span className="font-inter normal-case text-xs text-black font-semibold ml-1">
          View All
        </span>
      </Button>
    </div>
  );
};

export default ReservationBannerImages;
