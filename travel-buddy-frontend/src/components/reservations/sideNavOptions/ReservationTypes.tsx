import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
} from "@mui/material";
import SideNavTitle from "./SideNavTitle";
import SideNavCheckboxOptions from "./SideNavCheckboxOptions";

const ReservationTypes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    {
      label: "Single",
      value: "single",
    },
    {
      label: "Family",
      value: "family",
    },
    {
      label: "Couple",
      value: "couple",
    },
  ];
  return (
    <Accordion onChange={() => setIsOpen(!isOpen)}>
      <AccordionSummary>
        <SideNavTitle title="Reservation Types" isOpen={isOpen} />
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {options.map((o, i) => (
            <SideNavCheckboxOptions
              key={i}
              option={o}
              queryParam="reservationTypes"
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default ReservationTypes;
