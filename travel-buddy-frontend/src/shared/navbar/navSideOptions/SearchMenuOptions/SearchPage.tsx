import React, { useState } from "react";
import CloseSearchIcon from "@mui/icons-material/CloseRounded";
import { IconButton, Tooltip } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import { useGetAllReservationsQuery } from "@/redux/features/hotelApis/reservationApis";
import { useGetAllHotelsQuery } from "@/redux/features/hotelApis/hotelApis";
import SearchResult from "./SearchResult";

const SearchPage = ({
  isSearchPageOpen,
  setIsSearchPageOpen,
}: {
  isSearchPageOpen: boolean;
  setIsSearchPageOpen: any;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: reservationRes, isLoading: reservationLoading } =
    useGetAllReservationsQuery({
      limit: String("3"),
      searchTerm: searchTerm,
    });

  const { data: hotelRes, isLoading: hotelLoading } = useGetAllHotelsQuery({
    limit: String("3"),
    searchTerm: searchTerm,
  });

  return (
    <div
      className={`bg-white pt-12 xl:pt-24 fixed inset-0 -translate-x-1/2 left-1/2 z-50 ${
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
          onChange={e => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search Here..."
          className="container py-3 md:py-5 border-b border-b-gray px-4 md:px-10 text-xl md:text-2xl lg:text-4xl placeholder:text-gray focus:outline-none"
        />
      </div>
      {searchTerm.length ? (
        <SearchResult
          hotelLoading={hotelLoading}
          hotelRes={hotelRes}
          reservationLoading={reservationLoading}
          reservationRes={reservationRes}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SearchPage;
