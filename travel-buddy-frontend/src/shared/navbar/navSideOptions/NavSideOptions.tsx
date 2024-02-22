import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import WishlistIcon from "@mui/icons-material/Add";
import AuthOptions from "./AuthOptions";
import ResponsiveMenuHandlerButton from "./ResponsiveMenuHandlerButton";
import SearchMenu from "./SearchMenuOptions/SearchMenu";

const NavSideOptions = ({
  isNavOpen,
  setIsNavOpen,
}: {
  isNavOpen: boolean;
  setIsNavOpen: any;
}) => {
  return (
    <div className="flex items-center gap-1 justify-end w-full xl:w-auto">
      <SearchMenu />
      <Tooltip title="My Wishlist">
        <IconButton
          sx={{
            color: colorConfig.black,
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
      />
      <AuthOptions />
    </div>
  );
};

export default NavSideOptions;
