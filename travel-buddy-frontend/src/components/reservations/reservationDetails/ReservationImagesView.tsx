import React, { useState } from "react";
import img1 from "@/assets/reservations/fakeReservationImage.jpg";
import img2 from "@/assets/reservations/fakeReservationImage2.jpg";
import img3 from "@/assets/reservations/fakeReservationImage3.jpg";
import img4 from "@/assets/reservations/fakeReservationImage4.jpg";
import img5 from "@/assets/reservations/fakeReservationImage5.jpg";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import {
  IoChevronBack as BackwardIcon,
  IoChevronForward as ForwardIcon,
  IoCloseOutline as CloseIcon,
} from "react-icons/io5";
import { colorConfig } from "@/configs/colorConfig";

const ReservationImagesView = ({
  isViewerOpen,
  setIsImageViewerOpen,
}: {
  isViewerOpen: boolean;
  setIsImageViewerOpen: any;
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [displayedImages, setDisplayedImages] = useState({
    prevCount: 0,
    nextCount: 4,
  });

  const viewerImages = [
    { img: img1, gridStyle: "col-span-3 row-span-2" },
    { img: img2, gridStyle: "col-span-2 row-span-1" },
    { img: img3, gridStyle: "col-span-1 row-span-1" },
    { img: img4, gridStyle: "col-span-1 row-span-1" },
    { img: img5, gridStyle: "col-span-2 row-span-2" },
    { img: img1, gridStyle: "col-span-3 row-span-2" },
    { img: img2, gridStyle: "col-span-2 row-span-1" },
    { img: img3, gridStyle: "col-span-1 row-span-1" },
    { img: img4, gridStyle: "col-span-1 row-span-1" },
    { img: img5, gridStyle: "col-span-2 row-span-2" },
  ];

  return (
    <>
      {isViewerOpen && (
        <div className="w-full h-full fixed top-0 left-0 bg-white z-50 overflow-hidden">
          <div className="container px-4 flex flex-col items-center justify-center gap-4 h-screen w-full lg:w-3/4 xl:w-1/2">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-sm md:text-xl font-poppins text-darkGray">
                Reservation Images
              </h2>
              <IconButton onClick={() => setIsImageViewerOpen(false)}>
                <CloseIcon className="text-3xl" />
              </IconButton>
            </div>
            <div className="w-full h-[250px] md:h-[480px] xl:h-[550px] overflow-hidden relative">
              <IconButton
                sx={{
                  position: "absolute",
                  left: 0,
                  height: "100%",
                  borderRadius: 0,
                  background: "#5f5f5f0f !important",
                }}
                onClick={() => {
                  setCurrentImage(currentImage - 1);
                  if (currentImage === displayedImages.prevCount) {
                    setDisplayedImages({
                      prevCount: displayedImages.prevCount - 1,
                      nextCount: displayedImages.nextCount - 1,
                    });
                  }
                }}
                disabled={currentImage === 0}
              >
                <BackwardIcon className="text-white disabled:text-extraLightGray" />
              </IconButton>
              <Image
                src={viewerImages[Number(currentImage)].img}
                alt="Reservation Images"
                className={`w-full h-full object-cover`}
                priority
              />
              <IconButton
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  height: "100%",
                  borderRadius: 0,
                  background: "#5f5f5f0f !important",
                }}
                onClick={() => {
                  setCurrentImage(currentImage + 1);
                  if (currentImage === displayedImages.nextCount - 1) {
                    setDisplayedImages({
                      prevCount: displayedImages.prevCount + 1,
                      nextCount: displayedImages.nextCount + 1,
                    });
                  }
                }}
                disabled={currentImage + 1 === viewerImages.length}
              >
                <ForwardIcon className="text-white disabled:text-extraLightGray" />
              </IconButton>
            </div>
            <div className="grid md:grid-cols-6 md:gap-4 w-full">
              <div className="hidden md:block"></div>
              <div className="grid grid-cols-4 gap-1 md:gap-4 overflow-hidden col-span-4">
                {viewerImages
                  .slice(displayedImages.prevCount, displayedImages.nextCount)
                  .map((img, i) => (
                    <Button
                      onClick={() => {
                        setCurrentImage(i + displayedImages.prevCount);
                      }}
                      variant="text"
                      key={i}
                      sx={{
                        width: "100%",
                        height: "60px",
                        p: 0,
                        m: 0,
                        overflow: "hidden",
                        borderRadius: 0,
                        border:
                          i + displayedImages.prevCount === currentImage
                            ? `2px solid ${colorConfig.secondary}`
                            : `2px solid ${colorConfig.white}`,
                      }}
                    >
                      <Image
                        src={img.img}
                        alt="Reservation Images"
                        className={`w-full h-full object-cover ${
                          i + displayedImages.prevCount === currentImage
                            ? "brightness-90"
                            : "brightness-75 opacity-70"
                        }`}
                        priority
                      />
                    </Button>
                  ))}
              </div>
              <div className="hidden md:block"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationImagesView;
