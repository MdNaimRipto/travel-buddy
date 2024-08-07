import React from "react";
import Image from "next/image";
import FeaturesMenuPng from "@/assets/featured-icons/feature-list/menu.png";

const ReservationDescription = () => {
  return (
    <div>
      <div className="flex items-center gap-2 my-6">
        <div className="w-6">
          <Image
            src={FeaturesMenuPng.src}
            alt="Features Menu"
            width={200}
            height={200}
            priority
          />
        </div>
        <h4 className="text-xl font-medium titleFont">
          Description of Phi Phi Islands Adventure Day Trip... :
        </h4>
      </div>
      <p className="my-5 font-inter font-normal leading-9 text-black">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
        sapiente mollitia molestias quaerat provident temporibus magnam eos
        fugit natus ut numquam voluptatibus tempora nam dicta consequuntur
        deserunt, porro magni esse dolore quas incidunt minima? Ad nostrum, eum
        impedit exercitationem dolores, quasi voluptatem hic cum ea
        reprehenderit quisquam architecto nesciunt ullam? Labore voluptatibus
        similique quisquam ducimus commodi. Harum consequatur ipsa blanditiis
        explicabo dolorum repellat deserunt debitis, beatae consectetur ducimus,
        alias aliquam soluta vel maiores unde, sint reprehenderit iure non
        voluptatum sit pariatur est! Totam placeat, accusantium maiores quae,
        enim nobis repellat cumque distinctio molestiae eum aperiam qui
        temporibus culpa quas tempore.
      </p>
    </div>
  );
};

export default ReservationDescription;
