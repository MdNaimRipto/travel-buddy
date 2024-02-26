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
      className={`bg-white pt-12 xl:pt-24 fixed top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 z-50 overflow-hidden ${
        isSearchPageOpen ? "h-screen w-full opacity-100" : "w-0 h-0 opacity-0"
      } duration-500`}
    >
      <div
        className={`flex items-start justify-center ${
          isSearchPageOpen ? "mt-0 opacity-100" : "mt-3 opacity-0"
        } delay-[.4s] duration-700`}
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
    </div>
  );
};

export default SearchPage;
