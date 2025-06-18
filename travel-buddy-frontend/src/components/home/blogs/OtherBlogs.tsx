import CommonBtnWithIcon from "@/components/common/buttons/CommonBtnWithIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NavigateIcon from "@mui/icons-material/OpenInNew";

const OtherBlogs = ({
  blogs,
  currentFocusedBlog,
}: {
  blogs: Array<{
    title: string;
    date: string;
    img: any;
  }>;
  currentFocusedBlog: number;
}) => {
  const [otherBlogs, setOtherBlogs] = useState<Array<any>>([]);

  useEffect(() => {
    const filteredBlogs = blogs.filter((_, i) => i !== currentFocusedBlog);
    setOtherBlogs(filteredBlogs);
  }, [currentFocusedBlog, blogs]);

  return (
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
      {otherBlogs.map((b, i) => (
        <SwiperSlide key={i}>
          <div className="h-full w-full flex items-center pb-4 overflow-hidden group">
            {/* <div>{rightSideBlog(i).title}</div> */}
            <div className="w-[280px] h-full overflow-hidden rounded-lg">
              <Image
                src={b.img}
                width={400}
                height={400}
                alt="Blogs"
                className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 duration-300"
                loading="lazy"
                quality={75}
                placeholder="blur"
              />
            </div>
            <div className="px-6 flex flex-col gap-2">
              <p className="text-sm text-gray titleFont">{b.date}</p>
              <h2 className="text-base leading-7 titleFont font-medium text-black">
                {b.title}
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
  );
};

export default OtherBlogs;
