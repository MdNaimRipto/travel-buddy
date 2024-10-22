import HotelsSideNav from "@/components/hotels/HotelsSideNav";
import HotelsTopContent from "@/components/hotels/HotelsTopContent";
import SideNavLayout from "@/layouts/SideNavLayout";
import React, { ReactElement } from "react";
import img1 from "@/assets/hotels/hotel1.jpg";
import img2 from "@/assets/hotels/hotel2.jpg";
import img3 from "@/assets/hotels/hotel3.jpg";
import img4 from "@/assets/hotels/hotel4.jpg";
import VerticalHotelCardV2 from "@/components/common/cards/hotelCards/VerticalHotelCardV2";

const Hotels = () => {
  const generateHotel = (id: number) => {
    return [
      {
        img: img1.src,
      },
      {
        img: img2.src,
      },
      {
        img: img3.src,
      },
      {
        img: img4.src,
      },
    ];
  };

  const fakeHotels: any[] = [];
  for (let i = 1; i <= 3; i++) {
    fakeHotels.push(...generateHotel(i));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {fakeHotels.map((card, i) => (
        <VerticalHotelCardV2 key={i} card={card} btnTextStyle="text-xs" />
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
