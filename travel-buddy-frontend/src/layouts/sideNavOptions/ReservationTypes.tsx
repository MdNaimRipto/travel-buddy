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

const ReservationTypes = () => {
  const { Router } = UseCommonImports();

  const { reservationTypes } = Router.query;

  const allTypes = reservationTypes?.toString().split("+");

  const allSelectedTypes =
    allTypes && allTypes.length > 0 && allTypes[allTypes.length - 1] === ""
      ? allTypes.slice(0, -1)
      : allTypes || [];

  console.log(allSelectedTypes);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    selectedType: string
  ) => {
    e.preventDefault();
    let updatedTypes;

    if (Array.isArray(reservationTypes)) {
      updatedTypes = reservationTypes.includes(selectedType)
        ? reservationTypes.filter(t => t !== selectedType)
        : [...reservationTypes, selectedType];
    } else {
      const currentTypes = reservationTypes || "";
      updatedTypes = currentTypes.includes(selectedType)
        ? currentTypes.replace(`${selectedType}+`, "")
        : `${currentTypes}${selectedType}+`;
    }

    Router.push(
      {
        pathname: Router.pathname,
        query: { ...Router.query, reservationTypes: updatedTypes },
      },
      undefined,
      { scroll: false }
    );
  };

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
        <div className="flex items-center justify-between w-full">
          <h5 className="font-poppins text-base font-medium text-black">
            Reservation Types
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
                    allSelectedTypes && allSelectedTypes.includes(o.value)
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

export default ReservationTypes;
