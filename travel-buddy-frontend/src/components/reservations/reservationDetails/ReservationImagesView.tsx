import React, { useState } from "react";
import img1 from "@/assets/reservations/fakeReservationImage.jpg";
import img2 from "@/assets/reservations/fakeReservationImage2.jpg";
import img3 from "@/assets/reservations/fakeReservationImage3.jpg";
import img4 from "@/assets/reservations/fakeReservationImage4.jpg";
import img5 from "@/assets/reservations/fakeReservationImage5.jpg";
import { Button } from "@mui/material";
import Image from "next/image";

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
          <div className="container px-4 flex flex-col items-center justify-center gap-4 h-screen w-1/2">
            <div className="flex justify-between items-center w-full">
              <h2>Reservation Images</h2>
              <Button onClick={() => setIsImageViewerOpen(false)}>Close</Button>
            </div>
            <div className="w-full h-[380px] overflow-hidden">
              <Image
                src={viewerImages[Number(currentImage)].img}
                alt="Reservation Images"
                className={`w-full h-full object-cover`}
                priority
              />
            </div>
            <div className="grid grid-cols-6 gap-4 w-full">
              <Button
                variant="text"
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
                Prev
              </Button>
              <div className="grid grid-cols-4 gap-4 overflow-hidden col-span-4">
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
                            ? `3px solid #219653`
                            : `3px solid #ffffff`,
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
              <Button
                variant="text"
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
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationImagesView;
