import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { style } from "@/utils/banner/bannerForm";
import { ILocation, locations } from "@/utils/locations";

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
      <MenuItem value="">Select Destination</MenuItem>
      {locations.map((l: ILocation, i: number) => (
        <MenuItem key={i} value={l.destination.label}>
          {l.destination.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default ReservationLocationSelectBox;
