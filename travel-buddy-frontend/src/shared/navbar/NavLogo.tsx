import Image from "next/image";
import React from "react";
import logoOnly from "@/assets/logo-only.webp";
import Link from "next/link";

const NavLogo = ({
  isScrolled,
  isHomePage,
}: {
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  return (
    <Link href={"/"} className="w-[90%] md:w-full xl:w-[36%] flex items-center">
      <Image
        className="w-2/5 md:w-[28%] lg:min-w-[22%] lg:w-[22%]"
        src={logoOnly}
        alt="Navbar-logo"
        width={80}
        height={80}
        loading="lazy"
        placeholder="blur"
        quality={75}
      />
      <div
        className={`w-3/5 md:w-[70%] whitespace-nowrap uppercase ${
          !isScrolled && isHomePage ? "text-white" : "text-black"
        } duration-700`}
      >
        <h2 className="text-xs md:text-lg lg:text-xl mb-1 md:mb-0 titleFont font-[700]">
          Travel-Buddy
        </h2>
        <p className="text-[5px] md:text-[8px] lg:text-[9px] titleFont whitespace-nowrap">
          Your Ultimate Travel Planner
        </p>
      </div>
    </Link>
  );
};

export default NavLogo;
