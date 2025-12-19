import { Divider } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { IconType } from "react-icons/lib";
import {
  BiSolidDoorOpen as LogoutIcon,
  BiSolidDashboard as SellerDashboardIcon,
} from "react-icons/bi";
import { CiBoxList as MenuIcon } from "react-icons/ci";
import { colorConfig } from "@/configs/colorConfig";
import ProfileAndDashboardSideNavButton from "./ProfileAndDashboardSideNavButton";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { useUserContext } from "@/context/AuthContext";
import { SuccessToast } from "../common/toasts/SuccessToast";
import { signOut } from "next-auth/react";
import { IUser } from "@/types/userTypes";

interface ISideNav {
  icon: IconType;
  name: string;
  path: string;
}

const ProfileAndDashboardSideNav = ({
  items,
  isSideNavOpen,
  setIsSideNavOpen,
  title,
}: {
  items: Array<ISideNav>;
  isSideNavOpen: boolean;
  setIsSideNavOpen: any;
  title: string;
}) => {
  const { user, setUser } = useUserContext();

  const { Router, Cookies } = UseCommonImports();
  const { route } = Router;

  const [isLoading, setIsLoading] = useState(false);

  const handleSideNavOpen = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleLogout = () => {
    setIsLoading(true);

    setTimeout(() => {
      signOut({ redirect: false });
      window.sessionStorage.clear();
    }, 500);

    setTimeout(() => {
      Cookies.remove("userData");
      Cookies.remove("token");
      setUser(null);
      SuccessToast("Logout Successful!");
      setIsLoading(false);
    }, 1000);
  };

  const typedUser = user as IUser;

  return (
    <div className="bg-white rounded-xl w-full h-full overflow-hidden">
      <div className="h-[90%]">
        <div className="px-4 pt-8 pb-10 flex flex-col gap-8 items-center justify-center h-32">
          <ProfileAndDashboardSideNavButton
            title={title}
            Icon={MenuIcon}
            variant="contained"
            color={colorConfig.white}
            backgroundColor={`linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary})`}
            hoverColor={colorConfig.white}
            hoverBackgroundColor={colorConfig.secondary}
            radiusStyle="14px 14px 14px 0px"
            handlerFunction={handleSideNavOpen}
            isSideNavOpen={isSideNavOpen}
          />
        </div>
        <div className="px-4 pb-12 flex flex-col gap-8 items-center justify-center">
          {items.map((item, i) => (
            <Link
              href={item.path}
              key={i}
              className={`text-gray flex items-center gap-6 ${
                isSideNavOpen
                  ? "w-full lg:w-auto xl:w-full"
                  : "w-full lg:w-full xl:w-auto"
              }`}
            >
              <ProfileAndDashboardSideNavButton
                Icon={item.icon}
                title={item.name}
                variant="text"
                color={
                  item.path.startsWith("/user/wishlist")
                    ? route === "/user/wishlist"
                      ? colorConfig.primary
                      : colorConfig.gray
                    : route === item.path
                    ? colorConfig.primary
                    : colorConfig.gray
                }
                backgroundColor={colorConfig.white}
                hoverColor={colorConfig.secondary}
                hoverBackgroundColor={colorConfig.white}
                radiusStyle="0px"
                isSideNavOpen={isSideNavOpen}
              />
            </Link>
          ))}
        </div>
        <Divider sx={{ mx: 3 }} />
        {typedUser?.role === "hotelOwner" && (
          <div className="px-4 pt-12 flex flex-col gap-8 items-center justify-center">
            {!Router.pathname.includes("/dashboard/seller") && (
              <Link
                href={"/dashboard/seller/hotelStatistics"}
                className={`text-gray flex items-center gap-6 ${
                  isSideNavOpen
                    ? "w-full lg:w-auto xl:w-full"
                    : "w-full lg:w-full xl:w-auto"
                }`}
              >
                <ProfileAndDashboardSideNavButton
                  Icon={SellerDashboardIcon}
                  title={"Hotel Dashboard"}
                  variant="text"
                  color={colorConfig.gray}
                  backgroundColor={colorConfig.white}
                  hoverColor={colorConfig.secondary}
                  hoverBackgroundColor={colorConfig.white}
                  radiusStyle="0px"
                  isSideNavOpen={isSideNavOpen}
                />
              </Link>
            )}
          </div>
        )}
        {typedUser?.role === "admin" && (
          <div className="px-4 pt-12 flex flex-col gap-8 items-center justify-center">
            {!Router.pathname.includes("/dashboard/admin") && (
              <Link
                href={"/dashboard/admin/analytics"}
                className={`text-gray flex items-center gap-6 ${
                  isSideNavOpen
                    ? "w-full lg:w-auto xl:w-full"
                    : "w-full lg:w-full xl:w-auto"
                }`}
              >
                <ProfileAndDashboardSideNavButton
                  Icon={SellerDashboardIcon}
                  title={"Admin Dashboard"}
                  variant="text"
                  color={colorConfig.gray}
                  backgroundColor={colorConfig.white}
                  hoverColor={colorConfig.secondary}
                  hoverBackgroundColor={colorConfig.white}
                  radiusStyle="0px"
                  isSideNavOpen={isSideNavOpen}
                />
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="px-4 mb-4 h-14 flex flex-col gap-8 items-center justify-center">
        <ProfileAndDashboardSideNavButton
          title="Logout"
          Icon={LogoutIcon}
          variant="text"
          color={colorConfig.gray}
          backgroundColor={colorConfig.white}
          hoverColor={colorConfig.secondary}
          hoverBackgroundColor={colorConfig.white}
          radiusStyle="14px"
          isSideNavOpen={isSideNavOpen}
          handlerFunction={handleLogout}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default ProfileAndDashboardSideNav;
