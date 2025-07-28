import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
} from "@mui/material";
import { IBooking } from "@/types/bookingTypes";
import { colorConfig } from "@/configs/colorConfig";

const BookingTable = ({
  bookings,
  getStatusColor,
  handleOpen,
}: {
  bookings: IBooking[];
  getStatusColor: (
    status: IBooking["status"]
  ) => "default" | "error" | "info" | "success" | "warning";
  handleOpen: (booking: IBooking) => void;
}) => {
  const headers = [
    { name: "Hotel", width: 180 },
    { name: "Booking For", width: 180 },
    { name: "Start", width: 120 },
    { name: "End", width: 120 },
    { name: "Days", width: 80 },
    { name: "Price", width: 100 },
    { name: "Status", width: 100 },
    { name: "Guest", width: 80 },
    { name: "More", width: 100 },
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 3,
        boxShadow: "0 2px 16px rgba(60,60,60,0.07)",
        background: "#fff",
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f8f9fa" }}>
            {headers.map((header, index) => (
              <TableCell
                key={index}
                sx={{
                  fontWeight: 600,
                  color: "#555",
                  width: header.width,
                  fontSize: 14,
                }}
              >
                {header.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking, index) => (
            <TableRow
              key={index}
              hover
              sx={{
                transition: "background 0.2s",
                "&:hover": { backgroundColor: "#f5f7fa" },
              }}
            >
              <TableCell>
                {booking.hotelId.hotelName.slice(0, 16) + "..." || "Not Found"}
              </TableCell>
              <TableCell>
                {booking.reservationId.name.slice(0, 16) + "..." || "Not Found"}
              </TableCell>
              <TableCell>
                {new Date(booking.startingDate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(booking.expireDate).toLocaleDateString()}
              </TableCell>
              <TableCell>{booking.reservedDays}</TableCell>
              <TableCell>
                <span style={{ fontWeight: 500 }}>
                  {booking.reservationPrice} BDT
                </span>
              </TableCell>
              <TableCell>
                <Chip
                  label={
                    booking.status.charAt(0).toUpperCase() +
                    booking.status.slice(1)
                  }
                  color={getStatusColor(booking.status)}
                  size="small"
                  sx={{ fontWeight: 500, letterSpacing: 0.5 }}
                />
              </TableCell>
              <TableCell>{booking.isAsGuest ? "Yes" : "No"}</TableCell>
              <TableCell>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: 14,
                    px: 2,
                    py: 0.5,
                    borderColor: colorConfig.secondary,
                    color: colorConfig.secondary,
                    ":hover": {
                      borderColor: colorConfig.secondary,
                      color: colorConfig.secondary,
                    },
                  }}
                  onClick={() => handleOpen(booking)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookingTable;
