import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import WishlistIcon from "@mui/icons-material/Add";
import AuthOptions from "./AuthOptions";
import ResponsiveMenuHandlerButton from "./ResponsiveMenuHandlerButton";
import SearchMenu from "./SearchMenuOptions/SearchMenu";
import ContactUs from "./contactUs/ContactUs";
import Link from "next/link";
import { useUserContext } from "@/context/AuthContext";
import ProfileAndDashboardDropDown from "./ProfileAndDashboardDropDown";

const NavSideOptions = ({
  isNavOpen,
  setIsNavOpen,
  isScrolled,
  isHomePage,
}: {
  isNavOpen: boolean;
  setIsNavOpen: any;
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  const { user } = useUserContext();

  return (
    <div className="flex items-center gap-1 justify-end w-full md:w-[70%] xl:w-auto">
      <SearchMenu isScrolled={isScrolled} isHomePage={isHomePage} />
      <Tooltip title={user ? "My Wishlist" : ""}>
        <Link href={user ? "/user/wishlist?wishlistFor=HOTEL" : ""}>
          <IconButton
            disabled={!user}
            sx={{
              color:
                !isScrolled && isHomePage
                  ? colorConfig.white
                  : colorConfig.black,
              transition: ".7s",
              p: 0.3,
              "&:hover": {
                color: colorConfig.secondary,
              },
              ":disabled": {
                cursor: "not-allowed",
                pointerEvents: "all !important",
                color:
                  !isScrolled && isHomePage
                    ? colorConfig.white
                    : colorConfig.lightGray,
                "&:hover": {
                  color:
                    !isScrolled && isHomePage
                      ? colorConfig.white
                      : colorConfig.lightGray,
                },
              },
            }}
          >
            <WishlistIcon />
          </IconButton>
        </Link>
      </Tooltip>
      <ResponsiveMenuHandlerButton
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        isScrolled={isScrolled}
        isHomePage={isHomePage}
      />
      {!user ? (
        <AuthOptions isScrolled={isScrolled} isHomePage={isHomePage} />
      ) : (
        <ProfileAndDashboardDropDown
          user={user}
          isScrolled={isScrolled}
          isHomePage={isHomePage}
        />
      )}
      <ContactUs
        isScrolled={isScrolled}
        isHomePage={isHomePage}
        isNavOpen={isNavOpen}
      />
    </div>
  );
};

export default NavSideOptions;
