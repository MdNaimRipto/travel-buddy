import ReservationsTopContent from "@/components/reservations/ReservationsTopContent";
import SideNavLayout from "@/layouts/SideNavLayout";
import ReservationsSideNav from "@/components/reservations/ReservationsSideNav";
import React, { ReactElement } from "react";
import ReservationCard from "@/components/reservations/reservationCards/ReservationCard";
import { useGetAllReservationsQuery } from "@/redux/features/hotelApis/reservationApis";
import Loader from "@/components/common/loader/Loader";
import NotFoundMessage from "@/components/common/NotFoundMessage";
import {
  IReservations,
  ReservationsClass,
  ReservationsType,
} from "@/types/reservationTypes";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { Pagination } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import { useEffect } from "react";

const Reservations = () => {
  const { Router } = UseCommonImports();
  const {
    location,
    reservationTypes,
    reservationClasses,
    maxPrice,
    ratings,
    sortOrder,
    limit,
    page,
  } = Router.query;

  const parsedReservationTypes = reservationTypes
    ? Array.isArray(reservationTypes)
      ? reservationTypes
      : reservationTypes.split("+")
    : [];

  const parsedReservationClasses = reservationClasses
    ? Array.isArray(reservationClasses)
      ? reservationClasses
      : reservationClasses.split("+")
    : [];

  const parsedRatings = ratings
    ? Array.isArray(ratings)
      ? ratings
      : ratings.split("+")
    : [];

  const { data, isLoading } = useGetAllReservationsQuery({
    limit: String(limit ?? "10"),
    destination: String(location ?? ""),
    reservationType: parsedReservationTypes as ReservationsType[],
    reservationClass: parsedReservationClasses as ReservationsClass[],
    price: String(maxPrice ?? ""),
    rating: parsedRatings,
    sortOrder: String(sortOrder ?? "asc"),
    sortBy: "price",
    page: String(page ?? ""),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFoundMessage title="No Reservations Found!" />;
  }

  const reservations = data?.data?.data as IReservations[];
  const { page: filterPage, total } = data?.data?.meta as {
    page: number;
    limit: number;
    total: number;
  };

  console.log({ page, total, limit, reservations: reservations.length });

  if (!reservations?.length) {
    return <NotFoundMessage title="No Reservations Found!" />;
  }

  return (
    <div className="my-12">
      {reservations.map((r, i) => (
        <ReservationCard key={i} reservation={r} />
      ))}
      <Pagination
        page={filterPage}
        count={Math.ceil(total / Number(limit ?? 10))}
        onChange={(event: React.ChangeEvent<unknown>, value: number) => {
          Router.push(
            {
              pathname: Router.pathname,
              query: { ...Router.query, page: value },
            },
            undefined,
            { shallow: true }
          );
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        sx={{
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: colorConfig.secondary,
            color: colorConfig.white,
            ":hover": {
              backgroundColor: colorConfig.secondary,
            },
          },
        }}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default Reservations;

Reservations.getLayout = function getLayout(page: ReactElement) {
  return (
    <SideNavLayout
      topContent={<ReservationsTopContent />}
      sideNavChild={<ReservationsSideNav />}
    >
      {page}
    </SideNavLayout>
  );
};
