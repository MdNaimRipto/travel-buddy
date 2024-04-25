import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Tooltip,
} from "@mui/material";
import { FaPlus as ExpandIcon } from "react-icons/fa6";
import { colorConfig } from "@/configs/colorConfig";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { locations } from "@/utils/locations";

const ReservationAreas = () => {
  const { Router } = UseCommonImports();

  const { location, area } = Router.query;

  const allArea = area?.toString().split("+");

  const allSelectedArea =
    allArea && allArea.length > 0 && allArea[allArea.length - 1] === ""
      ? allArea.slice(0, -1)
      : allArea || [];

  const [isOpen, setIsOpen] = useState(false);

  const selectedDestination = locations.find(
    l => l.destination.value === location
  );

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    selectedArea: string
  ) => {
    e.preventDefault(); // Prevent default action of checkbox
    let updatedAreas;
    if (Array.isArray(Router.query.area)) {
      updatedAreas = Router.query.area.includes(selectedArea)
        ? Router.query.area.filter(area => area !== selectedArea)
        : [...Router.query.area, selectedArea];
    } else {
      const currentAreas = Router.query.area || "";
      updatedAreas = currentAreas.includes(selectedArea)
        ? currentAreas.replace(`${selectedArea}+`, "")
        : `${currentAreas}${selectedArea}+`;
    }
    Router.push(
      {
        pathname: Router.pathname,
        query: { ...Router.query, area: updatedAreas },
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <Accordion disabled={!location} onChange={() => setIsOpen(!isOpen)}>
      <AccordionSummary>
        <div className="flex items-center justify-between w-full">
          <h5 className="font-poppins text-base font-medium text-black">
            Reservation Areas
          </h5>
          <ExpandIcon
            size={24}
            color={colorConfig.black}
            className={
              isOpen ? "rotate-45 duration-300" : "rotate-0 duration-300"
            }
          />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {selectedDestination?.areas.map((o, i) => (
            <FormControlLabel
              key={i}
              value={o.value}
              control={
                <Checkbox
                  onChange={e => handleCheckboxChange(e, o.value)}
                  checked={allSelectedArea && allSelectedArea.includes(o.value)}
                  sx={{
                    "&.Mui-checked": {
                      color: colorConfig.secondary,
                    },
                  }}
                />
              }
              label={
                <Tooltip placement="top" title={o.key}>
                  <p className="font-inter text-sm text-black font-normal whitespace-nowrap">
                    {o.key.length >= 18 ? `${o.key.slice(0, 18)}...` : o.key}
                  </p>
                </Tooltip>
              }
              sx={{
                ml: "3px",
              }}
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default ReservationAreas;
