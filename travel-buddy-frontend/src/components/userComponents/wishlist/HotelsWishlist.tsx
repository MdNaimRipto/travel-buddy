import HorizontalHotelCardV2 from "@/components/common/cards/hotelCards/HorizontalHotelCardV2";
import React from "react";
import img1 from "@/assets/hotels/hotel1.jpg";
import img2 from "@/assets/hotels/hotel2.jpg";
import img3 from "@/assets/hotels/hotel3.jpg";
import img4 from "@/assets/hotels/hotel4.jpg";

const HotelsWishlist = () => {
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
  for (let i = 1; i <= 2; i++) {
    fakeHotels.push(...generateHotel(i));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {fakeHotels.map((card, i) => (
        <HorizontalHotelCardV2 key={i} card={card} btnTextStyle="text-xs" />
      ))}
    </div>
  );
};

export default HotelsWishlist;
