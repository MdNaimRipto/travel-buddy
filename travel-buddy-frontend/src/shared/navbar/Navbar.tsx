import React, { useEffect, useState } from "react";
import NavLogo from "./NavLogo";
import NavMenuItems from "./NavMenuItems";
import NavSideOptions from "./navSideOptions/NavSideOptions";
import { UseCommonImports } from "@/utils/UseCommonImports";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { Router } = UseCommonImports();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [Router.pathname]);

  const isHomePage = Router.pathname === "/";

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full ${
        isHomePage && !isScrolled ? "bg-[#00000000]" : "bg-white"
      } duration-700 border-b border-b-lightGray pb-[2px]`}
    >
      <div
        className={`h-[80px] container px-4 flex items-center justify-between`}
      >
        <div className="flex items-center gap-5">
          <NavLogo isScrolled={isScrolled} isHomePage={isHomePage} />
          <div className="hidden xl:block">
            <NavMenuItems
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              isScrolled={isScrolled}
              isHomePage={isHomePage}
            />
          </div>
        </div>
        <NavSideOptions
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          isScrolled={isScrolled}
          isHomePage={isHomePage}
        />
        <div className="block xl:hidden">
          <NavMenuItems
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
            isScrolled={isScrolled}
            isHomePage={isHomePage}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
