import Image, { StaticImageData } from "next/image";
import React from "react";
import CommonBtnWithIcon from "@/components/common/buttons/CommonBtnWithIcon";
import EastIcon from "@mui/icons-material/East";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Link from "next/link";
import { IReservations } from "@/types/reservationTypes";

const VerticalReservationCard = ({
  reservation,
}: {
  reservation: IReservations;
}) => {
  return (
    <div className="group">
      <div className="w-full h-[220px] overflow-hidden mb-5">
        <Image
          src={reservation?.images[0]}
          width={400}
          height={400}
          alt="Hotel-Images"
          priority
          className="h-full w-full object-cover rounded-lg brightness-75 group-hover:brightness-[.6] duration-500"
        />
      </div>
      <div className="px-3 overflow-hidden">
        <h2 className="titleFont text-base font-medium text-black leading-[30px] mb-3">{`The Allure Italy's Rich Culture, History, And Cuisine.`}</h2>
        <div className="flex items-center gap-2 whitespace-nowrap text-sm text-gray pb-3 mb-3 border-b border-b-lightGray">
          <p className="titleFont text-xs">{`Cox's Bazar`}</p>
          <EastIcon sx={{ fontSize: 12 }} />
          <p className="titleFont">Inani Beach</p>
          <EastIcon sx={{ fontSize: 12 }} />
          <p className="titleFont">Road No.1905</p>
        </div>
        <div>
          <p className="mb-1 pt-2 text-xs titleFont font-medium text-black">
            Starting From:
          </p>
          <div className="flex items-center justify-between">
            <p className="text-black">
              <span className="text-base text-black titleFont">BDT.3000</span>{" "}
              <span className="text-lightGray text-sm line-through">
                BDT.3000
              </span>
            </p>
            <Link href="/reservations/01">
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

export default VerticalReservationCard;
