import { colorConfig } from "@/configs/colorConfig";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { Slider } from "@mui/material";
import React from "react";

function valuetext(value: number) {
  return `${value}`;
}

const ReservationsPricing = () => {
  const { Router } = UseCommonImports();
  const { maxPrice } = Router.query;

  return (
    <div className="mt-5 w-11/12 mx-auto px-[2px]">
      <h5 className="font-poppins text-sm md:text-base font-medium text-black">
        {`Reservation's Pricing`}
      </h5>
      <Slider
        onChange={(e: any) => {
          Router.push(
            {
              pathname: Router.pathname,
              query: { ...Router.query, maxPrice: e.target.value.toString() },
            },
            undefined,
            { scroll: false }
          );
        }}
        aria-label="Small steps"
        value={maxPrice ? Number(maxPrice) : 20000}
        getAriaValueText={valuetext}
        step={1000}
        min={1000}
        max={20000}
        valueLabelDisplay="auto"
        sx={{
          color: colorConfig.secondary,
          px: 0,
        }}
      />
      <div className="flex items-center justify-between">
        <input
          type="number"
          readOnly
          value={1000}
          className="border border-lightGray py-2 w-2/6 text-xs font-inter text-center focus:outline-none"
        />
        <input
          type="number"
          readOnly
          value={maxPrice ? Number(maxPrice) : 20000}
          className="border border-lightGray py-2 w-2/6 text-xs font-inter text-center focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ReservationsPricing;
