import React from "react";
import CommonTitle from "../../common/titles/CommonTitle";
import HorizontalHotelCard from "../../common/cards/hotelCards/HorizontalHotelCard";
import OnScrollAnimation from "../../animation/OnScrollAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CustomSwiperButtons from "./CustomSwiperButtons";
import { useGetAllHotelsQuery } from "@/redux/features/hotelApis";
import { IBusinessProfile } from "@/types/hotelTypes";

const BestHotels = () => {
  const { data, isLoading } = useGetAllHotelsQuery({});

  if (isLoading) {
    return <div></div>;
  }

  if (!data) {
    return <div></div>;
  }

  const hotels = data?.data?.data as IBusinessProfile[];

  if (!hotels?.length) {
    return <div></div>;
  }

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
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {hotels.map((c, i) => (
            <SwiperSlide key={i}>
              <HorizontalHotelCard card={c} key={i} />
            </SwiperSlide>
          ))}
          <CustomSwiperButtons />
        </Swiper>
      </div>
    </OnScrollAnimation>
  );
};

export default BestHotels;
