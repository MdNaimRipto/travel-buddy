import React, { useEffect, useState } from "react";
import Link from "next/link";
import CommonButton from "@/components/common/buttons/CommonButton";
import Transition from "@/components/animation/Transition";
import Image from "next/image";

const BannerSlider = () => {
  const bannerCards = [
    {
      img: "https://i.ibb.co.com/tpGLRxng/banner01.jpg",
      title: "Explore the Serenity of the Mountains",
    },
    {
      img: "https://i.ibb.co.com/20F4jbYt/banner02.jpg",
      title: "Explore Mount Fuji's City and Lake Charm",
    },
    {
      img: "https://i.ibb.co.com/TMS36RJW/banner03.jpg",
      title: "Escape to the Charm of Countryside Living",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextSlide = (currentSlide + 1) % bannerCards.length;
      setCurrentSlide(nextSlide);
    }, 7000);

    return () => {
      clearTimeout(timer);
    };
  }, [bannerCards.length, currentSlide]);

  return (
    <div className="h-3/5 md:h-2/5 lg:h-3/5  overflow-hidden mb-6">
      {bannerCards.map((card, i) => (
        <div
          key={i}
          className={`absolute w-full h-full top-0 left-0 ${
            currentSlide === i ? "opacity-100" : "opacity-0"
          } transition-opacity duration-[2.5s] ease-in-out`}
        >
          <Image
            src={card.img}
            alt="Banner Image"
            className={`w-full bg-lightGray h-full object-cover absolute z-0 brightness-[.65] ${
              currentSlide === i ? "opacity-100" : "opacity-0"
            } duration-[2.5s]`}
            // width={card.img.width}
            // height={card.img.height}
            fill
            priority
          />
          <Transition>
            <div className="relative z-10 w-full container flex items-center justify-center h-full lg:h-4/5 pt-0 md:pt-[50px] lg:pt-0">
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Soluta iusto impedit{" "}
                  <span className="hidden md:contents">
                    reiciendis eius repellat! Autem id, iure praesentium cumque
                    molestiae ipsa porro cupiditate repellendus minima molestias
                    rem
                  </span>
                </p>
                <Link
                  href="/reservations"
                  className="flex justify-center md:justify-start mt-5 w-full md:w-[33%] lg:hidden"
                >
                  <CommonButton title="Book Reservation Now" />
                </Link>
              </div>
            </div>
          </Transition>
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;
