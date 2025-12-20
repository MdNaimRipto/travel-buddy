import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import { IconButton, Tooltip } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import SearchPage from "./SearchPage";

const SearchMenu = ({
  isScrolled,
  isHomePage,
}: {
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  const [isSearchPageOpen, setIsSearchPageOpen] = useState(false);
  return (
    <>
      <Tooltip title="Search Now">
        <IconButton
          onClick={() => setIsSearchPageOpen(true)}
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
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <div className={`relative ${isSearchPageOpen ? "z-0" : "-z-50"}`}>
        <SearchPage
          isSearchPageOpen={isSearchPageOpen}
          setIsSearchPageOpen={setIsSearchPageOpen}
        />
      </div>
    </>
  );
};

export default SearchMenu;
