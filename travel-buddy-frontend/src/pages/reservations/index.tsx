import ReservationsTopContent from "@/components/reservations/ReservationsTopContent";
import SideNavLayout from "@/layouts/SideNavLayout";
import ReservationsSideNav from "@/components/reservations/ReservationsSideNav";
import React, { ReactElement } from "react";
import { IReservation } from "@/types/reservationTypes";
import reservationImage from "@/assets/reservations/fakeReservationImage.jpg";
import Image from "next/image";
import { Button, Divider, Rating } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import {
  CiLocationOn as LocationIcon,
  CiShoppingTag as BestDealIcon,
} from "react-icons/ci";
import { FaCheck as FreeCancel } from "react-icons/fa6";
import { GoVerified as VerifiedIcon } from "react-icons/go";
import RatingIcon from "@mui/icons-material/StarRounded";
import EmptyRatingIcon from "@mui/icons-material/StarBorderRounded";
import { IoIosArrowRoundUp as NavigateIcon } from "react-icons/io";

const Reservations = () => {
  const generateReservation = (id: number): IReservation => {
    return {
      profileId: `profile_${id}`,
      reservationId: `reservation_${id}`,
      reservationType: "Single",
      reservationClass: "First",
      name: `Reservation ${id}`,
      price: 100,
      location: {
        area: "Area",
        destination: "Destination",
      },
      totalReservations: 10,
      reservationsLeft: 5,
      status: "Available",
      description: "Description",
      features: ["Feature 1", "Feature 2"],
      additionalFacilities: ["Facility 1", "Facility 2"],
      images: [reservationImage.src, "image2.jpg"],
    };
  };

  // Generate an array of fake reservations
  const fakeReservations: IReservation[] = [];
  for (let i = 1; i <= 12; i++) {
    fakeReservations.push(generateReservation(i));
  }

  return (
    <div className="my-12">
      {fakeReservations.map((r: IReservation, i: number) => (
        <div
          key={i}
          className="min-h-[280px] border border-extraLightGray rounded-lg p-3 grid grid-cols-3 gap-4 mb-5"
        >
          <div className="w-full h-full overflow-hidden rounded-xl">
            <Image
              src={r.images[0]}
              alt="Reservation Image"
              width={400}
              height={400}
              priority
              className="w-full h-full object-cover brightness-90"
            />
          </div>
          <div className="col-span-2 my-3 flex items-start gap-4">
            <div className="w-[55%] my-1">
              <h6 className="flex items-center gap-1 text-xs mb-2">
                <LocationIcon size={18} />
                <span className="font-inter text-black font-medium">{`Inani Beach, Cox's Bazar`}</span>
              </h6>
              <h2 className="font-poppins text-base leading-8 text-black font-medium mb-2">
                Phi Phi Islands Adventure Day Trip with Seaview Lunch by V.
                Marine Tour
              </h2>
              <div className="flex items-center gap-2">
                <Rating
                  value={4}
                  icon={<RatingIcon sx={{ color: colorConfig.secondary }} />}
                  emptyIcon={<EmptyRatingIcon />}
                  readOnly
                />
                <p className="text-xs font-poppins text-success font-medium">
                  4.8
                </p>
                <p className="text-xs font-poppins text-black font-medium">
                  (269 Total)
                </p>
              </div>
              <p className="font-poppins tracking-wide text-xs leading-7 text-black my-2 font-normal">
                The Phi Phi archipelago is a must-visit while in Phuket, and
                this speedboat trip.
              </p>
              <div className="flex items-center gap-4 text-success mt-3">
                <h6 className="flex items-center gap-1 text-xs mb-2">
                  <BestDealIcon size={18} />
                  <span className="font-inter font-medium">Best Deal</span>
                </h6>
                <h6 className="flex items-center gap-1 text-xs mb-2">
                  <FreeCancel size={18} />
                  <span className="font-inter font-medium">Free Cancel</span>
                </h6>
              </div>
            </div>
            <Divider
              sx={{ borderColor: colorConfig.extraLightGray }}
              variant="fullWidth"
              orientation="vertical"
            />
            <div className="text-center w-[45%] h-full my-1 flex flex-col justify-between items-center">
              <h6 className="flex items-center justify-center gap-1 text-xs mb-2">
                <VerifiedIcon size={18} color={colorConfig.success} />
                <span className="font-inter font-medium">
                  Verified Reservation
                </span>
              </h6>
              <div className="flex flex-col gap-6 w-11/12">
                <div>
                  <p className="line-through text-sm mb-3 font-poppins text-lightGray font-medium">
                    BDT 2800 / Per Night
                  </p>{" "}
                  <p className="text-base font-poppins text-black font-medium">
                    BDT 2800 / Per Night
                  </p>
                </div>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: colorConfig.secondary,
                    color: colorConfig.white,
                    background: `linear-gradient(45deg, ${colorConfig.primary}, ${colorConfig.secondary}) !important`,
                    py: 1,
                    width: "100%",
                    transition: ".5s",
                    ":hover": {
                      background: `${colorConfig.white} !important`,
                      color: colorConfig.secondary,
                      borderColor: colorConfig.secondary,
                    },
                  }}
                >
                  <span>View Details</span>
                  <NavigateIcon className="rotate-45" size={28} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reservations;

Reservations.getLayout = function getLayout(page: ReactElement) {
  return (
    <SideNavLayout
      topContent={<ReservationsTopContent />}
      sideNavChild={<ReservationsSideNav />}
    >
      {page}
    </SideNavLayout>
  );
};
