import { UseCommonImports } from "@/utils/UseCommonImports";
import Link from "next/link";
import React from "react";

const NavMenuItems = ({
  isNavOpen,
  setIsNavOpen,
}: {
  isNavOpen: boolean;
  setIsNavOpen: any;
}) => {
  const { Router } = UseCommonImports();

  const menuItems = [
    {
      item: "Home",
      path: "/",
    },
    {
      item: "Reservations",
      path: "/reservations",
    },
    {
      item: "Destinations",
      path: "/destinations",
    },
    {
      item: "Contact Us",
      path: "/contactUs",
    },
  ];

  return (
    <ul
      className={`flex flex-col xl:flex-row bg-white items-start xl:items-center gap-1 xl:gap-7 absolute top-[80px] z-40 w-4/5 xl:w-full md:w-2/5 h-screen xl:h-[80px] py-4 xl:py-0 pl-5 xl:pl-0 xl:static ${
        isNavOpen ? "left-0" : "-left-[1000px]"
      } duration-300`}
    >
      {menuItems.map((menu, i) => (
        <Link
          onClick={() => setIsNavOpen(!isNavOpen)}
          href={menu?.path ? menu.path : "/"}
          key={i}
          className={`block text-black text-base xl:text-sm h-[55px] xl:h-full`}
        >
          <li
            className={`titleFont font-medium whitespace-nowrap h-[40px] leading-[55px] xl:h-[50px] xl:leading-[80px] ${
              Router.pathname === menu?.path &&
              "text-secondary border-b border-b-secondary"
            }`}
          >
            {menu?.item}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavMenuItems;
