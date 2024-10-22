import DetailsPageTitle from "@/components/common/detailsPage/DetailsPageTitle";
import Image from "next/image";
import React, { useState } from "react";
import CommonBtnWithIcon from "@/components/common/buttons/CommonBtnWithIcon";
import EastIcon from "@mui/icons-material/East";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Link from "next/link";
import { Button, Divider } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

import img1 from "@/assets/reservations/fakeReservationImage.jpg";
import img2 from "@/assets/reservations/fakeReservationImage2.jpg";
import img3 from "@/assets/reservations/fakeReservationImage3.jpg";
import img4 from "@/assets/reservations/fakeReservationImage4.jpg";

const HotelReservations = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const reservations = [
    {
      img: img1.src,
    },
    {
      img: img2.src,
    },
    {
      img: img3.src,
    },
    {
      img: img4.src,
    },
  ];

  return (
    <div className="pb-5">
      <div className="mb-5 md:mb-0 flex flex-col md:flex-row items-center justify-between">
        <DetailsPageTitle title="Hotel Reservations:" />
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <select className="shadow-sm border border-extraLightGray rounded-lg px-3 py-2 w-full md:w-auto">
            <option value="">Reservation Class</option>
            <option value="">1st Class</option>
            <option value="">2nd Class</option>
            <option value="">3rd Class</option>
          </select>
          <select className="shadow-sm border border-extraLightGray rounded-lg px-3 py-2 w-full md:w-auto">
            <option value="">Reservation type</option>
            <option value="">Family</option>
            <option value="">Couple</option>
            <option value="">Single</option>
          </select>
        </div>
      </div>
      <div className="md:p-5 rounded-xl relative">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-1 overflow-hidden ${
            isExpanded ? "max-h-full" : "max-h-[440px]"
          } duration-300`}
        >
          {[...reservations, ...reservations, ...reservations].map((r, i) => (
            <div className="group" key={i}>
              <div className="w-full h-[220px] overflow-hidden mb-5">
                <Image
                  src={r.img}
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
                      <span className="text-base text-black titleFont">
                        BDT.3000
                      </span>{" "}
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
          ))}
        </div>
        <br />
        <Divider />
        <div className="w-full flex items-center justify-end px-5 pt-5">
          <Button
            variant="outlined"
            sx={{
              borderColor: `${colorConfig.secondary} !important`,
              color: colorConfig.secondary,
              borderRadius: 50,
            }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Collapse" : "Expand"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelReservations;
