import React from "react";
import img1 from "@/assets/popular-locations/cox-bazar.jpg";
import img2 from "@/assets/popular-locations/bandarban.jpg";
import img3 from "@/assets/popular-locations/saint-martin.jpg";
import img4 from "@/assets/popular-locations/sazek.jpg";
import img5 from "@/assets/popular-locations/rangamati.jpg";
import img6 from "@/assets/popular-locations/sundarban.jpg";
import Link from "next/link";
import NavigateIcon from "@mui/icons-material/OpenInNew";
import CommonTitle from "@/components/common/titles/CommonTitle";
import Image from "next/image";
import OnScrollAnimation from "../animation/OnScrollAnimation";

const PopularLocations = () => {
  const locations = [
    {
      img: img1.src,
      name: "Cox's Bazar",
      path: "/reservations?location=Cox%27s+Bazar",
      cols: "lg:col-span-1",
      rows: "lg:row-span-2",
    },
    {
      img: img2.src,
      name: "Bandarban",
      path: "/reservations?location=Bandarban",
      cols: "lg:col-span-1",
      rows: "lg:row-span-1",
    },
    {
      img: img3.src,
      name: "Saint Martin",
      path: "/reservations?location=Saint+Martin",
      cols: "lg:col-span-2",
      rows: "lg:row-span-1",
    },
    {
      img: img4.src,
      name: "Sajek",
      path: "/reservations?location=Sajek",
      cols: "lg:col-span-1",
      rows: "lg:row-span-1",
    },
    {
      img: img5.src,
      name: "Rangamati",
      path: "/reservations?location=Rangamati",
      cols: "lg:col-span-1",
      rows: "lg:row-span-1",
    },
    {
      img: img6.src,
      name: "Sundarban",
      path: "/reservations?location=Sundarban",
      cols: "lg:col-span-1",
      rows: "lg:row-span-1",
    },
  ];

  return (
    <OnScrollAnimation>
      <div className="container px-4 mb-16" id="popular-location">
        <CommonTitle
          path="/destinations"
          title="Popular Locations"
          linkTitle="See All"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-4 h-[700px] md:h-[250px] lg:h-[500px]">
          {locations.map((location, i) => (
            <Link
              href={location.path}
              key={i}
              className={`block rounded-xl relative ${location.cols} ${location.rows} group overflow-hidden cursor-pointer`}
            >
              <Image
                src={location.img}
                width={800}
                height={800}
                alt="Location Image"
                loading="lazy"
                className="h-full w-full object-cover brightness-[.68]"
              />
              <h6 className="text-white absolute bottom-4 left-4 xl:bottom-6 xl:left-5 text-lg md:text-base lg:text-lg font-semibold titleFont flex items-center gap-1">
                {location.name}
                <div className="lg:opacity-0 mb-2 lg:-mb-5 lg:group-hover:opacity-100 lg:group-hover:mb-2 duration-500">
                  <NavigateIcon />
                </div>
              </h6>
            </Link>
          ))}
        </div>
      </div>
    </OnScrollAnimation>
  );
};

export default PopularLocations;
