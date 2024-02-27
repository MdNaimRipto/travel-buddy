import React from "react";
import Countdown from "react-countdown";
import bg from "@/assets/great-deals/banner.jpg";
import CommonBtnWithIcon from "@/components/common/buttons/CommonBtnWithIcon";
import NavigateIcon from "@mui/icons-material/OpenInNew";
import { Box } from "@mui/material";
import OnScrollAnimation from "@/components/animation/OnScrollAnimation";

const GreatDeal = () => {
  return (
    <div
      className="mb-16"
      style={{
        background: `linear-gradient(45deg, #0000006e, #00000080), url(${bg.src})`,
        height: "500px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <Box
        sx={{
          background: {
            xs: `linear-gradient(89deg, 
            rgba(246, 236, 226, 0.98) 40.04%,
            rgb(246 236 226) 43%,
            rgb(246 236 226) 46.55%,
            rgb(246 236 226) 49.27%,
            rgb(246 236 226 / 91%) 55.76%,
            rgb(246 236 226 / 78%) 64.69%)`,
            md: `linear-gradient(89deg, 
            rgba(246, 236, 226, 0.98) 40.04%,
            rgb(246 236 226) 43%,
            rgb(246 236 226 / 89%) 46.55%,
            rgb(246 236 226 / 83%) 49.27%,
            rgb(246 236 226 / 62%) 55.76%,
            rgb(246 236 226 / 52%) 64.69%)`,
          },
        }}
      >
        <OnScrollAnimation>
          <div className="container px-4 text-black">
            <div className="flex flex-col gap-4 w-full lg:w-2/5 items-center justify-center h-[500px]">
              <h2 className="text-5xl titleFont font-semibold">Great Deals</h2>
              <p className="text-lg font-medium titleFont">Up To 90% Off</p>
              <p className="w-4/5 md:w-2/5 lg:w-4/5 text-center titleFont text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                laboriosam!
              </p>
              <Countdown
                date={Date.now() + 86400000}
                className="text-3xl titleFont"
                autoStart
              />
              <CommonBtnWithIcon
                title="Book Now"
                icon={
                  <NavigateIcon
                    sx={{
                      fontSize: {
                        xs: 16,
                        sm: 20,
                      },
                    }}
                  />
                }
              />
            </div>
          </div>
        </OnScrollAnimation>
      </Box>
    </div>
  );
};

export default GreatDeal;
