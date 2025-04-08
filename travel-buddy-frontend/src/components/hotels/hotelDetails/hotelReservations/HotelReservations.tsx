import DetailsPageTitle from "@/components/common/detailsPage/DetailsPageTitle";
import React, { useState } from "react";
import { Button, Divider } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import VerticalReservationCard from "@/components/reservations/reservationCards/VerticalReservationCard";
import { useGetHotelReservationsQuery } from "@/redux/features/hotelApis/reservationApis";
import NotFoundMessage from "@/components/common/NotFoundMessage";
import { IReservations } from "@/types/reservationTypes";

const HotelReservations = ({ id }: { id: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { data, isLoading, refetch } = useGetHotelReservationsQuery({
    hotelId: String(id),
  });

  if (!data) {
    return <NotFoundMessage title="No Reservations Found!" />;
  }

  const reservations = data?.data?.data as IReservations[];

  if (!reservations?.length) {
    return <NotFoundMessage title="No Reservations Found!" />;
  }

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
          {reservations.map((r, i) => (
            <VerticalReservationCard reservation={r} key={i} />
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
