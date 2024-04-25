import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { UseCommonImports } from "@/utils/UseCommonImports";
import React, { ReactElement } from "react";

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
  return (
    <div
      className={`${!isHomePage && "mt-[80px]"} ${
        isHomePage && "lg:mb-[500px]"
      }`}
    >
      <Navbar />
      <div className="container px-4">
        {topContent}
        <div className="grid grid-cols-4 gap-4">
          <div
            className="col-span-1 rounded-xl"
            style={{
              boxShadow: `0px 0px 8px -5px #000`,
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
