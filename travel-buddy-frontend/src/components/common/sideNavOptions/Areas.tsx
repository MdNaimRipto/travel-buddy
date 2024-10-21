import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
} from "@mui/material";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { locations } from "@/utils/locations";
import SideNavTitle from "./SideNavTitle";
import SideNavCheckboxOptions from "./SideNavCheckboxOptions";

const Areas = ({ title }: { title: string }) => {
  const { Router } = UseCommonImports();
  const [isOpen, setIsOpen] = useState(false);

  const { location } = Router.query;

  const selectedDestination = locations.find(
    l => l.destination.value === location
  );

  return (
    <Accordion disabled={!location} onChange={() => setIsOpen(!isOpen)}>
      <AccordionSummary>
        <SideNavTitle title={title} isOpen={isOpen} />
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {selectedDestination?.areas.map((o, i) => (
            <SideNavCheckboxOptions option={o} queryParam="area" key={i} />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default Areas;
