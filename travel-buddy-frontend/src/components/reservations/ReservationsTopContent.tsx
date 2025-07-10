import React from "react";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { IoHome as HomeIcon } from "react-icons/io5";
import { useRouter } from "next/router";

const ReservationsTopContent = () => {
  const router = useRouter();

  // Extract current query params to preserve them
  const { query } = router;

  // Clean before push
  function cleanQueryParams(params: Record<string, any>) {
    const cleaned: Record<string, any> = {};
    Object.entries(params).forEach(([key, value]) => {
      if (value !== "" && value !== undefined && value !== null) {
        cleaned[key] = value;
      }
    });
    return cleaned;
  }

  // Handler to update query params on select change
  const handleSelectChange = (key: string, value: string) => {
    const newQuery = { ...router.query, [key]: value, page: 1 };
    const cleanedQuery = cleanQueryParams(newQuery);

    router.push(
      {
        pathname: router.pathname,
        query: cleanedQuery,
      },
      undefined,
      { shallow: true }
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <Breadcrumbs>
          <Link href="/" className="text-black font-poppins text-xs md:text-sm">
            <HomeIcon />
          </Link>
          <Link
            href="/reservations"
            className="text-black font-poppins text-xs md:text-sm"
          >
            Reservations
          </Link>
        </Breadcrumbs>
        <Link
          href="/hotels"
          className="hidden md:block text-black font-poppins text-sm hover:text-secondary duration-300"
        >{`Want to Find The Best Hotel's?`}</Link>
      </div>
      <div className="mt-3 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
        <h2 className="titleFont text-sm md:text-xl lg:text-3xl font-medium text-black">
          Explore The Best Reservation to Book
        </h2>
        <div className="lg:w-1/4 flex items-center gap-4">
          <select
            className="w-1/2 p-2 border border-lightGray focus:outline-none font-inter text-sm cursor-pointer"
            onChange={e => handleSelectChange("sortOrder", e.target.value)}
            value={query.sortOrder || ""}
          >
            <option value="">Set Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
          <select
            className="w-1/2 p-2 border border-lightGray focus:outline-none font-inter text-sm cursor-pointer"
            onChange={e => handleSelectChange("limit", e.target.value)}
            value={query.limit || ""}
          >
            <option value="">Set Limit</option>
            <option value="10">10</option>
            <option value="16">16</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ReservationsTopContent;
