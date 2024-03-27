import React from "react";
import { CommonListsLi, FooterTitle, commonListStyle } from "../footerCommon";

const Discover = () => {
  const discoverList = [
    {
      title: "Hotels",
      path: "/hotels",
    },
    {
      title: "Reservations",
      path: "/reservations",
    },
    {
      title: "Destinations",
      path: "/destinations",
    },
    {
      title: "Contact Us",
      path: "/contactUs",
    },
  ];
  return (
    <div>
      <FooterTitle title="Discover" />
      <ul className={commonListStyle}>
        <CommonListsLi list={discoverList} />
      </ul>
    </div>
  );
};

export default Discover;
