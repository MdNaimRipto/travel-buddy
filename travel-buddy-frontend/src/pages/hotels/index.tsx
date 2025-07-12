import HotelsSideNav from "@/components/hotels/HotelsSideNav";
import HotelsTopContent from "@/components/hotels/HotelsTopContent";
import SideNavLayout from "@/layouts/SideNavLayout";
import React, { ReactElement } from "react";
import HorizontalHotelCardV2 from "@/components/common/cards/hotelCards/HorizontalHotelCardV2";
import { useGetAllHotelsQuery } from "@/redux/features/hotelApis/hotelApis";
import Loader from "@/components/common/loader/Loader";
import { IBusinessProfile } from "@/types/hotelTypes";
import NotFoundMessage from "@/components/common/NotFoundMessage";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { Pagination } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const Hotels = () => {
  const { Router } = UseCommonImports();
  const { location, maxPrice, ratings, sortOrder, limit, page } = Router.query;

  const parsedRatings = ratings
    ? Array.isArray(ratings)
      ? ratings
      : ratings.split("+")
    : [];

  const { data, isLoading } = useGetAllHotelsQuery({
    limit: String(limit ?? "9"),
    destination: String(location ?? ""),
    startingPrice: String(maxPrice ?? ""),
    totalRating: parsedRatings,
    sortOrder: String(sortOrder ?? "asc"),
    sortBy: "startingPrice",
    page: String(page ?? ""),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFoundMessage title="No Hotels Found!" />;
  }

  const hotels = data?.data?.data as IBusinessProfile[];
  const { page: filterPage, total } = data?.data?.meta as {
    page: number;
    limit: number;
    total: number;
  };

  if (!hotels?.length) {
    return <NotFoundMessage title="No Hotels Found!" />;
  }

  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen">
        {hotels.map((card, i) => (
          <HorizontalHotelCardV2 key={i} card={card} btnTextStyle="text-xs" />
        ))}
      </div>
      <div className="my-12 flex items-center justify-center">
        <Pagination
          page={filterPage}
          count={Math.ceil(total / Number(limit ?? 9))}
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
    </div>
  );
};

export default Hotels;

Hotels.getLayout = function getLayout(page: ReactElement) {
  return (
    <SideNavLayout
      topContent={<HotelsTopContent />}
      sideNavChild={<HotelsSideNav />}
    >
      {page}
    </SideNavLayout>
  );
};
