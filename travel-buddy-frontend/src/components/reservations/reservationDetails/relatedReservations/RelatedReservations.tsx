import React from "react";
import Image from "next/image";
import { CiLocationOn as LocationIcon } from "react-icons/ci";
import { FaStar as RatingIcon } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import { useGetAllReservationsQuery } from "@/redux/features/adminApis";
import { IReservations } from "@/types/reservationTypes";

const RelatedReservations = ({ location }: { location: string }) => {
  const { data, isLoading } = useGetAllReservationsQuery({
    location: location,
  });

  if (isLoading) {
    return <div></div>;
  }

  const relatedReservations = data?.data?.data as IReservations[];

  return (
    <div>
      <h3 className="text-xl text-black font-medium titleFont mt-8 mb-3">
        Related Reservations
      </h3>
      {relatedReservations.slice(0, 4).map((r, i) => (
        <div key={i} className="flex items-start gap-2 my-5">
          <Link
            href={`/reservations/${r._id}`}
            className="w-28 h-28 overflow-hidden rounded-lg"
          >
            <Image
              src={r.image}
              alt="Reservation-Images"
              width={80}
              height={80}
              priority
              className="w-full h-full object-cover"
            />
          </Link>
          <div className="w-[60%]">
            <h6 className="flex lg:hidden xl:flex items-center gap-1 text-[10px] mb-2">
              <LocationIcon className="text-xs" />
              <span className="font-inter text-black font-medium">
                {r.location.area}
              </span>
            </h6>
            <Link
              href={`/reservations/${r._id}`}
              className="titleFont text-sm leading-6 text-black hover:text-secondary font-medium mb-2 block duration-300"
            >
              {r.name.slice(0, 20)}...
            </Link>
            <div className="flex flex-wrap lg:gap-2 items-center justify-between">
              <div className="flex items-center gap-1">
                <RatingIcon className="text-xs text-primary mb-[2px]" />
                <p className="text-xs font-poppins text-success font-medium">
                  {r.rating.rating}
                </p>
                <p className="text-xs font-poppins text-black font-medium">
                  ({r.rating.total} Total)
                </p>
              </div>
              <Link href={`/reservations/${r._id}`}>
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
