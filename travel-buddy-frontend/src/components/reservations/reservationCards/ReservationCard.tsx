import { IReservation } from "@/types/reservationTypes";
import React from "react";
import Image from "next/image";
import { Button, Divider, Rating } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import { CiLocationOn as LocationIcon } from "react-icons/ci";
import { GoVerified as VerifiedIcon } from "react-icons/go";
import { IoIosArrowRoundUp as NavigateIcon } from "react-icons/io";
import { MdOutlineFreeCancellation as FreeCancelIcon } from "react-icons/md";
import { AiOutlineTags as BestDealIcon } from "react-icons/ai";
import Link from "next/link";
import RatingComponent from "@/components/common/RatingComponent";

const ReservationCard = ({ reservation: r }: { reservation: IReservation }) => {
  return (
    <div className="border border-extraLightGray rounded-xl md:grid grid-cols-3 gap-4 mb-5">
      <Link
        href={`/reservations/01`}
        className="w-full h-full overflow-hidden rounded-t-xl md:rounded-tr-none md:rounded-l-xl relative"
      >
        <Image
          src={r.images[0]}
          alt="Reservation Image"
          width={400}
          height={400}
          priority
          className="w-full h-full object-cover brightness-90 hover:scale-105 duration-300"
        />
        <p className="absolute top-3 right-3 bg-success bg-opacity-80 text-white py-2 px-3 text-xs font-inter rounded-full">
          15% Off
        </p>
      </Link>
      <div className="col-span-2 my-3 flex flex-col md:flex-row items-start md:gap-4 py-2 px-3">
        <div className="md:w-[55%] my-1">
          <h6 className="flex items-center gap-1 text-[10px] lg:text-xs mb-2">
            <LocationIcon className="text-xs lg:text-lg" />
            <span className="font-inter text-black font-medium">{`Inani Beach, Cox's Bazar`}</span>
          </h6>
          <Link
            href={`/reservations/01`}
            className="titleFont text-sm md:text-xs lg:text-base leading-7 md:leading-6 lg:leading-8 text-black hover:text-secondary font-medium mb-2 block duration-300"
          >
            Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine
            Tour
          </Link>
          <div className="flex items-center gap-2">
            <RatingComponent value={4} readonly={true} />
            <p className="text-xs font-poppins text-success font-medium">4.8</p>
            <p className="text-xs font-poppins text-black font-medium">
              (269 Total)
            </p>
          </div>
          <p className="hidden md:block font-poppins tracking-wide text-[10px] lg:text-xs leading-6 lg:leading-7 text-black my-2 font-medium lg:font-normal">
            The Phi Phi archipelago is a must-visit while in Phuket, and this
            speedboat trip.
          </p>
          <div className="hidden md:flex items-center gap-3 lg:gap-4 text-success mt-3">
            <div className="flex items-center gap-1 text-[10px] lg:text-xs">
              <BestDealIcon className="text-xs lg:text-lg" />
              <span className="font-inter font-medium">Best Deal</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] lg:text-xs">
              <FreeCancelIcon className="text-xs lg:text-lg" />
              <span className="font-inter font-medium">Free Cancellation</span>
            </div>
          </div>
        </div>
        <Divider
          sx={{
            borderColor: colorConfig.extraLightGray,
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          variant="fullWidth"
          orientation="vertical"
        />
        <Divider
          sx={{
            borderColor: colorConfig.extraLightGray,
            display: {
              xs: "block",
              sm: "none",
            },
          }}
          variant="fullWidth"
          orientation="horizontal"
        />
        <div className="md:text-center w-full md:w-[45%] h-full my-1 flex flex-col justify-between md:items-center">
          <h6 className="hidden md:flex items-center justify-center gap-1 text-xs mb-2">
            <VerifiedIcon
              className="text-xs lg:text-lg"
              color={colorConfig.success}
            />
            <span className="text-[10px] lg:text-xs font-inter font-medium">
              Verified Reservation
            </span>
          </h6>
          <p className="block md:hidden my-3 text-sm md:text-xs lg:text-base titleFont md:font-poppins text-black font-medium">
            Starting From
          </p>
          <div className="flex md:flex-col justify-between items-center md:gap-6 w-full md:w-11/12">
            <div className="flex flex-col-reverse md:block items-start gap-2">
              <p className="flex gap-1 line-through text-xs lg:text-sm md:mb-3 titleFont md:font-poppins text-lightGray font-medium">
                BDT 2800 <span className="hidden md:block">/ Per Night</span>
              </p>{" "}
              <p className="flex gap-1 text-sm md:text-xs lg:text-base titleFont md:font-poppins text-black font-medium">
                BDT 2400 <span className="hidden md:block">/ Per Night</span>
              </p>
            </div>
            <Link href={`/reservations/01`} className="w-auto md:w-full">
              <Button
                variant="outlined"
                sx={{
                  borderColor: colorConfig.secondary,
                  color: colorConfig.white,
                  background: `linear-gradient(45deg, ${colorConfig.primary}, ${colorConfig.secondary}) !important`,
                  py: {
                    xs: "6px",
                    md: 1,
                  },
                  width: {
                    xs: "auto",
                    sm: "100%",
                  },
                  transition: ".5s",
                  ":hover": {
                    background: `${colorConfig.white} !important`,
                    color: colorConfig.secondary,
                    borderColor: colorConfig.secondary,
                  },
                }}
              >
                <span className="text-xs lg:text-base normal-case lg:uppercase font-inter">
                  View Details
                </span>
                <NavigateIcon className="rotate-45 text-2xl lg:text-3xl" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
