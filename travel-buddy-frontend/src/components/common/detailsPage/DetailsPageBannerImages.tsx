import React from "react";
import { CgMenuGridO as ExpandIcon } from "react-icons/cg";
import Image from "next/image";
import { Button } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const DetailsPageBannerImages = ({
  setIsImageViewerOpen,
  images,
}: {
  images: Array<{ img: string; gridStyle: string }>;
  setIsImageViewerOpen: any;
}) => {
  return (
    <div className="md:grid grid-cols-5 grid-rows-2 gap-4 h-full relative rounded-lg overflow-hidden">
      {images?.map((img, i) => (
        <div
          key={i}
          className={`${img?.gridStyle} w-full h-full overflow-hidden`}
        >
          <Image
            src={img.img}
            alt="Reservation Images"
            className={`w-full h-full object-cover brightness-90`}
            priority
            width={600}
            height={600}
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

export default DetailsPageBannerImages;
