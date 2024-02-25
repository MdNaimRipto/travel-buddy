// import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { UseCommonImports } from "@/utils/UseCommonImports";
import React, { ReactElement } from "react";

const MainLayout = ({ children }: { children: ReactElement }) => {
  const { Router } = UseCommonImports();

  const isHomePage = Router.pathname === "/";
  return (
    <div className={`mb-[500px] ${!isHomePage && "mt-[80px]"}`}>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
