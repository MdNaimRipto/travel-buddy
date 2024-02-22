import Image from "next/image";
import React from "react";
import logo from "@/assets/logo-bg-none.png";
import Link from "next/link";

const NavLogo = () => {
  return (
    <Link href={"/"} className="block w-[90%] md:w-3/4 xl:w-[36%] bg-white">
      <Image
        className="w-full"
        src={logo.src}
        alt="Navbar-logo"
        width={200}
        height={200}
        priority
      />
    </Link>
  );
};

export default NavLogo;
