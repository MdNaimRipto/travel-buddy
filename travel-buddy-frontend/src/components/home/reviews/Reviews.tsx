import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Avatar, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/StarRounded";
import StarRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import CommonTitle from "@/components/common/titles/CommonTitle";

const Reviews = () => {
  const comments = [
    "comment 1",
    "comment 2",
    "comment 3",
    "comment 4",
    "comment 5",
    "comment 6",
    "comment 7",
    "comment 8",
  ];

  return (
    <div className="container px-4 overflow-hidden mb-16" id="reviews">
      <CommonTitle title="User Reviews" linkTitle="View All" path="/" />
      <Swiper
        slidesPerView={1}
        breakpoints={{
          1280: {
            slidesPerView: 2,
          },
        }}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="reviewSwiper"
      >
        {comments.map((c, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-10 rounded-[30px] shadow-2xl cursor-pointer">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <Avatar
                  alt="Remy Sharp"
                  src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s176-c-k-c0x00ffffff-no-rj"
                  sx={{
                    width: {
                      xs: 64,
                    },
                    height: {
                      xs: 64,
                    },
                  }}
                />
                <div className="mt-1">
                  <div className="mb-3 flex flex-col md:flex-row gap-3 items-center justify-between">
                    <div className="text-center md:text-start">
                      <h5 className="text-lg titleFont text-black font-medium">
                        MD Naimur Rahman
                      </h5>
                      <p className="text-lightGray text-sm">
                        Dhaka, Bangladesh
                      </p>
                    </div>
                    <Rating
                      value={4}
                      readOnly
                      size="small"
                      icon={<StarIcon sx={{ fontSize: 30 }} />}
                      emptyIcon={<StarRoundedIcon sx={{ fontSize: 30 }} />}
                    />
                  </div>
                  <p className="mb-3 text-xs leading-6 md:text-sm text-justify md:leading-7 font-medium text-black titleFont">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reiciendis voluptatibus, quas eligendi optio dignissimos
                    tempore quisquam suscipit itaque ipsa deleniti ipsum debitis
                    cumque repellat ex!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
