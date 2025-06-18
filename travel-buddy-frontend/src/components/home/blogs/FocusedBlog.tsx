import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import NavigateIcon from "@mui/icons-material/OpenInNew";

const FocusedBlog = ({
  blogs,
  setCurrentFocusedBlog,
}: {
  blogs: Array<{
    title: string;
    date: string;
    img: any;
  }>;
  setCurrentFocusedBlog: any;
}) => {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 1,
        },
      }}
      direction={"horizontal"}
      autoHeight={true}
      simulateTouch={false}
      allowTouchMove={false}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="focusedBlogSwiper"
      onSlideChange={swiper => setCurrentFocusedBlog(swiper.activeIndex)}
    >
      {blogs.map((b, i) => (
        <SwiperSlide key={i}>
          <div className="h-full w-full overflow-hidden group cursor-pointer">
            <div className="w-[96%] lg:h-[300px] mx-auto overflow-hidden rounded-lg">
              <Image
                src={b.img}
                alt="Focused Blog Image"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 duration-300"
                loading="lazy"
                quality={75}
                placeholder="blur"
              />
            </div>
            <div className="px-6 flex flex-col gap-1 mt-3">
              <p className="text-xs text-gray titleFont">{b.date}</p>
              <h2 className="text-sm md:text-base leading-7 titleFont font-medium text-black">
                {b.title}
              </h2>
              <Link
                href=""
                className="text-sm text-black titleFont group-hover:text-secondary duration-300 flex items-center gap-1"
              >
                <span>Read Blog</span>
                <NavigateIcon sx={{ fontSize: 16 }} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FocusedBlog;
