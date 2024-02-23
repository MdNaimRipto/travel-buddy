import React, { useEffect, useState } from "react";
import banner01 from "@/assets/banner/banner01.jpg";
import banner02 from "@/assets/banner/banner02.jpg";
import banner03 from "@/assets/banner/banner03.jpg";
import { Button } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import Link from "next/link";
import Image from "next/image";

const BannerSlider = () => {
  const bannerCards = [
    {
      img: banner01.src,
      title: "Discover Your Ideal Mountain Retreat",
    },
    {
      img: banner02.src,
      title: "Find Your Perfect Beach Getaway",
    },
    {
      img: banner03.src,
      title: "Plan Your Serene Nature Adventure",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextSlide = (currentSlide + 1) % bannerCards.length;
      setCurrentSlide(nextSlide);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [bannerCards.length, currentSlide]);

  return (
    <div className="h-3/5 md:h-1/2 lg:h-3/5  overflow-hidden mb-6">
      {bannerCards.map((card, i) => (
        <div
          key={i}
          className="absolute w-full h-full top-0 left-0"
          style={{
            // background: `linear-gradient(45deg, #0000006e, #00000080), url(${card.img})`,
            // backgroundPosition: "center",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            opacity: currentSlide === i ? 1 : 0,
            transition: "1.5s ease-in-out",
          }}
        >
          <Image
            src={card.img}
            alt="Banner Image"
            // width={1200}
            // height={1200}
            objectFit={"cover"}
            layout={"fill"}
            priority
            className="absolute -z-10 brightness-[.55]"
          />
          <div className="flex items-center justify-center h-full md:h-3/5 lg:h-4/5">
            <div className="w-full px-4 md:px-0 md:w-[88%]">
              <h2 className="text-center md:text-start text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] lg:leading-[65px] xl:leading-[85px] text-white font-bold">
                <span
                  className={`titleFont ${
                    currentSlide === i && "rotate-180 duration-[1.5s]"
                  }`}
                >
                  {card.title}
                </span>
                <br />
                <span className="hidden md:block titleFont">
                  With Travel Buddy
                </span>
              </h2>
              <p className="text-center md:text-start mt-5 text-white text-sm md:text-base leading-6 md:leading-7">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                iusto impedit{" "}
                <span className="hidden md:contents">
                  reiciendis eius repellat! Autem id, iure praesentium cumque
                  molestiae ipsa porro cupiditate repellendus minima molestias
                  rem
                </span>
              </p>
              <Link
                href="/reservations"
                className="flex justify-center mt-5 md:hidden"
              >
                <Button
                  sx={{
                    background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
                    color: colorConfig.white,
                    fontWeight: 600,
                    fontSize: 12,
                    px: 2,
                  }}
                >
                  Book Reservation Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;
