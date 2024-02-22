import React from "react";
import CloseSearchIcon from "@mui/icons-material/CloseRounded";
import { IconButton, Tooltip } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const SearchPage = ({
  isSearchPageOpen,
  setIsSearchPageOpen,
}: {
  isSearchPageOpen: boolean;
  setIsSearchPageOpen: any;
}) => {
  return (
    <div
      className={`bg-white pt-12 xl:pt-24 fixed top-0 left-0 h-screen w-full z-50 overflow-hidden ${
        isSearchPageOpen ? "flex items-start justify-center" : "hidden"
      }`}
    >
      <Tooltip title={"Close Search Menu"}>
        <IconButton
          sx={{
            position: "fixed",
            top: {
              xs: 16,
              md: 30,
            },
            right: {
              xs: 10,
              md: 80,
            },
            color: colorConfig.black,
          }}
          onClick={() => setIsSearchPageOpen(false)}
        >
          <CloseSearchIcon
            sx={{
              fontSize: {
                xs: 30,
                md: 40,
              },
            }}
          />
        </IconButton>
      </Tooltip>
      <input
        placeholder="Search Here..."
        className="w-[96%] lg:w-[80%] py-3 md:py-5 border-b border-b-gray px-4 md:px-10 text-xl md:text-2xl lg:text-4xl placeholder:text-gray focus:outline-none"
      />
    </div>
  );
};

export default SearchPage;
