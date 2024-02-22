import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { style } from "@/utils/banner/bannerForm";

const ReservationLocationSelectBox = () => {
  const [location, setLocation] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  return (
    <Select
      value={location}
      onChange={handleChange}
      displayEmpty
      name="reservationLocation"
      inputProps={{ "aria-label": "Without label" }}
      className="titleFont"
      sx={{ borderRadius: "100px 0px 0px 100px", ...style }}
    >
      <MenuItem value="">Select Reservation Location</MenuItem>
      <MenuItem value="Cox's Bazar">{`Cox's Bazar`}</MenuItem>
      <MenuItem value="Chattogram">Chattogram</MenuItem>
      <MenuItem value="Syllet">Syllet</MenuItem>
    </Select>
  );
};

export default ReservationLocationSelectBox;
