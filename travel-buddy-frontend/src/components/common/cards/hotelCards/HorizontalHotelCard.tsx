import Image from "next/image";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CommonBtnWithIcon from "../../buttons/CommonBtnWithIcon";
import Link from "next/link";
import { IBusinessProfile } from "@/types/hotelTypes";

const HorizontalHotelCard = ({ card }: { card: IBusinessProfile }) => {
  return (
    <div className="group">
      <div className="w-full h-[240px] overflow-hidden mb-5">
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
        <h2 className="titleFont text-lg font-medium text-black leading-[34px] mb-3">{`The Allure Italy's Rich Culture, History, And Cuisine.`}</h2>
        <div className="flex items-center gap-2 whitespace-nowrap text-sm text-gray pb-3 mb-3 border-b border-b-lightGray">
          <p className="titleFont text-sx">
            {card?.hotelLocation?.destination}
          </p>
          <EastIcon sx={{ fontSize: 16 }} />
          <p className="titleFont text-sx">{card?.hotelLocation?.area}</p>
          <EastIcon sx={{ fontSize: 16 }} />
          <p className="titleFont text-sx">{card?.hotelLocation?.street}</p>
        </div>
        <div>
          <p className="mb-1 pt-2 text-xs titleFont font-medium text-black">
            Starting From:
          </p>
          <div className="flex items-center justify-between">
            <p className="text-black">
              <span className="text-base text-black titleFont">
                BDT.{card?.startingPrice}
              </span>
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

export default HorizontalHotelCard;
