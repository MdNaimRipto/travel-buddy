import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import WishlistIcon from "@mui/icons-material/Add";
import AuthOptions from "./AuthOptions";
import ResponsiveMenuHandlerButton from "./ResponsiveMenuHandlerButton";
import SearchMenu from "./SearchMenuOptions/SearchMenu";
import ContactUs from "./contactUs/ContactUs";

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
        <IconButton
          sx={{
            color:
              !isScrolled && isHomePage ? colorConfig.white : colorConfig.black,
            transition: ".3s",
            p: 0.3,
            "&:hover": {
              color: colorConfig.secondary,
            },
          }}
        >
          <WishlistIcon />
        </IconButton>
      </Tooltip>
      <ResponsiveMenuHandlerButton
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        isScrolled={isScrolled}
        isHomePage={isHomePage}
      />
      <AuthOptions isScrolled={isScrolled} isHomePage={isHomePage} />
      <ContactUs isScrolled={isScrolled} isHomePage={isHomePage} />
    </div>
  );
};

export default NavSideOptions;
