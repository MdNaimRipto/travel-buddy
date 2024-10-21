import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import { locations } from "@/utils/locations";
import { UseCommonImports } from "@/utils/UseCommonImports";
import SideNavTitle from "./SideNavTitle";
import { muiCheckedStyle } from "./SideNavUtils";

const Destinations = ({ title }: { title: string }) => {
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
        <SideNavTitle title={title} isOpen={isOpen} />
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
                control={<Radio sx={muiCheckedStyle} />}
                label={
                  <p className="font-inter text-xs md:text-sm text-black font-medium md:font-normal whitespace-nowrap">
                    {o.destination.label.length >= 18
                      ? `${o.destination.label.slice(0, 18)}...`
                      : o.destination.label}
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
