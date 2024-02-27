import React from "react";
import CommonTitle from "../../common/titles/CommonTitle";
import img1 from "@/assets/hotels/hotel1.jpg";
import img2 from "@/assets/hotels/hotel2.jpg";
import img3 from "@/assets/hotels/hotel3.jpg";
import img4 from "@/assets/hotels/hotel4.jpg";
import img5 from "@/assets/hotels/hotel5.jpg";
import img6 from "@/assets/hotels/hotel6.jpg";
import img7 from "@/assets/hotels/hotel7.jpg";
import VerticalHotelCard from "../../common/cards/hotelCards/VerticalHotelCard";
import OnScrollAnimation from "../../animation/OnScrollAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CustomSwiperButtons from "./CustomSwiperButtons";

const BestHotels = () => {
  const cards = [
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
    {
      img: img5.src,
    },
    {
      img: img6.src,
    },
    {
      img: img7.src,
    },
  ];

  return (
    <OnScrollAnimation>
      <div className="container px-4 mb-16">
        <CommonTitle
          title={
            <p className="titleFont flex items-center gap-[6px]">
              Best Hotels{" "}
              <span className="titleFont hidden md:flex">To Stay</span>
            </p>
          }
          path="/hotels"
          linkTitle="Visit All Hotels"
        />
        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            769: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={35}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {cards.map((c, i) => (
            <SwiperSlide key={i}>
              <VerticalHotelCard card={c} key={i} />
            </SwiperSlide>
          ))}
          <CustomSwiperButtons />
        </Swiper>
      </div>
    </OnScrollAnimation>
  );
};

export default BestHotels;
