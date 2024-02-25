import { UseCommonImports } from "@/utils/UseCommonImports";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo-bg-none.png";
import Image from "next/image";
import CloseMenuIcon from "@mui/icons-material/CloseRounded";
import { IconButton } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const NavMenuItems = ({
  isNavOpen,
  setIsNavOpen,
  isScrolled,
  isHomePage,
}: {
  isNavOpen: boolean;
  setIsNavOpen: any;
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  const { Router } = UseCommonImports();

  const menuItems = [
    {
      item: "Home",
      path: "/",
      opacityDelay: ".8s",
    },
    {
      item: "Hotels",
      path: "/hotels",
      opacityDelay: ".9s",
    },
    {
      item: "Reservations",
      path: "/reservations",
      opacityDelay: "1s",
    },
    {
      item: "Destinations",
      path: "/destinations",
      opacityDelay: "1.1s",
    },
    {
      item: "Contact Us",
      path: "/contact",
      opacityDelay: "1.2s",
    },
  ];

  return (
    <ul
      className={`bg-white xl:bg-[#00000000] flex flex-col xl:flex-row items-start xl:items-center gap-1 xl:gap-7 absolute top-0 z-40 w-full md:w-2/5 xl:w-full h-screen xl:h-[80px] py-4 xl:py-0 pl-5 xl:pl-0 xl:static ${
        isNavOpen ? "left-0" : "-left-[1000px]"
      } duration-1000 ease-in-out`}
    >
      <div className="flex xl:hidden items-start justify-between w-full pr-5 mb-3">
        <div></div>
        <Link href="/" onClick={() => setIsNavOpen(false)}>
          <Image
            src={logo.src}
            width={400}
            height={400}
            className="w-[170px]"
            alt="Logo"
            priority
          />
        </Link>
        <IconButton
          onClick={() => setIsNavOpen(!isNavOpen)}
          sx={{
            color: colorConfig.black,
            p: 0.3,
            opacity: {
              xs: 1,
              sm: 0,
            },
          }}
        >
          <CloseMenuIcon />
        </IconButton>
      </div>
      {menuItems.map((menu, i) => (
        <Link
          onClick={() => setIsNavOpen(false)}
          href={menu?.path ? menu.path : "/"}
          key={i}
          className={`block ${
            !isScrolled && isHomePage
              ? "text-black xl:text-white"
              : "text-black xl:text-black"
          } text-base xl:text-sm h-[55px] xl:h-full duration-300 last:md:hidden`}
        >
          <li
            className={`titleFont font-medium whitespace-nowrap h-[40px] leading-[55px] xl:h-[50px] xl:leading-[80px] ${
              Router.pathname === menu?.path &&
              "text-secondary border-b border-b-secondary"
            } ${
              isNavOpen
                ? `opacity-100 duration-700 mt-0`
                : "opacity-0 xl:opacity-100 mt-3 xl:mt-0"
            }`}
            style={{
              transitionDelay: isNavOpen ? menu.opacityDelay : "0s",
            }}
          >
            {menu?.item}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavMenuItems;
