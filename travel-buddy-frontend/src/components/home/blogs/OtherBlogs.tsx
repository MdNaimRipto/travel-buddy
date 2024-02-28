import { Button } from "@mui/material";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const OtherBlogs = ({ blogs }: { blogs: any }) => {
  const blog = (i: number) => {
    return blogs[(i + 1) % blogs.length];
  };

  return (
    <Swiper
      slidesPerView={3}
      direction={"vertical"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      simulateTouch={false}
      allowTouchMove={false}
      modules={[Autoplay]}
      className="blogsSwiper"
    >
      {blogs.map((b: any, i: number) => (
        <SwiperSlide key={i}>
          <div className="h-full bg-primary w-full">
            <div>{blog(i).title}</div>
            <Button>Click</Button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OtherBlogs;
