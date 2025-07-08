import React from "react";
import Image from "next/image";
import { CiLocationOn as LocationIcon } from "react-icons/ci";
import { FaStar as RatingIcon } from "react-icons/fa6";

import img1 from "@/assets/reservations/rp01.webp";
import img2 from "@/assets/reservations/rp02.webp";
import img3 from "@/assets/reservations/rp03.webp";
import img4 from "@/assets/reservations/rp04.webp";
import Link from "next/link";
import { Button } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const RelatedReservations = () => {
  const relatedReservations = [
    {
      id: "01",
      location: "Inani Beach, Cox's Bazar",
      title: "Phi Phi Islands Adventure",
      rating: 4.8,
      total_reviews: 269,
      img: img1,
    },
    {
      id: "02",
      location: "Saint Martin's Island",
      title: "Coral Island Experience Tour",
      rating: 4.5,
      total_reviews: 312,
      img: img2,
    },
    {
      id: "03",
      location: "Sajek Valley, Rangamati",
      title: "Sajek Valley Retreat Tour",
      rating: 4.9,
      total_reviews: 198,
      img: img3,
    },
    {
      id: "04",
      location: "Jaflong, Sylhet",
      title: "Jaflong River Cruise Tour",
      rating: 4.7,
      total_reviews: 174,
      img: img4,
    },
  ];

  return (
    <div>
      <h3 className="text-xl text-black font-medium titleFont mt-8 mb-3">
        Related Reservations
      </h3>
      {relatedReservations.map((r, i) => (
        <div key={i} className="flex items-start gap-2 my-5">
          <Link
            href={`/reservations/01`}
            className="w-28 h-28 overflow-hidden rounded-lg"
          >
            <Image
              src={r.img.src}
              alt="Reservation-Images"
              width={r.img.width}
              height={r.img.height}
              priority
              className="w-full h-full object-cover"
            />
          </Link>
          <div className="w-[60%]">
            <h6 className="flex lg:hidden xl:flex items-center gap-1 text-[10px] mb-2">
              <LocationIcon className="text-xs" />
              <span className="font-inter text-black font-medium">
                {r.location}
              </span>
            </h6>
            <Link
              href={`/reservations/01`}
              className="titleFont text-sm leading-6 text-black hover:text-secondary font-medium mb-2 block duration-300"
            >
              {r.title}...
            </Link>
            <div className="flex flex-wrap lg:gap-2 items-center justify-between">
              <div className="flex items-center gap-1">
                <RatingIcon className="text-xs text-primary mb-[2px]" />
                <p className="text-xs font-poppins text-success font-medium">
                  {r.rating}
                </p>
                <p className="text-xs font-poppins text-black font-medium">
                  ({r.total_reviews} Total)
                </p>
              </div>
              <Link href={`/reservations/01`}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: colorConfig.secondary,
                    color: colorConfig.white,
                    background: `linear-gradient(45deg, ${colorConfig.primary}, ${colorConfig.secondary}) !important`,
                    transition: ".5s",
                    ":hover": {
                      background: `${colorConfig.white} !important`,
                      color: colorConfig.secondary,
                      borderColor: colorConfig.secondary,
                    },
                  }}
                >
                  <span className="text-xs normal-case font-inter">
                    Details
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedReservations;
