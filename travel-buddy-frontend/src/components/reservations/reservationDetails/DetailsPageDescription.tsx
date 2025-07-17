import React from "react";
import { IBusinessProfile } from "@/types/hotelTypes";
import DetailsPageTitle from "@/components/common/detailsPage/DetailsPageTitle";
import { IReservations } from "@/types/reservationTypes";

const DetailsPageDescription = ({
  reservation,
}: {
  reservation: IReservations;
}) => {
  return (
    <div>
      <DetailsPageTitle title={`Description of ${reservation?.name}... :`} />
      <p className="text-xs md:text-base my-5 font-inter font-light md:font-normal leading-6 md:leading-9 text-black">
        {reservation?.description}
      </p>
    </div>
  );
};

export default DetailsPageDescription;
