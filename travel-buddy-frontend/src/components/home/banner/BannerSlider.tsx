import React, { useEffect, useState } from "react";
import banner01 from "@/assets/banner/banner01.jpg";
import banner02 from "@/assets/banner/banner02.jpg";
import banner03 from "@/assets/banner/banner03.jpg";

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
    <div className="h-3/5 overflow-hidden mb-6">
      {bannerCards.map((card, i) => (
        <div
          key={i}
          className="absolute w-full h-full top-0 left-0"
          style={{
            background: `linear-gradient(45deg, #0000006e, #00000080), url(${card.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: currentSlide === i ? 1 : 0,
            transition: "1.5s ease-in-out",
          }}
        >
          <div className="flex items-center justify-center h-4/5">
            <div className="w-[88%]">
              <h2 className="text-start text-5xl text-white font-bold leading-[70px]">
                <span
                  className={`titleFont ${
                    currentSlide === i && "rotate-180 duration-[1.5s]"
                  }`}
                >
                  {card.title}
                </span>{" "}
                <br />
                <span className="titleFont">With Travel Buddy</span>
              </h2>
              <p className="mt-5 text-white leading-7">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                iusto impedit reiciendis eius repellat! Autem id, iure
                praesentium cumque molestiae ipsa porro cupiditate repellendus
                minima molestias rem ullam et neque
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;
