import { style } from "@/utils/banner/bannerForm";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

const ReservationTypeSelectBox = () => {
  const [type, setType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };

  return (
    <Select
      value={type}
      onChange={handleChange}
      displayEmpty
      name="reservationType"
      inputProps={{ "aria-label": "Without label" }}
      className="titleFont"
      sx={{ borderRadius: "0px", ...style }}
    >
      <MenuItem value="">Select Reservation Type</MenuItem>
      <MenuItem value="Single">Single</MenuItem>
      <MenuItem value="Couple">Couple</MenuItem>
      <MenuItem value="Family">Family</MenuItem>
    </Select>
  );
};

export default ReservationTypeSelectBox;
