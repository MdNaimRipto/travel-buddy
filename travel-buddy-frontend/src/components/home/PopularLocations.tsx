import React from "react";
import Link from "next/link";
import NavigateIcon from "@mui/icons-material/OpenInNew";
import CommonTitle from "@/components/common/titles/CommonTitle";
import Image from "next/image";
import OnScrollAnimation from "../animation/OnScrollAnimation";

const PopularLocations = () => {
  const locations = [
    {
      img: "https://i.ibb.co.com/vCsfm48p/cox-bazar.jpg",
      name: "Cox's Bazar",
      path: "/reservations?location=Cox%27s+Bazar",
      cols: "lg:col-span-1",
      rows: "lg:row-span-2",
    },
    {
      img: "https://i.ibb.co.com/1YJVc4R3/bandarban.jpg",
      name: "Bandarban",
      path: "/reservations?location=Bandarban",
      cols: "lg:col-span-1",
      rows: "lg:row-span-1",
    },
    {
      img: "https://i.ibb.co.com/whptkskY/saint-martin.jpg",
      name: "Saint Martin",
      path: "/reservations?location=Saint+Martin",
      cols: "lg:col-span-2",
      rows: "lg:row-span-1",
    },
    {
      img: "https://i.ibb.co.com/d04PwW54/sazek.jpg",
      name: "Sajek",
      path: "/reservations?location=Sajek",
      cols: "lg:col-span-1",
      rows: "lg:row-span-1",
    },
    {
      img: "https://i.ibb.co.com/zh3TcbH4/rangamati.jpg",
      name: "Rangamati",
      path: "/reservations?location=Rangamati",
      cols: "lg:col-span-1",
      rows: "lg:row-span-1",
    },
    {
      img: "https://i.ibb.co.com/CKdLRz8s/sundarban.jpg",
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
                // width={300}
                // height={300}
                fill
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
