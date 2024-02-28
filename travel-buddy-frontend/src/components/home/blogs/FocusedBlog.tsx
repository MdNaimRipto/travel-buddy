import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import blogImg from "@/assets/blogs/blog-card-img1.png";

const FocusedBlog = ({ blogs }: { blogs: any }) => {
  return (
    <Swiper
      slidesPerView={1}
      direction={"horizontal"}
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
          <div className="h-full w-full overflow-hidden">
            <div className="w-[96%] mx-auto h-4/5 overflow-hidden rounded-lg">
              <Image
                src={blogImg.src}
                alt="Focused Blog Image"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 mt-5">
              <p className="text-xs mb-3 text-gray titleFont">Nov 10, 2023</p>
              <h2 className="text-xl leading-8 titleFont font-medium text-black">
                Our Begin Now What Your Will Bean Forest This Our Agency.
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FocusedBlog;
