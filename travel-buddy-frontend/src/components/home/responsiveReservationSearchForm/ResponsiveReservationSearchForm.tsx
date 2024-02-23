import { colorConfig } from "@/configs/colorConfig";
import { Button } from "@mui/material";
import React, { useState } from "react";
import ReservationTypeSelectBox from "./formSelectBoxes/ReservationTypeSelectBox";
import ReservationLocationSelectBox from "./formSelectBoxes/ReservationLocationSelectBox";
import ReservationClassSelectBox from "./formSelectBoxes/ReservationClassSelectBox";
import { UseCommonImports } from "@/utils/UseCommonImports";

const ResponsiveReservationSearchForm = () => {
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
      queryParameters.append("type", reservationType);
    }
    if (reservationClass) {
      queryParameters.append("class", reservationClass);
    }

    setTimeout(() => {
      Router.push(`/reservations?${queryParameters}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="block lg:hidden mb-16 bg-white container md:px-4">
      <form
        onSubmit={handleSearch}
        className="rounded-xl grid grid-cols-1 gap-4 shadow-2xl px-4 pb-8"
      >
        <ReservationLocationSelectBox />
        <ReservationTypeSelectBox />
        <ReservationClassSelectBox />
        <Button
          type="submit"
          className="titleFont"
          sx={{
            background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
            borderRadius: "100px",
            color: colorConfig.white,
            fontWeight: 600,
            py: 2,
          }}
        >
          {loading ? "Loading..." : "Search Reservations"}
        </Button>
      </form>
    </div>
  );
};

export default ResponsiveReservationSearchForm;
