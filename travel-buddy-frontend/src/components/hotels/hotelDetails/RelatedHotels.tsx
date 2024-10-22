import React from "react";
import Image from "next/image";
import { CiLocationOn as LocationIcon } from "react-icons/ci";
import { FaStar as RatingIcon } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

import img1 from "@/assets/hotels/hotel1.jpg";
import img2 from "@/assets/hotels/hotel2.jpg";
import img3 from "@/assets/hotels/hotel3.jpg";
import img4 from "@/assets/hotels/hotel4.jpg";
import img5 from "@/assets/hotels/hotel5.jpg";

const RelatedHotels = () => {
  const relatedHotels = [
    {
      id: "01",
      location: "Inani Beach, Cox's Bazar",
      title: "Capella Bangkok",
      rating: 4.8,
      total_reviews: 269,
      img: img1,
    },
    {
      id: "02",
      location: "Saint Martin's Island",
      title: "Mandarin Oriental, Bangkok",
      rating: 4.5,
      total_reviews: 312,
      img: img2,
    },
    {
      id: "03",
      location: "Sajek Valley, Rangamati",
      title: "Padma Resort Ubud",
      rating: 4.9,
      total_reviews: 198,
      img: img3,
    },
    {
      id: "04",
      location: "Jaflong, Sylhet",
      title: "Soneva Fushi",
      rating: 4.7,
      total_reviews: 174,
      img: img4,
    },
    {
      id: "05",
      location: "Jaflong, Sylhet",
      title: "Belmond Hotel Caruso",
      rating: 4.8,
      total_reviews: 194,
      img: img5,
    },
  ];

  return (
    <div>
      <h3 className="text-xl text-black font-medium titleFont mb-3">
        Related Reservations
      </h3>
      {relatedHotels.map((r, i) => (
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
              className="w-full h-full object-cover brightness-90"
            />
          </Link>
          <div className="w-3/5 md:w-[26%] lg:w-[60%]">
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
            <div className="flex flex-wrap gap-2 items-center justify-between">
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

export default RelatedHotels;
