import MainLayout from "@/layouts/MainLayout";
import { ReactElement } from "react";
import Link from "next/link";
import NavigateIcon from "@mui/icons-material/OpenInNew";
import Image from "next/image";
import OnScrollAnimation from "@/components/animation/OpacityTransition";
import l1 from "@/assets/locations/l1.webp";
import l2 from "@/assets/locations/l2.webp";
import l3 from "@/assets/locations/l3.webp";
import l4 from "@/assets/locations/l4.webp";
import l5 from "@/assets/locations/l5.webp";
import l6 from "@/assets/locations/l6.webp";

const Destinations = () => {
  const locations = [
    {
      img: l1,
      name: "Cox's Bazar",
      path: "/reservations?location=Cox%27s+Bazar",
      cols: "lg:col-span-1",
      rows: "lg:row-span-2",
    },
    {
      img: l2,
      name: "Bandarban",
      path: "/reservations?location=Bandarban",
      cols: "lg:col-span-1",
      rows: "lg:row-span-1",
    },
    {
      img: l3,
      name: "Saint Martin",
      path: "/reservations?location=Saint+Martin",
      cols: "lg:col-span-2",
      rows: "lg:row-span-1",
    },
    {
      img: l4,
      name: "Sajek",
      path: "/reservations?location=Sajek",
      cols: "lg:col-span-1",
      rows: "lg:row-span-1",
    },
    {
      img: l5,
      name: "Rangamati",
      path: "/reservations?location=Rangamati",
      cols: "lg:col-span-1",
      rows: "lg:row-span-1",
    },
    {
      img: l6,
      name: "Sundarban",
      path: "/reservations?location=Sundarban",
      cols: "lg:col-span-1",
      rows: "lg:row-span-1",
    },
  ];

  return (
    <OnScrollAnimation>
      <div className="container px-4 mb-16" id="popular-location">
        <h2 className="text-3xl md:text-4xl font-medium text-center titleFont py-16">
          What would be Your{" "}
          <span className="text-secondary titleFont">Destination</span>?
        </h2>
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
                placeholder="blur"
                quality={75}
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

export default Destinations;

Destinations.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
