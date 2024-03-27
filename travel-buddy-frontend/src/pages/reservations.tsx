import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

interface IQueryType {
  location: string;
  type: string;
  class: string;
}

const Reservations = () => {
  const router = useRouter();

  const { query } = router;

  const filterQuery = query as unknown as IQueryType;

  if (
    filterQuery &&
    (filterQuery.location || filterQuery.type || filterQuery.class)
  ) {
    console.log(filterQuery);
  } else {
    console.log("Nothing to Show");
  }

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
