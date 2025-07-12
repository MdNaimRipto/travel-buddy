import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { locations } from "@/utils/locations";
import { UseCommonImports } from "@/utils/UseCommonImports";
import SideNavTitle from "./SideNavTitle";
import { muiCheckedStyle } from "./SideNavUtils";

const Destinations = ({ title }: { title: string }) => {
  const { Router } = UseCommonImports();
  const { location, ...restQuery } = Router.query;

  const [isOpen, setIsOpen] = useState(true);

  const [queryLocation, setQueryLocation] = useState("");
  useEffect(() => {
    setQueryLocation(String(location));
  }, [location]);

  return (
    <div>
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
                    query: {
                      ...Router.query,
                      location: e.target.value,
                      page: 1,
                    },
                  },
                  undefined,
                  { scroll: false }
                );
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              {locations.map((o, i) => (
                <FormControlLabel
                  key={i}
                  value={o.destination.label}
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
      <div className="flex justify-center pb-5 -mt-2">
        <Button
          variant="text"
          color="warning"
          disabled={!location ? true : false}
          onClick={e => {
            Router.push(
              {
                pathname: Router.pathname,
                query: {
                  ...restQuery,
                  page: 1,
                },
              },
              undefined,
              { scroll: false }
            );
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <span className="text-secondary normal-case titleFont font-medium">
            Clear Destination X
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Destinations;
