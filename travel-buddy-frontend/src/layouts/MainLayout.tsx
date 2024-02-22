// import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import React, { ReactElement } from "react";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="mt-[80px]">
      <Navbar />
      <div className="min-h-screen">{children}</div>
      {/* <ScrollToTopButton /> */}
      <Footer />
    </div>
  );
};

export default MainLayout;
