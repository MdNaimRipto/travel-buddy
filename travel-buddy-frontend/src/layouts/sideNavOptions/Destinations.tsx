import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FaPlus as ExpandIcon } from "react-icons/fa6";
import { colorConfig } from "@/configs/colorConfig";
import { locations } from "@/utils/locations";
import { UseCommonImports } from "@/utils/UseCommonImports";

const Destinations = () => {
  const { Router } = UseCommonImports();
  const { location } = Router.query;

  const [isOpen, setIsOpen] = useState(true);
  const [queryLocation, setQueryLocation] = useState("");
  useEffect(() => {
    setQueryLocation(String(location));
  }, [location]);

  return (
    <Accordion defaultExpanded onChange={() => setIsOpen(!isOpen)}>
      <AccordionSummary>
        <div className="flex items-center justify-between w-full">
          <h5 className="font-poppins text-base font-medium text-black">
            Destination
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
          <RadioGroup
            value={queryLocation}
            name="radio-buttons-group"
            onChange={e => {
              Router.push(
                {
                  pathname: Router.pathname,
                  query: { ...Router.query, location: e.target.value },
                },
                undefined,
                { scroll: false }
              );
            }}
          >
            {locations.map((o, i) => (
              <FormControlLabel
                key={i}
                value={o.destination.value}
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: colorConfig.secondary,
                      },
                    }}
                  />
                }
                label={
                  <p className="font-inter text-sm text-black font-normal whitespace-nowrap">
                    {o.destination.key.length >= 18
                      ? `${o.destination.key.slice(0, 18)}...`
                      : o.destination.key}
                  </p>
                }
                sx={{
                  ml: "3px",
                }}
              />
            ))}
          </RadioGroup>
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default Destinations;
