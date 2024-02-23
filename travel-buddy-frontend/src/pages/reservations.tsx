import MainLayout from "@/layouts/MainLayout";
import React, { ReactElement } from "react";

const Reservations = () => {
  return (
    <div className="bg-info h-screen">
      <h2>Responsive Page</h2>
    </div>
  );
};

export default Reservations;

Reservations.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
