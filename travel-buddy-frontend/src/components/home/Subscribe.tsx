import React from "react";
import banner from "@/assets/subscribe.jpg";
import { Button } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import SubscribeIcon from "@mui/icons-material/MarkAsUnread";

const Subscribe = () => {
  return (
    <div
      className="container px-4 pb-3 md:pb-0 grid grid-cols-1 md:grid-cols-2 md:rounded-full"
      style={{
        background: `linear-gradient(45deg, rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.5)), url(${banner.src})`,
        height: "120px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center ml-8">
        <h2 className="titleFont text-white text-lg xl:text-2xl flex whitespace-nowrap gap-1">
          Subscribe{" "}
          <span className="hidden lg:flex titleFont">
            To Get 20% Off On 1st Booking
          </span>
        </h2>
      </div>
      <div className="flex items-center justify-end w-full md:w-[96%]">
        <form className="flex items-center justify-center overflow-hidden rounded-full h-[50px] w-full">
          <input
            type="text"
            className="w-4/5 md:w-[65%] px-5 py-[12px] border border-lightGray focus:outline-none"
            placeholder="Enter Email"
          />
          <Button
            className="titleFont"
            sx={{
              background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
              color: colorConfig.white,
              fontWeight: 600,
              fontSize: 12,
              px: 3,
              py: "16px",
              borderRadius: "0px",
              transition: ".8s",
              "&:hover": {
                background: `linear-gradient(45deg, ${colorConfig.primary}, ${colorConfig.secondary}) !important`,
              },
              whiteSpace: "nowrap",
              width: {
                xs: "20%",
                sm: "35%",
              },
            }}
          >
            <SubscribeIcon
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            />
            <span className="hidden md:block">Subscribe Now</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
