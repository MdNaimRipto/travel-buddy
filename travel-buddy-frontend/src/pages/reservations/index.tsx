import ReservationsTopContent from "@/components/reservations/ReservationsTopContent";
import SideNavLayout from "@/layouts/SideNavLayout";
import ReservationsSideNav from "@/components/reservations/ReservationsSideNav";
import React, { ReactElement } from "react";

const Reservations = () => {
  return (
    <div className="">
      <h2>Responsive Page</h2>
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
