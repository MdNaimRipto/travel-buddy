import { colorConfig } from "@/configs/colorConfig";
import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { IconButton } from "@mui/material";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { IoIosArrowBack as ArrowIcon } from "react-icons/io";

const SideNavLayout = ({
  children,
  sideNavChild,
  topContent,
}: {
  children: ReactElement;
  sideNavChild: ReactElement;
  topContent?: any;
}) => {
  const { Router } = UseCommonImports();

  const isHomePage = Router.pathname === "/";

  const sideNavRef = useRef<HTMLDivElement>(null);
  const [iconButtonLeft, setIconButtonLeft] = useState<number>(0);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (sideNavRef.current) {
      const sideNavWidth = sideNavRef.current.getBoundingClientRect().width;
      console.log(sideNavWidth);
      const iconButtonLeft = isSideNavOpen ? sideNavWidth + 0 : 0;
      setIconButtonLeft(iconButtonLeft);
    }
  }, [isSideNavOpen]);

  return (
    <div
      className={`${!isHomePage && "mt-[80px]"} ${
        isHomePage && "lg:mb-[500px]"
      }`}
    >
      <Navbar />
      <div className="container px-4">
        {topContent}
        <div className="lg:grid grid-cols-4 gap-4 relative">
          <IconButton
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            sx={{
              position: "fixed",
              zIndex: 60,
              top: 50,
              left: iconButtonLeft,
              display: {
                lg: "none",
              },
              transition: ".3s",
              background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
              borderRadius: "0px 4px 4px 0px",
              color: colorConfig.white,
            }}
          >
            <ArrowIcon
              className={`${
                isSideNavOpen ? "rotate-0" : "rotate-180"
              } duration-300`}
            />
          </IconButton>
          <div
            ref={sideNavRef}
            className={`col-span-1 w-4/5 lg:w-full overflow-y-auto scrollBar rounded-xl fixed xl:sticky z-50 xl:z-40 bg-white top-0 h-full xl:h-[calc(100vh)] mb-16 ${
              !isSticky ? "pt-5 xl:pt-0" : "xl:pt-[80px]"
            } ${isSideNavOpen ? "left-0" : "-left-[1000px]"} duration-300`}
            style={{
              boxShadow: `0px 0px 8px -5px #000`,
              // transition: "padding-top 0.3s ease",
            }}
          >
            {sideNavChild}
          </div>
          <main className="col-span-3 min-h-screen">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SideNavLayout;
