import React, { useState } from "react";
import NavLogo from "./NavLogo";
import NavMenuItems from "./NavMenuItems";
import NavSideOptions from "./navSideOptions/NavSideOptions";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-white">
      <div className="h-[80px] container px-4 flex items-center justify-between bg-white border-b border-b-lightGray pb-[2px]">
        <div className="flex items-center gap-5">
          <NavLogo />
          <div className="hidden xl:block">
            <NavMenuItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          </div>
        </div>
        <NavSideOptions isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <div className="block xl:hidden">
          <NavMenuItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
