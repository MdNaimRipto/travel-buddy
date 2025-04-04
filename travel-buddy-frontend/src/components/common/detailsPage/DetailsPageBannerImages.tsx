import React from "react";
import { CgMenuGridO as ExpandIcon } from "react-icons/cg";
import Image, { StaticImageData } from "next/image";
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
    <div className="h-full relative rounded-lg overflow-hidden">
      <div className={`w-full h-full overflow-hidden`}>
        <Image
          src={images[0]?.img}
          alt="Reservation Images"
          className={`w-full h-full object-cover brightness-90`}
          priority
          width={300}
          height={300}
          unoptimized
        />
      </div>

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
