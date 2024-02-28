import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CommonTitle from "@/components/common/titles/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import NavigateIcon from "@mui/icons-material/OpenInNew";
import CommonBtnWithIcon from "@/components/common/buttons/CommonBtnWithIcon";
import blogImg1 from "@/assets/blogs/blog1.jpg";
import blogImg2 from "@/assets/blogs/blog2.jpg";
import blogImg3 from "@/assets/blogs/blog3.jpg";

const Blogs = () => {
  const blogs = [
    {
      title: "Our Begin Now What Your Will Bean Forest This Our Agency.",
      date: "Nov 10, 2023",
      img: blogImg1.src,
    },
    {
      title: "Our Begin Now What Your Will Bean Forest This Our Agency.",
      date: "Nov 10, 2023",
      img: blogImg2.src,
    },
    {
      title: "Our Begin Now What Your Will Bean Forest This Our Agency.",
      date: "Nov 10, 2023",
      img: blogImg3.src,
    },
  ];

  const otherBlog = (i: number) => {
    return blogs[(i + 1) % blogs.length];
  };

  return (
    <div className="container px-4 overflow-hidden mb-16">
      <CommonTitle title="Latest Blogs" linkTitle="View All" path="/" />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 lg:px-5 lg:h-[450px] rounded-lg">
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
        >
          {blogs.map((b, i) => (
            <SwiperSlide key={i}>
              <div className="h-full w-full overflow-hidden group cursor-pointer">
                <div className="w-[96%] lg:h-[300px] mx-auto overflow-hidden rounded-lg">
                  <Image
                    src={b.img}
                    alt="Focused Blog Image"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 duration-300"
                    priority
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
        <Swiper
          slidesPerView={2}
          direction={"vertical"}
          autoHeight={true}
          simulateTouch={false}
          allowTouchMove={false}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="otherBlogsSwiper"
        >
          {blogs.map((b, i) => (
            <SwiperSlide key={i}>
              <div className="h-full w-full flex items-center pb-4 overflow-hidden group">
                {/* <div>{rightSideBlog(i).title}</div> */}
                <div className="w-[280px] h-full overflow-hidden rounded-lg">
                  <Image
                    src={otherBlog(i).img}
                    width={400}
                    height={400}
                    alt="Blogs"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 duration-300"
                  />
                </div>
                <div className="px-6 flex flex-col gap-2">
                  <p className="text-sm text-gray titleFont">
                    {otherBlog(i).date}
                  </p>
                  <h2 className="text-base leading-7 titleFont font-medium text-black">
                    {otherBlog(i).title}
                  </h2>
                  <Link
                    href=""
                    className="text-sm text-black titleFont group-hover:text-secondary duration-300 flex items-center gap-1"
                  >
                    <CommonBtnWithIcon
                      title="Read Blog"
                      icon={<NavigateIcon sx={{ fontSize: 16 }} />}
                    />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
