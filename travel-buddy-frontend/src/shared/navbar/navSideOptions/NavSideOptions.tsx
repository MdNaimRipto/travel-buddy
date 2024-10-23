import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import WishlistIcon from "@mui/icons-material/Add";
import AuthOptions from "./AuthOptions";
import ResponsiveMenuHandlerButton from "./ResponsiveMenuHandlerButton";
import SearchMenu from "./SearchMenuOptions/SearchMenu";
import ContactUs from "./contactUs/ContactUs";
import Link from "next/link";

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
  return (
    <div className="flex items-center gap-1 justify-end w-full md:w-[70%] xl:w-auto">
      <SearchMenu isScrolled={isScrolled} isHomePage={isHomePage} />
      <Tooltip title="My Wishlist">
        <Link href="/user/wishlist">
          <IconButton
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
      <AuthOptions isScrolled={isScrolled} isHomePage={isHomePage} />
      <ContactUs
        isScrolled={isScrolled}
        isHomePage={isHomePage}
        isNavOpen={isNavOpen}
      />
    </div>
  );
};

export default NavSideOptions;
