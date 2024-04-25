import { colorConfig } from "@/configs/colorConfig";
import { Button } from "@mui/material";
import React, { useState } from "react";
import ReservationTypeSelectBox from "./formSelectBoxes/ReservationTypeSelectBox";
import ReservationLocationSelectBox from "./formSelectBoxes/ReservationLocationSelectBox";
import ReservationClassSelectBox from "./formSelectBoxes/ReservationClassSelectBox";
import { UseCommonImports } from "@/utils/UseCommonImports";

const BannerSearchForm = () => {
  const { Router } = UseCommonImports();

  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    const form = e.target as HTMLFormElement;
    const reservationLocation = form.reservationLocation.value;
    const reservationType = form.reservationType.value;
    const reservationClass = form.reservationClass.value;

    const queryParameters = new URLSearchParams();

    if (reservationLocation) {
      queryParameters.append("location", reservationLocation);
    }
    if (reservationType) {
      queryParameters.append("reservationTypes", `${reservationType}+`);
    }
    if (reservationClass) {
      queryParameters.append("reservationClasses", `${reservationClass}+`);
    }

    setTimeout(() => {
      Router.push(`/reservations?${queryParameters}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container hidden lg:block h-2/5 relative z-0 overflow-hidden">
      <form
        onSubmit={handleSearch}
        className="bg-white bg-opacity-20 backdrop-blur rounded-full absolute top-0 left-1/2 -translate-x-1/2 w-[94%] h-2/5 grid grid-cols-4 py-8 px-8"
      >
        <ReservationLocationSelectBox />
        <ReservationTypeSelectBox />
        <ReservationClassSelectBox />
        <Button
          type="submit"
          className="titleFont"
          sx={{
            background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
            borderRadius: "0px 100px 100px 0px",
            color: colorConfig.white,
            fontWeight: 600,
            whiteSpace: "nowrap",
            fontSize: {
              xs: 12,
              md: 16,
            },
          }}
        >
          {loading ? (
            <span>Loading...</span>
          ) : (
            <span className="flex items-center gap-1">
              Search <span className="hidden xl:flex">Reservation</span>
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default BannerSearchForm;
