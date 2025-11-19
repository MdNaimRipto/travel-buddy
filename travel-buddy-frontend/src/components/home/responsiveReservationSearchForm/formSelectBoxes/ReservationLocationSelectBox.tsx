import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { style } from "@/utils/responsiveReservationSearchForm/responsiveReservationSearchForm";
import { locations, ILocation } from "@/utils/locations";

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
      sx={style}
    >
      <MenuItem value="">Select Destination</MenuItem>
      {locations.map((l: ILocation, i) => (
        <MenuItem key={i} value={l.destination.label}>
          {l.destination.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default ReservationLocationSelectBox;
