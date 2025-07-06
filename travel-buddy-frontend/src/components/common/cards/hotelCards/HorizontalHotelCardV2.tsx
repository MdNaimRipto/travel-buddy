import Image from "next/image";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CommonBtnWithIcon from "../../buttons/CommonBtnWithIcon";
import Link from "next/link";
import { IBusinessProfile } from "@/types/hotelTypes";

const HorizontalHotelCardV2 = ({
  card,
}: {
  card: IBusinessProfile;
  btnTextStyle?: string;
}) => {
  return (
    <div className="group">
      <div className="w-full h-[220px] overflow-hidden mb-5">
        <Image
          src={card?.hotelImage}
          width={400}
          height={400}
          alt="Hotel-Images"
          priority
          className="h-full w-full object-cover rounded-lg brightness-75 group-hover:brightness-[.6] duration-500"
        />
      </div>
      <div className="px-3 overflow-hidden">
        <h2 className="titleFont text-base font-medium text-black leading-[30px] mb-3">
          {card?.hotelName}
        </h2>
        <div className="flex items-center gap-2 whitespace-nowrap text-sm text-gray pb-3 mb-3 border-b border-b-lightGray">
          <p className="titleFont text-xs">
            {card?.hotelLocation?.destination}
          </p>
          <EastIcon sx={{ fontSize: 12 }} />
          <p className="titleFont text-xs">{card?.hotelLocation?.area}</p>
          <EastIcon sx={{ fontSize: 12 }} />
          <p className="titleFont text-xs">{card?.hotelLocation?.street}</p>
        </div>
        <div>
          <p className="mb-1 pt-2 text-xs titleFont font-medium text-black">
            Starting From:
          </p>
          <div className="flex items-center justify-between">
            <p className="text-black">
              <span className="text-base text-black titleFont">
                BDT.{card.startingPrice}
              </span>{" "}
              {/* <span className="text-lightGray text-sm line-through">
                BDT.3000
              </span> */}
            </p>
            <Link href={`/hotels/${card?._id}`}>
              <CommonBtnWithIcon
                title="Book Now"
                icon={<FlightTakeoffIcon className="text-lg" />}
                btnTextStyle={"text-xs"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalHotelCardV2;
