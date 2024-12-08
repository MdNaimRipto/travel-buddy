import Loader from "@/components/common/loader/Loader";
import MenuToggler from "@/components/profileAndDashboard/MenuToggler";
import ProfileAndDashboardSideNav from "@/components/profileAndDashboard/ProfileAndDashboardSideNav";
import { useUserContext } from "@/context/AuthContext";
import Navbar from "@/shared/navbar/Navbar";
import ProfileDashboardFooter from "@/shared/profileDashboardFooter/ProfileDashboardFooter";
import { UseCommonImports } from "@/utils/UseCommonImports";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons/lib";

interface ISideNav {
  icon: IconType;
  name: string;
  path: string;
}

const ProfileDashboardLayout = ({
  children,
  sideNavItem,
}: {
  children: ReactElement;
  sideNavItem: Array<ISideNav>;
}) => {
  const { user } = useUserContext();
  const { Cookies, Router } = UseCommonImports();

  const [isLoading, setIsLoading] = useState(true);

  const sideNavRef = useRef<HTMLDivElement>(null);
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);
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

  const token = Cookies.get("token");

  useEffect(() => {
    if (
      !user ||
      user === null ||
      user === undefined ||
      !token ||
      token === undefined ||
      token === null
    ) {
      Router.replace("/auth/login");
    } else {
      setIsLoading(false);
    }
  }, [Router, token, user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#e7e6e644] pt-[80px] relative">
      <div className="container">
        <Navbar />
        <div className="lg:mt-4 lg:flex gap-4 lg:px-4">
          <div
            ref={sideNavRef}
            className={`fixed lg:sticky top-0 lg:pb-4 z-50 lg:z-40 ${
              !isSticky
                ? "lg:pt-0 h-full lg:h-[90vh]"
                : "lg:pt-[96px] h-full lg:h-[100vh]"
            } ${
              isSideNavOpen
                ? "-left-full lg:left-0 w-4/5 md:w-2/5 lg:w-[7%] xl:w-1/5"
                : "left-0 w-4/5 md:w-2/5 lg:w-1/5 xl:w-[5%]"
            } duration-300`}
          >
            <ProfileAndDashboardSideNav
              items={sideNavItem}
              isSideNavOpen={isSideNavOpen}
              setIsSideNavOpen={setIsSideNavOpen}
            />
          </div>
          <main
            className={`bg-white mb-4 rounded-xl p-4 min-h-screen ${
              isSideNavOpen ? "lg:w-[93%] xl:w-4/5" : "lg:w-4/5 xl:w-[95%]"
            } duration-300`}
          >
            {children}
          </main>
          <div className="lg:hidden">
            <MenuToggler
              isSideNavOpen={isSideNavOpen}
              setIsSideNavOpen={setIsSideNavOpen}
            />
          </div>
        </div>
        <ProfileDashboardFooter />
      </div>
    </div>
  );
};

export default ProfileDashboardLayout;
