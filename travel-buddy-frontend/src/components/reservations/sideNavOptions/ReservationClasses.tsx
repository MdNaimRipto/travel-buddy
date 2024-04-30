import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
} from "@mui/material";
import SideNavTitle from "./SideNavTitle";
import SideNavCheckboxOptions from "./SideNavCheckboxOptions";

const ReservationClasses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    {
      label: "1st Class",
      value: "first",
    },
    {
      label: "2nd Class",
      value: "second",
    },
    {
      label: "3rd Class",
      value: "third",
    },
  ];
  return (
    <Accordion onChange={() => setIsOpen(!isOpen)}>
      <AccordionSummary>
        <SideNavTitle title="Reservation Classes" isOpen={isOpen} />
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {options.map((o, i) => (
            <SideNavCheckboxOptions
              key={i}
              option={o}
              queryParam="reservationClasses"
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default ReservationClasses;
