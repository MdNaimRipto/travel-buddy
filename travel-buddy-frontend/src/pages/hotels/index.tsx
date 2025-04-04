import HotelsSideNav from "@/components/hotels/HotelsSideNav";
import HotelsTopContent from "@/components/hotels/HotelsTopContent";
import SideNavLayout from "@/layouts/SideNavLayout";
import React, { ReactElement } from "react";
import HorizontalHotelCardV2 from "@/components/common/cards/hotelCards/HorizontalHotelCardV2";
import { useGetAllHotelsQuery } from "@/redux/features/hotelApis";
import Loader from "@/components/common/loader/Loader";
import { IBusinessProfile } from "@/types/hotelTypes";
import NotFoundMessage from "@/components/common/NotFoundMessage";

const Hotels = () => {
  const { data, isLoading } = useGetAllHotelsQuery({});

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFoundMessage title="No Hotels Found!" />;
  }

  const hotels = data?.data?.data as IBusinessProfile[];

  if (!hotels?.length) {
    return <NotFoundMessage title="No Hotels Found!" />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {hotels.map((card, i) => (
        <HorizontalHotelCardV2 key={i} card={card} btnTextStyle="text-xs" />
      ))}
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
