import React from "react";
import DetailsPageTitle from "./DetailsPageTitle";

const DetailsPageDescription = ({ name }: { name: string }) => {
  return (
    <div>
      <DetailsPageTitle title={`Description of ${name}... :`} />
      <p className="text-xs md:text-base my-5 font-inter font-light md:font-normal leading-6 md:leading-9 text-black">
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

export default DetailsPageDescription;
