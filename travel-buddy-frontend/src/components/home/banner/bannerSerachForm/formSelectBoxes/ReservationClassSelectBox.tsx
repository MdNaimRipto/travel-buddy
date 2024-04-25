import { style } from "@/utils/banner/bannerForm";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

const ReservationClassSelectBox = () => {
  const [reservationClass, setReservationClass] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setReservationClass(event.target.value);
  };

  return (
    <Select
      value={reservationClass}
      onChange={handleChange}
      displayEmpty
      name="reservationClass"
      inputProps={{ "aria-label": "Without label" }}
      className="titleFont"
      sx={{ borderRadius: "0px", ...style }}
    >
      <MenuItem value="">Select Reservation Class</MenuItem>
      <MenuItem value="first">First</MenuItem>
      <MenuItem value="second">Second</MenuItem>
      <MenuItem value="third">Third</MenuItem>
    </Select>
  );
};

export default ReservationClassSelectBox;
