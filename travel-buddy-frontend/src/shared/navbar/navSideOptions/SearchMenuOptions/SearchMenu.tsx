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
      <SearchPage
        isSearchPageOpen={isSearchPageOpen}
        setIsSearchPageOpen={setIsSearchPageOpen}
      />
    </>
  );
};

export default SearchMenu;
