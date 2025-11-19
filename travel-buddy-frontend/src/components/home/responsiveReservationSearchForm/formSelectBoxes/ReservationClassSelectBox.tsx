import { style } from "@/utils/responsiveReservationSearchForm/responsiveReservationSearchForm";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

const ReservationClassSelectBox = () => {
  const [reservationClass, setReservationClass] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setReservationClass(event.target.value);
  };

  const options = [
    {
      label: "Standard",
      value: "Standard",
    },
    {
      label: "Deluxe",
      value: "Deluxe",
    },
    {
      label: "Executive",
      value: "Executive",
    },
    {
      label: "Suite",
      value: "Suite",
    },
    {
      label: "Presidential",
      value: "Presidential",
    },
  ];

  return (
    <Select
      value={reservationClass}
      onChange={handleChange}
      displayEmpty
      name="reservationClass"
      inputProps={{ "aria-label": "Without label" }}
      className="titleFont"
      sx={style}
    >
      <MenuItem value="">Select Reservation Class</MenuItem>
      {options.map((o, i) => (
        <MenuItem key={i} value={o.value}>
          {o.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default ReservationClassSelectBox;
