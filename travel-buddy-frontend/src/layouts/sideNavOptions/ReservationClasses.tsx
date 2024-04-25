import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { FaPlus as ExpandIcon } from "react-icons/fa6";
import { colorConfig } from "@/configs/colorConfig";
import { UseCommonImports } from "@/utils/UseCommonImports";

const ReservationClasses = () => {
  const { Router } = UseCommonImports();

  const { reservationClasses } = Router.query;

  const allClasses = reservationClasses?.toString().split("+");

  const allSelectedClasses =
    allClasses &&
    allClasses.length > 0 &&
    allClasses[allClasses.length - 1] === ""
      ? allClasses.slice(0, -1)
      : allClasses || [];

  console.log(allSelectedClasses);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    selectedClass: string
  ) => {
    e.preventDefault();
    let updatedClasses;

    if (Array.isArray(reservationClasses)) {
      updatedClasses = reservationClasses.includes(selectedClass)
        ? reservationClasses.filter(t => t !== selectedClass)
        : [...reservationClasses, selectedClass];
    } else {
      const currentClasses = reservationClasses || "";
      updatedClasses = currentClasses.includes(selectedClass)
        ? currentClasses.replace(`${selectedClass}+`, "")
        : `${currentClasses}${selectedClass}+`;
    }

    Router.push(
      {
        pathname: Router.pathname,
        query: { ...Router.query, reservationClasses: updatedClasses },
      },
      undefined,
      { scroll: false }
    );
  };

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
        <div className="flex items-center justify-between w-full">
          <h5 className="font-poppins text-base font-medium text-black">
            Reservation Classes
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
          {options.map((o, i) => (
            <FormControlLabel
              key={i}
              value={o.value}
              control={
                <Checkbox
                  onChange={e => handleCheckboxChange(e, o.value)}
                  checked={
                    allSelectedClasses && allSelectedClasses.includes(o.value)
                  }
                  sx={{
                    "&.Mui-checked": {
                      color: colorConfig.secondary,
                    },
                  }}
                />
              }
              label={
                <p className="font-inter text-sm text-black font-normal whitespace-nowrap">
                  {o.label.length >= 18
                    ? `${o.label.slice(0, 18)}...`
                    : o.label}
                </p>
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

export default ReservationClasses;
